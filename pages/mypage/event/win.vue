<script setup>
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";
import { useMypageStore, useModalStore } from "@/store";
import moment from "moment";
definePageMeta({
  layout: "mypage",
});
const router = useRouter();

const modal = useModalStore();
const currentUrl = new URLSearchParams(window.location.search);

/*
  이벤트 유형 
  일반 / 댓글 N
  SNS 인증 S
  첨부인증 F

  상품 선택 유형
  단일 지급형 S1
  경품형 SM
  등수형 R1
  등수선택형 RM
*/

const d = reactive({
  eventSeq: currentUrl.get("type"),
  isPrize: false,
  event: {
    openStartDt: "",
    openEndDt: "",
    seltStartDt: "",
    seltEndDt: "",
    winner: {
      giveSeq: "",
    },
  },
  giveaway: [],
  commentList: [],
  checkGivewayValue: "",
  pageSize: 10,
  pageNumber: 0,
  order: "DESC",
  sort: "eventSeq",
});
onMounted(() => {
  fetchData();
  getEventDetailComment();
});

const fetchData = async () => {
  await getData().then(function () {
    getPrizeData();
  });
};
const getData = async () => {
  await call({
    id: "마이페이지 이벤트 상세 조회",
    endpoint: `/api/sq/event/${d.eventSeq}`,
    headers: "PUBLIC",
    onResponse({ data }) {
      console.log("이벤트 상세 조회 >> ", data);
      d.event = data;

      // 임시 테스트 데이터
      // d.isEnd = false;
      // d.event.winner = {
      //   rankCode: "1",
      //   giveSeq: 3,
      //   giveSeltDtm: null,
      //   giveCode: null,
      // };

      return true;
    },
  });
};
const getPrizeData = async () => {
  await call({
    id: "마이페이지 이벤트 당첨 조회",
    endpoint: "/api/sq/myevent/giveway",
    headers: "PUBLIC",
    data: {
      eventSeq: d.eventSeq,
      eventPrizeType: d.event.eventPrizeType,
    },
    onResponse({ data }) {
      console.log("이벤트 당첨 조회 >> ", data);
      d.event.isEnd = moment().isAfter(d.event.seltEndDt);
      d.giveaway = data.eventGiveaways;
      d.isPrize = !isEmpty(data.event);
      return true;
    },
  });
};

const getEventDetailComment = async () => {
  await call({
    id: "이벤트 상세 댓글",
    endpoint: "/api/sq/event/comment/" + d.eventSeq,
    headers: "PUBLIC",
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNumber,
      order: d.order,
      sort: d.sort,
    },
    onResponse({ code, data }) {
      d.commentList = data;
      return true;
    },
  });
};

const onClickChoiceGiveway = () => {
  if (d.checkGivewayValue == "") {
    modal.alert(
      "알림",
      "경품을 선택하지 않으셨습니다. 선택 후 다시 시도해주세요"
    );
    return;
  }

  modal.confirm("알림", "선택하시겠습니까?", async () => {
    await call({
      id: "이벤트 선물 지정",
      endpoint: `/api/sq/myevent/giveway?eventSeq=${d.eventSeq}&eventGiveSeq=${d.checkGivewayValue}`,
      headers: "PUBLIC",
      method: "put",
      onResponse({ data }) {
        modal.alert("알림", "경품이 선택되었습니다");
        return true;
      },
    });
  });
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="event-view">
      <div class="event-view__title">
        <p>{{ d.event.title }}</p>
        <span
          >{{ uConvertDate(d.event.openStartDt, "YYYY.MM.DD") }} ~
          {{ uConvertDate(d.event.openEndDt, "YYYY.MM.DD") }}</span
        >
      </div>
      <!-- 20230308 수정. event-view__contents--win 클래스 삭제 -->
      <div class="event-view__contents">
        <div class="event-view__contents-head">
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li v-for="{ origFileName } in d.event.files">
                <a
                  href="javascript:void(0)"
                  @click.prevent="uFileDownload(file.fileSeq)"
                  class="c-badge c-badge-lg c-badge-light"
                >
                  <p>{{ origFileName }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="event-view__contents-win" v-if="d.isPrize">
          <h3
            v-if="
              d.event.eventPrizeType == 'R1' || d.event.eventPrizeType == 'RM'
            "
          >
            본 이벤트 {{ d.event.winner.rankCode }}등에 당첨되셨습니다.
          </h3>
          <h3 v-else>
            축하드립니다!<br />
            <span>{{ d.event.title }}</span
            >에 당첨되셨습니다!
          </h3>
          <div class="event-view__contents-win-confirm">
            <ul>
              <li>
                <div class="c-badge c-badge-lg">확인 01</div>
                <strong>회원정보를 꼭! 확인하세요~</strong>
                <span
                  >회원정보에 있는 내용으로 경품이 발송됩니다.<br />
                  * 실물 상품은 주소 / 기프티콘은 핸드폰 번호</span
                >
                <a href="/mypage/pw-check">회원정보 수정 바로가기</a>
              </li>
              <li>
                <div class="c-badge c-badge-lg">확인 02</div>
                <strong>궁금하신 사항이 있으신가요?</strong>
                <span
                  >고객센터로 문의하시면<br />
                  궁금하신 사항을 해결하실 수 있습니다.</span
                >
                <a href="/mypage/inquiry">1:1문의 바로가기</a>
              </li>
              <li
                v-if="
                  d.event.eventPrizeType === 'SM' ||
                  d.event.eventPrizeType === 'RM'
                "
              >
                <div class="c-badge c-badge-lg">확인 03</div>
                <strong>경품 선택 기한을 확인하세요.</strong>
                <span>{{
                  `${uConvertDate(
                    d.event.seltStartDt,
                    "YYYY.MM.DD"
                  )}~${uConvertDate(d.event.seltEndDt, "YYYY.MM.DD")}`
                }}</span>
              </li>
            </ul>
          </div>
          <div class="c-form-group">
            <div
              class="c-form-check-group c-form-check-group-1st"
              v-if="d.giveaway?.length === 1"
            >
              <div class="c-form-check">
                <div class="c-form-check-group-1st__text">당첨</div>
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin01"
                  ><strong>{{ d.giveaway[0].title }}</strong></label
                >
              </div>
            </div>
            <div class="c-form-check-group" v-else>
              <div class="c-form-check" v-for="item in d.giveaway">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  :value="item.giveSeq"
                  v-model="d.checkGivewayValue"
                  :id="`eventWin${item.giveSeq}`"
                  :checked="item.giveSeq == d.event.winner.giveSeq"
                  :disabled="d.event.isEnd"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  :for="`eventWin${item.giveSeq}`"
                  ><strong>{{ item.title }}</strong></label
                >
              </div>
            </div>
          </div>

          <div
            class="end-text"
            v-if="d.event.isEnd"
            style="font-size: 1.6rem; margin-top: 4rem"
          >
            경품 선택기한이 종료되었습니다. 고객센터에 문의해 주시길 바랍니다.
          </div>
          <br />
        </div>
        <div class="c-btn-group" v-if="d.eventType === 'G' && !d.event.isEnd">
          <button
            class="c-btn c-btn-lg c-btn-danger"
            @click="onClickChoiceGiveway"
          >
            <strong>{{
              d.event.winner.giveSeq == "" ? "선택하기" : "다시 선택하기"
            }}</strong>
          </button>
        </div>
        <div v-html="d.event.description" />
      </div>

      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-blue" @click="router.go(-1)">
          <strong>목록으로</strong>
        </button>
      </div>
      <Comments
        type="event"
        :data="d.commentList"
        :isSecret="false"
        :isWrite="false"
        @changedPageIndex="changedIndex"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.event-view__contents {
  border: 0;
  padding-bottom: 0;
}

.c-btn-group {
  gap: 1.6rem;
}
</style>
