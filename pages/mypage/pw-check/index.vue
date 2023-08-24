<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useModalStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "mypage",
});

const d = reactive({
  password: "",
  id: uGetLoginInfo("loginid"),
});

const modal = useModalStore();
const router = useRouter();

const handleClickCancel = () => {
  router.go(-1);
};

const handleClickConfirm = async () => {
  await call({
    id: "마이페이지 회원 정보 변경 비밀번호 확인",
    endpoint: "/api/member_info/check_passwd",
    headers: "LOGIN",
    method: "post",
    data: {
      passwd: d.password,
    },
    onResponse({ data, status, message }) {
      console.log("success >> ", status);

      if (status !== 200) {
        modal.alert(
          "",
          "비밀번호가 틀립니다. 확인 후 다시 시도해주시길 바랍니다."
        );
        return;
      }
      router.push("/mypage/member");
      return;
    },
  });
};
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="회원정보 변경"
              desc="개인정보 보호를 위해 다시 한번 비밀번호를 입력해주세요. <br />
                도움이 필요하실 땐 서울런 고객센터 <br class='c-mo' />
                (1533-0909)로 연락주세요!"
            />
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__form-wrap">
              <div class="mypage__form">
                <fieldset>
                  <div class="c-form-group">
                    <Input label="아이디" readonly :placeholder="d.id" />
                  </div>
                  <div class="c-form-group">
                    <Input
                      label="비밀번호 입력"
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      v-model="d.password"
                      v-on:keyup.enter="handleClickConfirm"
                    />
                  </div>
                  <div class="c-btn-group">
                    <button
                      type="submit"
                      class="c-btn c-btn-lg c-btn-blue"
                      @click="handleClickCancel"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      class="c-btn c-btn-lg c-btn-danger"
                      @click="handleClickConfirm"
                    >
                      확인
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
