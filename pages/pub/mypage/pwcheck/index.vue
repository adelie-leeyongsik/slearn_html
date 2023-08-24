<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">회원정보 변경</div>
            <div class="c-text-title-sub">
              <p>
                개인정보 보호를 위해 다시 한번 비밀번호를 입력해주세요. <br />
                도움이 필요하실 땐 서울런 고객센터 <br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__form-wrap">
              <div class="mypage__form">
                <form action="" class="needs-validation" novalidate>
                  <fieldset>
                    <div class="c-form-group">
                      <label for="name" class="c-form-label">회원아이디</label>
                      <input
                        type="text"
                        id="name"
                        class="c-form-control"
                        placeholder="abc1234"
                        readonly
                      />
                    </div>
                    <div class="c-form-group">
                      <label for="pw" class="c-form-label">비밀번호 입력</label>
                      <input
                        type="password"
                        id="pw"
                        class="c-form-control"
                        placeholder="비밀번호를 입력해주세요"
                      />
                    </div>
                    <div class="c-btn-group">
                      <button type="submit" class="c-btn c-btn-lg c-btn-blue">
                        취소
                      </button>
                      <button type="submit" class="c-btn c-btn-lg c-btn-danger">
                        확인
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
