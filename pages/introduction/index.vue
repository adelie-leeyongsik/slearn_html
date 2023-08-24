<script setup>
import joinTab from "./_joinTab";
import onlineTab from "./_onlineTab";
import mentoringTab from "./_mentoringTab";
import consultingTab from "./_consultingTab";
import recommendTab from "./_recommendTab";

import { useIntroStore } from "@/store";

const introStore = useIntroStore();

const route = useRoute();
definePageMeta({
  layout: "introduction",
});

const currentTab = computed(() => Number(route.query.section));

const d = reactive({
  tabList: [
    "회원가입 안내",
    "온라인콘텐츠 안내",
    "멘토링서비스 안내",
    "진로진학상담 안내",
    "맞춤형추천 안내",
  ],
  modal: {
    isShow: false,
    title: "검증 결과",
    subTitle: "",
    description: "서류 검증 대상이라면 서류 준비 후 회원가입을 진행해주세요",
  },
  data: {},
  name: "",
  rrn1: "",
  rrn2: "",
});
</script>

<template>
  <div class="introduction">
    <PageTitle
      title="서비스 소개"
      desc="꿈에 오르는 한걸음, 서울런이다!<br/>서울런이 꿈과 희망을 응원합니다!"
    />
    <div class="c-tab-nav">
      <ul>
        <li
          v-for="(tab, index) in d.tabList"
          :key="index"
          :class="{ active: currentTab === index }"
        >
          <a
            href="#"
            :title="currentTab === index ? '선택됨' : ''"
            @click.prevent="() => introStore.handleTabChangeEvent(index)"
            >{{ tab }}</a
          >
        </li>
      </ul>
    </div>
    <div class="c-tab-contents__wrap">
      <div v-show="currentTab == 0" class="c-tab-contents">
        <joinTab></joinTab>
      </div>

      <div v-show="currentTab == 1" class="c-tab-contents">
        <onlineTab></onlineTab>
      </div>

      <div v-show="currentTab == 2" class="c-tab-contents">
        <mentoringTab></mentoringTab>
      </div>

      <div v-show="currentTab == 3" class="c-tab-contents">
        <consultingTab></consultingTab>
      </div>

      <div v-show="currentTab == 4" class="c-tab-contents">
        <recommendTab></recommendTab>
      </div>
    </div>
  </div>
</template>
