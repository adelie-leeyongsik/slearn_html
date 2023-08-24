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
          멘토 결석 신고
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
            학습 달성도에 따라 뱃지가 수여됩니다.
          </div>
          <p>달성 뱃지는 매월 갱신됩니다.</p>
          <div class="c-modals__title c-modals__title-sm">
            1. 출석일에 따른 성과 뱃지
          </div>
          <div class="c-form-check-group c-form-check-group--col3">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="elementarySchool"
                value="elementarySchool"
                v-model="school"
                checked
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="elementarySchool"
                >초등학교</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="middleSchool"
                value="middleSchool"
                v-model="school"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="middleSchool"
                >중학교</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="notCurriculum"
                value="notCurriculum"
                v-model="school"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="notCurriculum"
                >비교과</label
              >
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                네, 알겠어요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
