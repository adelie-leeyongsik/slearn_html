<script setup>
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();
const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  id: !isEmpty(localStorage.getItem("loginId"))
    ? localStorage.getItem("loginId")
    : "",
  pw: "",
  remember: !isEmpty(localStorage.getItem("loginId")) ? true : false,
  hasError: false,
  socialButtons: [
    {
      type: "naver",
      text: "네이버계정으로 로그인",
      alt: "네이버 로고",
    },
    {
      type: "kakao",
      text: "카카오계정으로 로그인",
      alt: "카카오톡 로고",
    },
    // {
    //   type: "onepass",
    //   text: "디지털원패스로 로그인",
    //   alt: "디지털원패스 로고",
    // },
  ],
});

const onClickLoginButton = async () => {
  if (d.id === "" || d.pw === "") {
    modal.alert("알림", "아이디/비밀번호를 입력해주세요.");
    return;
  } else {
    await call({
      method: "post",
      id: "로그인",
      endpoint: "/api/login/slLogin",
      data: {
        loginid: d.id,
        passwd: d.pw,
      },
      onResponse({ data, status, message }) {
        console.log("data ", data);

        if (status === 200) {
          d.hasError = false;

          localStorage.setItem("loginId", data.loginid);

          uSetLoginInfo(data);

          if (!d.remember) {
            localStorage.removeItem("loginId");
          }

          login.userId = data.userid;

          if (isEqual(data.firstLoginYn, "Y")) {
            //최초로그인
            router.push("/");
          } else if (isEqual(data.qlfcRequired, "Y")) {
            //자격재검증 대상
            router.push("/revalidation");
          } else if (isEqual(data.slAgrRequired, "Y")) {
            //서울런 약관동의 및 본인인증
            router.push("/revalidation/certification");
          } else if (isEqual(data.lrnpltChgAvail, "Y")) {
            //학습사이트 유지/변경
            router.push("/revalidation/learnSite");
          } else {
            router.push("/");
          }
        } else if (status === 400) {
          modal.alert(
            "알림",
            "회원정보가 존재하지 않습니다.<br/>서비스 이용을 원하시는 경우 회원가입을 진행해주세요."
          );
        } else if (status === 406) {
          uSetLoginInfo(data);

          login.userId = d.id;

          modal.alert(
            "알림",
            "비밀번호를 변경한지 3개월이 지났습니다.<br/> 비밀번호를 변경해주세요.",
            () => {
              router.push("/login/pw-reset");
            }
          );

          return;
        } else if (status === 407) {
          uSetLoginInfo(data);

          login.userId = d.id;

          modal.alert(
            "알림",
            "1년 간 이용내역이 없어 휴면회원으로 전환 되었습니다.<br/>서울런 서비스를 계속 이용하시려면 비밀번호 변경 후 재 로그인하여 사용하시기 바랍니다.",
            () => {
              router.push("/login/pw-reset");
            }
          );
        } else if (status === 408) {
          d.hasError = true;

          modal.alert("알림", message);
          return;
        } else if (status === 403) {
          data.status = status;
          login.loginResult = data;
          modal.alert("알림", message, () => {
            router.push("/login/result");
          });
        } else if (status === 402) {
          data.status = status;
          login.loginResult = data;
          modal.alert("알림", message, () => {
            router.push("/login/result");
          });
        } else {
          modal.alert("알림", message);
          return;
        }
      },
    });
  }
};
</script>

<template>
  <div class="account">
    <h1 class="d-none">로그인</h1>
    <div class="account__body">
      <div class="login">
        <form class="needs-validation" @submit.prevent>
          <fieldset>
            <legend>
              <h2 class="account__title">
                로그인하고<br />
                다양한 정보를 만나보세요!
              </h2>
            </legend>
            <div class="login__form">
              <Input
                v-model="d.id"
                type="text"
                placeholder="아이디를 입력해 주세요"
                title="아이디 입력"
              />
              <Input
                v-model="d.pw"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                title="비밀번호 입력"
              />
              <p v-if="d.hasError" class="c-form-message c-text-danger">
                아이디 또는 비밀번호가 올바르지 않습니다.
              </p>
              <Checkbox v-model="d.remember" text="아이디 기억하기" />
              <Button
                type="submit"
                sizeType="large"
                styleType="danger"
                :isBold="true"
                text="로그인"
                :onClick="onClickLoginButton"
              />
            </div>
          </fieldset>
        </form>
        <div class="login__menu">
          <ul>
            <li>
              <router-link to="/find-id">아이디 찾기</router-link>
            </li>
            <li>
              <router-link to="/find-pw">비밀번호 찾기</router-link>
            </li>
            <li>
              <router-link to="/join/qualification">회원가입</router-link>
            </li>
          </ul>
        </div>
        <div class="login__divider">
          <p><span>또는</span></p>
        </div>
        <div class="login__list">
          <div id="naver_id_login"></div>
          <Button
            v-for="{ type, text, src, alt } in d.socialButtons"
            :title="`새창으로 이동`"
            class="c-btn-outline-secondary"
            sizeType="large"
            :text="text"
            @click="uSocialLogin(type)"
          >
            <template v-slot:before>
              <img :src="uImage(`logo-${type}.svg`)" :alt="alt" />
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__title {
    margin-bottom: 3rem;
  }
  @include mobile {
    padding: 4rem 0 6rem;
  }
}
.login {
  &__form {
    .c-form-check {
      margin-top: 1.6rem;
    }
    .c-btn {
      margin-top: 2.4rem;
    }
  }
  &__menu {
    ul {
      display: flex;
      align-content: center;
      justify-content: center;
      margin-top: 3rem;
      li {
        position: relative;
        text-align: center;
        a {
          color: #535353;
          font-size: 1.4rem;
        }
      }
      li + li {
        margin-left: 6rem;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -3rem;
          display: block;
          width: 0.1rem;
          height: 1.2rem;
          background-color: #d9d9d9;
        }
      }
    }
  }
  &__divider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5.7rem 0 2rem;
    font-size: 1.3rem;
    @include mobile {
      margin: 2.3rem 0 2.3rem;
    }
    p {
      position: relative;
      width: 100%;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-0.2rem);
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: $secondary;
        z-index: 1;
      }
      span {
        position: relative;
        padding: 0 2.8rem;
        background-color: $white;
        color: #535353;
        z-index: 2;
      }
    }
  }
  &__list {
    .c-btn {
      margin-top: 1.6rem;
      &:first-child {
        margin-top: 0;
      }
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2.4rem;
      }
    }
  }
}
</style>
