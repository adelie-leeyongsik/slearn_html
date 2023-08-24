<script setup>
import item from "./_item.vue";
definePageMeta({
  layout: "event",
});
</script>
<script>
export default {
  data() {
    return {
      currentTab: 0,
      tabList: ["전체", "진행중", "마감"],
    };
  },
};
</script>
<template>
  <div class="event">
    <!-- 230616 타이틀 수정 -->
    <!-- 230711 sub="" 텍스트 수정 -->
    <PubTitle
      title="이벤트"
      sub="서울런이 준비한 즐겁고 신나는
이벤트에 참여해보세요."
    />
    <!-- // 230616 타이틀 수정 -->
    <div class="event-list">
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
      <div class="c-tab-contents__wrap">
        <div v-show="currentTab == 0" class="c-tab-contents">
          <item />
          <PubPagination />
        </div>
        <div v-show="currentTab == 1" class="c-tab-contents">
          <item />
          <PubPagination />
        </div>
        <div v-show="currentTab == 2" class="c-tab-contents">
          <item />
          <PubPagination />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event {
  @include mobile {
    padding-top: 6rem;
  }
}
</style>
