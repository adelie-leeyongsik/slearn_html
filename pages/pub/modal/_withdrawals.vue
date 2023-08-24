<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          회원탈퇴
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            회원을 탈퇴할 경우
            <span class="c-text-primary">6개월간 재가입</span>이
            불가능합니다.<br />
            또한 6개월 이후에는 모든 이력이 삭제되며, 복구할 수 없습니다.
          </div>
          <div class="c-form-group">
            <label for="reason" class="c-form-label">탈퇴사유</label>
            <select id="reason" class="c-form-control">
              <option value="" disabled selected>탈퇴</option>
              <option value="">사유</option>
            </select>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                취소
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
