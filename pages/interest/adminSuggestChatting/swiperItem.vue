<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { call } from "@/api";

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
        window.open(value.link);
      }
    },
  });
};
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="12"
    :loop="true"
    :navigation="true"
    :modules="d.modules"
    :breakpoints="d.swiperOptions.breakpoints"
    class="mySwiper"
  >
    <swiper-slide v-for="(data, idx) in p.dataList">
      <a href="#" class="c-card c-card--border" @click="goUrl(data)">
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
  </swiper>
</template>
