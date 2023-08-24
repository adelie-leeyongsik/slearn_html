<script setup>
definePageMeta({
  layout: "mentoring",
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
          title: "회원가입하는 방법을 알려주세요.",
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
          title: "윌라 PC로 수강하는 방법이 어떻게 되나요?",
          content: "내용",
          open: false,
        },
      },
    };
  },
};
</script>

<template>
  <div class="mentoring c-bg-light">
    <div class="mentoring-faq">
      <div class="accordions">
        <dl v-for="(item, id) in faq01">
          <dt
            v-on:click="item.open = !item.open"
            :class="{ active: item.open }"
          >
            <span>Q.</span>
            <p v-html="item.title"></p>
          </dt>
          <dd v-if="item.open">
            <span>A.</span>
            <p v-html="item.content"></p>
          </dd>
        </dl>
        <dl v-for="(item, id) in faq01">
          <dt
            v-on:click="item.open = !item.open"
            :class="{ active: item.open }"
          >
            <span>Q.</span>
            <p v-html="item.title"></p>
          </dt>
          <dd v-if="item.open">
            <span>A.</span>
            <p v-html="item.content"></p>
          </dd>
        </dl>
      </div>
      <!-- 230127 페이징 추가 -->
      <PubPagination />
      <!-- // 230127 페이징 추가 -->
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
