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
      modules: [Pagination, Navigation, Autoplay, EffectCards],
    };
  },
};
</script>
<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="0"
    :loop="true"
    :centeredSlides="true"
    :loopAdditionalSlides="1"
  >
    <swiper-slide>
      <dl class="new-main-story-swiper-item">
        <dt class="new-main-story-swiper__video">
          <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
        </dt>
        <dd class="new-main-story-swiper__text">
          <a href="">
            <span class="c-badge c-badge-lg c-badge-danger">Shorts</span>
            <div class="c-text-title-md">진로설계 상담 후기 영상</div>
            <p>
              기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디 카페,
              도서관, 고등학생, 스터디 브이로그, 학교, 일상
            </p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="new-main-story-swiper-item">
        <dt class="new-main-story-swiper__video">
          <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
        </dt>
        <dd class="new-main-story-swiper__text">
          <a href="">
            <span class="c-badge c-badge-lg c-badge-danger">Youtube</span>
            <div class="c-text-title-md">전교 1등 플래너 쓰는 팁</div>
            <p>
              기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디 카페,
              도서관, 고등학생, 스터디 브이로그, 학교, 일상
            </p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="new-main-story-swiper-item">
        <dt class="new-main-story-swiper__video">
          <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
        </dt>
        <dd class="new-main-story-swiper__text">
          <a href="">
            <span class="c-badge c-badge-lg c-badge-danger">Youtube</span>
            <div class="c-text-title-md">
              고3 서울런으로 기말고사 준비하는 Vlog
            </div>
            <p>
              기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디 카페,
              도서관, 고등학생, 스터디 브이로그, 학교, 일상
            </p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
    <swiper-slide>
      <dl class="new-main-story-swiper-item">
        <dt class="new-main-story-swiper__video">
          <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
        </dt>
        <dd class="new-main-story-swiper__text">
          <a href="">
            <span class="c-badge c-badge-lg c-badge-danger">꿈이야기</span>
            <div class="c-text-title-md">23학년 서울대 합격 스토리</div>
            <p>
              기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디 카페,
              도서관, 고등학생, 스터디 브이로그, 학교, 일상
            </p>
          </a>
        </dd>
      </dl>
    </swiper-slide>
  </swiper>
</template>
