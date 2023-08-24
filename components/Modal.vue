<script setup>
import { useModalStore } from "@/store";

const modal = useModalStore();
const commonModalRef = ref(null);

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});
const handleKeyDown = (event) => {
  if (event.keyCode === 27 && modal.items[modal.currentKey] != undefined) {
    modal.close(modal.items[modal.currentKey].key);
  }
};
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown);
});

const stateData = reactive({
  items: modal.items,
  lastOpenedButton: null,
});

watch(
  () => stateData.items[modal.currentKey]?.isActive,
  async (newInfo) => {
    if (newInfo) {
      stateData.lastOpenedButton = document.activeElement;
      setFocusOnModal();
    } else {
      if (
        stateData.lastOpenedButton &&
        typeof stateData.lastOpenedButton.focus === "function"
      ) {
        stateData.lastOpenedButton.focus();
      }
    }
  },
  { deep: true }
);

const setFocusOnModal = async () => {
  await nextTick();
  commonModalRef.value[0].focus();
};
</script>

<template>
  <template
    v-for="{ key, type, isActive, title, message, buttons } in modal.items"
  >
    <Transition name="c-modal">
      <div v-if="type === 'modal' && isActive" class="c-modal">
        <div class="c-modal__bg" @click="modal.close(key)" />
        <div :id="key" class="c-modal__inner" />
      </div>
      <div v-else-if="type === 'alert' && isActive" class="c-alert">
        <div class="c-alert__bg" />
        <div class="c-alert__inner" ref="commonModalRef" tabindex="0">
          <div class="c-alert__title">{{ title }}</div>
          <div class="c-alert__contents">
            <p v-html="message" />
          </div>
          <div class="c-alert__button">
            <div class="c-btn-group">
              <Button
                v-for="(
                  { text, styleType, validator, onClick, onConfirm, autoClose },
                  idx
                ) in buttons"
                class="c-btn-primary"
                size="auto"
                :text="text"
                :styleType="styleType"
                :validator="validator"
                :onClick="
                  () => {
                    onClick && onClick(key);
                  }
                "
                :onConfirm="
                  () => {
                    onConfirm && onConfirm(key);
                    autoClose === false || modal.close(key);
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
</template>
