<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      consult01: false,
      consult02: false,
      consult03: false,
    };
  },
};
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-consulting">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">진로/진학 상담 내역</div>
            <div class="c-text-title-sub">
              <p>
                사전 교육을 필수로 완료해주시길 바랍니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-consulting__box-wrap">
              <a
                href=""
                class="mypage-consulting__box mypage-consulting__box-career"
              >
                <div class="mypage-consulting__box-head">
                  진로 상담 신청
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    2023.01.02 ~ 2023.05.30<br />
                    100명 선착 순 지원
                  </p>
                </div>
              </a>
              <a href="" class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">
                  진학 상담 신청
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    2023.01.02 ~ 2023.05.30<br />
                    100명 선착 순 지원
                  </p>
                </div>
              </a>
            </div>
            <div class="mypage-consulting__list">
              <dl>
                <dt @click="consult01 = !consult01">
                  <!-- 웹접근성 a태그 추가-->
                  <a href="javascript:void(0)">
                    <div
                      class="mypage-consulting__title"
                      :class="{ active: consult01 === true }"
                    >
                      <div class="mypage-consulting__title-category">
                        접수 대기
                      </div>
                      <div class="mypage-consulting__title-text">
                        <p>진로 상담 신청</p>
                        <span>신청일 2023.01.10</span>
                      </div>
                    </div>
                  </a>
                </dt>
                <dd v-show="consult01 == true">
                  <div class="mypage-consulting__contents">
                    <div class="mypage-consulting__contents-box">
                      <dl>
                        <dt>상담 선생님</dt>
                        <dd>김수정 선생님</dd>
                      </dl>
                      <dl>
                        <dt>상담 진행 회차</dt>
                        <dd>2회 완료 / 6회</dd>
                      </dl>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="consult02 = !consult02">
                  <!-- 웹접근성 a태그 추가-->
                  <a href="javascript:void(0)">
                    <div
                      class="mypage-consulting__title"
                      :class="{ active: consult02 === true }"
                    >
                      <div class="mypage-consulting__title-category">
                        접수 대기
                      </div>
                      <div class="mypage-consulting__title-text">
                        <p>진로 상담 신청</p>
                        <span>신청일 2023.01.10</span>
                      </div>
                    </div>
                  </a>
                </dt>
                <dd v-show="consult02 == true">
                  <div class="mypage-consulting__contents">
                    <div class="mypage-consulting__contents-box">
                      <dl>
                        <dt>상담 선생님</dt>
                        <dd>김수정 선생님</dd>
                      </dl>
                      <dl>
                        <dt>상담 진행 회차</dt>
                        <dd>2회 완료 / 6회</dd>
                      </dl>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="consult03 = !consult03">
                  <!-- 웹접근성 a태그 추가-->
                  <a href="javascript:void(0)">
                    <div
                      class="mypage-consulting__title"
                      :class="{ active: consult03 === true }"
                    >
                      <div
                        class="mypage-consulting__title-category c-text-danger"
                      >
                        승인 완료
                      </div>
                      <div class="mypage-consulting__title-text">
                        <p>진로 상담 신청</p>
                        <span>신청일 2023.01.10</span>
                      </div>
                      <div class="c-badge c-badge-blue">상담중</div>
                    </div>
                  </a>
                </dt>
                <dd v-show="consult03 == true">
                  <div class="mypage-consulting__contents">
                    <div class="mypage-consulting__contents-box">
                      <dl>
                        <dt>상담 선생님</dt>
                        <dd>김수정 선생님</dd>
                      </dl>
                      <dl>
                        <dt>상담 진행 회차</dt>
                        <dd>2회 완료 / 6회</dd>
                      </dl>
                    </div>
                  </div>
                </dd>
              </dl>
              <PubPagination />
            </div>

            <!-- temp -->
            <br /><br /><br />
            <!-- temp -->

            <div class="mypage-consulting__box-wrap">
              <a
                href=""
                class="mypage-consulting__box mypage-consulting__box-career"
              >
                <div class="mypage-consulting__box-head">진로 상담 신청</div>
                <div class="mypage-consulting__box-body">
                  <p>
                    준비중입니다.<br />
                    오늘도 화이팅 하며 조금만 기다려주세요!
                  </p>
                </div>
              </a>
              <a href="" class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">진학 상담 신청</div>
                <div class="mypage-consulting__box-body">
                  <p>
                    준비중입니다.<br />
                    조금만 기다려주세요!
                  </p>
                </div>
              </a>
            </div>
            <div class="mypage-consulting__list">
              <div class="c-notfound">
                <img
                  src="@img/ch-table.svg"
                  alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
                />
                <p>
                  아직 진로/진학 상담 내역이 없어요. <br />
                  학습을 열심히, 성실히 하면 많은 상이 기다릴 거예요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
