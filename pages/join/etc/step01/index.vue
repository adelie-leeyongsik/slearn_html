<script setup>
import joinNav from "../../_nav.vue";
import { useLoginStore, useModalStore } from "@/store";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  memberType: "JOIN_P010",
  fileInfoList: [],
});

const getFileInfo = (val) => {
  d.fileInfoList = val;
};

const onClickPrev = () => {
  router.go(-1);
};

const onClickNext = () => {
  login.joinMemberType = d.memberType;
  login.joinFileList = d.fileInfoList;

  router.push("/join/step02");
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="1" />
    <div class="account__body">
      <h2 class="account__title">
        별도 증빙자료 제출 및 승인 절차를 통해 <br />
        회원가입을 안내해드릴게요.
      </h2>

      <div class="account__info">
        <dl>
          <dt>※ 증빙자료 안내</dt>
          <dd>
            <ul>
              <li>
                <h6>1. 기타취약계층 증명서류</h6>
                기타취약계층을 증명할 수 있는 서류
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="account__info">
        <dl>
          <dt>※ 증빙자료 제출 방법 안내</dt>
          <dd>
            <ul>
              <li>
                <h6>1. 파일 첨부</h6>
                증빙자료 업로드
              </li>
              <li class="mb-0">
                <h6>2. 별도 송부</h6>
                문자 : 010-9712-9049 <br />
                카톡 ID : seoullearn <br />
                메일 : slearn@seoul.go.kr 로 발송
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <AttachFile
        :attachType="true"
        labelTitle="증빙자료 첨부"
        :dataList="d.fileInfoList"
        boardName="join"
        @onFileInfo="getFileInfo"
      ></AttachFile>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          text="이전"
          @click="onClickPrev"
        />
        <Button
          size="auto"
          sizeType="large"
          styleType="danger"
          text="다음"
          :onConfirm="onClickNext"
          :validator="
            d.fileInfoList.length > 0 ||
            isEqual(login.joinAttachType, 'ATTACH_P002')
          "
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account {
  &__body {
    @include mobile {
      padding: 6rem 1.6rem 0;
    }
  }
  .c-form-check--type03 + .c-form-check--type03 {
    margin-top: 0;
  }
}
.join {
  &__list {
    font-size: 1.6rem;
    li + li {
      margin-top: 1.6rem;
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 6rem;
      border: 0.1rem solid rgba(17, 17, 17, 0.12);
      border-radius: 0.8rem;
      color: $black;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2.6rem;
      }
    }
  }
}
</style>
