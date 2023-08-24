<script setup>
const p = defineProps({
  modelValue: { default: null },
  items: { type: Array, default: null },
});
</script>

<template>
  <div class="c-tab-nav">
    <ul>
      <li
        v-for="{ text, value } in p.items"
        :class="{ active: p.modelValue === value }"
      >
        <a
          href="#"
          :title="p.modelValue === value ? '선택됨' : ''"
          @click.prevent="$emit('update:modelValue', value)"
        >
          {{ text }}
        </a>
      </li>
    </ul>
  </div>
</template>
