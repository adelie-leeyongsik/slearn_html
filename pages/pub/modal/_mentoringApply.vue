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
      <div class="c-modals__inner scroll">
        <div class="c-modals__head">
          멘토링 신청하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q1. 어디에서 멘토링을 하고 싶으신가요?
            </h3>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="online"
                  id="online01"
                  value="online01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="online01"
                  >온라인으로 하고싶어요</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="online"
                  id="online02"
                  value="online02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="online02"
                  >만나서 하고싶어요</label
                >
              </div>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q1-1. 어디에서 만나실수 있나요?
            </h3>
            <div class="c-form-check-group">
              <select name="" id="" class="c-form-control">
                <option value="">가능지역 1</option>
              </select>
              <select name="" id="" class="c-form-control mt-0">
                <option value="">일간 시간대</option>
              </select>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q2. 어떤 과목을 멘토링 받고 싶으신가요?
            </h3>
            <div class="c-form-check-group c-form-check-group--col3">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject01"
                  value="subject01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject01"
                  >국어</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject02"
                  value="subject02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject02"
                  >영어</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject03"
                  value="subject03"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject03"
                  >수학</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject04"
                  value="subject04"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject04"
                  >사회</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject05"
                  value="subject05"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject05"
                  >과학</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject06"
                  value="subject06"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject06"
                  >기타</label
                >
              </div>
            </div>
            <input
              type="text"
              class="c-form-control etc"
              placeholder="기타 내용을 입력해주세요."
            />
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q3. 멘토링은 언제가 편하세요?
            </h3>
            <div class="c-form-check-group">
              <select name="" id="" class="c-form-control">
                <option value="">주간 시간대</option>
              </select>
              <select name="" id="" class="c-form-control mt-0">
                <option value="">일간 시간대</option>
              </select>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q4. 교육 과정은 어느 과정을 듣고 싶으신가요??
            </h3>
            <div class="c-form-check-group c-form-check-group--col4">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="course"
                  id="course01"
                  value="course01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="course01"
                  >중학교</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="course"
                  id="course02"
                  value="course02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="course02"
                  >고등 1학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="course"
                  id="course03"
                  value="course03"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="course03"
                  >고등 2학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="course"
                  id="course04"
                  value="course04"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="course04"
                  >고등 3학년</label
                >
              </div>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q5. 학습하는데 어떤 점을 개선하고 싶으신가요?
            </h3>
            <div class="c-form-check-group c-form-check-group--col1">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="problem"
                  id="problem01"
                  value="problem01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="problem01"
                  >혼자 공부하기 어려워요</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="problem"
                  id="problem02"
                  value="problem02"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="problem02"
                  >문제를 잘 못풀어요</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="problem"
                  id="problem03"
                  value="problem03"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="problem03"
                  >무엇을 잘하는지 알고싶어요</label
                >
              </div>
            </div>
          </section>
          <!-- 230621 section 추가 -->
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              <!-- 230727 텍스트 수정 -->
              Q6. 상담가능한 연락처를 입력해주세요.
            </h3>
            <!-- 230727 input 수정-->
            <div class="c-input-group">
              <input
                type="text"
                class="c-form-control"
                title="상담받을 연락처 국번"
              />
              -
              <input
                type="text"
                class="c-form-control"
                title="상담받을 연락처 앞자리"
              />
              -
              <input
                type="text"
                class="c-form-control"
                title="상담받을 연락처 뒷자리"
              />
            </div>
          </section>
          <!-- // 230621 section 추가 -->
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
                신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-form-control.etc {
  margin-top: 0.8rem;
}
</style>
