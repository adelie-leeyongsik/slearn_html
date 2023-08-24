<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Pagination, Navigation, Autoplay, EffectCoverflow],
    };
  },
};
</script>
<template>
  <swiper
    :loop="true"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 580,
      depth: 80,
      modifier: 1,
      slideShadows: false,
    }"
    :navigation="navigation"
    :modules="modules"
  >
    <swiper-slide class="bg1">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            온라인으로<br />
            확인해 보세요
          </div>
          <p>
            학습지원 대상자 여부를<br />
            확인하실 수 있어요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--link">
          <p>이름과 주민등록번호 입력 후 확인하세요</p>
          <span class="c-btn c-btn-lg">바로가기</span>
          <img src="@img/main/pic-main-join-img01.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide class="bg2">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            서류 제출하여<br />
            지원 받을 수도 있어요
          </div>
          <p>
            특별 지원대상자에게 필요한<br />
            대상별 증빙서류를 확인해 보세요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--img">
          <img src="@img/main/pic-main-join-img02.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide class="bg3">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            회원가입 방법을<br />
            자세히 알려 드려요
          </div>
          <p>
            회원가입 방법이 궁금하세요?<br />
            서울런이 쉽게 알려드릴게요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--img">
          <img src="@img/main/pic-main-join-img03.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide class="bg1">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            온라인으로<br />
            확인해 보세요
          </div>
          <p>
            학습지원 대상자 여부를<br />
            확인하실 수 있어요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--link">
          <p>이름과 주민등록번호 입력 후 확인하세요</p>
          <span class="c-btn c-btn-lg">바로가기</span>
          <img src="@img/main/pic-main-join-img01.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide class="bg2">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            서류 제출하여<br />
            지원 받을 수도 있어요
          </div>
          <p>
            특별 지원대상자에게 필요한<br />
            대상별 증빙서류를 확인해 보세요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--img">
          <img src="@img/main/pic-main-join-img02.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
    <swiper-slide class="bg3">
      <a href="" class="new-main-join__swiper-item">
        <div class="new-main-join__swiper-item--title">
          <div class="c-text-title-lg">
            회원가입 방법을<br />
            자세히 알려 드려요
          </div>
          <p>
            회원가입 방법이 궁금하세요?<br />
            서울런이 쉽게 알려드릴게요.
          </p>
        </div>
        <div class="new-main-join__swiper-item--img">
          <img src="@img/main/pic-main-join-img03.svg" alt="이미지" />
        </div>
      </a>
    </swiper-slide>
  </swiper>
  <button class="swiper-button-prev"><!--이전--></button>
  <button class="swiper-button-next"><!--다음--></button>
</template>
