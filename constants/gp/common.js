export default {
  DATE_YEAR: "YYYY",
  DATE_3U: "YYYY.MM.DD",
  DATE_5U: "YYYY.MM.DD HH:mm",
  EDITOR_OPTIONS: (id) => ({
    el: document.querySelector(id),
    language: "ko-KR",
    height: "500px",
    initialEditType: "wysiwyg",
    previewStyle: "vertical",
    toolbarItems: [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "link"],
    ],
    hideModeSwitch: true,
  }),
  KAKAO_SDK_KEY: "a20541066b657816ac1c45d002333825",
  MESSAGE: {
    IS_CONTINUE: "계속 하시겠습니까?",
    SUCCESS: "요청에 성공하였습니다.",
    IS_SCHEDULE_VALID_MIN_DATE:
      "현재 시간보다 과거 시간으로 설정할 수 없습니다.",
  },
};
