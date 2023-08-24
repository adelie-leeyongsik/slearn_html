<script setup>
import joinNav from "../_nav.vue";
import Modal from "../_modal.vue";
import Alert from "../_alert.vue";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      memberType: "memberType1",
      school: "elementarySchool",
      showModal: false,
      showAlert: false,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="3" />
    <form action="">
      <div class="account__body">
        <h2 class="account__title">기본정보를 입력해주세요.</h2>
        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <div class="c-input-group">
            <!-- 웹접근성 id="name" 추가 -->
            <input
              id="name"
              class="c-form-control"
              type="text"
              placeholder="이름을 입력해 주세요"
            />
            <!-- //웹접근성 id="name" 추가 -->
          </div>
        </div>
        <div class="c-form-group">
          <label for="identification" class="c-form-label">아이디</label>
          <div class="c-input-group">
            <input
              id="identification"
              class="c-form-control"
              type="text"
              placeholder="아이디를 입력해 주세요"
              title="아이디를 입력해 주세요"
            />
            <button class="c-btn c-btn-sm c-btn-primary">중복확인</button>
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-danger">
            영문 또는 영문과 숫자를 조합하여 5글자 이상 입력해주세요.
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-danger">
            등록 된 아이디가 존재합니다.
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-blue">
            사용 가능 합니다.
          </div>
        </div>
        <div class="c-form-group">
          <label for="password" class="c-form-label">비밀번호</label>
          <div class="c-input-group">
            <input
              id="password"
              class="c-form-control"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-danger">
            대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합하여 최소
            10자리~12자리까지 입력 가능 합니다.
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-danger">
            연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.
          </div>
        </div>
        <div class="c-form-group">
          <label for="password2" class="c-form-label">비밀번호 확인</label>
          <div class="c-input-group">
            <input
              id="password2"
              class="c-form-control"
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요."
            />
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-danger">
            동일한 비밀번호를 입력해주세요.
          </div>
        </div>

        <div class="c-form-group">
          <div class="c-form-label">생년월일</div>
          <div class="c-input-group c-input-group--birth">
            <select class="c-form-control" title="생년월일 - 연도">
              <option>년도</option>
            </select>
            <select class="c-form-control" title="생년월일 - 월">
              <option>월</option>
            </select>
            <select class="c-form-control" title="생년월일 - 일">
              <option>일</option>
            </select>
          </div>
        </div>
        <div class="c-form-group">
          <!-- 웹접근성 for="phone" 추가 -->
          <label for="phone" class="c-form-label">휴대폰 번호</label>
          <!-- // 웹접근성 for="phone" 추가 -->
          <div class="c-input-group">
            <input
              id="phone"
              class="c-form-control"
              placeholder="'-'를 제외하고 입력해주세요."
            />
          </div>
        </div>
        <div class="c-form-group">
          <label for="mail" class="c-form-label">이메일 주소</label>
          <div class="c-input-group c-input-group--email">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="이메일 주소"
              title="이메일주소 입력"
            />
            <select
              name=""
              id=""
              title="이메일 도메인 입력"
              class="c-form-control"
            >
              <option value="">직접입력</option>
            </select>
          </div>
          <div class="c-input-group">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="'-'를 제외하고 입력해주세요."
              value="naver.com"
              title="인증번호 입력"
            />
            <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary">
              이메일 중복확인
            </button>
          </div>
        </div>
        <div class="c-text-caution c-text-caution--type02 c-text-primary">
          중복된 이메일 주소가 존재합니다.
        </div>
        <div class="c-form-group">
          <label class="c-form-label">주소</label>
          <div class="c-input-group c-input-group--disabled">
            <input
              class="c-form-control"
              type="text"
              placeholder="우편번호"
              title="우편번호"
              disabled
            />
            <button class="c-btn c-btn-sm c-btn-primary">검색</button>
          </div>
          <div class="c-input-group">
            <input
              class="c-form-control"
              type="text"
              placeholder=""
              title="주소"
              disabled
            />
          </div>
          <div class="c-input-group">
            <input
              class="c-form-control"
              type="text"
              placeholder="상세 주소 입력해주세요"
              title="상세주소"
            />
          </div>
        </div>
      </div>

      <!--  -->

      <div class="account__body">
        <h2 class="account__title">법정대리인 정보 확인하세요.</h2>
        <div class="c-form-group">
          <label for="legalRepresentativeName" class="c-form-label"
            >법정대리인 이름</label
          >
          <div class="c-input-group">
            <input
              id="legalRepresentativeName"
              class="c-form-control"
              type="text"
              value="김철수"
              disabled
            />
          </div>
        </div>
        <div class="c-form-group">
          <label for="legalRepresentativeSex" class="c-form-label"
            >법정대리인 성별</label
          >
          <div class="c-input-group">
            <input
              id="legalRepresentativeSex"
              class="c-form-control"
              type="text"
              value="남성"
              disabled
            />
          </div>
        </div>
        <div class="c-form-group">
          <label for="legalRepresentativePhone" class="c-form-label"
            >법정대리인 인증</label
          >
          <div class="c-input-group">
            <input
              id="legalRepresentativePhone"
              class="c-form-control"
              type="text"
              value="010-0000-0000"
              disabled
            />
          </div>
        </div>
      </div>

      <!--  -->

      <div class="account__body">
        <h2 class="account__title">이벤트 정보 수신(SMS/알림톡) 동의</h2>
        <div class="c-form-group">
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="event"
                id="eventYes"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventYes"
                >동의</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="event"
                id="eventNo"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="eventNo"
                >미동의</label
              >
            </div>
          </div>
        </div>
        <div class="c-text-caution">
          서울런 서비스 이용회원은 학습정보, 운영에 대한 등의 정보는
          <br />
          문자/이메일 등으로 전송됩니다.
        </div>
      </div>

      <div class="account__foot">
        <div class="c-btn-group">
          <button class="c-btn c-btn-lg c-btn-primary">이전</button>
          <button class="c-btn c-btn-lg c-btn-inactive">다음</button>
        </div>
      </div>
    </form>
  </div>
  <Modal :show="showModal" @close="showModal = false" />
  <Alert :show="showAlert" @close="showAlert = false" />
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
</style>
