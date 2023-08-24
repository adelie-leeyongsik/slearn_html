<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eduItem from "../mentor/_eduitem.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      edu01: false,
      edu02: false,
      edu03: false,
      edu04: false,
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">나의 관심사 설정</div>
            <div class="c-text-title-sub">
              <p>
                설정한 관심사에 따라 유튜브, 테드, 공연, 정책 정보 등의 추천
                내역이 달라져요, 관심있는 분야를 관리해보세요.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="interest">
              <div class="interest-item">
                <div class="interest-item__image">
                  <img src="@img/interest01.png" alt="" style="width: 98px" />
                </div>
                <div class="interest-item__title">
                  <strong
                    >서울런에서 추천 받고 싶은 강좌나<br />
                    문화, 전시, 공연 주제를 선택해 주세요.</strong
                  >(최대 2가지)
                </div>
                <div class="interest-item__text">
                  나의 관심사를 잘 모르겠다면 이미지로 골라보세요!
                </div>
                <div class="interest-item__button">
                  <button class="c-btn c-btn-blue">관심사 선택 Start!</button>
                </div>
                <div class="interest-item__chips">
                  <!-- 웹접근성 <a class="c-chips"></a> -> button 으로 변경 -->
                  <button class="c-chips active"># 인문</button>
                  <button class="c-chips active"># 사회</button>
                  <button class="c-chips"># 교육</button>
                  <button class="c-chips"># 공학</button>
                  <button class="c-chips"># 자연</button>
                  <br />
                  <button class="c-chips"># 의약</button>
                  <button class="c-chips"># 예체능</button>
                  <button class="c-chips"># 융복합</button>
                  <button class="c-chips"># 문화체험</button>
                  <button class="c-chips"># 전시</button>
                  <button class="c-chips"># 공연</button>
                </div>
              </div>
              <div class="interest-item">
                <div class="interest-item__image">
                  <img src="@img/interest02.png" alt="" style="width: 99px" />
                </div>
                <div class="interest-item__title">
                  <strong
                    >평소에 궁금했던 지원사업이나<br />
                    정책 정보와 관련된 키워드를 선택해 주세요.</strong
                  >(최대 2가지)
                </div>

                <div class="interest-item__chips">
                  <button class="c-chips"># 공간</button>
                  <button class="c-chips active"># 주거</button>
                  <button class="c-chips"># 교육</button>
                  <button class="c-chips"># 마음건강</button>
                  <button class="c-chips"># 신체건강</button>
                  <button class="c-chips"># 일자리</button>
                  <br />
                  <button class="c-chips"># 생활지원</button>
                  <button class="c-chips"># 진로</button>
                  <button class="c-chips"># 창업</button>
                  <button class="c-chips active"># 문화/예술</button>
                  <button class="c-chips"># 커뮤니티</button>
                  <button class="c-chips"># 대외활동</button>
                  <button class="c-chips"># 사회참여</button>
                </div>
              </div>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-danger">
                <strong>저장하기</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
