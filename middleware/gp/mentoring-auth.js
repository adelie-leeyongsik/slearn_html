import { uGetLoginInfo } from "@/utils";
import { nextLogin } from "@/utils/gp";
import { call } from "@/api";

export default defineNuxtRouteMiddleware(async (to) => {
  const {
    MENTORING: { MENTORING_MIDDLE_WARE_IS_AUTH_CHECK },
  } = useAppConfig();

  const { role } = getUserRole();

  if (role === "guest" && to.name !== "mentorings") {
    return nextLogin();
  }

  switch (to.name) {
    case "mentorings": {
      // * 비회원 / 회원 , 멘토 , 멘티 제어할 필요 없음 , 섹션 기본 지정
      if (isUndefined(to.query.section)) {
        to.query.section = "about";
        await navigateTo("/mentorings");
      }
      break;
    }
    case "mypage-management-mentor": {
      if (role === "mentor") {
        // * 멘토만 접근, 로그인한 사용자가 멘토일 경우만 접속 가능

        try {
          const userId = uGetLoginInfo("userid");
          if (isUndefined(userId)) {
            // * 강제로 삭제할 경우 스택 무너지므로 세션 종료
            uDelLoginInfo("accessToken");
            uDelLoginInfo("refreshToken");
            nextLogin();
          }

          await call({
            id: "멘토링 관리 - 멘토 상태값 조회",
            endpoint: MENTORING_MIDDLE_WARE_IS_AUTH_CHECK.replace(
              /{role}/,
              "mentor"
            ).replace(/{userId}/, userId),
            onResponse: async ({ message: mentoringCode }) => {
              /**
               * 멘토링 신청 전 : AB
               * 멘토링 재매칭 중 : RM
               * 멘토링 신청 완료, 매칭 대기 중 : AC
               * 멘토링 매칭 완료 : MC
               */
              Object.assign(to.params, {
                mentoringCode,
              });
              await navigateTo({
                path: "/mypage/management/mentor",
              });
            },
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      }

      break;
    }
    case "mypage-management-mentee": {
      if (role === "mentee") {
        // * 멘티/차상위 만 접근, 로그인한 사용자가 멘티일 경우만 접속 가능
        try {
          const userId = uGetLoginInfo("userid");
          if (isUndefined(userId)) {
            // * 강제로 삭제할 경우 스택 무너지므로 세션 종료
            uDelLoginInfo("accessToken");
            uDelLoginInfo("refreshToken");
            return nextLogin();
          }

          await call({
            id: "멘토링 관리 - 멘티 상태 값 조회",
            endpoint: MENTORING_MIDDLE_WARE_IS_AUTH_CHECK.replace(
              /{role}/,
              "mentee"
            ).replace(/{userId}/, userId),
            onResponse: async ({ message: mentoringCode }) => {
              /**
               * 멘토링 신청 전 : AB
               * 멘토링 재매칭 중 : RM
               * 멘토링 신청 완료, 매칭 대기 중 : AC
               * 멘토링 매칭 완료 : MC
               */
              Object.assign(to.params, {
                mentoringCode,
              });
              await navigateTo({
                path: "/mypage/management/mentee",
              });
            },
          });
        } catch (err) {
          console.error(err);
        }
      } else {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      }
      break;
    }
    case "mypage-community-board-list-segment": {
      if (role !== "mentor") {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      } else if (!["notice", "share"].includes(to.params.segment)) {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      }
      break;
    }
    case "mypage-community-board-detail-segment-boardSeq": {
      if (role !== "mentor") {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      }
      break;
    }
    case "mypage-community-board-mode-segment": {
      if (role !== "mentor") {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      } else {
        const { mode, segment } = to.params;
        if (!["notice", "share"].includes(segment)) {
          return nextLogin({
            msg: "존재하지 않는 경로 입니다.\n메인 페이지로 이동합니다.",
            path: "/",
          });
        }

        if (!["write", "modify"].includes(to.params.mode)) {
          return nextLogin({
            msg: "존재하지 않는 경로 입니다.\n메인 페이지로 이동합니다.",
            path: "/",
          });
        } else {
          if (to.params.mode === "modify" && isUndefined(to.query.seq)) {
            return nextLogin({
              msg: "존재하지 않는 경로 입니다.\n메인 페이지로 이동합니다.",
              path: "/",
            });
          }
        }
      }
      break;
    }
    case "mypage-management-calculate": {
      if (role !== "mentor") {
        return nextLogin({
          msg: "접근 불가능한 페이지 입니다.\n메인 페이지로 이동합니다.",
          path: "/",
        });
      }
      break;
    }
  }
});
