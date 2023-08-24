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
  MENTORING: {
    MENTORING_DEEP_LEARNING_FORM_LIST,
    MENTORING_DEEP_LEARNING_FORM_SUBMIT,
  },
} = useAppConfig();

const staticList = reactive([]);
let dynamicList = reactive([]);

const bodyParams = reactive({
  smtrIdx: props.smtrIdx,
  questions: [],
  detail: {
    detailSeq: "",
    detailStartDate: "",
    detailStartTime: "",
    detailCurriculum: "",
  },
});

const { handleSubmit, isSubmitting, ...form } = useForm({
  initialValues: {},
});

const handleFetchEvent = async () => {
  await call({
    id: "멘토링 관리 - 모달 심화 활동",
    endpoint: MENTORING_DEEP_LEARNING_FORM_LIST.replace(
      /{smtrIdx}/,
      props.smtrIdx
    ),
    onResponse: ({ data }) => {
      const {
        menteeName,
        menteeSubject,
        menteeSubjectEtc,
        questionInfo,
        maxSeq,
      } = data;
      staticList.push(menteeName, menteeSubject, menteeSubjectEtc);
      const _dynamicList = questionInfo.slice();
      const minSeq = 5;
      dynamicList.push(
        {
          itemType: "SELECT",
          label: "심화활동 진행회차",
          items: Array(maxSeq)
            .fill(false)
            .map((b, i) => ({ text: `${minSeq + i}회차`, value: minSeq + i })),
          props: {
            refColumn: "DEEP_LEARNING_SEQ",
            rules: "required",
          },
        },
        {
          itemType: "DATE",
          label: "심화활동 날짜 및 시작시간",
          items: [],
          props: {
            refColumn: "DEEP_LEARNING_DTM",
            rules: "required",
          },
        }
      );
      dynamicList = [].concat(
        dynamicList,
        _dynamicList.map(
          ({ qustTypeCode, qustDesc, questionItems, refColumn, qustSeq }) => {
            const itemType = getBuiltInComponentName(qustTypeCode);
            let refColumnValue = !isEmpty(refColumn)
              ? refColumn
              : uGenKey("survey");
            let rules = "required";
            let attrs = {};

            bodyParams.questions.push({
              qustSeq,
              refColumn,
              answer: "",
            });

            return {
              itemType,
              label: qustDesc,
              items: questionItems,
              props: {
                refColumn: refColumnValue,
                rules,
                attrs,
              },
            };
          }
        )
      );
      dynamicList.push({
        itemType: "WHL",
        label: "세부계획",
        items: [],
        props: {
          refColumn: "DETAIL_CURRICULUM",
          rules: "required",
        },
      });
    },
  });
};
const onLoadEvent = async () => {
  await handleFetchEvent();
};

/*
 * MENTOR_DURATION = 1 ~ 3 (60분/30분/120분) = 16회차/32회차/8회차
 * WEEK = 1 ~ 7 (일 ~ 토)
 * */
const handleSubmitEvent = handleSubmit(
  async (data) => {
    try {
      const {
        DEEP_LEARNING_SEQ,
        DEEP_LEARNING_DTM,
        DETAIL_CURRICULUM,
        ...props
      } = data;
      const dtm = $dayjs(DEEP_LEARNING_DTM);

      Object.assign(bodyParams, {
        detail: {
          detailSeq: DEEP_LEARNING_SEQ,
          detailStartDate: dtm.clone().format("YYYYMMDDHHmmss"),
          detailStartTime: dtm.clone().format("HH:mm"),
          detailCurriculum: DETAIL_CURRICULUM,
        },
      });

      Object.entries(props).map(([key, value], index) => {
        bodyParams.questions[index].answer = value;
      });

      await call({
        id: "멘토링 관리 - 모달 심화 활동 등록",
        endpoint: MENTORING_DEEP_LEARNING_FORM_SUBMIT,
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
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          심화활동 계획서<button
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
              <div class="c-modals__survey-col">
                <div class="c-modals__survey-col-item">
                  <div class="c-form-group">
                    <label for="name" class="c-form-label">멘티명</label>
                    <input
                      id="name"
                      class="c-form-control"
                      type="text"
                      required
                      disabled
                      :value="staticList[0]"
                    />
                  </div>
                </div>
              </div>
              <div class="c-modals__survey-col">
                <div class="c-modals__survey-col-item">
                  <div class="c-form-group">
                    <label for="subject" class="c-form-label">신청 과목</label>
                    <input
                      id="subject"
                      class="c-form-control"
                      type="text"
                      required
                      disabled
                      :value="staticList[1]"
                    />
                  </div>
                </div>
              </div>
              <div class="c-modals__survey-col">
                <div class="c-modals__survey-col-item">
                  <div class="c-form-group">
                    <label for="subject-etc" class="c-form-label"
                      >신청 과목 기타</label
                    >
                    <input
                      id="subject-etc"
                      class="c-form-control"
                      type="text"
                      required
                      disabled
                      :value="staticList[2]"
                    />
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
                  <button type="submit" class="c-btn c-btn-primary">
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
