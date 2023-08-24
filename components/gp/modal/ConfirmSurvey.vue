<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

const DynamicComponents = {
  ONM: resolveComponent("OrganismSurveyONM"),
  EI: resolveComponent("OrganismSurveyEI"),
  GK: resolveComponent("OrganismSurveyGK"),
  DATE: resolveComponent("OrganismSurveyDate"),
};

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

const modal = useModalStore();
const { $dayjs } = useNuxtApp();

const {
  MENTORING: { MENTORING_LECTURE_FORM_LIST, MENTORING_LECTURE_FORM_VIEW_LIST },
} = useAppConfig();

const staticList = reactive([]);
let dynamicList = reactive([]);

let previewParams = ref([]);
const bodyParams = reactive({
  questions: [],
  details: [],
});

const isReadOnly = ref(false);
let bean = reactive([]);
const detailBean = reactive({});

const { handleSubmit: handleFirstSubmit, ...form } = useForm({
  initialValues: {},
});

const handleFetchEvent = async (_isReadOnly) => {
  try {
    let restPath = null;
    const params = {};
    if (isUndefined(_isReadOnly)) {
      // * 강의 계획서 작성
      restPath = MENTORING_LECTURE_FORM_LIST.replace(
        /{smtrIdx}/,
        props.smtrIdx
      );
    } else {
      // * 강의 계획서 보기
      isReadOnly.value = _isReadOnly;
      const { smtrIdx, seq } = props;
      restPath = MENTORING_LECTURE_FORM_VIEW_LIST.replace(
        /{smtrIdx}\/{seq}/g,
        `${smtrIdx}/${seq}`
      );
    }

    await call({
      id: "멘토링 관리 - 모달 강의 계획서",
      endpoint: restPath,
      data: params,
      onResponse: ({ data }) => {
        const {
          menteeName,
          menteeSubject,
          menteeSubjectEtc,
          questionInfo,
          isOffline,
          ...dataProps
        } = data;
        staticList.push(menteeName, menteeSubject, menteeSubjectEtc);
        Object.assign(detailBean, {
          ...dataProps,
        });
        const _dynamicList = questionInfo.slice();
        bean = [].concat(_dynamicList);
        dynamicList.push({
          itemType: "DATE",
          label: "멘토링 시작일 및 멘토링 시작시간",
          items: [],
          props: {
            refColumn: "MENTORING_DTM_AND_START_TIME",
            rules: "required",
          },
        });
        dynamicList = [].concat(
          dynamicList,
          _dynamicList.map(
            ({
              qustTypeCode,
              qustDesc,
              questionItems,
              refColumn,
              qustSeq,
              ...moreProps
            }) => {
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
                qustSeq,
                props: {
                  refColumn: refColumnValue,
                  rules,
                  isOffline,
                  attrs,
                },
              };
            }
          )
        );
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const handleReadOnlyFetchEvent = async () => {
  dynamicList = dynamicList.map(({ props, qustSeq, ...parentProps }) => {
    const a = bean.find(({ qustSeq: _qustSeq }) => qustSeq === _qustSeq);
    let value = "";
    if (!isUndefined(a?.answers)) {
      value = a?.answers.length > 1 ? a.answers : a.answers.shift().toString();
    }
    return {
      props: {
        ...props,
        value,
      },
      ...parentProps,
    };
  });

  const { detailStartDate, detailCurriculum, detailSeq } = detailBean;
  previewParams.value.push({
    ordLabel: `${detailSeq}회차`,
    detailStartDate: $dayjs(detailStartDate).format("YYYY-MM-DD HH:mm"),
    detailCurriculum,
  });
};
const onLoadEvent = async () => {
  try {
    await handleFetchEvent(props.isReadOnly);
    if (isReadOnly.value === true) {
      await handleReadOnlyFetchEvent();
    }
  } catch (err) {
    console.error(err);
  }
};

/*
 * MENTOR_DURATION = 1 ~ 3 (60분/30분/120분) = 16회차/32회차/8회차
 * WEEK = 1 ~ 7 (일 ~ 토)
 * */
const handleSubmitEvent = handleFirstSubmit(
  (data) => {
    const {
      MENTORING_DTM_AND_START_TIME,
      WEEK,
      MENTOR_DURATION,
      ...anotherProps
    } = data;

    Object.entries({
      MENTOR_DURATION,
      WEEK,
      ...anotherProps,
    }).forEach(([key, value], index) => {
      const [target] = bodyParams.questions.slice().filter(({ refColumn }) => {
        return refColumn === key;
      });

      if (!isUndefined(target)) {
        target.answer = Array.isArray(value)
          ? JSON.stringify(value).toString().replace(/\[|\]/g, "")
          : value;
      } else {
        bodyParams.questions[index].answer = value;
      }
    });

    const dtm = $dayjs(MENTORING_DTM_AND_START_TIME);

    let cnt = null;
    switch (MENTOR_DURATION) {
      case 1:
        cnt = 16;
        break;
      case 2:
        cnt = 32;
        break;
      case 3:
        cnt = 8;
        break;
    }

    const minWeekSize = 32;
    const dateIndexArray = WEEK.slice()
      .map((dIdx) => dIdx - 1)
      .sort((a, b) => a - b);

    let curriculumDtm = [];
    for (let i = 0; i <= minWeekSize; i += 1) {
      dateIndexArray.forEach((d) => {
        if (dtm.isBefore(dtm.day(d + 7 * i)) === true) {
          curriculumDtm.push({
            detailSeq: "",
            detailStartDate: dtm.day(d + 7 * i).format("YYYY-MM-DD HH:mm"),
            detailStartTime: "",
            detailCurriculum: "",
          });
        }
        return false;
      });
    }
    previewParams.value = [].concat(curriculumDtm.slice(0, cnt));
  },
  ({ errors }) => {
    const [target] = Object.entries(errors);
    const [fieldName, errorValue] = target;
    document.querySelector(`#${fieldName}`).focus();
  }
);

const handleCurriculumModifyEvent = () => {
  modal.confirm(
    "알림",
    "커리큘럼 수정 시 입력하신 내용은 모두 초기화 됩니다.<br/>계속 하시겠습니까?",
    () => {
      previewParams.value = [];
    }
  );
};

const isDefaultInputs = computed(
  () => !isEmpty(previewParams.value) || isReadOnly.value
);

await onLoadEvent();

provide("bodyParams", bodyParams);
provide("isReadOnly", isReadOnly.value);
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          강의 계획서<button
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
                    <label for="mentee-name" class="c-form-label">멘티명</label>
                    <input
                      id="mentee-name"
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
                    <label for="request-subject" class="c-form-label"
                      >신청 과목</label
                    >
                    <input
                      id="request-subject"
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
                    <label for="request-subject-etc" class="c-form-label"
                      >신청 과목 기타</label
                    >
                    <input
                      id="request-subject-etc"
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
                  :disabled="isDefaultInputs"
                />
              </template>
              <template v-if="isReadOnly !== true">
                <div class="c-modals__button">
                  <div class="c-btn-group">
                    <button
                      type="submit"
                      class="c-btn c-btn-primary c-btn-sm"
                      v-if="isDefaultInputs === false"
                    >
                      커리큘럼 입력
                    </button>
                    <button
                      type="button"
                      class="c-btn c-btn-primary c-btn-sm"
                      @click.prenvet="handleCurriculumModifyEvent"
                      v-else
                    >
                      커리큘럼 수정
                    </button>
                  </div>
                </div>
              </template>
            </form>
            <OrganismCurriculumForm
              v-if="!isEmpty(previewParams)"
              v-bind="{
                previewParams,
                isDefaultInputs,
                smtrIdx: props.smtrIdx,
              }"
              @close="$attrs.onClose()"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
