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
      },
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
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="24"
    :loop="true"
    :pagination="pagination"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
    class="mySwiper"
  >
    <swiper-slide>
      <a href="" class="c-card c-card--border">
        <div class="c-card-img">
          <!-- a -> p 변경 -->
          <p><img src="@img/@temp/3.jpg" alt="" /></p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <!-- a -> p 변경 -->
            <p>
              <strong> 서울런 멘토링으로 합격했어요! </strong>
            </p>
          </div>
          <div class="c-card-subtitle">
            <!-- a -> p 변경 -->
            <p>
              멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할 기회가 없었고
              성적, 멘탈 두 가지 멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할
              기회가 없었고 성적, 멘탈 두 가지
            </p>
          </div>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="c-card c-card--border">
        <div class="c-card-img">
          <p><img src="@img/@temp/3.jpg" alt="" /></p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <p>
              <strong> 서울런 멘토링으로 합격했어요! </strong>
            </p>
          </div>
          <div class="c-card-subtitle">
            <p>
              멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할 기회가 없었고
              성적, 멘탈 두 가지 멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할
              기회가 없었고 성적, 멘탈 두 가지
            </p>
          </div>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="c-card c-card--border">
        <div class="c-card-img">
          <p><img src="@img/@temp/3.jpg" alt="" /></p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <p>
              <strong> 서울런 멘토링으로 합격했어요! </strong>
            </p>
          </div>
          <div class="c-card-subtitle">
            <p>
              멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할 기회가 없었고
              성적, 멘탈 두 가지 멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할
              기회가 없었고 성적, 멘탈 두 가지
            </p>
          </div>
        </div>
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="" class="c-card c-card--border">
        <div class="c-card-img">
          <p><img src="@img/@temp/3.jpg" alt="" /></p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <p>
              <strong> 서울런 멘토링으로 합격했어요! </strong>
            </p>
          </div>
          <div class="c-card-subtitle">
            <p>
              멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할 기회가 없었고
              성적, 멘탈 두 가지 멘토링 아니었으면 이렇게 훌륭한 선생님들을 접할
              기회가 없었고 성적, 멘탈 두 가지
            </p>
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
