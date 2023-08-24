import axios from "axios";
import { API_DEBUG, API_HOST } from "@/appSettings";
import { useModalStore, useLoadingStore } from "@/store";

const getPresetHeaders = (headers) => {
  switch (headers) {
    case "FILE_UPLOAD":
      return {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + uGetLoginInfo("accessToken"),
      };
    case "WELAAA_CP":
      return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + uGetLoginInfo("accessToken"),
      };
    case "MEGASTUDY_CP":
      return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://slearn.seoul.go.kr",
        Referer: "https://slearn.seoul.go.kr/",
        Authorization: "Bearer " + uGetLoginInfo("accessToken"),
      };
    case "OTHER_CP":
      return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + uGetLoginInfo("accessToken"),
      };
    default:
      return {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + uGetLoginInfo("accessToken"),
      };
  }
};

export const call = async (settings) => {
  const {
    id,
    url,
    endpoint,
    method,
    headers,
    beforeRequest,
    data,
    onResponse,
    onError,
    onFinally,
    responseType,
    preventStopSpinner,
    isOveray,
  } = settings;

  console.log(responseType);

  // 선행 조건 확인
  if (beforeRequest) {
    // 비동기 작업이 필요하면 기다리고
    const validRequest = await beforeRequest();
    // 선행 조건을 통과하지 못하면 return
    if (validRequest === false) {
      API_DEBUG && console.log("🟡 요청 취소:", id);
      return false;
    }
  }

  const setParam = {
    method: method || "get",
    url: endpoint
      ? (uEnvMode() === "PUB" || uEnvMode() === "DEV" ? "" : API_HOST) +
        endpoint
      : url,
    headers: getPresetHeaders(headers),
    responseType: !responseType ? "json" : responseType,
    overay: isOveray,
    customError: onError ? true : false,
  };

  if (
    isEqual(setParam.method.toLowerCase(), "get") ||
    isEqual(setParam.method.toLowerCase(), "delete")
  ) {
    setParam.params = data;
  } else {
    setParam.data = data;
  }

  console.log("setParam", setParam);

  // 호출
  // 타겟 URL 설정
  // endpoint로 호출하는 경우(미리 정의된 HOST를 붙인다)
  // url로 호출하는 경우는 그대로 호출
  return axios(setParam)
    .then(({ data, status, config, headers }) => {
      API_DEBUG && console.log(`🟢 API - ${config.url}\n`);
      return onResponse({
        data: data.data,
        status: data.status,
        message: data.message,
        response: data,
        headers: headers,
      });
    })
    .catch((error) => {
      API_DEBUG && console.log(error);
      API_DEBUG &&
        console.log(
          `🔴 API ${id}, ${error.response?.data?.code}, ${error.response?.data?.message}\n`,
          error.response?.data
        );

      onError && onError({ error, status: error.response?.data?.status });

      return false;
    })
    .finally(() => {
      onFinally && onFinally();
    });
};

export const getNewToken = () => {
  return axios({
    headers: {},
    method: "post",
    url: "/api/login/new_access_token",
    data: {
      refreshToken: uGetLoginInfo("refreshToken"),
    },
  });
};

axios.interceptors.request.use(
  (config) => {
    if (isEqual(typeof config.overay, "undefined")) {
      const loading = useLoadingStore();

      loading.show();
    }

    return config;
  },
  (error) => {
    const loading = useLoadingStore();

    loading.hide();

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const loading = useLoadingStore();

    loading.hide();

    return response;
  },
  (error) => {
    const loading = useLoadingStore();

    loading.hide();

    const modal = useModalStore();
    const router = useRouter();
    if (error.response.status === 401) {
      return getNewToken().then((data) => {
        let result = data.data;
        if (result.status === 200) {
          uSetLoginInfo({ accessToken: result.data.accessToken });
          uSetLoginInfo({ refreshToken: result.data.refreshToken });

          error.config.headers.Authorization =
            "Bearer " + uGetLoginInfo("accessToken");
          return axios.request(error.config);
        } else if (result.status === 400) {
          modal.alert("알림", "로그인 정보가 없습니다.", () => {
            //refreshToken 유효하지 않을 때
            sessionStorage.clear();
            router.push("/login");
          });
        }
      });
    } else {
      // 사용자 정의 오류 처리가 없는 경우만 처리
      if (!error.config?.customError) {
        modal.alert(
          "알림",
          "오류가 발생 되었습니다. 관리자에게 문의해주세요.",
          () => {
            router.push({ path: "/error", query: { system: true } });
          }
        );
      }
    }
    return Promise.reject(error);
  }
);
