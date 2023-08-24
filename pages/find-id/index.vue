<script setup>
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

const modal = useModalStore();
const router = useRouter();
const login = useLoginStore();

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
  emailCode: "",
  emailList: uEmailList(),
  name: "",
  phone: "",
  phone1: "",
  phone2: "",
  phone3: "",
  emailId: "",
  emailAddr: "",
});

const onClickRadio = (val) => {
  d.actionType = val;
};

const onChangeEmail = (val) => {
  d.emailAddr = val;
};

const validation = () => {
  if (isEmpty(d.name)) {
    modal.alert("알림", "이름을 입력해주세요.");
    return false;
  }

  if (isEqual(d.actionType, "M") && isEmpty(d.phone)) {
    modal.alert("알림", "휴대전화를 입력해주세요.");
    return false;
  }

  if (isEqual(d.actionType, "E") && isEmpty(d.emailId)) {
    modal.alert("알림", "이메일을 입력해주세요.");
    return false;
  }

  if (isEqual(d.actionType, "E") && isEmpty(d.emailAddr)) {
    modal.alert("알림", "이메일을 입력해주세요.");
    return false;
  }

  return true;
};

const onClickFind = async () => {
  if (isEqual(d.actionType, "M")) {
    d.phone = d.phone1 + "-" + d.phone2 + "-" + d.phone3;
  }

  if (!validation()) return;

  let email = d.emailId + "@" + d.emailAddr;

  await call({
    method: "post",
    id: "아이디 찾기",
    endpoint: "/api/login/find_id",
    data: {
      name: d.name,
      mobileno: d.phone,
      email: email,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      if (isEqual(status, 200)) {
        login.findId = data.loginid;
        router.push("/find-id-result");
      } else if (isEqual(status, 400)) {
        modal.alert(
          "알림",
          "등록된 회원정보가 없습니다. <br/> 정보 확인 후 다시 시도해주시길 바랍니다."
        );
      }
    },
  });
};
</script>

<template>
  <div class="account">
    <h1>아이디 찾기</h1>
    <div class="account__body">
      <h2 class="account__title">
        가입하신 정보로<br />아이디를 찾을 수 있어요!
      </h2>
      <div class="c-form-group">
        <div class="c-form-label">인증수단</div>
        <Radio
          v-model="d.btnValue"
          :items="d.items"
          @update:modelValue="onClickRadio"
        />
      </div>
      <section v-if="d.actionType === 'M'">
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
        <div class="c-form-group">
          <div class="c-form-label">휴대폰번호</div>
          <div class="c-input-group">
            <Input
              v-model="d.phone1"
              type="text"
              placeholder=""
              title="휴대폰 국번 입력"
              maxlength="3"
              :onlyNumber="true"
            />
            -
            <Input
              v-model="d.phone2"
              type="text"
              placeholder=""
              title="휴대폰 앞자리 입력"
              maxlength="4"
              :onlyNumber="true"
            />
            -
            <Input
              v-model="d.phone3"
              type="text"
              placeholder=""
              title="휴대폰 뒷자리 입력"
              maxlength="4"
              :onlyNumber="true"
            />
          </div>
        </div>
      </section>
      <section v-if="d.actionType === 'E'">
        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <input
            title="name"
            id="name"
            class="c-form-control"
            type="text"
            placeholder="실명을 입력해 주세요"
            v-model="d.name"
          />
        </div>
        <div class="c-form-group">
          <label for="emailAddress" class="c-form-label">이메일 주소</label>
          <div class="c-input-group c-input-group--email">
            <input
              id="emailId"
              class="c-form-control"
              type="text"
              placeholder="이메일 아이디"
              title="이메일주소 입력"
              v-model="d.emailId"
            />
            <Select
              v-model="d.emailCode"
              :options="d.emailList"
              @update:modelValue="onChangeEmail"
            ></Select>
          </div>
          <div class="c-input-group">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="이메일 주소를 입력해주세요."
              title="인증번호 입력"
              v-model="d.emailAddr"
            />
          </div>
        </div>
      </section>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-danger" @click="onClickFind">
          아이디 찾기
        </button>
      </div>
      <div class="account__foot-link">
        <router-link to="/find-pw">
          <a href="#">비밀번호를 찾으시나요?</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
