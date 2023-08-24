<script setup>
import { useModalStore } from "@/store";
import { uGetLoginInfo } from "@/utils";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

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

const { $dayjs } = useNuxtApp();
const { DATE_3U, DATE_5U } = useAppConfig();
const attrs = useAttrs();
const reqReasonRef = ref(null);
const modal = useModalStore();
const router = useRouter();

const courseType = ref(null);

const {
  MESSAGE,
  MENTORING: { MENTORING_CHANGE_SCHEDULE_FOR_MENTOR },
} = useAppConfig();

const nowDate = ref($dayjs().format("YYYY-MM-DD") + " 00:00:00");
const maxDate = computed(() => {
  return props?.nextMentoringDtm ? $dayjs(props.nextMentoringDtm).subtract(1, "day").format("YYYY-MM-DD") + " 23:59:59" : null;
});

const { handleSubmit, useFieldModel, isSubmitting, meta } = useForm({
  validationSchema: {
    reqType: "required",
    reqReason: "requiredField:2",
    reqDtm: "required",
  },
  initialValues: {
    reqType: "",
    reqReason: "",
    reqDtm: $dayjs().format("YYYY-MM-DD HH:mm"),
  },
});

const [reqType, reqReason, reqDtm] = useFieldModel([
  "reqType",
  "reqReason",
  "reqDtm",
]);

const handleSubmitEvent = handleSubmit(
  async ({ reqDtm, ...anotherProps }) => {
    try {
      const cpData = { ...anotherProps };

      const dtm = $dayjs(reqDtm);
      const { ord, mentoringDetails } = props;

      const [target] = mentoringDetails
        .slice()
        .filter(({ ord: _ord }) => ord === _ord);

      Object.assign(cpData, {
        reqDtm: dtm.clone().format("YYYYMMDDHHmmss"),
        smtdIdx: target.smtdIdx,
      });

      if ($dayjs(reqDtm) > $dayjs() === false) {
        modal.alert("알림", MESSAGE.IS_SCHEDULE_VALID_MIN_DATE);
        return;
      }

      // 다음일정 전일 자정까지 종료되야 가능
      if (props.nextMentoringDtm) {
        const posibleReqDtm = $dayjs($dayjs(props.nextMentoringDtm, DATE_3U).format(DATE_3U)).subtract(props.mentorDuration, "minute");
        if ($dayjs(reqDtm) > posibleReqDtm) {
          modal.alert("알림", `${posibleReqDtm.format(DATE_5U)} 까지 변경 가능합니다.<br/>확인 후 다시 시도해주세요.`);
          return;
        }
      }
      

      await call({
        id: "멘토링 관리 - 모달 일정변경 (멘토)",
        endpoint: MENTORING_CHANGE_SCHEDULE_FOR_MENTOR,
        method: "post",
        data: cpData,
        onResponse: ({ status, message }) => {
          if (status === 200) {
            modal.alert("알림", "일정변경 요청 등록이 완료되었습니다", () =>
              router.go()
            );
            return;
          }
          modal.alert("알림", message);
        },
      });
    } catch (err) {
      console.error(err);
    }
  },
  ({ errors }) => {
    const { reqReason } = errors;
    if (reqReason === "required:2") {
      modal.alert("알림", "변경내용을 입력 후 다시 시도해주시길 바랍니다", () =>
        reqReasonRef.value.focus()
      );
    }
  }
);

const onLoadEvent = async () => {
  const { courseType: _courseType } = props;
  courseType.value = _courseType;
  if (courseType.value === "ON") {
    reqType.value = "D";
  }
};

onMounted(() => {
  document.getElementsByName("datePicker")[0].setAttribute("title", "변경 요청 일자를 입력하세요");
});

await onLoadEvent();

const staticData = computed(() => {
  try {
    const { actionRole, courseType, ...keys } = props;
    const userName = uGetLoginInfo("usernm");
    const res = {
      mentorName: userName,
      menteeName: keys.userName,
      mentoringDtm: keys.mentoringDtm,
      mentoringOrd: `${keys.ord} 회차`,
    };
    if (courseType.toString().toUpperCase() === "OFF") {
      Object.assign(res, {
        mentoringLocation: keys.mentoringLocation,
      });
    }

    return res;
  } catch (err) {
    return {};
  }
});
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-show="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          일정 / 장소변경 요청<button
            class="c-modals__head-close"
            type="submit"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__box">
            <dl>
              <dt>멘토</dt>
              <dd>{{ staticData?.mentorName }}</dd>
            </dl>
            <dl>
              <dt>멘티</dt>
              <dd>{{ staticData?.menteeName }}</dd>
            </dl>
            <dl>
              <dt>멘토링 예정일</dt>
              <dd>{{ staticData?.mentoringDtm }}</dd>
            </dl>
            <dl>
              <dt>멘토링 주차</dt>
              <dd>{{ staticData?.mentoringOrd }}</dd>
            </dl>
            <dl v-if="courseType === 'OFF'">
              <dt>멘토 예정장소</dt>
              <dd>{{ staticData?.mentoringLocation }}</dd>
            </dl>
          </div>
          <div class="c-form-group" v-if="courseType === 'OFF'">
            <label for="changeCheck01" class="c-form-label"
              >장소 변경요청유무</label
            >
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="changeCheck"
                  id="changeCheck01"
                  v-model="reqType"
                  value="L"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="changeCheck01"
                  >변경하기</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="changeCheck"
                  id="changeCheck02"
                  v-model="reqType"
                  value="D"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="changeCheck02"
                  >변경하지않기</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">변경 요청내용</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="변경 요청일 / 장소 변경 요청 내용을 작성해주세요."
                name="reqReason"
                ref="reqReasonRef"
                v-model="reqReason"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="change-date" class="c-form-label">변경 요청 일자</label>
            <div
              class="c-input-group c-input-group--type03 c-input-group--calendar"
              :style="{ overflow: 'unset' }"
            >
              <div>
                <VueDatePicker
                  name="datePicker"
                  v-model="reqDtm"
                  format="yyyy.MM.dd HH:mm"
                  locale="ko"
                  class="date"
                  :enable-time-picker="true"
                  time-picker-inline
                  minutes-grid-increment="1"
                  :auto-apply="true"
                  :clearable="false"
                  :teleport="true"
                  hide-input-icon
                  placeholder="변경 요청 날짜"
                  :minDate="nowDate"
                  :maxDate="maxDate"
                />
              </div>
              <!-- <DatePicker
                v-model="reqDtm"
                mode="datetime"
                is24hr
                :minDate="nowDate"
                :maxDate="maxDate"
                :rules="datePickerRules"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    id="change-date"
                    class="c-input-calendar"
                    :value="inputValue"
                    readonly
                    @click.stop="togglePopover()"
                    title="변경 요청 날짜"
                  />
                </template>
              </DatePicker> -->
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="button"
                class="c-btn c-btn-primary"
                @click.prevent="$attrs.onClose()"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click.prevent="handleSubmitEvent"
                :disabled="isSubmitting"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
