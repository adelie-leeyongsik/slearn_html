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
          환영해요 (1/3)
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">서울런 오신 것을 환영합니다</div>
          <p>
            혼자 공부하기 힘든 분들을 위해 <br />
            멘토링 서비스를 무료로 제공하고 있어요 <br />
            멘토링을 신청 해보시겠어요?
          </p>
          <div class="c-modals__welcome-img">
            <div class="c-modals__welcome-img-mask">
              <img src="@img/@temp/1.jpg" alt="서울런 오신 것을 환영합니다" />
            </div>
          </div>
          <div class="c-modals__welcome-link">
            <button class="c-btn">
              <i class="ico ico-question"></i>
              멘토링이 궁금해요
            </button>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                이전
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
