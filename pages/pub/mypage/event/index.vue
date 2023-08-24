<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eventItem from "./_eventItem.vue";
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
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-event">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 이벤트 관리</div>
            <div class="c-text-title-sub">
              <p>
                내가 응모한 이벤트를 확인하세요. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">상태별</label>
              <select
                name=""
                id="status"
                class="c-form-control c-form-control-sm"
              >
                <option value="">전체</option>
              </select>
            </div>
            <div class="c-form-group">
              <form action="">
                <fieldset>
                  <legend>
                    <div class="c-form-label">
                      기간별
                      <!-- 230630 버튼 추가 -->
                      <button class="c-btn c-btn-sm c-btn-reset">
                        <i class="ico ico-reset"><!--초기화--></i>
                      </button>
                      <!--// 230630 버튼 추가 -->
                    </div>
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
                    <button class="c-btn c-btn-blue">조회</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__contents-head--sm">총 999개</div>
            <eventItem />
            <PubPagination />
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__contents-head--sm">총 999개</div>
            <div class="c-notfound">
              <img
                src="@img/ch-table.svg"
                alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
              />
              <p>
                아직 참여한 이벤트가 없습니다. <br />
                다양한 이벤트에 참여해보세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
