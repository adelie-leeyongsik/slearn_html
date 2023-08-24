<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const srcLoadProc = (item, tagName, cb = () => {}) => {
    return new Promise((resolve) => {
      if (!!!item) {
        return resolve();
      }
      if (tagName === "video") {
        if (item.readyState < 1) {
          item.onloadedmetadata = () => {
            cb();
            resolve(item.src);
          };
          item.onerror = () => {
            resolve(item.src);
          };
        } else {
          cb();
          resolve(item.src);
        }
      } else {
        if (!item.complete) {
          console.log("a");
          item.onload = () => {
            cb();
            resolve(item.src);
          };
          item.onerror = () => {
            resolve(item.src);
          };
        } else {
          cb();
          console.log("a");
          resolve(item.src);
        }
      }
    });
  };

  let pms = [];
  document.querySelectorAll(".img-wrap img").forEach((item) => {
    pms.push(
      srcLoadProc(item, "img", () => {
        console.log("good");
      })
    );
  });

  Promise.all(pms).then((results) => {
    console.log("All good - ", results);
  });
});
</script>

<template>
  <div class="l-row">
    <p class="title">이미지 <span class="title__sub">로드</span> 테스트</p>
    <!-- @NOTE 이미지 경로: 템플릿 내부 -->
    <img src="@img/logo.png" alt="" />
    <div class="f-row img-wrap">
      <div v-for="index in 12" class="f-col--fit img-item">
        <img :src="`/images/@temp/${index}.jpg`" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-item {
  width: 25%;
}

.title {
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 30px;
  // @NOTE 이미지 경로: 로컬 스타일에서 사용
  background-image: url(@img/logo.png);
  &__sub {
    color: teal;
  }
  @include tablet {
    color: gray;
    &__sub {
      content: "로컬 태블릿";
      color: moccasin;
    }
  }
  @include mobile {
    color: gray;
    &__sub {
      content: "로컬 모바일";
      color: moccasin;
    }
  }
}
</style>
