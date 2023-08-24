<script setup>
import { useField } from "vee-validate";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const {
  label,
  items,
  props: { refColumn, rules, attrs },
  modelValue,
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
    default: () => "",
  },
});

const { value, handleChange, errors } = useField(refColumn, rules, {
  initialValue: new Date(),
});

const isError = computed(() => !isEmpty(errors.value));

onMounted(() => {
  document.getElementsByName(`${id}_cal`)[0].setAttribute("id", `${id}_cal`);
});
</script>

<template>
  <div class="c-modals__survey-col" :id="id" :tabindex="tabIndex">
    <div class="c-modals__survey-col-item">
      <div class="c-form-group">
        <label :for="`${id}_cal`" class="c-form-label">{{ label }}</label>
        <div class="c-input-group c-input-group--calendar">
          <div>
            <VueDatePicker
              :name="`${id}_cal`"
              v-model="value"
              format="yyyy.MM.dd HH:mm"
              locale="ko"
              class="date"
              :class="{ 'c-form-control-error': isError }"
              :disabled="$attrs.disabled"
              :enable-time-picker="true"
              time-picker-inline
              minutes-grid-increment="1"
              :auto-apply="true"
              :clearable="false"
              hide-input-icon
              :placeholder="name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.vc-base-select) {
  select {
    border: 0;
  }
}
</style>
