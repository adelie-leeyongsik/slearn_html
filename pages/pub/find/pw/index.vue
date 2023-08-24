<script>
definePageMeta({
  layout: "account",
});
export default {
  data() {
    return {
      age14: "",
      authenticationMeans: "phone",
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>비밀번호 찾기</h1>
    <div class="account__body">
      <h2 class="account__title">
        가입하신 정보로<br />아이디를 찾을 수 있어요!
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
          <label for="phoneName" class="c-form-label">아이디</label>
          <input
            id="phoneName"
            class="c-form-control"
            type="text"
            placeholder="아이디를 입력해 주세요."
          />
        </div>
        <div class="c-form-group">
          <label for="phoneName2" class="c-form-label">이름</label>
          <div class="c-input-group">
            <input
              id="phoneName2"
              class="c-form-control"
              type="text"
              placeholder="'-'를 제외하고 입력해주세요."
              maxlength="11"
              title="실명을 입력해 주세요."
            />
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
          </div>
        </div>
      </section>
    </div>
    <div class="account__foot" v-if="authenticationMeans === 'phone'">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-danger">PASS로 인증</button>
      </div>
    </div>
    <div class="account__foot" v-if="authenticationMeans === 'email'">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-danger">비밀번호 찾기</button>
      </div>
      <div class="account__foot-link">
        <a href="">비밀번호를 찾으시나요?</a>
      </div>
    </div>
    <div class="account__message">
      가입된 휴대전화 번호로 임시 비밀번호가 발송되었습니다.
    </div>
    <div class="account__message">
      가입된 메일주소로 임시 비밀번호가 발송되었습니다.
    </div>
    <div class="account__message">메일이 발송되었습니다.</div>
  </div>
</template>
