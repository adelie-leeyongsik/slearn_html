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
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: "1",
            spaceBetween: 20,
            loop: false,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
          },
          1025: {
            slidesPerView: "3",
            spaceBetween: 24,
            loop: false,
          },
        },
      },
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>
<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="24"
    :pagination="pagination"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
  >
    <swiper-slide>
      <a href="" class="new-main-ai-swiper-item">
        <img src="@img/@temp/5.jpg" alt="이미지" />
        <p>
          <strong>나를 찾는 여행 매혹적인 뇌과학</strong>
          <span>2023.06.20 ~ 2023.08.30</span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="new-main-ai-swiper-item">
        <img src="@img/@temp/5.jpg" alt="이미지" />
        <p>
          <strong>나를 찾는 여행 매혹적인 뇌과학</strong>
          <span>2023.06.20 ~ 2023.08.30</span>
        </p>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="new-main-ai-swiper-item">
        <img src="@img/@temp/5.jpg" alt="이미지" />
        <p>
          <strong>나를 찾는 여행 매혹적인 뇌과학</strong>
          <span>2023.06.20 ~ 2023.08.30</span>
        </p>
      </a>
    </swiper-slide>
  </swiper>
</template>
