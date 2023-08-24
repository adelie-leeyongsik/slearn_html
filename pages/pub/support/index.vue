<script setup>
definePageMeta({
  layout: "support",
});
</script>
<script>
export default {
  data() {
    return {
      accordion01: true,
      accordion02: false,
      accordion03: false,
    };
  },
};
</script>
<template>
  <div class="support">
    <PubTitle
      title="학습지원센터"
      sub="가입방법, 콘텐츠 이용방법, 멘토링 서비스, 이벤트 등 서울런에 대한 모든걸 상담해 드립니다."
    />
    <div class="support-contents">
      <div class="support__info">
        <div class="support__inner">
          <div class="c-text-title-lg">
            서울런 이용 중 궁금한 것은<br />
            학습지원센터에 물어보세요!
          </div>
          <div class="support__info-wrap">
            <div class="support__info-group custom">
              <div class="support__info-item custom">
                <div class="support__info-text-item">
                  <div class="c-text-title-md">학습지원센터</div>
                  <div class="c-text-title-sub">
                    평일 10:00 ~ 21:00, 주말/공휴일 제외
                  </div>
                  <p>(점심시간 12:00 ~ 13:00)</p>
                  <div class="support__info-text-number">
                    1533-<span>0909</span>
                  </div>
                  <div class="support__info-item-img">
                    <img
                      src="@img/pic-support-top-img.svg"
                      alt="학습지원센터 이미지"
                    />
                  </div>
                </div>
              </div>
              <div class="support__info-item">
                <div class="c-text-title-md">카카오톡 및 챗봇상담</div>
                <p>
                  챗봇상담 : 24시간<br />
                  카카오톡 : 1:1 상담(평일 10~22시)<br />
                </p>
                <a href="" class="support__info-item-link">
                  <p>
                    카카오 ID
                    <span>서울런 학습지원센터</span>
                  </p>
                  <img src="@img/ico-support-kakao.svg" alt="카카오톡 아이콘" />
                </a>
              </div>
            </div>
            <div class="support__info-group">
              <div class="support__info-item bg1">
                <a href="" class="support__info-link">
                  <div class="c-text-title-md">1:1 문의</div>
                  <p>문의가 필요하신가요?</p>
                  <div class="support__info-item-foot">
                    <img
                      src="@img/ico-support-link-img01.svg"
                      alt="1:1문의 이미지"
                    />
                  </div>
                </a>
              </div>
              <div class="support__info-item bg2">
                <a href="/faq" class="support__info-link">
                  <div class="c-text-title-md">자주하는 질문</div>
                  <p>궁금한 점을 먼저 찾아보세요.</p>
                  <div class="support__info-item-foot">
                    <img
                      src="@img/ico-support-link-img02.svg"
                      alt="자주하는 질문 이미지"
                    />
                  </div>
                </a>
              </div>
              <div class="support__info-item">
                <a href="" class="support__info-link" title="새창으로 이동">
                  <div class="c-text-title-md">원격지원</div>
                  <p>원격지원이 필요하신가요?</p>
                  <div class="support__info-item-foot">
                    <img
                      src="@img/ico-support-link-img03.svg"
                      alt="원격지원 이미지"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="support__qna">
        <div class="support__inner">
          <div class="c-accordion">
            <dl
              class="c-accordion-item"
              :class="{ active: accordion01 === true }"
            >
              <dt @click="accordion01 = !accordion01">
                <a href="javascript:void(0)">
                  학습 중 궁금한 것은 어디로 문의하나요?
                </a>
              </dt>
              <dd>
                학습지원센터 대표번호
                <a href="tel:1533-0909"><strong>1533-0909</strong></a>
                로 전화하시거나 카카오톡 (채널명 : 서울런 학습지원센터) 챗봇
                또는 1:1 채팅,
                <br class="c-pc" />
                홈페이지 문의게시판으로 문의하시면 됩니다.<br />
                서울런 메인화면 상단에 ‘이용안내’과 ‘자주 묻는 질문’을
                참고하셔도 좋아요!<br /><br />

                ※ 멘토링 신청, 변경, 연장 등 관련 내용은 멘토링 지원사무국에
                문의해 주세요!<br />
                (대표전화 <a href="tel:02-3274-9212">02-3274-9212</a> / e-mail :
                <a href="mailto:slmentoring_2023@naver.com">
                  slmentoring_2023@naver.com
                </a>
                / 카카오톡 채널 :
                <a href="http://pf.kakao.com/_yHfexj" target="_blank">
                  http://pf.kakao.com/_yHfexj
                </a>
                )
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion02 === true }"
            >
              <dt @click="accordion02 = !accordion02">
                <a href="javascript:void(0)">상담센터 운영시간은 언제인가요?</a>
              </dt>
              <dd>
                콜센터는 평일10시~21시, 카카오톡 1:1 채팅상담은 평일
                10시~22시까지 운영합니다.<br />
                (평일 점심시간 12시~13시 및 공휴일, 주말에는 미운영)<br />
                카카오톡 챗봇 상담 및 홈페이지 1:1 문의게시판 24시간 이용
                가능합니다.
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion03 === true }"
            >
              <dt @click="accordion03 = !accordion03">
                <a href="javascript:void(0)">
                  상담 가능한 내용은 어떤 것이 있나요?
                </a>
              </dt>
              <dd>
                회원가입 방법, 학습사이트 이용방법, 비밀번호를 잊으신 경우, 가입
                유형 변경, 서울런 접속 오류 등 서울런 이용 전반에 대해 상담이
                가능합니다.<br /><br />

                ※ 개별 학습사이트의 강좌 수강 시 궁금한 사항은 각 사이트
                고객센터로 문의해주세요!<br /><br />
                <button class="c-btn c-btn-primary">
                  학습사이트별 고객센터 번호 안내 바로가기
                </button>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
