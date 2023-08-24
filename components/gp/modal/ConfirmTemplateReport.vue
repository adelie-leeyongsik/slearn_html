<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

const DynamicComponents = {
  ONM: resolveComponent("OrganismSurveyONM"),
  EI: resolveComponent("OrganismSurveyEI"),
  GK: resolveComponent("OrganismSurveyGK"),
  DATE: resolveComponent("OrganismSurveyDate"),
  WHL: resolveComponent("OrganismSurveyWHL"),
  SELECT: resolveComponent("OrganismSurveySelect"),
  FJ: resolveComponent("OrganismSurveyFJ"),
  PRQ: resolveComponent("OrganismSurveyPRQ"),
};

const { $dayjs } = useNuxtApp();
const router = useRouter();

const modal = useModalStore();

const { show, props } = defineProps({
  show: {
    Type: Boolean,
    default: () => false,
  },
  props: {
    Type: Object,
    default: () => ({}),
  },
});

const {
  MESSAGE,
  MENTORING: { MENTORING_REPORT_READ_FORM, MENTORING_REPORT_FORM },
} = useAppConfig();

const staticList = reactive([]);
let dynamicList = reactive([]);

const queryStringParams = reactive({
  survPaperSeq: null,
  smtrIdx: null,
  smtdIdx: null,
  reportType: null,
});
const bodyParams = reactive({
  answers: [],
});
const reportType = ref(null);

const { handleSubmit, isSubmitting, ...form } = useForm({
  initialValues: {},
});

const handleFetchEvent = async () => {
  const { ord, smtdIdx } = props;

  try {
    await call({
      id: "멘토링 관리 - 모달 템플릿 보고서",
      endpoint: MENTORING_REPORT_READ_FORM.replace(/{smtdIdx}/, smtdIdx),
      onResponse: ({ data }) => {
        const { menteeName, questions, mentoringDtm, ...anotherProps } = data;
        reportType.value = anotherProps.reportType;
        const _dynamicList = questions.slice();

        switch (anotherProps.reportType) {
          case "CR": {  // 완료보고서
            const {
              menteeSchoolLevel,
              menteeSubject,
              menteeSubjectEtc,
              mentoringDetails,
            } = anotherProps;
            staticList.push(
              // { label: "멘토링 총 회차", value: `${ord}회차` },
              { label: "멘티명", value: menteeName },
              { label: "멘토링 학교급", value: menteeSchoolLevel },
              { label: "멘토링 과목", value: menteeSubject },
              { label: "멘토링 과목 기타", value: menteeSubjectEtc },
              {
                label: "멘토링 수행리스트",
                value: mentoringDetails.sort().join(`<br/>`).toString(),
                element: "textarea",
              }
            );
            break;
          }
          case "AR":  // 활동보고서
          case "A2":  // 활동보고서(120분)
          case "DR": {
            const { mentorName } = anotherProps;
            staticList.push(
              { label: "회차 정보", value: `${ord}회차` },
              { label: "진행일", value: mentoringDtm },
              { label: "멘티명", value: menteeName },
              { label: "멘토명", value: mentorName || props.mentorName }
            );
            break;
          }
        }

        Object.entries(anotherProps).forEach(([key, value]) => {
          if (!isUndefined(queryStringParams[key])) {
            queryStringParams[key] = value;
          }
        });

        queryStringParams.smtrIdx = props.smtrIdx;
        queryStringParams.smtdIdx = props.smtdIdx;

        dynamicList = [].concat(
          dynamicList,
          _dynamicList.map(
            ({
              qustTypeCode,
              qustDesc,
              questionItems,
              refColumn,
              qustSeq,
              submitSeq,
              qustDivSeq,
              answer,
            }) => {
              const itemType = getBuiltInComponentName(qustTypeCode);
              let refColumnValue = !isEmpty(refColumn)
                ? refColumn
                : uGenKey("learningReport");
              let rules = "required";
              let attrs = {};

              return {
                itemType,
                label: qustDesc,
                items: questionItems,
                props: {
                  refColumn: refColumnValue,
                  submitSeq,
                  qustDivSeq,
                  qustSeq,
                  rules,
                  attrs,
                  value: answer,
                },
              };
            }
          )
        );
      },
    });
  } catch (err) {}
};
const onLoadEvent = async () => {
  await handleFetchEvent();
};

const handleSubmitEvent = handleSubmit(
  async (data) => {
    try {
      Object.entries(data).forEach(([key, answer]) => {
        const cp = dynamicList.slice();
        const [target] = cp.filter(({ props }) => props.refColumn === key);
        const {
          props: { submitSeq, qustDivSeq, qustSeq },
        } = target;
        bodyParams.answers.push({
          submitSeq,
          qustDivSeq,
          qustSeq,
          answer,
        });
      });

      Object.assign(bodyParams, {
        ...queryStringParams,
      });

      await call({
        id: "멘토링 관리 - 모달 보고서 폼 재출",
        endpoint: MENTORING_REPORT_FORM,
        method: "post",
        data: bodyParams,
        onResponse: ({ status, message }) => {
          // * 기획 정의 없음 화면 전환
          if (status !== 200) {
            modal.alert("알림", message);
            return;
          }
          modal.alert("알림", MESSAGE.SUCCESS, () => router.go());
        },
      });
    } catch (err) {
      console.error(err);
    }
  },
  ({ errors }) => {
    const [target] = Object.entries(errors);
    const [fieldName, errorValue] = target;
    document.querySelector(`#${fieldName}`).focus();
  }
);

await onLoadEvent();

const title = computed(() => {
  try {
    switch (reportType.value.toUpperCase()) {
      case "CR":
        return "완료 보고서";
      case "AR":
      case "A2":
        return "활동 보고서";
      case "DR":
        return "심화활동 보고서";
    }
  } catch (err) {
    return "";
  }
});
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          {{ title }}
          <button
            class="c-modals__head-close"
            type="button"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__survey">
            <form @submit="handleSubmitEvent">
              <div
                class="c-modals__survey-col"
                v-for="(staticItem, staticIdx) in staticList"
                :key="`staticItem-${staticIdx}`"
              >
                <div class="c-modals__survey-col-item">
                  <div class="c-form-group">
                    <label
                      :for="`static-list-${staticIdx}`"
                      class="c-form-label"
                      >{{ staticItem.label }}</label
                    >
                    <template v-if="isUndefined(staticItem.element)">
                      <input
                        :id="`static-list-${staticIdx}`"
                        class="c-form-control"
                        type="text"
                        required
                        disabled
                        :value="staticItem.value"
                      />
                    </template>
                    <template v-else>
                      <div
                        class="c-form-control"
                        :id="`static-list-${staticIdx}`"
                        v-html="staticItem.value"
                        :style="{ height: 'auto' }"
                      ></div>
                    </template>
                  </div>
                </div>
              </div>
              <template v-for="({ itemType, ...comp }, compIdx) in dynamicList">
                <component
                  :is="DynamicComponents[itemType]"
                  v-bind="{ ...comp }"
                  :name="comp.props.refColumn"
                  :id="comp.props.refColumn"
                  :tabIndex="compIdx"
                />
              </template>
              <div class="c-modals__button">
                <div class="c-btn-group">
                  <button
                    type="button"
                    class="c-btn c-btn-primary"
                    @click.prevent="$attrs.onClose()"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    class="c-btn c-btn-primary"
                    :disabled="isSubmitting"
                  >
                    등록
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
