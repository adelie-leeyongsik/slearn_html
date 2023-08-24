<script setup>
import videoModal from "@pages/interest/videoModal";

const p = defineProps({
  dataList: { type: Array, default: [] },
});

const d = reactive({
  isVideo: false,
  videoList: [],
});

const goUrl = (value) => {
  console.log("goUrl ", value);
  if (!isEmpty(value.link)) {
    window.open(value.link);
  } else {
    d.isVideo = true;
    d.videoList = value.contents;
  }
};

const closeVideo = () => {
  d.isVideo = false;
};
</script>
<template>
  <videoModal
    :isShow="d.isVideo"
    :dataList="d.videoList"
    @closeVideo="closeVideo"
    v-if="d.isVideo"
  />
  <div class="c-card--inline c-card--inline-col3">
    <a
      href="javascript:void(0)"
      class="c-card c-card--border"
      v-for="(list, index) in p.dataList"
      @click="goUrl(list)"
    >
      <div class="c-card-img">
        <p>
          <img :src="`${list.thumbnail}`" :alt="`${list.tutorInfo}이미지`" />
        </p>
      </div>
      <div class="c-card-body">
        <!-- 웹접근성 a 태그 안에 strong 삭제 -->
        <div class="c-card-title c-card-title--sm c-card-title--1line">
          <p v-html="list.name"></p>
        </div>
        <div class="c-card-subtitle">
          <dl>
            <dt>{{ list.date }}</dt>
          </dl>
        </div>
      </div>
    </a>
  </div>
</template>
