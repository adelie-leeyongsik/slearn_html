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
  id: "",
});

const goLogin = () => {
  if (isEmpty(d.id)) {
    modal.alert("알림", "ID를 입력해주세요.");
    return;
  }

  call({
    method: "post",
    id: "사용자 로그인",
    endpoint: "/api/login/su",
    data: {
      loginid: d.id,
    },
    onResponse({ data, status }) {
      console.log("data", data);
      console.log("status", status);
      if (status === 200) {
        uSetLoginInfo(data);

        login.userId = data.userid;

        if (isEqual(data.qlfcRequired, "Y")) {
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
          "해당 ID를 사용하는 사용자가 없습니다. <br/>확인 후 다시시도 해주시길 바랍니다."
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
};
</script>

<template>
  <div class="account">
    <h1>사용자 ID 로그인</h1>
    <div class="account__body">
      <div class="account__title">
        사용자 ID로 로그인하여<br />
        학습자를 확인하실 수 있습니다.
      </div>
      <div class="c-form-group">
        <label for="name" class="c-form-label">아이디</label>
        <input
          v-model="d.id"
          type="text"
          id="name"
          title="name"
          class="c-form-control"
          placeholder="사용자 ID를 입력해주세요"
          @keyup.enter="goLogin"
        />
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-primary" @click="goLogin">
          로그인
        </button>
      </div>
    </div>
  </div>
</template>
