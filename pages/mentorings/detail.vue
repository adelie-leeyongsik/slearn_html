<script setup>
import { call } from "@/api";

definePageMeta({
  layout: "board",
});

const {
  query: { seq },
} = useRoute();

const router = useRouter();

const d = reactive({
  description: "",
  title: "",
});

onMounted(async () => {
  getData();
});

const handleClickList = () => {
  router.back();
};
const getData = async () => {
  await call({
    id: "멘토링 조회",
    endpoint: `/api/sq/board/${seq}`,
    onResponse({ data }) {
      Object.assign(d, {
        ...data,
      });
      return true;
    },
  });
};
</script>
<template>
  <div class="board">
    <PubBreadCrumbs />
    <div class="board-view">
      <div class="board-view__title">
        <p>{{ d.title }}</p>
      </div>
      <div class="board-view__contents">
        <div class="board-view__contents-body" v-html="d.description"></div>
      </div>
      <div class="c-btn-group">
        <Button
          :onClick="handleClickList"
          size="auto"
          sizeType="large"
          text="목록으로"
        />
      </div>
    </div>
  </div>
</template>
