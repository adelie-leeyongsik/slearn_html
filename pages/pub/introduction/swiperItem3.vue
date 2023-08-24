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
      <a href="" class="introduction-dream__story-item">
        <div class="introduction-dream__story-item-img">
          <img src="@img/@temp/1.jpg" alt="" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__story-item">
        <div class="introduction-dream__story-item-img">
          <img src="@img/@temp/1.jpg" alt="" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="introduction-dream__story-item">
        <div class="introduction-dream__story-item-img">
          <img src="@img/@temp/1.jpg" alt="" />
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
