<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eduItem from "./_eduitem.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      edu01: true,
      edu02: false,
      edu03: false,
      edu04: false,
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
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">추천 강의</div>
            <div class="c-text-title-sub">
              <p>
                나의 활동과 학습에 대한 분석을 통해 맞춤 강의를 AI가 분석 하여
                추천해 드립니다.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl>
                <dt>교과 강좌 추천</dt>
                <dd><span>999</span></dd>
              </dl>
              <dl>
                <dt>전문 강좌 추천</dt>
                <dd><span>999</span></dd>
              </dl>
              <dl>
                <dt>독서 추천</dt>
                <dd><span>999</span></dd>
              </dl>
              <dl>
                <dt>멘토 추천 강좌</dt>
                <dd><span>999</span></dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl>
                <dt @click="edu01 = !edu01">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu01 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >교과 강좌 추천 <span>6</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu01 == true">
                  <div class="mypage-edu__contents">
                    <div class="lecture">
                      <!-- 230710 강의 리스트 아이템 변경 lecture-list--type03 추가, 안에 내용 변경 -->
                      <div class="lecture-list lecture-list--type03">
                        <div
                          class="lecture-list__item"
                          v-for="lecture in 4"
                          :key="lecture"
                        >
                          <div class="lecture-list__item-head">
                            <div class="lecture-list__item-head-img">
                              <img
                                src="@img/logo-hackers.png"
                                alt="해커스 로고"
                              />
                            </div>
                          </div>
                          <div class="lecture-list__item-title">
                            <p>
                              <a href="#">
                                현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특 현우진의 국어
                                독해특강특현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특
                              </a>
                            </p>
                          </div>
                          <div class="lecture-list__item-type">
                            중학과정 · 국어 · 기초1
                          </div>
                          <div class="lecture-list__item-time">
                            <p>총 30차시, 360분</p>
                            <button
                              class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                            >
                              <i class="ico ico-copy">복사</i>강의명 복사
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="lecture__title">해커스</div>
                      <div class="lecture-list lecture-list--type03">
                        <div
                          class="lecture-list__item"
                          v-for="lecture in 4"
                          :key="lecture"
                        >
                          <div class="lecture-list__item-head">
                            <div class="lecture-list__item-head-img">
                              <img
                                src="@img/logo-hackers.png"
                                alt="해커스 로고"
                              />
                            </div>
                          </div>
                          <div class="lecture-list__item-title">
                            <p>
                              <a href="#">
                                현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특 현우진의 국어
                                독해특강특현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특현우진의 국어
                                독해특강특현우진의 국어 독해특강특
                              </a>
                            </p>
                          </div>
                          <div class="lecture-list__item-type">
                            중학과정 · 국어 · 기초1
                          </div>
                          <div class="lecture-list__item-time">
                            <p>총 30차시, 360분</p>
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
                </dd>
              </dl>
              <dl>
                <dt @click="edu02 = !edu02">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu02 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">
                      전문 강좌 추천 <span>2</span>
                    </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu02 == true">
                  <div class="mypage-edu__contents">1</div>
                </dd>
              </dl>
              <dl>
                <dt @click="edu03 = !edu03">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu03 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">
                      오디오 북 추천 <span>10</span>
                    </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu03 == true">
                  <div class="mypage-edu__contents">1</div>
                </dd>
              </dl>
              <dl>
                <dt @click="edu04 = !edu04">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu04 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">
                      멘토 추천 강좌 <span>10</span>
                    </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu04 == true">
                  <div class="mypage-edu__contents">1</div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
