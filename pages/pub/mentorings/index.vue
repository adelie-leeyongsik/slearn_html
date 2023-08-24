<script setup>
import Item from "./_StoryItem.vue";
definePageMeta({
  layout: "mentoring",
});
</script>
<script>
import { thru } from "lodash";
export default {
  data() {
    return {
      currentTab: 0,
      tabList: ["멘토링 소개", "우수 멘토링 이야기", "멘토단 모집"],
      apply: false,
      map01: false,
      map02: false,
      map03: false,
      support01: true,
      support02: false,
      support03: false,
      support04: false,
    };
  },
};
</script>
<template>
  <div class="mentoring">
    <PubTitle
      title="멘토링 소개"
      sub="멘토와 멘티의 즐거운 성장과 꿈을 향한 여정을 함께하세요!"
    >
    </PubTitle>
    <div class="mentoring-wrap">
      <div class="mentoring-body">
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
            <div class="mentoring-info__item">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">
                    서울런 온·오프라인 멘토링으로<br />
                    학습관리부터 진로상담까지!
                  </div>
                </div>
                <div class="mentoring-info__type">
                  <div class="mentoring-info__type-item">
                    <span class="c-badge c-badge-lg c-badge-black">
                      멘티는 학습을 받는 학생입니다
                    </span>
                    <div class="mentoring-info__type-cont bg1">
                      <div class="c-text-title-sub">멘티</div>
                      <div class="c-text-title-lg">
                        멘토와 1:1 매칭,<br />
                        학습습관과 진로상담
                      </div>
                    </div>
                    <button class="c-btn c-btn-el c-btn-radius c-btn-outline">
                      <span class="c-text-primary">멘티</span>로 멘토링 시작하기
                      <i class="ico ico-arrow"></i>
                    </button>
                  </div>
                  <div class="mentoring-info__type-item">
                    <span class="c-badge c-badge-lg c-badge-black">
                      멘토는 학습을 지도하는 선생님입니다
                    </span>
                    <div class="mentoring-info__type-cont bg2">
                      <div class="c-text-title-sub">멘토</div>
                      <div class="c-text-title-lg">
                        멘티의 학습진도 및<br />
                        커리큘럼 관리
                      </div>
                    </div>
                    <button class="c-btn c-btn-el c-btn-radius c-btn-outline">
                      <span class="c-text-blue">멘티</span>로 멘토링 시작하기
                      <i class="ico ico-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mentoring-info__item">
              <div class="mentoring__inner">
                <div class="c-text-title-ve c-text-center">
                  서울런은<br />멘토링이 필수
                </div>
                <div class="c-text-title-sub c-text-center">
                  서울런을 이용중인 청소년이라면 누구나 서울런 멘토링을 통해
                  맞춤형 학습관리 및 진로상담 등의 도움을 받을 수 있습니다.<br />
                  서울런 멘토는 멘티와 1:1로 매칭되어 함께 학습 목표를
                  선정하고<br />
                  학습진도 및 커리큘럼을 관리하는 등 멘티가 올바른 학습 습관을
                  형성할 수 있도록 도움을 주고 있습니다.
                </div>
                <div class="mentoring-video">
                  <button class="c-btn c-btn-play">
                    <i class="ico ico-play"></i>
                  </button>
                  <img src="@img/pic-mentoring-video.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="mentoring-info__item bgBU">
              <div class="mentoring__inner">
                <div class="mentoring-info__banner">
                  <div class="mentoring-info__banner-cont">
                    <span class="c-badge c-badge-lg c-badge-blue">
                      서울런 전용 화상 플렛폼 활용
                    </span>
                    <div class="mentoring-info__banner-title">
                      온라인<br />
                      멘토링
                    </div>
                    <div class="mentoring-info__banner-img">
                      <img src="@img/pic-mentoring-banner01.svg" alt="" />
                    </div>
                  </div>
                  <div class="mentoring-info__banner-cont">
                    <span class="c-badge c-badge-lg c-badge-green">
                      서울런 전용 화상 플렛폼 활용
                    </span>
                    <div class="mentoring-info__banner-title">
                      오프라인<br />
                      멘토링
                    </div>
                    <div class="mentoring-info__banner-img">
                      <img src="@img/pic-mentoring-banner02.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="mentoring-info__copy">
                  <span>1:1 개별 멘토링</span>
                  <span>기본 주1회 1시간씩</span>
                </div>
              </div>
            </div>
            <div class="mentoring-info__map">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">
                    오프라인 멘토링<br class="c-mo" />
                    장소 찾기
                  </div>
                </div>
                <div class="mentoring-map">
                  <div class="mentoring-map__img">
                    <img src="@img/pic-map.svg" alt="멘토링 지도" />
                  </div>
                  <div class="mentoring-map__text">
                    <div class="mentoring-map__text-head">
                      <div class="c-form-group">
                        <label class="c-form-label">지역선택</label>
                        <select class="c-form-control" title="지역선택">
                          <option>서울특별시</option>
                        </select>
                      </div>
                    </div>
                    <div class="mentoring-map__text-list">
                      <ul>
                        <li :class="{ active: map01 === true }">
                          <a
                            href="javascript:void(0)"
                            v-on:click="map01 = !map01"
                          >
                            <strong>스터디 카페 A</strong>
                            <p>서울특별시 중구 덕수궁길 15</p>
                          </a>
                        </li>
                        <li :class="{ active: map02 === true }">
                          <a
                            href="javascript:void(0)"
                            v-on:click="map02 = !map02"
                          >
                            <strong>스터디 카페 A</strong>
                            <p>서울특별시 중구 덕수궁길 15</p>
                          </a>
                        </li>
                        <li :class="{ active: map03 === true }">
                          <a
                            href="javascript:void(0)"
                            v-on:click="map03 = !map03"
                          >
                            <strong>스터디 카페 A</strong>
                            <p>서울특별시 중구 덕수궁길 15</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mentoring-map">
                  <div class="mentoring-map__img">
                    <img src="@img/pic-map.svg" alt="멘토링 지도" />
                    <!-- 선택 안됐을경우 -->
                    <div class="mentoring-map__img-nodata">
                      우측 목록에서 지역을 선택해주세요
                    </div>
                    <!-- // 선택 안됐을경우 -->
                  </div>
                  <div class="mentoring-map__text">
                    <div class="mentoring-map__text-head">
                      <div class="c-form-group">
                        <label class="c-form-label">지역선택</label>
                        <select class="c-form-control" title="지역선택">
                          <option>서울특별시</option>
                        </select>
                      </div>
                    </div>
                    <div class="mentoring-map__text-list">
                      <!-- 데이터 없을시 -->
                      <ul class="nodata">
                        <li>해당하는 지역이 없습니다</li>
                      </ul>
                      <!-- // 데이터 없을시 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mentoring-info__faq">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">궁금증을 해결하세요</div>
                  <div class="c-btn-group">
                    <button class="c-btn c-btn-lg c-btn-radius c-btn-outline">
                      멘티 활동 가이드<i class="ico ico-down-lg"></i>
                    </button>
                    <button class="c-btn c-btn-lg c-btn-radius c-btn-outline">
                      멘토 활동 가이드<i class="ico ico-down-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="mentoring-info__list">
                  <div class="mentoring-info__list-item">
                    <a href="">
                      <div class="mentoring-info__list-title">
                        <span>자주묻는 질문</span>
                        <div class="c-text-title-md">
                          멘토링에 대해 질문 답변을 모아봤어요
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="mentoring-info__list-item">
                    <a href="">
                      <div class="mentoring-info__list-title">
                        <span>1:1 문의하기</span>
                        <div class="c-text-title-md">
                          궁금한 사항을 못찾겠다면 질문을 남겨보세요
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="mentoring-info__list-item">
                    <div class="mentoring-info__list-title">
                      <span>학습지원센터</span>
                      <div class="c-text-title-md">
                        서울런 학습 지원센터로 직접 문의해보세요
                      </div>
                    </div>
                    <div class="mentoring-info__list-contact">
                      <a href="tel:1533-0909"> 1533-<span>0909</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="currentTab == 1" class="c-tab-contents">
            <div class="mentoring__inner">
              <Item />
              <PubPagination />
            </div>
          </div>
          <div v-show="currentTab == 2" class="c-tab-contents">
            <div class="mentoring-recruitment__banner">
              <div class="mentoring__inner">
                <div class="mentoring-recruitment__title">
                  <div class="c-text-title-lg">
                    <span class="c-text-blue">멘토단</span><br />
                    모집안내
                  </div>
                  <div class="c-text-title-sm">
                    서울런 멘토단은 대학생이라면 누구나 지역 구분없이<br />
                    모집시기에 맞춰 지원할 수 있습니다.
                  </div>
                  <p>
                    (단,오프라인 멘토는 서울 및 경기, 인천 지역 활동 가능자로
                    한정함)
                  </p>
                </div>
                <div class="mentoring-recruitment__img">
                  <img src="@img/pic-mentoring-recruitment-img01.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="mentoring-recruitment__item bgbU">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">
                    멘토단 지원 순서를 확인하세요
                  </div>
                </div>
                <div class="mentoring-step">
                  <ul>
                    <li>
                      <img
                        src="@img/ch-mentoring-step01.svg"
                        alt="멘토링 지원 순서 01"
                      />
                      <div class="c-text-title-sm">
                        <span>1.</span>접수 및 지원
                      </div>
                    </li>
                    <li>
                      <img
                        src="@img/ch-mentoring-step02.svg"
                        alt="멘토링 지원 순서 02"
                      />
                      <div class="c-text-title-sm"><span>2.</span>서류심사</div>
                    </li>
                    <li>
                      <img
                        src="@img/ch-mentoring-step03.svg"
                        alt="멘토링 지원 순서 03"
                      />
                      <div class="c-text-title-sm"><span>3.</span>필수교육</div>
                    </li>
                    <li>
                      <img
                        src="@img/ch-mentoring-step04.svg"
                        alt="멘토링 지원 순서 04"
                      />
                      <div class="c-text-title-sm">
                        <span>4.</span>멘토링 활동
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="c-btn-group">
                  <button class="c-btn c-btn-el c-btn-radius c-btn-outline">
                    멘토단 지원하기<i class="ico ico-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="mentoring-recruitment__item">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">
                    서울런이 멘토단 활동을 지원합니다
                  </div>
                </div>
                <div class="mentoring-support">
                  <a
                    href="javascript:void(0)"
                    @focus="
                      (support01 = true),
                        (support02 = false),
                        (support03 = false),
                        (support04 = false)
                    "
                    @click="
                      (support01 = true),
                        (support02 = false),
                        (support03 = false),
                        (support04 = false)
                    "
                    class="mentoring-support__item"
                    :class="{ active: support01 === true }"
                  >
                    <div class="mentoring-support__title">
                      <span>하나.</span>
                      <div class="c-text-title-lg">활동비지원</div>
                    </div>
                    <div class="mentoring-support__text">
                      총 10명의 멘티를 지도 할 수 있습니다.<br />
                      각 회차의 멘토링이 종료될때마다 소정의 활동비를 제공하고
                      서울런 홈페이지에서 정산서를 확인하실 수 있습니다.
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    @focus="
                      (support01 = false),
                        (support02 = true),
                        (support03 = false),
                        (support04 = false)
                    "
                    @click="
                      (support01 = false),
                        (support02 = true),
                        (support03 = false),
                        (support04 = false)
                    "
                    class="mentoring-support__item"
                    :class="{ active: support02 === true }"
                  >
                    <div class="mentoring-support__title">
                      <span>둘.</span>
                      <div class="c-text-title-lg">봉사시간 제공</div>
                    </div>
                    <div class="mentoring-support__text">
                      멘티를 성장시키는 보람은 무엇으로도 표현하기 힘들죠~<br />
                      멘토를 하는 시간도 봉사시간으로 제공합니다.<br />
                      서울런 홈페이지 정산서에서 봉사시간으로 확인하세요!
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    @focus="
                      (support01 = false),
                        (support02 = false),
                        (support03 = true),
                        (support04 = false)
                    "
                    @click="
                      (support01 = false),
                        (support02 = false),
                        (support03 = true),
                        (support04 = false)
                    "
                    class="mentoring-support__item"
                    :class="{ active: support03 === true }"
                  >
                    <div class="mentoring-support__title">
                      <span>셋.</span>
                      <div class="c-text-title-lg">정기교육 제공</div>
                    </div>
                    <div class="mentoring-support__text">
                      서울런의 멘토링은 멘티뿐 아니라<br />
                      멘토도 성장하는 것을 목표로 하고 있습니다.<br />
                      각종 교육이 온라인 / 오프라인으로 제공됩니다.
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    @focus="
                      (support01 = false),
                        (support02 = false),
                        (support03 = false),
                        (support04 = true)
                    "
                    @click="
                      (support01 = false),
                        (support02 = false),
                        (support03 = false),
                        (support04 = true)
                    "
                    class="mentoring-support__item"
                    :class="{ active: support04 === true }"
                  >
                    <div class="mentoring-support__title">
                      <span>넷.</span>
                      <div class="c-text-title-lg">교류지원</div>
                    </div>
                    <div class="mentoring-support__text"></div>
                  </a>
                </div>
              </div>
            </div>
            <div class="mentoring-recruitment__item bgGY">
              <div class="mentoring__inner">
                <div class="mentoring-title">
                  <div class="c-text-title-lg">
                    멘토 디지털 배지로<br />
                    경험·성과를 표현합니다
                  </div>
                </div>
                <div class="mentoring-badge__item">
                  <div class="mentoring-badge__cont">
                    <div class="mentoring-badge__title">
                      <div class="c-text-title-md">멘토 이력 배지</div>
                    </div>
                    <div class="mentoring-badge__text">
                      멘토 역량, 경력, 수강 3개 분야의 5개 단계별 배지 수여<br />
                      활동기간 동안 멘토단 교육 참여, 멘토링 진행 횟수,
                      수상내역에 따라<br />
                      측정·관리 시스템 상 각 분야별 조건 충족 시 자동 획득
                    </div>
                  </div>
                  <div class="mentoring-badge__img">
                    <div class="badge__list">
                      <ul>
                        <li>
                          <img
                            src="@img/ic-badge-green01.png"
                            alt="멘토 그린 배지"
                          /><span>그린</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-bronze01.png"
                            alt="멘토 브론즈 배지"
                          /><span>브론즈</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-silver01.png"
                            alt="멘토 실버 배지"
                          /><span>실버</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-gold01.png"
                            alt="멘토 골드 배지"
                          /><span>골드</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-dia01.png"
                            alt="멘토 다이아 배지"
                          /><span>다이아</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mentoring-badge__item">
                  <div class="mentoring-badge__cont">
                    <div class="mentoring-badge__title">
                      <div class="c-text-title-md">멘토 특별 배지</div>
                    </div>
                    <div class="mentoring-badge__text">
                      성실·우수한 멘토(멘토링팀)를 평가·선정하여 배지 수여
                    </div>
                  </div>
                  <div class="mentoring-badge__img">
                    <div class="badge__list">
                      <ul>
                        <li>
                          <img
                            src="@img/ic-badge-mentor.png"
                            alt="우수 멘토 배지"
                          />
                          <span>우수 멘토</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-mentor02.png"
                            alt="최우수 멘토 배지"
                          />
                          <span>최우수 멘토</span>
                        </li>
                        <li>
                          <img
                            src="@img/ic-badge-mentor03.png"
                            alt="명예 맨토 배지"
                          />
                          <span>명예 맨토</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mentoring-recruitment__form">
              <div class="mentoring__inner">
                <!-- 완료전 -->
                <div
                  class="mentoring-form__wrap"
                  :class="{ active: apply === true }"
                >
                  <button
                    class="mentoring-form__head"
                    v-on:click="apply = !apply"
                  >
                    <p>멘토단 지원서 작성하기</p>
                  </button>
                  <div class="mentoring-form">
                    <form action="">
                      <div class="mentoring-form__box">
                        <h2 class="c-text-title-md">
                          기본정보를 입력해주세요.
                        </h2>
                        <div class="c-form-group">
                          <label for="name" class="c-form-label">
                            이름<span class="c-essential">*</span>
                          </label>
                          <!-- 웹접근성 title 추가 -->
                          <input
                            type="text"
                            class="c-form-control"
                            placeholder="이름을 입력해 주세요."
                            title="이름"
                          />
                          <!--// 웹접근성 title 추가 -->
                        </div>
                        <div class="c-form-group">
                          <label for="sex" class="c-form-label"
                            >성별<span class="c-essential">*</span></label
                          >
                          <div class="c-form-check-group">
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="sex"
                                id="sex1"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="sex1"
                                >남성</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="sex"
                                id="sex2"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="sex2"
                                >여성</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label for="birth" class="c-form-label"
                            >생년월일<span class="c-essential">*</span></label
                          >
                          <input
                            class="c-input-calendar c-form-control w-100"
                            id="birth"
                            placeholder="연도-월-일"
                          />
                        </div>
                        <div class="c-form-group">
                          <label for="cellphone" class="c-form-label"
                            >휴대폰번호<span class="c-essential">*</span></label
                          >
                          <div class="c-input-group">
                            <input
                              id="cellphone"
                              class="c-form-control"
                              type="text"
                              placeholder=""
                            />
                            -
                            <input
                              id="cellphone"
                              class="c-form-control"
                              type="text"
                              placeholder=""
                            />
                            -
                            <input
                              id="cellphone"
                              class="c-form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label class="c-form-label"
                            >주소<span class="c-essential">*</span></label
                          >
                          <div class="c-input-group c-input-group--disabled">
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder="우편번호"
                              title="우편번호"
                              disabled
                            />
                            <button class="c-btn c-btn-sm c-btn-primary">
                              검색
                            </button>
                          </div>
                          <div class="c-input-group">
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder=""
                              title="주소"
                              disabled
                            />
                          </div>
                          <div class="c-input-group">
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder="상세 주소 입력해주세요"
                              title="상세주소"
                            />
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label for="emailAddress" class="c-form-label"
                            >이메일 주소</label
                          >
                          <div class="c-input-group c-input-group--email">
                            <input
                              id="emailAddress"
                              class="c-form-control"
                              type="text"
                              placeholder="이메일 주소"
                              title="이메일주소 입력"
                            />
                            <select
                              name=""
                              id=""
                              title="이메일 도메인 입력"
                              class="c-form-control"
                            >
                              <option value="">직접입력</option>
                            </select>
                          </div>
                          <div class="c-input-group">
                            <input
                              id="emailAddress"
                              class="c-form-control"
                              type="text"
                              placeholder=""
                              value=""
                              title="인증번호 입력"
                            />
                            <button
                              class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                            >
                              중복체크
                            </button>
                          </div>
                          <p class="c-text-danger c-text-sm">
                            중복된 이메일 주소가 존재합니다.
                          </p>
                        </div>
                        <div class="c-form-group">
                          <label for="category" class="c-form-label">
                            지원 구분
                          </label>
                          <!-- 웹접근성 title 추가 -->
                          <select class="c-form-control" id="category">
                            <option>선택</option>
                            <option>대학교</option>
                            <option>대학원</option>
                            <option>전문강사</option>
                            <option>일반</option>
                          </select>
                        </div>
                        <div class="c-form-group">
                          <div class="c-form-label">
                            대학교 정보<span class="c-essential">*</span>
                          </div>
                          <div class="c-input-group c-input-group--disabled">
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder="대학교"
                              title="대학교 정보"
                              readonly
                            />
                            <button
                              class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                            >
                              검색
                            </button>
                          </div>
                          <div class="c-input-group">
                            <!-- 230724 웹접근성 title 수정 -->
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder="전공을 입력하세요"
                              title="전공을 입력하세요"
                            />
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label for="status" class="c-form-label"
                            >재학 상태<span class="c-essential">*</span></label
                          >
                          <select id="status" class="c-form-control">
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div class="c-form-group">
                          <label for="mentoring" class="c-form-label"
                            >멘토링 유형<span class="c-essential"
                              >*</span
                            ></label
                          >
                          <select id="mentoring" class="c-form-control">
                            <option value="">선택</option>
                          </select>
                          <select
                            id="mentoring2"
                            class="c-form-control"
                            title="멘토링 유형2"
                          >
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div class="c-form-group">
                          <label for="subject" class="c-form-label"
                            >지도 가능 과목<span class="c-essential"
                              >*</span
                            ></label
                          >
                          <div
                            class="c-form-check-group c-form-check-group--col3"
                          >
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject01"
                                checked
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject01"
                                >국어</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject02"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject02"
                                >영어</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject03"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject03"
                                >수학</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject04"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject04"
                                >사회</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject05"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject05"
                                >과학</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="subject"
                                id="subject06"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="subject06"
                                >기타</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label for="subject" class="c-form-label">
                            지도 가능 과목 기타
                          </label>
                          <!-- 웹접근성 title 추가 -->
                          <input
                            type="text"
                            class="c-form-control"
                            placeholder=""
                            title="지도 가능 과목 기타 텍스트 박스"
                          />
                          <!--// 웹접근성 title 추가 -->
                        </div>
                        <div class="c-form-group">
                          <label for="grade" class="c-form-label"
                            >지도 가능 학년<span class="c-essential"
                              >*</span
                            ></label
                          >
                          <div
                            class="c-form-check-group c-form-check-group--col5"
                          >
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="grade"
                                id="grade01"
                                checked
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="grade01"
                                >초등</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="grade"
                                id="grade02"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="grade02"
                                >중등</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="grade"
                                id="grade03"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="grade03"
                                >고1</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="grade"
                                id="grade04"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="grade04"
                                >고2</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="grade"
                                id="grade05"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="grade05"
                                >고3</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="c-form-group">
                          <label for="location" class="c-form-label"
                            >지도 가능 지역</label
                          >
                          <div class="c-input-group c-input-group--type04">
                            <select
                              name=""
                              id="location"
                              class="c-form-control"
                              title="지도 가능 지역1"
                            >
                              <option>지역1</option>
                            </select>
                            <select
                              class="c-form-control"
                              type="text"
                              title="지도 가능 지역2"
                            >
                              <option>지역2</option>
                            </select>
                          </div>
                        </div>
                        <div class="c-form-group">
                          <div class="c-form-label">코칭 유형</div>
                          <select class="c-form-control" title="코칭 유형 선택">
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div class="c-form-group">
                          <label class="c-form-label">지원 경로</label>
                          <div class="c-input-group c-input-group--type04">
                            <select
                              name=""
                              id="Route"
                              title="지원경로 선택"
                              class="c-form-control"
                            >
                              <option value="">선택</option>
                            </select>
                            <input
                              class="c-form-control"
                              type="text"
                              placeholder="기타 경로 입력"
                              title="지원경로 직접 입력"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mentoring-form__box">
                        <h2 class="c-text-title-md">이용 동의</h2>
                        <div class="c-form-group">
                          <div class="c-form-label-wrap custom">
                            <label
                              for="sex"
                              class="c-form-label c-text-black c-text-title-sub"
                              >개인정보 수집 이용 동의<span class="c-essential"
                                >*</span
                              ></label
                            >
                            <a href="" class="c-form-label-btn">내용보기</a>
                          </div>
                          <div class="c-form-check-group">
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="agree1"
                                id="agree11"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="agree11"
                                >동의함</label
                              >
                            </div>
                            <div class="c-form-check">
                              <input
                                class="c-btn-check"
                                type="radio"
                                name="agree1"
                                id="agree12"
                              /><label
                                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                                for="agree12"
                                >동의안함</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mentoring-form__box radius">
                        <h2 class="c-text-title-md">
                          자기소개서를 입력해 주세요.
                        </h2>
                        <div class="c-form-group">
                          <label for="introduction5" class="c-form-label">
                            1. 유사활동 경력을 작성해주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction5"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction6" class="c-form-label">
                            2. 봉사활동 경험을 작성해주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction6"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction7" class="c-form-label">
                            3. 자격증 정보를 입력해주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction7"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction8" class="c-form-label">
                            4. 특기 정보를 입력해주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction8"
                          ></textarea>
                        </div>

                        <div class="c-form-group">
                          <label for="introduction1" class="c-form-label">
                            5. 서울런 멘토단에 지원한 동기는 무엇인가요?
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction1"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction2" class="c-form-label">
                            6. 효과적인 멘토링을 위한 노하우 또는 아이디어를
                            서술해 주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction2"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction3" class="c-form-label">
                            7. 청소년 관련 봉사(기타 활동) 경험이 있다면 그
                            경험과 느낀점을 적어주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction3"
                          ></textarea>
                        </div>
                        <div class="c-form-group">
                          <label for="introduction4" class="c-form-label">
                            8. 서울런 멘토단이 되면 어떻게 활동하고 싶은지
                            계획과 각오를 적어주세요.
                          </label>
                          <textarea
                            class="c-form-control"
                            id="introduction4"
                          ></textarea>
                        </div>
                      </div>
                      <div class="c-btn-box">
                        <div class="c-btn-group">
                          <button class="c-btn c-btn-lg c-btn-inactive">
                            지원하기
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- // 완료전 -->

                <!-- 완료후 -->
                <div class="mentoring-complete">
                  <div class="mentoring-complete__title">
                    멘토단 지원이
                    <br />
                    성공적으로 <span>완료 되었습니다.</span>
                  </div>
                  <div class="mentoring-complete__img">
                    <img
                      src="@img/ch-mentoring4.svg"
                      alt="멘토단 지원 완료 이미지"
                    />
                  </div>
                  <div class="mentoring-complete__text">
                    멘토 지원은 순차적으로 관리자가 검토하고 있습니다.<br />
                    검토 후 빠른 시간 안에 연락 드리도록 하겠습니다.
                  </div>
                </div>
                <!-- // 완료후 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
