<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

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

const {
  MESSAGE,
  MENTORING: { MENTORING_SEND_SMS },
} = useAppConfig();

const router = useRouter();
const modal = useModalStore();
const data = reactive({
  smtrIdx: props.smtrIdx,
  payload: "",
});
const handleSmsSendEvent = async () => {
  try {
    await call({
      id: "멘토링 관리 - 모달 문자 보내기",
      endpoint: MENTORING_SEND_SMS.replace(/{role}/, props.segment),
      method: "post",
      data,
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
    console.log(err);
  }
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          SMS 발송
          <button
            class="c-modals__head-close"
            type="submit"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <form>
          <div class="c-modals__contents">
            <textarea
              class="c-form-control"
              placeholder="내용을 입력하세요.(문자의 발신자 번호는 “1533-0909”로 발송됩니다.)"
              required
              v-model="data.payload"
              title="SMS 발송"
            ></textarea>
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
                  @click.prevent="handleSmsSendEvent"
                >
                  SMS 발송
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
