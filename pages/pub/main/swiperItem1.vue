<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiperRef = null;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };
    const swiperBtn1 = () => {
      swiperRef.autoplay.stop();
    };
    const swiperBtn2 = () => {
      swiperRef.autoplay.start();
    };
    return {
      swiperRef: null,
      setSwiperRef,
      swiperBtn1,
      swiperBtn2,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            "<a href=" +
            "#;" +
            ' class="' +
            className +
            '">0' +
            (index + 1) +
            "</a>"
          );
        },
      },
      modules: [Pagination, Navigation, Autoplay, EffectFade],
    };
  },
  data() {
    return {
      swiperBtnDisplay: false,
    };
  },
  methods: {
    stopSwip(event) {
      event.target.swiper.autoplay.stop();
    },
    startSwip(event) {
      event.target.swiper.autoplay.start();
    },
  },
};
</script>
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="false"
    :effect="'fade'"
    :pagination="pagination"
    :modules="modules"
    :speed="1200"
    class="mySwiper"
    @swiper="setSwiperRef"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide>
      <div class="new-main-visual">
        <div class="new-main-visual__title new-main__inner">
          <div class="c-text-title-lg" data-scroll data-scroll-speed="0.1">
            서울런이<br />
            꿈과 희망을<br />
            응원합니다!
          </div>
        </div>
        <div class="new-main-visual__video">
          <div class="new-main-visual__bg"></div>
          <video loop muted autoplay>
            <source src="@img/main/main.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="new-main-visual">
        <div class="new-main-visual__title new-main__inner">
          <div class="c-text-title-lg" data-scroll data-scroll-speed="0.1">
            응원합니다!<br />
            꿈과 희망을<br />
            서울런이<br />
          </div>
        </div>
        <div class="new-main-visual__video">
          <div class="new-main-visual__bg"></div>
          <img src="@img/main/pic-main-visual01.png" alt="이미지" />
        </div>
      </div>
    </swiper-slide>
    <div
      class="new-main-visual__control"
      :class="{ active: swiperBtnDisplay === true }"
      data-scroll
      data-scroll-speed="0.1"
    >
      <button
        class="c-btn c-btn-slide c-btn-stop"
        @click="swiperBtn1(), (swiperBtnDisplay = !swiperBtnDisplay)"
      >
        <i class="ico ico-stop"></i>
      </button>
      <button
        class="c-btn c-btn-slide c-btn-play"
        @click="swiperBtn2(), (swiperBtnDisplay = !swiperBtnDisplay)"
      >
        <i class="ico ico-play"></i>
      </button>
    </div>
  </swiper>
</template>
