<script setup>
import { call } from "@/api";
import { uConvertDate } from "@/utils/index";

definePageMeta({
  layout: "board",
});

const d = reactive({
  pageNum: 0,
  pageSize: 10,
  order: "DESC",
  sort: "boardSeq",
  searchType: "all",
  keyword: "",
  dataList: {
    pageNumber: "",
    totalRecords: "",
    totalPages: "",
    topBoards: [],
    boards: [],
  },
});

onMounted(() => {
  getNoticeData();
});

// 페이징
const changedIndex = (index) => {
  d.pageNum = index;
  getNoticeData();
};

const getNoticeData = async (keyword) => {
  d.keyword = keyword;

  await call({
    id: "공지사항 리스트 조회",
    endpoint: `/api/sq/boards/notices`,
    headers: "PUBLIC",
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNum,
      order: d.order,
      sort: d.sort,
      keyword: keyword,
      searchType: d.searchType,
    },
    onResponse({ data }) {
      console.log("공지사항 리스트 조회", data);
      d.dataList = data;

      d.dataList.topBoards.forEach((e, idx) => {
        e.category = getBoardType(e.etcTypeCode);
      });
      d.dataList.boards.rows.forEach((e, idx) => {
        // 전체게시글수 - (현재페이지-1)*페이지당 보여지는 게시물수 - i.index
        e.boardNum =
          d.dataList.boards.totalRecords - d.pageNum * d.pageSize - idx;

        e.category = getBoardType(e.etcTypeCode);
      });
      return true;
    },
  });
};

const getBoardType = (code) => {
  let boardType = "";

  switch (code) {
    case "EVEN":
      boardType = "[행사모집] ";
      break;
    case "LIVE":
      boardType = "[화상] ";
      break;
    case "POLL":
      boardType = "[설문] ";
      break;
  }

  return boardType;
};
</script>

<template>
  <div class="board">
    <PageTitle
      title="공지사항"
      desc="해당 메뉴에 대한 자세한 안내 문구 영역입니다.<br /> 확인 부탁드립니다.감사합니다."
      isSearch="true"
      @onSearch="getNoticeData"
    >
      <template v-slot:select>
        <select
          class="c-form-control"
          v-model="d.searchType"
          title="검색 카테고리 선택"
        >
          <option value="all">전체</option>
          <option value="title">제목</option>
          <option value="detail">내용</option>
        </select>
      </template>
    </PageTitle>
    <div class="board-list">
      <table>
        <caption>
          공지사항 리스트로 제목, 작성일자를 제공 합니다.
        </caption>
        <colgroup>
          <col width="80" />
          <col />
          <col width="80" />
          <col width="80" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in d.dataList.topBoards">
            <td class="board-list__order">
              <i class="ico ico-pin">고정 아이콘</i>
            </td>
            <td class="board-list__title">
              <p>
                <router-link :to="`/notice/${item.boardSeq}`">
                  <span v-if="item.category" v-html="item.category"></span>
                  <p
                    v-html="
                      item.title.replaceAll(
                        d.keyword,
                        `<strong
                    class='c-text-primary'
                    >${d.keyword}</strong
                  >`
                      )
                    "
                  ></p>
                  <i v-if="item.fileGrpSeq != ''" class="ico ico-down"
                    >다운로드</i
                  >
                  <i v-if="uIs24HoursPassed(item.regDtm)" class="ico ico-new"
                    >N</i
                  >
                </router-link>
                <i v-if="item.isNew" class="ico ico-new">N</i>
              </p>
            </td>
            <td class="board-list__date">
              {{ uConvertDate(item.regDtm, "YYYY.MM.DD") }}
            </td>
            <td class="board-list__hit">{{ item.hitCnt }}</td>
          </tr>
        </tbody>
        <tbody>
          <tr v-for="(item, index) in d.dataList.boards.rows">
            <td class="board-list__order">
              {{ item.boardNum }}
            </td>
            <td class="board-list__title">
              <p>
                <router-link :to="`/notice/${item.boardSeq}`">
                  <span v-if="item.replYn === 'Y'">└</span>
                  <span v-if="item.category" v-html="item.category"></span>
                  {{ item.title
                  }}<i v-if="uIs24HoursPassed(item.regDtm)" class="ico ico-new"
                    >N</i
                  >
                </router-link>
              </p>
            </td>
            <td class="board-list__date">
              {{ uConvertDate(item.regDtm, "YYYY.MM.DD") }}
            </td>
            <td class="board-list__hit">{{ item.hitCnt }}</td>
          </tr>
        </tbody>
      </table>
      <Pagination
        v-if="d.dataList?.boards?.rows?.length > 0"
        :pageNumber="d.pageNum"
        :totalRecords="d.dataList.boards.totalRecords"
        :totalPages="d.dataList.boards.totalPages"
        :pageSize="d.pageSize"
        @changedPageIndex="changedIndex"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  @include mobile {
    padding-top: 6rem;
  }
}
</style>
