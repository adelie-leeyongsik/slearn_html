<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          이메일 인증
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="emailAddress" class="c-form-label">이메일 주소</label>
              <div class="c-input-group c-input-group--email">
                <input
                  id="emailAddress"
                  class="c-form-control"
                  type="text"
                  placeholder="이메일 주소"
                  title="이메일주소 입력"
                />
                <select
                  name=""
                  id=""
                  title="이메일 도메인 입력"
                  class="c-form-control"
                >
                  <option value="">직접입력</option>
                </select>
              </div>
              <div class="c-input-group">
                <input
                  id="emailAddress"
                  class="c-form-control"
                  type="text"
                  placeholder="'-'를 제외하고 입력해주세요."
                  value="naver.com"
                  title="인증번호 입력"
                />
                <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-blue">
                  인증번호 재발송
                </button>
              </div>
              <div class="c-input-group">
                <input
                  id="emailAddress"
                  class="c-form-control"
                  type="text"
                  placeholder="인증번호 6숫자를 입력해주세요."
                  value="123456"
                  maxlength="6"
                  title="인증번호 입력"
                />
                <p class="c-text-danger">05:00</p>
                <button class="c-btn c-btn-sm c-btn-blue">인증번호 확인</button>
              </div>
              <div class="c-input-group">
                <input
                  id="emailAddress"
                  class="c-form-control"
                  type="text"
                  placeholder="인증번호 6숫자를 입력해주세요."
                  value="123456"
                  maxlength="6"
                  title="인증번호 입력"
                />
                <p class="c-text-danger">
                  <img src="@img/ic-check.svg" alt="확인완료" />
                  확인완료
                </p>
                <button class="c-btn c-btn-sm c-btn-blue">인증번호 확인</button>
              </div>
            </div>
            <div class="c-text-caution c-text-caution--type02 c-text-danger">
              인증번호가 일치하지 않습니다.
            </div>
            <div class="c-text-caution c-text-caution--type02 c-text-blue">
              인증 되었습니다.
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
