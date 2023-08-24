<script setup>
import Guide from "./interestGuide";
import Popup from "./recommendPopup";

const router = useRouter();

const d = reactive({
  userId: uGetLoginInfo("userid"),
  interestSub: false,
  isPopGuide: false,
  isPopRecomm: false,
});

const goRecommend = (key) => {
  router.push({ path: "/interest/chatting", query: { type: key } }).then(() => {
    router.go(0);
  });
};

const openGuide = () => {
  d.isPopGuide = true;
};

const closeGuide = () => {
  d.isPopGuide = false;
};

const openRecommendPop = () => {
  d.isPopRecomm = true;
};

const closeRecommendPop = () => {
  d.isPopRecomm = false;
};
</script>
<template>
  <Guide :isPopShow="d.isPopGuide" @close="closeGuide" v-if="d.isPopGuide" />
  <Popup
    :isShow="d.isPopRecomm"
    @close="closeRecommendPop"
    v-if="d.isPopRecomm"
  />
  <div class="interest__snb" :class="{ active: d.interestSub === true }">
    <div class="interest__snb-box">
      <div
        class="interest__snb-box--title"
        @click="d.interestSub = !d.interestSub"
      >
        추가 질문도<br class="c-pc" />
        가능해요!
      </div>
      <ul class="interest__snb-box--menu">
        <li>
          <a href="javascript:void(0)" @click="openGuide">
            <i class="ico ico-message--round">말풍선 이미지</i>
            사용방법 알려줘
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="goRecommend('10')">
            <i class="ico ico-message--round">말풍선 이미지</i>
            요즘 뜨고 있는 인기 강좌
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="goRecommend('11')">
            <i class="ico ico-message--round">말풍선 이미지</i>
            사람들이 많이 보는<br class="c-pc" />
            공연 보여줘
          </a>
        </li>
        <li v-if="!isEmpty(d.userId)">
          <a href="javascript:void(0)" @click="openRecommendPop">
            <i class="ico ico-message--round">말풍선 이미지</i>
            저도 강의 추천할게요
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="goRecommend('12')">
            <i class="ico ico-message--round">말풍선 이미지</i>
            고객센터 문의
          </a>
        </li>
      </ul>
    </div>
    <div class="interest__snb-box">
      <ul class="interest__snb-box--link">
        <li>
          <a href="javascript:void(0)" @click="router.push('/faq')"
            >자주묻는질문 이동</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" @click="router.push('/event')"
            >서울런 이벤트 이동</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
