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
          경험해보세요 (2/3)
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">관심 추천을 받아보실래요?</div>
          <p>
            서울런에서는 도움이 되는 많은 컨텐츠가 준비되어 있어요 <br />
            관심사를 모르신다면 지금 AI 서울런에게 컨텐츠추천을 받아보세요
          </p>
          <div class="c-modals__welcome-img">
            <div class="c-modals__welcome-img-mask">
              <img src="@img/@temp/1.jpg" alt="서울런 오신 것을 환영합니다" />
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                다음에 해볼게요!
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                지금 해볼게요!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
