<script setup>
import { useLoadingStore } from "@/store";
const overlay = useLoadingStore();
</script>

<template>
  <div class="overlay" v-if="overlay.isLoading">
    <div class="overlay__inner">
      <div class="overlay__content"><span class="spinner"></span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #22222252;
}

.overlay__inner {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.overlay__content {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  width: 100px;
  height: 100px;
  display: inline-block;
  border-width: 8px;
  border-color: rgb(0 231 255 / 28%);
  border-top-color: #409eff;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
