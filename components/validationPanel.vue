<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["update:modelValue"]);

const p = defineProps({
  modelValue: { type: Boolean, default: false },
  value: { default: null },
  items: { type: Array, default: null },
});

const self = ref();

watch(
  () => p.value,
  () => {
    if (self.value) {
      setTimeout(() => {
        emit(
          "update:modelValue",
          self.value.querySelectorAll(".c-text-correct").length ===
            p.items.length
        );
      });
    }
  },
  { immediate: true }
);

const isCorrect = (tester) => {
  if (p.value === null || p.value === undefined || p.value === "") return false;
  return tester();
};

const isError = (tester) => {
  if (p.value === null || p.value === undefined || p.value === "") return false;
  return !tester();
};
</script>

<template>
  <div ref="self">
    <div
      v-for="{ text, tester } in p.items"
      :class="[
        'c-text-caution c-text-caution--check',
        {
          'c-text-correct': isCorrect(tester),
          'c-text-danger': isError(tester),
        },
      ]"
    >
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @TEMP
:global(.c-text-correct) {
  color: #1fa82d;
}
</style>
