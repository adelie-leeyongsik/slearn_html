<script setup>
import { reactive } from "vue";
import { useModalStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const modal = useModalStore();
const router = useRouter();

const d = reactive({
  isUnder14: null,
  authMeans: null,
  pw1: "",
  pw2: "",
  pwValidator1: false,
  pwValidator2: false,
});

const handleConfirm = async () => {
  await call({
    id: "비밀번호 변경",
    endpoint: "/api/member_info/chg_passwd",
    headers: "LOGIN",
    method: "post",
    data: {
      newPasswd: d.pw1,
    },
    onResponse({ data, status }) {
      if (status === 200) {
        modal.alert(
          "완료",
          "비밀번호가 변경되었습니다.<br/> 다시 로그인해주세요.",
          () => {
            router.replace("/login");
          }
        );
      } else {
        modal.alert("설정 오류", "비밀번호 설정 오류");
      }

      return true;
    },
  });
};
</script>

<template>
  <div class="account">
    <h1>비밀번호 재설정</h1>
    <form class="needs-validation" @submit.prevent>
      <fieldset>
        <div class="account__body">
          <!-- <legend>
            <h2 class="account__title">
              찾기 힘든 비밀번호<br />
              재설정하고 이용하세요!
            </h2>
          </legend> -->
          <div class="c-form-group">
            <div class="c-form-label">새 비밀번호</div>
            <Input
              v-model="d.pw1"
              type="password"
              placeholder="변경할 비밀번호를 입력해주세요."
            />
            <ValidationPanel
              v-model="d.pwValidator1"
              :value="d.pw1"
              :items="[
                {
                  text: '대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합해주세요.',
                  tester: () => uRegexpr('PW_MAIN', d.pw1),
                },
                {
                  text: '10자리 ~ 12자리까지 입력해주세요.',
                  tester: () =>
                    d.pw1.length > 9 && d.pw1.length <= 12 ? true : false,
                },
                {
                  text: '연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.',
                  tester: () => uRegexpr('PW_NUM', d.pw1),
                },
              ]"
            />
          </div>
          <div class="c-form-group">
            <div class="c-form-label">새 비밀번호 재확인</div>
            <Input
              v-model="d.pw2"
              type="password"
              placeholder="다시 한번 입력해주세요."
            />
            <ValidationPanel
              v-model="d.pwValidator2"
              :value="d.pw2"
              :items="[
                {
                  text: '위에 입력하신 비밀번호와 동일하게 입력해주세요.',
                  tester: () => d.pw1 === d.pw2,
                },
              ]"
            />
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <Button
              type="submit"
              sizeType="large"
              styleType="danger"
              size="auto"
              :onConfirm="handleConfirm"
              :validator="d.pwValidator1 && d.pwValidator2"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
