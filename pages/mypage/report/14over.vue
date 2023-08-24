<script setup>
import Snb from "../_snb.vue";
import SnbTablet from "../_snbTablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import { Chart, registerables } from "chart.js";
import { Bar, PolarArea } from "vue-chartjs";

import { useMenuStore } from "@/store";
import { call } from "@/api";
import moment from "moment";

const menu = useMenuStore();

definePageMeta({
  layout: "mypage",
});

const calendar = ref();

Chart.register(...registerables);

const d = reactive({
  userNm: uGetLoginInfo("usernm"),
  couponCnt: 0,
  eventCnt: 0,
  alarmCnt: 0,
  menteeStatus: "",
  mentoringDate: "",
  siteList: [],
  siteDay: 0,
  currentDate: moment(),
  beforeDate: moment().add(-1, "month"),
  boardDate: moment().add(-1, "month"),
  baordMonth: null,
  isPrev: true,
  isNext: true,
  msg: "",
  attendDay: 0,
  attendDayList: [],
  cpName: "",
  cpAttend: 0,
  cpLearnTime: 0,
  cpRate: 0,
  cpAttendBadge: 1,
  cpRateBadge: 1,
  totalAttend: 0,
  totalLearnTime: 0,
  totalRate: 0,
  currentTab: 0,
  tabList: ["학습 참여도", "학습 열정도", "학습 지속도"],
  ageRank: "",
  ageRate: "",
  ageRankList: [],
  cpRankNm: "",
  cpRank: "",
  cpRate: "",
  cpRankList: [],
  schoolRankNm: "",
  schoolRank: "",
  schoolRate: "",
  schoolRankList: [],
  isPolarData: false,
  polarData: {
    labels: [],
    datasets: [
      {
        label: uGetLoginInfo("usernm"),
        data: [],
      },
    ],
  },
  polarOption: {
    maintainAspectRatio: false,
    responsive: true,
  },
  isBarData: false,
  barData: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  },
  barOption: {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  },
  attendBarData: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  },
  isLearnBar: false,
  learnTimeBarData: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  },
  rateBarData: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  },
  learnBarOption: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  },
  courseList: [],
  subjNm: isEmpty(uGetLoginInfo("cp")) ? "" : JSON.parse(uGetLoginInfo("cp")),
  subjList: [],
  noSubjNm: isEmpty(uGetLoginInfo("sub_cp"))
    ? ""
    : JSON.parse(uGetLoginInfo("sub_cp")).map((m) => m.cdnm),
  NoSubjList: [],
});

onMounted(async () => {
  if (moment(d.boardDate).isBefore(d.currentDate, "month")) {
    d.isNext = false;
  }

  d.baordMonth = d.boardDate.format("M");

  getCouponInfo();
  getEventInfo();
  getAlarmInfo();
  getMentoringStatus();
  getSiteInfo();
  getSiteChangeInfo();
  getDashBoardInfo();
  getRankInfo();
  getStatInfo();
  getCourseInfo();
  getSubjInfo();
  getNoSubjInfo();

  await calendar.value.moveBy(-1);
});

const getCouponInfo = () => {
  call({
    method: "get",
    id: "쿠폰 list 조회",
    endpoint: "/api/sq/coupon/list",
    data: {
      useYn: "Y",
    },
    onResponse({ data, status }) {
      if (status === 200) {
        d.couponCnt = data.totalRecords;
      }
    },
  });
};

const getEventInfo = () => {
  call({
    method: "get",
    id: "Event 진행 리스트 조회",
    endpoint: "/api/sq/events/current",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        d.eventCnt = data.totalRecords;
      }
    },
  });
};

const getAlarmInfo = () => {
  console.log("getAlarmInfo");
};

const getMentoringStatus = () => {
  call({
    method: "get",
    id: "멘토링 상태 조회(멘티)",
    endpoint: "/api/sq/mentee/status/" + uGetLoginInfo("userid"),
    data: {},
    onResponse({ status, message }) {
      console.log("status", status);
      console.log("message", message);

      // AB 멘토링 신청 전
      // RM 멘토링 재매칭 중
      // AC 멘토링 신청 완료, 매칭 대기 중
      // MC 멘토링 매칭 완료

      if (status === 200) {
        d.menteeStatus = message;
        if (isEqual(d.menteeStatus, "MC")) {
          getMentoringInfo();
        }
      }
    },
  });
};

const getMentoringInfo = () => {
  console.log("getMentoringInfo");

  call({
    method: "get",
    id: "멘토링 다음 일정 조회",
    endpoint: "/api/sq/mentoring/mgmt",
    data: {},
    onResponse({ data, status }) {
      console.log("data", data);
      console.log("status", status);

      if (status === 200) {
        d.mentoringDate =
          data.mentoringInfo.currentMentoring.currentMentoringDtm;
        console.log("d.mentoringDate ", d.mentoringDate);
        console.log("d.mentoringDate ");
      }
    },
  });
};

const getSiteInfo = () => {
  call({
    method: "get",
    id: "나의 학습사이트 조회",
    endpoint: "/api/sq/my/cp",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        d.siteList = data;
      }
    },
  });
};

const getSiteChangeInfo = () => {
  call({
    method: "get",
    id: "학습 사이트 변경 조회",
    endpoint: "/api/sq/my/course/modify",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        d.siteDay = data.dday;
      }
    },
  });
};

const goPreview = (url) => {
  window.open(url);
};

const onClickPrevMonth = async () => {
  console.log("onClickPrevMonth");
  d.boardDate = d.boardDate.add(-1, "month");
  d.baordMonth = d.boardDate.format("M");

  d.isNext = true;
  d.isPolarData = false;
  d.isBarData = false;
  d.isLearnBar = false;

  await calendar.value.moveBy(-1);

  getDashBoardInfo();
  getStatInfo();
};

const onClickNextMonth = async () => {
  console.log("onClickNextMonth");

  d.boardDate = d.boardDate.add(1, "month");
  d.baordMonth = d.boardDate.format("M");

  if (d.boardDate.format("M") === d.beforeDate.format("M")) {
    d.isNext = false;
  }

  d.isPolarData = false;
  d.isBarData = false;
  d.isLearnBar = false;

  await calendar.value.moveBy(1);

  getDashBoardInfo();
  getStatInfo();
};

const getDashBoardInfo = async () => {
  await call({
    method: "get",
    id: "학습 Dashboard 조회",
    endpoint: "/api/sq/my/learning/dashboard",
    data: {
      ym: d.boardDate.format("YYYYMM"),
    },
    onResponse({ data, status }) {
      if (status === 200) {
        d.msg = data.encourageMsg;
        d.attendDay = data.attendanceList.length;

        d.attendDayList = [];

        let attr = {
          highlight: true,
          dates: [],
        };

        data.attendanceList.forEach((f) => {
          attr.dates.push(new Date(moment(f).format()));
        });

        d.attendDayList.push(attr);

        d.cpAttend = 0;
        d.cpLearnTime = 0;
        d.cpRate = 0;
        d.cpAttendBadge = 0;
        d.cpRateBadge = 0;

        if (!isEmpty(data.monthHistory)) {
          d.cpName = data.monthHistory?.cpName;
          d.cpAttend = data.monthHistory?.cpCntnCnt;
          d.cpLearnTime = data.monthHistory?.lrnngTtocs;
          d.cpRate = data.monthHistory?.avgPrgrsRt;

          if (d.cpAttend < 10) {
            d.cpAttendBadge = 1;
          } else if (d.cpAttend >= 10 && d.cpAttend < 15) {
            d.cpAttendBadge = 2;
          } else if (d.cpAttend >= 15 && d.cpAttend < 20) {
            d.cpAttendBadge = 3;
          } else if (d.cpAttend >= 20 && d.cpAttend < 25) {
            d.cpAttendBadge = 4;
          } else {
            d.cpAttendBadge = 5;
          }

          if (d.cpRate <= 10) {
            d.cpRateBadge = 1;
          } else if (d.cpRate <= 20) {
            d.cpRateBadge = 2;
          } else if (d.cpRate <= 50) {
            d.cpRateBadge = 3;
          } else if (d.cpRate <= 80) {
            d.cpRateBadge = 4;
          } else {
            d.cpRateBadge = 5;
          }
        }

        d.totalAttend = data.yearHistory.cpCntnCnt;
        d.totalLearnTime = data.yearHistory.lrnngTtocs;
        d.totalRate = data.yearHistory.avgPrgrsRt;

        d.attendBarData.datasets = [];
        d.learnTimeBarData.datasets = [];
        d.rateBarData.datasets = [];

        d.attendBarData.labels = data.highMonthHistory.map(
          (m) => moment(m.ym).format("M") + "월"
        );
        d.attendBarData.datasets.push({
          label: "나",
          data: data.highMonthHistory.map((m) => m.cpCntnCnt),
        });

        d.learnTimeBarData.labels = data.highMonthHistory.map(
          (m) => moment(m.ym).format("M") + "월"
        );
        d.learnTimeBarData.datasets.push({
          label: "나",
          data: data.highMonthHistory.map((m) => m.lrnngTtocs),
        });

        d.rateBarData.labels = data.highMonthHistory.map(
          (m) => moment(m.ym).format("M") + "월"
        );
        d.rateBarData.datasets.push({
          label: "나",
          data: data.highMonthHistory.map((m) => m.avgPrgrsRt),
        });

        onClickTab(0);

        nextTick(() => {
          removeTabIndex();
          addArialLabel();
        });
      }
    },
  });
};

const onClickTab = (idx) => {
  d.currentTab = idx;
  d.isLearnBar = true;
};

const getRankInfo = () => {
  call({
    method: "get",
    id: "랭킹 조회",
    endpoint: "/api/sq/my/learning/dashboard/rank",
    data: {
      ym: d.boardDate.format("YYYYMM"),
    },
    onResponse({ data, status }) {
      console.log("getRankInfo ", data);
      console.log("getRankInfo ", status);
      if (status === 200) {
        d.ageRank = data.userRank.ageRk;
        d.ageRate = data.userRank.ageRt;
        d.cpRankNm = data.userRank.cpName;
        d.cpRank = data.userRank.cpRk;
        d.cpRate = data.userRank.cpRt;
        d.schoolRankNm = data.userRank.schlLevelNm;
        d.schoolRank = data.userRank.schlLevelRk;
        d.schoolRate = data.userRank.schlLevelRt;

        d.ageRankList = data.ageRankList;
        d.cpRankList = data.cpRankList;
        d.schoolRankList = data.schlLevelRankList;
      }
    },
  });
};

const getStatInfo = async () => {
  await call({
    method: "get",
    id: "나의 오픈 강의 통계 조회",
    endpoint: "/api/sq/my/learning/dashboard/course",
    data: {
      year: d.boardDate.format("YYYY"),
      month: d.boardDate.format("MM"),
    },
    onResponse({ data, status }) {
      if (status === 200) {
        d.polarData.datasets = [];
        d.barData.datasets = [];

        let labels = data.data.map((m) => m.parentCateName);
        let codes = data.data.map((m) => m.parentCateCode);
        let cnt = data.data.map((m) => m.myCnt);

        let colors = [];

        codes.forEach((v) => {
          colors.push(getBackGroundColor(v));
        });

        d.isPolarData = true;
        // d.polarData.labels = labels;
        d.polarData.datasets.push({
          data: cnt,
          backgroundColor: colors,
        });

        d.isBarData = true;
        d.barData.labels = labels;
        d.barData.datasets.push({
          label: uGetLoginInfo("usernm"),
          data: cnt,
          backgroundColor: colors,
        });
      }
    },
  });
};

// S230:인문, S210:자연, S220:교육, S230:공학, S240:자연, S250:의약, S260:예체능, S270:융복합, S280:문화체험, S290:전시, S300:공연,
const getBackGroundColor = (param) => {
  let colorVal = "";
  if (param === "S200") {
    colorVal = "#FF5C01";
  } else if (param === "S210") {
    colorVal = "#FFB73E";
  } else if (param === "S220") {
    colorVal = "#FED836";
  } else if (param === "S230") {
    colorVal = "#21BE44";
  } else if (param === "S240") {
    colorVal = "#30B8DC";
  } else if (param === "S250") {
    colorVal = "#2676C8";
  } else if (param === "S260") {
    colorVal = "#5E56DE";
  } else if (param === "S270") {
    colorVal = "#EC4C5B";
  } else if (param === "S280") {
    colorVal = "#111111";
  } else if (param === "S290") {
    colorVal = "#535353";
  } else if (param === "S300") {
    colorVal = "#999999";
  }

  return colorVal;
};

const getCourseInfo = () => {
  call({
    method: "get",
    id: "나의 수강 현황 조회",
    endpoint: "/api/sq/my/course/list",
    data: {
      courseCate: "D",
      sortType: "N",
      pageSize: 3,
      pageNumber: 1,
      order: "DESC",
    },
    onResponse({ data, status }) {
      console.log("수강 현황", data);
      if (status === 200) {
        d.courseList = data.rows;
      }
    },
  });
};

const getSubjInfo = async () => {
  await call({
    id: "서울런 AI 교과 추천 목록",
    endpoint: "/api/sq/recommend/cp/subj",
    onResponse({ data }) {
      console.log("서울런 AI 교과 추천 목록 >> ", data);
      d.subjList = data.slice(0, 3);
      return true;
    },
  });
};

const getNoSubjInfo = async () => {
  await call({
    id: "서울런 AI 비교과 추천 목록",
    endpoint: "/api/sq/recommend/cp/nonsubj",
    onResponse({ data }) {
      console.log("서울런 AI 비교과 추천 목록 >> ", data);
      d.noSubjList = data.slice(0, 3);
    },
  });
};

const copyToText = () => {
  modal.alert("알림", "강의명이 복사되었습니다.");
  window.navigator.clipboard.writeText(text);
};

const onClickAlarm = () => {
  menu.alarmCheck = true;
};

const removeTabIndex = () => {
  let calDay = document.getElementsByClassName("vc-day-content");

  if (!isEmpty(calDay)) {
    for (let i = 0; i < calDay.length; i++) {
      calDay[i].removeAttribute("tabindex");
    }
  }
};

const addArialLabel = () => {
  let activeBg = document.getElementsByClassName("vc-day-content vc-bg");

  if (!isEmpty(activeBg)) {
    for (let i = 0; i < activeBg.length; i++) {
      activeBg[i].ariaLabel = activeBg[i].ariaLabel + " 출석완료";
    }
  }
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-body">
            <div class="mypage__report">
              <div class="mypage__report-head">
                <div class="mypage__report-title--lg">학습 대시보드</div>
                <dl>
                  <dt class="mypage__report-head--title">
                    <div class="c-text-title-sub">
                      {{ d.userNm }}님<br class="c-pc" /><br class="c-tablet" />
                      만나서 반가워요.
                    </div>
                    <p>
                      오늘 해야 할 내용을 살펴보고<br class="c-mo" />
                      나의 학습 현황을 확인해 보세요!
                    </p>
                  </dt>
                  <dd class="mypage__report-head--info">
                    <ul class="mypage__report-my">
                      <li>
                        <a href="/mypage/coupon">
                          <i class="ico ico-coupon">쿠폰</i>
                          <p>사용가능 쿠폰</p>
                          <strong>{{ d.couponCnt }}</strong>
                        </a>
                      </li>
                      <li>
                        <a href="/event?section=OPEN">
                          <i class="ico ico-event">이벤트</i>
                          <p>참여가능 이벤트</p>
                          <strong>{{ d.eventCnt }}</strong>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" @click="onClickAlarm">
                          <i class="ico ico-alarm">알림</i>
                          <p>미확인 알림</p>
                          <strong>{{ d.alarmCnt }}</strong>
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="mypage__report-box">
                <dl class="mypage__report-site">
                  <dt v-if="isEqual(d.menteeStatus, 'AB')">
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--text">
                      <p class="c-text-center">
                        <strong class="c-text-primary">멘토링 신청</strong>
                        전이시네요.<br />
                        멘토링을 신청해 보시는건 어떨까요?
                      </p>
                    </div>
                    <a
                      href="/mypage/management/mentee"
                      class="mypage__report-link"
                    >
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dt
                    v-else-if="
                      isEqual(d.menteeStatus, 'RM') ||
                      isEqual(d.menteeStatus, 'AC')
                    "
                  >
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--text">
                      <p class="c-text-center">
                        멘토링 시작
                        <strong class="c-text-primary">준비중</strong>
                        이예요.<br />잠시만 기다려주세요~
                      </p>
                    </div>
                    <a
                      href="/mypage/management/mentee"
                      class="mypage__report-link"
                    >
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dt v-else-if="isEqual(d.menteeStatus, 'MC')">
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--day">
                      <strong>{{
                        uConvertDate(d.mentoringDate, "YYYY.MM.DD")
                      }}</strong>
                    </div>
                    <a
                      href="/mypage/management/mentee"
                      class="mypage__report-link"
                    >
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dd>
                    <div class="mypage__report-title--sm">나의 학습사이트</div>
                    <ul
                      class="mypage__report-site--logo"
                      v-if="!isEmpty(d.siteList)"
                    >
                      <li v-for="list in d.siteList">
                        <p>
                          <img
                            :src="`${list.nonActvLogoImgFile}`"
                            :alt="`${list.cpName} 로고`"
                          />
                        </p>
                        <a
                          href="javascript:void(0)"
                          class="mypage__report-link"
                          @click="
                            uGoToLearnSite(
                              uIsMobileDevice() ? list.mobUrl : list.pcUrl,
                              list.cpId
                            )
                          "
                        >
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                    </ul>
                    <NoData
                      v-else
                      :nodata="'등록된 사이트가 없습니다.'"
                    ></NoData>
                    <p>
                      * 학습사이트를 변경하고 싶으시면
                      <strong class="c-text-primary">D-{{ d.siteDay }}</strong>
                      후 가능해요.
                      <a
                        href="javascript:void(0)"
                        class="mypage__report-link"
                        @click="goPreview('/preview')"
                      >
                        미리보기
                        <i class="ico ico-arrow">더보기</i>
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>

              <div class="mypage__report-calendar--title">
                <button
                  class="c-btn c-btn--prev"
                  v-if="d.isPrev"
                  @click="onClickPrevMonth"
                >
                  <i class="ico ico-prev">이전</i>
                </button>
                <div class="c-text-title-lg">
                  {{ d.baordMonth }}월 학습 분석
                </div>
                <button
                  class="c-btn c-btn--next"
                  v-if="d.isNext"
                  @click="onClickNextMonth"
                >
                  <i class="ico ico-next">다음</i>
                </button>
              </div>
              <div class="mypage__report-box">
                <div class="mypage__report-banner">
                  <div class="mypage__report-banner--img">
                    <img src="@img/pic-report-ai.png" alt="학습 분석 이미지" />
                  </div>
                  <div class="mypage__report-banner--cont">
                    <p v-html="d.msg"></p>
                  </div>
                </div>
                <div class="mypage__report-calendar">
                  <div class="c-card--inline c-card--inline-col3">
                    <div class="c-card bg1">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">서울런과 이달에는</div>
                        <div class="c-text-title-lg">
                          <span class="c-text-primary">{{ d.attendDay }}</span>
                          일 만났어요.
                        </div>
                      </div>
                      <div class="c-calendar">
                        <DatePicker
                          ref="calendar"
                          :attributes="d.attendDayList"
                          :disabled-dates="{}"
                          color="bg"
                          transparent
                          borderless
                          expanded
                        ></DatePicker>
                      </div>
                    </div>
                    <div class="c-card bg2">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">{{ d.cpName }}에서</div>
                        <div class="c-text-title-lg">이만큼 공부했어요.</div>
                        <p>(이전달 학습 데이터 기준)</p>
                      </div>
                      <div class="mypage__report-calendar--body">
                        <div class="c-badge c-badge-lg c-badge-blue">
                          출석횟수
                        </div>
                        <p>
                          <strong>{{ uNumberWithComma(d.cpAttend) }}</strong
                          >회
                        </p>
                        <div class="c-badge c-badge-lg c-badge-blue">
                          총 학습시간
                        </div>
                        <p>
                          <strong>{{ uNumberWithComma(d.cpLearnTime) }}</strong
                          >분
                        </p>
                        <div class="c-badge c-badge-lg c-badge-blue">
                          수행률
                        </div>
                        <p>
                          <strong>{{ d.cpRate }}</strong
                          >%
                        </p>
                      </div>
                    </div>
                    <div class="c-card bg3">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">학습 달성도에 따라</div>
                        <div class="c-text-title-lg">이만큼 모았어요.</div>
                        <p>(이전달 학습 데이터 기준)</p>
                      </div>
                      <div class="mypage__report-calendar--body">
                        <div class="c-badge c-badge-lg c-badge-green">
                          출석뱃지
                        </div>
                        <ul class="mypage__report-badge">
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                v-if="d.cpAttendBadge >= 1"
                                src="@img/ic-badge-stamp-round1.svg"
                                alt="출석 시작"
                              />
                            </div>
                            <span>시작</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                v-if="d.cpAttendBadge >= 2"
                                src="@img/ic-badge-stamp-round2.svg"
                                alt="출석 10회"
                              />
                            </div>
                            <span>10회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                v-if="d.cpAttendBadge >= 3"
                                src="@img/ic-badge-stamp-round3.svg"
                                alt="출석 20회"
                              />
                            </div>
                            <span>15회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                v-if="d.cpAttendBadge >= 4"
                                src="@img/ic-badge-stamp-round4.svg"
                                alt="출석 20회"
                              />
                            </div>
                            <span>20회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                v-if="d.cpAttendBadge == 5"
                                src="@img/ic-badge-stamp-round5.svg"
                                alt="출석 25회"
                              />
                            </div>
                            <span>25회</span>
                          </li>
                        </ul>
                        <div class="c-badge c-badge-lg c-badge-green">
                          진도율뱃지
                        </div>
                        <ul class="mypage__report-badge">
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                v-if="d.cpRateBadge >= 1"
                                src="@img/ic-badge-stamp1.svg"
                                alt="진도뱃지 0 ~ 10%"
                              />
                            </div>
                            <span>0~10%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                v-if="d.cpRateBadge >= 2"
                                src="@img/ic-badge-stamp2.svg"
                                alt="진도뱃지 10% ~ 20%"
                              />
                            </div>
                            <span>~20%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                v-if="d.cpRateBadge >= 3"
                                src="@img/ic-badge-stamp3.svg"
                                alt="진도뱃지 20% ~ 30%"
                              />
                            </div>
                            <span>~30%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                v-if="d.cpRateBadge >= 4"
                                src="@img/ic-badge-stamp4.svg"
                                alt="진도뱃지 30% ~ 60%"
                              />
                            </div>
                            <span>~60%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                v-if="d.cpRateBadge == 5"
                                src="@img/ic-badge-stamp5.svg"
                                alt="진도뱃지 60% ~ 90%"
                              />
                            </div>
                            <span>~90%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mypage__report-info">
                  <div class="mypage__report-info--head">
                    <dl class="c-flex">
                      <dt>
                        <img src="@img/ic-info-title.svg" alt="이미지" />
                      </dt>
                      <dd>
                        <div class="mypage__report-info--title">
                          {{ d.boardDate.format("YYYY") }} 연간 학습량을 볼까요?
                        </div>
                        <p>(1월 1일 ~ 이전달까지의 누적 데이터 기준)</p>
                      </dd>
                    </dl>
                  </div>
                  <div class="mypage__report-info--body">
                    <ul class="c-flex">
                      <li>
                        <span>총 출석횟수</span>
                        <span class="c-text-black"
                          ><strong>{{ uNumberWithComma(d.totalAttend) }}</strong
                          >회</span
                        >
                      </li>
                      <li>
                        <span>총 학습시간</span>
                        <span class="c-text-black">
                          <strong>{{
                            uNumberWithComma(d.totalLearnTime)
                          }}</strong
                          >분
                        </span>
                      </li>
                      <li>
                        <span>평균 수행률</span>
                        <span class="c-text-black"
                          ><strong>{{ uNumberWithComma(d.totalRate) }}</strong
                          >%</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub c-flex">
                    <i class="ico ico-pencil"></i>
                    나의 학습 현황이에요
                  </div>
                  <span>
                    이자료는 서울런회원들의 학습이력기반으로 작성되었습니다.
                    (전월기준)
                  </span>
                </div>
                <div class="mypage__report-rank">
                  <div class="mypage__report-tab c-flex">
                    <div class="c-tab-nav">
                      <ul>
                        <li
                          v-for="(tab, index) in d.tabList"
                          :key="index"
                          :class="{ active: d.currentTab === index }"
                        >
                          <a
                            href="javascript:void(0)"
                            @click="onClickTab(index)"
                          >
                            <strong>{{ tab }}</strong>
                            <p :class="{ active: d.currentTab === 0 }">
                              월별 학습사이트 로그인 횟수<br />
                              (1일 최대 1회)
                            </p>
                            <p :class="{ active: d.currentTab === 1 }">
                              월별 총 학습시간
                            </p>
                            <p :class="{ active: d.currentTab === 2 }">
                              월별 평균진도율<br />
                              (0% 진도율 강좌 제외)
                            </p>
                          </a>
                          <div class="c-mo c-chart-img">
                            <p>
                              <img
                                src="@img/pic-chart-img01.png"
                                alt="이미지"
                              />
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="c-tab-contents__wrap">
                      <div v-if="d.currentTab == 0" class="c-tab-contents">
                        <p>
                          <Bar
                            v-if="d.currentTab == 0 && d.isLearnBar"
                            :data="d.attendBarData"
                            :options="d.learnBarOption"
                            :aria-label="`학습 참여도`"
                            role="img"
                          />
                        </p>
                      </div>
                      <div v-if="d.currentTab == 1" class="c-tab-contents">
                        <p>
                          <Bar
                            v-if="d.currentTab == 1"
                            :data="d.learnTimeBarData"
                            :options="d.learnBarOption"
                            :aria-label="`학습 열정도`"
                            role="img"
                          />
                        </p>
                      </div>
                      <div v-if="d.currentTab == 2" class="c-tab-contents">
                        <p>
                          <Bar
                            v-if="d.currentTab == 2"
                            :data="d.rateBarData"
                            :options="d.learnBarOption"
                            :aria-label="`학습 지속도`"
                            role="img"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__report-rank--wrap">
                    <div class="mypage__report-rank--title">
                      <div class="c-card--inline c-card--inline-col3">
                        <div class="c-card">
                          <div class="c-text-title-sm">
                            {{ d.schoolRankNm }}중에
                          </div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">{{
                              d.schoolRank
                            }}</span>
                            등 상위
                            <span class="c-text-blue">{{ d.schoolRate }}%</span
                            >에요
                          </div>
                        </div>
                        <div class="c-card">
                          <div class="c-text-title-sm">
                            {{ d.cpRankNm }}에서
                          </div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">{{ d.cpRank }}</span>
                            등 상위
                            <span class="c-text-blue">{{ d.cpRate }}%</span>에요
                          </div>
                        </div>
                        <div class="c-card">
                          <div class="c-text-title-sm">같은 나이에서</div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">{{ d.ageRank }}</span>
                            등 상위
                            <span class="c-text-blue">{{ d.ageRate }}%</span
                            >에요
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="c-card--inline c-card--inline-col3">
                      <div class="c-card">
                        <div
                          class="mypage__report-rank--list"
                          v-if="!isEmpty(d.schoolRankList)"
                        >
                          <table class="c-table">
                            <caption>
                              {{
                                d.schoolRankNm
                              }}의 Best 학습 랭킹
                            </caption>
                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th scope="col">랭킹</th>
                                <th scope="col">이름</th>
                                <th scope="col">방문횟수</th>
                                <th scope="col">학습시간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="list in d.schoolRankList">
                                <td>
                                  <template v-if="list.rk < 4">
                                    <i :class="`ico ico-best no-${list.rk}`">{{
                                      list.rk
                                    }}</i>
                                  </template>
                                  <template v-else>
                                    <span>{{ list.rk }}</span>
                                  </template>
                                </td>
                                <td>{{ list.userNm }}</td>
                                <td>{{ list.cpCntnCnt }}회</td>
                                <td>{{ list.lrnngTtocs }}시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <NoData v-else :nodata="'데이터가 없습니다.'"></NoData>
                      </div>
                      <div class="c-card">
                        <div
                          class="mypage__report-rank--list"
                          v-if="!isEmpty(d.cpRankList)"
                        >
                          <table class="c-table">
                            <caption>
                              듣고 계시는
                              {{
                                d.cpRankNm
                              }}
                              랭킹
                            </caption>

                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>랭킹</th>
                                <th>이름</th>
                                <th>방문횟수</th>
                                <th>학습시간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="list in d.cpRankList">
                                <td>
                                  <template v-if="list.rk < 4">
                                    <i :class="`ico ico-best no-${list.rk}`">{{
                                      list.rk
                                    }}</i>
                                  </template>
                                  <template v-else>
                                    <span>{{ list.rk }}</span>
                                  </template>
                                </td>
                                <td>{{ list.userNm }}</td>
                                <td>{{ list.cpCntnCnt }}회</td>
                                <td>{{ list.lrnngTtocs }}시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <NoData v-else :nodata="'데이터가 없습니다.'"></NoData>
                      </div>
                      <div class="c-card">
                        <div
                          class="mypage__report-rank--list"
                          v-if="!isEmpty(d.ageRankList)"
                        >
                          <table class="c-table">
                            <caption>
                              학습을 하고 있는 같은 연령 랭킹
                            </caption>

                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>랭킹</th>
                                <th>이름</th>
                                <th>방문횟수</th>
                                <th>학습시간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="list in d.ageRankList">
                                <td>
                                  <template v-if="list.rk < 4">
                                    <i :class="`ico ico-best no-${list.rk}`">{{
                                      list.rk
                                    }}</i>
                                  </template>
                                  <template v-else>
                                    <span>{{ list.rk }}</span>
                                  </template>
                                </td>
                                <td>{{ list.userNm }}</td>
                                <td>{{ list.cpCntnCnt }}회</td>
                                <td>{{ list.lrnngTtocs }}시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <NoData v-else :nodata="'데이터가 없습니다.'"></NoData>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub c-flex">
                    <i class="ico ico-book"></i>
                    가장 관심있어하는<br class="c-mo" />
                    오픈강좌를<br class="c-mo" />
                    확인해보세요
                  </div>
                  <a href="/mypage/interest" class="mypage__report-link">
                    추천 내용 더보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <ul class="mypage__report-chart">
                  <li>
                    <div class="mypage__report-chart--title">
                      {{ d.baordMonth }}월달 나의 오픈강좌 관심도
                    </div>
                    <p class="mypage__report-chart--text">
                      (카테고리별 컨텐츠 클릭에 따른 비율)
                    </p>
                    <div class="c-chart">
                      <PolarArea
                        v-if="d.isPolarData"
                        :data="d.polarData"
                        :options="d.polarOption"
                        :aria-label="`${d.baordMonth}월달 나의 오픈강좌 관심도`"
                        role="img"
                      />
                    </div>
                  </li>
                  <li>
                    <div class="mypage__report-chart--title">
                      {{ d.baordMonth }}월달 카테고리 별 오픈강좌 콘텐츠 클릭 수
                    </div>
                    <p class="mypage__report-chart--text">
                      (콘텐츠 클릭 수 내림차순 정렬)
                    </p>
                    <div class="c-chart">
                      <Bar
                        v-if="d.isBarData"
                        :data="d.barData"
                        :options="d.barOption"
                        :aria-label="`${d.baordMonth}월달 카테고리 별 오픈강좌 콘텐츠 클릭 수`"
                        role="img"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mypage__report-title--lg">서울런 AI 학습추천</div>
              <div class="mypage__report-box">
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub">
                    현재 학습중인 수강<br class="c-mo" />
                    내역이에요<br class="c-mo" />
                    <span>(최근 3개까지 노출됩니다.)</span>
                  </div>
                  <a href="/mypage/lecture-pick" class="mypage__report-link">
                    전체 이력보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list">
                  <div
                    class="c-card--inline c-card--inline-col3"
                    v-if="!isEmpty(d.courseList)"
                  >
                    <a
                      href="javascript:void(0)"
                      class="c-card c-card--border c-card--custom"
                      v-for="list in d.courseList"
                    >
                      <div class="c-card-logo">
                        <p>
                          <img
                            :src="`${list.nonActvLogoImgFilePath}`"
                            :alt="`${list.courseCateName}로고`"
                          />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              {{ list.courseName }}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <!-- <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>{{ list.progRate }}</dd>
                        </dl> -->
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>
                            {{ uConvertDate(list.lastStudyDtm, "YYYY.MM.DD") }}
                          </dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                :style="`width: ${list.progRate}%`"
                              ></div>
                            </div>
                            <strong class="c-text-primary"
                              >{{ list.progRate }}%</strong
                            >
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="c-card c-card--border c-card--nodata"
                      v-if="d.courseList.length < 3"
                    >
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <img src="@img/ch-report01.svg" alt="이미지" />
                        </div>
                        <div class="c-text-title">
                          과목을 더 추가하실 수 있습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                    </a>
                  </div>
                  <div class="c-card--inline c-card--inline-col3" v-else>
                    <a
                      href="javascript:void(0)"
                      class="c-card c-card--border c-card--nodata"
                    >
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <img src="@img/ch-report01.svg" alt="이미지" />
                        </div>
                        <div class="c-text-title">
                          과목을 더 추가하실 수 있습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub">
                    <strong class="c-text-blue">{{ d.subjNm?.cdnm }}</strong>
                    에서<br class="c-mo" />
                    학습기반으로<br class="c-mo" />
                    맞춤형 강좌를 찾았어요
                  </div>
                  <a href="/mypage/lecture-pick" class="mypage__report-link">
                    더 알아보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list">
                  <div class="c-card--inline" v-if="!isEmpty(d.subjList)">
                    <div class="c-card c-card--border" v-for="cp in d.subjList">
                      <div class="c-card-logo">
                        <a :href="`${cp.url}`" target="_blank">
                          <img
                            :src="cp.nonActvLogoImgFilePath"
                            :alt="`${cp.courseCateName} 로고`"
                          />
                        </a>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a :href="`${cp.url}`" target="_blank">
                            <strong v-html="cp.courseName"> </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          {{ cp.grade }}과정
                          {{ cp.subject ? ` · ${cp.subject}` : "" }}
                          {{ cp.courseType ? ` · ${cp.courseType}` : "" }}
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>
                            {{
                              cp.number_of_sessions
                                ? `총 ${cp.number_of_sessions}차시`
                                : ""
                            }}
                            {{
                              cp.number_of_sessions && cp.time_min
                                ? `, ${cp.number_of_sessions * cp.time_min}분`
                                : ""
                            }}
                            {{
                              !cp.number_of_sessions && cp.time_min
                                ? `${cp.time_min}분`
                                : ""
                            }}
                          </p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                            @click="copyToText(cp.courseName)"
                          >
                            <i class="ico ico-copy">화살표 이미지</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NoData
                    :contents="'현재 학습중인 수강 내역이 없습니다.'"
                    v-else
                  />
                </div>
                <div
                  class="mypage__report-box--title"
                  v-if="!isEmpty(d.noSubjNm)"
                >
                  <div class="mypage__report-title--sub">
                    <strong class="c-text-blue">{{
                      d.noSubjNm.toString()
                    }}</strong>
                    에서 좋아할 만한<br class="c-mo" />
                    콘텐츠를 찾았어요
                  </div>
                  <a href="/mypage/lecture-pick" class="mypage__report-link">
                    더 알아보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list" v-if="!isEmpty(d.noSubjNm)">
                  <div class="c-card--inline" v-if="!isEmpty(d.noSubjList)">
                    <div
                      class="c-card c-card--border"
                      v-for="subCp in d.noSubjList.slice(0, 4)"
                    >
                      <div class="c-card-logo">
                        <a :href="`${subCp.url}`" target="_blank">
                          <img
                            :src="subCp.nonActvLogoImgFilePath"
                            :alt="`${subCp.courseCateName} 로고`"
                          />
                        </a>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a :href="`${subCp.url}`" target="_blank">
                            <strong v-html="subCp.courseName"> </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>
                            {{ subCp.grade }}과정
                            {{ subCp.subject ? ` · ${subCp.subject}` : "" }}
                            {{
                              subCp.courseType ? ` · ${subCp.courseType}` : ""
                            }}
                          </span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>
                            {{
                              subCp.number_of_sessions
                                ? `총 ${subCp.number_of_sessions}차시`
                                : ""
                            }}
                            {{
                              subCp.number_of_sessions && subCp.time_min
                                ? `, ${
                                    subCp.number_of_sessions * subCp.time_min
                                  }분`
                                : ""
                            }}
                            {{
                              !subCp.number_of_sessions && subCp.time_min
                                ? `${subCp.time_min}분`
                                : ""
                            }}
                          </p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                            @click="copyToText(subCp.courseName)"
                          >
                            <i class="ico ico-copy">화살표 이미지</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NoData
                    :contents="'현재 학습중인 수강 내역이 없습니다.'"
                    v-else
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
