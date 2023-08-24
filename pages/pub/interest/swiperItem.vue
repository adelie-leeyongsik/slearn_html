<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      swiperOptions: {
        breakpoints: {
          360: {
            slidesPerView: 1,
            spaceBetween: 12,
            loop: false,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 12,
            loop: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
            loop: false,
          },
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="12"
    :loop="true"
    :modules="modules"
    :navigation="navigation"
    :breakpoints="swiperOptions.breakpoints"
    class="mySwiper"
  >
    <!-- 23.07.05 웹접근성 수정 -->
    <button class="swiper-button-prev"><!--이전--></button>
    <button class="swiper-button-next"><!--다음--></button>
    <!--// 23.07.05 웹접근성 수정 -->
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
    <swiper-slide>
      <button class="c-card c-card--border">
        <div class="c-card-img">
          <img src="@img/@temp/3.jpg" alt="" />
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            전시상의 사적인 대화:카키 스펙 전시상의 사적인 대화:카키 스펙
          </div>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </button>
    </swiper-slide>
  </swiper>
</template>
