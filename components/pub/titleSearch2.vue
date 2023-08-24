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
