<script setup>
import Snb from "../_snb.vue";
import SnbTablet from "../_snbTablet.vue";
import { call } from "@/api";

const { $dayjs } = useNuxtApp();

const {
  MENTORING: { MENTORING_SETTLE },
} = useAppConfig();

const { params, data } = useReadParams();

const currentTab = ref(0);
const tabList = reactive(["활동 정산내역", "교육 정산 내역"]);

const mentorType = ref(null); // VL 봉사형 , HW 시급형
const isSubmitted = ref(false);
const listParams = reactive({
  minYear: 2021,
  year: [],
  month: [],
});

const handleFetchEvent = async (currentPageNumber = 0) => {
  try {
    params.pageNumber = currentPageNumber;
    await call({
      id: "멘토링 관리 - 정산 내역 리스트",
      endpoint: MENTORING_SETTLE.replace(/{type}/, actionType.value),
      data: params,
      onResponse: ({ data: resData }) => {
        const cp = { ...resData };
        if (cp.hasOwnProperty("eduDetails")) {
          Object.assign(cp, {
            rows: cp.eduDetails,
          });
        } else {
          Object.assign(cp, {
            rows: cp.actDetails,
          });
        }

        mentorType.value = resData.mentorType;
        isSubmitted.value = true;
        Object.assign(data, {
          ...cp,
        });
      },
    });
  } catch (err) {
    console.error(err);
  }
};
const onLoadEvent = async () => {
  const nowDate = $dayjs();

  const maxDate = nowDate.clone().add(5, "year").format("YYYY");

  for (let i = listParams.minYear; i <= maxDate; i += 1) {
    listParams.year.push(i);
  }

  for (let i = 1; i <= 12; i += 1) {
    listParams.month.push((i < 10 ? `0${i}` : i).toString());
  }

  Object.assign(params, {
    actualYear: nowDate.clone().format("YYYY"),
    actualMonth: nowDate.clone().format("MM"),
  });
};

const actionType = computed(() => (currentTab.value === 0 ? "act" : "edu"));

const bindData = computed(() => {
  const {
    settleTotalSum,
    rows: { content, pageable, totalElements, totalPages },
  } = data;
  const { actualYear: year, actualMonth: month } = params;
  return {
    content,
    pageable,
    totalElements,
    totalPages,
    date: { year, month },
    settleTotalSum,
  };
});

watch(currentTab, async () => await handleFetchEvent());

await onLoadEvent();

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-calculate">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <MypageTitle
            title="내 정산 내역"
            desc="
            멘토링으로 제공된 정산현황입니다.
            <br />
            도움이 필요하실 땐<br class='c-mo' />
            서울런 고객센터(1533-0909)로 연락주세요!"
          />
          <div class="mypage__contents-search mypage__contents-search-inline">
            <div class="c-form-group">
              <label for="year" class="c-form-label">연도</label>
              <select
                class="c-form-control c-form-control-sm"
                id="year"
                v-model="params.actualYear"
              >
                <option v-for="(year, index) in listParams.year" :value="year">
                  {{ year }}
                </option>
              </select>
            </div>
            <div class="c-form-group">
              <label for="month" class="c-form-label">월</label>
              <select
                class="c-form-control c-form-control-sm"
                id="month"
                v-model="params.actualMonth"
              >
                <option
                  v-for="(month, index) in listParams.month"
                  :value="month"
                >
                  {{ month }}
                </option>
              </select>
            </div>
            <button
              class="c-btn c-btn-blue"
              type="button"
              @click.prevent="() => handleFetchEvent()"
            >
              조회
            </button>
          </div>
          <div class="mypage__contents-body">
            <div class="c-tab-nav" v-if="isSubmitted === true">
              <ul>
                <li
                  v-for="(tab, index) in tabList"
                  :key="index"
                  :class="{ active: currentTab === index }"
                >
                  <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
                </li>
              </ul>
            </div>
            <div class="c-tab-contents__wrap">
              <template v-if="isSubmitted === true">
                <template v-if="!isEmpty(data.rows.content)">
                  <div v-show="currentTab === 0" class="c-tab-contents">
                    <ManagementActivityTable
                      v-bind="{ ...bindData, mentorType }"
                      @changeTableHandler="(num) => handleFetchEvent(num)"
                    />
                  </div>
                  <div v-show="currentTab === 1" class="c-tab-contents">
                    <ManagementEducationTable
                      v-bind="{ ...bindData, mentorType }"
                      @changeTableHandler="(num) => handleFetchEvent(num)"
                    />
                  </div>
                </template>
                <CommonNotFound v-else>
                  <p>
                    아직 정산 전입니다<br />
                    월별로 조회가 가능해질거예요.
                  </p>
                </CommonNotFound>
              </template>
              <CommonNotFound v-else>
                <p>정산표를 보실 월을 선택하신 후 조회 버튼을 눌러보세요!</p>
              </CommonNotFound>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
