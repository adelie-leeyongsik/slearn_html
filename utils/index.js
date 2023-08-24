import { isEqual } from "lodash";

/** @format */
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import moment from "moment";
import SecureLS from "secure-ls";
export { isEqual };

export const uExtractNumber = (str) => String(str).replace(/[^\d]+/g, "");

export const uNumberWithComma = (number) =>
  (Number(number) < 0 ? "-" : "") +
  uExtractNumber(number).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

let currentKey = 0;
const MAX_KEYCOUNT_ROUTE = 900000000;
export const uGenKey = (prefix = null) => {
  if (currentKey > MAX_KEYCOUNT_ROUTE) {
    currentKey = 0;
  }
  return (prefix ? `${prefix}-` : null) + currentKey++;
};

export const uResetKey = () => {
  currentKey = 0;
};

export const uIs24HoursPassed = (targetDate) => {
  const currentTime = moment();
  const targetTime = moment(targetDate, "YYYYMMDDHHmmss");
  const diffHours = currentTime.diff(targetTime, "hours");
  return diffHours < 24;
};

export const uTimer = (update, endCallback, seconds) => {
  update(seconds);
  const timerId = setInterval(() => {
    --seconds;
    update(seconds);
    if (seconds < 1) {
      clearInterval(timerId);
      endCallback();
    }
  }, 1000);
  return timerId;
};

export const uGetCountDownText = (seconds) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
};

export const uRegexpr = (type, text) => {
  switch (type) {
    // 영문 혹은 숫자, 숫자로 시작 제외
    case "ID":
      return /^[A-Za-z][A-Za-z0-9]*$/.test(text);
    // 영문, 숫자, 특수문자 조합 10자리 이상
    case "PW_MAIN":
      return /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{10,12}$/.test(
        text
      );
    case "PW_NUM":
      return uCheckNum(text);
    default:
      return false;
  }
};

export const uCheckNum = (str) => {
  if (!/(\w)\1\1/.test(str)) {
    var cnt = 0;
    var cnt2 = 0;
    var tmp = "";
    var tmp2 = "";
    var tmp3 = "";
    for (var i = 0; i < str.length; i++) {
      // charAt(): 문자값 반환
      tmp = str.charAt(i);
      tmp2 = str.charAt(i + 1);
      tmp3 = str.charAt(i + 2);

      // charCodeAt(): 유니코드값 반환
      if (
        tmp.charCodeAt(0) - tmp2.charCodeAt(0) === 1 &&
        tmp2.charCodeAt(0) - tmp3.charCodeAt(0) === 1
      ) {
        cnt = cnt + 1;
      }
      if (
        tmp.charCodeAt(0) - tmp2.charCodeAt(0) === -1 &&
        tmp2.charCodeAt(0) - tmp3.charCodeAt(0) === -1
      ) {
        cnt2 = cnt2 + 1;
      }
    }
    if (cnt > 0 || cnt2 > 0) {
      //연속된 문자를 3개 이상 사용하실 수 없습니다. (ex: 123, 321, abc, cba 포함 불가)
      return false;
    }
  } else {
    //같은 문자를 3개 이상 사용할 수 없습니다.
    return false;
  }

  return true;
};

export const uIndexingProc = (list, keyProperty, options = {}) => {
  if (!list) return [[], {}];
  const { onLoop } = options;
  let keys = [];
  let items = {};
  list.forEach((item) => {
    const key = item[keyProperty];
    items[key] = item;
    keys.push(key);
    onLoop && onLoop(item, key);
  });
  return [keys, items];
};

export const uModUrlQuery = (updateObj) => {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  for (const [key, value] of Object.entries(updateObj)) {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  }
  url.search = searchParams.toString();
  history.replaceState(history.state, "", url.toString());
};

export const uImage = (url) => {
  return new URL(`/assets/images/${url}`, import.meta.url).href;
};

export const uEnvMode = () => useRuntimeConfig().public.envMode;

export const uGetAccessOption = (type) => {
  switch (type) {
    case "LOGIN":
      return {
        needLogin: true,
      };
    default:
      return {
        needLogin: false,
      };
  }
};

export const uConvertDate = (val, type) => {
  return moment(val, "YYYYMMDD").format(type);
};

export const uConvertDateTime = (val, type) => {
  return moment(val, "YYYYMMDDHHmmSS").format(type);
};

export const uConvertKbToMb = (kb, decimalPlaces = 0) => {
  const mb = kb / 1024; // 1 MB = 1024 KB
  let roundedMb;

  if (decimalPlaces === 0) {
    roundedMb = Math.ceil(mb);
  } else {
    const multiplier = Math.pow(10, decimalPlaces);
    roundedMb = Math.floor(mb * multiplier) / multiplier;
  }

  return isNaN(roundedMb) ? 0 : roundedMb;
};

export const uSetLoginInfo = (data) => {
  const keys = Object.keys(data);

  keys.forEach((f) => {
    const str = typeof data[f] === "object" ? JSON.stringify(data[f]) : data[f];
    sessionStorage.setItem(f, str);
  });
};

export const uGetLoginInfo = (key) => {
  return sessionStorage.getItem(key);
};

export const uDelLoginInfo = (key) => {
  return sessionStorage.removeItem(key);
};

const ls = new SecureLS({ isCompression: false });
export const uSetStorage = (key, data) => {
  return ls.set(key, data);
};

export const uGetStorage = (key) => {
  return ls.get(key);
};

export const uDelStorage = (key) => {
  return ls.remove(key);
};

export const uEditorOptions = () => {
  return {
    el: "",
    language: "ko-KR",
    initialValue: "",
    previewStyle: "vertical",
    height: "500px",
    initialEditType: "wysiwyg",
    placeholder: "내용을 입력해주세요",
    hideModeSwitch: true,
  };
};

export const uIsMobileDevice = () => {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
};

export const uEmailList = () => {
  return [
    {
      text: "직접입력",
      value: "",
    },
    {
      text: "naver.com",
      value: "naver.com",
    },
    {
      text: "daum.net",
      value: "daum.net",
    },
    {
      text: "gmail.com",
      value: "gmail.com",
    },
    {
      text: "kakao.com",
      value: "kakao.com",
    },
    {
      text: "nate.com",
      value: "nate.com",
    },
  ];
};

export const doMasking = (str, num) => {
  let masking = "";
  let cnt = Number(str.length - num);
  let reg = new RegExp(`(?<=.{${cnt}}).`, `gi`);

  masking = str.replace(reg, "*");

  return masking;
};

export const uCheckWithPass = () => {
  const resultkWithPass = (data) => {
    const popup = window.open(
      "",
      "passPop",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=620,height=920"
    );

    const form = document.createElement("form");
    form.setAttribute("id", "myForm");
    form.setAttribute(
      "action",
      "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb"
    );
    form.setAttribute("method", "post");

    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "m");
    input.setAttribute("value", "checkplusService");
    form.appendChild(input);

    const input2 = document.createElement("input");
    input2.setAttribute("type", "hidden");
    input2.setAttribute("name", "EncodeData");
    input2.setAttribute("value", data.encodeData);
    form.appendChild(input2);

    form.setAttribute("target", "passPop");
    popup.document.body.appendChild(form);
    form.submit();
  };

  call({
    method: "get",
    id: "PASS 본인인증",
    endpoint: "/api/niceid/ident_by_niceid",
    data: {},
    onResponse({ data }) {
      resultkWithPass(data);
    },
  });
};

window.addEventListener("message", (e) => {
  if (typeof e.data === "string") {
    if (JSON.parse(e.data).function === "niceid_succ") {
      uPassCallBack(e.data);
    } else if (JSON.parse(e.data).function === "onepass_login_succ") {
      snsCallBack("onepass", e.data);
    }
  }
});

export const uPassCallBack = (val) => {
  const login = useLoginStore();
  login.passInfo = JSON.parse(val);
};

export const uSocialLogin = async (type) => {
  const loginWithSns = (data) => {
    uDelStorage("snsCode");

    const popup = window.open(
      data.href,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=620,height=920"
    );

    let timer = setInterval(() => {
      if (popup.closed) {
        clearInterval(timer);
        snsCallBack(type);
      }
    }, 1000);
  };

  const loginWithDisital = (data) => {
    const popup = window.open(
      "",
      "disitalPop",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=620,height=920"
    );

    const form = document.createElement("form");
    form.setAttribute("id", "myForm");
    form.setAttribute("action", data.authorizationUrl);
    form.setAttribute("method", "post");

    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "authnRequest");
    input.setAttribute("value", data.authnRequest);
    form.appendChild(input);

    const input2 = document.createElement("input");
    input2.setAttribute("type", "hidden");
    input2.setAttribute("name", "pageType");
    input2.setAttribute("value", "W");
    form.appendChild(input2);

    form.setAttribute("target", "disitalPop");
    popup.document.body.appendChild(form);
    form.submit();
  };

  await call({
    method: "get",
    id: "로그인",
    endpoint: `/api/${type}/authorization`,
    data: {},
    onResponse({ data }) {
      if (type === "onepass") {
        loginWithDisital(data);
      } else {
        loginWithSns(data);
      }
    },
  });
};

export const snsCallBack = (type, data) => {
  let snsCodes = {
    naver: "JOIN_T003",
    kakao: "JOIN_T002",
    onepass: "JOIN_T004",
  };

  const login = useLoginStore();
  const modal = useModalStore();
  const router = useRouter();

  let onePass = {};

  if (!isEmpty(data)) {
    onePass = JSON.parse(data);
  }

  let code = !isEmpty(onePass) ? onePass.data.userKey : uGetStorage("snsCode");

  let path = router.currentRoute.value.path;

  if (!isEmpty(code)) {
    if (path.indexOf("login") > 0) {
      //로그인시

      call({
        method: "post",
        id: "로그인",
        endpoint: `/api/${type}/login`,
        data: {
          code: code,
          onepass_ci: !isEmpty(onePass) ? onePass.data.ci : null,
        },
        onResponse({ data, status, message }) {
          console.log("login info ", data);
          console.log("login status ", status);
          if (status === 200) {
            if (isEqual(data.passwdEmpty, "Y")) {
              uSetLoginInfo({ accessToken: data.accessToken });
              login.userId = data.loginid;
              router.push("/login/new-pw");
            } else {
              //로그인 성공
              uSetLoginInfo(data);

              login.userId = data.userid;

              if (isEqual(data.qlfcRequired, "Y")) {
                //자격재검증 대상
                router.push("/revalidation");
              } else if (isEqual(data.slAgrRequired, "Y")) {
                //서울런 약관동의 및 본인인증
                router.push("/revalidation/certification");
              } else {
                router.push("/");
              }
            }
          } else if (status === 400) {
            modal.alert(
              "알림",
              "회원정보가 존재하지 않습니다.<br/>서비스 이용을 원하시는 경우 회원가입을 진행해주세요."
            );
          } else if (status === 406) {
            uSetLoginInfo(data);

            login.userId = d.id;

            modal.alert(
              "알림",
              "비밀번호를 변경한지 3개월이 지났습니다.<br/> 비밀번호를 변경해주세요.",
              () => {
                router.push("/login/pw-reset");
              }
            );

            return;
          } else if (status === 407) {
            uSetLoginInfo(data);

            login.userId = d.id;

            modal.alert(
              "알림",
              "1년 간 이용내역이 없어 휴면회원으로 전환 되었습니다.<br/>서울런 서비스를 계속 이용하시려면 비밀번호 변경 후 재 로그인하여 사용하시기 바랍니다.",
              () => {
                router.push("/login/pw-reset");
              }
            );
          } else if (status === 408) {
            d.hasError = true;

            modal.alert("알림", message);
            return;
          } else if (status === 403) {
            data.status = status;
            login.loginResult = data;
            modal.alert("알림", message, () => {
              router.push("/login/result");
            });
          } else if (status === 402) {
            data.status = status;
            login.loginResult = data;
            modal.alert("알림", message, () => {
              router.push("/login/result");
            });
          } else {
            modal.alert("알림", message);
            return;
          }
        },
      });
    } else {
      //회원가입시
      if (!isEmpty(onePass)) {
        login.snsCd = snsCodes[type];
        login.snsId = onePass.data.userKey;
        login.snsCi = onePass.data.ci;
      } else {
        call({
          method: "post",
          id: "로그인",
          endpoint: "/api/join/sns/member_info",
          data: {
            snsCd: snsCodes[type],
            code: code,
          },
          onResponse({ data, status, message }) {
            if (status === 200) {
              login.snsCd = snsCodes[type];
              login.snsId = isEmpty(data.response)
                ? data.id.toString()
                : data.response.id;
            } else if (status === 400) {
              modal.alert("알림", message);
            }
          },
        });
      }
    }
  }
};

export const uFileDownload = async (fileSeq, type) => {
  let url = "/api/sq/common/down";
  let fileSeqData = { fileSeq: fileSeq };

  if (type === "drive") {
    url = "/api/sq/mydrive/file";
    fileSeqData = {
      dvFlSeq: fileSeq,
    };
  }

  await call({
    id: "파일 다운로드 API",
    endpoint: url,
    responseType: "blob",
    data: fileSeqData,
    onResponse({ response, headers }) {
      const blob = new Blob([response]);

      const fileUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.style.display = "none";

      const injectFilename = () => {
        const disposition = headers["content-disposition"];
        const fileName = decodeURI(
          disposition
            .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
            .replace(/['"]/g, "")
        );
        return fileName;
      };

      link.download = injectFilename();
      document.body.appendChild(link);
      link.click();
      link.remove();
      return true;
    },
  });
};

export const uGetImgPath = (fileInfo) => {
  return fileInfo.fileRepo.webPath + fileInfo.filePath + fileInfo.saveFileName;
};

export const uGetBoardInfo = async (boardName) => {
  console.log("uGetBoardInfo>>", boardName);
  const boardMaster = {
    inquiry: 2,
    faq: 3,
    // mentoNotice: 4, 멘토링 공지사항 관리
    // mentoInquiry: 5,멘토링 1:1문의관리
    // mentoFaq : 6, 멘토링 자주하는 질문
    // mentoSharing: 7, 멘토 공유방
    // mentoStory: 8, 우수멘토링이야기
    mentoringNotice: 10, // * 멘토 공지사항
    mentoringShare: 7, // * 멘토 공유방
    notice: 11,
    join: 13,
    drive: 14,
    event: 15,
  };

  let responseData = {};

  await call({
    id: "게시판 정보 API",
    endpoint: "/api/sq/common/mast",
    data: { boardMastCate: boardMaster[boardName] },
    onResponse({ data }) {
      responseData = data;
    },
  });
  return responseData;
};

export const uGetSubtitle = (idx) => {
  const login = useLoginStore();

  let age = isEmpty(login.joinInfo) ? uGetLoginInfo("age") : login.joinInfo.age;
  let joinCode = isEmpty(login.joinInfo)
    ? uGetLoginInfo("memberJoinTypeCode")
    : login.joinInfo.join_pcd;

  let obj = {
    1: "자격재검증",
    2: "약관동의 및 본인인증",
    3: "학습사이트 변경",
    4: "학습정보 사이트 확인",
  };

  if (age > 18 && isEqual(joinCode, "JOIN_P002")) {
    obj = {
      1: "자격재검증",
      2: "약관동의 및 본인인증",
      3: "대학교 진학 여부",
      4: "학습사이트 변경",
      5: "학습정보 사이트 확인",
    };
  }

  return obj[idx];
};

export const uFilteringPersonalInfo = async (title, body) => {
  let result = true;
  const modal = useModalStore();

  await call({
    method: "post",
    id: "로그인",
    endpoint: `/api/personal_info/filtering`,
    data: { title: title, body: body },
    onResponse({ data, status }) {
      if (status == 400) {
        modal.alert("알림", "내용에 개인정보가 포함되어 있습니다.");
        result = false;
      }
    },
  });

  return result;
};

export const uGetTermsInfo = async (compCode, cpId, termDivCode) => {
  // compCode 회사 코드, cpId 콘텐츠 제공자 ID, termDivCode 약관 구분 코드
  let terms = "";
  await call({
    id: "약관 조회",
    endpoint: `/api/sq/terms`,
    data: { compCode: compCode, cpId: cpId, termDivCode: termDivCode },
    onResponse({ data, status }) {
      console.log("약관", data);
      terms = data;
    },
  });

  return terms;
};

export const uGoToLearnSite = (url, code) => {
  const modal = useModalStore();

  call({
    method: "post",
    id: "학습사이트 이동",
    endpoint: "/api/sq/my/course/goto",
    data: {
      cp: code,
    },
    onResponse({ data, status, message }) {
      console.log("data", data);
      console.log("status", status);

      if (status === 200) {
        const form = document.createElement("form");
        form.setAttribute("id", "siteForm");
        form.setAttribute("action", url);
        form.setAttribute("method", "post");
        form.setAttribute("target", "learn-site");

        let paramKeys = Object.keys(data);

        paramKeys.forEach((f) => {
          const input = document.createElement("input");
          input.setAttribute("type", "hidden");
          input.setAttribute("name", f);
          input.setAttribute("value", data[f]);
          form.appendChild(input);
        });

        document.body.appendChild(form);

        window.open("about:blank", "learn-site");

        form.submit();
      } else {
        modal.alert("알림", message);
      }
    },
  });
};
