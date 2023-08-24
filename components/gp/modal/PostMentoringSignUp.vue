<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";
import * as yup from "yup";

const { show, props } = defineProps({
  show: {
    Type: Boolean,
    default: () => false,
  },
  props: {
    Type: Object,
    required: true,
  },
});

const attrs = useAttrs();
const router = useRouter();

const modal = useModalStore();

// 입력값중 validation시 필요한 항목
const inputData = reactive({
  mentoringType: "",
  subjectEtc: "",
})

const validationSchema = computed(() => {
  const resSchema = yup.object({
    mentoringType: yup.string().required(),
    requestArea1: (inputData.mentoringType === "OFF" ? yup.string().required() : ""),
    requestArea2: (inputData.mentoringType === "OFF" ? yup.string().required() : ""),
    subject: yup.string().required(),
    subjectEtc: (inputData.subjectEtc === "ET" ? yup.string().required().min(2) : ""),
    requestWeek: yup.string().required(),
    requestTime: yup.string().required(),
    menteeGrade: yup.string().required(),
    coachType: yup.string().required(),
    menteeTelNo1: yup.string().required(),
    menteeTelNo2: yup.string().required(),
    menteeTelNo3: yup.string().required(),
    menteeTelNo: "",
  });

  return resSchema;
});

const {
  handleSubmit, useFieldModel, setFieldValue, defineInputBinds 
} = useForm({
  initialValues: props || {
    mentoringType: "",
    requestArea1: "",
    requestArea2: "",
    subject: "",
    subjectEtc: "",
    requestWeek: "",
    requestTime: "",
    menteeGrade: "",
    coachType: "",
    menteeTelNo1: "",
    menteeTelNo2: "",
    menteeTelNo3: "",
    menteeTelNo: "",
  },
  validationSchema: validationSchema,
});

const [mentoringType, subject] = useFieldModel(["mentoringType", "subject"]);
const menteeTelNo1 = defineInputBinds("menteeTelNo1");
const menteeTelNo2 = defineInputBinds("menteeTelNo2");
const menteeTelNo3 = defineInputBinds("menteeTelNo3");

const {
  MENTORING: {
    MENOTRING_COMMON_CODE_IS_SUBMIT,
    MENTORING_MENTEE_MENTORING_SUBMIT,
    MENTORING_CYCLE_SUBMIT,
  },
} = useAppConfig();

const options = reactive({
  mentoringType: [],
  requestTime: [],
  requestWeek: [],
  coachType: [],
  area: [],
});

watch(mentoringType, (v) => {
  if (v === "ON") {
    setFieldValue("requestArea1", "");
    setFieldValue("requestArea2", "");
  }
});

const onLoadEvent = async () => {
  /**
   * MENTEE_MTRTYPE : 타입 (mentoringType)
   * MENTOR_AVTI : 시간 (requestTime)
   * MENTOR_AVWK : 주말 (requestWeek)
   * MENTOR_CCTP : 코칭유형(coachType)
   * MENTOR_DIST : 지역(area)
   */

  await call({
    id: "멘토링 관리 - 멘토링 신청 코드 조회 (for 멘티, 차상위)",
    endpoint: MENOTRING_COMMON_CODE_IS_SUBMIT,
    onResponse: ({ data }) => {
      const cpObj = { ...data };
      Object.entries(cpObj).forEach(([, obj]) => {
        const cp = { ...obj };
        switch (cp.cateId.toUpperCase()) {
          case "MENTEE_MTRTYPE":
            options.mentoringType.push(cp);
            break;
          case "MENTOR_AVTI":
            options.requestTime.push(cp);
            break;
          case "MENTOR_AVWK":
            options.requestWeek.push(cp);
            break;
          case "MENTOR_CCTP":
            options.coachType.push(cp);
            break;
          case "MENTOR_DIST":
            options.area.push(cp);
            break;
        }
      });
    },
  });
};

const handleSubmitEvent = handleSubmit(
  async (data) => {
    const props = {
      endpoint: isCycle.value
        ? MENTORING_CYCLE_SUBMIT  // 연장신청
        : MENTORING_MENTEE_MENTORING_SUBMIT,  // 멘토링신청
      method: isCycle.value ? "put" : "post",
    };

    const cp = { 
      ...data,
      ...{
        menteeTelNo: `${data.menteeTelNo1}-${data.menteeTelNo2}-${data.menteeTelNo3}`,
      }
    };

    // console.log(">>>>> cp", cp);
    await call({
      id: "멘토링 관리 - 멘토링 신청 (신청/연장신청) (for 멘티, 차상위)",
      ...props,
      data: cp,
      onResponse: ({ status, message }) => {
        // * 기획 정의 없음 화면 전환
        if (status !== 200) {
          modal.alert("알림", message);
          return;
        }
        router.go();
      },
    });
  },
  ({ errors }) => {
    // console.log(">>>>> errors", errors);
    if (errors.subjectEtc) {
      // subjectEtc must be at least 2 characters
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message:
          "기타 입력 글자가 2글자 이상이여야 합니다.<br/>확인 후 다시시도해주세요",
        buttons: [{ text: "확인", styleType: "danger" }],
      });
    } else {
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message:
          "신청서의 일부가 미작성되었습니다.<br/>확인 후다시 시도해주십시오.",
        buttons: [{ text: "확인", styleType: "danger" }],
      });
    }
  }
);

const handleUpdateField = (
  { target: { value } },
  fieldName,
  callback = false
) => {
  switch (fieldName) {
    case "handphone":
      if (callback !== false) {
        callback(setReplacePattern(value, "mentoring-form-handphone"));
      }

      break;
  }
};

const isCycle = computed(() => !isEmpty(props));

await onLoadEvent();
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg"></div>
      <div class="c-modals__inner scroll">
        <div class="c-modals__head">
          멘토링 신청하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <form
            @submit="handleSubmitEvent"
          >
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q1. 어디에서 멘토링을 하고 싶으신가요?
              </h3>
              <div class="c-form-check-group">
                <div class="c-form-check">
                  <Field
                    class="c-btn-check"
                    type="radio"
                    name="mentoringType"
                    id="online01"
                    v-model="inputData.mentoringType"
                    :value="options.mentoringType[0].codeId"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="online01"
                    >온라인으로 하고싶어요</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    class="c-btn-check"
                    type="radio"
                    name="mentoringType"
                    id="online02"
                    v-model="inputData.mentoringType"
                    :value="options.mentoringType[1].codeId"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="online02"
                    >만나서 하고싶어요</label
                  >
                </div>
              </div>
            </section>
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q1-1. 어디에서 만나실수 있나요?
              </h3>
              <div class="c-form-check-group">
                <Field
                  as="select"
                  name="requestArea1"
                  class="c-form-control"
                  :disabled="mentoringType === 'ON'"
                >
                  <option value="" selected disabled>가능지역1</option>
                  <option
                    :value="codeId"
                    v-for="{ codeId, codeName } in options.area"
                  >
                    {{ codeName }}
                  </option>
                </Field>
                <Field
                  as="select"
                  name="requestArea2"
                  class="c-form-control mt-0"
                  :disabled="mentoringType === 'ON'"
                  title="가능지역2"
                >
                  <option value="" selected disabled>가능지역2</option>
                  <option
                    :value="codeId"
                    v-for="{ codeId, codeName } in options.area"
                  >
                    {{ codeName }}
                  </option>
                </Field>
              </div>
            </section>
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q2. 어떤 과목을 멘토링 받고 싶으신가요?
              </h3>
              <div class="c-form-check-group c-form-check-group--col3">
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject01"
                    value="KO"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject01"
                    >국어</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject02"
                    value="EN"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject02"
                    >영어</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject03"
                    value="MA"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject03"
                    >수학</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject04"
                    value="SO"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject04"
                    >사회</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject05"
                    value="SC"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject05"
                    >과학</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject06"
                    v-model="inputData.subjectEtc"
                    value="ET"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject06"
                    >기타</label
                  >
                </div>
              </div>
              <Field
                v-if="subject === 'ET'"
                as="input"
                name="subjectEtc"
                type="text"
                class="c-form-control etc"
                placeholder="기타 내용을 입력해주세요."
                title="신청 과목 기타"
                @keydown.enter.prevent=""
              />
            </section>
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q3. 멘토링은 언제가 편하세요?
              </h3>
              <div class="c-form-check-group">
                <Field
                  as="select"
                  name="requestWeek"
                  class="c-form-control"
                  title="주간 시간대"
                >
                  <option value="" selected disabled>주간 시간대</option>
                  <option
                    :value="codeId"
                    v-for="{ codeId, codeName } in options.requestWeek"
                  >
                    {{ codeName }}
                  </option>
                </Field>
                <Field
                  as="select"
                  name="requestTime"
                  class="c-form-control mt-0"
                  title="일간 시간대"
                >
                  <option value="" selected disabled>일간 시간대</option>
                  <option
                    :value="codeId"
                    v-for="{ codeId, codeName } in options.requestTime"
                  >
                    {{ codeName }}
                  </option>
                </Field>
              </div>
            </section>
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q4. 교육 과정은 어느 과정을 듣고 싶으신가요??
              </h3>
              <div class="c-form-check-group c-form-check-group--col4">
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="menteeGrade"
                    id="course01"
                    value="MS"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="course01"
                    >중학교</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="menteeGrade"
                    id="course02"
                    value="H1"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="course02"
                    >고등 1학년</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="menteeGrade"
                    id="course03"
                    value="H2"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="course03"
                    >고등 2학년</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="menteeGrade"
                    id="course04"
                    value="H3"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="course04"
                    >고등 3학년</label
                  >
                </div>
              </div>
            </section>
            <section>
              <h3 class="c-modals__title c-modals__title-sm">
                Q5. 학습하는데 어떤 점을 개선하고 싶으신가요?
              </h3>
              <div class="c-form-check-group c-form-check-group--col1">
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="coachType"
                    id="problem01"
                    :value="options.coachType[0].codeId"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="problem01"
                    >혼자 공부하기 어려워요</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="coachType"
                    id="problem02"
                    :value="options.coachType[2].codeId"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="problem02"
                    >문제를 잘 못풀어요</label
                  >
                </div>
                <div class="c-form-check">
                  <Field
                    as="input"
                    class="c-btn-check"
                    type="radio"
                    name="coachType"
                    id="problem03"
                    :value="options.coachType[1].codeId"
                    @keydown.enter.prevent=""
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="problem03"
                    >무엇을 잘하는지 알고싶어요</label
                  >
                </div>
              </div>
            </section>
          <!-- 230621 section 추가 -->
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              <!-- 230727 텍스트 수정 -->
              Q6. 상담가능한 연락처를 입력해주세요.
            </h3>
            <!-- 230727 input 수정-->
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                v-bind="menteeTelNo1"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', menteeTelNo1.onInput)
                "
                @keydown.enter.prevent=""
                :maxlength="3"
                id="cellphone"
                title="상담받을 연락처 국번"
              />
              -
              <input
                class="c-form-control"
                type="text"
                v-bind="menteeTelNo2"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', menteeTelNo2.onInput)
                "
                @keydown.enter.prevent="return"
                :maxlength="4"
                title="상담받을 연락처 앞자리"
              />
              -
              <input
                class="c-form-control"
                type="text"
                v-bind="menteeTelNo3"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', menteeTelNo3.onInput)
                "
                @keydown.enter.prevent="return"
                :disabled="isLogin"
                :maxlength="4"
                title="상담받을 연락처 뒷자리"
              />
            </div>
          </section>
          <!-- // 230621 section 추가 -->
            <div class="c-modals__button">
              <div class="c-btn-group">
                <button
                  type="submit"
                  class="c-btn c-btn-blue"
                  @click.prevent="$attrs.onClose()"
                >
                  닫기
                </button>

                <button type="submit" class="c-btn c-btn-danger">신청</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-form-control.etc {
  margin-top: 0.8rem;
}
</style>
