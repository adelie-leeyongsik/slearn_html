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
      currentTab: 0,
      tabList: ["활동비 정산내역", "교육비 정산 내역"],
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-calculate">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 정산 내역</div>
            <div class="c-text-title-sub">
              <p>
                <!-- 230621 텍스트 수정 -->
                정산 일시와 실제 입금 일시의 차이가 발생할 수 있습니다.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!<br
                  class="c-mo"
                />
                <!-- // 230621 텍스트 수정 -->
              </p>
            </div>
          </div>
          <div class="mypage__contents-search mypage__contents-search-inline">
            <div class="c-form-group">
              <!-- 230621 연도 -> 조회조건 월 -> 날짜 수정 -->
              <label for="year" class="c-form-label">조회조건</label>
              <select class="c-form-control c-form-control-sm" id="year">
                <option value="">2023</option>
              </select>
            </div>
            <div class="c-form-group">
              <label for="month" class="c-form-label">날짜</label>
              <div class="c-input-group c-input-group--calendar">
                <DatePicker v-model="date" :masks="{ title: 'YYYY년 M월' }">
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
              </div>
            </div>
            <!-- 230621 연도 -> 조회조건 월 -> 날짜 수정 -->
            <button class="c-btn c-btn-blue">조회</button>
          </div>
          <div class="mypage__contents-body">
            <div class="c-tab-nav">
              <ul>
                <li
                  v-for="(tab, index) in tabList"
                  :key="index"
                  :class="{ active: currentTab === index }"
                >
                  <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
                </li>
              </ul>
            </div>
            <div class="c-tab-contents__wrap">
              <div v-show="currentTab == 0" class="c-tab-contents">
                <div class="mypage-calculate__title">
                  <span>1월 정산 총 합계</span>
                  <p>100,000,000 원</p>
                </div>
                <div class="mypage__table-wrap scroll">
                  <table class="mypage__table mypage__table--type02">
                    <caption>
                      활동비 정산 내역으로, 멘티명(회차), 멘토링 날짜, 보고서
                      제출일, 활동비(기본시급), 준비수당(시급 30%), 장기활동,
                      가산금, 특별수당, 정산일(예정일)을 알 수 있습니다.
                    </caption>
                    <colgroup>
                      <col width="150" />
                      <col width="120" />
                      <col width="150" />
                      <col width="140" />
                      <col width="100" />
                      <col width="140" />
                      <col width="94" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">멘티명(회차)</th>
                        <!-- 웹접근성 scope 추가 -->
                        <th scope="col" class="mypage__table-2row">
                          <p><span>멘토링 날짜</span></p>
                          <p><span>보고서 제출일</span></p>
                        </th>
                        <!-- //웹접근성 scope 추가 -->
                        <th scope="col">활동비<br />(기본시급)</th>
                        <th scope="col">준비수당<br />(시급 30%)</th>
                        <th scope="col">장기활동 가산금</th>
                        <th scope="col">특별수당</th>
                        <th scope="col">정산일<br />(예정일)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>가초딩 (5회차)</td>
                        <td class="mypage__table-2row">
                          <p><span>2023.01.10 18:00</span></p>
                          <p><span>2023.01.01 18:00</span></p>
                        </td>
                        <td>100,000,000원</td>
                        <td>100,000,000원</td>
                        <td>10%</td>
                        <td>고학년지도 20%</td>
                        <td>2023.01.10</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--  봉사형 - 활동 내역 테이블 -->
                  <!-- temp --><br /><br />
                  <table class="mypage__table mypage__table--type02">
                    <caption>
                      활동 내역으로 멘토링 날짜, 보고서 제출일, 봉사시간, 정산일
                      (예정일) 을 볼 수 있습니다.
                    </caption>
                    <colgroup>
                      <col width="224" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">멘토링 날짜</th>
                        <th scope="col">보고서 제출일</th>
                        <th scope="col">봉사시간</th>
                        <th scope="col">정산일 (예정일)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2022.11.01 18:00</td>
                        <td>2022.11.01 18:00</td>
                        <td>3시간</td>
                        <td>2022.11.01</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- // 봉사형 - 활동 내역 테이블 -->
                </div>
                <PubPagination />
              </div>
              <div v-show="currentTab == 1" class="c-tab-contents">
                <div class="mypage-calculate__title">
                  <span>1월 정산 총 합계</span>
                  <p>27 시간</p>
                </div>
                <div class="mypage__table-wrap scroll">
                  <table class="mypage__table mypage__table--type02">
                    <caption>
                      교육비 정산 내역으로 교육 분류, 멘토링 날짜, 교육 형태,
                      교육 날짜, 출석 인정, 교육비, 정산일 를 볼 수 있습니다.
                    </caption>
                    <colgroup>
                      <col width="120" />
                      <col width="180" />
                      <col width="90" />
                      <col width="160" />
                      <col width="70" />
                      <col width="160" />
                      <col width="114" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">교육 분류</th>
                        <th scope="col">교육명</th>
                        <th scope="col">교육 형태</th>
                        <th scope="col">교육 날짜</th>
                        <th scope="col">출석 인정</th>
                        <th scope="col">교육비</th>
                        <th scope="col">정산일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- 봉사형 - 교육비정산내역 테이블 -->
                  <br /><br /><!-- temp -->
                  <table class="mypage__table mypage__table--type02">
                    <caption>
                      교육비 정산 내역으로 교육 분류, 멘토링 날짜, 교육 형태,
                      교육 날짜, 출석 인정, 교육비, 정산일 을 볼 수 있습니다.
                    </caption>
                    <colgroup>
                      <col width="120" />
                      <col width="120" />
                      <col width="120" />
                      <col width="160" />
                      <col width="100" />
                      <col width="160" />
                      <col width="114" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">교육 분류</th>
                        <th scope="col">멘토링 날짜</th>
                        <th scope="col">교육 형태</th>
                        <th scope="col">교육 날짜</th>
                        <th scope="col">출석 인정</th>
                        <th scope="col">교육비</th>
                        <th scope="col">정산일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                      <tr>
                        <td>OT교육</td>
                        <td>교육명</td>
                        <td>온라인</td>
                        <td>2022.11.01 18:00</td>
                        <td>Y</td>
                        <td>100,000,000원</td>
                        <td>2023.01.10</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- // 봉사형 - 교육비정산내역 테이블 -->
                </div>
                <PubPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
