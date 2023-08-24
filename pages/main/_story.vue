<script setup>
// import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper";

const router = useRouter();

const storyData = reactive({
  banner01: false,
  banner02: false,
  banner03: true,
  banner04: false,
  banner05: false,
  swiperOptions: {
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 12,
        loop: false,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 8,
        loop: false,
      },
      320: {
        slidesPerView: "auto",
        spaceBetween: 8,
        loop: false,
      },
    },
  },
});
</script>
<template>
  <div class="main__contents-head">
    <div class="main__contents-title">
      꿈을 만드는 교육,<br class="c-mo" />
      현실이 된 성공사례
    </div>
    <p class="main__contents-text">서울런 선배들의 꿈을 이룬 이야기</p>
    <button
      class="c-btn c-btn-lg c-btn-radius c-btn-outline--danger"
      @click="router.push('/introduction/seoulStory')"
    >
      더보기<i class="ico ico-arrow">더보기 이미지</i>
    </button>
  </div>
  <!-- <div class="main__contents-body">
    <div class="c-pc">
      <div class="main__story-banner">
        <div
          class="main__story-item"
          :class="{ active: storyData.banner01 === true }"
          @click="
            (storyData.banner01 = true),
              (storyData.banner02 = false),
              (storyData.banner03 = false),
              (storyData.banner04 = false),
              (storyData.banner05 = false)
          "
        >
          <div class="main__story-img">
            <img src="@img/@temp/4.jpg" alt="임시 이미지" />
          </div>
          <div class="main__story-box">
            <span class="c-badge c-badge-white">Shorts</span>
            <div class="main__story-title">
              꿈을 이룬<br />
              선배 이야기
            </div>
            <p>
              멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
              합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
              그냥 서울대 가버렸습니다.
            </p>
            <a href=""><i class="ico ico-circle-play">재생</i>재생</a>
          </div>
        </div>
        <div
          class="main__story-item"
          :class="{ active: storyData.banner02 === true }"
          @click="
            (storyData.banner02 = true),
              (storyData.banner01 = false),
              (storyData.banner03 = false),
              (storyData.banner04 = false),
              (storyData.banner05 = false)
          "
        >
          <div class="main__story-img">
            <img src="@img/@temp/4.jpg" alt="성공이야기 이미지1" />
          </div>
          <div class="main__story-box">
            <span class="c-badge c-badge-white">성공이야기</span>
            <div class="main__story-title">
              서울 3개 학교<br />
              합격 비결
            </div>
            <p>
              어떡하긴요! 우울해하고 불안해하고만 있으면 절대 안 돼요. 빡
              집중해서 자소서 완성시키고, 제출 이후에 다시 초심으로 돌아가서
              수능 준비 해야지요. 그치만.. 말이 쉽죠. 말만 쉽죠.
            </p>
            <a href=""
              ><i class="ico ico-circle-plus">자세히보기</i>자세히보기</a
            >
          </div>
        </div>
        <div
          class="main__story-item"
          :class="{ active: storyData.banner03 === true }"
          @click="
            (storyData.banner03 = true),
              (storyData.banner01 = false),
              (storyData.banner02 = false),
              (storyData.banner04 = false),
              (storyData.banner05 = false)
          "
        >
          <div class="main__story-img">
            <img src="@img/@temp/4.jpg" alt="성적 향상 프로필 이미지" />
          </div>
          <div class="main__story-box">
            <span class="c-badge c-badge-white">Youtube</span>
            <div class="main__story-title">
              모의고사 성적이<br />
              마구마구 올라요
            </div>
            <p>
              멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
              합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
              그냥 서울대 가버렸습니다.
            </p>
            <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
          </div>
        </div>
        <div
          class="main__story-item"
          :class="{ active: storyData.banner04 === true }"
          @click="
            (storyData.banner04 = true),
              (storyData.banner01 = false),
              (storyData.banner02 = false),
              (storyData.banner03 = false),
              (storyData.banner05 = false)
          "
        >
          <div class="main__story-img">
            <img src="@img/@temp/4.jpg" alt="성공이야기 이미지2" />
          </div>
          <div class="main__story-box">
            <span class="c-badge c-badge-white">성공이야기</span>
            <div class="main__story-title">
              서울대<br />
              입학예정이에요
            </div>
            <p>
              멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
              합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
              그냥 서울대 가버렸습니다.
            </p>
            <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
          </div>
        </div>
        <div
          class="main__story-item"
          :class="{ active: storyData.banner05 === true }"
          @click="
            (storyData.banner05 = true),
              (storyData.banner01 = false),
              (storyData.banner02 = false),
              (storyData.banner03 = false),
              (storyData.banner04 = false)
          "
        >
          <div class="main__story-img">
            <img src="@img/@temp/4.jpg" alt="진로설계 상담 이미지" />
          </div>
          <div class="main__story-box">
            <span class="c-badge c-badge-white">Youtube</span>
            <div class="main__story-title">
              진로설계 상담<br />
              받은 이야기
            </div>
            <p>
              멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
              합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
              그냥 서울대 가버렸습니다.
            </p>
            <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
          </div>
        </div>
      </div>
    </div>
    <div :class="uIsMobileDevice() ? 'c-mo' : 'c-tablet'">
      <swiper
        :slidesPerView="3"
        :spaceBetween="0"
        :loop="true"
        :modules="[Pagination, Navigation]"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="storyData.swiperOptions.breakpoints"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="main__story-item active">
            <div class="main__story-img">
              <img src="@img/@temp/1.jpg" alt="선배 이야기 이미지" />
            </div>
            <div class="main__story-box">
              <span class="c-badge c-badge-white">Shorts</span>
              <div class="main__story-title">
                꿈을 이룬<br />
                선배 이야기
              </div>
              <p>
                멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
                합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
                그냥 서울대 가버렸습니다.
              </p>
              <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main__story-item active">
            <div class="main__story-img">
              <img src="@img/@temp/2.jpg" alt="성공이야기 프로필 이미지" />
            </div>
            <div class="main__story-box">
              <span class="c-badge c-badge-white">성공이야기</span>
              <div class="main__story-title">
                서울 3개 학교<br />
                합격 비결
              </div>
              <p>
                어떡하긴요! 우울해하고 불안해하고만 있으면 절대 안 돼요. 빡
                집중해서 자소서 완성시키고, 제출 이후에 다시 초심으로 돌아가서
                수능 준비 해야지요. 그치만.. 말이 쉽죠. 말만 쉽죠.
              </p>
              <a href=""
                ><i class="ico ico-circle-plus">재생 이미지</i>자세히보기</a
              >
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main__story-item active">
            <div class="main__story-img">
              <img src="@img/@temp/3.jpg" alt="멘토 이미지" />
            </div>
            <div class="main__story-box">
              <span class="c-badge c-badge-white">Youtube</span>
              <div class="main__story-title">
                모의고사 성적이<br />
                마구마구 올라요
              </div>
              <p>
                멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
                합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
                그냥 서울대 가버렸습니다.
              </p>
              <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main__story-item active">
            <div class="main__story-img">
              <img src="@img/@temp/4.jpg" alt="성공이야기 프로필이미지 2" />
            </div>
            <div class="main__story-box">
              <span class="c-badge c-badge-white">성공이야기</span>
              <div class="main__story-title">
                서울대<br />
                입학예정이에요
              </div>
              <p>
                멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
                합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
                그냥 서울대 가버렸습니다.
              </p>
              <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main__story-item active">
            <div class="main__story-img">
              <img src="@img/@temp/5.jpg" alt="진로설계 상담 이미지" />
            </div>
            <div class="main__story-box">
              <span class="c-badge c-badge-white">Youtube</span>
              <div class="main__story-title">
                진로설계 상담<br />
                받은 이야기
              </div>
              <p>
                멘토 선생님의 전폭적인 지지와 1:1 전담 관리 때문에 서울대
                합격했습니다! 학습관리부터 모르는 것도 바로 질문 하고 공부하니까
                그냥 서울대 가버렸습니다.
              </p>
              <a href=""><i class="ico ico-circle-play">재생 이미지</i>재생</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div> -->
</template>
