<script setup>
const p = defineProps({
  title: { default: null },
  desc: { default: null },
  isSearch: { default: false },
});

const d = reactive({
  searchKeyword: "",
});
</script>

<template>
  <div class="c-sub-header__wrap">
    <div class="c-sub-header">
      <BreadCrumbs />
      <div class="c-text-title-lg">{{ p.title }}</div>
      <div class="c-text-title-sub">
        <p v-html="p.desc" />
      </div>
      <br />
      <div class="c-input-group c-input-group--search" v-if="p.isSearch">
        <slot name="select"></slot>
        <input
          id="file"
          class="c-form-control"
          type="text"
          placeholder="무엇을 도와드릴까요?"
          title="자주하는 질문 검색"
          v-model="d.searchKeyword"
          v-on:keyup.enter="$emit('onSearch', d.searchKeyword)"
        />
        <button @click="$emit('onSearch', d.searchKeyword)">
          <i class="ico ico-search">검색</i>
        </button>
      </div>
    </div>
  </div>
</template>
