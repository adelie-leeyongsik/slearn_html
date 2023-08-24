<script setup>
definePageMeta({
  layout: "account",
});

const router = useRouter();

const d = reactive({
  socialButtons: [
    {
      type: "naver",
      text: "네이버계정으로 로그인",
      alt: "네이버 로고",
    },
    {
      type: "kakao",
      text: "카카오계정으로 로그인",
      alt: "카카오톡 로고",
    },
    // {
    //   type: "onepass",
    //   text: "디지털원패스로 로그인",
    //   alt: "디지털원패스 로고",
    // },
  ],
});

const onClickSocialJoin = (type) => {
  console.log("type ", type);
};

const onClickJoin = () => {
  router.push("/join/qualification");
};

const goBack = () => {
  router.push("/login");
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <div class="account__body">
      <div class="login__list">
        <Button
          v-for="{ type, text, src, alt } in d.socialButtons"
          class="c-btn-outline-secondary"
          sizeType="large"
          :text="text"
          @click="onClickSocialJoin(type)"
        >
          <template v-slot:before>
            <img :src="uImage(`logo-${type}.svg`)" :alt="alt" />
          </template>
        </Button>
        <div class="login__divider login__divider--type02">
          <p><span>또는</span></p>
        </div>
        <Button
          class="c-btn-outline-secondary"
          sizeType="large"
          text="아이디로 가입하기"
          @click="onClickJoin"
        >
        </Button>
      </div>
    </div>
    <div class="c-btn-group">
      <button class="c-btn c-btn-lg c-btn-danger" @click="goBack">뒤로</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-btn-group {
  margin-top: 4rem;
}
</style>
