<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import addDays from "date-fns/addDays";
definePageMeta({
  layout: "mypage",
});

const date = ref(new Date());

const highlightedDates = ref([
  addDays(new Date(), 2),
  addDays(new Date(), 3),
  addDays(new Date(), 4),
  addDays(new Date(), 5),
]);
</script>

<script>
import { ref } from "vue";
// const attributes = ref([
//   {
//     highlight: true,
//     dates: [
//       new Date(2023, 6, 1),
//       new Date(2023, 6, 2),
//       new Date(2023, 6, 3),
//       new Date(2023, 6, 4),
//       new Date(2023, 6, 5),
//       new Date(2023, 6, 6),
//       new Date(2023, 6, 7),
//       new Date(2023, 6, 8),
//       new Date(2023, 6, 9),
//       new Date(2023, 6, 10),
//       new Date(2023, 6, 12),
//       new Date(2023, 6, 15),
//       new Date(2023, 6, 16),
//       new Date(2023, 6, 18),
//     ],
//   },
// ]);
// export default {
//   data() {
//     return {
//       currentTab: 0,
//       tabList: ["학습 참여도", "학습 열정도", "학습 지속도"],
//     };
//   },
// };
export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      date2: null,
      currentTab: 0,
      tabList: ["학습 참여도", "학습 열정도", "학습 지속도"],
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-body">
            <div class="mypage__report">
              <div class="mypage__report-head">
                <div class="mypage__report-title--lg">학습 대시보드</div>
                <dl>
                  <dt class="mypage__report-head--title">
                    <div class="c-text-title-sub">
                      김서울님<br class="c-pc" /><br class="c-tablet" />
                      만나서 반가워요.
                    </div>
                    <p>
                      오늘 해야 할 내용을 살펴보고<br class="c-mo" />
                      나의 학습 현황을 확인해 보세요!
                    </p>
                  </dt>
                  <dd class="mypage__report-head--info">
                    <ul class="mypage__report-my">
                      <li>
                        <a href="#;">
                          <i class="ico ico-coupon"></i>
                          <p>사용가능 쿠폰</p>
                          <strong>3</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#;">
                          <i class="ico ico-event"></i>
                          <p>참여가능 이벤트</p>
                          <strong>8</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#;">
                          <i class="ico ico-alarm"></i>
                          <p>미확인 알림</p>
                          <strong>16</strong>
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="mypage__report-box">
                <dl class="mypage__report-site">
                  <dt>
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--day">
                      <strong>2023.06.29</strong>
                    </div>
                    <a href="#;" class="mypage__report-link">
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dd>
                    <div class="mypage__report-title--sm">나의 학습사이트</div>
                    <ul class="mypage__report-site--logo">
                      <li>
                        <p>
                          <img src="@img/logo-report-mega.png" alt="mega" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img
                            src="@img/logo-report-eduwill.png"
                            alt="eduwill"
                          />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img src="@img/logo-report-mbest.png" alt="mbest" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                    </ul>
                    <!-- 23.07.25 데이터 없을시 -->
                    <PubNodata
                      :nodata="'등록된 사이트가 없습니다.'"
                    ></PubNodata>
                    <!--// 23.07.25 데이터 없을시 -->
                    <p>
                      * 학습사이트를 변경하고 싶으시면
                      <strong class="c-text-primary">D-133</strong>
                      후 가능해요.
                      <a href="#;" class="mypage__report-link">
                        미리보기
                        <i class="ico ico-arrow">더보기</i>
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
              <!-- 23.07.25 수정 -->
              <div class="mypage__report-box">
                <dl class="mypage__report-site">
                  <dt>
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--text">
                      <p class="c-text-center">
                        멘토링 시작
                        <strong class="c-text-primary">준비중</strong>
                        이예요.<br />잠시만 기다려주세요~
                      </p>
                    </div>
                    <a href="#;" class="mypage__report-link">
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dd>
                    <div class="mypage__report-title--sm">나의 학습사이트</div>
                    <ul class="mypage__report-site--logo">
                      <li>
                        <p>
                          <img src="@img/logo-report-mega.png" alt="mega" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img
                            src="@img/logo-report-eduwill.png"
                            alt="eduwill"
                          />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img src="@img/logo-report-mbest.png" alt="mbest" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                    </ul>
                    <!-- 23.07.25 데이터 없을시 -->
                    <PubNodata
                      :nodata="'등록된 사이트가 없습니다.'"
                    ></PubNodata>
                    <!--// 23.07.25 데이터 없을시 -->
                    <p>
                      * 학습사이트를 변경하고 싶으시면
                      <strong class="c-text-primary">D-133</strong>
                      후 가능해요.
                      <a href="#;" class="mypage__report-link">
                        미리보기
                        <i class="ico ico-arrow">더보기</i>
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="mypage__report-box">
                <dl class="mypage__report-site">
                  <dt>
                    <div class="mypage__report-title--sm">
                      다음 멘토링 일정
                      <i class="ico ico-new">N</i>
                    </div>
                    <div class="mypage__report-site--text">
                      <p class="c-text-center">
                        <strong class="c-text-primary">멘토링 신청</strong>
                        전이시네요.<br />
                        멘토링을 신청해 보시는건 어떨까요?
                      </p>
                    </div>
                    <a href="#;" class="mypage__report-link">
                      멘토링관리 바로가기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dt>
                  <dd>
                    <div class="mypage__report-title--sm">나의 학습사이트</div>
                    <ul class="mypage__report-site--logo">
                      <li>
                        <p>
                          <img src="@img/logo-report-mega.png" alt="mega" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img
                            src="@img/logo-report-eduwill.png"
                            alt="eduwill"
                          />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                      <li>
                        <p>
                          <img src="@img/logo-report-mbest.png" alt="mbest" />
                        </p>
                        <a href="#;" class="mypage__report-link">
                          바로가기
                          <i class="ico ico-arrow">더보기</i>
                        </a>
                      </li>
                    </ul>
                    <!-- 23.07.25 데이터 없을시 -->
                    <PubNodata
                      :nodata="'등록된 사이트가 없습니다.'"
                    ></PubNodata>
                    <!--// 23.07.25 데이터 없을시 -->
                    <p>
                      * 학습사이트를 변경하고 싶으시면
                      <strong class="c-text-primary">D-133</strong>
                      후 가능해요.
                      <a href="#;" class="mypage__report-link">
                        미리보기
                        <i class="ico ico-arrow">더보기</i>
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
              <!--// 23.07.25 수정 -->
              <div class="mypage__report-calendar--title">
                <button class="c-btn c-btn--prev">
                  <i class="ico ico-prev">이전</i>
                </button>
                <div class="c-text-title-lg">12월 학습 분석</div>
                <button class="c-btn c-btn--next">
                  <i class="ico ico-next">다음</i>
                </button>
              </div>
              <div class="mypage__report-box">
                <div class="mypage__report-banner">
                  <div class="mypage__report-banner--img">
                    <img src="@img/pic-report-ai.png" alt="학습 분석 이미지" />
                  </div>
                  <div class="mypage__report-banner--cont">
                    <p>
                      한 번에 많은 학습을 하면 피로감과 부담감을 느낄 수 있으니
                      조금 더 규칙적인 학습 습관을 만들면 어떨까요?
                      <br class="c-mo" />
                      즐거운 학습이 될 수 있을 것 같아요.
                    </p>
                  </div>
                </div>
                <div class="mypage__report-calendar">
                  <div class="c-card--inline c-card--inline-col3">
                    <div class="c-card bg1">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">서울런과 이달에는</div>
                        <div class="c-text-title-lg">
                          <sapn class="c-text-primary">15</sapn> 일 만났어요.
                        </div>
                      </div>
                      <div class="c-calendar">
                        <DatePicker
                          :attributes="attributes"
                          :disabled-dates="{}"
                          color="bg"
                          transparent
                          borderless
                          expanded
                        ></DatePicker>
                      </div>
                    </div>
                    <div class="c-card bg2">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">메가스터디에서</div>
                        <div class="c-text-title-lg">이만큼 공부했어요.</div>
                        <p>(이전달 학습 데이터 기준)</p>
                      </div>
                      <div class="mypage__report-calendar--body">
                        <div class="c-badge c-badge-lg c-badge-blue">
                          출석횟수
                        </div>
                        <p><strong>142</strong>회</p>
                        <div class="c-badge c-badge-lg c-badge-blue">
                          총 학습시간
                        </div>
                        <p><strong>1,023</strong>분</p>
                        <div class="c-badge c-badge-lg c-badge-blue">
                          수행률
                        </div>
                        <p><strong>72</strong>%</p>
                      </div>
                    </div>
                    <div class="c-card bg3">
                      <div class="mypage__report-calendar--haed">
                        <div class="c-text-title-sub">학습 달성도에 따라</div>
                        <div class="c-text-title-lg">이만큼 모았어요.</div>
                        <p>(이전달 학습 데이터 기준)</p>
                      </div>
                      <div class="mypage__report-calendar--body">
                        <div class="c-badge c-badge-lg c-badge-green">
                          출석뱃지
                        </div>
                        <ul class="mypage__report-badge">
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <!-- 230725 alt="이미지" 모두 수정 -->
                              <img
                                src="@img/ic-badge-stamp-round1.svg"
                                alt="출석 시작"
                              />
                            </div>
                            <span>시작</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                src="@img/ic-badge-stamp-round2.svg"
                                alt="출석 10회"
                              />
                            </div>
                            <span>10회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                src="@img/ic-badge-stamp-round3.svg"
                                alt="출석 20회"
                              />
                            </div>
                            <span>15회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                src="@img/ic-badge-stamp-round4.svg"
                                alt="출석 20회"
                              />
                            </div>
                            <span>20회</span>
                          </li>
                          <li>
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
                              <img
                                src="@img/ic-badge-stamp-round5.svg"
                                alt="출석 25회"
                              />
                            </div>
                            <span>25회</span>
                          </li>
                        </ul>
                        <div class="c-badge c-badge-lg c-badge-green">
                          진도율뱃지
                        </div>
                        <!-- 230727  <div class="mypage__report-badge"> 삭제-->
                        <ul class="mypage__report-badge">
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp1.svg"
                                alt="진도뱃지 0 ~ 10%"
                              />
                            </div>
                            <span>0~10%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp2.svg"
                                alt="진도뱃지 10% ~ 20%"
                              />
                            </div>
                            <span>~20%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp3.svg"
                                alt="진도뱃지 20% ~ 30%"
                              />
                            </div>
                            <span>~30%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp4.svg"
                                alt="진도뱃지 30% ~ 60%"
                              />
                            </div>
                            <span>~60%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp5.svg"
                                alt="진도뱃지 60% ~ 90%"
                              />
                            </div>
                            <span>~90%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mypage__report-info">
                  <div class="mypage__report-info--head">
                    <dl class="c-flex">
                      <dt>
                        <img src="@img/ic-info-title.svg" alt="이미지" />
                      </dt>
                      <dd>
                        <div class="mypage__report-info--title">
                          2023 연간 학습량을 볼까요?
                        </div>
                        <p>(1월 1일 ~ 이전달까지의 누적 데이터 기준)</p>
                      </dd>
                    </dl>
                  </div>
                  <div class="mypage__report-info--body">
                    <ul class="c-flex">
                      <li>
                        <span>총 출석횟수</span>
                        <span class="c-text-black"><strong>329</strong>회</span>
                      </li>
                      <li>
                        <span>총 학습시간</span>
                        <span class="c-text-black">
                          <strong>2,135</strong>분
                        </span>
                      </li>
                      <li>
                        <span>평균 수행률</span>
                        <span class="c-text-black"><strong>85</strong>%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub c-flex">
                    <i class="ico ico-pencil"></i>
                    나의 학습 현황이에요
                  </div>
                  <span>
                    이자료는 서울런회원들의 학습이력기반으로 작성되었습니다.
                    (전월기준)
                  </span>
                </div>
                <div class="mypage__report-rank">
                  <div class="mypage__report-tab c-flex">
                    <div class="c-tab-nav">
                      <!-- 23.07.25 수정 -->
                      <ul>
                        <li
                          v-for="(tab, index) in tabList"
                          :key="index"
                          :class="{ active: currentTab === index }"
                        >
                          <a href="#" @click.prevent="currentTab = index">
                            <strong>{{ tab }}</strong>
                            <p :class="{ active: currentTab === 0 }">
                              월별 학습사이트 로그인 횟수<br />
                              (1일 최대 1회)
                            </p>
                            <p :class="{ active: currentTab === 1 }">
                              월별 총 학습시간
                            </p>
                            <p :class="{ active: currentTab === 2 }">
                              월별 평균진도율<br />
                              (0% 진도율 강좌 제외)
                            </p>
                          </a>
                          <div class="c-mo c-chart-img">
                            <p>
                              <img
                                src="@img/pic-chart-img01.png"
                                alt="이미지"
                              />
                            </p>
                          </div>
                        </li>
                      </ul>
                      <!--// 23.07.25 수정 -->
                    </div>
                    <div class="c-tab-contents__wrap">
                      <div v-show="currentTab == 0" class="c-tab-contents">
                        <p>
                          <img src="@img/pic-chart-img01.png" alt="이미지" />
                        </p>
                      </div>
                      <div v-show="currentTab == 1" class="c-tab-contents">
                        <p>
                          <img src="@img/pic-chart-img01.png" alt="이미지" />
                        </p>
                      </div>
                      <div v-show="currentTab == 2" class="c-tab-contents">
                        <p>
                          <img src="@img/pic-chart-img01.png" alt="이미지" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mypage__report-rank--wrap">
                    <div class="mypage__report-rank--title">
                      <div class="c-card--inline c-card--inline-col3">
                        <div class="c-card">
                          <div class="c-text-title-sm">중학생중에</div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">1269</span>
                            등 상위
                            <span class="c-text-blue">19%</span>에요
                          </div>
                        </div>
                        <div class="c-card">
                          <div class="c-text-title-sm">메가스터디에서</div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">1435</span>
                            등 상위
                            <span class="c-text-blue">32%</span>에요
                          </div>
                        </div>
                        <div class="c-card">
                          <div class="c-text-title-sm">같은 나이에서</div>
                          <div class="c-text-title-lg">
                            <span class="c-text-primary">1322</span>
                            등 상위
                            <span class="c-text-blue">28%</span>에요
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="c-card--inline c-card--inline-col3">
                      <div class="c-card">
                        <div class="mypage__report-rank--list">
                          <table class="c-table">
                            <!-- 웹접근성 caption 추가 -->
                            <caption>
                              중학교의 Best 학습 랭킹
                            </caption>
                            <!--// 웹접근성 caption 추가 -->
                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <!-- 웹접근성 scope 추가 -->
                                <th scope="col">랭킹</th>
                                <th scope="col">이름</th>
                                <th scope="col">방문횟수</th>
                                <th scope="col">학습시간</th>
                                <!-- 웹접근성 scope 추가 -->
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><i class="ico ico-best no-1">1</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-2">2</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-3">3</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>4</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>5</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>6</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>7</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>8</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>9</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>10</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- 23.07.25 데이터 없을시 -->
                        <PubNodata :nodata="'데이터가 없습니다.'"></PubNodata>
                        <!--// 23.07.25 데이터 없을시 -->
                      </div>
                      <div class="c-card">
                        <div class="mypage__report-rank--list">
                          <table class="c-table">
                            <!-- 웹접근성 caption 추가 -->
                            <caption>
                              듣고 계시는 메가스터디 랭킹
                            </caption>
                            <!--// 웹접근성 caption 추가 -->
                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>랭킹</th>
                                <th>이름</th>
                                <th>방문횟수</th>
                                <th>학습시간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><i class="ico ico-best no-1">1</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-2">2</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-3">3</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>4</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>5</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>6</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>7</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>8</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>9</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>10</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- 23.07.25 데이터 없을시 -->
                        <PubNodata :nodata="'데이터가 없습니다.'"></PubNodata>
                        <!--// 23.07.25 데이터 없을시 -->
                      </div>
                      <div class="c-card">
                        <div class="mypage__report-rank--list">
                          <table class="c-table">
                            <!-- 웹접근성 caption 추가 -->
                            <caption>
                              학습을 하고 있는 같은 연령 랭킹
                            </caption>
                            <!--// 웹접근성 caption 추가 -->
                            <colgroup>
                              <col style="width: 3.5rem" />
                              <col style="width: 7rem" />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>랭킹</th>
                                <th>이름</th>
                                <th>방문횟수</th>
                                <th>학습시간</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><i class="ico ico-best no-1">1</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-2">2</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><i class="ico ico-best no-3">3</i></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>4</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>5</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>6</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>7</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>8</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>9</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                              <tr>
                                <td><span>10</span></td>
                                <td>김*서울 님</td>
                                <td>25회</td>
                                <td>52시간</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- 23.07.25 데이터 없을시 -->
                        <PubNodata :nodata="'데이터가 없습니다.'"></PubNodata>
                        <!--// 23.07.25 데이터 없을시 -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub c-flex">
                    <i class="ico ico-book"></i>
                    가장 관심있어하는<br class="c-mo" />
                    오픈강좌를<br class="c-mo" />
                    확인해보세요
                  </div>
                  <a href="#;" class="mypage__report-link">
                    추천 내용 더보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <ul class="mypage__report-chart">
                  <li>
                    <div class="mypage__report-chart--title">
                      12월달 나의 오픈강좌 관심도
                    </div>
                    <p class="mypage__report-chart--text">
                      (카테고리별 컨텐츠 클릭에 따른 비율)
                    </p>
                    <div class="c-chart">
                      <img src="@img/pic-chart-img02.png" alt="차트" />
                    </div>
                  </li>
                  <li>
                    <div class="mypage__report-chart--title">
                      12월달 카테고리 별 오픈강좌 콘텐츠 클릭 수
                    </div>
                    <p class="mypage__report-chart--text">
                      (콘텐츠 클릭 수 내림차순 정렬)
                    </p>
                    <div class="c-chart">
                      <img src="@img/pic-chart-img03.png" alt="차트" />
                    </div>
                  </li>
                </ul>
                <!-- 23.07.25 데이터 없을시 -->
                <PubNodata :nodata="'데이터가 없습니다.'"></PubNodata>
                <!--// 23.07.25 데이터 없을시 -->
              </div>
              <div class="mypage__report-title--lg">서울런 AI 학습추천</div>
              <div class="mypage__report-box">
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub">
                    현재 학습중인 수강<br class="c-mo" />
                    내역이에요<br class="c-mo" />
                    <span>(최근 3개까지 노출됩니다.)</span>
                  </div>
                  <a href="#;" class="mypage__report-link">
                    전체 이력보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list">
                  <div class="c-card--inline c-card--inline-col3">
                    <!-- div c-card ~ -> a태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                  </div>
                  <!-- 23.07.25 수정 -->
                  <div class="c-card--inline c-card--inline-col3">
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a href="" class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <!-- 230725 웹접근성 alt="이미지" -> 과목을 더 추가하실 수 있습니다. -->
                          <img
                            src="@img/ch-report01.svg"
                            alt=" 과목을 더 추가하실 수 있습니다."
                          />
                        </div>
                        <div class="c-text-title">
                          과목을 더 추가하실 수 있습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                      <!-- //데이터 없을시 -->
                    </a>
                  </div>
                  <div class="c-card--inline c-card--inline-col3">
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                        <div class="c-card-title c-card-title--sm">
                          <p>
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div class="c-card-body">
                        <dl class="c-card-info">
                          <dt>수강 기간</dt>
                          <dd>2023.03.01~2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>최근 수강일</dt>
                          <dd>2023.03.25</dd>
                        </dl>
                        <dl class="c-card-info">
                          <dt>진도율</dt>
                          <dd class="c-card-foot-progress">
                            <div class="c-progress">
                              <div
                                class="c-progress-bar"
                                style="width: 80%"
                              ></div>
                            </div>
                            <strong class="c-text-primary">80%</strong>
                          </dd>
                        </dl>
                      </div>
                    </a>
                    <a href="" class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <!-- 230725 웹접근성 alt="이미지" -> 과목을 더 추가하실 수 있습니다. -->
                          <img
                            src="@img/ch-report01.svg"
                            alt="과목을 더 추가하실 수 있습니다."
                          />
                        </div>
                        <div class="c-text-title">
                          과목을 더 추가하실 수 있습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                      <!-- //데이터 없을시 -->
                    </a>
                  </div>
                  <a href="" class="c-card--inline c-card--inline-col3">
                    <div class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <!-- 230725 웹접근성 alt="이미지" -> 수강 중인 강좌가 없습니다 -->
                          <img
                            src="@img/ch-report01.svg"
                            alt="수강 중인 강좌가 없습니다"
                          />
                        </div>
                        <div class="c-text-title">
                          수강 중인 강좌가 없습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                      <!-- //데이터 없을시 -->
                    </div>
                  </a>
                  <!--// 23.07.25 수정 -->
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub">
                    <strong class="c-text-blue">‘메가스터디’</strong>
                    에서<br class="c-mo" />
                    학습기반으로<br class="c-mo" />
                    맞춤형 강좌를 찾았어요
                  </div>
                  <a href="#;" class="mypage__report-link">
                    더 알아보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list">
                  <div class="c-card--inline c-card--inline-col3">
                    <div class="c-card c-card--border">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>중학과정</span>
                          <span>수학</span>
                          <span>기초1</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="c-card c-card--border">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>중학과정</span>
                          <span>수학</span>
                          <span>기초1</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="c-card c-card--border">
                      <div class="c-card-logo">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/logo-report-mega2.png" alt="mega" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              현우진의 국어 독해 특강 현우진의 국어 독해 특강
                              현우진의 국어 독해 특강
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>중학과정</span>
                          <span>수학</span>
                          <span>기초1</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mypage__report-box--title">
                  <div class="mypage__report-title--sub">
                    <strong class="c-text-blue">‘윌라’</strong>
                    에서 좋아할 만한<br class="c-mo" />
                    콘텐츠를 찾았어요
                  </div>
                  <a href="#;" class="mypage__report-link">
                    더 알아보기
                    <i class="ico ico-arrow">더보기</i>
                  </a>
                </div>
                <div class="mypage__report-list">
                  <div class="c-card--inline c-card--inline-col3">
                    <div class="c-card c-card--border">
                      <div class="c-card-img">
                        <!-- a -> p 로 변경 -->
                        <p>
                          <img src="@img/@temp/1.jpg" alt="" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              9급 공무원(특성화고) 기본 9급 공무원(특성화고)
                              기본 9급 공무원(특성화고) 기본 9급
                              공무원(특성화고) 기본
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>김철수 선생님</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="c-card c-card--border">
                      <div class="c-card-img">
                        <p>
                          <img src="@img/@temp/1.jpg" alt="" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              9급 공무원(특성화고) 기본 9급 공무원(특성화고)
                              기본 9급 공무원(특성화고) 기본 9급
                              공무원(특성화고) 기본
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>김철수 선생님</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="c-card c-card--border">
                      <div class="c-card-img">
                        <p>
                          <img src="@img/@temp/1.jpg" alt="" />
                        </p>
                      </div>
                      <div class="c-card-body">
                        <div class="c-card-title c-card-title--sm">
                          <a href="">
                            <strong>
                              9급 공무원(특성화고) 기본 9급 공무원(특성화고)
                              기본 9급 공무원(특성화고) 기본 9급
                              공무원(특성화고) 기본
                            </strong>
                          </a>
                        </div>
                        <div class="c-card-subtitle">
                          <span>김철수 선생님</span>
                        </div>
                        <div class="c-card-foot c-card-foot-time">
                          <p>총 40차시, 380분</p>
                          <button
                            class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                          >
                            <i class="ico ico-copy">복사</i>강의명 복사
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
