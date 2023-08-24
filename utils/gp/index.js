/**
 * graypoint - utils
 */

import {
  isNull,
  isUndefined,
  isEmpty,
  isArray,
  camelCase,
  kebabCase,
  snakeCase,
} from "lodash";
import { parse as qsParse, stringify as qsStringify } from "qs";
import { uGetLoginInfo } from "@/utils";

const getBuiltInComponentName = (qustTypeCode = "") => {
  /** 해당 코드는 가변형이 아니며, 기준 **/
  const param = qustTypeCode.toString().toUpperCase();
  if (["O", "N", "M"].includes(qustTypeCode)) {
    return "ONM"; // 객관식
  } else if (["E", "I"].includes(qustTypeCode)) {
    return "EI"; // 선다형
  } else if (["G", "K"].includes(qustTypeCode)) {
    return "GK"; // 단답형
  } else if (["W", "H", "L"].includes(qustTypeCode)) {
    return "WHL"; // 기술형 / 서술혀
  } else if (["P", "R", "Q"].includes(qustTypeCode)) {
    return "PRQ"; // 척도형
  } else if (["F", "J"].includes(qustTypeCode)) {
    return "FJ"; // OX형
  }
};

const setConverRemoveTag = (str = "") => {
  return str.replace(/<[^>]*>?/g, "");
};

const isStringCheckToXSS = (str = "") => {
  return str.toString().replace(/\<|\>|\&|\+|\-|\;|\"|\'|\%/g, "");
};

const getConvertXSSData = (data) => {
  const _data = {};
  const _cpData = { ...data };
  Object.entries(_cpData).forEach(([key, value]) => {
    Object.assign(_data, {
      [key]: isStringCheckToXSS(value),
    });
  });
  return _data;
};

// URL변수에 파라미터 값을 바인딩
const bindUrlVariable = (url, params = {}) => {
  let tempUrl = url;
  Object.entries(params || {}).forEach(([key, value]) => {
    tempUrl = tempUrl.replace(`{${key}}`, value);
  });
  return tempUrl;
};

const isUserLogin = () => {
  // * 정책 애매함..? 액세스 토큰 + 리프레시 토큰 여부 판단
  return (
    !isEmpty(uGetLoginInfo("accessToken")) &&
    !isEmpty(uGetLoginInfo("refreshToken"))
  );
};

const setReplacePattern = (str = "", patternEnum = "") => {
  switch (patternEnum) {
    case "mentoring-form-handphone":
      return str.replace(/[^0-9]/g, "");
    case "mentoring-form-email-suffix":
      return str.replace(/[^\w|.]/g, "");
  }
};

const getUserRole = () => {
  const resObj = {
    role: "guest",
  };
  try {
    const menteeYn = uGetLoginInfo("menteeYn") || false;
    const mentorYn = uGetLoginInfo("mentorYn") || false;
    const memberTypeCode = uGetLoginInfo("memberTypeCode");

    if (mentorYn.toString().toUpperCase() === "Y") {
      resObj.role = "mentor";
    } else if (
      menteeYn.toString().toUpperCase() === "Y" ||
      memberTypeCode === "JOINKND_002"
    ) {
      resObj.role = "mentee";
    } else if (memberTypeCode === "JOINKND_001") {
      // * 수정이 필요함
      resObj.role = "normal";
    }

    return resObj;
  } catch (err) {
    return resObj;
  }
};

const nextLogin = (
  { msg, path } = { msg: "로그인이 필요합니다.", path: "/login" }
) => {
  alert(msg);
  return navigateTo(path);
};

const isAccssMentoringCase = (useAction = "snb") => {
  const mentorYn = uGetLoginInfo("mentorYn");
  const menteeYn = uGetLoginInfo("menteeYn");
  const wasMentorYn = uGetLoginInfo("wasMentorYn");
  const wasMenteeYn = uGetLoginInfo("wasMenteeYn");

  let managementKey = {
    menuName: "멘토링 관리",
    isActive: false,
    subMenu: [
      { menuName: "멘토링 관리", isActive: false, url: "/mypage/management/mentor" },
      { menuName: "이전 멘토링 보기", isActive: false, url: "/mypage/management/before" },
      { menuName: "내 배지 내역", isActive: false, url: "/mypage/management/awards" },
      { menuName: "멘토링 정산 내역", isActive: false, url: "/mypage/management/calculate" },
    ],
  };

  let communityKey = {
    menuName: "멘토 커뮤니티",
    isActive: false,
    subMenu: [
      { menuName: "멘토 공유방", isActive: false, url: "/mypage/community/board/list/share" },
      {
        menuName: "멘토 공지사항", isActive: false,
        url: "/mypage/community/board/list/notice",
      },
    ],
  };

  let lecutreKey = {
    menuName: "멘토 교육",
    isActive: false,
    subMenu: [
      { menuName: "멘토 교육", isActive: false, url: "/mypage/edu/apply" },
      { menuName: "수강 중 교육", isActive: false, url: "/mypage/edu/ing" },
      { menuName: "수료한 교육", isActive: false, url: "/mypage/edu/compl" },
    ],
  };

  let cpKey = [{ ...managementKey }, { ...communityKey }, { ...lecutreKey }];

  try {
    if (mentorYn === "N") {
      if (menteeYn === "Y") {
        // * 멘티일 경우
        const [management] = cpKey[0].subMenu;
        managementKey.subMenu[0].url = management.url.replace(
          "mentor",
          "mentee"
        );
        if (wasMentorYn === "N") {
          // 과거에 멘토를 하지 않았을 경우 (정산 내역 제거)
          managementKey.subMenu = cpKey[0].subMenu.slice(0, 3);
        }
        communityKey = {};
        lecutreKey = {};
      } else {
        // * 일반/차상위 일 경우
        const memberTypeCode = uGetLoginInfo("memberTypeCode");
        const mentoringYn = uGetLoginInfo("mentoringYn");
        switch (memberTypeCode) {
          case "JOINKND_002": {
            // 차상위 일 경우
            if (mentoringYn === "N") {
              // 초등일 경우
              managementKey.subMenu = [].concat(cpKey[0].subMenu.slice()[2]);
            } else {
              // 초등이 아닐 경우
              if (wasMentorYn === "N" && wasMenteeYn === "Y") {
                // 과거에 멘토를 하지 않았고 멘토링 이력이 있을 경우 (멘티) (정산 내역 제거)
                managementKey.subMenu = cpKey[0].subMenu.slice(0, 3);
              } else if (wasMentorYn === "N" && wasMenteeYn === "N") {
                // 과거에 멘토링 이력이 없는 경우 (멘토/멘티)

                const [management, , badge] = cpKey[0].subMenu.slice();
                management.url = management.url.replace("mentor", "mentee");
                managementKey.subMenu = [].concat(management, badge);
              }
            }
            break;
          }
          case "JOINKND_001": {
            // 일반 일 경우
            if (wasMentorYn === "Y") {
              // * 과거에 멘토링 경험이 있다면 (과거멘토)
              managementKey.subMenu = cpKey[0].subMenu.slice(1, 4);
            } else if (wasMenteeYn === "Y") {
              // * 과거에 멘토링 경험이 있다면 (과거멘티)
              managementKey.subMenu = cpKey[0].subMenu.slice(1, 3);
            } else {
              // 그 외의 경우 (멘토링을 경험하지 않은 경우)
              managementKey.subMenu = [].concat(cpKey[0].subMenu.slice()[2]);
            }
            break;
          }
        }
        communityKey = {};
        lecutreKey = {};
      }
    }

    // return [managementKey, communityKey, lecutreKey];
    let menus = [{...managementKey}];
    if (Object.keys(communityKey).length > 0) menus.push(communityKey);
    if (Object.keys(lecutreKey).length > 0) menus.push(lecutreKey);
    // console.log('>>>>> menus', menus);
    return menus;
  } catch (err) {
    console.error(err);
    // return [{}, {}, {}];
    return [];
  }
};

const getMentoringBoardMasterKey = (name = "") => {
  switch (name) {
    case "share": // DB 인덱스 키 7번 [ 멘토 : 공유방 ]
      return 7;
    case "notice": // DB 인덱스 키 10번 [ 멘토 : 공지사항 ]
      return 10;
    default:
      return null;
  }
};

export {
  isNull,
  isEmpty,
  isArray,
  isUndefined,
  camelCase,
  kebabCase,
  snakeCase,
  qsParse,
  qsStringify,
  getBuiltInComponentName,
  setConverRemoveTag,
  isStringCheckToXSS,
  getConvertXSSData,
  isUserLogin,
  setReplacePattern,
  getUserRole,
  nextLogin,
  isAccssMentoringCase,
  bindUrlVariable,
  getMentoringBoardMasterKey,
};
