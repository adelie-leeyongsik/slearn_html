<script setup>
import Under from "./14under";
import Over from "./14over";
import { useLoginStore } from "@/store";

definePageMeta({
  layout: "account",
});

const login = useLoginStore();

const d = reactive({
  age: login.joinInfo.age,
});
</script>

<template>
  <Under v-if="d.age < 14" />
  <Over v-else />
</template>
