<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { call } from "@/api";
import videoModal from "../videoModal";

const emit = defineEmits(["openVideo"]);

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
  isVideo: false,
  videoList: [],
  mySwiper: null,
});

const goUrl = (value) => {
  call({
    method: "post",
    id: "오픈강의 수강 이력 등록",
    endpoint: "/api/sq/my/course",
    data: {
      id: value.id,
      lectureType: value.lectureType,
      sex: value.sex,
      generation: value.generation,
    },
    onResponse({ data, status, message }) {
      if (status === 200) {
        if (!isEmpty(value.link)) {
          window.open(value.link);
        } else {
          d.isVideo = true;
          d.videoList = value.contents;
        }
      }
    },
  });
};

const closeVideo = () => {
  d.isVideo = false;
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
  <videoModal
    :isShow="d.isVideo"
    :dataList="d.videoList"
    @closeVideo="closeVideo"
    v-if="d.isVideo"
  />

  <Swiper
    :slidesPerView="3"
    :spaceBetween="12"
    :loop="true"
    :modules="d.modules"
    :breakpoints="d.swiperOptions.breakpoints"
    :navigation="true"
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

    <swiper-slide v-for="(data, idx) in p.dataList">
      <a
        href="javascript:void(0)"
        class="c-card c-card--border"
        @click="goUrl(data)"
      >
        <div class="c-card-img">
          <p>
            <img :src="`${data.thumbnail}`" :alt="`${data.tutorInfo}`" />
          </p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title"><p v-html="data.name"></p></div>
          <div class="c-card-foot">{{ data.date }}</div>
        </div>
      </a>
    </swiper-slide>
  </Swiper>
</template>
