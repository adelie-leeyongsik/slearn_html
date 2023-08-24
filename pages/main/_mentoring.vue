<script setup>
const router = useRouter();

const goJoinMentor = () => {
  router.push("/join/mentor");
};
</script>
<template>
  <div class="c-flex">
    <div class="main__contents-head">
      <div class="main__contents-title">
        혼자 하기 어려운 공부<br class="c-pc" /><br class="c-mo" />
        멘토와<br class="c-tablet" />
        멘티가<br class="c-pc" />
        함께<br class="c-mo" />
        만들어 갑니다.
      </div>
      <p class="main__contents-text">
        서울에 재학중인 멘토와 매칭되어<br />
        학습계획부터 관리까지 모두 함께 합니다.
      </p>
      <div class="c-btn-group">
        <button
          class="c-btn c-btn-lg c-btn-radius c-btn-outline--danger"
          @click="router.push('/mypage/management/mentee')"
        >
          더보기<i class="ico ico-arrow">더보기 이미지</i>
        </button>
        <button
          class="c-btn c-btn-lg c-btn-radius c-btn-outline--sky"
          @click="goJoinMentor"
        >
          멘토가입<i class="ico ico-arrow">더보기 이미지</i>
        </button>
      </div>
    </div>
    <div class="main__contents-body">
      <div class="main__mentoring-list">
        <div class="main__mentoring-item">
          <dl class="main__mentoring-profile">
            <dt>
              <div>
                <img src="@img/@temp/1.jpg" alt="우수멘티 프로필 이미지" />
              </div>
            </dt>
            <dd>
              <div>
                <span class="c-badge c-badge-lg">우수 멘티</span>
                <strong>서울대학교 입학 예정</strong>
                <p>고등학교 3학년 · <span>김*혜</span></p>
              </div>
            </dd>
          </dl>
          <div class="c-box">
            <div class="c-box--title">
              <div>
                서울대 합격했습니다.<br />
                <span>함께 공부하는 감사함,</span><br />
                즐거움을 일깨워주는<br />
                시간들이었다고 생각해요.<br />
                여러분도 화이팅 !
              </div>
            </div>
          </div>
        </div>
        <div class="main__mentoring-item">
          <div class="c-box">
            <div class="c-box--title">
              <div>
                저도 진로 고민 때문에 먼 길을<br />
                돌아왔기에 멘티들은<br />
                <span>시행착오를 줄일 수 있게</span><br />
                도와주고 싶었어요.<br />
                우리 함께 해요~
              </div>
            </div>
          </div>
          <dl class="main__mentoring-profile">
            <dt>
              <div>
                <img src="@img/@temp/2.jpg" alt="명예 멘토 프로필 이미지2" />
              </div>
            </dt>
            <dd>
              <div>
                <span class="c-badge c-badge-lg">2023 명예 멘토</span>
                <strong>고등 학습 코칭형</strong>
                <p>서울대학교 재학 중 · <span>강*민</span></p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
