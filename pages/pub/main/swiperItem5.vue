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
            slidesPerView: "2",
            spaceBetween: 16,
            loop: false,
          },
          1024: {
            slidesPerView: "2",
            spaceBetween: 16,
            loop: false,
          },
          1025: {
            slidesPerView: "2",
            spaceBetween: 16,
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
    :slidesPerView="2"
    :spaceBetween="16"
    :pagination="pagination"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
  >
    <swiper-slide>
      <dl class="c-card c-card--swiper">
        <dt>
          <a href="">
            <img src="@img/@temp/1.jpg" alt="이미지" />
          </a>
        </dt>
        <dd>
          <a href="">
            <strong class="c-text-title-md">
              나를 찾는 여행 매혹적인 뇌과학 나를 찾는 여행 매혹적인 뇌과학
            </strong>
            <p>교육과정 요약 내용이 들어갑니다.</p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="c-card c-card--swiper">
        <dt>
          <a href="">
            <img src="@img/@temp/1.jpg" alt="이미지" />
          </a>
        </dt>
        <dd>
          <a href="">
            <strong class="c-text-title-md">
              나를 찾는 여행 매혹적인 뇌과학 나를 찾는 여행 매혹적인 뇌과학
            </strong>
            <p>교육과정 요약 내용이 들어갑니다.</p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="c-card c-card--swiper">
        <dt>
          <a href="">
            <img src="@img/@temp/1.jpg" alt="이미지" />
          </a>
        </dt>
        <dd>
          <a href="">
            <strong class="c-text-title-md">
              나를 찾는 여행 매혹적인 뇌과학 나를 찾는 여행 매혹적인 뇌과학
            </strong>
            <p>교육과정 요약 내용이 들어갑니다.</p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="c-card c-card--swiper">
        <dt>
          <a href="">
            <img src="@img/@temp/1.jpg" alt="이미지" />
          </a>
        </dt>
        <dd>
          <a href="">
            <strong class="c-text-title-md">
              나를 찾는 여행 매혹적인 뇌과학 나를 찾는 여행 매혹적인 뇌과학
            </strong>
            <p>교육과정 요약 내용이 들어갑니다.</p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
  </swiper>
</template>
