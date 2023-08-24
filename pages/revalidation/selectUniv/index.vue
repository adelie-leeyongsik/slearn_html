<script setup>
import Nav from "../_nav.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import { isEqual } from "lodash";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();

const d = reactive({
  univType: "Y",
  univList: [
    {
      text: "진학함",
      value: "Y",
    },
    {
      text: "진학하지 않음",
      value: "N",
    },
  ],
  agree: true,
  btnText: "완료",
});

const onChangeUniv = (val) => {
  d.univType = val;
  if (isEqual(d.univType, "Y")) {
    d.btnText = "완료";
  } else {
    d.btnText = "다음";
  }
};

const updateAgree = (val) => {
  d.agree = val;
};

const onClickPrev = () => {
  router.go(-1);
};

const onClickNext = () => {
  if (isEqual(d.univType, "Y")) {
    modal.alert("알림", "일반회원으로 전환됩니다.", () => {
      call({
        method: "post",
        id: "19세 이상 학교밖 대학교 진학여부",
        endpoint: "/api/platform_chg/university_entrance",
        data: {
          email: d.emailId + "@" + d.emailAddr,
        },
        onResponse({ data, status }) {
          if (status === 200) {
            router.push("/login");
          }
        },
      });
    });
  } else {
    if (!d.agree) {
      modal.alert("알림", "서약서 동의가 필요합니다.");
      return;
    }

    router.push("/revalidation/learnSite");
  }
};
</script>

<template>
  <div class="account">
    <h1>{{ uGetSubtitle(3) }}</h1>
    <Nav :active="3" />
    <form class="needs-validation" novalidate @submit.prevent>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              대학교에 진학한 경우<br />
              일반 회원으로 변경됩니다.
            </h2>
          </legend>
          <p class="account-qualification__text">※ 서울런 서비스 이용불가</p>
          <div class="c-form-group">
            <Radio
              v-model="d.univType"
              :items="d.univList"
              @update:modelValue="onChangeUniv"
            />
          </div>
        </div>
        <div class="account__body" v-if="isEqual(d.univType, 'N')">
          <div class="account__title account__title-sm">서약서</div>
          <div class="account__info account__info-outline">
            학교 밖 자격으로 가입하여도 학교로 복학하거나,<br />
            대학을 진학한 경우 학교 밖 자격으로 이용불가 함을 알려드리며,<br />
            자격이 변경되었을 경우 학습상담센터(1533-0909) 또는<br />
            1:1문의게시판을 통해 자격 변경내용을 서울시에 통보하여 이용중지를<br />
            요청하여야 합니다. 회원의 자격 변경내용 미통지로 발생되는
            불이익과<br />
            책임은 회원에게 있습니다.
          </div>
          <div class="c-form-check-group">
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge1"
                title="pledge1"
                checked
                @change="updateAgree(true)"
              />
              <label for="pledge1">동의</label>
            </div>
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge2"
                title="pledge2"
                @change="updateAgree(false)"
              />
              <label for="pledge2">미동의</label>
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <Button
              size="auto"
              sizeType="large"
              styleType="blue"
              text="이전"
              @click="onClickPrev"
            />
            <Button
              size="auto"
              sizeType="large"
              styleType="danger"
              :text="d.btnText"
              @click="onClickNext"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__info {
    font-size: 1.4rem;
  }
  &__body + &__body {
    margin-top: 1.6rem;
  }
}
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}

.c-form-check--type03 + .c-form-check--type03 {
  margin-top: 0;
}

.account__info-outline + .c-form-check-group {
  margin-top: 1.6rem;
}

.account__title-sm {
  margin-top: 0;
}
</style>
