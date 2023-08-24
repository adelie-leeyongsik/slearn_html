<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1 class="d-none">로그인</h1>
    <div class="account__body">
      <div class="login">
        <form action="" class="needs-validation" novalidate>
          <fieldset>
            <legend>
              <h2 class="account__title">
                로그인하고<br />다양한 정보를 만나보세요!
              </h2>
            </legend>
            <p class="account__title-sub">
              *멘토 회원은 아이디/비밀번호 로그인만 지원합니다.
            </p>
            <div class="login__form">
              <input
                class="c-form-control"
                type="text"
                placeholder="아이디를 입력해 주세요"
                title="아이디 입력"
                required
              />
              <input
                class="c-form-control"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                title="비밀번호 입력"
                required
              />
              <p class="c-form-message c-text-danger">
                아이디 또는 비밀번호가 올바르지 않습니다.
              </p>
              <div class="c-form-check">
                <input
                  type="checkbox"
                  class="c-form-check-input"
                  id="rememberId"
                />
                <label for="rememberId" class="c-form-check-label"
                  >아이디 기억하기</label
                >
              </div>
              <button
                type="submit"
                class="c-btn c-btn-lg c-btn-block c-btn-danger"
              >
                <strong>로그인</strong>
              </button>
            </div>
          </fieldset>
        </form>
        <div class="login__menu">
          <ul>
            <li>
              <router-link to="/pub/find/id/">아이디 찾기</router-link>
            </li>
            <li>
              <router-link to="/pub/find/pw/">비밀번호 재설정</router-link>
            </li>
            <li>
              <router-link to="/pub/join/step01">회원가입</router-link>
            </li>
          </ul>
        </div>
        <div class="login__divider">
          <p><span>또는</span></p>
        </div>
        <div class="login__list">
          <button
            type="button"
            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
          >
            <img src="@img/logo-naver.svg" alt="네이버 로고" />
            네이버계정으로 로그인
          </button>
          <button
            type="button"
            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
          >
            <img src="@img/logo-kakao.svg" alt="카카오톡 로고" />
            카카오계정으로 로그인
          </button>
          <button
            type="button"
            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
          >
            <img src="@img/logo-digital.svg" alt="디지털원패스 로고" />
            디지털원패스로 로그인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__title {
    margin-bottom: 3rem;
  }
  legend {
    .account__title {
      margin-bottom: 0;
      padding-bottom: 3rem;
    }
  }
  @include mobile {
    padding: 4rem 0 6rem;
  }
}
</style>
