<script setup>
import { reactive } from "vue";

const p = defineProps({
  modelValue: { default: "" },
  label: { type: String, default: null },
  id: { default: null },
  value: { default: null },
  checked: { default: null },
  maxlength: { default: null },
  isRequireMark: { type: Boolean, default: false },
});

const genKey = reactive({
  key: uGenKey("ta"),
});
</script>

<template>
  <label v-if="p.label" class="c-form-label" :for="p.id || genKey.key">
    {{ p.label }} <span class="c-text-danger" v-if="p.isRequireMark">*</span>
  </label>
  <textarea
    class="c-form-control"
    v-bind="$attrs"
    :id="p.id || genKey.key"
    :value="p.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :maxlength="p.maxlength"
  />
</template>
