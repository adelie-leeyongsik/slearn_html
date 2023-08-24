import MENTORING from "@/constants/gp/mentoring";
import COMMON from "@/constants/gp/common";
export default defineAppConfig(
  ((phase) => {
    const defaultAppConfig = {};
    switch (phase) {
      case "development": {
        return Object.assign(defaultAppConfig, {
          ...COMMON,
          MENTORING,
        });
      }
      case "production": {
        return Object.assign(defaultAppConfig, {
          ...COMMON,
          MENTORING,
        });
      }
    }
    return defaultAppConfig;
  })(process.env.NODE_ENV)
);
