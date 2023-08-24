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

const {
  MESSAGE,
  MENTORING: { MENTORING_CHANGE_SCHEDULE_FOR_MENTEE },
} = useAppConfig();

const nowDate = ref($dayjs().format("YYYY-MM-DD") + " 00:00:00");
const maxDate = computed(() => {
  return props?.nextMentoringDtm ? $dayjs(props.nextMentoringDtm).subtract(1, "day").format("YYYY-MM-DD") + " 23:59:59" : null;
});

const { handleSubmit, useFieldModel, isSubmitting } = useForm({
  validationSchema: {
    reqReason: "requiredField:2",
    applyDate: "required",
  },
  initialValues: {
    reqReason: "",
    applyDate: $dayjs().format("YYYY-MM-DD HH:mm"),
  },
});

const [reqReason, applyDate] = useFieldModel(["reqReason", "applyDate"]);

const handleSubmitEvent = handleSubmit(
  async ({ applyDate, ...anotherProps }) => {
    try {
      const cpData = { ...anotherProps };

      const dtm = $dayjs(applyDate);

      Object.assign(cpData, {
        reqApplyTime: dtm.clone().format("HH:mm"),
        reqApplyDate: dtm.clone().format("YYYY.MM.DD"),
        smtdIdx: props.currentMentoring.currentMentoringDetailIdx,
      });

      if ($dayjs(applyDate) > $dayjs() === false) {
        modal.alert("알림", MESSAGE.IS_SCHEDULE_VALID_MIN_DATE);
        return;
      }

      // 다음일정 전일 자정까지 종료되야 가능
      if (props.nextMentoringDtm) {
        const posibleReqDtm = $dayjs($dayjs(props.nextMentoringDtm, DATE_3U).format(DATE_3U)).subtract(props.currentMentoring.currentMentoringDuration, "minute");
        if ($dayjs(applyDate) > posibleReqDtm) {
          modal.alert("알림", `${posibleReqDtm.format(DATE_5U)} 까지 변경 가능합니다.<br/>확인 후 다시 시도해주세요.`);
          return;
        }
      }

      await call({
        id: "멘토링 관리 - 모달 일정변경 (멘티)",
        endpoint: MENTORING_CHANGE_SCHEDULE_FOR_MENTEE,
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

const onLoadEvent = async () => {};

onMounted(() => {
  document.getElementsByName("datePicker")[0].setAttribute("title", "변경 요청 일자를 입력하세요");
});

await onLoadEvent();

const staticData = computed(() => {
  try {
    const { actionRole, ...keys } = props;

    const userName = uGetLoginInfo("usernm");
    const {
      currentMentoring: { currentMentoringDtm, currentMentoringSeq },
    } = keys;
    return {
      mentorName: keys.mentorName,
      menteeName: userName,
      mentoringDtm: $dayjs(currentMentoringDtm).format("YYYY. MM. DD HH:mm"),
      mentoringOrd: `${currentMentoringSeq} 회차`,
    };
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
                  v-model="applyDate"
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
                :dlsabed="isSubmitting"
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
