<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>
<template>
  <swiper :slidesPerView="'auto'">
    <swiper-slide><a href="#Main">서울런은?</a></swiper-slide>
    <swiper-slide><a href="#Story">성공스토리</a></swiper-slide>
    <swiper-slide><a href="#AI">AI 추천</a></swiper-slide>
    <swiper-slide><a href="#Mentoring">멘토링</a></swiper-slide>
    <swiper-slide><a href="#Consulting">진로진학상담</a></swiper-slide>
    <swiper-slide><a href="#LearningSupport">학습지원</a></swiper-slide>
    <swiper-slide><a href="#Join">회원가입</a></swiper-slide>
    <swiper-slide><a href="#SupportCenter">지원센터</a></swiper-slide>
  </swiper>
</template>
