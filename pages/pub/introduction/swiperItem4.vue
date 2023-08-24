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
            slidesPerView: "auto",
            spaceBetween: 12,
            loop: false,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 12,
            loop: false,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
          },
          1025: {
            slidesPerView: "3",
            spaceBetween: 24,
            loop: false,
          },
          1200: {
            navigation: false,
          },
        },
      },
      //23.07.19 웹접근성 수정
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
    :spaceBetween="24"
    :loop="true"
    :modules="modules"
    :navigation="navigation"
    :breakpoints="swiperOptions.breakpoints"
    class="mySwiper"
  >
    <swiper-slide>
      <a href="" class="introduction-dream__step-item">
        <div class="introduction-dream__step-item-img">
          <!-- button -> span 로 변경 -->
          <span class="c-btn c-btn--play">
            <i class="ico ico-play"></i>
          </span>
          <!-- a 태그 -> p 태그로 변경 -->
          <p>
            <img src="@img/@temp/3.jpg" alt="" />
          </p>
        </div>
        <p>
          <!-- a 태그 -> p태그로 변경 -->
          <span>
            서울런 대입설명회&진로공감콘서트 서울런 대입설명회&진로공감콘서트
          </span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__step-item">
        <div class="introduction-dream__step-item-img">
          <span class="c-btn c-btn--play">
            <i class="ico ico-play"></i>
          </span>
          <p>
            <img src="@img/@temp/3.jpg" alt="" />
          </p>
        </div>
        <p>
          <span>
            서울런 대입설명회&진로공감콘서트 서울런 대입설명회&진로공감콘서트
          </span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__step-item">
        <div class="introduction-dream__step-item-img">
          <span class="c-btn c-btn--play">
            <i class="ico ico-play"></i>
          </span>
          <p>
            <img src="@img/@temp/3.jpg" alt="" />
          </p>
        </div>
        <p>
          <span>
            서울런 대입설명회&진로공감콘서트 서울런 대입설명회&진로공감콘서트
          </span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__step-item">
        <div class="introduction-dream__step-item-img">
          <span class="c-btn c-btn--play">
            <i class="ico ico-play"></i>
          </span>
          <p>
            <img src="@img/@temp/3.jpg" alt="" />
          </p>
        </div>
        <p>
          <span>
            서울런 대입설명회&진로공감콘서트 서울런 대입설명회&진로공감콘서트
          </span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__step-item">
        <div class="introduction-dream__step-item-img">
          <span class="c-btn c-btn--play">
            <i class="ico ico-play"></i>
          </span>
          <p>
            <img src="@img/@temp/3.jpg" alt="" />
          </p>
        </div>
        <p>
          <span>
            서울런 대입설명회&진로공감콘서트 서울런 대입설명회&진로공감콘서트
          </span>
        </p>
      </a>
    </swiper-slide>
  </swiper>
  <!-- 23.07.19 웹접근성 수정 -->
  <button class="swiper-button-prev"><!--이전--></button>
  <button class="swiper-button-next"><!--다음--></button>
  <!--// 23.07.19 웹접근성 수정 -->
</template>
