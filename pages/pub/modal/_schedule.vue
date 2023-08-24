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
          일정 / 장소 변경 요청<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__box">
            <dl>
              <dt>멘토</dt>
              <dd>토마토마토</dd>
            </dl>
            <dl>
              <dt>멘티</dt>
              <dd>박수정</dd>
            </dl>
            <dl>
              <dt>멘토링 예정일</dt>
              <dd>2023.1.15 12:00</dd>
            </dl>
            <dl>
              <dt>멘토링 주차</dt>
              <dd>3주차</dd>
            </dl>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">변경 요청내용</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="변경 요청일 / 장소 변경 요청 내용을 작성해주세요"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="changeCheck01" class="c-form-label"
              >지도 가능 학년</label
            >
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="changeCheck"
                  id="changeCheck01"
                  checked
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="changeCheck01"
                  >변경하기</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="changeCheck"
                  id="changeCheck02"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="changeCheck02"
                  >변경하지않기</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">변경 요청 일자</label>
            <div class="c-input-group c-input-group--type03">
              <DatePicker v-model="date">
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    class="c-input-calendar"
                    :value="inputValue"
                    readonly
                    @click="togglePopover()"
                    title="변경 요청 날짜"
                  />
                </template>
              </DatePicker>
              <span>~</span>
              <DatePicker v-model="date" mode="time" :timezone="timezone">
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    class="c-input-time"
                    :value="inputValue"
                    readonly
                    @click="togglePopover()"
                    title="변경 요청 시간"
                  />
                </template>
              </DatePicker>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                요청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
