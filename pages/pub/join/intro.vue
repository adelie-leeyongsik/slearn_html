<script setup>
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      school: "elementarySchool",
      showModal: false,
      showAlert: false,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <div class="account__body">
      <div class="login__list">
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
        >
          <img src="@img/logo-kakao.svg" alt="카카오톡 로고" />
          카카오로 가입하기
        </button>
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
        >
          <img src="@img/logo-naver.svg" alt="네이버 로고" />
          네이버로 가입하기
        </button>
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
        >
          <img src="@img/logo-digital.svg" alt="디지털원패스 로고" />
          디지털원패스로 가입하기
        </button>
        <div class="login__divider login__divider--type02">
          <p><span>또는</span></p>
        </div>
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
        >
          아이디로 가입하기
        </button>
      </div>
    </div>
    <div class="c-btn-group">
      <button class="c-btn c-btn-lg c-btn-danger">뒤로</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-btn-group {
  margin-top: 4rem;
}
</style>
