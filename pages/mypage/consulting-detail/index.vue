<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useUserCounselingStore } from "@/store";

definePageMeta({
  layout: "mypage",
});

const counseling = useUserCounselingStore();
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-consulting">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="진로/진학 상담 내역"
              desc="사전 교육을 필수로 완료해주시길 바랍니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class='c-mo'
                />(1533-0909)로 연락주세요!"
            />
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-consulting__box-wrap">
              <div class="mypage-consulting__box mypage-consulting__box-career">
                <div class="mypage-consulting__box-head">
                  진로 상담 신청
                  <div v-if="counseling.isOpen" class="c-badge c-badge-blue">
                    OPEN
                  </div>
                </div>
                <div class="mypage-consulting__box-body">
                  <template v-if="counseling.isOpen">
                    <p>
                      {{
                        `${counseling.career.startDate} ~ ${counseling.career.endDate}`
                      }}<br />
                      {{ counseling.career.limitAdmission }}명 선착 순 지원
                    </p>
                    <a href="">바로가기</a>
                  </template>
                  <template v-else>
                    <p>
                      준비중입니다.<br />
                      오늘도 화이팅 하며 조금만 기다려주세요!
                    </p>
                  </template>
                </div>
              </div>
              <div class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">
                  진학 상담 신청
                  <div v-if="counseling.isOpen" class="c-badge c-badge-blue">
                    OPEN
                  </div>
                </div>
                <div class="mypage-consulting__box-body">
                  <template v-if="counseling.isOpen">
                    <p>
                      2023.01.02 ~ 2023.05.30<br />
                      {{ counseling.academic.limitAdmission }}명 선착 순 지원
                    </p>
                    <a href="">바로가기</a>
                  </template>
                  <template v-else>
                    <p>
                      준비중입니다.<br />
                      조금만 기다려주세요!
                    </p>
                  </template>
                </div>
              </div>
            </div>
            <div class="mypage-consulting__list">컨텐츠</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
