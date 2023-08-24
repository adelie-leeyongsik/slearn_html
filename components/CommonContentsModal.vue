<script setup>
const emit = defineEmits(["close"]);

const p = defineProps({
  data: {
    isShow: { Type: Boolean, default: false },
    isLarge: { Type: Boolean, default: false },
    title: { default: null },
    subTitle: { default: null },
    description: { default: null },
  },
});

const d = reactive({
  lastOpenedButton: null,
});

const modalRef = ref();

watch(
  () => p.data.isShow,
  (newInfo) => {
    if (newInfo) {
      d.lastOpenedButton = document.activeElement;
      setFocusOnModal();
    } else {
      if (
        d.lastOpenedButton &&
        typeof d.lastOpenedButton.focus === "function"
      ) {
        d.lastOpenedButton.focus();
      }
    }
  }
);
onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown);
});

const setFocusOnModal = async () => {
  await nextTick();
  modalRef.value.focus();
};

const handleKeyDown = (event) => {
  if (event.keyCode === 27) {
    emit("close");
  }
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="p.data.isShow" ref="modalRef" tabindex="0">
      <div class="c-modals__bg"></div>
      <div
        class="c-modals__inner"
        :class="p.data.isLarge ? ' c-modals__inner--lg' : ''"
      >
        <div class="c-modals__head">
          {{ p.data.title }}
        </div>
        <div class="c-modals__contents">
          <div
            v-if="p.data.subTitle"
            class="c-modals__title"
            v-html="p.data.subTitle"
          ></div>
          <p v-if="p.data.description" v-html="p.data.description"></p>
          <slot name="innerContents" />
        </div>
      </div>
    </div>
  </Transition>
</template>
