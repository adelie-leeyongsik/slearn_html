<script setup>
import { uGenKey } from "@/utils/index";

const p = defineProps({
  modelValue: { default: "" },
  type: { default: null },
  items: { type: Array, default: [] },
  isDisabled: { type: Boolean, default: false },
});

const genKey = reactive({
  key: uGenKey("radio"),
});
</script>

<template>
  <div
    class="c-form-check-group"
    :class="[
      {
        'c-form-check-group--col4 c-form-check-group-month': p.type === 'month',
        'c-form-check-group--14': p.type === 'age14',
      },
    ]"
  >
    <div
      v-for="({ text, value, column }, index) in p.items"
      class="c-form-check"
    >
      <Input
        type="radio"
        :title="`${genKey.key}-${index}`"
        :id="`${genKey.key}-${index}`"
        :class="{ 'c-btn-check': p.type === 'month' }"
        :name="`${genKey.key}`"
        :value="value"
        :modelValue="p.modelValue"
        :checked="p.modelValue === value ? true : null"
        :disabled="p.isDisabled"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <label
        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
        :class="{ column: column }"
        :for="`${genKey.key}-${index}`"
        v-html="text"
      />
    </div>
  </div>
</template>
