<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1>회원가입</h1>
    <div class="account__body">
      <div class="account__title">
        이미 가입된 회원입니다.<br />
        가입된 정보로 로그인 하세요.
      </div>
    </div>
    <div class="account__body">
      <div class="account__title">
        서울런 가입 대상자입니다. <br />
        계속해서 회원 가입을 진행해 주세요.
      </div>
    </div>
    <div class="account__body">
      <div class="account__title">
        서울런 가입 대상자가 아닙니다. <br />
        서울시에 거주하는 6세에서 24세의 청소년만 가입할 수 있습니다.
      </div>
    </div>
    <div class="account__body">
      <div class="account__title">
        자동 검증 대상자가 아닙니다. <br />
        별도 증빙 자료를 제출하여 회원 가입을 진행하시겠습니까?
      </div>
    </div>
    <!-- 230621 추가 -->
    <div class="account__body">
      <div class="account__title">
        취약계층 기타서류 제출이 필요합니다. <br />
        계속해서 회원 가입을 진행해 주세요.
      </div>
    </div>
    <!-- 230621 추가 -->
    <div class="account__foot">
      <div class="c-btn-group">
        <button type="submit" class="c-btn c-btn-lg c-btn-danger">
          <strong>로그인</strong>
        </button>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button type="submit" class="c-btn c-btn-lg c-btn-danger">
          <strong>확인</strong>
        </button>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button type="submit" class="c-btn c-btn-lg c-btn-danger">
          <strong>메인으로</strong>
        </button>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button type="submit" class="c-btn c-btn-lg c-btn-blue">
          <strong>취소</strong>
        </button>
        <button type="submit" class="c-btn c-btn-lg c-btn-danger">
          <strong>확인</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account__title {
  margin-bottom: 0;
  text-align: center;
  font-size: 2rem;
}
.account__body {
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  & + .account__body {
    margin-top: 4rem;
  }
}
</style>
