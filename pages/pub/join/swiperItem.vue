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
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
          },
          768: {
            slidesPerView: "auto",
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
    :slidesPerView="2"
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
    <swiper-slide
      class="lecture-list__item"
      v-for="lecture in 4"
      :key="lecture"
    >
      <!-- 230710 수정 -->
      <div class="lecture-list__item-head">
        <div class="lecture-list__item-head-img">
          <img src="@img/logo-hackers.png" alt="해커스 로고" />
        </div>
      </div>
      <div class="lecture-list__item-title">
        <p>
          <a href="#">
            현우진의 국어 독해특강특현우진의 국어 독해특강특현우진의 국어
            독해특강특 현우진의 국어 독해특강특현우진의 국어 독해특강특현우진의
            국어 독해특강특현우진의 국어 독해특강특현우진의 국어
            독해특강특현우진의 국어 독해특강특
          </a>
        </p>
      </div>
      <div class="lecture-list__item-type">중학과정 · 국어 · 기초1</div>
      <div class="lecture-list__item-time">
        <p>총 30차시, 360분</p>
        <button class="c-btn c-btn-sm c-btn-radius c-btn-outline">
          <i class="ico ico-copy">복사</i>강의명 복사
        </button>
      </div>
      <!-- 230710 수정 -->
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.c-btn {
  background-color: #f1f1f1;
  color: #535353;
}
</style>
