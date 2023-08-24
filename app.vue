<script setup>
import { useAppStore } from "@/store";

import "v-calendar/dist/style.css";

const app = useAppStore();

onMounted(() => {
  app.init();
});
</script>

<template>
  <PubSkip />
  <NuxtLayout class="c-page" />
  <Modal />
  <LoadingOverlay />
  <LoginAlert />
</template>
