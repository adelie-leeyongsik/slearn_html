<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
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
    <div class="mypage-coupon">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 쿠폰 관리</div>
            <div class="c-text-title-sub">
              <p>
                서울런에서 제공하는 쿠폰 사용방법을<br class="c-mo" />
                자세히 알아보고 혜택을 누려보세요!
                <br />
                도움이 필요하실 땐 서울런 고객센터<br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">
                메뉴얼 다운로드
              </button>
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
            <div class="mypage-coupon__list">
              <div class="mypage-coupon__list-item">
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="c-text-caution c-text-caution--type02">
                    초등학습사이트와 윌라에서는 쿠폰을 사용하실 수 없습니다.
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">
                  <i class="ico ico-copy">쿠폰번호 복사</i>
                  쿠폰번호<br class="c-pc c-tablet" />복사
                </a>
              </div>
              <div class="mypage-coupon__list-item">
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">
                  <i class="ico ico-copy">쿠폰번호 복사</i>
                  쿠폰번호<br class="c-pc c-tablet" />복사
                </a>
              </div>
              <div
                class="mypage-coupon__list-item mypage-coupon__list-item--end"
              >
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="c-text-caution c-text-caution--type02">
                    초등학습사이트와 윌라에서는 쿠폰을 사용하실 수 없습니다.
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">
                  <i class="ico ico-copy">쿠폰번호 복사</i>
                  쿠폰번호<br class="c-pc c-tablet" />복사
                </a>
              </div>
              <div
                class="mypage-coupon__list-item mypage-coupon__list-item--end"
              >
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">미사용</a>
              </div>
              <div
                class="mypage-coupon__list-item mypage-coupon__list-item--end"
              >
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">
                  사용완료 <br />
                  <span>2023.03.10</span>
                </a>
              </div>
              <div
                class="mypage-coupon__list-item mypage-coupon__list-item--end"
              >
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">상반기 정기 쿠폰</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 : <span>SI000212</span>
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    2023.02.15~2023.02.30
                  </div>
                </div>
                <a href="" class="mypage-coupon__list-item-copy">
                  사용완료 <br />
                  <span>2023.03.10</span>
                  <span>(메가스터디)</span>
                </a>
              </div>
            </div>
            <PubPagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
