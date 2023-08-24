<script setup>
definePageMeta({
  layout: "introduction",
});
</script>
<script>
import swiperItem2 from "./swiperItem2";
import swiperItem3 from "./swiperItem3";
import swiperItem4 from "./swiperItem4";
import swiperItem5 from "./swiperItem5";
import swiperItem6 from "./dreamItem";
export default {
  data() {
    return {
      currentTab: 1,
      currentTabSub: 0,
      tabList: [
        "회원가입 안내",
        "온라인콘텐츠 안내",
        "멘토링서비스 안내",
        "진로진학상담 안내",
        "맞춤형추천 안내",
      ],

      accordion01: false,
      accordion02: false,
      accordion03: false,
      accordion04: false,
      accordion05: false,
      accordion06: false,
    };
  },
};
</script>
<template>
  <div class="introduction">
    <PubTitle
      title="서울런 소개"
      sub="꿈에 오르는 한걸음, 서울런이다!
서울런이 꿈과 희망을 응원합니다!"
    />
    <div class="c-tab-nav">
      <ul>
        <li
          v-for="(tab, index) in tabList"
          :key="index"
          :class="{ active: currentTab === index }"
        >
          <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="c-tab-contents__wrap">
      <div v-show="currentTab == 0" class="c-tab-contents">
        <div class="introduction__title-lg c-text-center">가입대상 안내</div>
        <div class="introduction-join">
          <div class="introduction-join__wrap">
            <div class="introduction-join__info c-bg-bule">
              <div class="c-text-title-lg">자격검증 대상</div>
              <ul>
                <li>✓ 서울시 거주 만 6세 ~ 만 24세</li>
                <li>✓ 소득기준대상, 학교밖, 다문화 가족, 법정한부모가족</li>
              </ul>
              <p>
                소득기준대상 : 수급권자, 차상위계층 (중위소득 50%이하)
                <br />
                법정한부모 : 중위소득 60% 이하<br class="c-mo" />
                (단, 청소년 한부모 가정은 중위소득 72%이하)
              </p>
            </div>
            <div class="introduction-join__info c-bg-primary">
              <div class="c-text-title-lg">간편대상 확인하기</div>
              <div class="c-text-title-sub">
                이름과 주민등록번호로<br />
                자격대상 바로 확인하세요!
              </div>
              <div class="c-btn-box">
                <div class="introduction-join__img">
                  \
                  <!-- 230724 웹접근성 alt 수정 -->
                  <img
                    src="@img/pic-introduction-join-img.svg"
                    alt="간편 대상 확인하기"
                  />
                </div>
                <button class="c-btn c-btn-lg c-btn-primary w-100">
                  간편대상 확인하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 1" class="c-tab-contents">
        <div class="introduction-online">
          <div class="introduction-online__head">
            <div class="c-text-title-lg">서비스소개</div>
            <p>
              서울런에서는 학습자원 접근이 어려운 청소년들에게 다양한
              교과.비교과, 공공연계 학습콘텐츠를 온라인으로 제공하고 있습니다
            </p>
          </div>
          <div class="introduction-online__body">
            <div class="introduction-online__info c-bg-blue">
              <div class="c-text-title-lg">
                <span class="c-badge c-badge-black">서울런 회원만 가능!</span>
                초·중·고등 대상별 학습사이트 선택(최대 3개), 강의 콘텐츠 무제한
                이용
              </div>
              <dl>
                <dt>
                  <span class="c-badge c-badge-lg c-badge-blue">교과</span>
                </dt>
                <dd>
                  <ul>
                    <li>· 고품질의 우수 교과 강좌 콘텐츠 제공(중·고등)</li>
                    <li>
                      · 학습 흥미 유발을 위한 게임·유명 만화 연계 콘텐츠
                      제공(초등)<br />
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
                      · 자격증(전기기사 등 기술자격증, 전산세무 등
                      회계자격증,<br />
                      금융자격증, 한국사 등 기타자격시험), 독서(오디어북)
                    </li>
                    <li>· 공무원, 취업/인적성 강의/편입영어·수학</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div class="introduction-online__info c-bg-green">
              <div class="c-text-title-lg">
                공공ㆍ유관기관 및 서울런에서 개발한 동영상 학습 콘텐츠를 통합
                제공
              </div>
              <dl class="c-align-center">
                <dt>
                  <span class="c-badge c-badge-lg c-badge-green">오픈강좌</span>
                </dt>
                <dd>
                  언제, 어디서나 원하는 온라인 콘텐츠를 쉽고 편리하게 이용
                </dd>
              </dl>
              <ul class="introduction-online__link">
                <li>
                  <button class="c-btn c-btn-green w-100">
                    서울시립미술관 (미술교육)<i class="ico ico-arrow">더보기</i>
                  </button>
                </li>
                <li>
                  <button class="c-btn c-btn-green w-100">
                    평생학습포털 (직무교육, 자격증)<i class="ico ico-arrow"
                      >더보기</i
                    >
                  </button>
                </li>
                <li>
                  <button class="c-btn c-btn-green w-100">
                    청년몽땅정보통 (서울청년정책네트워크)<i
                      class="ico ico-arrow"
                    ></i>
                  </button>
                </li>
                <li>
                  <button class="c-btn c-btn-green w-100">
                    K-MOOC (교육부 공개강좌)<i class="ico ico-arrow">더보기</i>
                  </button>
                </li>
                <li>
                  <button class="c-btn c-btn-green w-100">
                    KOPOIS (공연예술 통합전산망)<i class="ico ico-arrow"
                      >더보기</i
                    >
                  </button>
                </li>
                <li>
                  <button class="c-btn c-btn-green w-100">
                    디지털집현전 (전 국민지식 플랫폼)<i
                      class="ico ico-arrow"
                    ></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 2" class="c-tab-contents">
        <div class="introduction-service__img">
          <!-- 230725 alt="이미지" 수정 -->
          <img src="@img/pic-introduction-service.svg" alt="멘토 이미지" />
        </div>
        <div class="introduction-service">
          <div class="introduction-service__info c-bg-gray">
            <div class="introduction-service__head">Q.</div>
            <div class="introduction-service__body">
              <div class="c-text-title-lg">멘토는 어떤분인가요?</div>
              <div class="c-text-title-sub">
                서울시는 지식과 경험을 갖춘 우수한 대학(원)생을 대상으로
                멘토단을 구성하고 있습니다. (전국 소재 대학에서 선발)
              </div>
            </div>
          </div>
          <div class="introduction-service__info">
            <div class="introduction-service__head">Q.</div>
            <div class="introduction-service__body">
              <div class="c-text-title-lg">멘토링의 내용은 무엇인가요?</div>
              <div class="c-text-title-sub">
                멘토링을 통해 멘토와 함께 멘티의 학습계획 수립 후 학습관리·상담
                등을 진행하게 됩니다.<br />
                '서울런 멘토링'은 학습자(멘티)가 사전에 신청한 정보를 활용하여
                대학(원)생 멘토를 매칭하고,
                <strong class="c-text-blue">
                  학습사이트의 강의 콘텐츠 등을 활용하여 학습을 잘하고 있는지
                  확인·관리하는 서비스
                </strong>
                입니다.<br />
                ※ 개인 과외교습은 제공하지 않습니다.
              </div>
            </div>
          </div>
          <div class="introduction-service__info">
            <div class="introduction-service__head">Q.</div>
            <div class="introduction-service__body">
              <div class="c-text-title-lg">멘토 매칭은 어떻게 되나요?</div>
              <div class="c-text-title-sub">
                서울런 가입 및 멘토링 신청시 입력한 멘토링 방식, 희망과목,
                학교급 등 데이터를 기반으로 멘토의 지도 가능한 멘토링 방식,
                과목, 학교급 등을 고려하여 최적의 멘토를 매칭하여 진행하게
                됩니다.
              </div>
            </div>
          </div>
          <div class="introduction-service__info c-bg-gray">
            <div class="introduction-service__head">Q.</div>
            <div class="introduction-service__body">
              <div class="c-text-title-lg">멘토링은 어떻게 진행되나요?</div>
              <div class="c-text-title-sub">
                온·오프라인 공통으로 서울런 강좌 및 전용 멘토가 지원되며, 멘토는
                멘티와 함께 학습 목표를 설정하고, 진도체크, 질의응답, 상담 등의
                서비스를 제공합니다.온라인 멘토링의 경우 화상강의 플랫폼을
                활용하여 주 1회 1시간 또는 주 2회 30분을 선택하여 약속된 시간에
                진행되며, 오프라인 멘토링의 경우 주1회 1시간 약속된 시간에
                스터디카페, 청소년센터 등 지정된 장소에서 진행됩니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 3" class="c-tab-contents">
        <div class="introduction-consulting">
          <div class="introduction-consulting__head">
            <div class="c-text-title-lg">
              <strong class="c-text-primary">진로진학 전문선생님</strong>과 함께
              나의 미래를 찾아보아요!
            </div>
            <div class="introduction-consulting__info">
              <div class="c-text-title-sub">
                1:1 맞춤형 진로·진학 설계 심화 상담(초6 이상)
              </div>
              <div class="c-text-title-sub">
                입시·진학 설명회 및 1:1 대입 진학 상담(고3, N수생)
              </div>
              <p>
                서울런에서는 진로·진학 상담을 희망하는 만12세 이상~ (초6학년~ )
                서울런 회원에게 진로·적성종합검사, 진로계획, 학습계획, 고입 및
                대입상담(수시, 정시, 학과선정, 면접), 진학정보 제공, 검정고시
                준비 등의 개인별 맞춤형 전문 상담과 정보를 제공하고 있습니다
              </p>
            </div>
          </div>
          <div class="c-accordion">
            <dl
              class="c-accordion-item"
              :class="{ active: accordion01 === true }"
              @click="accordion01 = !accordion01"
            >
              <dt>
                <a href="javascript:void(0)">
                  서울런 가입자만 상담 서비스를 이용할 수 있나요?
                </a>
              </dt>
              <dd>
                본 상담 서비스는 <strong>서울런 가입자</strong>에 한해서만
                진행되고 있습니다. 서울런 미가입자 중 가입대상자인 경우에는
                서울런 회원가입 후 상담 서비스 신청 부탁드립니다.
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion02 === true }"
              @click="accordion02 = !accordion02"
            >
              <dt>
                <a href="javascript:void(0)">학부모가 신청할 수 있나요?</a>
              </dt>
              <dd>
                서울런 가입자인 자녀가 있는 경우에 대리로(자녀 ID로) 상담 신청
                가능합니다.<br />
                학생이 학부모 참관을 원하는 경우, 학부모 참관을 신청하실 수
                있습니다.<br />
                (단, 학생이 원하지 않는 경우 학부모 상담만 따로 진행
                가능합니다.)
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion03 === true }"
              @click="accordion03 = !accordion03"
            >
              <dt>
                <a href="javascript:void(0)"
                  >상담 종류 및 내용은 어떻게 되나요?</a
                >
              </dt>
              <dd>
                <strong>&lt;진로 적성검사 및 학습종합검사&gt;</strong><br />
                학습성격, 학습동기, 학습전략, 부모양육 검사 및 결과 해석 상담<br /><br />

                <strong>&lt;초6 ~ 고2 및 해당 연령의 진로·진학 상담&gt;</strong
                ><br />
                학생부 관리, 진로 및 진학 상담, 고입상담, 고교학점제, 학습설계,
                입시 정보 제공 등<br /><br />

                <strong>&lt;대입상담&gt;</strong><br />
                - 수시 : 최적전형설계, 수시지원전략상담, 수시합격예측,
                고른기회전형, 검정고시생 맞춤 상담<br />
                - 정시 : 정시지원전략, 정시합격예측, 일반전형 및 기회균등 맞춤
                상담<br /><br />

                <strong>&lt;학생 심리상담&gt;</strong><br />
                전문 심리 상담사를 통한 학생심리 상담 병행
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion04 === true }"
              @click="accordion04 = !accordion04"
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
              :class="{ active: accordion05 === true }"
              @click="accordion05 = !accordion05"
            >
              <dt>
                <a href="javascript:void(0)">상담시간은 몇시간인가요?</a>
              </dt>
              <dd>
                기본적인 1회의 상담은 1시간으로 진행되나, 상담내용과 목적 등에
                따라 변동이 있을 수 있습니다. 또한 다회차 상담으로 학생의
                지속적인 상담을 제공 합니다.
              </dd>
            </dl>
            <dl
              class="c-accordion-item"
              :class="{ active: accordion06 === true }"
              @click="accordion06 = !accordion06"
            >
              <dt>
                <a href="javascript:void(0)">상담 장소는 어디인가요?</a>
              </dt>
              <dd>
                온·오프라인으로 모두 상담 가능하며, 희망하는 상담 형태를 선택
                하실 수 있습니다. (온.오프 병행 상담 가능)<br />
                오프라인으로 진행 될 경우에는 학생 거주지 인근의 지정 상담 장소
                (청소년센터나 스터디카페 등)에서 진행 됩니다.
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 4" class="c-tab-contents">
        <div class="introduction-best">
          <div class="introduction-best__head">
            <div class="c-text-title-lg c-text-center">
              사실 공부하려고 해도<br class="c-mo" />
              어디서부터 해야 하는지<br />
              어떤 강좌를 들어야<br class="c-mo" />
              하는지 막막 하잖아요?
            </div>
          </div>
          <div class="introduction-best__body">
            <p>
              <img src="@img/introduction-best-img01.png" alt="" />
            </p>
            <p class="c-pc">
              <img src="@img/introduction-best-img02.png" alt="" />
            </p>
            <p class="c-tablet">
              <img src="@img/introduction-best-img03.png" alt="" />
            </p>
            <p class="c-mo">
              <img src="@img/introduction-best-img03.png" alt="" />
            </p>
            <div class="c-text-title-lg c-text-center c-text-blue">
              서울런에서는 학습자 성향, 학습패턴, 콘텐츠의 연결 등<br />
              최신 AI기술의 학습이력 기반 분석으로 1:1 맞춤 학습강좌를 추천해
              드립니다
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduction-dream__story-item {
  animation: shake 3s;
  animation-iteration-count: infinite;
  transition: all 5s ease-in-out;
}
.introduction-dream__story-item:nth-child(2) {
  animation: shake2 5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 1rem) rotate(0deg);
  }

  50% {
    transform: translate(0px, 0) rotate(0deg);
  }

  100% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
}

@keyframes shake2 {
  0% {
    transform: translate(0px, 0) rotate(0deg);
  }
  25% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
  50% {
    transform: translate(0px, 0) rotate(0deg);
  }
  75% {
    transform: translate(0px, 1rem) rotate(0deg);
  }
  100% {
    transform: translate(0px, 0) rotate(0deg);
  }
}
</style>
