<script setup>
import Under from "./14under";
import Over from "./14over";
import { useLoginStore } from "@/store";

definePageMeta({
  layout: "account",
});

const login = useLoginStore();

const d = reactive({
  age14: uGetLoginInfo("age"),
});
</script>

<template>
  <Under v-if="d.age14 < 14" />
  <Over v-else />
</template>
