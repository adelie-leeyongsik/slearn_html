<script setup>
import Snb from "./_snb.vue";

definePageMeta({
  layout: "interest",
});

const router = useRouter();

const d = reactive({
  buttons: [
    {
      code: "01",
      subText: "세대별 추천",
      text: "친구들이<br /> 좋아하는 강좌",
      img: "ic-interest01.svg",
      alt: "세대별 로고",
    },
    {
      code: "02",
      subText: "선호도별 추천",
      text: "내가 좋아하는<br /> 강좌를 찾아줘!",
      img: "ic-interest02.svg",
      alt: "선호도별 로고",
    },
    {
      code: "03",
      subText: "트렌드 추천",
      text: "요즘 트렌드가<br /> 궁금해!",
      img: "ic-interest03.svg",
      alt: "트렌드 로고",
    },
    {
      code: "04",
      subText: "멘토 추천",
      text: "멘토들이<br /> 추천한 컨텐츠",
      img: "ic-interest04.svg",
      alt: "멘토 로고",
    },
    {
      code: "05",
      subText: "서울런 선배 추천",
      text: "선배들의<br /> 컨텐츠 족보",
      img: "ic-interest05.svg",
      alt: "서울런 선배 로고",
    },
    {
      code: "06",
      subText: "마음가는 대로 추천",
      text: "힐링이 필요해<br /> 내 마음 살피기",
      img: "ic-interest06.svg",
      alt: "마음가는 대로 로고",
    },
    {
      code: "07",
      subText: "직접 검색",
      text: "내가 검색해서<br /> 찾기",
      img: "ic-interest07.svg",
      alt: "직접 로고",
    },
    {
      code: "08",
      subText: "선택 검색",
      text: "카테고리 검색<br /> 찾기",
      img: "ic-interest08.svg",
      alt: "선택 로고",
    },
    {
      code: "09",
      subText: "통계 검색",
      text: "통계가 진리<br /> 통계로 찾기",
      img: "ic-interest09.svg",
      alt: "통계 로고",
    },
  ],
  questions: [
    { text: "사용방법 알려줘", value: "" },
    { text: "요즘 뜨고있는 인기 강좌", value: "" },
    { text: "사람들이 많이 보는 <br/> 공연 보여줘", value: "" },
    { text: "관심도 높은 콘텐츠는?", value: "" },
  ],
});

onMounted(() => {});

const goChat = (key) => {
  console.log("goChat ", key);
  // 관리자 관심추천(4개)분기
  if (key == "03" || key == "04" || key == "05" || key == "06") {
    // 트렌드,멘토,서울런선배들,마음힐링
    router.push({
      path: "/interest/adminSuggestChatting",
      query: { type: key },
    });
  } else {
    router.push({ path: "/interest/chatting", query: { type: key } });
  }
};
</script>
<template>
  <div class="interest">
    <PageTitle
      title="서울런과 함께 내 관심사를 찾아보세요"
      desc="학습도, 자기개발도 이제 찾아보는 것은 그만! 선택한 방식에 따라
알아서 찾아주는 AI 서울런의 관심추천 서비스로 한번에 알아보세요!"
    />
    <div class="interest-recommendation">
      <div class="interest__wrap">
        <Snb />
        <div class="interest__contents">
          <div class="interest__contents-head">
            <dl class="c-flex">
              <dt>
                <span>
                  <img src="@img/@temp/2.jpg" alt="프로필" />
                </span>
              </dt>
              <dd>
                <div class="c-text-title-lg">
                  반갑습니다! 아래에서<br />
                  선호하는 추천 방식을 선택해주세요.
                </div>
              </dd>
            </dl>
          </div>
          <div class="interest__contents-body">
            <div class="c-card--inline">
              <a
                href="javascript:void(0)"
                class="c-card c-card--border"
                v-for="(data, idx) in d.buttons"
                @click="goChat(data.code)"
              >
                <div class="interest__box-link">
                  <div class="interest__box-text">
                    <span>{{ data.subText }}</span>
                    <p v-html="data.text"></p>
                  </div>
                  <div class="interest__box-img">
                    <p>
                      <img :src="uImage(data.img)" :alt="data.alt" />
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
