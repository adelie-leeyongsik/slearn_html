<script setup>
import { useLoginStore, useMenuStore } from "@/store";
import { call } from "@/api";

const router = useRouter();
const login = useLoginStore();
const menu = useMenuStore();

const d = reactive({
  alarm: computed(() => menu.alarmCheck),
  profile: false,
  GnbHover: false,
  GnbMo: false,
  userId: uGetLoginInfo("userid"),
  isAlert: false,
  auth: uGetLoginInfo("authorities"),
  alarmNotice: false,
  alarmList: [],
});

onMounted(() => {
  var myCss = { holder: { maxWidth: "1200px" } };
  Yjs.Gnb.init("G242", "seoul-common-gnb", myCss);

  if (!isEmpty(d.userId)) {
    getAlarmInfo();
  }
});

watch(
  () => login.userId,
  (newVal) => {
    if (!isEmpty(newVal)) {
      d.userId = login.userId;
    }
  }
);

const goMyPage = () => {
  if (isEqual(uGetLoginInfo("qlfcRequired"), "Y")) {
    return;
  } else if (isEqual(uGetLoginInfo("slAgrRequired"), "Y")) {
    return;
  } else if (isEqual(uGetLoginInfo("lrnpltChgAvail"), "Y")) {
    return;
  } else {
    if (isEmpty(d.userId)) {
      login.isAlert = true;
    } else {
      let memeberType = uGetLoginInfo("memberTypeCode");
      let mentorYn = uGetLoginInfo("mentorYn");
      let wasMentorYn = uGetLoginInfo("wasMentorYn");

      if (isEqual(memeberType, "JOINKND_002")) {
        //차상위 멘티
        router.push("/mypage/report");
      } else if (isEqual(mentorYn, "Y")) {
        //멘토
        router.push("/mypage/management/mentor");
      } else if (isEqual(mentorYn, "Y") && isEqual(firstLoginYn, "Y")) {
        //멘토 첫로그인
        router.push("/mypage/edu/apply");
      } else if (
        !isEqual(wasMentorYn, "Y") &&
        isEqual(memeberType, "JOINKND_001")
      ) {
        //차상위 멘티 > 일반
        router.push("/mypage/lecture");
      } else if (
        isEqual(wasMentorYn, "Y") &&
        isEqual(memeberType, "JOINKND_001")
      ) {
        //멘토 > 일반
        router.push("/mypage/lecture");
      }
    }
  }
};

const logout = () => {
  call({
    method: "post",
    id: "로그아웃",
    endpoint: "/api/login/logout",
    data: {},
    onResponse({ data, status, message }) {
      console.log("logoutstatus", status);
      if (status === 200) {
        login.userId = "";
        d.userId = "";
        sessionStorage.clear();
        router.push("/");
      }
    },
  });
};

const getAlarmInfo = () => {
  call({
    method: "get",
    id: "알림 조회",
    endpoint: "/api/sq/my/alarm",
    onResponse({ data, status }) {
      console.log("data", data);
      console.log("status", status);

      d.alarmNotice =
        data.filter((v) => isEqual(v.readYn, "N")).length > 0 ? true : false;

      d.alarmList = data;

      d.alarmList.forEach((f) => {
        f.desc = f.alarmMsg.desc.replace(/(?:\\r\\n|\\r|\\n)/g, "<br />");
      });
    },
  });
};

const goMove = (id, url) => {
  call({
    method: "put",
    id: "알림 읽음 표시",
    endpoint: "/api/sq/my/alarm/" + id,
    onResponse({ data, status }) {
      if (status === 200) {
        router.push(url);
      }
    },
  });
};

const onClickAlarm = () => {
  menu.alarmCheck = !menu.alarmCheck;
  d.profile = false;
};
</script>

<template>
  <div id="seoul-common-gnb"></div>
  <header :class="{ active: d.GnbHover === true }">
    <div class="header">
      <router-link to="/" class="header__logo"
        ><img src="@img/logo.png" alt="서울형교육플랫폼 로고"
      /></router-link>
      <div class="header__gnb" :class="{ active: d.GnbMo === true }">
        <!-- 로그인 전 -->
        <div class="main__login-box" v-if="isEmpty(d.userId)">
          <div class="main__login-item">
            <i class="ico ico-lock">로그인 이미지</i>
            <div class="main__login-title">
              로그인하고 회원님의<br />
              맞춤 정보를 확인해보세요
            </div>

            <button
              class="c-btn c-btn-block c-btn-danger"
              @click="
                () => {
                  router.push('/login');
                  d.GnbMo = false;
                }
              "
            >
              로그인
            </button>
          </div>
          <div class="main__login-item">
            <div class="main__login-title">나의 학습 바로가기</div>
            <button
              class="c-btn c-btn-block c-btn-gray"
              @click="
                () => {
                  router.push('/join/qualification');
                  d.GnbMo = false;
                }
              "
            >
              회원가입
            </button>
          </div>
        </div>
        <!-- //로그인 전 -->
        <nav @mouseover="d.GnbHover = true" @focusin="d.GnbHover = true">
          <div class="header__gnb-item">
            <!-- 230712 서비스소개 -> 서울런 이야기 수정 -->
            <a href="javascript:void(0);">서울런 소개</a>
            <ul>
              <li>
                <router-link to="/pub/temp/1">서울런 이야기</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/2">회원가입 안내</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/3">확인방법안내</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/4">온라인콘텐츠 안내</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/5">멘토링서비스 안내</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/6">진로진학상담 안내</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/7">맞춤형추천 안내</router-link>
              </li>
            </ul>
          </div>
          <div class="header__gnb-item">
            <a href="javascript:void(0)">멘토링</a>
            <ul>
              <li>
                <router-link to="/pub/temp/8">멘토링 소개</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/9">우수 멘토링이야기</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/10">멘토 지원</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/11">멘토 지원서 작성</router-link>
              </li>
              <li>
                <router-link to="/pub/temp/12"
                  >멘토 지원서 작성 완료</router-link
                >
              </li>
            </ul>
          </div>
          <div class="header__gnb-item">
            <a href="javascript:void(0)">맞춤학습 추천</a>
            <!-- 230712 관심추천 추가 -->
            <ul>
              <li>
                <router-link to="/pub/temp/13">서울런AI추천</router-link>
              </li>
              <li><router-link to="/pub/temp/14">관심 추천</router-link></li>
            </ul>
          </div>
          <div class="header__gnb-item">
            <a href="javascript:void(0)">이벤트</a>
            <ul>
              <li>
                <router-link to="/event?section=OPEN"
                  >진행중 이벤트</router-link
                >
              </li>
              <li>
                <router-link to="/event?section=END">마감된 이벤트</router-link>
              </li>
            </ul>
          </div>
          <div class="header__gnb-item">
            <a href="javascript:void(0)">고객센터</a>
            <ul>
              <li><router-link to="/notice">공지사항</router-link></li>
              <li><router-link to="/pub/temp/15">학습지원센터</router-link></li>
              <li>
                <router-link to="/pub/temp/16"
                  >학습지원센터 연락처안내</router-link
                >
              </li>
              <li>
                <router-link to="/mypage/inquiry/write"> 1:1 문의 </router-link>
              </li>
            </ul>
          </div>
          <div class="header__gnb-item">
            <a href="javascript:void(0)">나의 학습코치</a>
            <ul>
              <li>
                <router-link to="/pub/temp/my/1"> 마이페이지</router-link>
              </li>
              <li>
                <router-link to="/mypage/pw-check"> 회원정보변경</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="header__gnb-footer" v-if="!isEmpty(d.userId)">
          <!-- 로그인 후 -->
          <div class="header__gnb-footer-item">
            <a
              class="header__gnb-footer-btn"
              href="javascript:void(0)"
              @click="goMyPage"
              >마이페이지</a
            >
          </div>
          <div class="header__gnb-footer-item">
            <a href="javascript:void(0)" @click="logout">로그아웃</a>
          </div>
          <!-- // 로그인 후 -->
        </div>
      </div>
      <div class="header__menu">
        <!-- 로그인 전 -->
        <nav
          class="header__menu-login header__menu-login-before"
          v-if="isEmpty(d.userId)"
        >
          <router-link to="/login">로그인</router-link>
          <!-- <a href="javascript:void(0)">회원가입</a> -->
        </nav>
        <!-- // 로그인 전 -->
        <!-- 로그인 후 -->
        <nav class="header__menu-login" v-else>
          <div class="header__menu-login-item" @click="onClickAlarm">
            <a
              class="header__menu-login-alarm"
              :class="({ pactive: d.alarm === true }, { new: d.alarmNotice })"
              href="javascript:void(0)"
              >알림
            </a>
            <ul v-show="d.alarm == true">
              <template v-if="!isEmpty(d.alarmList)">
                <li
                  :class="{ active: isEqual(list.readYn, 'Y') }"
                  v-for="list in d.alarmList"
                >
                  <a
                    href="javascript:void(0)"
                    @click="goMove(list.id, list.alarmMsg.url)"
                  >
                    <div class="header__menu-login-alarm-title">
                      {{ list.alarmMsg.title }}
                      <span>{{ list.date }}</span>
                    </div>
                    <p v-html="list.desc"></p>
                  </a>
                </li>
              </template>
              <template v-else>
                <li class="active">
                  <a href="javascript:void(0)">
                    <div class="header__menu-login-alarm-title">
                      조회된 알림이 없습니다.
                    </div>
                  </a>
                </li>
              </template>
            </ul>
          </div>
          <div
            class="header__menu-login-item profile"
            @click="(d.profile = !d.profile), (menu.alarmCheck = false)"
          >
            <a
              class="header__menu-login-profile"
              :class="{ active: d.profile === true }"
              href="javascript:void(0)"
              >프로필</a
            >
            <ul v-show="d.profile == true">
              <li>
                <a href="javascript:void(0)" @click="goMyPage">마이페이지</a>
              </li>
              <li v-if="isEqual(d.auth, 'A')">
                <router-link to="/login/admin">사용자로그인</router-link>
              </li>
              <li>
                <a href="javascript:void(0)" @click="logout">로그아웃</a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- // 로그인 후 -->
      </div>
      <div
        class="header__gnb-mo"
        @click="
          (d.GnbMo = !d.GnbMo), (menu.alarmCheck = false), (d.profile = false)
        "
        :class="{ active: d.GnbMo === true }"
      ></div>
    </div>
    <div
      class="header__gnb-bg"
      @mouseout="d.GnbHover = false"
      @focusout="d.GnbHover = false"
    ></div>

    <slot />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $white;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid $secondary;
  min-width: 120rem;
  @include tablet {
    min-width: auto;
  }
  .header__gnb-bg {
    display: none;
    position: absolute;
    top: 14.9rem;
    width: 100%;
    height: 33.2rem;
    background-color: $white;
    border-bottom: 0.1rem solid $secondary;
    z-index: 99;
  }
  &.active {
    .header__gnb-bg {
      display: block;
      @include tablet {
        display: none;
      }
    }
    .header__gnb-item {
      ul {
        display: block !important;
      }
    }
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    width: 120rem;
    height: 10rem;
    margin: 0 auto;
    line-height: 1;
    z-index: 100;
    &__logo {
      img {
        @include tablet {
          width: 8.4rem;
        }
      }
    }
    &__gnb {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      flex-grow: 1;
      z-index: 2;
      &.active {
        @include tablet {
          display: block;
        }
      }
      @include tablet {
        position: absolute;
        display: none;
        top: 6.1rem;
        left: 0;
        width: 100%;
        height: auto;
        min-height: calc(100vh - 6rem);
        background-color: $white;
        padding: 3rem 2.4rem 13rem;
      }
      .main__login {
        &-box {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: calc(100% + 4.8rem);
          max-height: 38rem;
          border: 0;
          border-radius: 0;
          border-bottom: 1.6rem solid $light;
          margin: 0 -2.4rem 2.8rem;
          padding-bottom: 0.8rem;
          box-shadow: none;
          & > div {
            text-align: center;
          }
          @include tablet {
            display: flex;
          }
        }
        &-item {
          width: 32.8rem;
          height: 100%;
          padding: 2rem 2rem 2.4rem;
          & + .main__login-item {
            border-top: 0.1rem solid #eee;
          }
          .c {
            &-btn {
              font-size: 1.6rem;
              font-weight: 500;
              height: 5rem;
            }
          }
          i.ico {
            margin: 0.8rem auto 1.3rem;
          }
        }
        &-title {
          line-height: 1.56;
          font-size: 1.8rem;
          font-weight: bold;
          color: $black;
          & + .c-btn-group {
            padding-top: 1.2rem;
          }
          & + .c-btn {
            margin-top: 2rem;
          }
        }
        &-link {
          padding: 2rem 2.3rem 3.2rem;
          background-color: $white;
        }
        &-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            position: relative;
            width: 100%;
            text-align: center;
            & + li {
              &::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 0.1rem;
                height: 100%;
                background-color: #ddd;
              }
            }
            span {
              font-size: 1.6rem;
              line-height: 1;
              color: #535353;
              & + p {
                padding-top: 0.6rem;
              }
            }
            p {
              display: block;
              line-height: 1;
              font-size: 2.4rem;
              font-weight: bold;
              color: $black;
            }
          }
        }
        &-d.profile {
          width: 100%;
          max-width: 32rem;
          padding: 2.8rem 0 2.2rem;
          &--title {
            padding-top: 1.2rem;
            font-size: 1.8rem;
            line-height: 2.2rem;
            color: $black;
            font-weight: bold;
            span {
              color: $danger;
            }
            & + .main__login-info {
              margin-top: 2.1rem;
            }
          }
        }
      }

      .c-btn {
        &-group {
          width: 100%;
          li {
            & + li {
              margin-left: 1.2rem;
            }
            a {
              position: relative;
              display: flex;
              align-items: flex-end;
              justify-content: center;
              width: 7rem;
              height: 7rem;
              padding-bottom: 1.5rem;
              border-radius: 0.6rem;
              border: 0.1rem solid #ddd;
              font-size: 0;
              background-color: $white;
              &::after {
                content: "";
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 0.9rem;
                height: 0.9rem;
                background: url(@img/ic-link-arrow.svg) no-repeat center;
                background-size: cover;
              }
            }
            img {
              max-width: 5.6rem;
            }
          }
        }
        &-danger {
          font-weight: 600 !important;
        }
        &-lg {
          min-width: 18rem;
          height: 5.4rem;
          padding-left: 4.5rem;
          padding-right: 4.5rem;
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
          @include mobile {
            min-width: calc(50% - 0.5rem);
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
        &-radius {
          &.c-btn-lg {
            border-radius: 5rem;
          }
          .ico {
            &-arrow {
              position: absolute;
              top: 50%;
              right: 2.4rem;
              width: 1.4rem;
              height: 1rem;
              border: none;
              margin: 0;
              transform: translateY(-50%);
              @include mobile {
                right: 1.8rem;
              }
              &::before {
                content: "";
                position: absolute;
                width: 0.8rem;
                height: 0.8rem;
                top: 50%;
                right: 0;
                margin-top: -0.4rem;
                border: 0.2rem solid $danger;
                border-width: 0.2rem 0.2rem 0 0;
                transform: rotate(45deg);
              }
              &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -0.1rem;
                width: 1.8rem;
                height: 0.2rem;
                background-color: $danger;
              }
            }
          }
        }
        &-outline {
          font-weight: 800 !important;
          border: 0.1rem solid #dddddd;
          &--danger {
            .ico {
              &-arrow {
                &::before {
                  border-color: $danger;
                }
                &::after {
                  background-color: $danger;
                }
              }
            }
          }
          &--sky {
            .ico {
              &-arrow {
                &::before {
                  border-color: $sky;
                }
                &::after {
                  background-color: $sky;
                }
              }
            }
          }
        }
      }

      nav {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 6rem;
        font-weight: 700;
        @include tablet {
          margin-left: 0;
          display: block;
        }

        .header__gnb-item {
          position: relative;
          > a {
            font-size: 2rem;
            @include tablet {
              font-size: 1.6rem;
            }
          }
          ul {
            display: none;
            position: absolute;
            text-align: center;
            top: 9rem;
            left: 50%;
            transform: translateX(-50%);
            li {
              font-size: 1.4rem;
              font-weight: 400;
              line-height: 1;
              a,
              button {
                white-space: nowrap;
                font-size: 1.6rem;
                color: $black;
                line-height: 1;
              }
              a:hover,
              button:hover {
                color: $danger;
                text-decoration: underline;
              }
            }
            li + li {
              margin-top: 2.6rem;
              @include tablet {
                margin-top: 2rem;
              }
            }
            @include tablet {
              display: block;
              position: static;
              transform: none;
              margin-top: 2rem;
              text-align: left;
            }
          }
          @include tablet {
            padding: 0 2.4rem;
          }
        }
        .header__gnb-item + .header__gnb-item {
          margin-left: 6rem;
          @include tablet {
            margin-top: 3rem;
            margin-left: 0;
            padding-top: 3rem;
            border-top: 0.1rem solid $secondary;
          }
        }
      }
      &-footer {
        display: none;
        @include tablet {
          display: flex;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 0.1rem solid $secondary;
          &-item {
            width: 50%;
            text-align: center;
          }
        }
      }
    }
    &__menu {
      nav {
        display: flex;
        a {
          position: relative;
          font-size: 1.8rem;
          > ul {
            position: absolute;
          }
        }
        a + a {
          margin-left: 2rem;
        }
        &.header__menu-login-before {
          @include tablet {
            display: none;
          }
        }
      }
      &-login {
        &-item {
          position: relative;
          width: 3.6rem;
          height: 3.6rem;
          & + .header__menu-login-item {
            margin-left: 2rem;
            ul {
              li {
                background-color: $white !important;
              }
            }
          }
          ul {
            overflow-y: auto;
            position: absolute;
            white-space: nowrap;
            padding: 1rem 0;
            line-height: 1;
            max-height: 33rem;
            border-radius: 0.8rem;
            border: 0.1rem solid $secondary;
            z-index: 3;
            background-color: $white;
            right: 0;
            bottom: -2.2rem;
            transform: translateY(100%);
            box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.1);
            li {
              text-align: center;
              color: $black;
              font-size: 1.4rem;
              background-color: #f6faff;
              padding: 2rem 3rem;
              &.active {
                background-color: transparent;
              }
            }
          }
          &.profile {
            @include tablet {
              display: none;
            }
          }
        }
        &-alarm {
          position: relative;
          display: flex;
          width: 3.6rem;
          height: 3.6rem;
          background: url(@img/ic-header-book.png) no-repeat center;
          text-indent: -999rem;
          overflow: hidden;
          &.active {
            background: url(@img/ic-header-book-open.png) no-repeat center;
          }
          &.new {
            &::before {
              content: "";
              position: absolute;
              width: 0.8rem;
              height: 0.8rem;
              border-radius: 50%;
              top: 0;
              right: 0;
              background-color: $danger;
              transform: translate(-50%, 50%);
            }
          }
          & + ul {
            li {
              text-align: left;
            }
            .header__menu-login-alarm {
              &-title {
                font-weight: 700;
                margin-bottom: 0.8rem;
                white-space: nowrap;
                span {
                  white-space: nowrap;
                  padding-left: 1.2rem;
                  font-weight: 400;
                  color: #535353;
                }
              }
            }
            p {
              line-height: 1.38;
              font-size: 1.3rem;
            }
            li + li {
              padding-top: 2rem;
              border-top: 0.1rem solid #f1f1f1;
            }
          }
        }
        &-profile {
          display: flex;
          width: 3.6rem;
          height: 3.6rem;
          background: url(@img/ic-header-profile.png) no-repeat center;
          text-indent: -999rem;
          overflow: hidden;
          &::after {
            content: "";
            position: absolute;
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            right: 0;
            bottom: 0;
            background: url(@img/ic-header-profile-arrow.svg) no-repeat center;
          }
          &.active {
            &::after {
              background: url(@img/ic-header-profile-arrow.svg) no-repeat center;
              transform: rotate(180deg);
            }
          }
        }
        @include tablet {
          margin-right: 4rem;
        }
      }
    }
    @include tablet {
      width: auto;
      height: 6rem;
      padding: 0 2.4rem;
      justify-content: space-between;
    }
    &__gnb-mo {
      display: none;
      @include tablet {
        display: block;
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3.6rem;
        height: 3.6rem;
        background: url(@img/ic-header-menu.svg);
        cursor: pointer;
      }
      &.active {
        @include tablet {
          background: url(@img/ic-header-close.svg);
        }
      }
    }
  }
}
</style>
