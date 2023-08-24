<script setup>
import joinNav from "../_navCheck.vue";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      agree: true,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>자격 재검증</h1>
    <joinNav :active="2" />
    <form action="" class="needs-validation" novalidate>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              대학교에 진학한 경우<br />
              일반 회원으로 변경됩니다.
            </h2>
          </legend>
          <p class="account-qualification__text">※ 서울런 서비스 이용불가</p>
          <div class="c-form-group">
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="filetype"
                  id="filetype01"
                  checked
                  @click="agree = true"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="filetype01"
                  >진학함</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="filetype"
                  id="filetype02"
                  @click="agree = false"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="filetype02"
                  >진학하지 않음</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="account__body" v-if="agree === false">
          <div class="account__title account__title-sm">서약서</div>
          <div class="account__info account__info-outline">
            학교 밖 자격으로 가입하여도 학교로 복학하거나,<br />
            대학을 진학한 경우 학교 밖 자격으로 이용불가 함을 알려드리며,<br />
            자격이 변경되었을 경우 학습상담센터(1533-0909) 또는<br />
            1:1문의게시판을 통해 자격 변경내용을 서울시에 통보하여 이용중지를<br />
            요청하여야 합니다. 회원의 자격 변경내용 미통지로 발생되는
            불이익과<br />
            책임은 회원에게 있습니다.
          </div>
          <div class="c-form-check-group">
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge1"
              />

              <label for="pledge1">동의</label>
            </div>
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge2"
              />
              <label for="pledge2">미동의</label>
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-primary">
              <strong>이전</strong>
            </button>
            <button type="submit" class="c-btn c-btn-lg c-btn-primary">
              <strong>다음</strong>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account {
  &__info {
    font-size: 1.4rem;
  }
  &__body + &__body {
    margin-top: 1.6rem;
  }
}
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}

.c-form-check--type03 + .c-form-check--type03 {
  margin-top: 0;
}

.account__info-outline + .c-form-check-group {
  margin-top: 1.6rem;
}

.account__title-sm {
  margin-top: 0;
}
</style>
