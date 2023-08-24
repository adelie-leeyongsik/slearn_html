<script setup>
definePageMeta({
  layout: "introduction",
});

const d = reactive({
  institutionItems: [
    {
      name: "K-MOOC",
      logo: "ic-introduction-logo01.png",
      desc: "좀더 다양한 학습콘텐츠와 서울시에서 제공하는 복지서비스를 한곳에 모으기 위해 서울시의 다양한 000에서 손을 내밀어주었어요.",
      link: "https://naver.com",
    },
    {
      name: "청년몽땅",
      logo: "ic-introduction-logo02.png",
      desc: "좀더 다양한 학습콘텐츠와 서울시에서 제공하는 복지서비스를 한곳에 모으기 위해 서울시의 다양한 000에서 손을 내밀어주었어요.",
      link: "https://naver.com",
    },
    {
      name: "서울시평생학습포털",
      logo: "ic-introduction-logo03.png",
      desc: "좀더 다양한 학습콘텐츠와 서울시에서 제공하는 복지서비스를 한곳에 모으기 위해 서울시의 다양한 000에서 손을 내밀어주었어요.",
      link: "https://naver.com",
    },
  ],
});
</script>
<template>
  <div class="introduction">
    <div class="introduction-site">
      <div class="introduction__head">
        <div class="c-text-title c-text-title-lg c-text-center">
          연계 사이트 소개
        </div>
        <img
          src="@img/ch-introduction05.svg"
          alt="연계 사이트 소개 케릭터 이미지"
        />
        <div class="introduction__title">
          혼자하기에는 너무 어려운 공부, <br />
          오직 나를 위한 멘토님과 함께 해볼까요?
        </div>
        <p class="introduction__title-sub">
          좀더 다양한 학습콘텐츠와 서울시에서 제공하는 복지서비스를 한 곳에
          모으기 위해 서울시의 다양한 연계사이트에서 손을 내밀어주었어요. <br />
          서울형교육플랫폼은 데이터들을 열심히 모아 학습자님들에게 도움이 될
          정보만 모아 걸러내고 추천하기 위해 노력하였어요.
        </p>
      </div>
      <div class="introduction__contents">
        <div class="introduction-site__list">
          <ul>
            <li v-for="{ name, logo, desc, link } in d.institutionItems">
              <div class="introduction-site__list-item">
                <div class="intrduction-site__list-item-img">
                  <img :src="uImage(logo)" :alt="`${name} 로고`" />
                </div>
                <div class="introduction-site__list-item-title">{{ name }}</div>
                <p>{{ desc }}</p>
                <a :href="link" target="_blank">바로가기</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
