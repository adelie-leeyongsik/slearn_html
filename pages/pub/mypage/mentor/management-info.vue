<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-management">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토링 관리</div>
            <div class="c-text-title-sub">
              <p>
                <!-- 230727 텍스트 수정 -->
                서울런은 멘토링이 필수!<br />
                나만의 학습을 도와줄 특별한 친구가 필요하세요?
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-management__info">
              <div class="c-text-title-lg">멘토링 신청 전이시네요?</div>
              <p>
                서울의 각 대학 멘토들이 대기하고 있어요.<br />간단한 설문 후
                멘토링 신청이 바로 가능하답니다.
              </p>
              <p>
                *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내
                드리겠습니다.
              </p>
              <div class="mypage-management__info-img">
                <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
              </div>
              <div class="mypage-management__info-step">
                <ul>
                  <li><span>1</span>멘토링신청 (설문)</li>
                  <li><span>2</span>멘토 매칭</li>
                  <li><span>3</span>멘토 확인</li>
                  <li><span>4</span>멘토링 시작</li>
                </ul>
              </div>
              <div class="c-btn-group">
                <button class="c-btn c-btn-lg c-btn-danger">멘토링 신청</button>
              </div>
              <a href="" class="mypage-management__info-link"
                >멘토링 자세히 알아보기</a
              >
            </div>

            <div class="mypage-management__info">
              <div class="c-text-title-lg">멘토링 신청완료!</div>
              <p>
                멘토링 신청이 완료 되어 매칭 중 입니다. <br />
                나와 가장 잘 맞는 멘토를 찾는 중입니다. <br />
                매칭이 완료되는대로 연락 드리겠습니다. 조금만 기다려주세요~
              </p>
              <p>
                *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내
                드리겠습니다.
              </p>
              <div class="mypage-management__info-img">
                <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
              </div>
              <div class="c-btn-group">
                <button class="c-btn c-btn-lg c-btn-danger">홈으로</button>
              </div>
              <a href="" class="mypage-management__info-link"
                >멘토링 그만할래요</a
              >
            </div>

            <div class="mypage-management__info">
              <div class="c-text-title-lg">멘토링 재매칭 중</div>
              <p>
                멘토링 신청이 완료 되어 매칭 중 입니다. <br />
                나와 가장 잘 맞는 멘토를 찾는 중입니다.<br />
                매칭이 완료되는대로 연락 드리겠습니다. 조금만 기다려주세요~
              </p>
              <p>
                *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내
                드리겠습니다.
              </p>
              <div class="mypage-management__info-img">
                <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
              </div>
              <div class="c-btn-group">
                <button class="c-btn c-btn-lg c-btn-danger">홈으로</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
