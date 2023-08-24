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
          SNS 계정 연동
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">SNS 계정과 연동할 수 있어요</div>
          <div class="login__list">
            <button
              type="button"
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
            >
              <img src="@img/logo-naver.svg" alt="네이버 로고" />
              네이버계정으로 로그인
            </button>
            <button
              type="button"
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
            >
              <img src="@img/logo-kakao.svg" alt="카카오톡 로고" />
              카카오계정으로 로그인
            </button>
            <button
              type="button"
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
            >
              <img src="@img/logo-digital.svg" alt="디지털원패스 로고" />
              디지털원패스로 로그인
            </button>
            <button
              type="button"
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
            >
              SNS 연동하지않고 가입하기
            </button>
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
