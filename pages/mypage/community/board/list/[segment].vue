<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { $dayjs } = useNuxtApp();

let {
  MENTORING: { MENTORING_BOARD_LIST },
  DATE_3U,
} = useAppConfig();

const {
  params: { segment },
} = useRoute();

const {
  onUpdateDateParams,
  onUpdateMonthSelected,
  endDate,
  startDate,
  params,
  monthSelected,
  data,
  error,
} = useReadParams();

const onLoadedEvent = async () => {
  onUpdateMonthSelected("all");

  Object.assign(params, {
    title: ref(""),
  });
  await handleFetchEvent();
};

onMounted(() => {
  document.getElementsByName("startDatePicker")[0].setAttribute("title", "기간별 조회 시작일자를 입력하세요");
  document.getElementsByName("endDatePicker")[0].setAttribute("title", "기간별 조회 종료일자를 입력하세요");
});

const handleFetchEvent = async (currentPageNumber = 0) => {
  try {
    params.pageNumber = currentPageNumber;
    await onUpdateDateParams().then(async () => {
      await call({
        id: "멘토링 커뮤니티 - 게시판 리스트",
        endpoint: MENTORING_BOARD_LIST.replace(/\{board\}/, segment),
        data: params,
        onResponse: ({ data: resData }) => {
          Object.assign(data, {
            ...resData,
          });
        },
      });
    });
  } catch (err) {
    console.error(err);
  }
};

await onLoadedEvent();

provide("params", params);
provide("onPageAction", handleFetchEvent);

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-notice__list">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <BoardHeader />
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">검색어</label>
              <input
                type="text"
                v-model="params.title"
                class="c-form-control c-form-control-sm"
                placeholder="검색어를 입력해주세요"
              />
            </div>
            <div class="c-form-group">
              <form>
                <fieldset>
                  <legend>
                    <div class="c-form-label">기간별</div>
                  </legend>
                  <div class="c-form-group c-form-group--search">
                    <div
                      class="c-form-check-group c-form-check-group--col4 c-form-check-group-month"
                    >
                      <div class="c-form-check">
                        <input
                          class="c-btn-check"
                          type="radio"
                          name="searchMonth"
                          id="searchMonthAll"
                          v-model="monthSelected"
                          value="all"
                          title="전체"
                        />
                        <label
                          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          for="searchMonthAll"
                          >전체</label
                        >
                      </div>
                      <div class="c-form-check">
                        <input
                          class="c-btn-check"
                          type="radio"
                          name="searchMonth"
                          id="searchMonth01"
                          v-model="monthSelected"
                          value="month"
                          title="1개월"
                        />
                        <label
                          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          for="searchMonth01"
                          >1개월</label
                        >
                      </div>
                      <div class="c-form-check">
                        <input
                          class="c-btn-check"
                          type="radio"
                          name="searchMonth"
                          id="searchMonth03"
                          v-model="monthSelected"
                          value="six-month"
                          title="6개월"
                        />
                        <label
                          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          for="searchMonth03"
                          >6개월</label
                        >
                      </div>
                      <div class="c-form-check">
                        <input
                          class="c-btn-check"
                          type="radio"
                          name="searchMonth"
                          id="searchMonth04"
                          v-model="monthSelected"
                          value="year"
                          title="1년"
                        />
                        <label
                          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          for="searchMonth04"
                          >1년</label
                        >
                      </div>
                    </div>
                    <div class="c-input-group c-input-group--calendar">
                      <div>
                        <VueDatePicker
                          name="startDatePicker"
                          v-model="startDate"
                          format="yyyy.MM.dd"
                          locale="ko"
                          class="date"
                          :enable-time-picker="false"
                          auto-apply
                          :clearable="false"
                          hide-input-icon
                          placeholder="기간별 조회 시작"
                        />
                      </div>
                      <span>~</span>
                      <div>
                        <VueDatePicker
                          name="endDatePicker"
                          v-model="endDate"
                          format="yyyy.MM.dd"
                          locale="ko"
                          class="date"
                          :enable-time-picker="false"
                          auto-apply
                          :clearable="false"
                          hide-input-icon
                          placeholder="기간별 조회 끝"
                        />
                      </div>
                    </div>
                    <button
                      class="c-btn"
                      type="button"
                      @click.prevent="() => handleFetchEvent(0)"
                    >
                      조회
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <template v-if="!isEmpty(data.rows)">
            <LazyBoardBodyNotice :data="data" v-if="segment === 'notice'" />
            <LazyBoardBodyShare :data="data" v-else />
          </template>
          <div class="c-notfound" v-else>
            <img
              src="@img/ch-table.svg"
              alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
            />
            <p>조회된 데이터가 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-table {
  &__head {
    @include mobile {
      margin-top: 4rem;
    }
  }
  td {
    strong {
      font-size: 1.6rem;
    }
  }
}
</style>
