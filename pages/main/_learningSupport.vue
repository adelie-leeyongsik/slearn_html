<script setup>
import { call } from "@/api";

const learn = reactive({
  siteList: [],
});

onMounted(() => {
  getLearnSite();
});

const getLearnSite = () => {
  call({
    method: "get",
    id: "메인 학습사이트 조회",
    endpoint: "/api/join/form",
    data: {},
    onResponse({ data, status }) {
      learn.siteList.push(...data.lrnPltTcdList);
      learn.siteList.push(...data.subLrnPltTcdList);
    },
  });
};
</script>
<template>
  <div class="main__contents-head">
    <div class="main__contents-title">
      학습자원 접근이 어려운<br class="c-mo" />
      청소년들에게 <br class="c-pc c-tablet" />
      다양한<br class="c-mo" />
      교과·비교과 학습콘텐츠를<br class="c-mo" />
      온라인으로 <br class="c-tablet" />
      제공하고 있어요
    </div>
    <p class="main__contents-text">유명 온라인강의를 무료로 만나보세요</p>
    <!-- <button class="c-btn c-btn-lg c-btn-radius c-btn-outline--danger">
      더보기<i class="ico ico-arrow">더보기 이미지</i>
    </button> -->
  </div>
  <div class="main__contents-body">
    <div class="main-link__wrap">
      <div class="main-link" v-for="item in learn.siteList">
        <a :href="`${item.pc_conn_url}`" target="_blank" title="새창으로 이동">
          <img
            :src="`${item.non_actv_log_img}`"
            :alt="`${item.cp_name} 로고`"
          />
        </a>
      </div>
    </div>
  </div>
  <!-- <div class="main__contents-head">
    <div class="main__contents-title">
      초등학습부터 직업 교육까지<br />
      다양한 온라인 학습을 맞춤 제공합니다.
    </div>
    <p class="main__contents-text">
      교과과정 및 비교과 과정 그리고 다양한 온라인 학습 컨텐츠까지 모두
      준비했습니다.
    </p>
  </div>
  <div class="main__contents-body">
    <div class="main__learningsupport-wrap">
      <dl class="c-box c-flex">
        <dt class="main__learningsupport-head">
          <a href="" class="main__learningsupport-head--img">
            <img src="@img/logo-home-learn.svg" alt="아이스크림 홈런 로고" />
          </a>
          <span class="main__learningsupport-head--copy">
            학습사이트는 6월에 변경 가능합니다.
          </span>
        </dt>
        <dd class="main__learningsupport-body">
          <div class="main__learningsupport-title">
            <div class="main__learningsupport-title--lg">
              아이스크림 홈런
              <span>(최근 수강시간 2023.01.03 15:44)</span>
            </div>
            <a class="c-btn--link" href="학습 중인 강의 더보기 이미지">
              <i class="ico ico-circle--arrow">더보기 이미지</i>학습 중인 강의
              더보기
            </a>
          </div>
          <div class="main__learningsupport-box">
            <dl>
              <dt>수강 기간</dt>
              <dd>2023.01.03 ~ 2023.05.30</dd>
            </dl>
            <dl>
              <dt>강사명</dt>
              <dd>최홍식 선생님</dd>
            </dl>
            <dl>
              <dt>강좌 유형</dt>
              <dd>국어</dd>
            </dl>
            <dl>
              <dt>학습 진도율</dt>
              <dd>
                총 240시간 / 36회차
                <span>진도율<strong>43</strong>%</span>
                <div class="c-progress">
                  <span class="c-progress-bar" style="width: 43%"></span>
                </div>
              </dd>
            </dl>
          </div>
        </dd>
      </dl>
    </div>
  </div> -->
</template>
