<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emit = defineEmits(["request"]);
const modal = useModalStore();
const router = useRouter();
const {
  MENTORING: { MENTORING_ACTIVITY_CERTIFICATE_REQ },
} = useAppConfig();
const { $dayjs } = useNuxtApp();
const { DATE_3U } = useAppConfig();

const { show } = defineProps({
  show: {
    Type: Boolean,
    default: () => false,
  },
});

const nowDt = new Date();
const data = reactive({
  startDt: nowDt,  // 발급요청 시작일
  endDt: nowDt,    // 발급요청 종료일
});

watch(
  () => data.endDt,
  (newVal) => {
    if (newVal < data.startDt) {
      data.startDt = newVal;
    }
  }
);

const handleSubmitEvent = async () => {
  if (!data.startDt || !data.endDt) {
    modal.alert("알림", "증명서 신청 기간은 필수 입니다.<br/>확인 후 다시 시도해주시길 바랍니다.");
    return;
  }
  
  modal.confirm("알림", "신청하신 기간으로 활동증명서가 신청됩니다.<br/>관리자 검토 후 활동 증명서가 출력이 가능합니다.<br/>계속하시겠습니까?", async () => {
    await call({
        id: "멘토 활동증명서 발급 요청",
        endpoint: MENTORING_ACTIVITY_CERTIFICATE_REQ,
        method: "post",
        data: {
          startDt: $dayjs(data.startDt).format("YYYYMMDD"),
          endDt: $dayjs(data.endDt).format("YYYYMMDD"),
        },
        onResponse: ({ status, message }) => {
          if (status === 200) {
            modal.alert("알림", "신청되었습니다.", () => {
              emit("request");
            });
          } else {
            modal.alert("알림", message);
            return;
          }
        },
      });
  });
};

</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          활동 증명서 신청
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            활동 증명서는 1년에 1회만 신청이 가능합니다.
          </div>
          <p>활동증명서를 신청하실 기간을선택해주세요.</p>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">증명서 기간</div>
                <div
                  class="c-input-group c-input-group--calendar c-input-group--calendar--type02"
                >
                  <div>
                    <VueDatePicker
                      name="datePicker"
                      v-model="data.startDt"
                      format="yyyy.MM.dd"
                      locale="ko"
                      class="date"
                      :enable-time-picker="false"
                      minutes-grid-increment="1"
                      :auto-apply="true"
                      :clearable="false"
                      :teleport="true"
                      hide-input-icon
                      placeholder="증명서 신청 시작일"
                      :maxDate="data.endDt"
                    />
                  </div>
                  <div>
                    <VueDatePicker
                      name="datePicker"
                      v-model="data.endDt"
                      format="yyyy.MM.dd"
                      locale="ko"
                      class="date"
                      :enable-time-picker="false"
                      minutes-grid-increment="1"
                      :auto-apply="true"
                      :clearable="false"
                      :teleport="true"
                      hide-input-icon
                      placeholder="증명서 신청 종료일"
                      :maxDate="nowDt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$attrs.onClose()"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="handleSubmitEvent"
              >
                신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
