<script setup>
import { isEmpty } from "lodash";

const r = useRoute();

definePageMeta({
  layout: "account",
});

onMounted(() => {
  if (isEmpty(r.query.code)) {
    uDelLoginInfo("snsCode");
    // localStorage.removeItem("snsState");
    self.close();
  } else {
    uSetStorage("snsCode", isEmpty(r.query.code) ? "" : r.query.code);
    // localStorage.setItem(
    //   "snsState",
    //   isEmpty(r.query.state) ? "" : r.query.state
    // );
    self.close();
  }
});
</script>

<template></template>

<style lang="scss" scoped></style>
