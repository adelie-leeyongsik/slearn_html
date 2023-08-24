<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const { data } = defineProps({
  data: {
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
    :nodata="'등록된 공지사항이 없습니다'"
    v-if="isEmpty(data)"
  ></CommonNodata>
  <template v-else>
    <div class="c-pc c-tablet">
      <swiper
        :slidesPerView="3"
        :spaceBetween="12"
        :loop="true"
        :breakpoints="swiperOptions.breakpoints"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(item, itemIndex) in data"
          :key="`pc-latest-board-${itemIndex}`"
        >
          <div class="c-card c-card--type04 c-card--border">
            <div class="c-card-body">
              <nuxt-link :to="`/notice/${item.boardSeq}`">
                {{ setConverRemoveTag(item.description) }}
              </nuxt-link>
              <!--날짜 리스폰즈 데이터 없음-->
              <div class="c-card-foot">{{ item.regDtm }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="c-mo">
      <div class="c-card--inline">
        <div
          class="c-card c-card--type04 c-card--border"
          v-for="(item, itemIndex) in data"
          :key="`mobile-latest-board-${itemIndex}`"
        >
          <div class="c-card-body">
            <nuxt-link :to="`/notice/${item.boardSeq}`">
              {{ setConverRemoveTag(item.description) }}
            </nuxt-link>
            <!--날짜 리스폰즈 데이터 없음-->
            <div class="c-card-foot">{{ item.regDtm }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
