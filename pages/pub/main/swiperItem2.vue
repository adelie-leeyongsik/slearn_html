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
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            "<a href=" +
            "#;" +
            ' class="' +
            className +
            '">' +
            (index + 1) +
            "페이지" +
            "</a>"
          );
        },
      },
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="20"
    :loop="false"
    :pagination="pagination"
    :modules="modules"
  >
    <swiper-slide>
      <div class="new-main-intro-swiper__image c-pc">
        <img src="@img/main/pic-main-intro-pc.png" alt="이미지" />
      </div>
      <div class="new-main-intro-swiper__image c-mo">
        <img src="@img/main/pic-main-intro-mo.png" alt="이미지" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="new-main-intro-swiper__image c-pc">
        <img src="@img/main/pic-main-intro-pc.png" alt="이미지" />
      </div>
      <div class="new-main-intro-swiper__image c-mo">
        <img src="@img/main/pic-main-intro-mo.png" alt="이미지" />
      </div>
    </swiper-slide>
  </swiper>
</template>
