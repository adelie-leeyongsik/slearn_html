<script setup>
definePageMeta({
  layout: "account",
});

const router = useRouter();

const p = defineProps({
  data: { default: null },
});

const goLogin = () => {
  router.push("/login");
};

const goMain = () => {
  router.push("/");
};
</script>
<template>
  <div class="account">
    <h1>회원가입</h1>
    <div
      class="account__body join__complete"
      v-if="isEqual(p.data, 'JOIN_S003')"
    >
      <div class="join__complete-title">가입을 축하 드립니다.</div>
      <p>
        서울런에서 나만의 학습을 할 수 있어요. <br />
        로그인 이후 서비스 이용이 가능합니다.
      </p>
      <img src="@img/ch-management.svg" alt="가입을 축하 드립니다." />
    </div>

    <div
      class="account__body join__complete"
      v-else-if="isEqual(p.data, 'JOIN_S001')"
    >
      <div class="join__complete-title">가입 신청이 완료 되었습니다.</div>
      <p>
        관리자의 서류심사 이후 결과를 안내 드리도록 하겠습니다. <br />
        승인 전 서울런에서 제공하는 다양한 혜택을 미리 구경해볼까요?
      </p>
      <img src="@img/ch-management.svg" alt="가입을 축하 드립니다." />
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          text="메인 화면으로 가기"
          @click="goMain"
        />
        <Button
          size="auto"
          sizeType="large"
          styleType="danger"
          text="로그인 하기"
          @click="goLogin"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
