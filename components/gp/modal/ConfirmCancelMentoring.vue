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

const attrs = useAttrs();
const router = useRouter();
const modal = useModalStore();

const {
  MESSAGE,
  MENTORING: { MENTORING_REMATCHING_SUBMIT },
} = useAppConfig();

const params = reactive({
  smtrIdx: isUndefined(props.smtrIdx)
    ? props.currentMentoring.currentMentoringIdx
    : props.smtrIdx,
  rematchType: "CC",
  rematchReason: "",
});

const isConfirm = ref(false);

const handleSubmitEvent = async () => {
  if (isConfirm.value === false) {
    modal.open({
      key: uGenKey("mentoringConfirm"),
      type: "alert",
      title: "알림",
      message: "멘토링을 취소하실 경우 멘토링 서비스를 이용하실 수 없고 현재 멘토링 또한 취소됩니다. 멘토링 서비스를 취소하시겠습니까?",
      buttons: [
        {
          text: "확인",
          styleType: "danger",
          onConfirm: () => {
            isConfirm.value = true;
            return handleSubmitEvent();
          },
        },
        { text: "취소", styleType: "blue" },
      ],
    });
    return;
  }
  try {
    await call({
      id: "멘토링 관리 - 모달 멘토링 취소",
      endpoint: MENTORING_REMATCHING_SUBMIT,
      method: "put",
      data: params,
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
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          취소 사유 입력<button
            class="c-modals__head-close"
            type="submit"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">멘토링 전체 취소</div>
          <p>
            멘토링 서비스를 취소합니다. 멘토링 서비스가 모두 취소되며, <br />
            다시 신청하실 경우 멘토링 대기가 필요합니다.<br />
            취소하시길 원하실 경우 사유를 작성 후 등록해주세요
          </p>
          <div class="c-form-group">
            <label for="title" class="c-form-label">취소 사유</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="취소 사유를 입력해주세요."
                v-model="params.rematchReason"
                required
              />
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
