<script setup>
import joinNav from "../_nav.vue";
import siteSelect from "./siteSelect";
import Result from "./result";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  school: "",
  schoolList: [],
  grade: "",
  gradeList: [],
  purpose: "",
  purposeList: [],
  pRadioList: [],
  subjectList: [],

  subjMiMac: "",
  subjAgree: "",
  subjAgreeNm: "",
  subjAgreeYn: "",
  lectureAgree: "",
  lectureAgreeNm: "",
  bookAgree: "",
  bookAgreeNm: "",

  subjTermsList: [
    {
      key: "subjTerm1",
      text: "이용약관에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P002",
    },
    {
      key: "subjTerm2",
      text: "개인정보 수집/이용에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P003",
    },
  ],
  lectureTermsList: [
    {
      key: "lectureTerm1",
      text: "이용약관에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P002",
    },
    {
      key: "lectureTerm2",
      text: "개인정보 수집/이용에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P003",
    },
  ],
  bookTermsList: [
    {
      key: "bookTerm1",
      text: "이용약관에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P002",
    },
    {
      key: "bookTerm2",
      text: "개인정보 수집/이용에 관한 동의",
      value: false,
      required: true,
      cpId: "",
      termCode: "TEMPLATE_P003",
    },
  ],
  termInfo: {},

  snsInfo: {},
  socialButtons: [
    {
      type: "naver",
      text: "네이버계정으로 로그인",
      alt: "네이버 로고",
    },
    {
      type: "kakao",
      text: "카카오계정으로 로그인",
      alt: "카카오톡 로고",
    },
    // {
    //   type: "onepass",
    //   text: "디지털원패스로 로그인",
    //   alt: "디지털원패스 로고",
    // },
  ],

  resultCode: null,
});

onMounted(() => {
  getDataList();
});

const getDataList = () => {
  call({
    method: "get",
    id: "회원가입 학습사이트 선택",
    endpoint: "/api/join/form",
    onResponse({ data, status, message }) {
      console.log("data ", data);
      let sList = data.schLvlPcdList.filter(
        (f) =>
          isEqual(f.cd, "SCHLVL_P002") ||
          isEqual(f.cd, "SCHLVL_P003") ||
          isEqual(f.cd, "SCHLVL_P004")
      );

      sList.forEach((v) => {
        v.text = v.cdnm;
        v.value = v.cd;
      });

      d.schoolList = sList;

      let gList = data.schGrdPcdList.filter(
        (f) =>
          isEqual(f.cd, "SCHGRD_P001") ||
          isEqual(f.cd, "SCHGRD_P002") ||
          isEqual(f.cd, "SCHGRD_P003") ||
          isEqual(f.cd, "SCHGRD_P007")
      );

      gList.forEach((v) => {
        v.text = v.cdnm;
        v.value = v.cd;
      });

      d.gradeList = gList;

      d.purposeList = data.lrnObjList;

      d.subjectList = data.lrnPltTcdList.concat(data.subLrnPltTcdList);
    },
  });
};

const onChangeSchool = (val) => {
  d.school = val;

  if (isEqual(val, "SCHLVL_P002")) {
    d.pRadioList = d.purposeList.filter(
      (f) => isEqual(f.cd, "GE") || isEqual(f.cd, "SP")
    );
  } else if (isEqual(val, "SCHLVL_P003")) {
    d.pRadioList = d.purposeList.filter(
      (f) => isEqual(f.cd, "SH") || isEqual(f.cd, "TE")
    );
  }

  d.pRadioList.forEach((v) => {
    v.text = v.cdnm;
    v.value = v.cd;
  });

  d.subjAgree = "";
  d.lectureAgree = "";
  d.bookAgree = "";
};

const onChangeGrade = (val) => {
  d.grade = val;
};

const onChangeSubj = (data) => {
  d.subjAgreeYn = d.subjectList.filter((f) => f.cp_id === data)[0].agreeYn;

  if (isEqual(data, "LRNPLT_T002")) {
    d.subjMiMac = data;
    d.subjAgree = "";
  } else if (isEqual(d.subjAgreeYn, "N")) {
    d.subjAgree = data;

    d.subjAgreeNm = d.subjectList.filter(
      (f) => f.cp_id === d.subjAgree
    )[0].cp_name;

    d.subjTermsList.forEach((f) => {
      f.cpId = d.subjAgree;
      f.value = false;
    });
  } else {
    d.subjAgree = "";
  }
};

const onChangeLecture = (data) => {
  let agreeYn = "";

  if (!isEmpty(data)) {
    agreeYn = d.subjectList.filter((f) => f.cp_id === data)[0].agreeYn;
  }

  if (isEqual(agreeYn, "N")) {
    d.lectureAgree = data;

    d.lectureAgreeNm = d.subjectList.filter(
      (f) => f.cp_id === d.lectureAgree
    )[0].cp_name;

    d.lectureTermsList.forEach((f) => {
      f.cpId = d.lectureAgree;
      f.value = false;
    });
  } else {
    d.lectureAgree = "";
  }
};

const onChangeBook = (data) => {
  let agreeYn = "";

  if (!isEmpty(data)) {
    agreeYn = d.subjectList.filter((f) => f.cp_id === data)[0].agreeYn;
  }

  if (isEqual(agreeYn, "N")) {
    d.bookAgree = data;

    d.bookAgreeNm = d.subjectList.filter(
      (f) => f.cp_id === d.bookAgree
    )[0].cp_name;

    d.bookTermsList.forEach((f) => {
      f.cpId = d.bookAgree;
      f.value = false;
    });
  } else {
    d.bookAgree = "";
  }
};

const getTerms = async (data) => {
  await call({
    method: "get",
    id: "회원가입 학습사이트 약관 조회",
    endpoint: `/api/join/terms`,
    data: {
      cp_id: data.id,
      term_div_code: data.code,
    },
    onResponse({ data, status }) {
      d.termInfo.isShow = true;
      d.termInfo.title = data.term_title;
      d.termInfo.innerContents = data.term_desc;
    },
  });
};

const closeTermModal = () => {
  d.termInfo.isShow = false;
};

const onClickPrev = () => {
  router.push("/join/qualification");
};

const validationSite = () => {
  if (!isEqual(d.school, "SCHLVL_P004")) {
    if (isEmpty(d.school)) {
      modal.alert("알림", "학교급을 선택해주세요.");
      return false;
    }

    if (isEmpty(d.grade)) {
      modal.alert("알림", "학년을 선택해주세요.");
      return false;
    }

    if (isEmpty(d.purpose)) {
      modal.alert("알림", "학습목적을 선택해주세요.");
      return false;
    }

    if (isEmpty(d.subjMiMac) && !isEqual(d.subjAgreeYn, "Y")) {
      if (isEmpty(d.subjAgree)) {
        modal.alert("알림", "교과 학습사이트를 선택해주세요.");
        return false;
      } else if (d.subjTermsList.some((s) => s.value === false)) {
        modal.alert("알림", `${d.subjAgreeNm} 약관동의가 필요합니다.`);
        return false;
      }
    }

    if (
      !isEmpty(d.lectureAgree) &&
      d.lectureTermsList.some((s) => s.value === false)
    ) {
      modal.alert("알림", `${d.lectureAgreeNm} 약관동의가 필요합니다.`);
      return false;
    }

    if (
      !isEmpty(d.bookAgree) &&
      d.bookTermsList.some((s) => s.value === false)
    ) {
      modal.alert("알림", `${d.bookAgreeNm} 약관동의가 필요합니다.`);
      return false;
    }
  }

  return true;
};

const makeParam = () => {
  let params = {
    //자격검증 결과
    qlfc_enc_dat: login.joinInfo.qlfc_enc_dat,
    //NICE 본인인증 결과 (PASS)
    nice_enc_dat: login.passInfo.nice_enc_dat,
    //다자녀 가족 청소년 검증 결과
    ge3family_enc_dat: login.bigFamily.ge3family_enc_dat,
    //가입구분
    join_pcd: login.joinMemberType,
    //아이디
    loginid: login.basicInfo.id,
    //비밀번호
    passwd: login.basicInfo.pw,
    //이름
    userName: login.basicInfo.name,
    //이메일
    email: login.basicInfo.email,
    //우편번호
    zipcode: login.basicInfo.postCode,
    //주소
    address1: login.basicInfo.addr,
    //주소 상세
    address2: login.basicInfo.addrDtl,
    //학교급
    schlvl: d.school,
    //학년
    schgrd: d.grade,
    //학습사이트(교과)
    lrnpltCd: isEmpty(d.subjMiMac) ? d.subjAgree : d.subjMiMac,
    //학습사이트(비교과)
    subLrnpltCd: d.lectureAgree + "," + d.bookAgree,
    //이벤트 정보수신 동의
    evtInfoRcvYn: login.basicInfo.smsType,
    //증빙자료 별도첨부 여부
    attachType: login.joinAttachType,
    //SNS연동
    snsConnects: [{ snsCode: login.snsCd, id: login.snsId }],
  };

  //휴대폰 번호
  params.mobileno = !isEmpty(login.basicInfo.mobile)
    ? login.basicInfo.mobile
    : login.passInfo.MOBILE_NO;
  //법정대리인 이름
  params.parentName = login.passInfo.NAME;
  //법정대리인 휴대폰 번호
  params.parentMobileno = login.passInfo.MOBILE_NO;
  //법정대리인 성별
  params.parentGender = isEqual(login.passInfo.GENDER, "1") ? "M" : "W";

  params.files = !isEmpty(login.joinFileList) ? login.joinFileList : null;

  return params;
};

const onClickComplete = () => {
  console.log("onClickComplete");

  if (!validationSite()) {
    return;
  } else {
    login.snsId = "";
    d.snsInfo.isShow = true;
    d.snsInfo.title = "SNS 계정 연동";
    d.snsInfo.subTitle = "SNS 계정과 연동할 수 있어요";
  }
};

watch(
  () => login.snsId,
  (newVal) => {
    if (!isEmpty(newVal)) {
      closeSnsModal();
    }
  }
);

const closeSnsModal = () => {
  d.snsInfo.isShow = false;
  goJoin();
};

const onClickNoSns = () => {
  d.snsInfo.isShow = false;
  goJoin();
};

const goJoin = () => {
  const fd = new FormData();

  let param = makeParam();

  fd.append(
    "data",
    new Blob([JSON.stringify(param)], {
      type: "application/json",
    })
  );

  //첨부파일
  if (!isEmpty(login.joinFileList)) {
    login.joinFileList.forEach((v) => {
      if (isEmpty(v.fileSeq)) {
        fd.append("files", v);
      }
    });
  }

  call({
    method: "post",
    id: "회원가입 등록",
    endpoint: "/api/join/signup",
    headers: "FILE_UPLOAD",
    data: fd,

    onResponse({ data, status, message }) {
      console.log("goJoin data", data);
      console.log("goJoin status", status);
      console.log("goJoin message", message);
      if (status === 200) {
        d.resultCode = data.confirmStatCode;
      } else {
        modal.alert("알림", message);
      }
    },
  });
};
</script>

<template>
  <!-- 약관 팝업 -->
  <CommonContentsModal :data="d.termInfo" @close="closeTermModal">
    <template v-slot:innerContents>
      <div
        class="c-modals__contents-terms"
        v-html="d.termInfo.innerContents"
      ></div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="closeTermModal"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 약관 팝업 -->
  <!-- SNS연동 팝업 -->
  <CommonContentsModal :data="d.snsInfo" @close="closeSnsModal">
    <template v-slot:innerContents>
      <div class="login__list">
        <Button
          v-for="{ type, text, src, alt } in d.socialButtons"
          :title="`새창으로 이동`"
          class="c-btn-outline-secondary"
          sizeType="large"
          :text="text"
          @click="uSocialLogin(type)"
        >
          <template v-slot:before>
            <img :src="uImage(`logo-${type}.svg`)" :alt="alt" />
          </template>
        </Button>
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
          @click="onClickNoSns"
        >
          SNS 연동하지않고 가입하기
        </button>
      </div>
    </template>
  </CommonContentsModal>
  <!-- SNS연동 팝업 -->
  <div class="account" v-if="isEmpty(d.resultCode)">
    <h1>회원가입</h1>
    <joinNav :active="4" />
    <form @submit.prevent>
      <div class="account__body">
        <legend>
          <h2 class="account__title">학습사이트를 신청해볼까요?</h2>
        </legend>
        <div class="c-form-group" v-if="!isEmpty(d.schoolList)">
          <label for="name" class="c-form-label">학교급</label>
          <Radio
            class="c-form-check-group--col3"
            v-model="d.school"
            :items="d.schoolList"
            @update:modelValue="onChangeSchool"
          />
        </div>
        <div class="account__site-sort">
          <div
            class="account__site-sort"
            v-if="
              isEqual(d.school, 'SCHLVL_P002') ||
              isEqual(d.school, 'SCHLVL_P003')
            "
          >
            <div class="c-form-group">
              <label for="name" class="c-form-label">학년</label>
              <Radio
                class="c-form-check-group--col4"
                v-model="d.grade"
                :items="d.gradeList"
                @update:modelValue="onChangeGrade"
              />
            </div>
            <div class="c-form-group">
              <label for="name" class="c-form-label">학습목적</label>
              <Radio v-model="d.purpose" :items="d.pRadioList" />
            </div>
          </div>
        </div>

        <div class="account__site-select">
          <siteSelect
            v-if="!isEmpty(d.school)"
            :typeInfo="{ school: d.school, grade: d.grade }"
            :dataList="d.subjectList"
            @onChangeSubj="onChangeSubj"
            @onChangeLecture="onChangeLecture"
            @onChangeBook="onChangeBook"
            :paramInfo="{ change: true }"
          />
        </div>
      </div>

      <div
        class="account__body"
        v-if="
          !isEmpty(d.subjAgree) ||
          !isEmpty(d.lectureAgree) ||
          !isEmpty(d.bookAgree)
        "
      >
        <h2 class="account__title">
          선택하신 학습사이트 <br />
          약관동의가 필요해요
        </h2>
        <div class="account__agree" v-if="!isEmpty(d.subjAgree)">
          <div class="account__agree-title">
            ‘{{ d.subjAgreeNm }}’ 약관동의
            <span class="c-text-primary"
              >(반드시 약관의 내용을 확인해주세요)</span
            >
          </div>
          <TermsGroup v-model="d.subjTermsList" @terms="getTerms" />
        </div>
        <div class="account__agree" v-if="!isEmpty(d.lectureAgree)">
          <div class="account__agree-title">
            ‘{{ d.lectureAgreeNm }}’ 약관동의
            <span class="c-text-primary"
              >(반드시 약관의 내용을 확인해주세요)</span
            >
          </div>
          <TermsGroup v-model="d.lectureTermsList" @terms="getTerms" />
        </div>
        <div class="account__agree" v-if="!isEmpty(d.bookAgree)">
          <div class="account__agree-title">
            ‘{{ d.bookAgreeNm }}’ 약관동의
            <span class="c-text-primary"
              >(반드시 약관의 내용을 확인해주세요)</span
            >
          </div>
          <TermsGroup v-model="d.bookTermsList" @terms="getTerms" />
        </div>
      </div>

      <div class="account__foot">
        <div class="c-btn-group">
          <Button
            size="auto"
            sizeType="large"
            styleType="blue"
            text="취소"
            @click="onClickPrev"
          />
          <Button
            size="auto"
            sizeType="large"
            styleType="danger"
            text="회원가입 완료"
            @click="onClickComplete"
          />
        </div>
      </div>
    </form>
  </div>
  <Result :data="d.resultCode" v-else />
</template>

<style lang="scss" scoped>
.join {
  &__benefit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 2.7rem 9rem 2.8rem 7.9rem;
    background-color: $white;
    border-radius: 1.6rem;
    p {
      display: flex;
      align-items: center;
      strong {
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: $black;
      }
    }
    @include mobile {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2.7rem 1.6rem 2.8rem 1.6rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      .c-btn {
        width: 100%;
        //margin-top: 2rem;
      }
    }
  }
}
.account {
  &__body {
    margin-top: 3rem;
    .c-form-group {
      margin-top: 4rem;
    }
    @include mobile {
      margin-top: 0;
      padding: 6rem 1.6rem;
    }
    & + & {
      // 230203 수정
      @include mobile {
        border-top: 1.6rem solid $light;
      }
      // 230203 수정
    }
  }
  &__info {
    margin: 0 0 1.6rem;
    span {
      font-weight: 700;
    }
  }
  form {
    fieldset {
      &:first-child {
        .account__body {
          margin-top: 0;
        }
      }
    }
  }
  .c-form-label--lg {
    margin-bottom: 1.6rem;
  }
  .c-form-check--type03 {
    margin-top: 0;
  }
}

.c-form-group-edu {
  margin-right: -9rem;
  overflow-x: auto;
  display: flex;
  gap: 0.8rem;
}
</style>
