<script setup>
import { uGenKey } from "@/utils";

const p = defineProps({
  modelValue: { default: "" },
  type: { type: String, default: null },
  thumb: { type: String, default: null },
  thumbAlt: { type: String, default: null },
  text: { type: String, default: null },
  required: { type: Boolean, default: false },
  showRequiredText: { type: Boolean, default: false },
  isBold: { type: Boolean, default: false },
  textWrap: { default: true },
});

const genKey = reactive({
  key: uGenKey("cb"),
});
</script>

<template>
  <div
    class="c-form-check"
    :class="[
      {
        'c-form-check--type02': p.thumb,
      },
    ]"
  >
    <input
      class="c-form-check-input"
      type="checkbox"
      title="checkbox"
      :id="genKey.key"
      :checked="p.modelValue ? true : null"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="c-form-check-label" :for="genKey.key">
      <img v-if="p.thumb" :src="p.thumb" :alt="p.thumbAlt" />
      <component v-if="p.textWrap" :is="p.isBold ? 'strong' : 'span'">
        {{ p.text }}
        {{ p.showRequiredText ? (p.required ? "(필수)" : "(선택)") : "" }}
      </component>
      <template v-else>{{ p.text }}</template>
    </label>
  </div>
</template>
