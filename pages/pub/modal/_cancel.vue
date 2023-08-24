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
          취소 사유 입력<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
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
                required
              />
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
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
