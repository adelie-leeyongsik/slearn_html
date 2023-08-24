<script setup>
import Under from "./14under";
import Over from "./14over";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const d = reactive({
  age14: uGetLoginInfo("age"),
  info: {},
});

onMounted(() => {
  call({
    method: "get",
    id: "자격 재검증 학습사이트 정보",
    endpoint: "/api/platform_chg/get",
    onResponse({ data }) {
      console.log("data >>> ", data);
      d.info = data;
    },
  });
});
</script>

<template>
  <Under :learnInfo="d.info" v-if="d.age14 < 14" />
  <Over :learnInfo="d.info" v-else />
</template>
