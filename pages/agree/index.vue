<script setup>
import { call } from "@/api";

definePageMeta({
  layout: "rule",
});

const router = useRouter();

const d = reactive({
  agreeTerm: "",
});

onMounted(() => {
  getAgreeTerm();
});

const getAgreeTerm = () => {
  call({
    method: "get",
    id: "이용약관 조회",
    endpoint: "/api/join/terms",
    data: {
      cp_id: "SEOULLEARN",
      term_div_code: "TEMPLATE_P002",
    },
    onResponse({ data, status }) {
      console.log("data ", data);
      if (status === 200) {
        d.agreeTerm = data.term_desc;
      }
    },
  });
};

const goHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="rule">
    <PageTitle title="이용약관" />
    <div class="rule-wrap">
      <div class="rule__contents">
        <div class="rule__section">
          <div v-html="d.agreeTerm"></div>
        </div>

        <div class="c-btn-group">
          <button class="c-btn c-btn-lg c-btn-primary" @click="goHome">
            홈으로
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
