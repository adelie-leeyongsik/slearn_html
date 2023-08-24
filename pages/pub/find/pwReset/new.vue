<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1>비밀번호 신규 설정</h1>
    <form action="" class="needs-validation" novalidate>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              안전한 로그인을 위해 <br />
              비밀번호 설정이 필요합니다
            </h2>
          </legend>
          <div class="c-form-group">
            <label for="identification" class="c-form-label">아이디</label>
            <input
              id="identification"
              class="c-form-control"
              type="text"
              placeholder="아이디를 입력해 주세요"
              title="아이디를 입력해 주세요"
              disabled
            />
          </div>
          <div class="c-form-group">
            <label for="password1" class="c-form-label">새로운 비밀번호</label>
            <div class="c-input-group">
              <input
                id="password1"
                class="c-form-control"
                type="password"
                placeholder="새로운 비밀번호를 입력해주세요"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="password2" class="c-form-label">비밀번호 확인</label>
            <input
              id="password2"
              class="c-form-control"
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요"
              required
            />
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-primary">
              비밀번호 변경
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
