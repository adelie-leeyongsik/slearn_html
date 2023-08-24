<script setup>
import item from "../_item.vue";
import communityItem from "./_communityItem.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
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
      tabList: [
        "멘토링 관리",
        "내 수상 내역",
        "멘토 커뮤니티",
        "내 정산 내역",
        "수료한 교육",
        "이전 멘토링 내역",
      ],
      currentTab2: 0,
      tabList2: ["멘토링 일정", "멘티 추천 강의 관리", "멘티 학습량 설정"],
      currentTab3: 0,
      tabList3: ["멘토 교육방", "멘토 공유방", "멘토 공지사항"],

      // 커뮤니티
      OT: false,
      essential: false,
      select: false,
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
    switchSelect3($event) {
      this.selected = $event.target.value;
      this.currentTab3 = $event.target.value;
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
            <option
              v-for="(tab, index) in tabList"
              :key="index"
              @click.prevent="currentTab = index"
              :value="index"
            >
              {{ tab }}
            </option>
          </select>
        </nav>
        <nav class="c-mo" v-show="currentTab == 0">
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
        <nav class="c-mo" v-show="currentTab == 2">
          <select class="c-form-control" @change="switchSelect3($event)">
            <option
              v-for="(tabSub2, index3) in tabList3"
              :key="index3"
              :value="index3"
            >
              {{ tabSub2 }}
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
                  <!-- 완료되어 버튼이 없는경우 mypage__body--complete 추가 -->
                  <div class="mypage__body mypage__body--complete">
                    <!-- // 완료되어 버튼이 없는경우 mypage__body--complete 추가 -->
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          1주차 계획서
                          <div class="c-badge">완료</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu"></div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <!-- a 태그 안에 span 추가시 밑줄 -->
                      <a href="" class="mypage-mentor__foot-file"
                        ><span>1주차 보고서</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 미신청</p>
                      </div>
                      <!-- // a 태그 안에 span 추가시 밑줄 -->
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
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <span>늦잠을 잤습니다. 죄송합니다.</span>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type02"
                        >등록된 보고서가 없습니다.</a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          3주차 계획서
                          <div class="c-badge">진행중</div>
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn">출석</button>
                        <button class="c-btn c-btn-light">
                          멘토 결석 신고
                        </button>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a href="" class="mypage-mentor__foot-file"
                        ><span>3주차 보고서</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          4주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type03"
                        ><span>보고서 작성하기</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          5주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type03"
                        ><span>보고서 작성하기</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          6주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type03"
                        ><span>보고서 작성하기</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__body">
                    <div class="mypage-mentor__head">
                      <div class="mypage-mentor__head-info">
                        <div class="mypage-mentor__head-info-title">
                          7주차 계획서
                        </div>
                        <div class="mypage-mentor__head-info-date">
                          2023.01.15 12:00
                        </div>
                        <div class="mypage-mentor__head-info-location">
                          마포 최고 룸카페
                        </div>
                      </div>
                      <div class="mypage-mentor__head-menu">
                        <button class="c-btn c-btn-light">
                          일정/장소 변경 요청
                        </button>
                      </div>
                    </div>
                    <div
                      class="mypage-mentor__foot mypage-mentor__foot--type02"
                    >
                      <a
                        href=""
                        class="mypage-mentor__foot-file mypage-mentor__foot-file--type03"
                        ><span>보고서 작성하기</span></a
                      >
                      <div class="c-form-check c-form-check--type05">
                        <p>심화활동 신청</p>
                        <div class="c-form-check-group">
                          <input
                            type="checkbox"
                            class="c-form-check-input"
                            id="intensification01"
                          />
                          <label
                            class="c-form-check-label"
                            for="intensification01"
                          ></label>
                        </div>
                      </div>
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
                        멘티 박수정님
                      </div>
                      <p>3주차 진행중입니다.</p>
                    </div>
                    <div class="mypage-mentor__keyword">
                      <ul>
                        <li>오프라인</li>
                        <li>중등</li>
                        <li>국어</li>
                        <li>코치형</li>
                      </ul>
                    </div>
                    <div class="mypage-mentor__site">
                      <p>이용중 학습사이트</p>
                      <ul>
                        <li><a href="">온리원</a></li>
                        <li><a href="">밀크T 중동</a></li>
                        <li><a href="">에듀윌(자격증)</a></li>
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
                      <li><a href="">멘티 재매칭 신청하기</a></li>
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
          <div class="mypage-mentor__community">
            <div class="mypage-mentor__tab-menu-sub">
              <nav class="c-pc c-tablet">
                <a
                  href=""
                  v-for="(tabSub2, index3) in tabList3"
                  :key="index3"
                  :class="{ active: currentTab3 === index3 }"
                  @click.prevent="currentTab3 = index3"
                >
                  <span>{{ tabSub2 }}</span>
                </a>
              </nav>
            </div>
            <div
              v-show="currentTab3 == 0"
              class="mypage-mentor__tab-contents-sub"
            >
              <div class="mypage__body">
                <dl>
                  <dt @click="OT = !OT">
                    <div class="mypage-mentor__community-title">
                      OT 교육 <span>100</span>
                    </div>
                  </dt>
                  <dd v-show="OT == true">
                    <div class="mypage-mentor__community-contents">
                      <communityItem />
                      <PubPagination />
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="mypage__body">
                <dl>
                  <dt @click="essential = !essential">
                    <div class="mypage-mentor__community-title">
                      필수 교육 <span>100</span>
                    </div>
                  </dt>
                  <dd v-show="essential == true">
                    <div class="mypage-mentor__community-contents">
                      <communityItem />
                      <PubPagination />
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="mypage__body" :class="{ active: select === true }">
                <dl>
                  <dt @click="select = !select">
                    <div class="mypage-mentor__community-title">
                      선택 교육 <span>100</span>
                    </div>
                  </dt>
                  <dd v-show="select == true">
                    <div class="mypage-mentor__community-contents">
                      <communityItem />
                      <PubPagination />
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div
              v-show="currentTab3 == 1"
              class="mypage-mentor__tab-contents-sub"
            >
              <div class="mypage-mentor__community-share">
                <div class="mypage__body">
                  <div class="mypage__body-head">
                    <button class="c-btn c-btn-sm c-btn-darkgray">
                      신규 등록
                    </button>
                  </div>
                  <table class="mypage-mentor__community-table">
                    <caption>
                      멘토커뮤니티 멘토 공유방으로 내용, 댓글, 등록자, 등록일 을
                      볼 수 있습니다.
                    </caption>
                    <colgroup>
                      <col width="" />
                      <col width="100" />
                      <col width="100" />
                      <col width="140" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="mypage-mentor__community-table-title">
                          내용
                        </th>
                        <th class="mypage-mentor__community-table-reply">
                          댓글
                        </th>
                        <th class="mypage-mentor__community-table-name">
                          등록자
                        </th>
                        <th class="mypage-mentor__community-table-date">
                          등록일
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                      <tr>
                        <td class="mypage-mentor__community-table-title">
                          <p>
                            <a href=""
                              ><i class="ico ico-excel"></i>
                              멘토링_1주차_숙제.xlsx
                            </a>
                          </p>
                        </td>
                        <td class="mypage-mentor__community-table-reply">
                          <p><i class="ico ico-message"></i>999</p>
                        </td>
                        <td class="mypage-mentor__community-table-name">
                          홍길동
                        </td>
                        <td class="mypage-mentor__community-table-date">
                          2023.01.05
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <PubPagination />
                </div>
              </div>
            </div>
            <div
              v-show="currentTab3 == 2"
              class="mypage-mentor__tab-contents-sub"
            >
              <div class="board">
                <div class="board-list">
                  <table>
                    <caption>
                      멘토 커뮤니티 공지사항 리스트로 제목, 작성일자를 제공
                      합니다.
                    </caption>
                    <colgroup>
                      <col width="30" />
                      <col />
                      <col width="10%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <td class="board-list__order">
                          <i class="ico ico-pin">고정 아이콘</i>
                        </td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              <span>[행사모집]</span>
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄
                            </a>
                            <i class="ico ico-new">N</i>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">
                          <i class="ico ico-pin">고정 아이콘</i>
                        </td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              <span>[행사모집]</span>
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                            </a>
                            <i class="ico ico-new">N</i>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">
                          <i class="ico ico-pin">고정 아이콘</i>
                        </td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              <span>[투표]</span>
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="board-list__order">999</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                            </a>
                            <i class="ico ico-new">N</i>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">998</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              <span>[투표]</span>
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">997</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">996</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
                              2탄
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">995</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">994</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              <span>[투표]</span>
                              서울시와 함께하는 청소년 신나는 동행캠프 모집
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                      <tr>
                        <td class="board-list__order">993</td>
                        <td class="board-list__title">
                          <p>
                            <a href="">
                              서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                            </a>
                          </p>
                        </td>
                        <td class="board-list__date">2022.12.31</td>
                      </tr>
                    </tbody>
                  </table>
                  <PubPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="currentTab == 3" class="mypage-mentor__tab-contents">
          <div class="mypage-mentor__calculate">
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
                      <DatePicker
                        v-model="date"
                        :masks="{ title: 'YYYY년 M월' }"
                      >
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
                      <DatePicker
                        v-model="date2"
                        :masks="{ title: 'YYYY년 M월' }"
                      >
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
            <div class="mypage__body">
              <div class="mypage__box">
                <p>정산 총 합계 (2023.01.01~2023.02.01)</p>
                <strong>100,000,000원</strong>
              </div>
              <table class="mypage-mentor__calculate-table">
                <caption>
                  내 정산내역으로 지급일, 내용, (%)인센티브, 정산금액, 처리
                  상태를 볼 수 있습니다.
                </caption>
                <colgroup>
                  <col width="120" />
                  <col />
                  <col width="160" />
                  <col width="160" />
                  <col width="120" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="row" class="mypage-mentor__calculate-table-date">
                      지급일
                    </th>
                    <th
                      scope="row"
                      class="mypage-mentor__calculate-table-title"
                    >
                      내용
                    </th>
                    <th
                      scope="row"
                      class="mypage-mentor__calculate-table-incentive"
                    >
                      (%)인센티브
                    </th>
                    <th scope="row" class="mypage-mentor__calculate-table-sum">
                      정산 금액
                    </th>
                    <th
                      scope="row"
                      class="mypage-mentor__calculate-table-status"
                    >
                      처리 상태
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p class="c-text-danger">미정산</p>
                      <button class="mypage-mentor__calculate-table-btn">
                        사유보기
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p class="c-text-danger">미정산</p>
                      <button class="mypage-mentor__calculate-table-btn">
                        사유보기
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p class="c-text-danger">미정산</p>
                      <button class="mypage-mentor__calculate-table-btn">
                        사유보기
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="mypage-mentor__calculate-table-date">
                      2023.01.10
                    </td>
                    <td class="mypage-mentor__calculate-table-title">
                      박수정 1주차 멘토링
                    </td>
                    <td class="mypage-mentor__calculate-table-incentive">
                      (10%) <span>100,000원</span>
                    </td>
                    <td class="mypage-mentor__calculate-table-sum">
                      1,000,000
                    </td>
                    <td class="mypage-mentor__calculate-table-status">
                      <p>정산완료</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <PubPagination />
            </div>
          </div>
        </div>
        <div v-show="currentTab == 4" class="mypage-mentor__tab-contents">
          <div class="mypage-mentor__complete">
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
                      <DatePicker
                        v-model="date"
                        :masks="{ title: 'YYYY년 M월' }"
                      >
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
                      <DatePicker
                        v-model="date2"
                        :masks="{ title: 'YYYY년 M월' }"
                      >
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
            <div class="mypage-mentor__complete-contents">
              <div class="mypage-mentor__complete-contents-title">
                총 <span>999</span>개 수료하였습니다.
              </div>
              <div class="mypage__body">
                <table class="mypage-mentor__complete-table">
                  <caption>
                    수료한 교육 리스트로 교육,온/오프라인,내용,일자,수료증 을 볼
                    수 있습니다.
                  </caption>
                  <colgroup>
                    <col width="120" />
                    <col width="100" />
                    <col width="" />
                    <col width="120" />
                    <col width="120" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th
                        class="mypage-mentor__complete-table-category"
                        scope="row"
                      >
                        교육
                      </th>
                      <th
                        class="mypage-mentor__complete-table-online"
                        scope="row"
                      >
                        온/오프라인
                      </th>
                      <th
                        class="mypage-mentor__complete-table-title"
                        scope="row"
                      >
                        내용
                      </th>
                      <th
                        class="mypage-mentor__complete-table-date"
                        scope="row"
                      >
                        일자
                      </th>
                      <th
                        class="mypage-mentor__complete-table-certificates"
                        scope="row"
                      >
                        수료증
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        오프라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        오프라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="mypage-mentor__complete-table-category">
                        [필수 교육]
                      </td>
                      <td class="mypage-mentor__complete-table-online">
                        온라인
                      </td>
                      <td class="mypage-mentor__complete-table-title">
                        2023 멘토 교육 과정 01
                      </td>
                      <td class="mypage-mentor__complete-table-date">
                        2023.01.05
                      </td>
                      <td class="mypage-mentor__complete-table-certificates">
                        <button class="mypage-mentor__complete-table-btn">
                          수료증 보기
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <PubPagination />
              </div>
            </div>
          </div>
        </div>
        <div v-show="currentTab == 5" class="mypage-mentor__tab-contents">
          <div class="mypage-mentor__previous">
            <div
              class="mypage__body mypage__body--complete mypage__body--complete--type03"
            >
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
                <div class="mypage-mentor__head-menu">
                  <button class="c-btn c-btn c-btn-light">
                    멘토 활동 인증서 다운로드
                  </button>
                </div>
              </div>
              <div class="mypage-mentor__foot">
                <div class="mypage-mentor__foot-name">
                  멘티 박수정
                  <span
                    >제가 원하던 멘토링의 방향과 맞지 않습니다. 재매칭
                    신청합니다.</span
                  >
                </div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div
              class="mypage__body mypage__body--complete mypage__body--complete--type03"
            >
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
                <div class="mypage-mentor__foot-name">멘티 박수정</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div
              class="mypage__body mypage__body--complete mypage__body--complete--type03"
            >
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
                <div class="mypage-mentor__foot-name">멘티 박수정</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div
              class="mypage__body mypage__body--complete mypage__body--complete--type03"
            >
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
                <div class="mypage-mentor__foot-name">멘티 박수정</div>
                <a href="" class="mypage-mentor__foot-detail">상세보기</a>
              </div>
            </div>
            <div
              class="mypage__body mypage__body--complete mypage__body--complete--type03"
            >
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
                <div class="mypage-mentor__foot-name">멘티 박수정</div>
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
