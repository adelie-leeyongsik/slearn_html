<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";

definePageMeta({
  layout: "mypage",
});

const d = reactive({
  stateFilter: "",
  stateOptions: [
    { text: "전체", value: "" },
    { text: "답변대기중", value: "B" },
    { text: "답변완료", value: "C" },
  ],
  dataList: [],
  searchStDt: null,
  searchEnDt: null,
  pageSize: 10,
  pageNumber: 0,
  order: "DESC",
  sort: "regDtm",
});

onMounted(() => {
  getInquiryList();
});

const getInquiryList = async () => {
  await call({
    id: "마이페이지 > 1:1 문의 목록",
    endpoint: "/api/sq/board/qna/list",
    headers: "PUBLIC",
    data: {
      stPeriod: d.searchStDt,
      enPeriod: d.searchEnDt,
      replStatusCode: d.stateFilter === "" ? null : d.stateFilter,
      pageSize: d.pageSize,
      pageNumber: d.pageNumber,
      order: d.order,
      sort: d.sort,
    },
    onResponse({ data }) {
      d.dataList = data.rows;
      console.log("d.dataList ", d.dataList);
      d.dataList.forEach((f) => {
        f.link = `/mypage/inquiry/${f.board.boardSeq}`;
      });
      return true;
    },
  });
};

const onClickSearch = (val1, val2) => {
  d.searchStDt = val1;
  d.searchEnDt = val2;

  getInquiryList();
};
</script>

<template>
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/inquiry`" />
    <BreadCrumbs />
    <div class="mypage-inquiry">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/inquiry`" />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="1:1 문의 내역"
              desc="사이트 이용 질문을 남겨주세요<br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class='c-mo'
                />(1533-0909)로 연락주세요!"
            >
              <template v-slot:tail>
                <router-link to="/mypage/inquiry/write">
                  <Button
                    size="auto"
                    sizeType="small"
                    styleType="danger"
                    text="문의하기"
                  />
                </router-link>
              </template>
            </MypageTitle>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <Select
                label="상태별"
                v-model="d.stateFilter"
                :options="d.stateOptions"
                sizeType="small"
              />
            </div>
            <div class="c-form-group">
              <CalendarFilter @changed="onClickSearch" />
            </div>
          </div>
          <div class="mypage__contents-body" v-if="d.dataList.length > 0">
            <div class="c-table__wrap c-table__wrap-scroll">
              <div class="mypage__contents-head--sm">
                총 {{ d.dataList.length }}개
              </div>
              <table class="c-table c-table-center">
                <caption>
                  1:1 문의 내역 리스트로 카테고리, 내용, 작성일, 처리상태 를 볼
                  수 있습니다.
                </caption>
                <colgroup>
                  <col width="140" />
                  <col />
                  <col width="100" />
                  <col width="140" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">카테고리</th>
                    <th scope="col">내용</th>
                    <th scope="col">작성일</th>
                    <th scope="col">처리 상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in d.dataList">
                    <td>[{{ data.categoryName }}]</td>
                    <td class="c-table__title">
                      <p>
                        <router-link :to="data.link">
                          {{ data.board.title }}
                        </router-link>
                      </p>
                    </td>
                    <td>{{ uConvertDate(data.board.regDtm, "YYYY.MM.DD") }}</td>
                    <td>
                      <template v-if="isEqual(data.board.replStatusCode, 'C')">
                        <strong class="c-text-danger">답변완료</strong>
                      </template>
                      <template v-else>
                        <strong>답변대기</strong>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mypage__contents-body" v-else>
            <div class="mypage__contents-head--sm">총 0개</div>
            <div class="c-notfound">
              <img
                src="@img/ch-notfound.svg"
                alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
              />
              <p>
                등록된 질문이 없습니다. <br />
                자주하는 질문에서 먼저 확인해보는건 어떨까요?
              </p>
              <router-link to="/faq">
                <a href="#">자주하는 질문 바로가기</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mypage-list--type02 .mypage__head {
  padding: 0 17.8rem;
  @include tablet {
    padding: 0 6.6rem;
  }
  @include mobile {
    padding: 3.2rem 1.6rem;
  }
}
</style>
