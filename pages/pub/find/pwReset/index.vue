<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1>비밀번호 재설정</h1>
    <form action="" class="needs-validation" novalidate>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              <!-- 230627 6개월 -> 3개월로 변경 -->
              3개월동안 비밀번호를<br />
              변경하지 않으셨습니다.
              <!-- // 230627 6개월 -> 3개월로 변경 -->
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
            <label for="password" class="c-form-label">비밀번호</label>
            <div class="c-input-group">
              <input
                id="password"
                class="c-form-control"
                type="password"
                placeholder="기존 비밀번호를 입력해주세요."
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="password" class="c-form-label">새로운 비밀번호</label>
            <input
              id="password"
              class="c-form-control"
              type="password"
              placeholder="새로운 비밀번호를 입력해주세요."
              required
            />
            <div class="c-text-caution c-text-caution--check">
              대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합하여 최소
              10자리~12자리까지 입력 가능 합니다.
            </div>
            <div class="c-text-caution c-text-caution--check">
              연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.
            </div>
          </div>
          <div class="c-form-group">
            <label for="password2" class="c-form-label">비밀번호 확인</label>
            <input
              id="password2"
              class="c-form-control"
              type="password"
              placeholder="다시 한번 입력해주세요."
              required
            />
            <div class="c-text-caution c-text-caution--check">
              비밀번호를 한번 더 입력하세요.
            </div>
            <div class="c-text-caution c-text-caution--check c-text-danger">
              사용 가능 합니다.
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-blue">
              3개월 후 변경
            </button>
            <button type="submit" class="c-btn c-btn-lg c-btn-danger">
              비밀번호 변경
            </button>
          </div>
        </div>

        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-blue">
              3개월 후 변경
            </button>
            <button type="submit" class="c-btn c-btn-lg c-btn-secondary">
              비밀번호 변경
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
