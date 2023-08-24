<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";

const modal = useModalStore();

const d = reactive({
  modal: {
    isShow: false,
    title: "검증 결과",
    subTitle: "",
    description: "서류 검증 대상이라면 서류 준비 후 회원가입을 진행해주세요",
  },
  checkModal: {
    isShow: false,
    title: "간편 대상 확인",
    subTitle: "",
    description: "",
  },
  data: {},
  name: "",
  rrn1: "",
  rrn2: "",
  isValid: false,
});

watch(d, () => {
  const regex = /[^\d]+/g;
  d.rrn1 = d.rrn1.replace(regex, "");
  d.rrn2 = d.rrn2.replace(regex, "");
});

const checkRrnValidation = async () => {
  console.log(d.rrn1, d.rrn2);
  console.log(d.name);
  if (isEmpty(d.rrn1) || isEmpty(d.rrn2) || isEmpty(d.name)) {
    modal.alert("알림", "이름과 주민번호를 입력해주세요.");
    return;
  }

  if (d.rrn1.length != 6 || d.rrn2.length != 7) {
    modal.alert("알림", "올바른 주민등록번호를 입력해주세요.");
    return;
  }

  await call({
    id: "혜택 대상자 확인",
    endpoint: "/api/qual/jumin_check",
    method: "post",
    data: {
      usernm: d.name,
      juminNum: d.rrn1 + d.rrn2,
    },
    onResponse({ data }) {
      console.log(data);
      if (data.juminNumValidYn === "N") {
        modal.alert(
          "알림",
          "유효하지 않은 주민번호입니다. 확인 후 다시 입력해주세요."
        );
        return;
      }
      modal.alert(
        "알림",
        "유효한 주민번호입니다. 간편 대상 확인을 진행해주세요."
      );
      d.isValid = true;
    },
  });
};

const checkTargetBtn = async () => {
  if (!d.isValid) {
    modal.alert("알림", "주민번호가 인증되지 않았습니다.");
    return;
  }

  await call({
    id: "혜택 대상자 확인",
    endpoint: "/api/qual/simple_check",
    method: "post",
    data: {
      usernm: d.name,
      juminNum: d.rrn1 + d.rrn2,
    },
    onResponse({ data }) {
      console.log("조회데이터", data);

      if (isEqual(data.bscLivYn, "Y") || isEqual(data.poorYn, "Y")) {
        data.income50 = "Y";
      } else {
        data.income50 = "N";
      }

      d.data = data;

      if (d.data.juminNumValidYn === "N") {
        modal.alert(
          "알림",
          "유효하지 않은 주민번호입니다. 확인 후 다시 입력해주세요."
        );
        return;
      }

      if (d.data.age < 6 || d.data.age > 24) {
        d.modal.description = "<br/>";
      }

      if (d.data.qualYn === "Y") {
        d.modal.subTitle = d.name + "님은 서울런 가입대상입니다.";
      } else if (d.data.seoulJuminYn != "Y" || d.data.ageCondYn != "Y") {
        d.modal.subTitle = d.name + "님은 서울런 가입대상이 아닙니다.";
      } else {
        d.modal.subTitle = d.name + "님은 추가서류 확인이 필요합니다.";
      }

      for (var item in d.data) {
        if (d.data[item] === "Y") {
          d.data[item] = {
            class: "c-text-blue",
            text: "O",
          };
        } else {
          d.data[item] = {
            class: "c-text-danger",
            text: "X",
          };
        }
      }
      d.modal.isShow = true;
      d.checkModal.isShow = false;

      return true;
    },
  });
};

const closeCheckModal = () => {
  d.isValid = false;
  d.name = "";
  d.rrn1 = "";
  d.rrn2 = "";
  d.checkModal.isShow = false;
  d.modal.isShow = false;
};
</script>

<template>
  <CommonContentsModal :data="d.modal" @close="closeCheckModal">
    <template v-slot:innerContents>
      <div class="c-table__wrap">
        <table class="c-table c-table-center">
          <caption>
            혜택 검증 결과로 상태, 항목, 결과 를 알수 있습니다.
          </caption>
          <thead>
            <tr>
              <th scope="row">상태</th>
              <th scope="row">항목</th>
              <th scope="row">결과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">필수</td>
              <td class="c-text-left">서울시 거주</td>
              <td>
                <strong :class="d.data.seoulJuminYn.class">{{
                  d.data.seoulJuminYn.text
                }}</strong>
              </td>
            </tr>
            <tr>
              <td class="c-text-left">나이 (만6세 ~ 24세)</td>
              <td>
                <strong :class="d.data.ageCondYn.class">{{
                  d.data.ageCondYn.text
                }}</strong>
              </td>
            </tr>

            <tr>
              <td rowspan="3">1개 이상 적용</td>
              <td class="c-text-left">소득 50%</td>
              <td>
                <strong :class="d.data.income50.class">{{
                  d.data.income50.text
                }}</strong>
              </td>
            </tr>
            <tr>
              <td class="c-text-left">유공자 자녀</td>
              <td>
                <strong :class="d.data.naManMeritFamYn.class">{{
                  d.data.naManMeritFamYn.text
                }}</strong>
              </td>
            </tr>
            <tr>
              <td class="c-text-left">법정 한부모</td>
              <td>
                <strong :class="d.data.singleParentYn.class">{{
                  d.data.singleParentYn.text
                }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="c-modals__title">
          <p>
            ※ 학교밖, 다문화, 북한이탈주민 청소년은 가입시 별도서류 제출 필요
          </p>
        </div>
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="closeCheckModal"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <CommonContentsModal :data="d.checkModal" @close="closeCheckModal">
    <template v-slot:innerContents>
      <div class="c-modals__form">
        <div class="c-modals__title c-modals__title-sm">회원 가입 대상</div>
        <p class="c-text-left">
          서울시 거주 / 만6세 ~ 만 24세이고,수급권자, 차상위계층, 학교 밖,
          다문화가족, 법정한부모가족, 북한이탈주민 청소년
        </p>
        <div class="c-modals__box c-modals__box--type02">
          <p>자동검증</p>
          <span>만 6세 ~ 24세인 수급권자, 차상위계층, 법정한부모 청소년</span>
          <p>서류제출</p>
          <span>학교 밖, 다문화가족, 북한이탈주민 청소년</span><br />
          <span class="c-text-danger"
            >* 회원가입시 별도 증빙서류 제출하여 가입가능</span
          >
        </div>
      </div>

      <div class="c-modals__form">
        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <input
            id="name"
            class="c-form-control"
            type="text"
            placeholder="이름을 입력해주세요"
            v-model="d.name"
            :disabled="d.isValid"
            required
          />
        </div>
        <div class="c-form-group">
          <label class="c-form-label">주민번호 확인</label>
          <div class="c-input-group">
            <input
              id="rrn"
              class="c-form-control"
              type="text"
              placeholder="주민번호 앞 6자리"
              maxlength="6"
              title="주민번호 앞 6자리"
              v-model="d.rrn1"
              :disabled="d.isValid"
              required
            />
            -
            <input
              id="rrn02"
              class="c-form-control"
              type="password"
              placeholder="주민번호 뒤 7자리"
              maxlength="7"
              title="주민번호 뒤 6자리"
              v-model="d.rrn2"
              :disabled="d.isValid"
              required
            /><button
              class="c-btn c-btn-sm"
              :class="d.isValid ? 'c-btn-light' : ''"
              :disabled="d.isValid"
              @click="checkRrnValidation"
            >
              주민번호 인증
            </button>
          </div>
        </div>
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-blue"
            @click="closeCheckModal"
          >
            닫기
          </button>
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="checkTargetBtn()"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <div class="introduction-join">
    <div class="introduction__title-lg c-text-center">가입대상 안내</div>
    <div class="introduction-join">
      <div class="introduction-join__wrap">
        <div class="introduction-join__info c-bg-bule">
          <div class="c-text-title-lg">자격검증 대상</div>
          <ul>
            <li>✓ 서울시 거주 만 6세 ~ 만 24세</li>
            <li>✓ 소득기준대상, 학교밖, 다문화 가족, 법정한부모가족</li>
          </ul>
          <p>
            소득기준대상 : 수급권자, 차상위계층 (중위소득 50%이하)
            <br />
            법정한부모 : 중위소득 60% 이하<br class="c-mo" />
            (단, 청소년 한부모 가정은 중위소득 72%이하)
          </p>
        </div>
        <div class="introduction-join__info c-bg-primary">
          <div class="c-text-title-lg">간편대상 확인하기</div>
          <div class="c-text-title-sub">
            이름과 주민등록번호로<br />
            자격대상 바로 확인하세요!
          </div>
          <div class="c-btn-box">
            <div class="introduction-join__img">
              <img
                src="@img/pic-introduction-join-img.svg"
                alt="간편 대상 확인하기"
              />
            </div>
            <button
              class="c-btn c-btn-lg c-btn-primary w-100"
              @click="d.checkModal.isShow = true"
            >
              간편대상 확인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.c-text-blue {
  color: #18206e !important;
}
</style>
