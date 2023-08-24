<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination as SwiperPagination, Navigation } from "swiper";
import { call } from "@/api";

const vm = getCurrentInstance();
definePageMeta({
  layout: "introduction",
});
const storyData = reactive({
  index: 0,
  learnVideo: [],
  storyVideo: [],
  storyData: {},
  modules: [SwiperPagination, Navigation],
  option1: {
    swiperOptions: {
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: false,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: false,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: false,
        },
      },
    },
  },
  option2: {
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
          slidesPerView: "3",
          spaceBetween: 24,
          loop: false,
        },
      },
    },
  },
  mySwiper1: null,
  mySwiper2: null,
});

onMounted(() => {
  getLearnVideoData();
  getStoryVideoData();
  getStoryData();
});
// 페이징
const changedIndex = (index) => {
  storyData.index = index;
  console.log(storyData);
  getStoryData();
};
const getStoryData = async () => {
  await call({
    id: "성공스토리 조회",
    endpoint: `/api/sq/intro/success/story`,
    data: {
      pageSize: 8,
      pageNumber: storyData.index,
      order: "DESC",
      sort: "successStorySeq",
    },
    onResponse({ data }) {
      console.log("스토리>", data);
      storyData.storyData = data;
      return true;
      9;
    },
  });
};

const getLearnVideoData = async () => {
  await call({
    id: "함께 배우는 방법 동영상 조회",
    endpoint: `/api/sq/intro/IntroShorts`,
    onResponse({ data }) {
      data.forEach((e) => {
        storyData.learnVideo.push({ src: e, audioStatus: false });
      });
      return true;
    },
  });
};

const getStoryVideoData = async () => {
  await call({
    id: "함께 배우는 방법 동영상 조회",
    endpoint: `/api/sq/intro/shorts`,
    onResponse({ data }) {
      data.forEach((e) => {
        storyData.storyVideo.push({ src: e, audioStatus: false });
      });
      return true;
    },
  });
};

const playVideo = (idx, type) => {
  console.log(idx, type);
  for (let i = 0; i < storyData[type].length; i++) {
    if (idx === i) {
      storyData[type][i].audioStatus = true;
      vm.refs[`${type}Player${i}`][0].play();
    } else {
      storyData[type][i].audioStatus = false;
      vm.refs[`${type}Player${i}`][0].pause();
    }
  }
};

const onSwiper1 = (val) => {
  storyData.mySwiper1 = val;
};

const prevSlide1 = () => {
  if (storyData.mySwiper1.isBeginning) {
    return;
  }

  storyData.mySwiper1.slideTo(storyData.mySwiper1.activeIndex - 1);
};

const nextSlide1 = () => {
  if (storyData.mySwiper.isEnd) {
    return;
  }
  storyData.mySwiper1.slideTo(storyData.mySwiper1.activeIndex + 1);
};

const onSwiper2 = (val) => {
  storyData.mySwiper2 = val;
};

const prevSlide2 = () => {
  if (storyData.mySwiper2.isBeginning) {
    return;
  }

  storyData.mySwiper2.slideTo(storyData.mySwiper2.activeIndex - 1);
};

const nextSlide2 = () => {
  if (storyData.mySwiper2.isEnd) {
    return;
  }
  storyData.mySwiper2.slideTo(storyData.mySwiper2.activeIndex + 1);
};
</script>

<template>
  <div class="introduction">
    <PubTitle
      title="서울런 이야기"
      sub="꿈에 오르는 한걸음, 서울런이다!
서울런이 꿈과 희망을 응원합니다!"
    />
    <div class="introduction__wrap">
      <div class="introduction-dream--bg">
        <div class="introduction-dream__inner">
          <div class="introduction-dream">
            <div class="introduction-dream__section">
              <div class="introduction__title-lg c-text-center">
                서울런과 함께 꾼 꿈이<br />
                현실이 된 스토리
              </div>
              <p class="c-text-center">
                서울런과 함께 한 선배들이<br />
                그 꿈을 이룬 이야기를 들려드릴게요
              </p>
              <div class="c-pc">
                <div class="introduction-dream__story">
                  <a
                    href="#"
                    class="introduction-dream__story-item"
                    v-for="(item, idx) in storyData.storyVideo"
                    @click.prevent="playVideo(idx, 'storyVideo')"
                  >
                    <video
                      :ref="`storyVideoPlayer${idx}`"
                      :src="item.src"
                      :alt="`성공이야기 영상`"
                      style="width: -webkit-fill-available"
                      type="video/mp4"
                      :controls="item.audioStatus"
                    ></video>
                  </a>
                </div>
              </div>
              <div class="c-tablet">
                <swiper
                  slidesPerView="auto"
                  :spaceBetween="16"
                  :loop="true"
                  :modules="storyData.modules"
                  :breakpoints="storyData.option1.swiperOptions.breakpoints"
                  class="mySwiper"
                  @swiper="onSwiper1"
                >
                  <!-- 웹접근성 수정 -->
                  <button
                    class="swiper-button-prev"
                    :class="{
                      'swiper-button-disabled':
                        storyData.mySwiper1?.isBeginning,
                    }"
                    @click="prevSlide1"
                  >
                    <!--이전-->
                  </button>
                  <button
                    class="swiper-button-next"
                    :class="{
                      'swiper-button-disabled': storyData.mySwiper1?.isEnd,
                    }"
                    @click="nextSlide1"
                  >
                    <!--다음-->
                  </button>
                  <!--// 웹접근성 수정 -->
                  <swiper-slide v-for="(item, idx) in storyData.storyVideo">
                    <video
                      :ref="`storyVideoPlayer${idx}`"
                      style="width: -webkit-fill-available"
                      :src="item.src"
                      :alt="`성공이야기 영상`"
                      type="video/mp4"
                      :controls="item.audioStatus"
                      @click="playVideo(idx, 'storyVideo')"
                    ></video>
                  </swiper-slide>
                </swiper>
              </div>
            </div>

            <div class="introduction-dream__section">
              <div class="introduction__title-lg c-text-center">
                꿈에 오르는 한걸음,<br class="c-mo" />
                서울런!
              </div>
              <p class="c-text-center">
                공부는 하고 싶은데 방법이 없었던 학생들에게<br class="c-mo" />
                이제 서울런이 함께 합니다.
              </p>
              <div class="introduction-dream__step">
                <swiper
                  :slidesPerView="3"
                  :spaceBetween="24"
                  :loop="true"
                  :modules="storyData.modules"
                  :breakpoints="storyData.option2.swiperOptions.breakpoints"
                  class="mySwiper"
                  @swiper="onSwiper2"
                >
                  <swiper-slide v-for="(item, idx) in storyData.learnVideo">
                    <a
                      href="javascript:void(0)"
                      class="introduction-dream__step-item"
                    >
                      <div class="introduction-dream__step-item-img">
                        <span
                          class="c-btn c-btn--play"
                          v-show="!item.audioStatus"
                          @click="playVideo(idx, 'learnVideo')"
                        >
                          <i class="ico ico-play">재생 이미지</i>
                        </span>
                        <video
                          :ref="`learnVideoPlayer${idx}`"
                          style="width: -webkit-fill-available"
                          :src="item.src"
                          :alt="`공부 방법 영상`"
                          type="video/mp4"
                          :controls="item.audioStatus"
                        ></video>
                      </div>
                      <p>
                        <span>
                          서울런 대입설명회&진로공감콘서트 서울런
                          대입설명회&진로공감콘서트
                        </span>
                      </p>
                    </a>
                  </swiper-slide>
                </swiper>
                <!-- 웹접근성 수정 -->
                <button
                  class="swiper-button-prev"
                  :class="{
                    'swiper-button-disabled': storyData.mySwiper2?.isBeginning,
                  }"
                  @click="prevSlide2"
                >
                  <!--이전-->
                </button>
                <button
                  class="swiper-button-next"
                  :class="{
                    'swiper-button-disabled': storyData.mySwiper2?.isEnd,
                  }"
                  @click="nextSlide2"
                >
                  <!--다음-->
                </button>
                <!--// 웹접근성 수정 -->
              </div>
            </div>

            <div class="introduction-dream__section">
              <div class="introduction__title-lg c-text-center">
                수 많은 서울런<br class="c-mo" />
                선배들의<br class="c-tablet" />
                꿈을 이룬<br class="c-mo" />
                이야기를 살펴보시죠
              </div>
              <div class="introduction-dream__example">
                <a
                  :href="`/story/${item.successStorySeq}`"
                  class="introduction-dream__example-item"
                  v-for="item in storyData.storyData.rows"
                >
                  <div class="introduction-dream__example-item-body">
                    <div class="introduction-dream__example-item-title">
                      {{ item.title }}
                    </div>
                    <p>
                      {{ item.description.replace(/<[^>]+>/g, "") }}
                    </p>
                    <div class="introduction-dream__example-item-foot">
                      {{ uConvertDate(item.regDtm, "YYYY.MM.DD") }}
                    </div>
                  </div>
                </a>
              </div>
              <Pagination
                v-if="storyData.storyData?.rows?.length > 0"
                :pageNumber="storyData.index"
                :totalRecords="storyData.storyData.totalRecords"
                :totalPages="storyData.storyData.totalPages"
                @changedPageIndex="changedIndex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduction-dream__story-item {
  animation: shake 3s;
  animation-iteration-count: infinite;
  transition: all 5s ease-in-out;
}
.introduction-dream__story-item:nth-child(2) {
  animation: shake2 5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 1rem) rotate(0deg);
  }

  50% {
    transform: translate(0px, 0) rotate(0deg);
  }

  100% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
}

@keyframes shake2 {
  0% {
    transform: translate(0px, 0) rotate(0deg);
  }
  25% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
  50% {
    transform: translate(0px, 0) rotate(0deg);
  }
  75% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
  100% {
    transform: translate(0px, 0) rotate(0deg);
  }
}
</style>
