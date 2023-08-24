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
        <div class="c-modal__title">자격 검증하기</div>
        <div class="c-modal__contents">
          <div class="c-form-group">
            <label for="rrn" class="c-form-label">주민번호</label>
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
              />
              <button class="c-btn c-btn-sm c-btn-darkgray">
                주민번호 조회
              </button>
            </div>
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
            <button
              type="submit"
              class="c-btn c-btn-inactive"
              @click="$emit('close')"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
