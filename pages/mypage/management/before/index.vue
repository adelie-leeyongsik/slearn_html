<script setup>
/** 작업완료 (실제완료는 아래의 리스트 처리 필요)
 * 1. 미들웨어 연동 필요 (접근권한제어)
 * 2. 접근권한제어에 따른 활동증명서 요청 API
 * 3. 검색결과 / 데이터가 없을 경우 공통 정책 확립 안됨 (작업안됨)
 * 4. 카테고리 마크업/디자인 안됨
 * 5. 멘토링/신청서 카테고리에 따른 상세보기 토글 필요
 * **/
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useMentoringStore, useModalStore } from "@/store";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { $dayjs } = useNuxtApp();
const {
  startDate,
  endDate,
  params,
  monthSelected,
  onUpdateDateParams,
  onUpdateMonthSelected,
  data,
  error,
} = useReadParams();

const modal = useModalStore();
const {
  modalProps,
  setDispatchModalProps,
  setModalFields,
  setDisplayToggle,
} = useMentoringStore();

const masks = ref({
  input: "YYYY.MM.DD",
});

let {
  MENTORING: {
    MENTORING_COMMON_BEFORE_LIST,
    MENTORING_MENTOR_BEFORE_LIST_CATE_APPLICATION,
    // MENTORING_MENTOR_SEND_CERTIFICATE,
  },
  DATE_3U,
} = useAppConfig();

const { role } = getUserRole();

const router = useRouter();

const onLoadEvent = async () => {
  onUpdateMonthSelected("all");

  Object.assign(params, {
    startDate,
    endDate,
    typeCd: "M",
  });
  
  setModalFields([ "activityCertificateReq", ]);

  await handleFetchEvent();
};

const handleFetchEvent = async () => {
  try {
    let REST_PATH = MENTORING_COMMON_BEFORE_LIST.replace(/{role}/, role);

    const cp = { ...params };
    Object.assign(params, {
      startDate: cp.startDate ? $dayjs(cp.startDate).format("YYYY.MM.DD") : '',
      endDate: cp.startDate ? $dayjs(cp.endDate).format("YYYY.MM.DD") : '',
    });

    await call({
      id: "멘토링 관리 - 이전 멘토링 보기 리스트",
      endpoint: REST_PATH,
      data: params,
      onResponse: ({ data: resData }) => {
        Object.assign(data, {
          ...resData,
        });
      },
    });
  } catch (err) {
    alert(`${err.status}, ${err.statusText}`);
  }
};
const openActivityCertificateReq = () => {
  // 활동 증명서 신청 팝업 Open
  setDispatchModalProps("activityCertificateReq", null);
};

// 활동 증명서 요청후 콜백
const activityCertificateRequestCallback = async () => {
  setDisplayToggle("activityCertificateReq"); // 팝업닫기

  // 신청서 조회
  if (params.typeCd !== "R") {
    params.typeCd = "R";  // 카테고리(R: 신청서)
    onUpdateMonthSelected("all");  // 기간별(전체)
  }

  await handleFetchEvent();
};

onMounted(() => {
  document.getElementsByName("startDatePicker")[0].setAttribute("title", "기간별 조회 시작일자를 입력하세요");
  document.getElementsByName("endDatePicker")[0].setAttribute("title", "기간별 조회 종료일자를 입력하세요");
});

const handlePagerClickEvent = async (index) => {
  params.pageNumber = index;
  await handleFetchEvent();
};

onLoadEvent();

const isMentor = computed(() => role === "mentor");

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-management">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <MypageTitle
            title="이전 멘토링 보기"
            desc="
              종료되거나 취소된 멘토링 내역을 확인하실 수 있습니다. <br />
              도움이 필요하실 땐 서울런 고객센터<br class='c-mo'/>
              (1533-0909)로 연락주세요!"
          >
            <template #tail>
              <button
                class="c-btn c-btn-sm c-btn-danger"
                @click.prevent="openActivityCertificateReq"
                v-if="isMentor === true"
              >
                활동증명서 신청
              </button>
            </template>
          </MypageTitle>
          <div class="mypage__contents-body">
            <div class="mypage-management__before">
              <div class="mypage__contents-search">
                <form action="">
                  <fieldset>
                    <div class="c-form-group" v-if="isMentor === true">
                      <legend>
                        <label for="category" class="c-form-label"
                          >카테고리별</label
                        >
                      </legend>

                      <select
                        v-model="params.typeCd"
                        id="category"
                        class="c-form-control c-form-control-sm"
                      >
                        <option value="M">멘토링</option>
                        <option value="R">신청서</option>
                      </select>
                    </div>
                    <div class="c-form-group">
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
                              title="1개월"
                              value="month"
                              v-model="monthSelected"
                            />
                            <label
                              class="c-btn c-btn-lg c-btn-danger c-btn-outline c-btn-outline-secondary"
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
                              title="6개월"
                              value="six-month"
                              v-model="monthSelected"
                            />
                            <label
                              class="c-btn c-btn-lg c-btn-danger c-btn-outline c-btn-outline-secondary"
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
                              title="1년"
                              value="year"
                              v-model="monthSelected"
                            />
                            <label
                              class="c-btn c-btn-lg c-btn-danger c-btn-outline c-btn-outline-secondary"
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
                              :maxDate="endDate"
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
                              :minDate="startDate"
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
                          type="button"
                          class="c-btn c-btn-blue"
                          @click.prevent="handleFetchEvent"
                        >
                          조회
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>

              <template v-if="!isEmpty(data.rows)">
                <div class="c-table__wrap c-table__wrap-scroll">
                  <div class="c-table__head">
                    <p>총 {{ data?.totalRecords }}개</p>
                  </div>
                  <table class="c-table c-table-center">
                    <caption>
                      이전 멘토링 보기로 날짜, 사유, 상태, 상세보기를 볼 수
                      있습니다.
                    </caption>
                    <colgroup>
                      <col width="120" />
                      <col width="120" />
                      <col width="" />
                      <col width="120" />
                      <col width="120" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">날짜</th>
                        <th scope="col">카테고리</th>
                        <th scope="col">사유</th>
                        <th scope="col">상태</th>
                        <th scope="col">상세보기</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr
                        v-for="(item, index) in data.rows"
                        :key="`item-page-${index}`"
                      >
                        <td>
                          {{ item.dtm }}
                        </td>
                        <td>[{{ item.type }}]</td>
                        <td class="c-table__title">
                          <p>
                            <template v-if="item.typeCd === 'M'">
                              <nuxt-link
                                :to="`/mypage/management/before/${item.idx}`"
                              >
                                {{ item.reason }}
                              </nuxt-link>
                            </template>
                            <template v-else>
                              멘토링 활동내역 증명서 신청합니다.
                            </template>
                          </p>
                        </td>
                        <td>
                          <strong>{{ item.statusName }}</strong>
                        </td>
                        <td>
                          <nuxt-link
                            class="c-table__link"
                            :to="`/mypage/management/before/${item.idx}`"
                            v-if="item.typeCd === 'M'"
                            >상세보기</nuxt-link
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Pagination
                  v-bind="{ ...data }"
                  @changedPageIndex="handlePagerClickEvent"
                />
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
    </div>
    <template v-if="modalProps.activityCertificateReq.show === true">
      <ModalActivityCertificateReq v-bind="{ ...modalProps.activityCertificateReq }" @request="activityCertificateRequestCallback" /> <!-- 활동 증명서 신청 -->
    </template>
  </div>
</template>
