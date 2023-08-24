<script setup>
import { call } from "@/api";
import moment from "moment";

definePageMeta({
  layout: "consulting",
});

onMounted(() => {
  getData();
});

const d = reactive({
  pageNum: 0,
  pageSize: 10,
  data: {},
});

// 페이징
const changedIndex = (index) => {
  d.pageNum = index;
  getData();
};

const getData = async () => {
  await call({
    id: "진로진학상담 전체 내역 조회",
    endpoint: "/api/sq/counsel/list",
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNum,
      order: "DESC",
      sort: "openStartDt",
    },
    onResponse({ data }) {
      console.log("진로진학상담 전체 내역 조회>>", data);
      d.data = data;
      d.data.rows.forEach((e, idx) => {
        e.boardNum = d.data.totalRecords - d.data.pageNumber * d.pageSize - idx;
      });

      return true;
    },
  });
};
</script>
<template>
  <div class="consulting">
    <PageTitle
      title="진로진학 상담"
      desc="설명설명설명설명설명설명설명설명설명 설명설명설명설명설명"
    />
    <div class="board-list">
      <table>
        <caption>
          진로진학 상담 리스트로 번호, 카테고리, 제목, 신청일, 상태
        </caption>
        <colgroup>
          <col width="76" />
          <col width="88" />
          <col />
          <col width="145" />
          <col width="88" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">카테고리</th>
            <th scope="col">제목</th>
            <th scope="col">신청일</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in d.data.rows">
            <td class="board-list__order">{{ item.boardNum }}</td>
            <!-- 카테고리 pc -->
            <td class="board-list__category">
              {{ item.counselFormCode === "RD" ? "진로상담" : "진학상담" }}
            </td>
            <!-- // 카테고리 pc -->
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <a :href="`/consulting/${item.counselSeq}`">
                  <!-- 카테고리 mobile -->
                  <span class="c-mo">{{ item.title }}</span>
                  <!-- // 카테고리 mobile -->
                  <div>{{ item.title }}</div>
                </a>
                <i v-if="uIs24HoursPassed(item.regDtm)" class="ico ico-new"
                  >N</i
                >
              </div>
            </td>
            <td class="board-list__date">
              {{ uConvertDate(item.openStartDt, "YYYY.MM.DD") }}
            </td>
            <td class="board-list__status">
              {{ moment().isBefore(item.openEndDt) ? "신청중" : "마감" }}
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        v-if="d.data?.rows?.length > 0"
        :pageNumber="d.data.pageNumber"
        :totalRecords="d.data.totalRecords"
        :totalPages="d.data.totalPages"
        :pageSize="d.pageSize"
        @changedPageIndex="changedIndex"
      />
    </div>
  </div>
</template>
