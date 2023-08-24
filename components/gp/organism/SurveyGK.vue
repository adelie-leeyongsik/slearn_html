<script setup>
import { useField } from "vee-validate";

const {
  label,
  props: { refColumn, rules, attrs, value: initialValue },
  modelValue,
  name,
  id,
  tabIndex,
} = defineProps({
  label: {
    type: String,
    required: true,
  },
  props: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  tabIndex: {
    type: Number,
    default: () => 1,
  },
  modelValue: {
    type: String,
    default: () => "",
  },
});

const { value, handleChange, errors } = useField(refColumn, rules, {
  initialValue,
});
const isError = computed(() => !isEmpty(errors.value));
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item">
      <div class="c-form-group">
        <label :for="name" class="c-form-label">{{ label }}</label>
        <input
          type="text"
          :name="name"
          class="c-form-control"
          :class="{ 'c-form-control-error': isError }"
          placeholder="텍스트를 입력하세요"
          v-bind="props?.attrs"
          v-model="value"
          @input="handleChange"
          :disabled="$attrs.disabled"
        />
      </div>
    </div>
  </div>
</template>
