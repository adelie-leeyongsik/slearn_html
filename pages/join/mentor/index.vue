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
  name: "",
  mobile: "",
  mobile1: "",
  mobile2: "",
  mobile3: "",
  birth: "",
  birth1: "",
  birth2: "",
  birth3: "",
});

const onClickSearch = () => {
  d.mobile = d.mobile1 + "-" + d.mobile2 + "-" + d.mobile3;
  d.birth = d.birth1 + "-" + d.birth2 + "-" + d.birth3;

  call({
    method: "post",
    id: "멘토 회원가입 자격검증",
    endpoint: "/api/join/mentor_apply_info",
    data: {
      usernm: d.name,
      mobileno: d.mobile,
      birthDt: d.birth,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      if (status === 400) {
        modal.alert(
          "알림",
          "멘토 명단이 존재하지 않습니다.<br/> 정보를 확인해주세요."
        );
      } else {
        data.type = "mentor";

        login.joinInfo = data;
        router.push("/join/step02");
      }
    },
  });
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <form class="needs-validation" novalidate @submit.prevent>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">멘토 회원 대상 확인하기</h2>
          </legend>
          <p class="account-qualification__text">정보를 입력해주세요</p>
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
            <label class="c-form-label">휴대폰번호</label>
            <div class="c-input-group">
              <Input
                v-model="d.mobile1"
                type="text"
                placeholder=""
                title="휴대폰 번호 앞자리"
                maxlength="3"
                :onlyNumber="true"
              />
              -
              <Input
                v-model="d.mobile2"
                type="text"
                placeholder=""
                title="휴대폰 번호 중간자리"
                maxlength="4"
                :onlyNumber="true"
              />
              -
              <Input
                v-model="d.mobile3"
                type="text"
                placeholder=""
                title="휴대폰 번호 뒷자리"
                maxlength="4"
                :onlyNumber="true"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label">생년월일</label>
            <div class="c-input-group">
              <Input
                v-model="d.birth1"
                id="birth"
                type="text"
                placeholder="2000"
                title="생년월일 연도"
                maxlength="4"
                :onlyNumber="true"
              />
              -
              <Input
                v-model="d.birth2"
                id="birth"
                type="text"
                placeholder="01"
                title="생년월일 월"
                maxlength="2"
                :onlyNumber="true"
              />
              -
              <Input
                v-model="d.birth3"
                id="birth"
                type="text"
                placeholder="01"
                title="생년월일 일"
                maxlength="2"
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
</template>

<style lang="scss" scoped>
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}
</style>
