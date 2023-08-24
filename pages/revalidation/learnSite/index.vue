<script setup>
import Nav from "../_nav.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const subNav = ref();

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  age14: isEmpty(login.joinInfo) ? uGetLoginInfo("age") : login.joinInfo.age,
  joinCode: isEmpty(login.joinInfo)
    ? uGetLoginInfo("memberJoinTypeCode")
    : login.joinInfo.join_pcd,
  isNavActive: 0,
  userNm: "",
  schoolNm: "",
  gradeNm: "",
  subjNm: "",
  noSubjNm: "",
  title: "",
});

onMounted(() => {
  d.isNavActive = d.age14 > 18 && isEqual(d.joinCode, "JOIN_P002") ? 4 : 3;

  getSiteInfo();

  console.log("subNav ", subNav);
});

const getSiteInfo = async () => {
  await call({
    method: "get",
    id: "자격 재검증 학습사이트 정보",
    endpoint: "/api/platform_chg/get",
    onResponse({ data, status }) {
      console.log("data >>> ", data);
      d.userNm = data.name;
      d.schoolNm = data.schl_level.cdnm;
      d.gradeNm = data.schl_grad.cdnm;
      d.subjNm = data.cp?.cdnm;
      d.noSubjNm = data.sub_cp?.map((f) => f.cdnm).toString();
      login.learnInfo = data;
    },
  });
};

const goMaintain = () => {
  console.log("goMaintain");
  login.learnInfo.change = false;

  modal.confirm(
    "알림",
    "현재 학습을 유지합니다. 재변경기간이 오기전까지 변경하실 수 없습니다. 계속하시겠습니까?",
    () => {
      router.push("/revalidation/selectSite");
    }
  );
};

const goChange = () => {
  console.log("goChange");
  login.learnInfo.change = true;
  router.push("/revalidation/selectSite");
};
</script>

<template>
  <div class="account">
    <h1>{{ uGetSubtitle(d.isNavActive) }}</h1>
    <Nav :active="d.isNavActive" />
    <form @submit.prevent>
      <div class="account__body">
        <legend>
          <h2 class="account__title">회원님 학습 사이트 정보 입니다.</h2>
        </legend>

        <div class="account__info">
          <dl class="account__info-change">
            <dt>사용자 이름</dt>
            <dd>{{ d.userNm }}</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학교급</dt>
            <dd>{{ d.schoolNm }}</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학년</dt>
            <dd>{{ d.gradeNm }}</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학습사이트(교과)</dt>
            <dd>{{ d.subjNm }}</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학습사이트(비교과)</dt>
            <dd>{{ d.noSubjNm }}</dd>
          </dl>
        </div>
        <div class="c-text-caution">
          반드시 회원의 주민등록번호로 자격검증 확인해주세요.
        </div>
        <div class="c-form-group">
          <div class="c-form-group">
            <div class="c-form-label">학습 사이트 변경 선택</div>
            <div class="c-box">
              <div class="c-box__title">
                현재 학습 사이트에 만족하고 있어요.
              </div>
              <div class="c-box__title-sub">계속 이용할께요!</div>
              <button
                class="c-btn c-btn-sm c-btn-blue c-box-btn"
                @click="goMaintain"
              >
                학습 유지하기
              </button>
            </div>
            <div class="c-box">
              <div class="c-box__title">다른 사이트도 한번 확인해보고</div>
              <div class="c-box__title-sub">변경할지 선택할래요!</div>
              <button
                class="c-btn c-btn-sm c-btn-blue c-box-btn"
                @click="goChange"
              >
                둘러보고 변경하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__info {
    margin: 0 0 1.6rem;
    &-change {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;
      dt {
        margin: 0;
        color: #535353;
      }
      dd {
        color: $black;
        font-weight: 700;
      }
      & + dl {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>
