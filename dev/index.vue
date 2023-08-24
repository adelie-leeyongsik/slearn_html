<script setup>
import { reactive, onMounted } from "vue";
import Dashboard from "@/dev/dashboard/index.vue";

const r = useRoute();
const router = useRouter();

const d = reactive({
  dbActive: false,
});

onMounted(() => {
  document.title = `(${uEnvMode()}) S-LEARN`;
  window.addEventListener("keydown", ({ code, shiftKey, metaKey, ctrlKey }) => {
    const mode = uEnvMode();
    if (
      document.activeElement.tagName == "INPUT" ||
      document.activeElement.tagName == "TEXTAREA"
    )
      return;
    if (shiftKey || metaKey || ctrlKey) return;
    if (code === "KeyF") {
      if (mode === "PUB") {
        if (r.name === "index") {
          router.go(-1);
        } else {
          router.push("/");
        }
      } else if (mode === "DEV") {
        d.dbActive = !d.dbActive;
      }
    } else if (code === "KeyC") {
      if (mode !== "DEV") return;
      if (r.name === "dev-components") {
        router.go(-1);
      } else {
        router.push("/dev/components");
      }
    }
  });
});
</script>

<template>
  <KeepAlive>
    <Dashboard v-if="d.dbActive" @close="d.dbActive = !d.dbActive" />
  </KeepAlive>
</template>
