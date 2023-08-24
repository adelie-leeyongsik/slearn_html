<script setup>
import { useLoginStore } from "@/store";

const login = useLoginStore();

definePageMeta({
  layout: "account",
});
</script>

<template>
  <div class="account">
    <h1>아이디 찾기</h1>
    <div class="account__body">
      <div class="account__title">회원님의 아이디 입니다.</div>
      <div class="find__id">{{ doMasking(login.findId, 2) }}</div>
      <div class="c-text-caution">
        비밀번호가 기억나지않는 경우 비밀번호 재설정 후 로그인해주세요.
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          to="/find-pw"
          replace
          styleType="blue"
          sizeType="large"
          size="auto"
          text="비밀번호 찾기"
        />
        <Button
          to="/login"
          replace
          sizeType="large"
          styleType="danger"
          size="auto"
          text="로그인 하기"
        />
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
