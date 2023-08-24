<script setup>
import moment from "moment";
import { call } from "@/api";

definePageMeta({
  layout: "event",
});

const router = useRouter();
const route = useRoute();

const currentTab = computed(() => route.query.section);

const d = reactive({
  tabIndex: "ALL",
  tabList: [
    { text: "전체", value: "ALL" },
    { text: "진행중", value: "OPEN" },
    { text: "마감", value: "END" },
  ],
  dataList: [],
  pageSize: 25,
  pageNumber: 0,
  order: "DESC",
  sort: "eventSeq",
});

onMounted(async () => {
  await getEventList();
});

const handleClickTab = (value) => {
  const navigationParams = {
    path: "/event",
    query: { section: value },
  };
  navigateTo(navigationParams).then(async () => {
    await getEventList();
  });
};

const getEventList = async () => {
  let url = "/api/sq/events";

  if (currentTab.value === "OPEN") {
    url = "/api/sq/events/current";
  } else if (currentTab.value === "END") {
    url = "/api/sq/events/end";
  }

  await call({
    id: "이벤트 목록",
    endpoint: url,
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNumber,
      order: d.order,
      sort: d.sort,
    },
    onResponse({ code, data }) {
      console.log("이벤트목록>>", data);
      d.dataList = data.rows;
      d.dataList.forEach((f) => {
        f.link = `/event/${f.eventSeq}`;
        console.log(f);
        f.thumb =
          f.image.fileRepo.webPath + f.image.filePath + f.image.saveFileName;
      });
      return true;
    },
  });
};

const endDateDiff = (date) => {
  if (!isEmpty(date)) {
    return moment().format("YYYYMMDD") > uConvertDate(date, "YYYYMMDD");
  }
};

const goDetail = (data) => {
  router.push(`/event/${data.eventSeq}`);
};
</script>

<template>
  <div class="event">
    <div class="event-list">
      <PageTitle
        title="이벤트"
        desc="해당 메뉴에 대한 자세한 안내 문구 영역입니다.<br />확인 부탁드립니다.감사합니다."
      />
      <TabNav
        :modelValue="currentTab"
        :items="d.tabList"
        @update:modelValue="handleClickTab"
      />
      <div class="c-tab-contents__wrap">
        <NoData
          :contents="'등록된 이벤트가 없습니다'"
          v-if="isEmpty(d.dataList)"
        ></NoData>
        <template v-else v-for="tabTxt in d.tabList">
          <div v-show="currentTab == tabTxt.value" class="c-tab-contents">
            <div class="c-card--inline">
              <template v-for="list in d.dataList">
                <a
                  href="javascript:void(0)"
                  class="c-card c-card--border"
                  @click="goDetail(list)"
                >
                  <div class="c-card-img">
                    <p>
                      <img :src="list.thumb" :alt="`${list.title}`" />
                      <span class="c-badge" v-if="endDateDiff(list.atteEndDt)">
                        당첨자발표
                      </span>
                    </p>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title">
                      <a href="javascript:void(0)"
                        ><strong>{{ list.title }}</strong></a
                      >
                    </div>
                    <div class="c-card-foot">
                      <template v-if="endDateDiff(list.atteEndDt)">
                        {{ "마감" }}
                      </template>
                      <template v-else>
                        {{ uConvertDate(list.atteStartDt, "YYYY.MM.DD") }} ~
                        {{ uConvertDate(list.atteEndDt, "YYYY.MM.DD") }}
                      </template>
                    </div>
                  </div>
                </a>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
