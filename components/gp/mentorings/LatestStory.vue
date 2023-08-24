<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const { rows } = defineProps({
  pageNumber: {
    type: Number,
  },
  totalPages: {
    type: Number,
  },
  totalRecords: {
    type: Number,
  },
  rows: {
    type: Array,
    default: () => [],
  },
});

const swiperOptions = reactive({
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: false,
    },
    320: {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: false,
    },
  },
});
</script>
<template>
  <CommonNodata
    :nodata="'등록된 이야기가 없습니다'"
    v-if="isEmpty(rows)"
  ></CommonNodata>
  <template v-else>
    <swiper
      :slidesPerView="4"
      :spaceBetween="24"
      :loop="true"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, itemIndex) in rows"
        :key="`latest-story-slide-${itemIndex}`"
      >
        <nuxt-link
          :to="`/mentorings/detail?seq=${item.boardSeq}`"
          class="c-card c-card--border"
        >
          <div class="c-card-img">
            <p>
              <img :src="item.imagePath" :alt="item.title" />
            </p>
          </div>
          <div class="c-card-body">
            <div class="c-card-title">
              <p>
                <strong> {{ item.title }} </strong>
              </p>
            </div>
            <div class="c-card-subtitle">
              <p>
                {{ setConverRemoveTag(item.description) }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </template>
</template>
