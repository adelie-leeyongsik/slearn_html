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
    </div>
  </div>
</template>
