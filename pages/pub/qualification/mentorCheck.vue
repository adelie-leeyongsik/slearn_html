<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1>회원가입</h1>
    <form action="" class="needs-validation" novalidate>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">멘토 회원 대상 확인하기</h2>
          </legend>
          <p class="account-qualification__text">정보를 입력해주세요</p>
          <div class="c-form-group">
            <label for="name" class="c-form-label">이름</label>
            <input
              id="name"
              class="c-form-control"
              type="text"
              placeholder="이름을 입력하세요."
              required
            />
          </div>
          <div class="c-form-group">
            <label class="c-form-label">주민번호</label>
            <div class="c-input-group">
              <!-- 웹접근성 title 추가 -->
              <input
                id="rrn"
                class="c-form-control"
                type="text"
                placeholder="주민번호 앞 6자리"
                maxlength="6"
                title="주민번호 앞 6자리"
                required
              />
              <!-- //웹접근성 title 추가 -->
              -
              <!-- 웹접근성 title 추가 -->
              <input
                id="rrn02"
                class="c-form-control"
                type="password"
                placeholder="주민번호 뒤 7자리"
                maxlength="7"
                title="주민번호 뒤 7자리"
                required
              />
              <!-- //웹접근성 title 추가 -->
            </div>
          </div>
          <div class="c-form-group">
            <label for="birth" class="c-form-label">생년월일</label>
            <input
              id="birth"
              class="c-form-control"
              type="text"
              placeholder="생년월일 ex.)20020101"
              required
            />
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-primary">
              <strong>자격조회</strong>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}
</style>
