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
          내 자격 검증하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title c-modals__title-sm">
            매년 첫 로그인 시 모든 회원에게 자격 재검증을 실시하고 있습니다.
            <br />
            주민번호를 입력하여 서울런 이용 자격을 확인해 주세요.<br />
            멘토링과 학습사이트 정보를 입력하여 혜택을 누려보세요.
          </div>
          <p class="c-text-left">
            * 자격 미달의 경우 일반회원으로 변경되며, 교육 사이트에 대한 혜택은
            종료됩니다.
          </p>
          <div class="c-modals__form">
            <div class="c-form-group">
              <label class="c-form-label">주민번호 확인</label>
              <div class="c-input-group">
                <input
                  id="rrn"
                  class="c-form-control"
                  type="text"
                  placeholder="주민번호 앞 6자리"
                  maxlength="6"
                  required
                />
                -
                <input
                  id="rrn02"
                  class="c-form-control"
                  type="password"
                  placeholder="주민번호 뒤 7자리"
                  maxlength="7"
                  required
                /><button class="c-btn c-btn-sm c-btn-light">
                  주민번호 인증
                </button>
              </div>
              <div class="c-text-caution c-text-caution--type02 c-text-danger">
                혜택 대상이 아닙니다. 추가 서류 검토를 통해 관리자 승인이
                필요합니다.
              </div>
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
