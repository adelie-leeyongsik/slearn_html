<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useModalStore } from "@/store";
const modal = useModalStore();

const p = defineProps({
  dataList: { type: Object, default: [] },
});

const r = useRoute();

const d = reactive({
  type: r.query.type,
  swiperOptions: {
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 12,
        loop: false,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
        loop: false,
      },
    },
  },
  modules: [Pagination, Navigation],
  mySwiper: null,
});
const goUrl = (url) => {
  window.open(url);
};
const copyToClipboard = async (data) => {
  await window.navigator.clipboard.writeText(data).then(() => {
    modal.alert("알림", "복사되었습니다.");
  });
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

    <swiper-slide class="lecture-list__item" v-for="(data, idx) in p.dataList">
      <div class="lecture-list__item-head">
        <div class="lecture-list__item-head-img">
          <img
            :src="`${data.nonActvLogoImgFilePath}`"
            @click="goUrl(data.url)"
            alt="로고"
          />
        </div>
      </div>
      <div class="lecture-list__item-title">
        <p>
          <a :href="`${data.url}`" target="_blank">
            {{ data.courseName }}
          </a>
        </p>
      </div>
      <div class="lecture-list__item-type">
        {{ data.grade }}과정
        {{ data.subject ? ` · ${data.subject}` : "" }}
        {{ data.courseType ? ` · ${data.courseType}` : "" }}
      </div>
      <div class="lecture-list__item-time">
        <p>
          {{
            data.number_of_sessions ? `총 ${data.number_of_sessions}차시` : ""
          }}
          {{
            data.number_of_sessions && data.time_min
              ? `, ${data.number_of_sessions * data.time_min}분`
              : ""
          }}
          {{
            !data.number_of_sessions && data.time_min
              ? ` ${data.time_min}분`
              : ""
          }}
        </p>
        <button
          class="c-btn c-btn-sm c-btn-radius c-btn-outline"
          @click="copyToClipboard(data.courseName)"
        >
          <i class="ico ico-copy">복사 이미지</i>강의명 복사
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>
