<script setup>
import item from "../_item.vue";
definePageMeta({
  layout: "mypage",
});
</script>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      // 탭
      currentTab: 0,
      tabList: ["멘토링 관리", "내 수상 내역", "이전 멘토링 내역"],
      currentTab2: 0,
      tabList2: ["멘토링 일정", "멘토 추천 강의"],

      // 달력
      weekNames: [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일",
      ],
      rootYear: 1904,
      rootDayOfWeekIndex: 5, // 2000년 1월 1일은 토요일
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      currentDay: new Date().getDate(),
      currentMonthStartWeekIndex: null,
      currentCalendarMatrix: [],
      endOfDay: null,
      memoDatas: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    switchSelect($event) {
      this.selected = $event.target.value;
      this.currentTab = $event.target.value;
    },
    switchSelect2($event) {
      this.selected = $event.target.value;
      this.currentTab2 = $event.target.value;
    },

    init: function () {
      this.currentMonthStartWeekIndex = this.getStartWeek(
        this.currentYear,
        this.currentMonth
      );
      this.endOfDay = this.getEndOfDay(this.currentYear, this.currentMonth);
      this.initCalendar();
    },
    initCalendar: function () {
      this.currentCalendarMatrix = [];
      let day = 1;
      for (let i = 0; i < 6; i++) {
        let calendarRow = [];
        for (let j = 0; j < 7; j++) {
          if (i == 0 && j < this.currentMonthStartWeekIndex) {
            calendarRow.push("");
          } else if (day <= this.endOfDay) {
            calendarRow.push(day);
            day++;
          } else {
            calendarRow.push("");
          }
        }
        this.currentCalendarMatrix.push(calendarRow);
      }
    },
    getEndOfDay: function (year, month) {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
          break;
        case 2:
          if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return 29;
          } else {
            return 28;
          }
          break;
        default:
          console.log("unknown month " + month);
          return 0;
          break;
      }
    },
    getStartWeek: function (targetYear, targetMonth) {
      let year = this.rootYear;
      let month = 1;
      let sumOfDay = this.rootDayOfWeekIndex;
      while (true) {
        if (targetYear > year) {
          for (let i = 0; i < 12; i++) {
            sumOfDay += this.getEndOfDay(year, month + i);
          }
          year++;
        } else if (targetYear == year) {
          if (targetMonth > month) {
            sumOfDay += this.getEndOfDay(year, month);
            month++;
          } else if (targetMonth == month) {
            return sumOfDay % 7;
          }
        }
      }
    },
    onClickPrev: function (month) {
      month--;
      if (month <= 0) {
        this.currentMonth = 12;
        this.currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
      this.init();
    },
    onClickNext: function (month) {
      month++;
      if (month > 12) {
        this.currentMonth = 1;
        this.currentYear += 1;
      } else {
        this.currentMonth += 1;
      }
      this.init();
    },
    isToday: function (year, month, day) {
      let date = new Date();
      return (
        year == date.getFullYear() &&
        month == date.getMonth() + 1 &&
        day == date.getDate()
      );
    },
  },
};
</script>

<template>
  <div class="mypage">
    <div class="mypage-mentor">
      <div class="mypage-mentor__tab-menu">
        <!-- pc, tablet -->
        <nav class="c-pc c-tablet">
          <a
            href=""
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{ active: currentTab === index }"
            @click.prevent="currentTab = index"
          >
            <span>{{ tab }}</span>
          </a>
        </nav>
        <!-- // pc, tablet -->
        <!-- mobile -->
        <nav class="c-mo">
          <select class="c-form-control" @change="switchSelect($event)">
            <option v-for="(tab, index) in tabList" :key="index" :value="index">
              {{ tab }}
            </option>
          </select>
        </nav>
        <nav class="c-mo">
          <select class="c-form-control" @change="switchSelect2($event)">
            <option
              v-for="(tabSub, index2) in tabList2"
              :key="index2"
              :value="index2"
            >
              {{ tabSub }}
            </option>
          </select>
        </nav>
        <!-- // mobile -->
      </div>
      <div class="mypage-mentor__tab-contents-wrap">
        <div v-show="currentTab == 0" class="mypage-mentor__tab-contents">
          <div class="mypage-mentor__management">
            <div class="mypage-mentor__tab-menu-sub">
              <nav class="c-pc c-tablet">
                <a
                  href=""
                  v-for="(tabSub, index2) in tabList2"
                  :key="index2"
                  :class="{ active: currentTab2 === index2 }"
                  @click.prevent="currentTab2 = index2"
                >
                  <span>{{ tabSub }}</span>
                </a>
              </nav>
            </div>
            <div
              v-show="currentTab2 == 0"
              class="mypage-mentor__tab-contents-sub"
            >
              <div class="mypage__body-wrap">
                <div class="mypage__body-item">
                  <div class="mypage__body mypage__body--complete">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          1주차 계획서
                          <div class="c-badge">완료</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu"></div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a href="" class="mypage-mentor__foot-file"
                        ><span>1주차 보고서</span></a
                      >
                    </div>
                  </div>
                  <!-- 결석 사유 텍스트 입력시,   mypage__body--complete--type02 클래스 추가-->
                  <div
                    class="mypage__body mypage__body--complete mypage__body--complete--type02"
                  >
                    <!-- // 결석 사유 텍스트 입력시,   mypage__body--complete--type02 클래스 추가-->
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          2주차 계획서
                          <div class="c-badge c-badge-danger">결석</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <span>늦잠을 잤습니다. 죄송합니다.</span>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          2주차 계획서
                          <div class="c-badge c-badge-danger">결석</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn c-btn-light">
                          사유 입력
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body active">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          3주차 계획서
                          <div class="c-badge">진행중</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn">출석</button>
                        <button class="c-btn c-btn-light">
                          멘토 결석 신고
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a href="" class="mypage-mentor__foot-file"
                        ><span>3주차 보고서</span></a
                      >
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          4주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          5주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          6주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          16주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 ~ 2023.03.15
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          온라인(16주차)
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                    </div>
                  </div>
                  <div class="mypage__body mypage__body--complete">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          16주차 달성 하였습니다. <br />멘토링 만족도 조사를
                          확인하세요!
                        </div>
                      </div>
                    </div>
                    <div class="mypage-mentor__foot">
                      <a href="" class="mypage-mentor__foot-file"
                        ><span>만족도 조사 보고서</span></a
                      >
                    </div>
                  </div>
                </div>
                <div class="mypage__body-item">
                  <div class="mypage__body">
                    <div class="mypage-mentor__profile">
                      <div class="mypage-mentor__profile-img">
                        <img src="@img/@temp/2.jpg" alt="프로필 이미지" />
                      </div>
                      <div class="c-badge">매칭률 80%</div>
                      <div class="mypage-mentor__profile-name">
                        멘토 토마토마토님
                      </div>
                      <p>3주차 진행중입니다.</p>
                      <p class="c-text-danger">
                        멘토의 개인사정으로 멘토링이 불가능<br />
                        재매칭 신청 합니다.
                      </p>
                    </div>
                    <div class="mypage-mentor__keyword">
                      <ul>
                        <li>오프라인</li>
                        <li>중등</li>
                        <li>국어</li>
                        <li>코치형</li>
                      </ul>
                    </div>
                    <div class="mypage-mentor__history">
                      <p>수상내역</p>
                      <ul>
                        <li class="gold">포브스선정 2023 명예 멘토</li>
                        <li class="gold">2022 평화상</li>
                        <li class="silver">2022 최우수멘토링 팀</li>
                      </ul>
                    </div>
                    <div class="mypage-mentor__message">
                      <a href=""><i class="ico ico-message"></i>문자보내기</a>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <ul class="mypage-mentor__link">
                      <li><a href="">멘토 재매칭 신청하기</a></li>
                      <li><a href="">멘토링 취소 신청하기</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-show="currentTab2 == 1"
              class="mypage-mentor__tab-contents-sub"
            >
              <item />
              <PubPagination />
            </div>
          </div>
        </div>
        <div v-show="currentTab == 1" class="mypage-mentor__tab-contents">
          <div class="mypage__body">
            <div class="mypage-calendar__nav">
              <button
                v-on:click="onClickPrev(currentMonth)"
                class="mypage-calendar__nav-prev"
              >
                이전
              </button>
              <div class="mypage-calendar__nav-date">
                <p>{{ currentYear }}년</p>
              </div>
              <button
                v-on:click="onClickNext(currentYear)"
                class="mypage-calendar__nav-next"
              >
                다음
              </button>
            </div>
          </div>
        </div>
        <div v-show="currentTab == 2" class="mypage-mentor__tab-contents">
          <div class="mypage-mentor__previous">
            <div class="mypage__body mypage__body--complete">
              <div class="mypage-mentor__head">
                <div class="mypage-mentor__head-info">
                  <div class="mypage-mentor__head-info-title">
                    1주차 계획서
                    <div class="c-badge c-badge-danger">재매칭, 종료</div>
                  </div>
                  <div class="mypage-mentor__head-info-date">
                    2023.01.15 ~ 2023.03.15
                  </div>
                  <div class="mypage-mentor__head-info-weeks">
                    온라인(16주차)
                  </div>
                </div>
                <div class="mypage-mentor__head-menu"></div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">
                  멘토 토마토
                  <span
                    >제가 원하던 멘토링의 방향과 맞지 않습니다. 재매칭
                    신청합니다.</span
                  >
                </div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div class="mypage__body mypage__body--complete">
              <div class="mypage-mentor__head">
                <div class="mypage-mentor__head-info">
                  <div class="mypage-mentor__head-info-title">
                    1주차 계획서
                    <div class="c-badge">완료</div>
                  </div>
                  <div class="mypage-mentor__head-info-date">
                    2023.01.15 ~ 2023.03.15
                  </div>
                  <div class="mypage-mentor__head-info-weeks">
                    온라인(16주차)
                  </div>
                </div>
                <div class="mypage-mentor__head-menu"></div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">멘토 토마토</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div class="mypage__body mypage__body--complete">
              <div class="mypage-mentor__head">
                <div class="mypage-mentor__head-info">
                  <div class="mypage-mentor__head-info-title">
                    1주차 계획서
                    <div class="c-badge">완료</div>
                  </div>
                  <div class="mypage-mentor__head-info-date">
                    2023.01.15 ~ 2023.03.15
                  </div>
                  <div class="mypage-mentor__head-info-weeks">
                    온라인(16주차)
                  </div>
                </div>
                <div class="mypage-mentor__head-menu"></div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">멘토 토마토</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div class="mypage__body mypage__body--complete">
              <div class="mypage-mentor__head">
                <div class="mypage-mentor__head-info">
                  <div class="mypage-mentor__head-info-title">
                    1주차 계획서
                    <div class="c-badge">완료</div>
                  </div>
                  <div class="mypage-mentor__head-info-date">
                    2023.01.15 ~ 2023.03.15
                  </div>
                  <div class="mypage-mentor__head-info-weeks">
                    온라인(16주차)
                  </div>
                </div>
                <div class="mypage-mentor__head-menu"></div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">멘토 토마토</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div class="mypage__body mypage__body--complete">
              <div class="mypage-mentor__head">
                <div class="mypage-mentor__head-info">
                  <div class="mypage-mentor__head-info-title">
                    1주차 계획서
                    <div class="c-badge">완료</div>
                  </div>
                  <div class="mypage-mentor__head-info-date">
                    2023.01.15 ~ 2023.03.15
                  </div>
                  <div class="mypage-mentor__head-info-weeks">
                    온라인(16주차)
                  </div>
                </div>
                <div class="mypage-mentor__head-menu"></div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">멘토 토마토</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <PubPagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
