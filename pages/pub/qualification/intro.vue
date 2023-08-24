<script setup>
definePageMeta({
  layout: "account",
});
</script>
<script>
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
    <h1>회원가입</h1>
    <div class="account__body">
      <div class="join">
        <h2 class="account__title">
          반드시 약관의 내용을<br />
          확인해주세요!
        </h2>
        <div class="account__agree">
          <div class="account__agree-title">‘서울런’ 약관동의</div>
          <dl>
            <dt>
              <div class="c-form-check">
                <input
                  class="c-form-check-input"
                  type="checkbox"
                  name="exampleCheckbox01"
                  id="exampleCheckbox01-01"
                  checked
                />
                <label class="c-form-check-label" for="exampleCheckbox01-01">
                  <strong>모두 동의하기</strong>
                </label>
              </div>
            </dt>
            <dd>
              <ul>
                <li>
                  <div class="c-form-check">
                    <input
                      class="c-form-check-input"
                      type="checkbox"
                      name="exampleCheckbox01"
                      id="exampleCheckbox01-02"
                    />
                    <label
                      class="c-form-check-label"
                      for="exampleCheckbox01-02"
                    >
                      이용약관에 관한 동의 (필수)
                    </label>
                  </div>
                  <a href="">내용보기</a>
                </li>
                <li>
                  <div class="c-form-check">
                    <input
                      class="c-form-check-input"
                      type="checkbox"
                      name="exampleCheckbox01"
                      id="exampleCheckbox01-03"
                    />
                    <label
                      class="c-form-check-label"
                      for="exampleCheckbox01-03"
                    >
                      개인정보 수집/이용에 관한 동의 (필수)
                    </label>
                  </div>
                  <a href="">내용보기</a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">본인인증</div>
          <div class="c-box">
            <div class="c-box__title">휴대폰 인증</div>
            <div class="c-box__title-sub">고객님 명의의 휴대폰으로 인증</div>
            <button class="c-btn c-btn-sm c-btn-blue c-box-btn">
              인증하기
            </button>
          </div>
          <div class="c-box">
            <div class="c-box__title">이메일 인증</div>
            <div class="c-box__title-sub">등록된 이메일로 인증</div>
            <button class="c-btn c-btn-sm c-btn-blue c-box-btn">
              인증하기
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <div class="c-btn c-btn-blue c-btn-lg">이전</div>
        <div class="c-btn c-btn-inactive c-btn-lg">다음</div>
      </div>
      <div class="c-btn-group">
        <div class="c-btn c-btn-blue c-btn-lg">이전</div>
        <div class="c-btn c-btn-danger c-btn-lg">다음</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account {
  &__body {
    @include mobile {
      padding: 6rem 1.6rem 0;
    }
  }
}
.join {
  &__divider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5.7rem 0 2rem;
    font-size: 1.3rem;
    @include mobile {
      margin: 2.3rem 0 2.3rem;
    }
    p {
      position: relative;
      width: 100%;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-0.2rem);
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: $secondary;
        z-index: 1;
      }
      span {
        position: relative;
        padding: 0 2.8rem;
        background-color: $white;
        color: #535353;
        z-index: 2;
      }
    }
  }
  &__list {
    .c-btn {
      margin-top: 1.6rem;
      &:first-child {
        margin-top: 0;
      }
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2.6rem;
      }
    }
  }
}
</style>
