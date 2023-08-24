<script>
definePageMeta({
  layout: "account",
});
</script>

<template>
  <div class="account">
    <h1>아이디 찾기</h1>
    <div class="account__body">
      <div class="account__title">홍길동님의 아이디 입니다.</div>
      <div class="find__id">abc1234@naver.com</div>
      <div class="c-text-caution">
        개인정보 도용에 대한 피해방지를 위하여 아이디 끝 두자리는 **처리합니다.
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-blue">비밀번호 찾기</button>
        <button class="c-btn c-btn-lg c-btn-danger">로그인</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__title {
    text-align: center;
  }
}
.find {
  &__id {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    border-top: 0.1rem solid $secondary;
    border-bottom: 0.1rem solid $secondary;
    color: $danger;
    font-size: 2rem;
    font-weight: 700;
  }
}
</style>
