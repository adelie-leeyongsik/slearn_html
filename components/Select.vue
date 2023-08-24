<script setup>
import { uGenKey } from "@/utils/index";

const p = defineProps({
  modelValue: { default: "" },
  label: { type: String, default: "" },
  title: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  options: { type: Array, default: [] },
  sizeType: { default: null },
  isRequireMark: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
});

const genKey = reactive({
  key: uGenKey("select"),
});
</script>

<template>
  <label v-if="p.label" class="c-form-label" :for="p.id || genKey.key">
    <span class="c-text-danger" v-if="p.isRequireMark">*</span> {{ p.label }}
  </label>
  <select
    :title="p.title"
    :disabled="p.isDisabled"
    :id="p.id || genKey.key"
    class="c-form-control"
    :class="{
      selected: p.modelValue !== '',
      'c-form-control-sm': p.sizeType === 'small',
    }"
    @change="$emit('update:modelValue', $event.target.value)"
    :value="p.modelValue"
  >
    <option v-if="p.placeholder" value="" disabled hidden>
      {{ p.placeholder }}
    </option>
    <option
      v-for="({ value, text }, index) in p.options"
      :key="index"
      :value="value"
    >
      {{ text }}
    </option>
  </select>
</template>
