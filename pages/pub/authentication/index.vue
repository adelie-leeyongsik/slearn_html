<script>
definePageMeta({
  layout: "account",
});
export default {
  data() {
    return {
      authenticationMeans: "phone",
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>본인인증</h1>
    <div class="account__body">
      <h2 class="account__title">
        15세부터는 본인명의 휴대폰 혹은<br />
        이메일을 통해 본인인증이 필요합니다!
      </h2>
      <div class="c-form-group">
        <label for="name" class="c-form-label">인증수단</label>
        <div class="c-form-check-group">
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="authentication"
              id="phone"
              value="phone"
              v-model="authenticationMeans"
              checked
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="phone"
              >휴대폰</label
            >
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="authentication"
              id="email"
              value="email"
              v-model="authenticationMeans"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="email"
              >이메일</label
            >
          </div>
        </div>
      </div>
      <section v-if="authenticationMeans === 'phone'">
        <div class="c-form-group">
          <label for="phoneName" class="c-form-label">이름</label>
          <input
            id="phoneName"
            class="c-form-control"
            type="text"
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div class="c-form-group">
          <label for="phonePhone" class="c-form-label">휴대폰 번호</label>
          <div class="c-input-group">
            <input
              id="phonePhone"
              class="c-form-control"
              type="text"
              placeholder="'-'를 제외하고 입력해주세요."
              maxlength="11"
              title="-를 제외한 휴대폰 번호 입력"
            />
            <button class="c-btn c-btn-sm c-btn-inactive">인증번호 발송</button>
          </div>
          <div class="c-input-group">
            <input
              id="phonePhone"
              class="c-form-control"
              type="text"
              placeholder="'-'를 제외하고 입력해주세요."
              value="01012345678"
              maxlength="11"
              title="인증번호 입력"
            />
            <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-darkgray">
              인증번호 재발송
            </button>
          </div>
          <div class="c-input-group">
            <input
              id="phonePhone"
              class="c-form-control"
              type="text"
              placeholder="인증번호 6숫자를 입력해주세요."
              value="123456"
              maxlength="6"
              title="인증번호 입력"
            />
            <p class="c-text-danger">05:00</p>
            <button class="c-btn c-btn-sm c-btn-darkgray">인증번호 확인</button>
          </div>
          <div class="c-input-group">
            <input
              id="phonePhone"
              class="c-form-control"
              type="text"
              placeholder="인증번호 6숫자를 입력해주세요."
              value="123456"
              maxlength="6"
              title="인증번호 입력"
            />
            <p class="c-text-danger">
              <img src="@img/ic-check.svg" alt="확인완료" />
              확인완료
            </p>
            <button class="c-btn c-btn-sm c-btn-darkgray">인증번호 확인</button>
          </div>
        </div>
      </section>
      <section v-if="authenticationMeans === 'email'">
        <div class="c-form-group">
          <label for="emailName" class="c-form-label">이름</label>
          <input
            id="emailName"
            class="c-form-control"
            type="text"
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div class="c-form-group">
          <label for="emailAddress" class="c-form-label">이메일 주소</label>
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
            <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-darkgray">
              인증번호 재발송
            </button>
          </div>
          <div class="c-input-group">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="인증번호 6숫자를 입력해주세요."
              value="123456"
              maxlength="6"
              title="인증번호 입력"
            />
            <p class="c-text-danger">05:00</p>
            <button class="c-btn c-btn-sm c-btn-darkgray">인증번호 확인</button>
          </div>
          <div class="c-input-group">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="인증번호 6숫자를 입력해주세요."
              value="123456"
              maxlength="6"
              title="인증번호 입력"
            />
            <p class="c-text-danger">
              <img src="@img/ic-check.svg" alt="확인완료" />
              확인완료
            </p>
            <button class="c-btn c-btn-sm c-btn-darkgray">인증번호 확인</button>
          </div>
        </div>
      </section>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-inactive">확인</button>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg">확인</button>
      </div>
    </div>
  </div>
</template>

//
<style lang="scss" scoped>
// .account {
//   @include mobile {
//     background: $white;
//   }
// }
//
</style>
