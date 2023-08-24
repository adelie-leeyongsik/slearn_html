<script setup>
import { useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();
const login = useLoginStore();

const d = reactive({
  data: login.loginResult,
  modalInfo: {},
  fileInfoList: [],
  btnText: "추가 파일 등록",
  isCheck: false,
});

onMounted(() => {
  d.data.desc = d.data.rjctDesc.replace(/(?:\r\n|\r|\n)/g, "<br />");
});

const fileModal = () => {
  console.log("fileModal");
  if (d.isCheck) {
    return;
  } else {
    d.modalInfo.isShow = true;

    d.modalInfo.title = "증빙자료 첨부";
  }
};

const closeFileModal = (arg) => {
  console.log("data ", d.data);
  uSetLoginInfo({ accessToken: d.data.accessToken });
  d.modalInfo.isShow = false;

  if (arg) {
    const fd = new FormData();

    if (!isEmpty(d.fileInfoList)) {
      d.fileInfoList.forEach((v) => {
        fd.append("files", v);
      });
    }

    call({
      method: "post",
      id: "로그인 보완서류제출",
      endpoint: "/api/login/addAttach",
      headers: "FILE_UPLOAD",
      data: fd,
      onResponse({ data, status, message }) {
        if (status === 200) {
          d.isCheck = true;
          d.btnText = "등록 완료";
        }
      },
    });
  }
};

const getFileInfo = (val) => {
  d.fileInfoList = val;
};

const goLogin = () => {
  router.push("/login");
};

const goMain = () => {
  router.push("/");
};
</script>
<template>
  <CommonContentsModal :data="d.modalInfo" @close="d.modalInfo.isShow = false">
    <template v-slot:innerContents>
      <AttachFile
        labelTitle="증빙자료 첨부"
        :dataList="d.fileInfoList"
        boardName="join"
        @onFileInfo="getFileInfo"
      ></AttachFile>

      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-blue"
            @click="closeFileModal(false)"
          >
            닫기
          </button>
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="closeFileModal(true)"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <div class="account">
    <h1>회원가입</h1>
    <div
      class="account__body join__complete"
      v-if="isEqual(d.data.status, 403)"
    >
      <div class="join__complete-title">가입 신청이 보류 되었습니다.</div>
      <p>
        관리자의 서류심사 결과 다음과 같은 사유로 가입이 보류 되었습니다. <br />
        서류 보충 후 다시 한번 가입신청을 해주세요.
      </p>
      <div class="account__info" v-html="d.data.desc"></div>
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          :text="d.btnText"
          @click="fileModal"
        />
      </div>
      <p>
        *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다.
      </p>
    </div>
    <div
      class="account__body join__complete"
      v-if="isEqual(d.data.status, 402)"
    >
      <div class="join__complete-title">가입 신청이 거절 되었습니다.</div>
      <p>관리자의 서류심사 결과 다음과 같은 사유로 가입이 거절 되었습니다.</p>
      <div class="account__info" v-html="d.data.desc"></div>
      <p>
        *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다.
      </p>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          text="메인 화면으로 가기"
          @click="goMain"
        />
        <Button
          v-if="isEqual(d.data.status, 403)"
          size="auto"
          sizeType="large"
          styleType="danger"
          text="로그인 하기"
          @click="goLogin"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
