<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-alerts">
    <div class="c-alerts" v-if="show">
      <div class="c-alerts__bg" @click="$emit('close')"></div>
      <div class="c-alerts__inner">
        <div class="c-alerts__title">자격 검증하기</div>
        <div class="c-alerts__contents">
          <p>
            자격검증이 완료되었습니다. <br />
            계속 서울형교육플랫폼을 이용해주세요!
          </p>
        </div>
        <div class="c-alerts__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-danger"
              @click="$emit('close')"
            >
              닫기
            </button>
          </div>
        </div>
        <div class="c-alerts__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-blue"
              @click="$emit('close')"
            >
              취소
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
  </Transition>
</template>
