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
            spaceBetween: 16,
            loop: false,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: false,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: false,
          },
          1025: {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: false,
          },
        },
      },
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
  <swiper
    :slidesPerView="auto"
    :spaceBetween="16"
    :loop="true"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="introduction__talk-card">
        <a href="">
          <div class="introduction__talk-card-img">
            <div class="introduction__talk-card-img-mask">
              <img src="@img/@temp/1.jpg" alt="" />
            </div>
          </div>
          <div class="introduction__talk-card-text">
            서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에
            합격 했어요!서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에
            원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에 합격
            했어요!서울런 덕분에 원하는 대학에 합격 했어요!
          </div>
          <div class="introduction__talk-card-foot">
            서울대학교 입학예정 | 김*혜
          </div>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction__talk-card">
        <a href="">
          <div class="introduction__talk-card-img">
            <div class="introduction__talk-card-img-mask">
              <img src="@img/@temp/1.jpg" alt="" />
            </div>
          </div>
          <div class="introduction__talk-card-text">
            서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에
            합격 했어요!서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에
            원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에 합격
            했어요!서울런 덕분에 원하는 대학에 합격 했어요!
          </div>
          <div class="introduction__talk-card-foot">
            서울대학교 입학예정 | 김*혜
          </div>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction__talk-card">
        <a href="">
          <div class="introduction__talk-card-img">
            <div class="introduction__talk-card-img-mask">
              <img src="@img/@temp/1.jpg" alt="" />
            </div>
          </div>
          <div class="introduction__talk-card-text">
            서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에
            합격 했어요!서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에
            원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에 합격
            했어요!서울런 덕분에 원하는 대학에 합격 했어요!
          </div>
          <div class="introduction__talk-card-foot">
            서울대학교 입학예정 | 김*혜
          </div>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction__talk-card">
        <a href="">
          <div class="introduction__talk-card-img">
            <div class="introduction__talk-card-img-mask">
              <img src="@img/@temp/1.jpg" alt="" />
            </div>
          </div>
          <div class="introduction__talk-card-text">
            서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에
            합격 했어요!서울런 덕분에 원하는 대학에 합격 했어요!서울런 덕분에
            원하는 대학에 합격 했어요!서울런 덕분에 원하는 대학에 합격
            했어요!서울런 덕분에 원하는 대학에 합격 했어요!
          </div>
          <div class="introduction__talk-card-foot">
            서울대학교 입학예정 | 김*혜
          </div>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
