<script setup>
const learnData = reactive({
  accordion01: false,
  accordion02: false,
  accordion03: false,
  accordion04: false,
  accordion05: false,
  accordion06: false,
});
</script>

<template>
  <div class="introduction-consulting">
    <div class="introduction-consulting__head">
      <div class="c-text-title-lg">
        <strong class="c-text-primary">진로진학 전문선생님</strong>과 함께 나의
        미래를 찾아보아요!
      </div>
      <div class="introduction-consulting__info">
        <div class="c-text-title-sub">
          1:1 맞춤형 진로·진학 설계 심화 상담(초6 이상)
        </div>
        <div class="c-text-title-sub">
          입시·진학 설명회 및 1:1 대입 진학 상담(고3, N수생)
        </div>
        <p>
          서울런에서는 진로·진학 상담을 희망하는 만12세 이상~ (초6학년~ ) 서울런
          회원에게 진로·적성종합검사, 진로계획, 학습계획, 고입 및 대입상담(수시,
          정시, 학과선정, 면접), 진학정보 제공, 검정고시 준비 등의 개인별 맞춤형
          전문 상담과 정보를 제공하고 있습니다
        </p>
      </div>
    </div>
    <div class="c-accordion">
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion01 === true }"
        @click="learnData.accordion01 = !learnData.accordion01"
      >
        <dt>
          <a href="javascript:void(0)">
            서울런 가입자만 상담 서비스를 이용할 수 있나요?
          </a>
        </dt>
        <dd>
          본 상담 서비스는 <strong>서울런 가입자</strong>에 한해서만 진행되고
          있습니다. 서울런 미가입자 중 가입대상자인 경우에는 서울런 회원가입 후
          상담 서비스 신청 부탁드립니다.
        </dd>
      </dl>
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion02 === true }"
        @click="learnData.accordion02 = !learnData.accordion02"
      >
        <dt>
          <a href="javascript:void(0)">학부모가 신청할 수 있나요?</a>
        </dt>
        <dd>
          서울런 가입자인 자녀가 있는 경우에 대리로(자녀 ID로) 상담 신청
          가능합니다.<br />
          학생이 학부모 참관을 원하는 경우, 학부모 참관을 신청하실 수
          있습니다.<br />
          (단, 학생이 원하지 않는 경우 학부모 상담만 따로 진행 가능합니다.)
        </dd>
      </dl>
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion03 === true }"
        @click="learnData.accordion03 = !learnData.accordion03"
      >
        <dt>
          <a href="javascript:void(0)">상담 종류 및 내용은 어떻게 되나요?</a>
        </dt>
        <dd>
          <strong>&lt;진로 적성검사 및 학습종합검사&gt;</strong><br />
          학습성격, 학습동기, 학습전략, 부모양육 검사 및 결과 해석 상담<br /><br />

          <strong>&lt;초6 ~ 고2 및 해당 연령의 진로·진학 상담&gt;</strong><br />
          학생부 관리, 진로 및 진학 상담, 고입상담, 고교학점제, 학습설계, 입시
          정보 제공 등<br /><br />

          <strong>&lt;대입상담&gt;</strong><br />
          - 수시 : 최적전형설계, 수시지원전략상담, 수시합격예측, 고른기회전형,
          검정고시생 맞춤 상담<br />
          - 정시 : 정시지원전략, 정시합격예측, 일반전형 및 기회균등 맞춤 상담<br /><br />

          <strong>&lt;학생 심리상담&gt;</strong><br />
          전문 심리 상담사를 통한 학생심리 상담 병행
        </dd>
      </dl>
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion04 === true }"
        @click="learnData.accordion04 = !learnData.accordion04"
      >
        <dt>
          <a href="javascript:void(0)">누구와 상담하나요?</a>
        </dt>
        <dd>
          20년 이상 경력의 진로·진학 전문 상담사 (전·현직 교사, 민간 전문
          컨설턴트)와 1:1 상담을 진행합니다.
        </dd>
      </dl>
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion05 === true }"
        @click="learnData.accordion05 = !learnData.accordion05"
      >
        <dt>
          <a href="javascript:void(0)">상담시간은 몇시간인가요?</a>
        </dt>
        <dd>
          기본적인 1회의 상담은 1시간으로 진행되나, 상담내용과 목적 등에 따라
          변동이 있을 수 있습니다. 또한 다회차 상담으로 학생의 지속적인 상담을
          제공 합니다.
        </dd>
      </dl>
      <dl
        class="c-accordion-item"
        :class="{ active: learnData.accordion06 === true }"
        @click="learnData.accordion06 = !learnData.accordion06"
      >
        <dt>
          <a href="javascript:void(0)">상담 장소는 어디인가요?</a>
        </dt>
        <dd>
          온·오프라인으로 모두 상담 가능하며, 희망하는 상담 형태를 선택 하실 수
          있습니다. (온.오프 병행 상담 가능)<br />
          오프라인으로 진행 될 경우에는 학생 거주지 인근의 지정 상담 장소
          (청소년센터나 스터디카페 등)에서 진행 됩니다.
        </dd>
      </dl>
    </div>
  </div>
</template>
