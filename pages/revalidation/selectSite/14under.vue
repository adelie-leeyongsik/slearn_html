<script setup>
import Nav from "../_nav.vue";
import siteSelect from "@pages/join/step04/siteSelect.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  change: login.learnInfo.change,
  school: "",
  schoolList: [],
  grade: "",
  gradeList: [],
  gRadioList: [],
  purpose: "",
  purposeList: [],
  pRadioList: [],
  subjectList: [],

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
});

onMounted(() => {
  getDataList();
});

const getDataList = () => {
  call({
    method: "get",
    id: "회원가입 학습사이트 선택",
    endpoint: "/api/platform_chg/form",
    onResponse({ data, status, message }) {
      console.log("data ", data);
      let sList = data.schLvlPcdList.filter(
        (f) =>
          isEqual(f.cd, "SCHLVL_P001") ||
          isEqual(f.cd, "SCHLVL_P002") ||
          isEqual(f.cd, "SCHLVL_P004")
      );

      sList.forEach((v) => {
        v.text = v.cdnm;
        v.value = v.cd;
        v.column = isEqual(v.cd, "SCHLVL_P001") ? true : false;
      });

      d.schoolList = sList;

      let gList = data.schGrdPcdList;

      gList.forEach((v) => {
        v.text = v.cdnm;
        v.value = v.cd;
      });

      d.gradeList = gList;

      d.purposeList = data.lrnObjList;

      d.subjectList = data.lrnPltTcdList.concat(data.subLrnPltTcdList);

      let learn = login.learnInfo;
      console.log(" learn ", learn);

      onChangeSchool(learn.schl_level.cd);
      onChangeGrade(learn.schl_grad.cd);
      onChangeSubj(learn.cp.cd);
      d.purpose = learn.lrnObjCode;

      let lecture = learn.sub_cp
        .map((m) => m.cd)
        .filter((f) => !isEqual(f, "SUB_LRNPLT_T002"));
      let book = learn.sub_cp
        .map((m) => m.cd)
        .filter((f) => isEqual(f, "SUB_LRNPLT_T002"));

      if (lecture.length > 0) {
        onChangeLecture(lecture[0]);
      }

      if (book.length > 0) {
        onChangeBook(book[0]);
      }

      d.paramInfo = {
        change: d.change,
        subjParam: learn.cp?.cd,
        lectureParam: lecture[0],
        bookParam: book[0],
      };
    },
  });
};

const onChangeSchool = (val) => {
  d.school = val;

  if (isEqual(val, "SCHLVL_P001")) {
    d.gRadioList = d.gradeList;
  } else if (isEqual(val, "SCHLVL_P002")) {
    d.gRadioList = d.gradeList.filter(
      (f) =>
        isEqual(f.cd, "SCHGRD_P001") ||
        isEqual(f.cd, "SCHGRD_P002") ||
        isEqual(f.cd, "SCHGRD_P003") ||
        isEqual(f.cd, "SCHGRD_P007")
    );

    d.pRadioList = d.purposeList.filter(
      (f) => isEqual(f.cd, "GE") || isEqual(f.cd, "SP")
    );

    d.pRadioList.forEach((v) => {
      v.text = v.cdnm;
      v.value = v.cd;
    });
  }

  d.gRadioList.forEach((v) => {
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
  if (!isEmpty(data)) {
    d.subjAgreeYn = d.subjectList.filter((f) => f.cp_id === data)[0].agreeYn;

    if (isEqual(d.subjAgreeYn, "N")) {
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
  router.go(-1);
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

    if (isEqual(d.school, "SCHLVL_P002") && isEmpty(d.purpose)) {
      modal.alert("알림", "학습목적을 선택해주세요.");
      return false;
    }

    if (!isEqual(d.subjAgreeYn, "Y")) {
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

const onClickComplete = () => {
  if (!validationSite()) return;

  let param = {};

  if (!d.paramInfo.change) {
    //학습 유지
    param = {
      schlvl: d.school,
      schgrd: d.grade,
      lrnpltCd: d.paramInfo.subjParam,
      subLrnpltCd: d.paramInfo.lectureParam + "," + d.paramInfo.bookParam,
      lrnObj: d.purpose,
    };
  } else {
    //학습 변경
    param = {
      schlvl: d.school,
      schgrd: d.grade,
      lrnpltCd: d.subjAgree,
      subLrnpltCd: d.lectureAgree + "," + d.bookAgree,
      lrnObj: d.purpose,
    };
  }

  call({
    method: "post",
    id: "재검증 학습사이트 변경",
    endpoint: "/api/platform_chg/post",
    data: param,
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);
      if (status === 200) {
        router.push("/");
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

  <div class="account">
    <h1>
      {{ uGetSubtitle(d.isNavActive) }}
    </h1>
    <Nav :active="4" />
    <form @submit.prevent>
      <div class="account__body">
        <legend>
          <h2 class="account__title">
            <h2 class="account__title">학습정보 확인</h2>
          </h2>
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
              isEqual(d.school, 'SCHLVL_P001') ||
              isEqual(d.school, 'SCHLVL_P002')
            "
          >
            <div class="c-form-group">
              <label for="name" class="c-form-label">학년</label>
              <Radio
                class="c-form-check-group--col4"
                v-model="d.grade"
                :items="d.gRadioList"
                @update:modelValue="onChangeGrade"
              />
            </div>
            <div class="c-form-group" v-if="isEqual(d.school, 'SCHLVL_P002')">
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
            :paramInfo="d.paramInfo"
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
            text="이전"
            @click="onClickPrev"
          />
          <Button
            size="auto"
            sizeType="large"
            styleType="danger"
            text="완료"
            @click="onClickComplete"
            :validator="d.isValidation"
          />
        </div>
      </div>
    </form>
  </div>
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
