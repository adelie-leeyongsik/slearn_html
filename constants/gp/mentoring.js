export default {
  MENTORING_COMMON_BEFORE_LIST: "/api/sq/mentoring/history/{role}", // params : { pageSize , pageNumber , order , sort , startDate , endDate }
  MENTORING_MENTOR_BEFORE_LIST_CATE_APPLICATION:
    "/api/sq/mentor/diploma/{smIdx}", // params : { pageSize , pageNumber , order , sort  }
  MENTORING_COMMON_BEFORE_DETAIL: "/api/sq/mentoring/history/detail/{smtrIdx}", // params : { pageSize , pageNumber , order , sort , startDate , endDate }
  MENTORING_ACTIVITY_CERTIFICATE_REQ: "/api/sq/mentoring/reqdiploma",  // 멘토 활동증명서 발급 요청
  // MENTORING_MENTOR_SEND_CERTIFICATE: "/api/sq/mentor/reqdiploma",
  MENTORING_COMMON_AWARD_LIST: "/api/sq/mentoring/award/{role}", // params : { pageSize , pageNumber , order , sort , year  }
  MENTORING_BOARD_LIST: "/api/sq/mentoring/{board}/list", // params : { pageSize , pageNumber , startDate , endDate , title }
  MENTORING_BOARD_VIEW: " /api/sq/board/{boardSeq}",
  MENTORING_BOARD_COMMENT: "/api/sq/mentoring/down/{boardSeq}",
  MENTORING_BOARD_WRITE: "/api/sq/board", // params : { title , content }
  MENTORING_BOARD_DELETE: "/api/sq/board/{boardSeq}", // [DELETE] 게시글삭제
  MENTORING_MANAGEMENT: "/api/sq/mentoring/mgmt", // params : { pageSize , pageNumber }
  MENTORING_BOARD_WRITE_SHARE_FILE_SPEC: "/api/sq/mentoring/share/filespec",
  MENTORING_MENTEE_MENTORING_SUBMIT: "/api/sq/mentee/subject",
  MENTORING_REMATCHING_SUBMIT: "/api/sq/mentoring/rematch",
  MENOTRING_COMMON_CODE_IS_SUBMIT: "/api/sq/mentee/subject/code",
  MENTORING_CYCLE_RESUBMIT_FOR_MENTEE:
    "/api/sq/mentoring/detail/cycle/{smtdIdx}",
  MENTORING_HOOKY_SUBMIT: "/api/sq/mentoring/attend/absence",
  MENTORING_HOOKY_SUBMIT_REASON: "/api/sq/mentoring/attend/absence/reason",
  MENTORING_MIDDLE_WARE_IS_AUTH_CHECK: "/api/sq/{role}/status/{userId}",
  MENTORING_MANAGEMENT_FOR_MENTOR: "/api/sq/mentoring/mgmt/mentor",
  MENTORING_BOARD_COMMENT_SUBMIT: "/api/sq/comment/", // params : { comment }
  MENTORING_BOARD_COMMENT_MODIFY_SUBMIT: "/api/sq/comment/{comtSeq}", // params : { comment }
  MENTORING_LECTURE_FORM_LIST: "/api/sq/mentoring/syllabus/form/{smtrIdx}",
  MENTORING_LECTURE_FORM_SUBMIT: "/api/sq/mentoring/syllabus/form",
  MENTORING_OFFLINE_LOCATION_SEARCH: "/api/sq/mentoring/offline/place", // params : { countryStat , townCity }
  MENTORING_ABOUT_INTRO: "/api/sq/mentoring/intro", // params : { pageSize , pageNumber , order , sort }
  MENTORING_TOKEN_RENEWEL: "/api/login/new_access_token",
  MENTORING_FORM_CODE_DATA_LIST_GUEST: "/api/mentor/apply/form_guest",
  MENTORING_FORM_CODE_DATA_LIST: "/api/mentor/apply/form",
  MENTORING_FORM_IS_EMAIL_DUPLICATE: "/api/mentor/apply/email_dup_check",
  MENTORING_FORM_SUBMIT_PATH: "/api/mentor/apply",
  MENTORING_DEEP_LEARNING_FORM_LIST:
    "/api/sq/mentoring/syllabus/deep/form/{smtrIdx}",
  MENTORING_DEEP_LEARNING_FORM_SUBMIT: "/api/sq/mentoring/syllabus/deep/form",
  MENTORING_REPORT_FORM: "/api/sq/mentoring/report",
  MENTORING_REPORT_READ_FORM: "/api/sq/mentoring/report/{smtdIdx}",
  MENTORING_READ_FOR_SYLLABUS: "/api/sq/mentoring/syllabus/{smtrIdx}/{seq}",
  MENTORING_READ_FOR_DEPP_SYLLABUS: "/api/sq/mentoring/syllabus/deep/{smtrIdx}",
  MENTORING_SEND_SMS: "/api/sq/mentoring/{role}/sms", // [POST} - 멘토링 문자 보내기 (멘토/멘티) { role = mentor/mentee }
  MENTORING_CHANGE_SCHEDULE_FOR_MENTEE: "/api/sq/mentoring/reqhistory", // [POST] - 멘토링 관리 일정/장소 변경 -멘티
  MENTORING_CHANGE_SCHEDULE_FOR_MENTOR: "/api/sq/mentoring/mgmt/mentor/chg", // [POST] - 멘토링 관리 일정/장소 변경 -멘토
  MENTORING_SATISFACTION_FORM_LIST_OR_SUBMIT: "/api/sq/mentoring/satisfaction", // [GET/POST] - 멘토링 만족도 조사 조회 및 등록
  MENTORING_LECTURE_FORM_VIEW_LIST:
    "/api/sq/mentoring/syllabus/{smtrIdx}/{seq}", // [GET} - 멘토링 강의 계획서 조회 (readonly)
  MENTORING_ATTEND_SUBMIT: "/api/sq/mentoring/attend", // [POST] - 멘토/멘티 오프라인 출결 처리
  MENTORING_SETTLE: "/api/sq/mentor/settle/{type}", // [GET] - 멘토링 정산내역 교육/활동 조회
  MENTORING_TERMS: "/api/mentor/terms", // [GET] - 개인정보 관련 조회
  MENTORING_BOARD_MASTER_SPECS: "/api/sq/common/mast", // [GET} - 게시판 설정 마스터 데이터 조회
  MENTORING_CYCLE_SUBMIT: "/api/sq/mentee/subject/cycle", // [PUT/GET] - 멘토링 연장 신청 (등록/조회)
  MENTORING_CYCLE_FOR_MENTOR_SUBMIT: "/api/sq/mentoring/mgmt/cycle", // [PUT] - 멘토링 연장 신청
  MENTORING_CYCLE_FOR_MENTOR_RESTART: "/api/sq/mentoring/mgmt/restart", // [PUT] - 멘토링 다시 시작

  // 멘토교육
  MENTORING_EDU_INFO: "/api/sq/mentor/edu", // 멘토 교육정보
  MENTORING_EDU_ING_INFO: "/api/sq/mentor/edu/in", // 멘토 수강중 교육정보
  MENTORING_EDU_DETAIL_INFO: "/api/sq/mentor/edu/detail/{slcIdx}", // 멘토 교육 상세정보
  MENTORING_EDU_APPLY: "/api/sq/mentor/edu", // 멘토 교육 신청
  MENTORING_EDU_COMPL_INFO: "/api/sq/mentor/edu/compl", // 멘토 수료한 교육정보
  MENTORING_EDU_VIDEO_INFO: "/api/sq/mentor/edu/cs/{slcIdx}", // 멘토 교육 동영상 정보(API 없음)
};
