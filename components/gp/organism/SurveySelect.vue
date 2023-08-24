<script setup>
import { useField } from "vee-validate";
const {
  label,
  props: { refColumn, rules, attrs },
  modelValue,
  items,
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
  items: {
    type: Array,
    default: () => [],
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
  initialValue: "",
});
const isError = computed(() => !isEmpty(errors.value));
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item">
      <div class="c-form-group">
        <label :for="id" class="c-form-label">{{ label }}</label>
        <select
          class="c-form-control"
          :class="{ 'c-form-control-error': isError }"
          v-model="value"
          @input="handleChange"
          v-bind="$attrs"
          placeholder="텍스트를 입력하세요"
          :id="id"
        >
          <option value="" disabled>선택</option>
          <option
            :value="optItems.value"
            v-for="(optItems, optIdx) in items"
            :key="`${optItems}-${optIdx}`"
          >
            {{ optItems.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
