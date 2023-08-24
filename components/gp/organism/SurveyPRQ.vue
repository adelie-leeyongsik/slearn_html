<script setup>
import { useField } from "vee-validate";
const {
  label,
  items,
  props: { refColumn, rules, attrs },
  name,
  id,
  tabIndex,
} = defineProps({
  label: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
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
  },
});

const { value, handleChange, errors } = useField(refColumn, rules);
const isError = computed(() => !isEmpty(errors.value));
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item">
      <div class="c-form-group">
        <label :for="name" class="c-form-label">{{ label }}</label>
        <!-- 척도형 5개 고정 -->
        <div class="c-form-check-group c-form-check-group--col5">
          <div class="c-form-check" v-for="(data, dataIdx) in items">
            <input
              class="c-btn-check"
              type="radio"
              :name="name"
              :id="`qust-prq-${tabIndex}-${dataIdx}`"
              :value="data.qustItemSeq"
              :style="props?.attrs"
              v-model="value"
              @input="handleChange"
              :disabled="$attrs.disabled"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              :class="{ 'c-btn-error': isError }"
              :for="`qust-prq-${tabIndex}-${dataIdx}`"
              >{{ data.qustItemDesc }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
