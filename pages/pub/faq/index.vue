<script setup>
definePageMeta({
  layout: "faq",
});
</script>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      tabList: [
        "전체",
        "회원가입",
        "로그인",
        "콘텐츠",
        "교재,PC",
        "학습관리",
        "수강방법",
        "000사이트",
        "멘토링",
        "기타",
      ],
      faq01: {
        faqItem1: {
          title: "회원가입하는 <strong>방법</strong>을 알려주세요.",
          content: "내용",
          open: false,
        },
        faqItem2: {
          title:
            "학습사이트는 변경했는데 멘토링은 동일한 멘토와 진행하고 싶어요.",
          content:
            "기본적으로 학습사이트 변경은 멘토링과 관계가 없으므로 동일한 멘토와 진행하시면 됩니다.<br />다만 신청과목에 따라 기존 멘토가 멘토링을 진행하기 어려운 경우 멘토가 변경될 수 있습니다.",
          open: false,
        },
        faqItem3: {
          title: "두 자녀 이상일 때 한 사람 명의로 인증이 가능한가요?",
          content: "내용",
          open: false,
        },
        faqItem4: {
          title: "탈퇴를 하면 이용자 정보는 모두 삭제되나요?",
          content: "내용",
          open: false,
        },
        faqItem5: {
          title: "윌라 PC로 수강하는 <strong>방법</strong>이 어떻게 되나요?",
          content: "내용",
          open: false,
        },
      },
    };
  },
};
</script>

<template>
  <div class="faq">
    <!-- 230711 타이틀 변경 -->
    <!-- 230717 sub 변경 -->
    <PubTitleSearch2
      title="자주하는 질문"
      sub="자주하는 질문을 통해 서울런에 대한
궁금한 점을 먼저 찾아보세요."
    >
    </PubTitleSearch2>
    <div class="faq__header">
      <div class="c-tab-nav">
        <ul>
          <li
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{ active: currentTab === index }"
          >
            <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-tab-contents__wrap">
      <div v-show="currentTab == 0" class="c-tab-contents">
        <div class="accordions">
          <!-- 230127 수정. p태그 추가, 더보기 버튼 추가 -->
          <div class="faq-search__title">
            <p>회원가입 <span>9</span></p>
            <a href="">더보기</a>
          </div>
          <!-- // 230127 수정. p태그 추가, 더보기 버튼 추가 -->
          <dl v-for="(item, id) in faq01">
            <dt
              v-on:click="item.open = !item.open"
              :class="{ active: item.open }"
            >
              <!-- 웹접근성 a 태그 추가 -->
              <a href="javascript:void(0)">
                <span>Q.</span>
                <p v-html="item.title"></p>
              </a>
              <!-- //웹접근성 a 태그 추가 -->
            </dt>
            <dd v-if="item.open">
              <span>A.</span>
              <p v-html="item.content"></p>
            </dd>
          </dl>
          <!-- 230127 수정. p태그 추가, 더보기 버튼 추가 -->
          <div class="faq-search__title">
            <p>로그인 <span>10</span></p>
            <a href="">더보기</a>
          </div>
          <!-- // 230127 수정. p태그 추가, 더보기 버튼 추가 -->
          <dl v-for="(item, id) in faq01">
            <dt
              v-on:click="item.open = !item.open"
              :class="{ active: item.open }"
            >
              <!-- 웹접근성 a 태그 추가 -->
              <a href="javascript:void(0)">
                <span>Q.</span>
                <p v-html="item.title"></p>
              </a>
              <!-- //웹접근성 a 태그 추가 -->
            </dt>
            <dd v-if="item.open">
              <span>A.</span>
              <p v-html="item.content"></p>
            </dd>
          </dl>
        </div>
      </div>
      <div v-show="currentTab == 1" class="c-tab-contents">
        <div class="faq-search__not-found">
          <img src="@img/ic-not-found.svg" alt="일치하는 내용이 없습니다." />
          일치하는 내용이 없습니다<br />검색어를 다시 확인해 보세요
        </div>
      </div>
      <div v-show="currentTab == 2" class="c-tab-contents"></div>
      <div v-show="currentTab == 3" class="c-tab-contents"></div>
      <div v-show="currentTab == 4" class="c-tab-contents"></div>
      <div v-show="currentTab == 5" class="c-tab-contents"></div>
      <div v-show="currentTab == 6" class="c-tab-contents"></div>
      <div v-show="currentTab == 7" class="c-tab-contents"></div>
      <div v-show="currentTab == 8" class="c-tab-contents"></div>
      <div v-show="currentTab == 9" class="c-tab-contents"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-input-group--search {
  width: 43.2rem;
  margin: 0 auto;
}
.c-tab-nav {
  margin-top: 2.4rem;
}
</style>
