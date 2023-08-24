<script setup>
import { call } from "@/api";
import { useModalStore, useLoginStore } from "@/store";

definePageMeta({
  layout: "account",
});

const router = useRouter();
const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  id: "",
  pw: "",
  newPw: "",
  newPw2: "",
  isCheckPw: false,
  isCheckPw2: false,
});

onMounted(() => {
  d.id = login.userId;
});

const onCheckPwValidation = (val) => {
  d.isCheckPw = val;
};

const onCheckPw2Validation = (val) => {
  d.isCheckPw2 = val;
};

const onChangeLater = async () => {
  console.log("onChangeLater");
  await call({
    method: "post",
    id: "비밀번호 3개월 후 변경",
    endpoint: "/api/login/chg_passwd_nexttime",
    onResponse({ data, status, message }) {
      if (status === 200) {
        data.rememberId = login.rememberId;

        uSetLoginInfo(data);

        router.push("/");
      } else {
        modal.alert("알림", message);
        return;
      }
    },
  });
};

const onChangePw = async () => {
  if (d.isCheckPw && d.isCheckPw2) {
    await call({
      method: "post",
      id: "비밀번호 변경",
      endpoint: "/api/login/chg_passwd",
      data: {
        oldPasswd: d.pw,
        newPasswd: d.newPw,
      },
      onResponse({ data, status, message }) {
        if (status === 200) {
          modal.alert(
            "알림",
            "비밀번호가 변경 되었습니다.<br/> 로그인 후 서비스를 계속 이용하실 수 있습니다.",
            () => {
              router.push("/login");
            }
          );
        } else if (status === 400) {
          modal.alert("알림", "아이디가 존재하지 않습니다.");
        } else if (status === 401) {
          modal.alert("알림", "기존 비밀번호가 일치하지 않습니다.");
        }
      },
    });
  }
};
</script>
<template>
  <div class="account">
    <h1>비밀번호 재설정</h1>
    <form class="needs-validation" novalidate @submit.prevent>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              3개월동안 비밀번호를<br />
              변경하지 않으셨습니다.
            </h2>
          </legend>
          <div class="c-form-group">
            <Input
              v-model="d.id"
              label="아이디"
              type="text"
              placeholder="아이디를 입력해 주세요"
              title="아이디"
              :disabled="true"
            />
          </div>
          <div class="c-form-group">
            <Input
              v-model="d.pw"
              label="비밀번호"
              type="password"
              placeholder="기존 비밀번호를 입력해주세요."
              title="비밀번호"
            />
          </div>
          <div class="c-form-group">
            <Input
              v-model="d.newPw"
              label="새로운 비밀번호"
              type="password"
              placeholder="새로운 비밀번호를 입력해주세요."
            />
            <ValidationPanel
              :value="d.newPw"
              :items="[
                {
                  text: '대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합해주세요.',
                  tester: () => uRegexpr('PW_MAIN', d.newPw),
                },
                {
                  text: '10자리 ~ 12자리까지 입력해주세요.',
                  tester: () =>
                    d.newPw.length > 9 && d.newPw.length <= 12 ? true : false,
                },
                {
                  text: '연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.',
                  tester: () => uRegexpr('PW_NUM', d.newPw),
                },
              ]"
              @update:modelValue="onCheckPwValidation"
            />
          </div>
          <div class="c-form-group">
            <Input
              v-model="d.newPw2"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <ValidationPanel
              :value="d.newPw2"
              :items="[
                {
                  text: '위에 입력하신 비밀번호와 동일하게 입력해주세요.',
                  tester: () => d.newPw === d.newPw2,
                },
              ]"
              @update:modelValue="onCheckPw2Validation"
            />
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <Button
              size="auto"
              sizeType="large"
              styleType="blue"
              text="3개월 후 변경"
              @click="onChangeLater"
            />
            <Button
              size="auto"
              sizeType="large"
              styleType="danger"
              text="비밀번호 변경"
              @click="onChangePw"
              :validator="d.isCheckPw && d.isCheckPw2"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
