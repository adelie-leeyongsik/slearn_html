<script setup>
import SubTitle from "./_snbtitle.vue";
import Snb from "./_snb.vue";
definePageMeta({
  layout: "interest",
});
</script>
<script>
import swiperItem from "./swiperItem";
</script>
<template>
  <div class="interest">
    <PubTitle
      title="서울런과 함께 내 관심사를 찾아보세요"
      sub="나에게 맞는 맞춤형 학습을 알려주고 스스로 공부할 수 있게 도와주는 서비스입니다."
    />
    <div class="interest-haed">
      <div class="interest__inner">
        <div class="interest-haed__title">
          <div class="c-text-title-lg">
            현재 관심있는 분야에 맞는 추천콘텐츠는 다음과 같습니다.<br />
            관심분야를 다시 설정하실려면 오른쪽을 클릭하세요.
            <div class="c-badge-group">
              <span class="c-badge c-badge-lg c-badge-outline"># 교육</span>
              <span class="c-badge c-badge-lg c-badge-outline"># 예체능</span>
            </div>
          </div>
          <div class="c-btn-group">
            <button class="c-btn c-btn-sm c-btn-primary">키워드 설정</button>
            <button class="c-btn c-btn-sm c-btn-primary">이미지 설정</button>
            <button class="c-btn c-btn-sm c-btn-gray">관심 정책</button>
          </div>
        </div>
        <div class="interest-haed__cont">
          <div class="c-text-title-sm">온라인 콘텐츠<strong>8</strong></div>
          <div class="c-slide-box">
            <swiperItem />
          </div>
          <div class="c-text-title-sm">오프라인 콘텐츠<strong>19</strong></div>
          <div class="c-slide-box">
            <swiperItem />
          </div>
          <div class="c-text-title-sm">정책 정보<strong>6</strong></div>
          <div class="c-slide-box">
            <swiperItem />
          </div>
        </div>
      </div>
    </div>
    <div class="interest-body">
      <div class="interest__inner">
        <div class="interest__wrap">
          <Snb />
          <div class="interest__contents">
            <div class="interest__contents-body">
              <div class="c-card--inline">
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>선호도별 추천</span>
                      <div class="c-text-title-md">
                        내가 좋아하는<br />
                        강좌를 찾아줘!
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest01.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>세대별 추천</span>
                      <div class="c-text-title-md">
                        친구들이<br />
                        좋아하는 강좌
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest02.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>트렌트 추천</span>
                      <div class="c-text-title-md">
                        요즘 트렌드가<br />
                        궁금해!
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest03.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link bg1">
                    <div class="interest__box-cont">
                      <span>마음가는 대로 추천</span>
                      <div class="c-text-title-md">
                        힐링이 필요해<br />
                        내 마음 살피기
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest04.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>멘토 추천</span>
                      <div class="c-text-title-md">
                        멘토들이<br />
                        추천한 컨텐츠
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest05.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>서울런 선배 추천</span>
                      <div class="c-text-title-md">
                        선배들의<br />
                        컨텐츠 족보
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest06.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>직접 검색</span>
                      <div class="c-text-title-md">
                        내가 검색해서<br />
                        찾기
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest07.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link">
                    <div class="interest__box-cont">
                      <span>선택 검색</span>
                      <div class="c-text-title-md">
                        카테고리 검색<br />
                        찾기
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest08.svg" alt="" />
                    </div>
                  </a>
                </div>
                <div class="c-card">
                  <a href="#" class="interest__box-link bg2">
                    <div class="interest__box-cont">
                      <span>서울런 추천</span>
                      <div class="c-text-title-md">
                        세상을 바꾸는<br />
                        시간
                      </div>
                    </div>
                    <div class="interest__box-img">
                      <img src="@img/ic-interest09.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
