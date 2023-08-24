<script setup>
import { useModalStore } from "@/store";
import { uGetLoginInfo } from "@/utils";
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
  rematchType: "RE",
  rematchReason: "",
});

const isConfirm = ref(false);

const handleSubmitEvent = async () => {
  if (isConfirm.value === false) {
    const role = props.actionRole === "mentor" ? "멘티" : "멘토";
    const message = `재매칭을 신청하여 현재 ${role}와 멘토링을 중단합니다. 관리자 승인시 중단됩니다.\계속하시겠습니까?`;
    modal.confirm("알림", message, () => {
      isConfirm.value = true;
      return handleSubmitEvent();
    });
    return;
  }

  try {
    await call({
      id: "멘토링 관리 - 모달 재매칭 신청",
      endpoint: MENTORING_REMATCHING_SUBMIT,
      method: "put",
      data: params,
      onResponse: ({ status, message }) => {
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

const staticData = computed(() => {
  try {
    const { actionRole, ...keys } = props;

    const userName = uGetLoginInfo("usernm");

    switch (actionRole) {
      case "mentor":
        return {
          mentorName: userName,
          menteeName: keys.userName,
          mentoringDtm: keys.mentoringDtm,
          mentoringOrd: `${keys.ord} 회차`,
        };

      case "mentee":
        const {
          currentMentoring: { currentMentoringDtm, currentMentoringSeq },
        } = keys;
        return {
          mentorName: keys.mentorName,
          menteeName: userName,
          mentoringDtm: currentMentoringDtm,
          mentoringOrd: `${currentMentoringSeq} 회차`,
        };
    }
  } catch (err) {
    return {};
  }
});
</script>
<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          재매칭 사유 입력<button
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
            <label for="rematch-reason" class="c-form-label">재매칭 사유</label>
            <div class="c-input-group">
              <input
                id="rematch-reason"
                class="c-form-control"
                type="text"
                placeholder="재매칭 사유를 입력해주세요."
                v-model="params.rematchReason"
                required
              />
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click.prevent="$attrs.onClose()"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
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
