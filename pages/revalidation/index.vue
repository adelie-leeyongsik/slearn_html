<script setup>
import Nav from "./_nav.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();
const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  name: uGetLoginInfo("usernm"),
  juminNo1: uGetLoginInfo("birthday"),
  juminNo2: "",
});

const goSearch = () => {
  call({
    method: "post",
    id: "자격재검증",
    endpoint: "/api/platform_chg/qual_check",
    data: {
      usernm: d.name,
      juminNum: d.juminNo1 + d.juminNo2,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);
      if (status === 200) {
        login.joinInfo = data;
        router.push("/revalidation/certification");
      } else if (status === 401) {
        modal.alert("알림", message);
      } else {
        modal.alert("알림", message);
      }
    },
  });
};
</script>

<template>
  <div class="account">
    <h1>{{ uGetSubtitle(1) }}</h1>
    <Nav :active="1" />
    <form @submit.prevent>
      <div class="account__body">
        <legend>
          <h2 class="account__title">
            서울런 회원 대상을 확인 하기 위하여 <br />
            매년 첫 로그인 시 재검증을 진행하고 있습니다.
          </h2>
        </legend>
        <div class="account__title-sub">
          검증 결과에 따라 회원 가입이 제한될 수 있습니다.
        </div>

        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <div class="c-input-group">
            <Input
              v-model="d.name"
              id="name"
              type="text"
              placeholder="이름을 입력해 주세요"
            />
          </div>
        </div>
        <div class="c-form-group">
          <label for="rrn" class="c-form-label">주민번호</label>
          <!-- 230620 주민번호 disabled시,  c-input-group--type03 클래스 추가-->
          <div class="c-input-group c-input-group--type03">
            <Input
              v-model="d.juminNo1"
              id="rrn"
              type="text"
              placeholder="주민번호 앞 6자리"
              title="생년월일 입력"
              maxlength="6"
              :onlyNumber="true"
            />
            -
            <Input
              v-model="d.juminNo2"
              id="rrn2"
              type="password"
              placeholder="주민번호 뒤 7자리"
              title="생년월일 입력"
              maxlength="7"
              :onlyNumber="true"
            />
          </div>
        </div>
        <div class="c-text-caution">
          반드시 회원의 주민등록번호로 자격검증 확인해주세요.
        </div>
      </div>

      <div class="account__foot">
        <div class="c-btn-group">
          <Button
            size="auto"
            sizeType="large"
            styleType="danger"
            :isBold="true"
            text="자격조회"
            @click="goSearch"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.join {
  &__benefit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 2.7rem 9rem 2.8rem 7.9rem;
    background-color: $white;
    border-radius: 1.6rem;
    p {
      display: flex;
      align-items: center;
      strong {
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: $black;
      }
    }
    @include mobile {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2.7rem 1.6rem 2.8rem 1.6rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      .c-btn {
        width: 100%;
        //margin-top: 2rem;
      }
    }
  }
}
.account {
  &__body {
    margin-top: 3rem;
    .c-form-group {
      margin-top: 4rem;
    }
    @include mobile {
      margin-top: 0;
      padding: 6rem 1.6rem;
    }
    & + & {
      // 230203 수정
      @include mobile {
        border-top: 1.6rem solid $light;
      }
      // 230203 수정
    }
  }
  &__info {
    margin: 0 0 1.6rem;
  }
  form {
    fieldset {
      &:first-child {
        .account__body {
          margin-top: 0;
        }
      }
    }
  }
  .c-form-label--lg {
    margin-bottom: 1.6rem;
  }
  .c-form-check--type03 {
    margin-top: 0;
  }
}

.c-form-group-edu {
  margin-right: -9rem;
  overflow-x: auto;
  display: flex;
  gap: 0.8rem;
}
</style>
