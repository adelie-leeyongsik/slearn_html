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
    };
  },
};
</script>

<template>
  <div class="c-pc c-tablet">
    <swiper
      :slidesPerView="3"
      :spaceBetween="12"
      :loop="true"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="c-card c-card--type04 c-card--border">
          <div class="c-card-body">
            <a href="">
              서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
              신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
              확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
              장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
              무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
              인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
              필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
              등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소
              정확히 확인하고 등록 신청이 필요
            </a>
            <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="c-card c-card--type04 c-card--border">
          <div class="c-card-body">
            <a href="">
              서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
              신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
              확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
              장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
              무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
              인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
              필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
              등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소
              정확히 확인하고 등록 신청이 필요
            </a>
            <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="c-card c-card--type04 c-card--border">
          <div class="c-card-body">
            <a href="">
              서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
              신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
              확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
              장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
              무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
              인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
              필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
              등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소
              정확히 확인하고 등록 신청이 필요
            </a>
            <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="c-card c-card--type04 c-card--border">
          <div class="c-card-body">
            <a href="">
              서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
              신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
              확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
              장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
              무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
              인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
              필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
              등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소
              정확히 확인하고 등록 신청이 필요
            </a>
            <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="c-mo">
    <div class="c-card--inline">
      <div class="c-card c-card--type04 c-card--border">
        <div class="c-card-body">
          <a href="">
            서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
            신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
            확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
            장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
            무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
            인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은
            멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
            필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
            등록 신청이 필요
          </a>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </div>
      <div class="c-card c-card--type04 c-card--border">
        <div class="c-card-body">
          <a href="">
            서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
            신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
            확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
            장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
            무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
            인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은
            멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
            필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
            등록 신청이 필요
          </a>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </div>
      <div class="c-card c-card--type04 c-card--border">
        <div class="c-card-body">
          <a href="">
            서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
            신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
            확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
            장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
            무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
            인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은
            멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
            필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
            등록 신청이 필요
          </a>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </div>
      <div class="c-card c-card--type04 c-card--border">
        <div class="c-card-body">
          <a href="">
            서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록
            신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히
            확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두 무료! 일자
            장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도 인강도 모두
            무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은 멘토링도
            인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이 필요서울런은
            멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고 등록 신청이
            필요서울런은 멘토링도 인강도 모두 무료! 일자 장소 정확히 확인하고
            등록 신청이 필요
          </a>
          <div class="c-card-foot">2022.01.01 ~ 2022.12.31</div>
        </div>
      </div>
    </div>
  </div>
</template>
