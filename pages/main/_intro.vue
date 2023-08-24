<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const introData = reactive({
  userId: uGetLoginInfo("userid"),
  userNm: uGetLoginInfo("usernm"),
  swiperRef: null,
  swiperBtnDisplay: false,
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
});

const setSwiperRef = (swiper) => {
  introData.swiperRef = swiper;
};
const swiperBtn1 = () => {
  introData.swiperRef.autoplay.stop();
};
const swiperBtn2 = () => {
  introData.swiperRef.autoplay.start();
};
</script>
<template>
  <div class="main__contents-body">
    <div class="main__contents-SeoulLearn">
      <div class="main__slide-banner">
        <swiper
          :slidesPerView="1"
          :spaceBetween="0"
          :loop="false"
          :pagination="introData.pagination"
          :autoplay="{
            delay: 2400,
            disableOnInteraction: false,
          }"
          :modules="introData.modules"
          :speed="800"
          class="mySwiper"
          @swiper="setSwiperRef"
        >
          <swiper-slide>
            <dl class="main__slide-detail">
              <dt>
                <span class="c-badge c-badge-white">리뷰 이벤트</span>
                <p>
                  SNS에 멘토링 리뷰<br class="c-pc" />
                  100% 커피 무료!
                </p>
              </dt>
              <dd><img src="@img/pic-main-sub-img.png" alt="" /></dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl class="main__slide-detail">
              <dt>
                <span class="c-badge c-badge-white">리뷰 이벤트</span>
                <p>
                  SNS에 멘토링 리뷰<br class="c-pc" />
                  100% 커피 무료!
                </p>
              </dt>
              <dd><img src="@img/pic-main-sub-img.png" alt="" /></dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl class="main__slide-detail">
              <dt>
                <span class="c-badge c-badge-white">리뷰 이벤트</span>
                <p>
                  SNS에 멘토링 리뷰<br class="c-pc" />
                  100% 커피 무료!
                </p>
              </dt>
              <dd><img src="@img/pic-main-sub-img.png" alt="" /></dd>
            </dl>
          </swiper-slide>
          <div
            class="main__slide-control"
            :class="{ active: introData.swiperBtnDisplay === true }"
          >
            <button
              class="c-btn c-btn-slide c-btn-stop"
              @click="
                swiperBtn1(),
                  (introData.swiperBtnDisplay = !introData.swiperBtnDisplay)
              "
            >
              <i class="ico ico-stop"></i>
            </button>
            <button
              class="c-btn c-btn-slide c-btn-play"
              @click="
                swiperBtn2(),
                  (introData.swiperBtnDisplay = !introData.swiperBtnDisplay)
              "
            >
              <i class="ico ico-play"></i>
            </button>
          </div>
        </swiper>
      </div>
      <!-- <div class="main__login-wrap c-pc">
        <div class="main__login-box" v-if="!isEmpty(introData.userId)">
          <div class="main__login-profile">
            <button class="c-btn-profile">
              <span
                ><img
                  src="@img/@temp/1.jpg"
                  :alt="`${introData.userNm}님 프로필`"
              /></span>
            </button>
            <div class="main__login-profile--title">
              반가워요. <span>{{ introData.userNm }}</span
              >님
            </div>
            <ul class="main__login-info">
              <li>
                <a href="">
                  <span>이벤트</span>
                  <p>25</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span>쿠폰</span>
                  <p>10</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span>알림</span>
                  <p>30</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="main__login-link">
            <div class="main__login-title">나의 학습 바로가기</div>
            <ul class="c-btn-group">
              <li>
                <a href="">
                  <img src="@img/logo-ex.png" alt="밀크T 로고" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="@img/logo-ex.png" alt="밀크T 로고" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="@img/logo-ex.png" alt="밀크T 로고" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="@img/logo-ex.png" alt="밀크T 로고" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main__login-box" v-else>
          <div class="main__login-item">
            <i class="ico ico-lock">회원 자물쇠 이미지</i>
            <div class="main__login-title">
              로그인하고 회원님의<br />
              맞춤 정보를 확인해보세요
            </div>
            <button class="c-btn c-btn-block c-btn-danger">로그인</button>
          </div>
          <div class="main__login-item">
            <div class="main__login-title">나의 학습 바로가기</div>
            <button class="c-btn c-btn-block c-btn-gray">회원가입</button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
