<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      currentTab: 0,
      tabList: [
        "학습분석 리포트",
        "수강이력",
        "관심추천 내역",
        "추천강의",
        "나의관심사설정",
      ],
    };
  },
};
</script>
<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          학습현황<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents c-modals__contents-tab">
          <div class="c-tab-nav">
            <ul>
              <li
                v-for="(tab, index) in tabList"
                :key="index"
                :class="{ active: currentTab === index }"
              >
                <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
              </li>
            </ul>
          </div>
          <div class="c-tab-contents__wrap">
            <div v-show="currentTab == 0" class="c-tab-contents">1</div>
            <div v-show="currentTab == 1" class="c-tab-contents">2</div>
            <div v-show="currentTab == 2" class="c-tab-contents">3</div>
            <div v-show="currentTab == 3" class="c-tab-contents"></div>
            <div v-show="currentTab == 4" class="c-tab-contents"></div>
            <div v-show="currentTab == 5" class="c-tab-contents"></div>
            <div v-show="currentTab == 6" class="c-tab-contents"></div>
            <div v-show="currentTab == 7" class="c-tab-contents"></div>
            <div v-show="currentTab == 8" class="c-tab-contents"></div>
            <div v-show="currentTab == 9" class="c-tab-contents"></div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
