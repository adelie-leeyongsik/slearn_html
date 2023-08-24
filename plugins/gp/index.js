/**
 * graypoint - plugins
 * 번들링 최소화 기반으로 비구조화 할당하여 내보내기 설정
 * 그 외 추가 재사용 메소드 정의
 */

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import toObject from "dayjs/plugin/toObject";
import weekDay from "dayjs/plugin/weekday";
import "dayjs/locale/ko";
import { DatePicker } from "v-calendar";
import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.locale("ko");
  [isToday, toObject, weekDay].forEach((plugin) => dayjs.extend(plugin));
  [DatePicker].forEach((comp) => {
    nuxtApp.vueApp.component(comp.name, comp);
  });
  nuxtApp.provide("dayjs", dayjs);

  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  defineRule("requiredField", (value, [limit]) => {
    if (value.length < limit) {
      return `required:${limit}`;
    }
    return true;
  });

  defineRule("isDateValid", (value, [type]) => {
    switch (type) {
      case "YYYY-MM-DD":
        return !isNull(value.match(/^(\d{4})+\-(\d{2})+\-(\d{2})+$/g));
      case "HHMM":
        return !isNull(value.match(/^(\d{4})+$/g));
    }
  });

  defineRule("isBoolean", (value) => {
    return Boolean(value) === true;
  });
});
