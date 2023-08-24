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
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :pagination="pagination"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="c-card c-card--border">
        <div class="c-card-img">
          <button class="c-btn c-btn-play"><i class="ico ico-play"></i></button>
          <a href=""><img src="@img/@temp/3.jpg" alt="" /> </a>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <a href=""> 선배들이 이야기하는 서울런 </a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="c-card c-card--border">
        <div class="c-card-img">
          <button class="c-btn c-btn-play"><i class="ico ico-play"></i></button>
          <a href=""><img src="@img/@temp/3.jpg" alt="" /> </a>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <a href=""> 선배들이 이야기하는 서울런 </a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="c-card c-card--border">
        <div class="c-card-img">
          <button class="c-btn c-btn-play"><i class="ico ico-play"></i></button>
          <a href=""><img src="@img/@temp/3.jpg" alt="" /> </a>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <a href=""> 선배들이 이야기하는 서울런 </a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="c-card c-card--border">
        <div class="c-card-img">
          <button class="c-btn c-btn-play"><i class="ico ico-play"></i></button>
          <a href=""><img src="@img/@temp/3.jpg" alt="" /> </a>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <a href=""> 선배들이 이야기하는 서울런 </a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
