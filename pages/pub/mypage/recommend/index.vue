<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import VueDatePicker from "@vuepic/vue-datepicker";
import "v-calendar/dist/style.css";
import "@vuepic/vue-datepicker/dist/main.css";

import { ref } from "vue";
import addDays from "date-fns/addDays";
definePageMeta({
  layout: "mypage",
});

const highlightedDates = ref([
  addDays(new Date(), 2),
  addDays(new Date(), 3),
  addDays(new Date(), 4),
  addDays(new Date(), 5),
]);

onMounted(() => {
  let stDt = document.getElementsByName("startDatePicker");
  let enDt = document.getElementsByName("endDatePicker");

  if (!isEmpty(stDt)) {
    stDt[0].title = "시작날짜";
  }

  if (!isEmpty(enDt)) {
    enDt[0].title = "종료날짜";
  }
});
</script>
<script>
export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      date2: null,
    };
  },
};
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">강의 추천 내역</div>
            <div class="c-text-title-sub">
              <p>
                소중한 의견 감사 드립니다! 빠른검토 후 공유할 수 있도록
                하겠습니다 <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">강의 추천하기</button>
            </div>
          </div>
          <div class="mypage__contents-search">
            <!-- 230712 수정 - <div class="mypage__contents-search-sort">추가, 상태별 c-form-group 추가 -->
            <div class="mypage__contents-search-sort">
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
                <label for="status" class="c-form-label">상태별</label>
                <select
                  name=""
                  id="status"
                  class="c-form-control c-form-control-sm"
                >
                  <option value="">전체</option>
                </select>
              </div>
            </div>
            <!-- // 230712 수정 - <div class="mypage__contents-search-sort">추가, 상태별 c-form-group 추가 -->
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
                      <div>
                        <VueDatePicker
                          name="startDatePicker"
                          v-model="date"
                          locale="ko"
                          class="date"
                          :enable-time-picker="false"
                          auto-apply
                          :highlight="highlightedDates"
                          :clearable="false"
                          hide-input-icon
                          placeholder=""
                        />
                      </div>
                      <span>~</span>
                      <div>
                        <VueDatePicker
                          name="endDatePicker"
                          v-model="date2"
                          :label="`title!!!!!!!!`"
                          locale="ko"
                          class="date"
                          :enable-time-picker="false"
                          auto-apply
                          :highlight="highlightedDates"
                          :clearable="false"
                          hide-input-icon
                          placeholder=""
                        />
                      </div>
                    </div>
                    <!-- 230628 버튼 수정 -->
                    <div class="c-form-group--search-btn">
                      <!-- 230710 초기화 버튼 삭제 -->
                      <!-- 230710 초기화 버튼 삭제 -->
                      <button class="c-btn c-btn-primary">조회</button>
                    </div>
                    <!-- //230628 버튼 수정 -->
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="c-table__head">
              <p>총 999개</p>
            </div>
            <div class="c-table__wrap c-table__wrap-scroll">
              <!-- 230710 테이블 간격 조정, 강의유형 컬럼 삭제, 반려사유 컬럼 추가-->
              <table class="c-table c-table-center">
                <caption>
                  강의 추천 내역 리스트로 대분류, 중분류, 내용/경로, 등록일,
                  처리 상태, 반려 사유 를 볼 수 있습니다.
                </caption>
                <colgroup>
                  <col width="100" />
                  <col width="100" />
                  <col />
                  <col width="100" />
                  <col width="100" />
                  <col width="155" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">대분류</th>
                    <th scope="col">중분류</th>
                    <th scope="col">내용/경로</th>
                    <th scope="col">등록일</th>
                    <th scope="col">처리 상태</th>
                    <th scope="col">반려사유</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <!-- 웹접근성 링크 주소에 a 태그 추가 -->
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong>접수 완료</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong>검토중</strong></td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">반려</strong></td>
                    <td>
                      반려사유입니다<br />
                      세줄까지 영역<br />
                      잡아주세요
                    </td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong>접수 완료</strong></td>
                  </tr>
                  <tr>
                    <td>인문</td>
                    <td>언어/문학</td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          비밀번호를 분실했습니다. 빨리 찾고싶어요 알려주세요!
                        </a>
                      </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p>
                          <a href=""
                            >https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8</a
                          >
                        </p>
                      </div>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">승인 완료</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PubPagination />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-table__title .c-badge {
  margin-top: 0.7rem;
  p {
    font-size: 1.4rem;
    color: #535353;
  }
}
.c-table__head {
  @include mobile {
    margin-top: 4rem;
  }
}
</style>
