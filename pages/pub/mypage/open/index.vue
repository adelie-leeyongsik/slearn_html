<script setup>
import openItem from "./_openItem.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>

<script>
export default {
  data() {
    return {
      date: new Date(),
      date2: new Date(),
    };
  },
};
</script>
<template>
  <div class="mypage">
    <div class="mypage-list">
      <div class="mypage__head">
        <form action="">
          <fieldset>
            <legend>
              <div class="c-form-label">기간별 조회</div>
            </legend>
            <div class="c-form-group c-form-group--search">
              <div
                class="c-form-check-group c-form-check-group--col4 c-form-check-group-month"
              >
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="searchMonth"
                    id="searchMonth01"
                    checked
                    title="1개월"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="searchMonth01"
                    >1개월</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="searchMonth"
                    id="searchMonth02"
                    title="3개월"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="searchMonth02"
                    >3개월</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="searchMonth"
                    id="searchMonth03"
                    title="6개월"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="searchMonth03"
                    >6개월</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="searchMonth"
                    id="searchMonth04"
                    title="1년"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="searchMonth04"
                    >1년</label
                  >
                </div>
              </div>
              <div class="c-input-group c-input-group--calendar">
                <DatePicker v-model="date">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input
                      class="c-input-calendar"
                      :value="inputValue"
                      readonly
                      @click="togglePopover()"
                      title="기간별 조회 시작"
                    />
                  </template>
                </DatePicker>
                <span>~</span>
                <DatePicker v-model="date2">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input
                      class="c-input-calendar"
                      :value="inputValue"
                      readonly
                      @click="togglePopover()"
                      title="기간별 조회 끝"
                    />
                  </template>
                </DatePicker>
              </div>
              <button class="c-btn">조회</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="mypage-list__contents">
        <!--  230206 mypage-list__title 이동 -->
        <div class="mypage-list__title">
          <p>총 <span>999</span>개의 강의를 시청했어요</p>
        </div>
        <!-- // 230206 mypage-list__title 이동 -->
        <openItem />
        <PubPagination />
      </div>
      <div class="mypage-list__title">
        <p>총 <span>0</span>개의 강의를 시청했어요</p>
      </div>
      <div class="mypage-list__contents">
        <div class="mypage-list__contents-nodate">
          <img src="@img/ic-not-found.svg" alt="시청한 강의가 없습니다." />
          <p>
            시청한 강의가 없습니다.<br />오픈가의를 시청하고 교양을 쌓아봐요!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
