<script setup>
const emit = defineEmits(["closeVideo"]);

const p = defineProps({
  isShow: { type: Boolean, default: false },
  dataList: { type: Array, default: [] },
});

const d = reactive({
  title: "",
  link: "",
});

watch(
  () => p.dataList,
  (newData) => {
    newData.forEach((f) => {
      if (f.ctntLinkUrl.indexOf("www.youtube.com/embed") != -1) {
        let code = "";
        if (f.ctntLinkUrl.indexOf("?list") != -1) {
          code = f.ctntLinkUrl.substring(
            f.ctntLinkUrl.indexOf("embed/") + 6,
            f.ctntLinkUrl.indexOf("?list")
          );
        } else {
          code = f.ctntLinkUrl.substring(f.ctntLinkUrl.indexOf("embed/") + 6);
        }
        f.thumbnail = "https://img.youtube.com/vi/" + code + "/0.jpg";
      }
    });

    d.title = newData[0].ctntName;
    d.link = newData[0].ctntLinkUrl;
  },
  { immediate: true }
);

const onClickVideo = (data) => {
  d.title = data.ctntName;
  d.link = data.ctntLinkUrl;
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals c-modals--video" v-if="p.isShow">
      <div class="c-modals__bg"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          <button
            class="c-modals__head-close"
            type="submit"
            @click="emit('closeVideo')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__video-img">
          <!-- temp -->
          <iframe
            width="100%"
            :src="`${d.link}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <!-- //temp -->
        </div>
        <div class="c-modals__contents">
          <div class="c-form-label">강의 안내</div>
          <div class="c-modals__title c-text-left" v-html="d.title"></div>

          <!-- 강의 목록 없을시 삭제 -->
          <template v-if="p.dataList.length > 0">
            <div class="c-form-label title">강의 목록</div>
            <div class="c-modals__video-list">
              <div class="c-modals__video-list-item" v-for="list in p.dataList">
                <div class="c-modals__video-list-item-img">
                  <!-- temp -->
                  <!-- 230719 수정 이미지 추가 -->
                  <img :src="`${list.thumbnail}`" alt="강의이미지" />
                  <!-- //temp -->
                </div>
                <div class="c-modals__video-list-item-text">
                  <a
                    href="javascript:void(0)"
                    @click="onClickVideo(list)"
                    v-html="list.ctntName"
                  ></a>
                  <span>{{ list.duration }}</span>
                </div>
              </div>
            </div>
          </template>
          <!-- //강의 목록 없을시 삭제 -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-table {
  margin-top: 3rem;
  thead {
    tr {
      border: 0;
      border-radius: 0.8rem;
      th {
        color: #535353;
        background-color: #f4f5f9;
      }
    }
  }
  tbody {
    color: $black;
    strong {
      color: #ccc;
    }
  }
}
</style>
