<script setup>
definePageMeta({
  layout: "introduction",
});
</script>
<script>
import swiperItem3 from "./swiperItem3";
import swiperItem4 from "./swiperItem4";
import swiperItem5 from "./dreamItem";
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="introduction">
    <PubTitle
      title="서울런 소개"
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
                  <a href="" class="introduction-dream__story-item">
                    <div class="introduction-dream__story-item-img">
                      <img src="@img/@temp/1.jpg" alt="" />
                    </div>
                  </a>
                  <a href="" class="introduction-dream__story-item">
                    <div class="introduction-dream__story-item-img">
                      <img src="@img/@temp/1.jpg" alt="" />
                    </div>
                  </a>
                  <a href="" class="introduction-dream__story-item">
                    <div class="introduction-dream__story-item-img">
                      <img src="@img/@temp/1.jpg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="c-tablet"><swiperItem3 /></div>
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
                <swiperItem4 />
              </div>
            </div>

            <div class="introduction-dream__section">
              <div class="introduction__title-lg c-text-center">
                수 많은 서울런<br class="c-mo" />
                선배들의<br class="c-tablet" />
                꿈을 이룬<br class="c-mo" />
                이야기를 살펴보시죠
              </div>
              <swiperItem5 />

              <PubPagination />
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
