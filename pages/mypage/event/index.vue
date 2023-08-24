<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";
import { useMypageStore } from "@/store";

definePageMeta({
  layout: "mypage",
});
const router = useRouter();
const mypageStore = useMypageStore();

const d = reactive({
  pageNumber: "",
  searchType: "A",
  state: "",
  startDate: "",
  endDate: "",
  data: {
    rows: [],
  },
});

onMounted(() => {
  getData();
});

const handleChangedFilter = (val1, val2) => {
  console.log(`${val1} ~ ${val2}`);
  d.startDate = val1;
  d.endDate = val2;
};

const getData = async () => {
  await call({
    id: "마이페이지 이벤트 조회",
    endpoint: "/api/sq/myevents",
    headers: "PUBLIC",
    data: {
      pageSize: 10,
      pageNumber: d.pageNumber,
      order: "DESC",
      sort: "openStartDt",
      selecter: d.searchType,
      //startDate: d.startDate,
      //endDate: d.endDate,
    },
    onResponse({ data }) {
      console.log("이벤트 조회 >> ", data);
      //event_cate 값
      //G - 경품, N - 일반/댓글, R -등수, S - SNS인증
      d.data = data;
      return true;
    },
  });
};

const changedIndex = (index) => {
  d.pageNumber = index;
  getData();
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-event">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 이벤트 관리</div>
            <div class="c-text-title-sub">
              <p>
                내가 응모한 이벤트를 확인하세요. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">상태별</label>
              <select
                title="셀렉트박스"
                id="status"
                class="c-form-control c-form-control-sm"
                v-model="d.searchType"
                @change="getData"
              >
                <option value="A">전체</option>
                <option value="N">진행중</option>
                <option value="E">마감</option>
                <option value="W">당첨</option>
              </select>
            </div>
            <div class="c-form-group">
              <CalendarFilter @changed="handleChangedFilter" />
            </div>
          </div>
          <div v-if="d.data.rows.length > 0" class="mypage__contents-body">
            <div class="mypage__contents-head--sm">
              총 {{ d.data.rows.length }}개
            </div>
            <div class="c-board__list">
              <div class="c-board__item" v-for="item in d.data.rows">
                <div class="c-board__item-img">
                  <a
                    href="javascript:void(0);"
                    @click="router.push(`/event/${item.eventSeq}`)"
                  >
                    <img
                      :src="
                        item.image.fileRepo.webPath +
                        item.image.fileRepo.linuxFileRepoPath +
                        item.image.saveFileName
                      "
                      alt="이벤트페이지 썸네일"
                  /></a>
                </div>
                <div class="c-board__item-body">
                  <div class="c-board__item-title">
                    <a
                      href="javascript:void(0);"
                      @click="router.push(`/event/${item.eventSeq}`)"
                    >
                      {{ item.title }}
                      <div class="c-badge c-badge-blue">
                        {{ item.winner }}
                      </div>
                    </a>
                  </div>
                  <div class="c-board__item-title-sub">
                    응모일 : {{ uConvertDate(item.regDtm, "YYYY.MM.DD") }}
                  </div>
                  <div class="c-board__item-foot">
                    <ul>
                      <li>{{ item.status }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              v-if="d.data?.rows?.length > 0"
              :pageNumber="d.data.pageNumber"
              :totalRecords="d.data.totalRecords"
              :totalPages="d.data.totalPages"
              @changedPageIndex="changedIndex"
            />
          </div>
          <div v-else class="mypage__contents-body">
            <NoData
              contents="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
            ></NoData>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
