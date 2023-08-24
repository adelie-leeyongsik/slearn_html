<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<template>
  <div class="c-sub-header__wrap">
    <!-- 서브타이틀 없을경우. c-sub-header--type02 클래스 추가 -->
    <div class="c-sub-header c-sub-header--type02">
      <!-- //서브타이틀 없을경우. c-sub-header--type02 클래스 추가 -->
      <div class="c-text-title-lg">{{ title }}</div>
    </div>
  </div>
</template>
