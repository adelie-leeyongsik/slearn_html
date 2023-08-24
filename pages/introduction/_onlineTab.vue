<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";
const modal = useModalStore();
const route = useRoute();

const onlineData = reactive({
  openLecture: [
    {
      name: "서울시립미술관 (미술교육)",
      url: "https://sema.seoul.go.kr/",
      desc: "서울시립미술관 페이지 새창으로 이동",
    },
    {
      name: "평생학습포털 (직무교육, 자격증)",
      url: "https://sll.seoul.go.kr/",
      desc: "평생학습포털 페이지 새창으로 이동",
    },
    {
      name: "청년몽땅정보통 (서울청년정책네트워크)",
      url: "https://youth.seoul.go.kr/",
      desc: "청년몽땅정보통 페이지 새창으로 이동",
    },
    {
      name: "K-MOOC (교육부 공개강좌)",
      url: "http://www.kmooc.kr/",
      desc: "K-MOOC 페이지 새창으로 이동",
    },
    {
      name: "KOPIS (공연예술 통합전산망)",
      url: "https://www.kopis.or.kr/",
      desc: "KOPIS 페이지 새창으로 이동",
    },
    {
      name: "디지털집현전 (전 국민지식 플랫폼)",
      url: "https://k-knowledge.kr/",
      desc: "디지털집현전 페이지 새창으로 이동",
    },
  ],
});

const openPage = (url) => {
  if (!url) {
    modal.alert("알림", "준비중입니다.");
    return;
  }
  window.open(url, "_blank");
};
</script>

<template>
  <div class="introduction-online">
    <div class="introduction-online__head">
      <div class="c-text-title-lg">서비스소개</div>
      <p>
        서울런에서는 학습자원 접근이 어려운 청소년들에게 다양한 교과.비교과,
        공공연계 학습콘텐츠를 온라인으로 제공하고 있습니다
      </p>
    </div>
    <div class="introduction-online__body">
      <div class="introduction-online__info c-bg-blue">
        <div class="c-text-title-lg">
          <span class="c-badge c-badge-black">서울런 회원만 가능!</span>
          초·중·고등 대상별 학습사이트 선택(최대 3개), 강의 콘텐츠 무제한 이용
        </div>
        <dl>
          <dt>
            <span class="c-badge c-badge-lg c-badge-blue">교과</span>
          </dt>
          <dd>
            <ul>
              <li>· 고품질의 우수 교과 강좌 콘텐츠 제공(중·고등)</li>
              <li>
                · 학습 흥미 유발을 위한 게임·유명 만화 연계 콘텐츠 제공(초등)<br />
                ※ 중·고등 검정고시 콘텐츠 제공
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>
            <span class="c-badge c-badge-lg c-badge-blue">비교과</span>
          </dt>
          <dd>
            <ul>
              <li>· 어학(영어, 중국어, 일본어, 특수외국어, TOPIK 등)</li>
              <li>
                · 자격증(전기기사 등 기술자격증, 전산세무 등 회계자격증,<br />
                금융자격증, 한국사 등 기타자격시험), 독서(오디어북)
              </li>
              <li>· 공무원, 취업/인적성 강의/편입영어·수학</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="introduction-online__info c-bg-green">
        <div class="c-text-title-lg">
          공공ㆍ유관기관 및 서울런에서 개발한 동영상 학습 콘텐츠를 통합 제공
        </div>
        <dl class="c-align-center">
          <dt>
            <span class="c-badge c-badge-lg c-badge-green">오픈강좌</span>
          </dt>
          <dd>언제, 어디서나 원하는 온라인 콘텐츠를 쉽고 편리하게 이용</dd>
        </dl>
        <ul class="introduction-online__link">
          <li v-for="item in onlineData.openLecture">
            <button
              class="c-btn c-btn-green w-100"
              @click="openPage(item.url)"
              :title="item.desc"
            >
              {{ item.name }}<i class="ico ico-arrow">화살표 이미지</i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
