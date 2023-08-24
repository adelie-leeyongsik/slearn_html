<script setup>
import joinNav from "../_nav.vue";
definePageMeta({
  layout: "account",
});
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="2" />
    <div class="account__body">
      <div class="join">
        <h2 class="account__title">
          반드시 약관의 내용을<br />
          확인해주세요!
        </h2>
        <div class="account__agree">
          <div class="account__agree-title">약관동의</div>
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
          <label for="phone" class="c-form-label">본인인증</label>
          <div class="account__info">
            <div class="account__info-title">
              회원가입을 위하여 아래의 2가지 중 신청 유형을 선택하여 주세요.
            </div>
            <div class="account__info-title c-text-primary">
              <span>
                만 14세 미만 아동의 개인 정보 보호를 위해 [개인정보 보호법]
                제22조에 따라 법정대리인(부모/법정후견인 등)의 동의를 받아야
                합니다.
              </span>
            </div>
          </div>
          <div class="account__etc-list">
            <div class="account__etc-item">
              <div class="account__etc-item-head">14세 이상 본인신청</div>
              <div class="account__etc-item-btn">
                <button class="c-btn c-btn-primary">휴대폰 인증</button>
                <button class="c-btn c-btn-primary">이메일 인증</button>
              </div>
            </div>
            <div class="account__etc-item">
              <div class="account__etc-item-head">14세 미만 법정대리인</div>
              <div class="account__etc-item-btn">
                <button class="c-btn c-btn-primary">법정대리인 인증</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <!-- 웹접근성 div -> button 수정-->
        <button class="c-btn c-btn-primary c-btn-lg">이전</button>
        <button class="c-btn c-btn-inactive c-btn-lg">다음</button>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-primary c-btn-lg">이전</button>
        <button class="c-btn c-btn-primary c-btn-lg">다음</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-input-group {
  .c-form-control::placeholder {
    font-weight: 700;
  }
}
.account__info {
  margin-top: 0;
}
</style>
