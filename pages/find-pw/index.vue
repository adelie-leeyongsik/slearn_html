<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

const modal = useModalStore();
const router = useRouter();

definePageMeta({
  layout: "account",
});

const d = reactive({
  btnValue: "M",
  items: [
    {
      text: "휴대폰",
      value: "M",
    },
    {
      text: "이메일",
      value: "E",
    },
  ],
  actionType: "M",
  id: "",
  name: "",
  phone: "",
});

const onClickRadio = (val) => {
  d.actionType = val;
};

const validation = () => {
  if (isEmpty(d.id)) {
    modal.alert("알림", "아이디를 입력해주세요.");
    return false;
  }

  if (isEmpty(d.name)) {
    modal.alert("알림", "이름을 입력해주세요.");
    return false;
  }

  return true;
};

const onClickFindPw = async () => {
  if (!validation()) return;

  await call({
    method: "post",
    id: "비밀번호 찾기",
    endpoint: "/api/login/find_passwd",
    data: {
      login_id: d.id,
      name: d.name,
      method: d.actionType,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);
      let msg = "휴대전화 번호";

      if (isEqual(d.actionType, "E")) {
        msg = "메일주소";
      }

      if (isEqual(status, 200)) {
        modal.alert(
          "알림",
          "가입된 " + msg + "로 임시 비밀번호가 발송되었습니다.",
          onConfirm
        );
      } else if (isEqual(status, 400)) {
        modal.alert(
          "알림",
          "등록된 회원정보가 없습니다. <br/> 정보 확인 후 다시 시도해주시길 바랍니다."
        );
      }
    },
  });
};

const onConfirm = () => {
  router.push("/login");
};
</script>

<template>
  <div class="account">
    <h1>비밀번호 찾기</h1>
    <div class="account__body">
      <h2 class="account__title">
        가입하신 정보로<br />비밀번호를 찾을 수 있어요!
      </h2>
      <div class="c-form-group">
        <div class="c-form-label">인증수단</div>
        <Radio
          v-model="d.btnValue"
          :items="d.items"
          @update:modelValue="onClickRadio"
        />
      </div>
      <section>
        <div class="c-form-group">
          <label for="userId" class="c-form-label">아이디</label>
          <input
            id="userId"
            class="c-form-control"
            type="text"
            placeholder="아이디를 입력해 주세요"
            v-model="d.id"
          />
        </div>
        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <input
            id="name"
            class="c-form-control"
            type="text"
            placeholder="실명을 입력해 주세요"
            v-model="d.name"
          />
        </div>
      </section>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-danger" @click="onClickFindPw">
          비밀번호 찾기
        </button>
      </div>
    </div>
  </div>
</template>
