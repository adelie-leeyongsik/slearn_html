import { fileURLToPath, URL } from "url";

// import { createLogger } from "vite";
// // https://github.com/vitejs/vite/issues/9597
// const logger = createLogger();
// const originalWarning = logger.warn;
// logger.warn = (msg, options) => {
//   // public 경로 설정 관련 오류 미출력
//   if (msg.includes("Assets in public") || msg.includes("files in the public"))
//     return;
//   originalWarning(msg, options);
// };

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    devProxy: {
      "/api": {
        target: "https://223.130.173.223:30352/api",
        changeOrigin: true,
        secure: false,
      },
    },
    routeRules: {
      "/api/**": { proxy: "https://223.130.173.223:30352/api/**" },
    },
  },

  runtimeConfig: {
    // apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      envMode: "PUB", // can be overridden by NUXT_PUBLIC_ENV_MODE environment variable
    },
  },

  modules: [
    "@pinia/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],

  pinia: {
    autoImports: ["defineStore"],
  },

  css: ["@/assets/css/common.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";',
        },
      },
    },
  },

  ssr: false,

  alias: {
    // https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
    // "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@img": fileURLToPath(new URL("./assets/images", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages", import.meta.url)),
  },

  imports: {
    dirs: ["{utils,composables,middleware}/gp/*.js"],
  },

  plugins: [{ src: "~/plugins/gp/index.js" }],

  devServer: {
    https: {
      cert: "./localhost-cert.pem",
      key: "./localhost-key.pem",
    },
  },

  components: [
    { path: "~/components/gp/common", prefix: "Common" },
    { path: "~/components/gp/modal", prefix: "Modal" },
    { path: "~/components/gp/mypage/community/board", prefix: "Board" },
    { path: "~/components/gp/mypage/management", prefix: "Management" },
    { path: "~/components/gp/organism", prefix: "Organism" },
    { path: "~/components/gp/mentorings", prefix: "Mentorings" },
    { path: "~/components/gp/mypage/edu", prefix: "Edu" },
    "~/components",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "ko",
      },
      script: [
        {
          src: "https://openapi.map.naver.com/openapi/v3/maps.js?govClientId=9qckjj3pxu",
        },
        {
          src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
        },
        {
          src: "//www.seoul.go.kr/seoulgnb/gnb.js",
        },
        {
          src: "//weblog.eseoul.go.kr/wlo/js/install.js",
        },
        {
          src: "//play.acs.wecandeo.com/html/utils/iframeAPI.js",
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
});
