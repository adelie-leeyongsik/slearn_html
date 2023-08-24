<script setup>
const d = reactive({
  currentTab: 0,
  tabList: [
    "Main",
    "서비스 소개",
    "멘토링소개",
    "관심추천(기존:정보통)",
    "이벤트/공지",
    "고객센터",
    "로그인/회원가입",
    "마이페이지",
  ],
});

const onClickTab = (idx) => {
  d.currentTab = idx;
};
</script>

<template>
  <div ref="self" class="index">
    <div
      style="
        border-bottom: 0.1rem solid #000;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
      "
    >
      <router-link
        to="/pub"
        style="
          font-size: 1.6rem;
          color: #f8485e;
          font-weight: 700;
          margin-bottom: 2rem;
        "
        >퍼블 리스트</router-link
      >
    </div>
    <div style="overflow-x: auto">
      <ul style="width: auto">
        <li
          v-for="(tab, index) in d.tabList"
          :key="index"
          :class="{ active: d.currentTab === index }"
        >
          <a href="#" @click.prevent="onClickTab(index)"
            ><h4>{{ tab }}</h4></a
          >
        </li>
      </ul>
    </div>
    <div v-if="d.currentTab == 0">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>AI서울런</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>가입안내</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>AI 추천</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>멘토링 시스템</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>진로진학상담</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>학습지원</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>성공스토리</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
          <tr>
            <td>고객지원</td>
            <td></td>
            <td>퍼블O</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 1">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <router-link to="/introduction?section=0"
                >서비스 소개</router-link
              >
            </td>
            <td>이수빈</td>
            <td>
              🔵(회원가입,성공사례,온라인콘텐츠 포함), 회원가입 대상자 확인
              완료🔵 성공사례 디자인,퍼블 진행중
            </td>
          </tr>
          <tr>
            <td>회원가입</td>
            <td>이수빈</td>
            <td>🔵</td>
          </tr>

          <tr>
            <td>성공사례</td>
            <td>이수빈</td>
            <td>🔵</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;"> 온라인 콘텐츠 </span>
            </td>
            <td>이수빈</td>
            <td>🔵</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 2">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mentorings?section=about">멘토링 소개</nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td>🔴</td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mentorings?section=story"
                >우수 멘토링 이야기
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td>🔴</td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mentorings?section=recruit"
                >멘토링 모집</nuxt-link
              >
            </td>
            <td>그레이포인트</td>
            <td>🔴</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 3">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>사용가이드</td>
            <td></td>
            <td>🔵 API X</td>
          </tr>
          <tr>
            <td>세대별 관심 추천</td>
            <td></td>
            <td>🔵 API X</td>
          </tr>
          <tr>
            <td>이미지 선호도 추천</td>
            <td></td>
            <td>🔵 API X</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/interest">관심분야 추천</router-link>
              </span>
            </td>
            <td>이수빈</td>
            <td>🔵API X</td>
          </tr>
          <tr>
            <td>부가서비스</td>
            <td></td>
            <td>🔵API X</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 4">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/event">이벤트</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>
              🔴 날짜 조건 없이 조회 API 적용 🔴 댓글 API 적용 했으나 DATA가
              없음 🔴 댓글 등록 API 필요
            </td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/notice">공지사항</router-link>
              </span>
            </td>
            <td>이수빈</td>
            <td>🔵리스트,상세조회,댓글 완료🔵</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 5">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/faq">자주하는 질문</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 조회 API 적용 (검색어 조회 완료) 🔴</td>
          </tr>
          <tr>
            <td>1:1문의</td>
            <td></td>
            <td>퍼블O, API O (마이페이지 1:1문의 참고)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 6">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/login">아이디 로그인</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 ID/PW 로그인 API 적용 🔴 네이버/카카오/디지털원패스 적용</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/find-id">아이디 찾기</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 완료</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/find-pw">비밀번호 찾기</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 완료</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/join/qualification"
                  >ID/PW 회원가입 - 자격검증</router-link
                >
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 자격검증 및 PASS 본인인증 완료</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/join/step01">회원 유형 선택 </router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 퍼블 O / 다자녀 자격검증 API O</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/join/step03">추가 정보 입력</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>
              🔴 퍼블 O / 주소입력 가능 / ID&PW 검증 및 ID&Email 중복확인 API O
            </td>
          </tr>

          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/join/step04">학습사이트 선택</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 퍼블 O / API O</td>
          </tr>
          <tr>
            <td>회원가입 완료</td>
            <td>정일수</td>
            <td>🔴 학습사이트 회원가입 완료 후 보임</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="d.currentTab == 7">
      <table
        class="table table-bordered"
        style="border: none; border-collapse: collapse"
      >
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr class="title">
            <td>페이지</td>
            <td>담당자</td>
            <td>비고</td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/report"
                >학습리포트(학습대시보드)</router-link
              >
            </td>
            <td></td>
            <td>퍼블O, API X</td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/lecture">나의 수강 관리</router-link>
            </td>
            <td>이수빈</td>
            <td>
              🔵CP 조회 완료(이미지없음,링크 오류), 나의 수강 이력 조회 완료🔵
              조건조회 API 미완료, 과정분류 값 백에서 교체 예정
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/lecture-pick">추천강의</router-link>
            </td>
            <td></td>
            <td>퍼블O , API X</td>
          </tr>
          <tr>
            <td>관심추천 내역</td>
            <td></td>
            <td>퍼블 O , API X</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/interest-settings"
                  >나의 관심사 설정</router-link
                >
              </span>
            </td>
            <td>이수빈</td>
            <td>🔵조회,저장 API 적용 완료🔵 이미지선택 API 없음(작업중)</td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/coupon">내 쿠폰관리</router-link>
            </td>
            <td></td>
            <td>🔵조회 API 적용 완료🔵</td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/lecture-suggestion"
                >나의 강의 추천 내역</router-link
              >
            </td>
            <td></td>
            <td>퍼블 O , API X</td>
          </tr>
          <tr>
            <td>
              <router-link to="/mypage/consulting"
                >진로진학상담 내역</router-link
              >
            </td>
            <td>이수빈</td>
            <td>
              🔵진로 진학 상담 신청 내역 리스트 조회 완료🔵 <br />상담 신청서
              api 조율필요, 진로/진학 상담 배너 관리자 개발 후 진행(배너 리스트,
              배너 상세 조회 api 필요), 상담 신청 모달 적용은 했으나 상담 신청서
              케이스 조회 api 필요
            </td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/event">내 이벤트 관리</router-link>
              </span>
            </td>
            <td>이수빈</td>
            <td>
              🔵조회 API 적용, 상세페이지 이동 적용, 당첨 페이지 조회, 선물 선택
              완료🔵
            </td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/drive">내 드라이브 관리</router-link>
              </span>
            </td>
            <td>이수빈</td>
            <td>🔵조회api적용완료, 파일 업로드/다운로드/삭제 완료🔵</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/inquiry">1:1문의 내역</router-link>
              </span>
            </td>
            <td>정일수</td>
            <td>🔴 조회/등록/수정/삭제 완료</td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/member">회원정보 변경</router-link>
              </span>
            </td>
            <td>이수빈</td>
            <td>
              🔵평생교육 포털 연동 약관보기, 주소 검색, 이메일/핸드폰 인증,
              수정하기 완료, 비밀번호 수정하기 완료🔵 확인/상세/변경(기본) 퍼블
              교체 예정 (~6/16)
            </td>
          </tr>
          <tr>
            <td>
              <span sytle="color: #f8485e;">
                <router-link to="/mypage/pw-check"
                  >회원정보 변경 비밀번호 확인</router-link
                >
              </span>
            </td>
            <td>이수빈</td>
            <td>🔵비밀번호 확인 완료🔵</td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/mentee">
                멘토링관리 (멘티)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/mentor">
                멘토링관리 (멘토)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/before?role=mentee">
                이전멘토링보기 (멘티)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/before">
                이전멘토링보기 (멘토)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/awards?role=mentee">
                수상내역 (멘티)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/management/awards">
                수상내역 (멘토)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/community/board/list/notice">
                멘토 커뮤니티 (공지사항)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/mypage/community/board/list/share">
                멘토 커뮤니티 (공유방)
              </nuxt-link>
            </td>
            <td>그레이포인트</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: none !important;
}
.index {
  padding: 5rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  h4 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: #535353;
  }
  .table {
    table-layout: fixed;
    font-family: "SUIT", sans-serif;
    font-size: 16px;
    td,
    th {
      vertical-align: middle;
      padding: 10px;
      border: 1px solid #ccc !important;
      background-color: $white !important;
      a {
        color: $danger;
        font-weight: 500;
      }
    }
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  li.active h4 {
    color: $danger;
  }
  li {
    position: relative;
    margin-right: 4rem;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0.5rem;
      right: -2rem;
      width: 0.1rem;
      height: 1.6rem;
    }
  }
}
.title {
  text-align: center;
  background-color: red !important;
}
</style>
