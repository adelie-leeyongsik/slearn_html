<script setup>
import siteSelect from "@pages/join/step04/siteSelect.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const p = defineProps({
  learnInfo: { type: Object, defualt: {} },
});

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

  paramInfo: {},
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

      let learn = p.learnInfo;
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
        change: true,
        subjParam: learn.cp.cd,
        lectureParam: lecture[0],
        bookParam: book[0],
      };
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
  if (!isEmpty(data)) {
    d.subjAgreeYn = d.subjectList.filter((f) => f.cp_id === data)[0].agreeYn;

    if (isEqual(data, "LRNPLT_T002")) {
      d.subjMiMac = data;
      d.subjAgree = "";
    } else if (isEqual(d.subjAgreeYn, "N")) {
      d.subjAgree = data;

      d.subjAgreeNm = d.subjectList.filter(
        (f) => f.cp_id === d.subjAgree
      )[0].cp_name;
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
  } else {
    d.bookAgree = "";
  }
};

const onConfirm = () => {
  self.close();
};
</script>

<template>
  <div class="account">
    <h1>학습사이트 미리보기</h1>
    <form @submit.prevent>
      <div class="account__body">
        <legend>
          <h2 class="account__title">학습정보 확인</h2>
        </legend>
        <div class="c-form-group" v-if="!isEmpty(d.schoolList)">
          <label for="name" class="c-form-label">학교급</label>
          <Radio
            class="c-form-check-group--col3"
            v-model="d.school"
            :items="d.schoolList"
            :isDisabled="!isEqual(p.learnInfo.schChgAvailPreview, 'Y')"
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
                :isDisabled="!isEqual(p.learnInfo.schChgAvailPreview, 'Y')"
                @update:modelValue="onChangeGrade"
              />
            </div>
            <div class="c-form-group">
              <label for="name" class="c-form-label">학습목적</label>
              <Radio
                v-model="d.purpose"
                :items="d.pRadioList"
                :isDisabled="!isEqual(p.learnInfo.schChgAvailPreview, 'Y')"
              />
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

      <div class="account__foot">
        <div class="c-btn-group">
          <Button
            size="auto"
            sizeType="large"
            styleType="danger"
            text="확인"
            @click="onConfirm"
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
