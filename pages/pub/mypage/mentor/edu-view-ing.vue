<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eduItem from "./_eduitem.vue";
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
    };
  },
};
</script>

<template>
  <div class="mypage">
    <PubBreadCrumbs />
    <div class="mypage-edu__list">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 교육</div>
            <div class="c-text-title-sub">
              <p>
                사전 필수교육을 완료 하셔야 멘토링이 가능합니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p>
                  <span>[멘티가입]</span>멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청 오류
                </p>
                <div class="mypage__board-title-writer">
                  <p>홍길동</p>
                  <span>2023.03.01</span>
                </div>
              </div>
              <div class="mypage__board-contents">
                <div class="mypage__board-contents-head">
                  <div class="mypage__board-contents-head-list">
                    <dl>
                      <dt>필수 여부</dt>
                      <dd>필수</dd>
                    </dl>
                    <dl>
                      <dt>교육 시간</dt>
                      <dd>120분</dd>
                    </dl>
                    <dl>
                      <dt>교육 형태</dt>
                      <dd>온라인</dd>
                    </dl>
                    <dl>
                      <dt>수강 기간</dt>
                      <dd>2023.01.10~2023.2.15</dd>
                    </dl>
                    <dl>
                      <dt>교육 인원</dt>
                      <dd>100명</dd>
                    </dl>
                    <dl>
                      <dt>수료 기준</dt>
                      <dd>진도율 90% 이상</dd>
                    </dl>
                  </div>
                </div>
                <!-- temp -->
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 380px;
                    background-color: #f1f1f1;
                    font-size: 20px;
                    color: #535353;
                  "
                >
                  상세내용
                </div>
                <!-- temp -->
              </div>
              <div class="c-btn-group">
                <button class="c-btn c-btn-lg c-btn-blue">목록으로</button
                ><button class="c-btn c-btn-lg c-btn-danger">신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
