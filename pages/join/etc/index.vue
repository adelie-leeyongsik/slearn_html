<script setup>
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import Result from "../qualification/result.vue";

definePageMeta({
  layout: "account",
});

const router = useRouter();
const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  name: "",
  juminNo1: "",
  juminNo2: "",
  checkInfo: {},
});

const onClickSearch = () => {
  call({
    method: "post",
    id: "기타취약계층 자격검증",
    endpoint: "/api/join/qual_check",
    data: {
      usernm: d.name,
      juminNum: d.juminNo1 + d.juminNo2,
      etc_vul_class: "true",
    },
    onResponse({ data, status, message }) {
      if (isEqual(data.etcQualYn, "Y")) {
        login.joinInfo = data;
        login.joinChildNo = d.juminNo1;
        router.push("/join/etc/step01");
      } else {
        d.checkInfo = data;
      }
    },
  });
};
</script>

<template>
  <div class="account" v-if="isEmpty(d.checkInfo)">
    <h1>회원가입</h1>
    <form class="needs-validation" novalidate @submit.prevent>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">서울런 자격 확인하기</h2>
          </legend>
          <p class="account-qualification__text">자격 조회를 진행해주세요</p>
          <div class="c-form-group">
            <Input
              label="이름"
              v-model="d.name"
              id="name"
              type="text"
              placeholder="이름을 입력해 주세요"
              title="이름 입력"
            />
          </div>
          <div class="c-form-group">
            <label class="c-form-label">주민번호</label>
            <div class="c-input-group">
              <Input
                v-model="d.juminNo1"
                id="rrn"
                type="text"
                placeholder="주민번호 앞 6자리"
                title="생년주민번호 앞 6자리"
                maxlength="6"
                :onlyNumber="true"
              />
              -
              <Input
                v-model="d.juminNo2"
                id="rrn2"
                type="password"
                placeholder="주민번호 뒤 7자리"
                title="주민번호 뒤 7자리"
                maxlength="7"
                :onlyNumber="true"
              />
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <Button
              text="자격조회"
              size="auto"
              sizeType="large"
              styleType="primary"
              :isBold="true"
              @click="onClickSearch"
            >
            </Button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  <Result :data="d.checkInfo" v-else />
</template>

<style lang="scss" scoped>
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}
</style>
