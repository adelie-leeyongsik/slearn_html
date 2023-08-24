<script setup>
import { call } from "@/api";
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
// import ListItem from "./_listItem.vue";
import { useUserLectureSuggestionStore } from "@/store";
import moment from "moment/moment";
import ModalRecommendWrite from "./modalPopup/recommendWrite.vue";

// definePageMeta({ layout: "mypage", });
const ls = useUserLectureSuggestionStore();

const d = reactive({
  stateFilter: "", // 로딩시 선택될 [처리상태]select box value
  stateOptions: [  // 추천 콘텐츠 결재 상태 (A신청,P승인,R반려,W검토중) RCMD_CTNT_STAT
    { text: ":: 전체 ::", value: "" },
    { text: "신청", value: "A" },
    { text: "승인", value: "P" },
    { text: "반려", value: "R" }
    // { text: "검토중", value: "W" } /* 코드관리 사용여부 N */
  ],
  pageNum: 0,
  pageSize: 10,
  order: "DESC",
  sort: "updDtm",        // 수정일시
  searchType: "REG_DTM", // 소팅 컬럼
  // keyword: "",
  pickerStart: moment(moment().add(-1, "months").toDate()).format("YYYYMMDD"),
  pickerEnd: moment(moment().toDate()).format("YYYYMMDD"),
  dataList: {
    pageNumber: "",
    totalRecords: "",
    totalPages: "",
    // top: [], normal: [],
  },
  rcommendWreite: false,
  saveFlag : "", // Insert:I ,Update:U , Select:S
  title : "", // 제목
  ctntRcmdSeq : "", // PK
  rcmdCtntStat : "", // 상태
  parentCateCode: "", // 대분류코드
  cateCode : "", // 중분류 코드
  thumbnail : "", // 썸네일 이미지파일 경로.
  fileSeq : "", // 파일 PK
  url : "" , // 링크 경로
  applyDesc : "", // 추천 사유
  rjctDesc : "",  // 반려 사유
});

onMounted(() => {
  getCourseData();
});


// 페이징
const changedIndex = (index) => {
  d.pageNum = index;
  getCourseData();
};

const getCourseData = async (gageNum) => {
 // d.keyword = keyword;
 // pickerStart

  console.log("시작일:"+d.pickerStart+", 종료일:"+d.pickerEnd+", 결재상태:"+d.stateFilter +", gageNum:"+gageNum);
  await call({
    id: "마의페이지-나의 강의 추천 리스트 조회",
    endpoint: `/api/sq/my/course/rcmd`,
    headers: "PUBLIC",
    data: { pageSize: d.pageSize,
            pageNumber: gageNum!=undefined?gageNum:d.pageNum,
            order: d.order,
            sort: d.sort,
            rcmdCtntStat: d.stateFilter, // 처리상태(A신청,P승인,R반려,W검토중) RCMD_CTNT_STAT
            startDtm : d.pickerStart,   // 시작일
            endDtm : d.pickerEnd,       // 종료일
    },
    onResponse({ data }) {
      console.log("나의추천가의 리스트 조회 : ", data);
      d.dataList = data;
      // d.dataList.top = data.topBoards;
      // d.dataList.normal = data.boards;
      return true;
    },
  });
};

const handleChangedFilter = (val1, val2) => {
  console.log(`${val1} ~ ${val2}`);
  d.pickerStart = val1;
  d.pickerEnd =  val2;

  // 제조회
  getCourseData();
};

/* 강의추천하기 팝업 */
const doCourseSuggestInsert = () => {
  console.log("강의추천하기 insert 팝업");
    d.saveFlag = "I"; // insert 등록
//===== 초기화 ==================
    d.ctntRcmdSeq = "";   // PK
    d.rcmdCtntStat = ""; // 상태
    d.title = "";  // 제목
    d.parentCateCode = ""; // 대분류코드
    d.cateCode = ""; // 중분류 코드
    d.thumbnail = ""; // 썸네일 이미지 경로
    d.fileSeq = "";   // 파일 PK
    d.url = ""; // 링크 경로
    d.applyDesc = ""; // 추천 사유
    d.rjctDesc = "";   // 반려 사유
    d.recommendWrite = true;
}

const modalRecommendWrite = ref(null);
/* 강의추천하기 조회 & 수정 */
const doCourseSuggestUpdate = (ctntRcmdSeq
                            , rcmdCtntStat
                            , title
                            , parentCateCode
                            , cateCode
                            , thumbnail
                            , fileSeq
                            , url
                            , applyDesc
                            , rjctDesc ) => {
  d.ctntRcmdSeq = ctntRcmdSeq;   // PK
  d.rcmdCtntStat = rcmdCtntStat; // 상태
  d.title = title;  // 제목
  d.parentCateCode = parentCateCode; // 대분류코드
  d.cateCode = cateCode; // 중분류 코드
  d.thumbnail = thumbnail; // 썸네일 이미지 경로
  d.fileSeq = fileSeq;   // 파일 PK
  d.url = url; // 링크 경로
  d.applyDesc = applyDesc; // 추천 사유
  d.rjctDesc = rjctDesc;   // 반려 사유
  // console.log( "===ctntRcmdSeq===>"+ctntRcmdSeq +" , rcmdCtntStat===>"+rcmdCtntStat +" , title===>"+title);
  // console.log(("r===cmdCtntStat===>"+rcmdCtntStat);

  if(rcmdCtntStat=="A" || rcmdCtntStat=="R"){ // 신청:A, 반려:R
    // 신청, 검토중 상태 수정가능 에서 수정 버튼 노출
    d.saveFlag = "U"; // update 수정
  }else if(rcmdCtntStat=="P"){ // 승인:P
    // 수정불가상태 : 승인완료, 반려
    d.saveFlag = "S"; // select만 가능
  }
  d.recommendWrite = true;

  // console.log("======= 자식 메소드 호출 =======");
  modalRecommendWrite.value.openPopUpEvent( ctntRcmdSeq
                                          , rcmdCtntStat
                                          , title
                                          , parentCateCode
                                          , cateCode
                                          , thumbnail
                                          , fileSeq
                                          , url
                                          , applyDesc
                                          , rjctDesc
                                          );
} // End doCourseSuggestUpdate()
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="강의 추천 내역"
              desc="소중한 의견 감사 드립니다! 빠른검토 후 공유할 수 있도록 하겠습니다 <br />
                    도움이 필요하실 땐 서울런 고객센터<br class='c-mo' />(1533-0909)로 연락주세요!"
              isSearch="true"
              @onSearch="getCourseData">
              <template v-slot:tail>
                <!-- @click="doCourseSuggestInsert"-->
                <Button @click="doCourseSuggestInsert" size="auto" sizeType="small" styleType="danger" text="강의 추천하기" />

              </template>
            </MypageTitle>
          </div>

          <div class="mypage__contents-search">
            <div class="c-form-group">
              <Select label="처리 상태" v-model="d.stateFilter" :options="d.stateOptions" sizeType="small" />
            </div>
            <div class="c-form-group">
              <CalendarFilter @changed="handleChangedFilter" />
            </div>
          </div>

          <div class="mypage__contents-body">
            <div class="c-table__head">
              <p>총 {{ d.dataList.totalRecords }}개</p>
            </div>
            <div class="c-table__wrap c-table__wrap-scroll">
              <table class="c-table c-table-center">
                <caption>
                  강의 추천 내역 리스트로 강의유형, 대분류, 중분류, 내용/경로,
                  등록일, 처리 상태 를 볼 수 있습니다.
                </caption>
                <colgroup>
                  <col width="80" />
                  <col width="80" />
                  <col />
                  <col width="100" />
                  <col width="100" />
                  <col width="80" />
                </colgroup>
                <thead>
                  <tr>
                    <th>대분류</th>
                    <th>중분류</th>
                    <th>내용/경로</th>
                    <th>등록일</th>
                    <th>처리 상태</th>
                    <th>반려사유</th>
                   </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in d.dataList.rows" >
                    <td>{{ item.parentCateCodeNm }}</td>
                    <td>{{ item.cateCodeNm }}</td>
                    <td class="c-table__title">
                        <p>
                        <router-link to="#" @click="doCourseSuggestUpdate( item.ctntRcmdSeq
                                                                         , item.rcmdCtntStat
                                                                         , item.title
                                                                         , item.parentCateCode
                                                                         , item.cateCode
                                                                         , item.thumbnail
                                                                         , item.fileSeq
                                                                         , item.url
                                                                         , item.applyDesc
                                                                         , item.rjctDesc
                                                                        )" >
                                  {{ item.applyDesc }}  </router-link>
                        </p>
                      <div class="c-badge c-badge-lg c-badge-light">
                        <p> {{item.url}} </p>
                      </div>
                    </td>
                    <td>{{ uConvertDate(item.regDtm, "YYYY.MM.DD") }} </td>
                    <td> <!-- 처리상태(A신청,P승인,R반려,W검토중) RCMD_CTNT_STAT-->
                      <strong :class="{'c-text-danger': item.rcmdCtntStat === 'R' || item.rcmdCtntStat === 'P',}"> {{ item.rcmdCtntStatNm }}</strong>
                    </td>
                    <td>
                      {{ item.rjctDesc }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination v-if="d.dataList?.rows?.length > 0"
                          :pageNumber="d.dataList.pageNumber"
                          :totalRecords="d.dataList.totalRecords"
                          :totalPages="d.dataList.totalPages"
                          :pageSize="d.pageSize"
                          @changedPageIndex="changedIndex" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- 강의 추천하기 팝업 -->
  <ModalRecommendWrite ref = "modalRecommendWrite"
                       :show="d.recommendWrite"
                       :saveFlag="d.saveFlag"
                       :ctntRcmdSeq= "d.ctntRcmdSeq"
                       :rcmdCtntStat= "d.rcmdCtntStat"

                       :title= "d.title"
                       :parentCateCode= "d.parentCateCode"
                       :cateCode= "d.cateCode"
                       :fileSeq= "d.fileSeq"
                       :url= "d.url"
                       :applyDesc= "d.applyDesc"
                       :rjctDesc= "d.rjctDesc"

                       @close="d.recommendWrite = false"
                       @getCourseData="getCourseData" />
  </template>

<style lang="scss" scoped>
.c-table__head {
  @include mobile {
    margin-top: 4rem;
  }
}
</style>
