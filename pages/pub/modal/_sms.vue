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
          SMS 발송
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <textarea
            class="c-form-control"
            placeholder="내용을 입력하세요.
(문자의 발신자 번호는 “1533-0909”로 발송됩니다.)"
            title="SMS 발송"
          ></textarea>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                SMS 발송
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
textarea.c-form-control::placeholder {
  white-space: pre-wrap;
}
</style>
