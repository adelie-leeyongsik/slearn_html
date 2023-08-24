<script>
export default {
  data() {
    return {
      mysnb01: false,
      mysnb02: false,
      mysnb03: false,
      mysnb04: false,
      mysnb05: false,
      mysnb06: false,
      mysnb07: false,
      mysnb08: false,
      mysnb09: false,
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
          <li>
            <router-link to="../1">수강관리</router-link>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb01 === true }"
            @click="
              (mysnb01 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">학습대시보드</router-link>
            <ul v-if="mysnb01 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./2">중등,고등,비교과</router-link>
              </li>
              <li><router-link to="./3">초등</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub"
            :class="{ active: mysnb02 === true }"
            @click="
              (mysnb02 = true),
                (mysnb01 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">나의서비스</router-link>
            <ul v-if="mysnb02 == true">
              <li>
                <router-link to="./4">진로진학상담내역</router-link>
              </li>
              <li><router-link to="./5">이벤트</router-link></li>
              <li><router-link to="./7">내가추천한강의</router-link></li>
              <li><router-link to="./8">일대일문의내역(상세)</router-link></li>
              <li><router-link to="./9">일대일문의내역</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub"
            :class="{ active: mysnb03 === true }"
            @click="
              (mysnb03 = true),
                (mysnb02 = false),
                (mysnb01 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">멘토링서비스(멘티)</router-link>
            <ul v-if="mysnb03 == true">
              <li>
                <router-link to="./10">멘토링관리</router-link>
              </li>
              <li><router-link to="./11">이전멘토링보기</router-link></li>
              <li><router-link to="./12">내배지내역</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb04 === true }"
            @click="
              (mysnb04 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb01 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">멘토링서비스(멘토)</router-link>
            <ul v-if="mysnb04 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./13">멘토링관리</router-link>
              </li>
              <li><router-link to="./14">이전멘토링보기</router-link></li>
              <li><router-link to="./15">내배지내역</router-link></li>
              <li><router-link to="./16">멘토링정산내역</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb05 === true }"
            @click="
              (mysnb05 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb01 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">멘토커뮤니티</router-link>
            <ul v-if="mysnb05 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./17">멘토링공유방</router-link>
              </li>
              <li><router-link to="./18">멘토링공유방(상세)</router-link></li>
              <li><router-link to="./19">멘토공지사항</router-link></li>
              <li><router-link to="./20">멘토공지사항(상세)</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb06 === true }"
            @click="
              (mysnb06 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb01 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">멘토교육</router-link>
            <ul v-if="mysnb06 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./21">멘토교육</router-link>
              </li>
              <li><router-link to="./22">멘토교육(상세공통)</router-link></li>
              <li><router-link to="./23">수강중교육</router-link></li>
              <li><router-link to="./24">수료한교육</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="./25">쿠폰</router-link>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb07 === true }"
            @click="
              (mysnb07 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb01 = false),
                (mysnb08 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">회원정보</router-link>
            <ul v-if="mysnb07 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./26">진입</router-link>
              </li>
              <li><router-link to="./27">기본</router-link></li>
              <li><router-link to="./28">수정</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb08 === true }"
            @click="
              (mysnb08 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb01 = false),
                (mysnb09 = false)
            "
          >
            <router-link to="#">팝업</router-link>
            <ul v-if="mysnb08 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./29">진로진학신청서</router-link>
              </li>
              <li><router-link to="./30">강의추천관련</router-link></li>
              <li><router-link to="./31">멘토링신청</router-link></li>
            </ul>
          </li>
          <li
            class="mypage__snb-list-sub new"
            :class="{ active: mysnb09 === true }"
            @click="
              (mysnb09 = true),
                (mysnb02 = false),
                (mysnb03 = false),
                (mysnb04 = false),
                (mysnb05 = false),
                (mysnb06 = false),
                (mysnb07 = false),
                (mysnb08 = false),
                (mysnb01 = false)
            "
          >
            <router-link to="#">게시판공통시안</router-link>
            <ul v-if="mysnb09 == true">
              <!-- 새글 있을시, li에 new 클래스 추가, 시보드</router-link> 추가 -->
              <li>
                <router-link to="./32">A안</router-link>
              </li>
              <li><router-link to="./33">B안</router-link></li>
              <li><router-link to="./34">C안</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
