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
          <div class="c-modals__title">
            관심있으신 계열을 선택해주세요
            <span class="c-text-weight-400">(최대 2개)</span>
          </div>
          <p>
            서울런 서비스가 발전하는데 꼭 필요한 설문이에요 <br />
            선택만 해주시면 감사하겠습니다.
          </p>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <div class="c-form-check-group c-form-check-group--col3">
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field00" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field00"
                      >인문사회</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field01" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field01"
                      >자연과학</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field02" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field02"
                      >공학</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field03" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field03"
                      >보건의료</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field04" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field04"
                      >의약학</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field05" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field05"
                      >교육</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field06" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field06"
                      >종교</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field07" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field07"
                      >기타</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input class="c-btn-check" type="checkbox" id="Field08" />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="Field08"
                      >미정</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                완료 했어요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-btn-lg {
  height: 9rem;
}
</style>
