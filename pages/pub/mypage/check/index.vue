<script>
definePageMeta({
  layout: "mypage",
});
export default {
  name: "Calendar",
  data() {
    return {
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
    <div class="mypage-calendar">
      <div class="mypage-calendar__body">
        <div class="mypage-calendar__nav">
          <button
            v-on:click="onClickPrev(currentMonth)"
            class="mypage-calendar__nav-prev"
          >
            이전
          </button>
          <div class="mypage-calendar__nav-date">
            <p>{{ currentYear }}년</p>
            <p>{{ currentMonth }}월</p>
            <span>이번달</span>
          </div>
          <button
            v-on:click="onClickNext(currentMonth)"
            class="mypage-calendar__nav-next"
          >
            다음
          </button>
        </div>
        <div class="mypage-calendar__text">
          <div class="mypage-calendar__text-title">
            <img src="@img/ic-calendar01.svg" alt="" /> 이번 달에 벌
            <img src="@img/ic-calendar02.svg" alt="" /> 써<br />
            <span>1번</span> 이나
            <img src="@img/ic-calendar03.svg" alt="" />
            <img src="@img/ic-calendar04.svg" alt="" /><br class="c-mo" />
            함께했어요!
          </div>
          <p>
            이번 달에도 상쾌하게 첫걸음을<br class="c-mo" />
            내딛었어요! 꾸준히 함께해요!
          </p>
        </div>
        <table>
          <caption>
            출석체크 달력
          </caption>
          <thead>
            <tr>
              <th class="mypage-calendar__weeks">
                월<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                화<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                수<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                목<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                금<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                토<span class="c-pc c-tablet">요일</span>
              </th>
              <th class="mypage-calendar__weeks">
                일<span class="c-pc c-tablet">요일</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in currentCalendarMatrix" :key="index">
              <td
                v-for="(day, index2) in row"
                :key="index2"
                class="mypage-calendar__days"
              >
                <!-- td에 active 클래스 추가시 출석체크 마크 생김 -->
                <div>
                  <p>{{ day }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
