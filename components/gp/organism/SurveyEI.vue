<script setup>
import { useField } from "vee-validate";
const {
  label,
  items,
  props: { refColumn, rules, attrs, value: initialValue },
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
    type: Array,
    default: () => [],
  },
});

const { value, handleChange, errors, setValue } = useField(refColumn, rules, {
  type: "checkbox",
  uncheckedValue: [],
  initialValue: isUndefined(initialValue) ? [] : initialValue,
});
const isError = computed(() => !isEmpty(errors.value));
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item c-modals__survey-col-item--type02">
      <div class="c-form-group">
        <label :for="name" class="c-form-label">{{ label }}</label>
        <div class="c-form-check-group c-form-check-group--col7">
          <div class="c-form-check" v-for="(data, dataIdx) in items">
            <input
              class="c-btn-check"
              type="checkbox"
              :id="`qust-el-${dataIdx}`"
              :value="data.qustItemSeq"
              v-model="value"
              :v-bind="props?.attrs"
              :disabled="$attrs.disabled"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              :class="{ 'c-btn-error': isError }"
              :for="`qust-el-${dataIdx}`"
              >{{ data.qustItemDesc }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
