<script setup>
import moment from "moment";
import { useModalStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "event",
});

const modal = useModalStore();

const r = useRoute();
const router = useRouter();
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
  eventSeq: r.params.id,
  selectGivewaySeq: "",
  detail: {},
  commentList: [],
  pageSize: 10,
  pageNumber: 0,
  order: "DESC",
  sort: "eventSeq",
  fileYn: false,
  urlCnt: 0,
  secretYn: false,
  seqInfo: {},
  isTarget: false,
  isPrize: false,
  giveaway: [],
  checkGivewayValue: "",
  win: {},
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

const getWinData = async () => {
  await call({
    id: "내가 응모한 이벤트 상세 조회",
    endpoint: "/api/sq/myevent/detail",
    headers: "PUBLIC",
    data: {
      eventSeq: d.eventSeq,
    },
    onResponse({ data }) {
      console.log("내가 응모한 이벤트 상세 조회 >> ", data);
      d.selectGivewaySeq = data.winner.giveSeq;
      d.isPrize = data.winStatus === "당첨";
      d.win = data;
      d.checkGivewayValue = data.winner.giveSeq;
      console.log(">>>>>>>>당첨여부>>>>", d.winner.giveSeq);
      return true;
    },
  });
};

const getPrizeData = async () => {
  if (isEmpty(uGetLoginInfo("userid"))) return;

  await call({
    id: "마이페이지 이벤트 당첨 조회",
    endpoint: "/api/sq/myevent/giveway",
    headers: "PUBLIC",
    data: {
      eventSeq: d.eventSeq,
      eventPrizeType: d.detail.eventPrizeType,
    },
    onResponse({ data }) {
      console.log("이벤트 당첨 조회 >> ", data);

      d.detail.isEnd =
        moment().isAfter(d.detail.seltEndDt) &&
        moment(d.detail.seltEndDt).format("YYYY.MM.DD") !=
          moment().format("YYYY.MM.DD");
      d.giveaway = data.eventGiveaways;

      //당첨됐으면 조회
      if (!isEmpty(data.event)) {
        getWinData();
      }
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
const getData = async () => {
  await call({
    id: "이벤트 상세",
    endpoint: `/api/sq/event/${d.eventSeq}`,
    onResponse({ data }) {
      console.log("이벤트 상세 - ", data);

      data.title = (endDateDiff(data.atteEndDt) ? "[마감] " : "") + data.title;
      d.fileYn = isEqual(data.comtFileUseYn, "Y");
      //SNS 인증 이벤트에서만 url 입력
      d.urlCnt = data.eventCateCode === "S" ? data.shareUrlCnt : 0;
      d.secretYn = isEqual(data.secretYn, "Y");
      d.detail = data;
    },
  });
};

const getEventDetailComment = async () => {
  await call({
    id: "이벤트 상세 댓글",
    endpoint: "/api/sq/event/comment/" + d.eventSeq,
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNumber,
      order: d.order,
      sort: d.sort,
    },
    onResponse({ code, data }) {
      console.log("이벤트 댓글,", data);
      d.commentList = data;
    },
  });
};

const changedIndex = (index) => {
  d.pageNumber = index;
  getEventDetailComment();
};

const endDateDiff = (date) => {
  if (!isEmpty(date)) {
    return moment().format("YYYYMMDD") > uConvertDate(date, "YYYYMMDD");
  }
};

const goSaveComment = async (data) => {
  console.log("goSaveComment ", data);

  if (isEmpty(data.description)) {
    modal.alert("알림", "댓글을 입력해주세요.");
    return;
  }
  if (
    d.urlCnt > 0 &&
    isEmpty(data.shareUrl1) &&
    isEmpty(data.shareUrl2) &&
    isEmpty(data.shareUrl3)
  ) {
    modal.alert("알림", "주소를 입력해주세요.");
    return;
  }

  const isValid = await uFilteringPersonalInfo("", data.description);
  if (!isValid) return;

  // 초,중,고,비교과,멘토,일반 순으로 111111
  const targetArr = d.detail.schlLevelCode.split("");
  const targetType = uGetLoginInfo("schlLevel");

  switch (targetType) {
    case "SCHLVL_P001":
      //초등
      d.isTarget = targetArr[0] == 1;
      break;
    case "SCHLVL_P002":
      //중등
      d.isTarget = targetArr[1] == 1;
      break;
    case "SCHLVL_P003":
      //고등
      d.isTarget = targetArr[2] == 1;
      break;
    case "SCHLVL_P004":
      // 비교과
      d.isTarget = targetArr[3] == 1;
      break;
    // case "SCHLVL_P005":
    //   // 검정고시
    //   d.isTarget = targetArr[4] == 1;
    //   break;
  }

  d.isTarget = targetArr[4] == 1 && uGetLoginInfo("mentorYn") === "Y";
  d.isTarget =
    targetArr[5] == 1 && uGetLoginInfo("memberTypeCode") === "JOINKND_001";

  if (!d.isTarget) {
    modal.alert("알림", "이벤트 대상자가 아닙니다.");
    return;
  }

  const fd = new FormData();

  fd.append("description", data.description);
  fd.append("secretYn", data.secretYn ? "Y" : "N");
  fd.append("shareUrl1", data.shareUrl1);
  fd.append("shareUrl2", data.shareUrl2);
  fd.append("shareUrl3", data.shareUrl3);

  if (!isEmpty(data.file)) {
    data.file.forEach((f) => {
      fd.append("file", f);
    });
  }

  await call({
    method: "post",
    id: "댓글 저장",
    endpoint: "/api/sq/event/comment/" + d.eventSeq,
    headers: "FILE_UPLOAD",
    data: fd,
    onResponse({ data, status, message }) {
      if (status === 200) {
        modal.alert("알림", "댓글이 입력되었습니다.");
        getEventDetailComment();
      }
      //  else if (status === 400 && message === "Duplicate") {
      //   modal.alert("알림", "이벤트는 중복 참여할 수 없습니다.");
      // }
    },
  });
};

const goEditComment = (data) => {
  const fd = new FormData();

  fd.append("description", data.description);
  fd.append("secretYn", data.secretYn ? "Y" : "N");
  fd.append("shareUrl1", data.shareUrl1);
  fd.append("shareUrl2", data.shareUrl2);
  fd.append("shareUrl3", data.shareUrl3);

  if (!isEmpty(data.file)) {
    data.file.forEach((f) => {
      fd.append("file", f);
    });
  }

  call({
    method: "put",
    id: "댓글 수정",
    endpoint: `/api/sq/event/comment/${data.eventSeq}/${data.comtSeq}`,
    headers: "FILE_UPLOAD",
    data: fd,
    onResponse({ data, status }) {
      if (status === 200) {
        modal.alert("알림", "수정되었습니다.");
        getEventDetailComment();
      }
    },
  });
};

const goDelComment = (value) => {
  d.seqInfo = {
    eventSeq: value.eventSeq,
    comtSeq: value.comtSeq,
  };
  call({
    method: "delete",
    id: "댓글 삭제",
    endpoint: `/api/sq/event/comment/${d.seqInfo.eventSeq}/${d.seqInfo.comtSeq}`,
    onResponse({ data, status }) {
      if (status === 200) {
        modal.alert("알림", "삭제되었습니다.");
        getEventDetailComment();
      }
    },
  });
};
</script>

<template>
  <div class="event">
    <BreadCrumbs />
    <div class="event-view">
      <div class="event-view__title">
        <p>
          {{ d.detail.title }}
        </p>
        <span
          >{{ uConvertDate(d.detail.atteStartDt, "YYYY.MM.DD") }} ~
          {{ uConvertDate(d.detail.atteEndDt, "YYYY.MM.DD") }}</span
        >
      </div>
      <div class="event-view__contents">
        <div class="event-view__contents-head">
          <div class="c-form-group" v-if="d.detail?.files?.length > 0">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li v-for="file in d.detail.files">
                <a
                  href="javascript:void(0)"
                  @click.prevent="uFileDownload(file.fileSeq)"
                  class="c-badge c-badge-lg c-badge-light"
                >
                  <p>{{ file.origFileName }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="event-view__contents-win" v-if="d.isPrize">
          <h3
            v-if="
              d.detail.eventPrizeType == 'R1' || d.detail.eventPrizeType == 'RM'
            "
          >
            본 이벤트 {{ d.win.winner.rankCode }}등에 당첨되셨습니다.
          </h3>
          <h3 v-else>
            축하드립니다!<br />
            <span>{{ d.detail.title }}</span
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
                <a href="/mypage/inquiry/write">1:1문의 바로가기</a>
              </li>
              <li
                v-if="
                  d.detail.eventPrizeType === 'SM' ||
                  d.detail.eventPrizeType === 'RM'
                "
              >
                <div class="c-badge c-badge-lg">확인 03</div>
                <strong>경품 선택 기한을 확인하세요.</strong>
                <span>{{
                  `${uConvertDate(
                    d.detail.seltStartDt,
                    "YYYY.MM.DD"
                  )}~${uConvertDate(d.detail.seltEndDt, "YYYY.MM.DD")}`
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
                  :checked="item.giveSeq == d.win?.winner?.giveSeq"
                  :disabled="d.detail.isEnd"
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
            v-if="d.detail.isEnd"
            style="font-size: 1.6rem; margin-top: 4rem"
          >
            경품 선택기한이 종료되었습니다. 고객센터에 문의해 주시길 바랍니다.
          </div>
          <br />
        </div>
        <div
          class="c-btn-group"
          v-if="
            (d.detail.eventPrizeType === 'SM' ||
              d.detail.eventPrizeType === 'RM') &&
            !d.detail.isEnd &&
            d.giveaway?.length > 1
          "
        >
          <button
            class="c-btn c-btn-lg c-btn-danger"
            @click="onClickChoiceGiveway"
          >
            <strong v-if="d.selectGivewaySeq != ''">다시 선택하기</strong>
            <strong v-else>선택하기</strong>
          </button>
        </div>
        <br />
        <div
          class="event-view__contents-img"
          :class="{
            'event-view__contents-img--end': endDateDiff(d.detail.atteEndDt),
          }"
          v-html="d.detail.description"
        />
        <div class="event-view__contents-banner" v-if="!d.isPrize">
          <img src="@img/ch-event.svg" alt="1:1 문의하기 이미지" />
          <div class="event-view__contents-banner-text">
            <p>이벤트에 대해 궁금하신게 있으신가요?</p>
            <span
              >빠르고 정확하게 도움이 필요하실 땐 서울런 고객센터(1533-0909)로
              연락주세요!</span
            >
          </div>
          <button
            class="c-btn c-btn-sm c-btn-blue"
            @click="router.push('/mypage/inquiry/write')"
          >
            1:1 문의하기
          </button>
        </div>
      </div>
      <div class="c-btn-group">
        <Button
          @click="router.go(-1)"
          size="auto"
          :isBold="true"
          sizeType="large"
          styleType="danger"
          text="목록으로"
        />
      </div>

      <Comments
        :data="d.commentList"
        :isWrite="!endDateDiff(d.detail.atteEndDt)"
        :isFile="d.fileYn"
        :urlCnt="d.urlCnt"
        :isUrl="d.urlCnt > 0"
        :isSecret="d.secretYn"
        :boardType="'event'"
        @changedPageIndex="changedIndex"
        @handleSubmit="goSaveComment"
        @handleModifySubmit="goEditComment"
        @handleDeleteSubmit="goDelComment"
      />
    </div>
  </div>
</template>
