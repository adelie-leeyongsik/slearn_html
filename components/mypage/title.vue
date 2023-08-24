<script setup>
const p = defineProps({
  title: { default: null },
  desc: { default: null },
});
</script>
<template>
  <div class="c-text-title-lg">{{ p.title }}</div>
  <div class="c-text-title-sub">
    <p v-html="p.desc" />
    <slot name="tail" />
  </div>
</template>
