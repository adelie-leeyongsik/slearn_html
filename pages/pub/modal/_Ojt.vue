<script setup>
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
</script>

<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      date: new Date(),
      date2: new Date(),
    };
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          OJT 강의 계획서<button
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
              <dt>신청 과목</dt>
              <dd>박수정</dd>
            </dl>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">멘티 학습 목표</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="c-form-group">
            <label for="title" class="c-form-label">학생 진단</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="c-modals__ojt">
            <div class="c-modals__ojt-item">
              <div class="c-modals__title c-modals__title-sm">
                멘티와 강의 일정에 대해 이야기 해봅시다.
              </div>
              <div
                class="c-modals__title c-modals__title-sm c-modals__title-line"
              >
                2회차
              </div>
              <div class="c-form-group">
                <div class="c-form-label">멘토링 일시</div>
                <div class="c-input-group c-input-group--time">
                  <DatePicker v-model="date">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                        class="c-input-calendar"
                        :value="inputValue"
                        @click="togglePopover()"
                        title="기간별 조회 시작"
                      />
                    </template>
                  </DatePicker>
                  <input type="text" class="c-form-control" />
                </div>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">커리큘럼</label>
                <textarea class="c-form-control"></textarea>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">멘토링 구성</label>
                <textarea class="c-form-control"></textarea>
              </div>
            </div>
            <div class="c-modals__ojt-item">
              <div
                class="c-modals__title c-modals__title-sm c-modals__title-line"
              >
                3회차
              </div>
              <div class="c-form-group">
                <div class="c-form-label">멘토링 일시</div>
                <div class="c-input-group c-input-group--time">
                  <DatePicker v-model="date">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                        class="c-input-calendar"
                        :value="inputValue"
                        @click="togglePopover()"
                        title="기간별 조회 시작"
                      />
                    </template>
                  </DatePicker>
                  <input type="text" class="c-form-control" />
                </div>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">커리큘럼</label>
                <textarea class="c-form-control"></textarea>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">멘토링 구성</label>
                <textarea class="c-form-control"></textarea>
              </div>
            </div>
            <div class="c-modals__ojt-item">
              <div
                class="c-modals__title c-modals__title-sm c-modals__title-line"
              >
                4회차
              </div>
              <div class="c-form-group">
                <div class="c-form-label">멘토링 일시</div>
                <div class="c-input-group c-input-group--time">
                  <DatePicker v-model="date">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                        class="c-input-calendar"
                        :value="inputValue"
                        @click="togglePopover()"
                        title="기간별 조회 시작"
                      />
                    </template>
                  </DatePicker>
                  <input type="text" class="c-form-control" />
                </div>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">커리큘럼</label>
                <textarea class="c-form-control"></textarea>
              </div>
              <div class="c-form-group">
                <label for="" class="c-form-label">멘토링 구성</label>
                <textarea class="c-form-control"></textarea>
              </div>
            </div>
          </div>

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
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
textarea.c-form-control {
  height: 12rem;
}
</style>
