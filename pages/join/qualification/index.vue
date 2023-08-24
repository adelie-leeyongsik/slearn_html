<script setup>
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import Result from "./result.vue";

definePageMeta({
  layout: "account",
});

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  name: "",
  juminNo1: "",
  juminNo2: "",
  checkInfo: {},
});

const onClickSearch = async () => {
  login.$reset();

  if (isEmpty(d.name)) {
    modal.alert("알림", "이름을 입력해주세요.");
    return;
  } else if (isEmpty(d.juminNo1) || isEmpty(d.juminNo2)) {
    modal.alert("알림", "주민번호를 입력해주세요.");
    return;
  }

  await call({
    method: "post",
    id: "회원가입 자격검증",
    endpoint: "/api/join/qual_check",
    data: {
      usernm: d.name,
      juminNum: d.juminNo1 + d.juminNo2,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      if (isEqual(data.juminNumValidYn, "N")) {
        modal.alert("알림", "정확한 이름 및 주민등록번호를 입력해주세요.");
        return;
      } else {
        login.joinChildNo = data.birthday;
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
            <h2 class="account__title">
              서울런 회원 대상을 확인 하기 위하여 <br />
              온라인 자격 확인 서비스를 통해<br />
              실시간 검증을 진행하고 있습니다.
            </h2>
          </legend>
          <p class="account-qualification__text">
            검증 결과에 따라 회원 가입이 제한될 수 있습니다.
          </p>
          <div class="account__info">
            <div class="account__info-title c-text-danger">
              ※ 회원 가입 대상
            </div>
            <div class="account__info-title">
              1. 서울시에 거주하는 6세 ~ 24세의 회원이 가입 가능합니다.
            </div>
            <div class="account__info-title">
              2. 소득기준대상, 학교밖, 다문화가족, 법정한부모청소년,
              북한이탈주민 청소년<!-- , 다자녀가족, 유공자의 청소년-->이 가입
              대상입니다.
            </div>
            <div class="c-table__wrap">
              <table class="c-table c-table-center">
                <caption>
                  회원가입 대상으로 구분, 대상자 를 알 수 있습니다.
                </caption>
                <colgroup>
                  <col width="150" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="row">구분</th>
                    <th scope="row">대상자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>자동 검증 대상자</td>
                    <td class="c-text-left">
                      서울시 거주자, 나이(6~24세)의 소득기준 (수급자)청소년,
                      소득기준(차상위) 청소년, 소득기준(법정한부모) 청소년,
                      <!--유공자 청소년-->
                    </td>
                  </tr>
                  <tr>
                    <td>
                      자동 검증 불가 대상자 <br />
                      (자료제출 첨부)
                    </td>
                    <td class="c-text-left">
                      학교밖 청소년, 다문화 가족 청소년,
                      <!--소득기준(85%) 청소년,
                      다자녀 가족 청소년,-->
                      북한이탈주민 청소년 <br />※ 주민등록번호가 없는 다문화
                      가족 외국인 청소년은 상담센터로 문의 (☏1533-0909)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="c-form-group">
            <label for="name" class="c-form-label">이름</label>
            <Input
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
                id="juminNo1"
                type="text"
                placeholder="주민번호 앞 6자리"
                title="주민번호 앞자리 입력"
                :isRequired="true"
                :onlyNumber="true"
                :maxlength="6"
              />
              -
              <Input
                v-model="d.juminNo2"
                id="juminNo2"
                type="password"
                placeholder="주민번호 뒤 7자리"
                title="주민번호 뒷자리 입력"
                :isRequired="true"
                :onlyNumber="true"
                :maxlength="7"
              />
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-lg c-btn-danger"
              @click="onClickSearch"
            >
              <strong>자격조회</strong>
            </button>
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
