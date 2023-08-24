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

const modal = useModalStore();

const { $dayjs } = useNuxtApp();
const router = useRouter();

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
  MENTORING: { MENTORING_SATISFACTION_FORM_LIST_OR_SUBMIT },
} = useAppConfig();

const staticList = reactive([]);
let dynamicList = reactive([]);

let previewParams = ref([]);

const bodyParams = reactive({
  memberType: null,
  questions: [],
});

const { handleSubmit, isSubmitting, ...form } = useForm({
  initialValues: {},
});

const handleFetchEvent = async () => {
  await call({
    id: "멘토링 관리 - 모달 만족도조사",
    endpoint: MENTORING_SATISFACTION_FORM_LIST_OR_SUBMIT,
    data: { ...props },
    onResponse: ({ data }) => {
      const { menteeName, mentorName, questions } = data;
      staticList.push(menteeName, mentorName);
      const _dynamicList = questions.slice();

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
            let refColumnValue = !isUndefined(refColumn)
              ? refColumn
              : uGenKey("survey");
            let rules = "required";
            let attrs = {};

            bodyParams.questions.push({
              refColumn: refColumnValue,
              qustSeq,
              answer: "",
              point: null,
              smtrIdx: props.smtrIdx,
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
    },
  });
};
const onLoadEvent = async () => {
  await handleFetchEvent();
};

const handleSubmitEvent = handleSubmit(
  async (data) => {
    try {
      const cp = { ...data };
      bodyParams.memberType = props.userType;

      Object.entries(cp).forEach(([key, value], index) => {
        const [target] = bodyParams.questions
          .slice()
          .filter(({ refColumn }) => {
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

      bodyParams.questions = bodyParams.questions.map(
        ({ refColumn, ...props }) => props
      );

      await call({
        id: "멘토링 관리 - 모달 만족도 조사 입력",
        endpoint: MENTORING_SATISFACTION_FORM_LIST_OR_SUBMIT,
        method: "post",
        data: bodyParams,
        onResponse: ({ message, status }) => {
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

const isDefaultInputs = computed(() => !isEmpty(previewParams.value));

await onLoadEvent();
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          만족도 조사<button
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
                    <label for="mentor-name" class="c-form-label">멘토명</label>
                    <input
                      id="mentor-name"
                      class="c-form-control"
                      type="text"
                      required
                      disabled
                      :value="staticList[1]"
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
