<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-awards">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 수상 내역</div>
            <div class="c-text-title-sub">
              <p>
                <!-- 230718 텍스트 수정 -->
                제공되는 수상 내역은 멘토링을 독려하기 위해 제공되는 마크입니다.
                <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-search mypage__contents-search-awards">
            <div class="c-form-group">
              <label for="" class="c-form-label">연도</label>
              <!-- 웹접근성 title 추가 -->
              <select class="c-form-control c-form-control-sm" title="연도">
                <!--// 웹접근성 title 추가 -->
                <option>2023</option>
              </select>
              <!-- 230718 btn 클래스 변경 -->
              <button class="c-btn c-btn-primary">조회</button>
            </div>
          </div>
          <div class="mypage__contents-body">
            <ul class="mypage-awards__list">
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-green01.png" alt="그린 배지" />
                </div>
                <span>2022년1월</span>
                <p>그린 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-silver01.png" alt="실버 배지" />
                </div>
                <span>2022년1월</span>
                <p>실버 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-bronze01.png" alt="브론즈 배지" />
                </div>
                <span>2022년1월</span>
                <p>브론즈 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-gold01.png" alt="골드 배지" />
                </div>
                <span>2022년1월</span>
                <p>골드 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-dia01.png" alt="다이아 배지" />
                </div>
                <span>2022년1월</span>
                <p>다이아 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-mentor.png" alt="최우수멘토 배지" />
                </div>
                <span>2022년1월</span>
                <p>최우수멘토 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-mentor02.png" alt="명예멘토 배지" />
                </div>
                <span>2022년1월</span>
                <p>명예멘토 배지</p>
              </li>
              <li>
                <div class="mypage-awards__list-img">
                  <img src="@img/ic-badge-mentor03.png" alt="명예멘토 배지" />
                </div>
                <span>2022년1월</span>
                <p>명예멘토 배지</p>
              </li>
            </ul>

            <div class="c-notfound">
              <img
                src="@img/ch-table.svg"
                alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
              />
              <p>
                내 수상 내역이 없습니다.<br />
                학습을 열심히, 성실히 하면 많은 상이 기다릴 거예요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
