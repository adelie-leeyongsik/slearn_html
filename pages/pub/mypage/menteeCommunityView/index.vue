<script setup>
import communityViewItem from "./_communityViewItem.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<template>
  <div class="mypage">
    <div class="mypage-mentor">
      <div class="mypage-mentor__community">
        <div class="mypage-mentor__community-view">
          <div class="mypage__body">
            <div class="mypage-mentor__community-view-title">
              <p>
                멘토링 OT교육_서울시 2023학년 고입 설명회 특목고, 마이스터고,
                특성화고 01
              </p>
              <div class="c-badge">온라인</div>
            </div>
            <div class="mypage-mentor__community-view-contents">
              <img
                style="margin: 0 auto; display: block"
                src="@img/@temp/1.jpg"
                alt=""
              />
              <p>
                그동안 공부를 해도 회화 실력은 제자리였다면, 아직 회화에 맞는
                공부 방법을 알지 못하기 때문입니다. 클래스에서 회화에 딱 맞는
                방법, 상세하게 알려드릴게요! 당시 저도 많은 분과 마찬가지로
                다양한 시도만 해볼 뿐 이를 제대로 지속하지는 못했습니다. 결국
                항상 비슷한 회화 수준을 맴돌아 답답하기만 했죠. 그러다 대학교 때
                영어 회화에 정말 효과적인 5단계의 방법을 발견했어요. 그대로
                공부를 시작하니 이후 실력이 눈에 띄게 성장했고, 늘 제자리이던
                영어 회화 실력을 유창한 수준까지 끌어올릴 수 있었습니다.
              </p>
              <dl class="mypage-mentor__community-view-info">
                <dt>교육 정보</dt>
                <dd>교육 인원 100명 · 교육 시간 50분</dd>
              </dl>
              <dl class="mypage-mentor__community-view-info">
                <dt>수료 기준</dt>
                <dd>진도율 100% · 평가 50% · 과제 10% · 기타 5%</dd>
              </dl>
            </div>
          </div>
          <div class="c-btn-group">
            <button class="c-btn c-btn-lg c-btn-darkgray">목록으로</button>
            <button class="c-btn c-btn-lg">신청하기</button>
          </div>
          <div class="mypage-mentor__community-view-lecture">
            <div class="mypage-mentor__community-view-lecture-title">
              연관 강의
            </div>
            <communityViewItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
