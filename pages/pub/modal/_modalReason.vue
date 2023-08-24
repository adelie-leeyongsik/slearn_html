<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modal">
    <div class="c-modal" v-if="show">
      <div class="c-modal__bg" @click="$emit('close')"></div>
      <div class="c-modal__inner">
        <div class="c-modal__title">미정산 사유보기</div>
        <div class="c-modal__contents">
          <div class="c-modal__box">
            <dl>
              <dt>정산 예정일</dt>
              <dd>2023.1.15</dd>
            </dl>
            <dl>
              <dt>정산 상태</dt>
              <dd><span class="c-text-danger">미정산</span></dd>
            </dl>
            <dl>
              <dt>정산 활동명</dt>
              <dd>OT 교육 수료</dd>
            </dl>
            <dl>
              <dt>정산 금액</dt>
              <dd>9.000원</dd>
            </dl>
            <dl>
              <dt>미정산 사유</dt>
              <dd>결석</dd>
            </dl>
          </div>
        </div>
        <div class="c-modal__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-darkgray"
              @click="$emit('close')"
            >
              닫기
            </button>
            <button type="submit" class="c-btn" @click="$emit('close')">
              정정 요청
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
