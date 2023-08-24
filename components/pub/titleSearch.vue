<script>
export default {
  props: ["title", "sub"],
  data() {
    return {};
  },
};
</script>

<template>
  <div class="c-sub-header__wrap">
    <div class="c-sub-header">
      <PubBreadCrumbs />
      <div class="c-text-title-lg">{{ title }}</div>
      <div class="c-text-title-sub">
        <p>
          {{ sub }}
        </p>
      </div>
      <div class="c-input-group c-input-group--search">
        <!-- 웹접근성 title 추가 -->
        <select class="c-form-control" title="항목 셀렉트">
          <!--// 웹접근성 title 추가 -->
          <option>제목</option>
        </select>
        <input
          id="file"
          class="c-form-control"
          type="text"
          placeholder="무엇을 도와드릴까요?"
          title="자주하는 질문 검색"
        />
        <button>
          <i class="ico ico-search">검색</i>
        </button>
      </div>
    </div>
  </div>
</template>
