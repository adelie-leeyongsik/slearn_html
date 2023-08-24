<script setup>
import { useModalStore } from "@/store";

const modal = useModalStore();

const p = defineProps({
  modalKey: { type: String, default: null },
});
</script>

<template>
  <teleport v-if="modal.items[p.modalKey]?.isActive" :to="`#${p.modalKey}`">
    <slot />
  </teleport>
</template>
