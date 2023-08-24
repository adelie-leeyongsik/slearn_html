<script setup>
import { useField } from "vee-validate";
const attrs = useAttrs();
const {
  label,
  items,
  props: { refColumn, rules, value: initialValue, isOffline },
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

const { value, handleChange, errors } = useField(refColumn, rules, {
  initialValue,
});
const isError = computed(() => !isEmpty(errors.value));

const classNames = computed(() => {
  const colSize = items.length >= 6 ? 6 : items.length;
  return {
    "c-form-check-group": true,
    [`c-form-check-group--col${colSize}`]: true,
  };
});

const isDisabled = computed(() => {
  return items.map(({ qustItemDesc, qustItemSeq }) => {
    if (qustItemDesc === "30" && qustItemSeq === 2) {
      return isOffline === true;
    }
    return false;
  });
});
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item">
      <div class="c-form-group">
        <label :for="name" class="c-form-label">{{ label }}</label>
        <div :class="classNames">
          <template v-for="(data, dataIdx) in items">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                :name="name"
                :id="`qust-onm-${tabIndex}-${dataIdx}`"
                :value="data.qustItemSeq"
                :style="props?.attrs"
                v-model="value"
                @input="handleChange"
                :disabled="$attrs.disabled || isDisabled[dataIdx]"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                :class="{ 'c-btn-error': isError }"
                :for="`qust-onm-${tabIndex}-${dataIdx}`"
                >{{ data.qustItemDesc }}</label
              >
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
