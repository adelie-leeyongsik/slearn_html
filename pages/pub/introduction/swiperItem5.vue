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
            spaceBetween: 12,
            loop: false,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 12,
            loop: false,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
          },
          1025: {
            slidesPerView: "4",
            spaceBetween: 24,
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
    :slidesPerView="4"
    :spaceBetween="24"
    :loop="true"
    :modules="modules"
    :breakpoints="swiperOptions.breakpoints"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="introduction-dream__review-item">
        <div class="introduction-dream__review-item-head head1">
          4등급
          <i class="ico ico-dot-arrow"></i>
          <strong>1등급</strong>
          <div class="introduction-dream__review-item-icon">
            <img src="@img/ic-school-logo01.png" alt="서울대학교 로고" />
          </div>
        </div>
        <div class="introduction-dream__review-item-body">
          <div class="introduction-dream__review-item-title">서울대학교</div>
          <p class="introduction-dream__review-item-text">
            성공사례 본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례
            본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례 본문 텍스트
            입니다
          </p>
          <div class="introduction-dream__review-item-foot">
            <p>서울대학교 23학번</p>
            <p>김*혜</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction-dream__review-item">
        <div class="introduction-dream__review-item-head head2">
          4등급
          <i class="ico ico-dot-arrow"></i>
          <strong>1등급</strong>
          <div class="introduction-dream__review-item-icon">
            <img src="@img/ic-school-logo02.png" alt="고려대학교 로고" />
          </div>
        </div>
        <div class="introduction-dream__review-item-body">
          <div class="introduction-dream__review-item-title">고려대학교</div>
          <p class="introduction-dream__review-item-text">
            성공사례 본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례
            본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례 본문 텍스트
            입니다
          </p>
          <div class="introduction-dream__review-item-foot">
            <p>고려대학교 23학번</p>
            <p>김*혜</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction-dream__review-item">
        <div class="introduction-dream__review-item-head head1">
          4등급
          <i class="ico ico-dot-arrow"></i>
          <strong>1등급</strong>
          <div class="introduction-dream__review-item-icon">
            <img src="@img/ic-school-logo01.png" alt="서울대학교 로고" />
          </div>
        </div>
        <div class="introduction-dream__review-item-body">
          <div class="introduction-dream__review-item-title">서울대학교</div>
          <p class="introduction-dream__review-item-text">
            성공사례 본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례
            본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례 본문 텍스트
            입니다
          </p>
          <div class="introduction-dream__review-item-foot">
            <p>서울대학교 23학번</p>
            <p>김*혜</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="introduction-dream__review-item">
        <div class="introduction-dream__review-item-head head3">
          4등급
          <i class="ico ico-dot-arrow"></i>
          <strong>1등급</strong>
          <div class="introduction-dream__review-item-icon">
            <img src="@img/ic-school-logo03.png" alt="성균관대학교 로고" />
          </div>
        </div>
        <div class="introduction-dream__review-item-body">
          <div class="introduction-dream__review-item-title">성균관대학교</div>
          <p class="introduction-dream__review-item-text">
            성공사례 본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례
            본문 텍스트 입니다 성공사례 본문 텍스트 입니다 성공사례 본문 텍스트
            입니다
          </p>
          <div class="introduction-dream__review-item-foot">
            <p>성균관대학교 23학번</p>
            <p>김*혜</p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
