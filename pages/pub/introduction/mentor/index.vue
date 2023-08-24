<script setup>
definePageMeta({
  layout: "introduction",
});
</script>
<template>
  <div class="introduction">
    <div class="introduction-mentor">
      <div class="introduction__head">
        <div class="c-text-title c-text-title-lg c-text-center">
          멘토링 소개
        </div>
        <div class="introduction__title">
          혼자하기에는 너무 어려운 공부, <br />
          오직 나를 위한 멘토님과 함께 해볼까요?
        </div>
        <p class="introduction__title-sub">
          서울런에서는 온·오프라인 멘토링 서비스 제공을 통해 학생들의 자기주도
          학습 능력 배양 및 사회성 함양에 도움을 드리고 있습니다. <br />
          ’21년 서울런 운영결과, 멘토링에 참여한 학생들이 그렇지 않은 학생보다
          학습효과가 높게 나타났습니다.<br />
          ’22년에도 더욱 촘촘한 학습지원을 위해 멘토링 서비스를 적극
          제공하겠습니다.
        </p>
        <button class="c-btn c-btn-lg">멘토링 소식 바로가기</button>
      </div>
      <div class="introduction__contents">
        <div class="introduction__body-wrap introduction__body-wrap--type01">
          <div class="introduction__body">
            <div class="introduction__body-title">Q. 멘토는 누구?</div>
            <p>
              서울시는 지식과 경험을 갖춘 우수한 대학(원)생<br
                class="c-tablet c-pc"
              />을 대상으로 멘토단을 구성하고 있습니다.<br />
              (전국 소재 대학에서 선발)
            </p>
          </div>
          <div class="introduction__body">
            <div class="introduction__body-title">
              Q. 멘토는 어떻게<br class="c-mo" />
              지정되나요?
            </div>
            <p>
              서울런 가입 및 멘토링 신청시 입력한 멘토링 방식, 희망과목,
              학교급<br class="c-tablet c-pc" />
              등 데이터를 기반으로 멘토의 지도 가능한 멘토링 방식, 과목,
              학교급<br class="c-tablet c-pc" />
              등을 고려하여 최적의 멘토를 매칭하여 진행하게 됩니다.
            </p>
          </div>
          <img
            src="@img/ch-introduction01.svg"
            alt="멘토링 소개 케릭터 이미지"
          />
        </div>
        <div class="introduction__body-wrap introduction__body-wrap--type02">
          <div class="introduction__body">
            <div class="introduction__body-title">
              Q. 나에게 어떤 도움을 주나요?
            </div>
            <p>
              멘토링을 통해 멘토와 함께 멘티의 학습계획 수립 후 학습관리·상담
              등을 진행하게 됩니다. '서울런 멘토링'은 학습자(멘티)가 사전에
              신청한 정보를 활용하여 대학(원)생 멘토를 매칭하고,
              <strong>
                학습사이트의 강의 콘텐츠 등을 활용하여 잘 학습하고 있는지
                확인·관리하는 서비스 </strong
              >입니다.<br />
              단, 개인 과외교습은 제공하지 않습니다.
            </p>
          </div>
          <img
            src="@img/ch-introduction02.svg"
            alt="멘토링 소개 케릭터 이미지"
          />
        </div>
        <div class="introduction__body-wrap introduction__body-wrap--type03">
          <div class="introduction__body">
            <div class="introduction__body-title">Q. 어떻게 진행 되나요?</div>
            <ul>
              <li>
                <span>1</span>온·오프라인 공통으로 서울런 강좌 및 전용 멘토가
                지원됩니다
              </li>
              <li>
                <span>2</span>멘토는 멘티와 함께 학습 목표를 설정하고, 진도체크,
                질의응답, 상담 등의 서비스를 제공합니다
              </li>
              <li>
                <span>3</span>온라인 멘토링의 경우 화상강의 플랫폼을 활용하여 주
                1회 1시간 또는 주 2회 30분을 선택하여 약속된 시간에 진행됩니다.
              </li>
              <li>
                <span>4</span>오프라인 멘토링의 경우 주1회 1시간 약속된 시간에
                스터디카페, 청소년센터 등 지정된 장소에서 진행됩니다.
              </li>
            </ul>
          </div>
          <img
            src="@img/ch-introduction03.svg"
            alt="멘토링 소개 케릭터 이미지"
          />
        </div>
        <div class="introduction__body-wrap introduction__body-wrap--type04">
          <div class="introduction__body">
            <div class="introduction__body-title">Q. 온라인?</div>
            <p>
              학습자(멘티)
              <span class="c-text-danger"
                >맞춤형 1:1 멘토를 매칭하여 주2회 30분씩 또는 주1회
                1시간씩,</span
              >
              학습관리 멘토링을 받으실 수 있습니다.
            </p>
          </div>
          <div class="introduction__body">
            <div class="introduction__body-title">Q. 오프라인</div>
            <p>
              <span class="c-text-danger"
                >멘토-멘티 1:1 멘토링 진행, 동일성별 매칭하여 주1회
                1시간씩</span
              >, 학습관리 멘토링을<br />
              받으실 수 있습니다. 오프라인의 경우, 자치구
              담당자(방과후활동이음단)의 사전<br />
              상담을 통해 일정·장소가 안내됩니다.
            </p>
          </div>
          <img
            src="@img/ch-introduction04.svg"
            alt="멘토링 소개 케릭터 이미지"
          />
        </div>
      </div>
    </div>
  </div>
</template>
