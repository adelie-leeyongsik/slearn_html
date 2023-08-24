<script setup>
import { reactive, computed } from "vue";

const p = defineProps({
  text: { type: String, default: "확인" },
  title: { type: String, default: null },
  // large, small
  sizeType: { type: String, default: null },
  // lightdark, outline
  styleType: { type: String, default: null },
  // full, auto, [number]
  size: { default: "full" },
  isBold: { type: Boolean, default: false },
  to: { type: String, default: null },
  validator: { type: Boolean, default: true },
  // validation과 상관없이 클릭한 경우 실행
  onClick: { type: Function, default: null },
  // validation을 통과한 경우 실행
  onConfirm: { type: Function, default: null },
});

const d = reactive({
  isSizeNumber: computed(() => {
    return Number.isInteger(p.size);
  }),
  getSize: computed(() => {
    if (d.isSizeNumber) {
      return `min-width: ${p.size / 10}rem`;
    } else {
      return "";
    }
  }),
  validationClass: computed(() => {
    // invalid
    if (!p.validator) {
      return "c-btn-inactive";
    }
    return "";
  }),
});

const handleClick = () => {
  if (p.onClick) {
    p.onClick();
  }
  if (p.validator && p.onConfirm) {
    p.onConfirm();
  }
};
</script>

<template>
  <component
    :title="p.title"
    :is="p.to ? 'router-link' : 'button'"
    :to="p.to"
    class="c-btn"
    :class="[
      d.validationClass,
      {
        'c-btn-block': p.size === 'full',
        'c-btn-lg': p.sizeType === 'large',
        'c-btn-sm': p.sizeType === 'small',
        'c-btn-darkgray': p.styleType === 'darkgray',
        'c-btn-danger': p.styleType === 'danger',
        'c-btn-blue': p.styleType === 'blue',
        'c-btn-light': p.styleType === 'light',
        'c-btn-primary': p.styleType === 'primary',
      },
    ]"
    @click="handleClick"
    :style="d.getSize"
  >
    <slot name="before" />
    <component :is="p.isBold ? 'strong' : 'span'">{{ p.text }}</component>
  </component>
</template>
