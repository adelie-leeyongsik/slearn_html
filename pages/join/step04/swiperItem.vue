<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useModalStore } from "@/store";

const p = defineProps({
  dataList: { type: Array, default: [] },
});

const modal = useModalStore();

const d = reactive({
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
  modules: [Pagination, Navigation],
  mySwiper: null,
});

const onCopyText = (text) => {
  modal.alert("알림", "강의명이 복사되었습니다.");
  window.navigator.clipboard.writeText(text);
};

const onSwiper = (val) => {
  d.mySwiper = val;
};

const prevSlide = () => {
  if (d.mySwiper.isBeginning) {
    return;
  }

  d.mySwiper.slideTo(d.mySwiper.activeIndex - 1);
};

const nextSlide = () => {
  if (d.mySwiper.isEnd) {
    return;
  }
  d.mySwiper.slideTo(d.mySwiper.activeIndex + 1);
};
</script>

<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="12"
    :loop="true"
    :navigation="true"
    :modules="d.modules"
    :breakpoints="d.swiperOptions.breakpoints"
    class="mySwiper"
    @swiper="onSwiper"
  >
    <!-- 웹접근성 수정 -->
    <button
      class="swiper-button-prev"
      :class="{ 'swiper-button-disabled': d.mySwiper?.isBeginning }"
      @click="prevSlide"
    >
      <!--이전-->
    </button>
    <button
      class="swiper-button-next"
      :class="{ 'swiper-button-disabled': d.mySwiper?.isEnd }"
      @click="nextSlide"
    >
      <!--다음-->
    </button>
    <!--// 웹접근성 수정 -->
    <swiper-slide
      class="lecture-list__item"
      v-for="lecture in p.dataList"
      :key="lecture"
    >
      <div class="lecture-list__item-head">
        <div class="lecture-list__item-head-img">
          <img :src="`${lecture.logo_img}`" :alt="`${lecture.cp_name} 로고`" />
        </div>
        <button
          class="c-btn c-btn-sm c-btn-radius"
          @click="onCopyText(lecture.courseName)"
        >
          강의명 복사
        </button>
      </div>
      <div class="lecture-list__item-type">
        {{ lecture.grade }} · {{ lecture.subject }} · {{ lecture.courseType }}
      </div>
      <div class="lecture-list__item-title">
        <p>
          {{ lecture.courseName }}
        </p>
      </div>
      <div class="lecture-list__item-time">
        총 {{ lecture.number_of_sessions }}차시, {{ lecture.time_min }}분
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.c-btn {
  background-color: #f1f1f1;
  color: #535353;
}
</style>
