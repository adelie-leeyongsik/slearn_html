<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-alert">
    <div class="c-alert" v-if="show">
      <div class="c-alert__bg" @click="$emit('close')"></div>
      <div class="c-alert__inner">
        <div class="c-alert__title">자격 검증하기</div>
        <div class="c-alert__contents">
          <p>
            자격검증이 완료되었습니다. <br />
            계속 서울형교육플랫폼을 이용해주세요!
          </p>
        </div>
        <div class="c-alert__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-black"
              @click="$emit('close')"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
