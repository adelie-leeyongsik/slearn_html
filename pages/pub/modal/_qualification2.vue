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
          간편 대상 확인
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
            <div class="c-modals__title c-modals__title-sm">회원 가입 대상</div>
            <p class="c-text-left">
              서울시 거주 / 만6세 ~ 만 24세이고,수급권자, 차상위계층, 학교 밖,
              다문화가족, 법정한부모가족, 북한이탈주민 청소년
            </p>
            <div class="c-modals__box c-modals__box--type02">
              <p>자동검증</p>
              <span
                >만 6세 ~ 24세인 수급권자, 차상위계층, 법정한부모 청소년</span
              >
              <p>서류제출</p>
              <span>학교 밖, 다문화가족, 북한이탈주민 청소년</span><br />
              <span class="c-text-danger"
                >* 회원가입시 별도 증빙서류 제출하여 가입가능</span
              >
            </div>
          </div>

          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="name" class="c-form-label">이름</label>
              <input
                id="name"
                class="c-form-control"
                type="text"
                placeholder="이름을 입력해주세요"
                required
              />
            </div>
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
                class="c-btn c-btn-primary"
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
