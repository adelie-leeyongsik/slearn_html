<script>
export default {
  data() {
    return {
      mysnb01: false,
      mysnb02: false,
      mysnb03: false,
      mysnb04: false,
      mysnb05: false,
    };
  },
};
</script>

<template>
  <div class="mypage__snb">
    <!-- 230718 mypage__snb-wrap 추가, 링크 변경.. -->
    <div class="mypage__snb-wrap">
      <div class="mypage__snb-head">
        <div class="mypage__snb-head-profile">
          <div class="mypage__snb-head-profile-img">
            <img src="@img/@temp/1.jpg" alt="" />
            <a
              href="javascript:void(0)"
              class="mypage__snb-head-profile-setting"
              >프로필 수정</a
            >
          </div>
          <div class="mypage__snb-head-name">홍*동</div>
        </div>

        <div class="mypage__snb-head-status">
          <div class="c-badge c-badge-yellow c-badge-lg">
            16차 멘토링 학습 중
          </div>
        </div>
      </div>
      <nav class="mypage__snb-list">
        <!-- 230727 strong 추가 -->
        <strong>마이페이지</strong>
        <ul>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb01 === true }"
            @click="mysnb01 = !mysnb01"
          >
            <router-link to="">나의 학습관리</router-link>
            <ul v-if="mysnb01 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li class="new">
                <router-link to="test">학습 대시보드</router-link>
                <i class="ico ico-new">N</i>
              </li>
              <li><router-link to="test">수강 관리</router-link></li>
              <li><router-link to="test">관심추천 내역</router-link></li>
              <li><router-link to="">추천 강의</router-link></li>
              <li><router-link to="test">나의 관심사 설정</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub"
            :class="{ active: mysnb02 === true }"
            @click="mysnb02 = !mysnb02"
          >
            <router-link to="">멘토링 관리</router-link>
            <ul v-if="mysnb02 == true">
              <li>
                <router-link to="test">멘토링 관리</router-link>
              </li>
              <li><router-link to="test">이전 멘토링 보기</router-link></li>
              <li><router-link to="test">나의 배지 내역</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/test">내 드라이브 관리</router-link>
          </li>
          <li>
            <router-link to="/test">진로/진학 상담 내역</router-link>
          </li>
          <li>
            <router-link to="/test">강의 추천 내역</router-link>
          </li>
          <li
            class="mypage__snb-list-sub"
            :class="{ active: mysnb03 === true }"
            @click="mysnb03 = !mysnb03"
          >
            <router-link to="">내 이벤트/문의</router-link>
            <ul v-if="mysnb03 == true">
              <li>
                <router-link to="test">내 이벤트 관리</router-link>
              </li>
              <li><router-link to="test">내 쿠폰 관리</router-link></li>
              <li><router-link to="test">1:1문의 내역</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/test">회원정보 변경</router-link>
          </li>
          <!-- active 클래스 추가시 리스트 열림 -->
          <!-- <li
            class="mypage__snb-list-sub"
            :class="{ active: mysnb01 === true }"
            @click="mysnb01 = !mysnb01"
          >
            <router-link to="">멘토링 관리</router-link>
            <ul v-if="mysnb01 == true">
              <li>
                <router-link to="test">멘토링 관리</router-link>
              </li>
              <li><router-link to="test">이전 멘토링 보기</router-link></li>
              <li><router-link to="test">나의 배지 내역</router-link></li>
              <li><router-link to="">멘토링 정산 내역</router-link></li>
            </ul>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>
