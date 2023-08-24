<script setup>
// import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

const router = useRouter();

const aiData = reactive({
  currentTab: 0,
  tabList: ["# 서울런 AI 추천 콘텐츠", "# 오늘의 인기 콘텐츠", "# 주간 BEST"],
  // swiperOptions: {
  //   breakpoints: {
  //     1025: {
  //       slidesPerView: 3,
  //     },
  //     1024: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       loop: false,
  //     },
  //     768: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       loop: false,
  //     },
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       loop: false,
  //     },
  //   },
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // modules: [Pagination, Navigation],
});
</script>
<template>
  <div class="main__contents-head">
    <div class="main__contents-title">
      똑똑하게 알려주는 맞춤<br class="c-mo" />
      추천 시스템을 소개합니다.
    </div>
    <p class="main__contents-text">
      인공지능 서울런에게 나에게<br class="c-mo" />
      맞는 컨텐츠를 추천 받아보세요!
    </p>
    <button
      class="c-btn c-btn-lg c-btn-radius c-btn-outline--danger"
      @click="router.push('/interest')"
    >
      더보기<i class="ico ico-arrow">더보기 이미지</i>
    </button>
  </div>
  <!-- <div class="main__contents-body">
    <div class="c-tab-nav">
      <ul>
        <li
          v-for="(tab, index) in aiData.tabList"
          :key="index"
          :class="{ active: aiData.currentTab === index }"
        >
          <a href="#" @click.prevent="aiData.currentTab = index">{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="c-tab-contents__wrap">
      <div v-show="aiData.currentTab == 0" class="c-tab-contents">
        <div class="main__slide-box">
          <swiper
            :slidesPerView="3"
            :spaceBetween="0"
            :loop="true"
            :modules="aiData.modules"
            :pagination="{
              type: 'fraction',
            }"
            :navigation="aiData.navigation"
            :breakpoints="aiData.swiperOptions.breakpoints"
            class="mySwiper"
          >
            <button class="swiper-button-prev"></button>
            <button class="swiper-button-next"></button>

            <swiper-slide v-for="idx in 6">
              <a href="javascript:void(0)" class="c-card c-card--border">
                <div class="c-card-img">
                  <p>
                    <img
                      src="@img/@temp/3.jpg"
                      :alt="`서울런 추천콘텐츠 이미지${idx}`"
                    />
                  </p>
                </div>
                <div class="c-card-body">
                  <div class="c-card-title">
                    <strong>서울런 대입설명회&진로공감콘서트 시즌1</strong>
                  </div>
                  <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-show="aiData.currentTab == 1" class="c-tab-contents">
        <div class="main__slide-box">
          <swiper
            :slidesPerView="3"
            :spaceBetween="0"
            :loop="true"
            :modules="aiData.modules"
            :pagination="{
              type: 'fraction',
            }"
            :navigation="aiData.navigation"
            :breakpoints="aiData.swiperOptions.breakpoints"
            class="mySwiper"
          >
            <button class="swiper-button-prev"></button>
            <button class="swiper-button-next"></button>

            <swiper-slide v-for="idx in 6">
              <a href="javascript:void(0)" class="c-card c-card--border">
                <div class="c-card-img">
                  <p>
                    <img
                      src="@img/@temp/3.jpg"
                      :alt="`오늘의 인기콘텐츠 이미지 ${idx}`"
                    />
                  </p>
                </div>
                <div class="c-card-body">
                  <div class="c-card-title">
                    <strong>서울런 대입설명회&진로공감콘서트 시즌1</strong>
                  </div>
                  <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-show="aiData.currentTab == 2" class="c-tab-contents">
        <div class="main__slide-box">
          <swiper
            :slidesPerView="3"
            :spaceBetween="0"
            :loop="true"
            :modules="aiData.modules"
            :pagination="{
              type: 'fraction',
            }"
            :navigation="aiData.navigation"
            :breakpoints="aiData.swiperOptions.breakpoints"
            class="mySwiper"
          >
            <button class="swiper-button-prev"></button>
            <button class="swiper-button-next"></button>

            <swiper-slide v-for="idx in 6">
              <a href="javascript:void(0)" class="c-card c-card--border">
                <div class="c-card-img">
                  <p>
                    <img
                      src="@img/@temp/3.jpg"
                      :alt="`주간best 이미지${idx}`"
                    />
                  </p>
                </div>
                <div class="c-card-body">
                  <div class="c-card-title">
                    <strong>서울런 대입설명회&진로공감콘서트 시즌1</strong>
                  </div>
                  <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div> -->
</template>
