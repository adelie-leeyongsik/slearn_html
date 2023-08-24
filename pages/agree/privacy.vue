<script setup>
import { call } from "@/api";

definePageMeta({
  layout: "rule",
});

const router = useRouter();

const d = reactive({
  termIdx: 1,
  termInfoList: [],
  termInfo: "",
  termDate: "",
  isPrevDisabled: false,
  isNextDisabled: true,
});

onMounted(() => {
  getPrivacyTerm();
});

const getPrivacyTerm = () => {
  call({
    method: "get",
    id: "개인정보처리방침 조회",
    endpoint: "/api/join/terms_privacy_policy",
    data: {},
    onResponse({ data, status }) {
      console.log("data ", data);
      if (status === 200) {
        d.termInfoList = data;
        d.termInfo = data[0].term_desc;
        d.termPrevDate = data[1]?.term_title.substr(
          data[1].term_title.indexOf("(")
        );
        d.termNextDate = "(-)";
      }
    },
  });
};

const onPrev = () => {
  d.termPrevDate = isEmpty(d.termInfoList[d.termIdx + 1])
    ? "(-)"
    : d.termInfoList[d.termIdx + 1].term_title.substr(
        d.termInfoList[d.termIdx + 1].term_title.indexOf("(")
      );

  d.termNextDate =
    d.termInfoList[d.termIdx - 1].term_title.indexOf("(") == -1
      ? "(-)"
      : d.termInfoList[d.termIdx - 1].term_title.substr(
          d.termInfoList[d.termIdx - 1].term_title.indexOf("(")
        );

  if (d.termIdx < d.termInfoList.length) {
    d.isNextDisabled = false;
    d.termInfo = d.termInfoList[d.termIdx].term_desc;
  }

  d.termIdx++;

  if (d.termIdx === d.termInfoList.length) {
    d.termIdx = d.termInfoList.length - 1;
    d.isPrevDisabled = true;
  }
};

const onNext = () => {
  d.termIdx--;

  d.termPrevDate = d.termInfoList[d.termIdx + 1].term_title.substr(
    d.termInfoList[d.termIdx + 1].term_title.indexOf("(")
  );

  d.termNextDate =
    isEmpty(d.termInfoList[d.termIdx - 1]) ||
    d.termInfoList[d.termIdx - 1].term_title.indexOf("(") == -1
      ? "(-)"
      : d.termInfoList[d.termIdx - 1].term_title.substr(
          d.termInfoList[d.termIdx - 1].term_title.indexOf("(")
        );

  if (d.termIdx >= 0) {
    d.isPrevDisabled = false;
    d.termInfo = d.termInfoList[d.termIdx].term_desc;
  }

  if (d.termIdx === 0) {
    d.termIdx = 1;
    d.isNextDisabled = true;
    d.isPrevDisabled = false;
  }
};

const goHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="rule">
    <PageTitle title="개인정보 처리방침" />
    <div class="rule-wrap">
      <div class="rule__nav">
        <a
          href="javascript:void(0)"
          class="rule__nav-item rule__nav-item-prev"
          :class="{ 'rule__nav-item--disabled': d.isPrevDisabled }"
          @click="onPrev"
          ><p>이전 약관보기</p>
          <span>{{ d.termPrevDate }}</span></a
        >
        <a
          href="javascript:void(0)"
          class="rule__nav-item rule__nav-item-next"
          :class="{ 'rule__nav-item--disabled': d.isNextDisabled }"
          @click="onNext"
          ><p>다음 약관보기</p>
          <span
            ><span>{{ d.termNextDate }}</span></span
          ></a
        >
      </div>
      <div class="rule__contents">
        <div class="rule__section">
          <div v-html="d.termInfo"></div>
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
