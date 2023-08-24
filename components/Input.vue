<script setup>
import { uGenKey } from "@/utils/index";

const emit = defineEmits(["update:modelValue", "change"]);

const p = defineProps({
  modelValue: { default: "" },
  type: { type: String, default: "text" },
  groupClass: { type: String, default: "" },
  label: { type: String, default: null },
  id: { default: null },
  title: { default: null },
  value: { default: null },
  checked: { default: null },
  withWrapper: { type: Boolean, default: null },
  beforeSet: { type: Function, default: null },
  beforeGet: { type: Function, default: null },
  maxlength: { default: null },
  isNumeric: { type: Boolean, default: false },
  onlyNumber: { type: Boolean, default: false },
  isRequired: { type: Boolean, default: false },
  isRequireMark: { type: Boolean, default: false },
});

const self = ref();

const inputGenKey = reactive({
  key: uGenKey("input"),
  getValue: computed(() => {
    if (p.value && p.type === "radio") {
      return p.value;
    } else {
      return p.beforeSet ? p.beforeSet(p.modelValue) : p.modelValue;
    }
  }),
  getClass: computed(() => {
    if (p.type === "radio") return "c-btn-check";
    return "c-form-control";
  }),
});

onMounted(() => {
  let beforeInputValue = null;

  self.value.addEventListener("input", (e) => {
    let value = p.beforeGet ? p.beforeGet(e.target.value) : e.target.value;

    if (p.onlyNumber) {
      value = uExtractNumber(value);
    }

    // 숫자일 경우 0으로 시작할 수 없다. 0으로 시작하는 경우는 숫자형으로 지정하지 말것.
    if (p.isNumeric && !p.allowZero) {
      value = Number(value);
      value = value === 0 ? "" : value;
    }

    // 이벤트로 변경'된' 값과 이벤트 이전의 값이 같으면
    if (beforeInputValue === value) {
      // 현재 값을 이전의 값으로 돌리고 이벤트 전파를 중단한다.
      self.value.value = p.beforeSet
        ? p.beforeSet(beforeInputValue)
        : beforeInputValue;
      e.preventDefault();
    } else {
      // 제일 처음 입력이 if(null === "")인 경우 여기를 타는 경우
      // -> 숫자 형식으로 "" 되는 경우, 이미 입력된 텍스트가 남아 있는 것을 방지
      if (beforeInputValue === null) {
        self.value.value = p.beforeSet ? p.beforeSet(beforeInputValue) : value;
        e.preventDefault();
      }
      beforeInputValue = value;
      emit("update:modelValue", value);
    }
  });
});
</script>

<template>
  <label v-if="p.label" class="c-form-label" :for="p.id || inputGenKey.key">
    <span class="c-essential" v-if="p.isRequireMark">*</span>{{ p.label }}
  </label>
  <div
    v-if="$slots.default || p.withWrapper"
    class="c-input-group"
    :class="[p.groupClass]"
  >
    <input
      v-bind="$attrs"
      ref="self"
      :title="p.title || p.id || inputGenKey.key"
      :id="p.id || inputGenKey.key"
      :class="inputGenKey.getClass"
      :type="p.type"
      :value="inputGenKey.getValue"
      :checked="p.checked"
      :pattern="p.onlyNumber ? '\\d*' : null"
      :required="p.isRequired ? true : null"
      :maxlength="p.maxlength"
      @change="$emit('change', $event)"
    />
    <slot />
  </div>
  <input
    v-else
    v-bind="$attrs"
    ref="self"
    :title="p.title || p.id || inputGenKey.key"
    :id="p.id || inputGenKey.key"
    :class="inputGenKey.getClass"
    :type="p.type"
    :value="inputGenKey.getValue"
    :checked="p.checked"
    :pattern="p.onlyNumber ? '\\d*' : null"
    :required="p.isRequired ? true : null"
    :maxlength="p.maxlength"
    @change="$emit('change', $event)"
  />
</template>
