<script setup>
import Intro from "./main/_intro";
import Story from "./main/_story";
import Ai from "./main/_ai";
import Mentoring from "./main/_mentoring";
import Consulting from "./main/_consulting";
import LearningSupport from "./main/_learningSupport";
import Join from "./main/_join";
import SupportCenter from "./main/_supportCenter";
import mentoringApply from "./main/mentoringApply";

import { call } from "@/api";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "main",
});

const router = useRouter();
const modal = useModalStore();

const mainPageData = reactive({
  isActive: false,
  firstLogin: uGetLoginInfo("firstLoginYn"),
  welcomeStep01: {},
  mentoringYn: uGetLoginInfo("mentoringYn"),
  mentoring: {},
  mentorYn: uGetLoginInfo("mentorYn"),
  mentorInfoRequired: uGetLoginInfo("mentorMatchingInfoRequired"),
  welcomeStep02: {},
  welcomeStep03: {},
  surveyItems: [],
  mentorInfo: {
    location1: "",
    location2: "",
    type: "",
  },
});

const keyDownFunc = ({ code }) => {
  if (isEqual(code, "KeyA")) {
    router.push("/dev");
  }
};

onUnmounted(() => {
  window.removeEventListener("keydown", keyDownFunc);
});

onMounted(() => {
  window.addEventListener("keydown", keyDownFunc);

  const scrollToTop = document.querySelector(".scrollToTop");
  const tabs = document.querySelectorAll(".c-tab-nav--link");
  const pages = document.querySelectorAll(".main__contents-section");
  const mainNav = document.querySelector("#mainNav");
  for (var i = 0; i < pages.length; i++) {
    //console.log(pages[i].offsetTop);
    document.addEventListener("scroll", function () {
      var afterPS = document.documentElement.scrollTop;
      if (afterPS > 1) {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        if (afterPS >= pages[7].offsetTop) {
          mainNav.scrollTo(tabs[7].parentNode.offsetLeft, 0);
          tabs[7].classList.add("active");
        } else if (afterPS >= pages[6].offsetTop) {
          mainNav.scrollTo(tabs[6].parentNode.offsetLeft, 0);
          tabs[6].classList.add("active");
        } else if (afterPS >= pages[5].offsetTop) {
          mainNav.scrollTo(tabs[5].parentNode.offsetLeft, 0);
          tabs[5].classList.add("active");
        } else if (afterPS >= pages[4].offsetTop) {
          mainNav.scrollTo(tabs[4].parentNode.offsetLeft - 8, 0);
          tabs[4].classList.add("active");
        } else if (afterPS >= pages[3].offsetTop) {
          mainNav.scrollTo(tabs[3].parentNode.offsetLeft - 8, 0);
          tabs[3].classList.add("active");
        } else if (afterPS >= pages[2].offsetTop) {
          mainNav.scrollTo(0, 0);
          tabs[2].classList.add("active");
        } else if (afterPS >= pages[1].offsetTop) {
          mainNav.scrollTo(0, 0);
          tabs[1].classList.add("active");
        } else if (afterPS >= pages[0].offsetTop) {
          mainNav.scrollTo(0, 0);
          tabs[0].classList.add("active");
        } else {
          mainNav.scrollTo(0, 0);
          tabs[0].classList.add("active");
        }
      }
    });
  }
  window.onresize = function () {
    for (var i = 0; i < pages.length; i++) {
      document.addEventListener("scroll", function () {
        var afterPS = document.documentElement.scrollTop;
        if (afterPS > 1) {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          if (afterPS >= pages[7].offsetTop) {
            mainNav.scrollTo(tabs[7].parentNode.offsetLeft, 0);
            tabs[7].classList.add("active");
          } else if (afterPS >= pages[6].offsetTop) {
            mainNav.scrollTo(tabs[6].parentNode.offsetLeft, 0);
            tabs[6].classList.add("active");
          } else if (afterPS >= pages[5].offsetTop) {
            mainNav.scrollTo(tabs[5].parentNode.offsetLeft, 0);
            tabs[5].classList.add("active");
          } else if (afterPS >= pages[4].offsetTop) {
            mainNav.scrollTo(tabs[4].parentNode.offsetLeft, 0);
            tabs[4].classList.add("active");
          } else if (afterPS >= pages[3].offsetTop) {
            mainNav.scrollTo(tabs[3].parentNode.offsetLeft - 8, 0);
            tabs[3].classList.add("active");
          } else if (afterPS >= pages[2].offsetTop) {
            mainNav.scrollTo(0, 0);
            tabs[2].classList.add("active");
          } else if (afterPS >= pages[1].offsetTop) {
            mainNav.scrollTo(0, 0);
            tabs[1].classList.add("active");
          } else if (afterPS >= pages[0].offsetTop) {
            tabs[0].classList.add("active");
            mainNav.scrollTo(0, 0);
          } else {
            tabs[0].classList.add("active");
            mainNav.scrollTo(0, 0);
          }
        }
      });
    }
  };

  if (
    isEqual(mainPageData.mentorYn, "Y") &&
    isEqual(mainPageData.mentorInfoRequired, "Y")
  ) {
    mainPageData.mentorInfo.isShow = true;
    getMentorCode();
  } else {
    if (isEqual(mainPageData.firstLogin, "Y")) {
      if (isEqual(mainPageData.mentoringYn, "Y")) {
        mainPageData.welcomeStep01.isShow = true;
        mainPageData.welcomeStep01.title = "환영해요";
        mainPageData.welcomeStep01.subTitle = "서울런 오신 것을 환영합니다.";
        mainPageData.welcomeStep01.description =
          "혼자 공부하기 힘든 분들을 위해 <br />멘토링 서비스를 무료로 제공하고 있어요 <br />멘토링을 신청 해보시겠어요?";
      } else {
        goNextWelcom("2");
      }
    }
  }
});

const getMentorCode = () => {
  call({
    method: "get",
    id: "멘토 추가입력 정보 코드",
    endpoint: "/api/login/mentoMatchingInfoForm",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        mainPageData.mentorInfo.locationList = data.mentor_dist_cd;
        mainPageData.mentorInfo.typeList = data.coaching_type_cd;
      }
    },
  });
};

const onSaveMentorInfo = () => {
  if (
    isEmpty(mainPageData.mentorInfo.location1) ||
    isEmpty(mainPageData.mentorInfo.location2)
  ) {
    modal.alert("알림", "멘토링 가능 지역을 선택해주세요.");
    return;
  }

  if (isEmpty(mainPageData.mentorInfo.type)) {
    modal.alert("알림", "멘토링 코칭 유형을 선택해주세요.");
    return;
  }

  call({
    method: "post",
    id: "멘토 추가입력 정보 저장",
    endpoint: "/api/login/mentoMatchingInfo",
    data: {
      availArea1: mainPageData.mentorInfo.location1,
      availArea2: mainPageData.mentorInfo.location2,
      availType: mainPageData.mentorInfo.type,
    },
    onResponse({ status, message }) {
      if (status === 200) {
        mainPageData.mentorInfo.isShow = false;
      } else {
        modal.alert("알림", message);
        mainPageData.mentorInfo.isShow = false;
      }
    },
  });
};

const goMentoring = () => {
  window.open("/mentorings");
};

const closeWelcomModal = (num) => {
  if (isEqual(num, "1")) {
    mainPageData.welcomeStep01.isShow = false;
  } else if (isEqual(num, "2")) {
    mainPageData.welcomeStep02.isShow = false;
  } else if (isEqual(num, "3")) {
    mainPageData.welcomeStep03.isShow = false;
  }

  uSetLoginInfo({ firstLoginYn: "N" });
};

const goNextWelcom = (num) => {
  if (isEqual(num, "2")) {
    closeWelcomModal("1");
    mainPageData.welcomeStep02.isShow = true;
    mainPageData.welcomeStep02.title = "경험해보세요";
    mainPageData.welcomeStep02.subTitle = "관심 추천을 받아보실래요?";
    mainPageData.welcomeStep02.description =
      "서울런에서는 도움이 되는 많은 컨텐츠가 준비되어 있어요 <br /> 관심사를 모르신다면 지금 AI 서울런에게 컨텐츠추천을 받아보세요";
  } else if (isEqual(num, "3")) {
    closeWelcomModal("2");

    call({
      method: "get",
      id: "설문지 조회",
      endpoint: "/api/sq/survey/prefer",
      data: {},
      onResponse({ data }) {
        mainPageData.welcomeStep03.survey = data;
        mainPageData.welcomeStep03.isShow = true;
        mainPageData.welcomeStep03.title = data.title;
        mainPageData.welcomeStep03.subTitle = "관심있으신 계열을 선택해주세요.";
        mainPageData.welcomeStep03.description = data.description;
        mainPageData.welcomeStep03.qustionItems =
          data.questions[0]?.questionItems;
      },
    });
  } else if (isEqual(num, "4")) {
    mainPageData.mentoring.isShow = false;
    mainPageData.welcomeStep02.isShow = true;
    mainPageData.welcomeStep02.title = "경험해보세요";
    mainPageData.welcomeStep02.subTitle = "관심 추천을 받아보실래요?";
    mainPageData.welcomeStep02.description =
      "서울런에서는 도움이 되는 많은 컨텐츠가 준비되어 있어요 <br /> 관심사를 모르신다면 지금 AI 서울런에게 컨텐츠추천을 받아보세요";
  }
};

const goMove = (num) => {
  if (isEqual(num, "1")) {
    mainPageData.mentoring.isShow = true;
    mainPageData.welcomeStep01.isShow = false;
  } else if (isEqual(num, "2")) {
    router.push("/interest");
  } else if (isEqual(num, "3")) {
    mainPageData.welcomeStep03.isShow = false;
  }
};

const saveSurvey = () => {
  if (isEmpty(mainPageData.surveyItems)) {
    mainPageData.welcomeStep03.isShow = false;
    return;
  }

  let param = {
    survPaperSeq: mainPageData.welcomeStep03.survey.survPaperSeq,
    survCndtSeq: mainPageData.welcomeStep03.survey.survCndtSeq,
    survCndtDivCode: mainPageData.welcomeStep03.survey.survCndtDivCode,
    questions: [
      {
        qustSeq: mainPageData.welcomeStep03.survey.questions[0]?.qustSeq,
        qustDivSeq: mainPageData.welcomeStep03.survey.questions[0]?.qustDivSeq,
        answer: mainPageData.surveyItems,
      },
    ],
  };

  call({
    method: "post",
    id: "설문지 저장",
    endpoint: "/api/sq/survey",
    data: param,
    onResponse({ status }) {
      if (status === 200) {
        mainPageData.welcomeStep03.isShow = false;
      }
    },
  });
};
</script>

<template>
  <!-- 멘토 추가 정보 입력-->
  <div class="c-modals" v-if="mainPageData.mentorInfo.isShow">
    <div class="c-modals__bg"></div>
    <div class="c-modals__inner">
      <div class="c-modals__head">멘토 추가 정보 입력</div>
      <div class="c-modals__contents">
        <div class="c-modals__title">
          멘토링 매칭을 위한 추가 정보를 입력해주세요.
        </div>
        <div class="c-modals__survey-col">
          <div class="c-modals__survey-col-item">
            <div class="c-form-group">
              <div class="c-form-label">멘토링 가능 지역</div>
              <div class="c-input-group c-input-group--type03">
                <select
                  class="c-form-control"
                  title="멘토링 가능 지역1"
                  v-model="mainPageData.mentorInfo.location1"
                >
                  <option value="" disabled>선택</option>
                  <template
                    v-for="list in mainPageData.mentorInfo.locationList"
                  >
                    <option :value="list.cd">{{ list.cdnm }}</option>
                  </template>
                </select>
                <select
                  class="c-form-control"
                  title="멘토링 가능 지역2"
                  v-model="mainPageData.mentorInfo.location2"
                >
                  <option value="" disabled>선택</option>
                  <template
                    v-for="list in mainPageData.mentorInfo.locationList"
                  >
                    <option :value="list.cd">{{ list.cdnm }}</option>
                  </template>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div class="c-modals__survey-col-item">
            <div class="c-form-group">
              <div class="c-form-label">멘토링 코칭 유형</div>
              <select
                class="c-form-control"
                title="멘토링 코칭 유형"
                v-model="mainPageData.mentorInfo.type"
              >
                <option value="" disabled>선택</option>
                <template v-for="list in mainPageData.mentorInfo.typeList">
                  <option :value="list.cd">{{ list.cdnm }}</option>
                </template>
              </select>
            </div>
          </div>
        </div>
        <div class="c-modals__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="onSaveMentorInfo"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 멘토 추가 정보 입력-->
  <!-- 첫로그인 설문 팝업 (1/3)-->
  <CommonContentsModal
    :data="mainPageData.welcomeStep01"
    @close="goNextWelcom('2')"
  >
    <template v-slot:innerContents>
      <div class="c-modals__contents">
        <div class="c-modals__welcome-img">
          <div class="c-modals__welcome-img-mask">
            <img src="@img/@temp/1.jpg" alt="서울런 오신 것을 환영합니다" />
          </div>
        </div>
        <div class="c-modals__welcome-link">
          <button class="c-btn" @click="goMentoring">
            <i class="ico ico-question">멘토링 이미지</i>
            멘토링이 궁금해요
          </button>
        </div>
        <div class="c-modals__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="goNextWelcom('2')"
            >
              다음에 신청할게요!
            </button>
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="goMove('1')"
            >
              당장 신청할게요!
            </button>
          </div>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 첫로그인 설문 팝업 (1/3)-->
  <!-- 멘토링 신청 팝업 -->
  <mentoringApply
    :isShow="mainPageData.mentoring.isShow"
    @close="goNextWelcom('4')"
    v-if="mainPageData.mentoring.isShow"
  />
  <!-- 멘토링 신청 팝업 -->
  <!-- 첫로그인 설문 팝업 (2/3)-->
  <CommonContentsModal
    :data="mainPageData.welcomeStep02"
    @close="goNextWelcom('3')"
  >
    <template v-slot:innerContents>
      <div class="c-modals__contents">
        <div class="c-modals__welcome-img">
          <div class="c-modals__welcome-img-mask">
            <img src="@img/@temp/1.jpg" alt="서울런 오신 것을 환영합니다" />
          </div>
        </div>
        <div class="c-modals__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="goNextWelcom('3')"
            >
              다음에 해볼게요!
            </button>
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="goMove('2')"
            >
              지금 해볼게요!
            </button>
          </div>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 첫로그인 설문 팝업 (2/3)-->
  <!-- 첫로그인 설문 팝업 (3/3)-->
  <CommonContentsModal
    :data="mainPageData.welcomeStep03"
    @close="closeWelcomModal('3')"
  >
    <template v-slot:innerContents>
      <div class="c-modals__contents">
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <div class="c-form-check-group c-form-check-group--col3">
                <div
                  class="c-form-check"
                  v-for="item in mainPageData.welcomeStep03.qustionItems"
                >
                  <input
                    v-model="mainPageData.surveyItems"
                    class="c-btn-check"
                    type="radio"
                    :id="`Field${item.qustItemSeq}`"
                    :title="`Field${item.qustItemSeq}`"
                    :value="item.qustItemDesc"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    :for="`Field${item.qustItemSeq}`"
                    >{{ item.qustItemDesc }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-modals__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-primary"
              @click="saveSurvey"
            >
              완료 했어요
            </button>
          </div>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 첫로그인 설문 팝업 (3/3)-->
  <div class="main">
    <div class="main__wrap">
      <div class="main__contents">
        <div class="main__contents-visual">
          <div class="main__contents-visual--text">
            <img
              src="@img/pic-main-visual-title.png"
              alt="로그인 팝업 타이틀 이미지"
            />
            <div class="main__contents-visual--message message1">
              <span>마음을 위한 상담도</span>
              <p>진로진학상담</p>
            </div>
            <div class="main__contents-visual--message message2">
              <span>같이 뛰어 갈 사람도</span>
              <p>멘토링</p>
            </div>
            <div class="main__contents-visual--message message3">
              <span>꿈을 위한 공부도</span>
              <p>AI학습지원</p>
            </div>
          </div>

          <div class="main__contents-visual--img">
            <img src="@img/pic-main-visual.png" alt="메인 이미지" />
          </div>
        </div>
        <div class="main__contents-nav">
          <nav class="c-tab-nav--btn">
            <ul id="mainNav">
              <li>
                <a class="c-tab-nav--link active" href="#SeoulLearn"
                  >서울런은?</a
                >
              </li>
              <li>
                <a class="c-tab-nav--link" href="#Story">성공스토리</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#AI">AI 추천</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#Mentoring">멘토링 시스템</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#Consulting">진로진학상담</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#LearningSupport">학습지원</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#Join">회원가입</a>
              </li>
              <li>
                <a class="c-tab-nav--link" href="#SupportCenter">지원센터</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="main__contents-section" id="SeoulLearn">
          <Intro></Intro>
        </div>
        <div class="main__contents-section" id="Story">
          <Story></Story>
        </div>
        <div class="main__contents-section" id="AI">
          <Ai></Ai>
        </div>
        <div class="main__contents-section" id="Mentoring">
          <Mentoring></Mentoring>
        </div>
        <div class="main__contents-section" id="Consulting">
          <Consulting></Consulting>
        </div>
        <div class="main__contents-section" id="LearningSupport">
          <LearningSupport></LearningSupport>
        </div>
        <div class="main__contents-section" id="Join">
          <Join></Join>
        </div>
        <div class="main__contents-section" id="SupportCenter">
          <SupportCenter></SupportCenter>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #222;
  &-inner {
    width: 120rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    color: #999;
    font-size: 1.5rem;
    @include tablet {
      width: auto;
      padding: 6rem 2.4rem;
    }
    @include mobile {
      padding: 6rem 1.6rem;
    }
  }
  &-head {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.2rem;
    font-size: 1.6rem;
    ul {
      display: flex;
      align-items: center;
      line-height: 1;
      li {
        display: flex;
        align-items: center;
        img {
          margin-right: 0.8rem;
        }
      }
      li + li {
        margin-left: 4rem;
      }
    }
    @include mobile {
      ul {
        li {
          font-size: 1.4rem;
          letter-spacing: -0.5px;
          img {
            max-width: 2rem;
            margin-right: 0.4rem;
          }
        }
        li + li {
          margin-left: 1rem;
        }
      }
    }
  }
  &-address {
    margin-bottom: 5.8rem;
    span {
      padding: 0 1.2rem;
    }
    p + p {
      margin-top: 0.8rem;
    }
    @include mobile {
      margin-bottom: 3rem;
      font-size: 1.4rem;
      span {
        padding: 0 0.2rem;
      }
    }
  }
  &-copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 0.1rem solid #474747;
    line-height: 1;
    p {
      white-space: nowrap;
    }
    select {
      &.c-form-control {
        width: 11.5rem;
        height: 3rem;
        border-radius: 0;
        flex-grow: unset;
        background-color: transparent;
        border: 0;
        padding: 0 3rem 0 0.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: $white;
      }
    }
    @include mobile {
      padding-top: 3rem;
      align-items: flex-start;
      flex-direction: column;
      select.c-form-control {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>
