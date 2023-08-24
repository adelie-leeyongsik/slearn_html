<script setup>
/** 작업완료 (실제완료는 아래의 리스트 처리 필요)
 * 1. 미들웨어 연동 필요 (접근권한제어)
 * 3. 해당 페이지는 멘토링 영역의 카테고리만 들어올 수 있음(?)
 * **/
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { getUserRole } from "@/utils/gp";
import { call } from "@/api";

const {
  MENTORING: { MENTORING_COMMON_BEFORE_DETAIL },
} = useAppConfig();

const { data, error, params } = useReadParams();

const {
  params: { segment },
} = useRoute();

const { role } = getUserRole();

const handleFetchEvent = async () => {
  await call({
    id: "멘토링 관리 - 이전 멘토링 보기 (상세)",
    endpoint: MENTORING_COMMON_BEFORE_DETAIL.replace(/\{smtrIdx\}/, segment),
    data: params,
    onResponse: ({ data: resData }) => {
      Object.assign(data, {
        ...resData,
      });
    },
  });
};

const handlePagerClickEvent = async (index) => {
  params.pageNumber = index;
  await handleFetchEvent();
};

const onLoadEvent = async () => {
  await handleFetchEvent();
};

await onLoadEvent();

const pageableData = computed(() => {
  const {
    details: {
      totalElements: totalRecords,
      totalPages,
      pageable: { pageNumber },
    },
  } = data;
  return {
    pageNumber,
    totalRecords,
    totalPages,
  };
});

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
          />
          <div class="mypage__contents-body">
            <div class="mypage-management__before">
              <div class="mypage__schedule-list" v-if="isNull(error)">
                <div
                  class="mypage__schedule-list-head-wrap mypage__schedule-list-head-wrap-before"
                >
                  <div class="mypage__schedule-list-head">
                    <div class="mypage__schedule-list-text">
                      <div class="mypage__schedule-list-text-title">
                        <p>
                          [{{ data.statusName }}]
                          {{ data.reason }}
                        </p>
                      </div>
                      <div class="mypage__schedule-list-text-info">
                        {{ data.dtm }}
                      </div>
                    </div>
                  </div>
                  <div class="mypage__schedule-list-foot"></div>
                </div>
                <div class="mypage__schedule-list-body">
                  <div class="mypage__schedule-list-body-title">전체 일정</div>
                  <div class="c-table__wrap">
                    <table
                      class="c-table c-table-center mypage__schedule-table"
                    >
                      <caption>
                        강의 일정 테이블로 회차, 강의계획, 상태를 알 수
                        있습니다.
                      </caption>
                      <colgroup>
                        <col width="120" />
                        <col width="" />
                        <col width="120" />
                        <col width="120" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">회차</th>
                          <th scope="col">강의계획</th>
                          <th scope="col">시간</th>
                          <th scope="col">상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in data.details.content">
                          <td class="mypage__schedule-table-num">
                            {{ item.ord }}회차
                          </td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              {{ item.curriculum }}
                            </p>
                          </td>
                          <td>
                            <strong>{{ item.mentorDuration }}</strong>
                          </td>
                          <td class="mypage__schedule-table-status">
                            <span
                              :class="{
                                'c-text-danger': item.mentoringDtlCode === 'C',
                                'c-text-yellow': item.mentoringDtlCode === 'A',
                              }"
                              >{{ item.mentoringDtlCodeName }}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Pagination
                      v-bind="{ ...pageableData }"
                      @changedPageIndex="handlePagerClickEvent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
