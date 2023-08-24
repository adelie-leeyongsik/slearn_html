<script>
import ModalBadge from "./_badges.vue";
import ModalMentoringApply from "./_mentoringApply.vue";
import ModalSMS from "./_sms.vue";
import ModalRematch from "./_rematch.vue";
import ModalReport from "./_report.vue";
import ModalCompleteReport from "./_completeReports.vue";
import ModalLearning from "./_Learning.vue";
import ModalApplication from "./_applications.vue";
import ModalOjt from "./_Ojt.vue";
import ModalAlert from "./_alerts.vue";
import ModalQualification from "./_qualification.vue";
import ModalEmail from "./_email.vue";
import ModalFile from "./_file.vue";
import ModalRecommend from "./_recommend.vue";
import ModalRecommendWrite from "./_recommendWrite.vue";
import ModalSurvey from "./_survey.vue";
import ModalInterest from "./_interests.vue";
import ModalInterestImg from "./_interestImgs.vue";
import ModalInterestKeyword from "./_interestKeywords.vue";
import ModalInterestGuide from "./_interestGuide.vue";
import ModalVerification from "./_verification.vue";
import ModalPeristalsis from "./_peristalsis.vue";
import ModalCancel from "./_cancel.vue";
import ModalTerms from "./_terms.vue";
import ModalApply01 from "./_apply01.vue";
import ModalApply02 from "./_apply02.vue";
import ModalApply03 from "./_apply03.vue";
import ModalApply04 from "./_apply04.vue";
import ModalSchedule from "./_schedule.vue";
import ModalWithdrawals from "./_withdrawals.vue";
import ModalSyllabus from "./_syllabus.vue";
import ModalLinking from "./_linking.vue";
import ModalCourse from "./_course.vue";
import ModalWelcome01 from "./_welcome01.vue";
import ModalWelcome02 from "./_welcome02.vue";
import ModalWelcome03 from "./_welcome03.vue";
import ModalVideos from "./_videos.vue";
import ModalEvent01 from "./_event01.vue";
import ModalEvent02 from "./_event02.vue";
import ModalCertificate from "./_certificate.vue";
import ModalMentorInfo from "./_mentorInfo.vue";
definePageMeta({
  layout: "mypage",
});

export default {
  components: {
    ModalBadge,
    ModalMentoringApply,
    ModalSMS,
    ModalRematch,
    ModalReport,
    ModalCompleteReport,
    ModalLearning,
    ModalApplication,
    ModalOjt,
    ModalAlert,
    ModalQualification,
    ModalEmail,
    ModalFile,
    ModalRecommend,
    ModalRecommendWrite,
    ModalSurvey,
    ModalInterest,
    ModalInterestImg,
    ModalInterestKeyword,
    ModalInterestGuide,
    ModalVerification,
    ModalPeristalsis,
    ModalCancel,
    ModalTerms,
    ModalApply01,
    ModalApply02,
    ModalApply03,
    ModalApply04,
    ModalSchedule,
    ModalWithdrawals,
    ModalSyllabus,
    ModalLinking,
    ModalCourse,
    ModalWelcome01,
    ModalWelcome02,
    ModalWelcome03,
    ModalVideos,
    ModalEvent01,
    ModalEvent02,
    ModalCertificate,
    ModalMentorInfo,
  },
  data() {
    return {
      modalStates: {
        Badge: false,
        MentoringApply: false,
        SMS: false,
        Rematch: false,
        Report: false,
        CompleteReport: false,
        Learning: false,
        Application: false,
        Ojt: false,
        Alert: false,
        qualification: false,
        email: false,
        file: false,
        recommend: false,
        recommendWrite: false,
        survey: false,
        interest: false,
        interestImg: false,
        interestKeyword: false,
        interestGuide: false,
        verification: false,
        peristalsis: false,
        cancel: false,
        terms: false,
        apply01: false,
        apply02: false,
        apply03: false,
        apply04: false,
        schedule: false,
        withdrawals: false,
        syllabus: false,
        linking: false,
        course: false,
        welcome01: false,
        welcome02: false,
        welcome03: false,
        videos: false,
        event01: false,
        event02: false,
        certificate: false,
      },
      lastOpenedButton: null,
    };
  },
  methods: {
    openModal(modalType) {
      this.modalStates[modalType] = true;
      this.setFocusOnModal(modalType);

      this.lastOpenedButton = document.activeElement;
    },

    closeModal(modalType) {
      this.modalStates[modalType] = false;
      this.setFocusOnButton(this.lastOpenedButton);
    },
    async setFocusOnModal(modalType) {
      await this.$nextTick();
      const modalComponent = this.$refs[modalType];
      if (modalComponent) modalComponent.$el.focus();
    },

    setFocusOnButton(buttonRef) {
      if (buttonRef && typeof buttonRef.focus === "function") {
        buttonRef.focus();
      }
    },
    isModalOpen(modalType) {
      return this.modalStates[modalType];
    },
  },
};
</script>

<template>
  <input type="text" />
  <div style="overflow-x: scroll">
    <div class="modal">
      <h3>멘토 추가 정보 입력</h3>
      <ul>
        <li>
          <button @click="openModal('mentorInfo')">SC.UR.MA.011</button>
        </li>
      </ul>
      <!-- 230711 추가 -->
      <h3>활동 증명서 신청</h3>
      <ul>
        <li><button @click="openModal('certificate')">SC.UR.MS.020</button></li>
      </ul>
      <h3>이벤트 신청</h3>
      <ul>
        <li><button @click="openModal('event01')">비회원 신청하기</button></li>
        <li><button @click="openModal('event02')">SC.UR.NT.007</button></li>
      </ul>
      <h3>동영상 플레이어 스킨</h3>
      <ul>
        <li><button @click="openModal('videos')">클릭</button></li>
      </ul>
      <h3>최초 로그인 팝업(230615)</h3>
      <ul>
        <li>
          <button @click="openModal('welcome01')">
            환영해요 - SC.UR.ET.001
          </button>
        </li>
        <li>
          <button @click="openModal('welcome02')">
            경험해보세요 - SC.UR.MA.009
          </button>
        </li>
        <li>
          <button @click="openModal('welcome03')">
            관심계열 설문 - SC.UR.LJ.003
          </button>
        </li>
      </ul>
      <h3>진로 상담 신청서(230613)</h3>
      <ul>
        <li>
          <button @click="openModal('course')">
            진로 상담 신청서 - SC.UR.LJ.003
          </button>
        </li>
      </ul>
      <h3>강의 계획서(230607)</h3>
      <ul>
        <li>
          <button @click="openModal('syllabus')">
            강의 계획서 - SC.UR.MS.013
          </button>
        </li>
      </ul>
      <h3>마이페이지_회원탈퇴</h3>
      <ul>
        <li>
          <button @click="openModal('withdrawals')">
            학습성과 뱃지란? - SC.UR.LA.002
          </button>
        </li>
      </ul>
      <h3>마이페이지_학습분석리포트</h3>
      <ul>
        <li>
          <button @click="openModal('Badge')">
            학습성과 뱃지란? - SC.UR.LA.002
          </button>
        </li>
      </ul>
      <h3>마이페이지_멘토링관리</h3>
      <ul>
        <li>
          <button @click="openModal('MentoringApply')">
            멘토링 신청하기 - SC.UR.TS.002
          </button>
        </li>
        <li>
          <button @click="openModal('SMS')">
            SMS 발송 - SC.UR.MS.004, SC.UR.TS.009
          </button>
        </li>
        <li>
          <button @click="openModal('Rematch')">
            재매칭 사유 입력 - SC.UR.MS.005, SC.UR.TS.012, SC.UR.TS.013,
            SC.UR.MS.005, SC.UR.MS.008, SC.UR.MS.009, SC.UR.TS.014,
            SC.UR.MS.006,
          </button>
        </li>
        <li>
          <button @click="openModal('cancel')">
            취소 사유 입력 - SC.UR.TS.011
          </button>
        </li>
        <li>
          <button @click="openModal('Report')">
            만족도 보고서 작성 - SC.UR.TS.015
          </button>
        </li>
        <li>
          <button @click="openModal('CompleteReport')">
            강의 완료 보고서 - SC.UR.MS.010
          </button>
        </li>
        <li>
          <button @click="openModal('Learning')">
            학습현황 - SC.UR.MS.015
          </button>
        </li>
        <li>
          <button @click="openModal('Application')">
            심화활동 신청서 - SC.UR.MS.014
          </button>
        </li>
        <li>
          <button @click="openModal('Ojt')">
            OJT 강의 계획서 - SC.UR.MS.012, SC.UR.MS.013
          </button>
        </li>
        <li>
          <button @click="openModal('schedule')">
            일정 / 장소변경 요청 - SC.UR.MS.009
          </button>
        </li>
      </ul>
      <h3>마이페이지_강의 추천</h3>
      <ul>
        <li>
          <button @click="openModal('recommend')">
            강의 추천 내역 - SC.UR.CR.002
          </button>
        </li>
        <li>
          <button @click="openModal('recommendWrite')">
            강의 추천,수정 - SC.UR.CR.003, SC.UR.CR.004
          </button>
        </li>
      </ul>
      <h3>로그인/회원가입</h3>
      <ul>
        <li>
          <button @click="openModal('Alert')">
            알림 alert - SC.UR.LO.011-4, SC.UR.IS.003, SC.UR.LO.011-5,
            SC.UR.LO.011-6, SC.UR.LO.011-7
          </button>
        </li>
        <li>
          <button @click="openModal('qualification')">
            내 자격 검증하기 - SC.UR.LO.011-1
          </button>
        </li>
        <li>
          <button @click="openModal('email')">
            이메일 인증 - SC.UR.JO.012-1, SC.UR.JO.112-1
          </button>
        </li>
        <li>
          <button @click="openModal('file')">
            증빙자료 첨부 - SC.UR.JO.027-1
          </button>
        </li>
        <li>
          <button @click="openModal('terms')">
            약관 - SC.UR.JO.002-1, SC.UR.JO.102-1
          </button>
        </li>
        <li>
          <button @click="openModal('linking')">
            로그인 계정 연동 - SC.UR.GU.001-7
          </button>
        </li>
      </ul>
      <h3>설문지</h3>
      <ul>
        <li><button @click="openModal('survey')">설문지</button></li>
      </ul>
      <h3>나의 관심사 찾기</h3>
      <ul>
        <li>
          <button @click="openModal('interest')">
            이미지 선택 전 - SC.UR.BL.001
          </button>
        </li>
        <li>
          <button @click="openModal('interestImg')">
            이미지 선택 - SC.UR.BL.001
          </button>
        </li>
        <li>
          <button @click="openModal('interestKeyword')">
            키워드 선택 - SC.UR.BL.001
          </button>
        </li>
        <li>
          <button @click="openModal('interestGuide')">
            가이드 - SC.UR.PR.005
          </button>
        </li>
      </ul>
      <h3>혜택 검증 결과</h3>
      <ul>
        <li>
          <button @click="openModal('verification')">SC.UR.BL.001</button>
        </li>
      </ul>

      <h3>마이페이지_회원정보 변경</h3>
      <ul>
        <li><button @click="openModal('peristalsis')">SC.UR.SM.002</button></li>
      </ul>
      <h3>지원서</h3>
      <ul>
        <li>
          <button @click="openModal('apply01')">
            진로진학 상담 지원서 - SC.UR.SM.002
          </button>
        </li>
        <li>
          <button @click="openModal('apply02')">
            입시상담 지원서 - SC.AD.JI.013
          </button>
        </li>
        <li>
          <button @click="openModal('apply03')">
            진로진학 보고서 - SC.AD.JI.001
          </button>
        </li>
        <li>
          <button @click="openModal('apply04')">
            입시상담 보고서 - SC.AD.JI.011-5
          </button>
        </li>
      </ul>
    </div>
  </div>

  <!-- ModalBadge -->
  <ModalBadge
    ref="Badge"
    :show="isModalOpen('Badge')"
    @close="closeModal('Badge')"
    tabindex="0"
  />

  <!-- ModalMentoringApply -->
  <ModalMentoringApply
    ref="MentoringApply"
    :show="isModalOpen('MentoringApply')"
    @close="closeModal('MentoringApply')"
    tabindex="0"
  />

  <!-- ModalSMS -->
  <ModalSMS
    ref="SMS"
    :show="isModalOpen('SMS')"
    @close="closeModal('SMS')"
    tabindex="0"
  />

  <!-- ModalRematch -->
  <ModalRematch
    ref="Rematch"
    :show="isModalOpen('Rematch')"
    @close="closeModal('Rematch')"
    tabindex="0"
  />

  <!-- ModalReport -->
  <ModalReport
    ref="Report"
    :show="isModalOpen('Report')"
    @close="closeModal('Report')"
    tabindex="0"
  />

  <!-- ModalCompleteReport -->
  <ModalCompleteReport
    ref="CompleteReport"
    :show="isModalOpen('CompleteReport')"
    @close="closeModal('CompleteReport')"
    tabindex="0"
  />

  <!-- ModalLearning -->
  <ModalLearning
    ref="Learning"
    :show="isModalOpen('Learning')"
    @close="closeModal('Learning')"
    tabindex="0"
  />

  <!-- ModalApplication -->
  <ModalApplication
    ref="Application"
    :show="isModalOpen('Application')"
    @close="closeModal('Application')"
    tabindex="0"
  />

  <!-- ModalOjt -->
  <ModalOjt
    ref="Ojt"
    :show="isModalOpen('Ojt')"
    @close="closeModal('Ojt')"
    tabindex="0"
  />

  <!-- ModalAlert -->
  <ModalAlert
    ref="Alert"
    :show="isModalOpen('Alert')"
    @close="closeModal('Alert')"
    tabindex="0"
  />

  <!-- ModalQualification -->
  <ModalQualification
    ref="qualification"
    :show="isModalOpen('qualification')"
    @close="closeModal('qualification')"
    tabindex="0"
  />

  <!-- ModalEmail -->
  <ModalEmail
    ref="email"
    :show="isModalOpen('email')"
    @close="closeModal('email')"
    tabindex="0"
  />

  <!-- ModalFile -->
  <ModalFile
    ref="file"
    :show="isModalOpen('file')"
    @close="closeModal('file')"
    tabindex="0"
  />

  <!-- ModalRecommend -->
  <ModalRecommend
    ref="recommend"
    :show="isModalOpen('recommend')"
    @close="closeModal('recommend')"
    tabindex="0"
  />

  <!-- ModalRecommendWrite -->
  <ModalRecommendWrite
    ref="recommendWrite"
    :show="isModalOpen('recommendWrite')"
    @close="closeModal('recommendWrite')"
    tabindex="0"
  />

  <!-- ModalSurvey -->
  <ModalSurvey
    ref="survey"
    :show="isModalOpen('survey')"
    @close="closeModal('survey')"
    tabindex="0"
  />

  <!-- ModalInterest -->
  <ModalInterest
    ref="interest"
    :show="isModalOpen('interest')"
    @close="closeModal('interest')"
    tabindex="0"
  />

  <!-- ModalInterestImg -->
  <ModalInterestImg
    ref="interestImg"
    :show="isModalOpen('interestImg')"
    @close="closeModal('interestImg')"
    tabindex="0"
  />

  <!-- ModalInterestKeyword -->
  <ModalInterestKeyword
    ref="interestKeyword"
    :show="isModalOpen('interestKeyword')"
    @close="closeModal('interestKeyword')"
    tabindex="0"
  />

  <!-- ModalInterestGuide -->
  <ModalInterestGuide
    ref="interestGuide"
    :show="isModalOpen('interestGuide')"
    @close="closeModal('interestGuide')"
    tabindex="0"
  />

  <!-- ModalVerification -->
  <ModalVerification
    ref="verification"
    :show="isModalOpen('verification')"
    @close="closeModal('verification')"
    tabindex="0"
  />

  <!-- ModalPeristalsis -->
  <ModalPeristalsis
    ref="peristalsis"
    :show="isModalOpen('peristalsis')"
    @close="closeModal('peristalsis')"
    tabindex="0"
  />

  <!-- ModalCancel -->
  <ModalCancel
    ref="cancel"
    :show="isModalOpen('cancel')"
    @close="closeModal('cancel')"
    tabindex="0"
  />

  <!-- ModalTerms -->
  <ModalTerms
    ref="terms"
    :show="isModalOpen('terms')"
    @close="closeModal('terms')"
    tabindex="0"
  />

  <!-- ModalApply01 -->
  <ModalApply01
    ref="apply01"
    :show="isModalOpen('apply01')"
    @close="closeModal('apply01')"
    tabindex="0"
  />

  <!-- ModalApply02 -->
  <ModalApply02
    ref="apply02"
    :show="isModalOpen('apply02')"
    @close="closeModal('apply02')"
    tabindex="0"
  />

  <!-- ModalApply03 -->
  <ModalApply03
    ref="apply03"
    :show="isModalOpen('apply03')"
    @close="closeModal('apply03')"
    tabindex="0"
  />

  <!-- ModalApply04 -->
  <ModalApply04
    ref="apply04"
    :show="isModalOpen('apply04')"
    @close="closeModal('apply04')"
    tabindex="0"
  />

  <!-- ModalSchedule -->
  <ModalSchedule
    ref="schedule"
    :show="isModalOpen('schedule')"
    @close="closeModal('schedule')"
    tabindex="0"
  />

  <!-- ModalWithdrawals -->
  <ModalWithdrawals
    ref="withdrawals"
    :show="isModalOpen('withdrawals')"
    @close="closeModal('withdrawals')"
    tabindex="0"
  />

  <!-- ModalSyllabus -->
  <ModalSyllabus
    ref="syllabus"
    :show="isModalOpen('syllabus')"
    @close="closeModal('syllabus')"
    tabindex="0"
  />

  <!-- ModalLinking -->
  <ModalLinking
    ref="linking"
    :show="isModalOpen('linking')"
    @close="closeModal('linking')"
    tabindex="0"
  />

  <!-- ModalCourse -->
  <ModalCourse
    ref="course"
    :show="isModalOpen('course')"
    @close="closeModal('course')"
    tabindex="0"
  />

  <!-- ModalWelcome01 -->
  <ModalWelcome01
    ref="welcome01"
    :show="isModalOpen('welcome01')"
    @close="closeModal('welcome01')"
    tabindex="0"
  />

  <!-- ModalWelcome02 -->
  <ModalWelcome02
    ref="welcome02"
    :show="isModalOpen('welcome02')"
    @close="closeModal('welcome02')"
    tabindex="0"
  />

  <!-- ModalWelcome03 -->
  <ModalWelcome03
    ref="welcome03"
    :show="isModalOpen('welcome03')"
    @close="closeModal('welcome03')"
    tabindex="0"
  />

  <!-- ModalVideos -->
  <ModalVideos
    ref="videos"
    :show="isModalOpen('videos')"
    @close="closeModal('videos')"
    tabindex="0"
  />

  <!-- ModalEvent01 -->
  <ModalEvent01
    ref="event01"
    :show="isModalOpen('event01')"
    @close="closeModal('event01')"
    tabindex="0"
  />

  <!-- ModalEvent02 -->
  <ModalEvent02
    ref="event02"
    :show="isModalOpen('event02')"
    @close="closeModal('event02')"
    tabindex="0"
  />

  <!-- ModalCertificate -->
  <ModalCertificate
    ref="certificate"
    :show="isModalOpen('certificate')"
    @close="closeModal('certificate')"
    tabindex="0"
  />

  <!-- ModalMentorInfo -->
  <ModalMentorInfo
    ref="mentorInfo"
    :show="isModalOpen('mentorInfo')"
    @close="closeModal('mentorInfo')"
    tabindex="0"
  />
</template>

<style lang="scss" scoped>
.modal {
  width: 120rem;
  margin: 0 auto;
  height: 100%;
  padding: 4rem 0;
  h3 {
    font-size: 1.6rem;
    color: $black;
    margin-bottom: 1rem;
  }
  ul {
    li {
      font-size: 1.6rem;
      padding-left: 0.6rem;
      button:hover {
        background-color: $blue;
        color: $white;
      }
    }
    li + li {
      margin-top: 0.8rem;
    }
    & + h3 {
      margin-top: 3rem;
    }
  }
}
</style>
