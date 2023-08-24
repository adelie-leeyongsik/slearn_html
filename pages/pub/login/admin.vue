<script>
definePageMeta({
  layout: "account",
});
</script>

<template>
  <div class="account">
    <h1>사용자 ID 로그인</h1>
    <P></P>
    <div class="account__body">
      <div class="account__title">
        사용자 ID로 로그인하여<br />
        학습자를 확인하실 수 있습니다.
      </div>
      <div class="c-form-group">
        <label for="name" class="c-form-label">아이디</label>
        <input
          type="text"
          id="name"
          class="c-form-control"
          placeholder="사용자 ID를 입력해주세요"
        />
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-primary">로그인</button>
      </div>
    </div>
  </div>
</template>
