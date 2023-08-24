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
import { ref } from "vue";
const attributes = ref([
  {
    highlight: true,
    dates: [
      new Date(2023, 6, 1),
      new Date(2023, 6, 2),
      new Date(2023, 6, 3),
      new Date(2023, 6, 4),
      new Date(2023, 6, 5),
      new Date(2023, 6, 6),
      new Date(2023, 6, 7),
      new Date(2023, 6, 8),
      new Date(2023, 6, 9),
      new Date(2023, 6, 10),
      new Date(2023, 6, 12),
      new Date(2023, 6, 15),
      new Date(2023, 6, 16),
      new Date(2023, 6, 18),
    ],
  },
]);
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
                <dl class="mypage__report-site custom">
                  <dt>
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
                      * 기기 사용이 어렵다면
                      <strong class="c-text-primary">
                        학습사이트별 고객센터
                      </strong>
                      <a href="#;" class="mypage__report-link">
                        확인하기
                        <i class="ico ico-arrow">더보기</i>
                      </a>
                    </p>
                  </dt>
                  <dd>
                    <div class="mypage__report-title--sm">학습 사이트 변경</div>
                    <div class="mypage__report-site--text">
                      <p>
                        <strong class="c-text-primary">D-133</strong> 후 현재
                        학습이<br />
                        마음에 들지 않는다면 변경하실 수 있어요.
                      </p>
                    </div>
                    <a href="#;" class="mypage__report-link">
                      미리보기
                      <i class="ico ico-arrow">더보기</i>
                    </a>
                  </dd>
                </dl>
              </div>
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
                    <!-- 230725 alt="이미지" 수정-->
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
                            <!-- 웹접근성 230725 alt="이미지" 수정-->
                            <div
                              class="c-badge c-badge-stamp c-badge-stamp--round"
                            >
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
                                alt="출석 15회"
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
                            ></div>
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
                                alt="진도율 0 ~ 10%"
                              />
                            </div>
                            <span>0~10%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp2.svg"
                                alt="진도율 10% ~ 20%"
                              />
                            </div>
                            <span>~20%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp3.svg"
                                alt="진도율 20% ~ 30%"
                              />
                            </div>
                            <span>~30%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp4.svg"
                                alt="진도율 30% ~ 60%"
                              />
                            </div>
                            <span>~60%</span>
                          </li>
                          <li>
                            <div class="c-badge c-badge-stamp">
                              <img
                                src="@img/ic-badge-stamp5.svg"
                                alt="진도율 60% ~ 90%"
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
                        <!-- 230725 alt="이미지" 수정-->
                        <img
                          src="@img/ic-info-title.svg"
                          alt="연간 학습량 이미지"
                        />
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
                </div>
                <ul class="mypage__report-chart">
                  <li class="w-100">
                    <div class="mypage__report-chart--title">학습시간 현황</div>
                    <p class="mypage__report-chart--text">
                      (일별 학습 양에 따라 점점 진하게 표현하여 한눈에 볼 수
                      있도록 표현한 그래프)
                    </p>
                    <div class="c-chart">
                      <img src="@img/pic-chart-img04.png" alt="차트" />
                    </div>
                  </li>
                </ul>
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
              </div>
              <div class="mypage__report-title--lg">수강 현황</div>
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
                    <!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div> </a
                    ><!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div>
                    </a>
                    <!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div>
                    </a>
                  </div>
                  <!-- 23.07.25 수정 -->
                  <div class="c-card--inline c-card--inline-col3">
                    <!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div>
                    </a>
                    <!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div>
                    </a>
                    <!-- div class="c-card ~" -> a태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <img src="@img/ch-report01.svg" alt="이미지" />
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
                    <!-- div class="c-card ~ -> a 태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--custom">
                      <div class="c-card-logo">
                        <!-- 230802 웹접근성 a -> p 태그 변경 -->
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
                      </div>
                    </a>
                    <!-- div class="c-card ~" -> a태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <img src="@img/ch-report01.svg" alt="이미지" />
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
                    <!-- div class="c-card ~" -> a태그로 변경 -->
                    <a href="" class="c-card c-card--border c-card--nodata">
                      <!-- 데이터 없을시 -->
                      <div class="c-nodata">
                        <div class="c-nodata-img">
                          <img src="@img/ch-report01.svg" alt="이미지" />
                        </div>
                        <div class="c-text-title">
                          과목을 더 추가하실 수 있습니다.
                        </div>
                        <p>신청하신 사이트에서 추가로 학습을 해보세요.</p>
                      </div>
                      <!-- //데이터 없을시 -->
                    </a>
                  </div>
                  <!--// 23.07.25 수정 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
