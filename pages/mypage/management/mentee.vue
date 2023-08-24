<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useMentoringStore, useModalStore } from "@/store";
import { call } from "@/api";

const { $dayjs } = useNuxtApp();

const {
  DATE_5U,
  MENTORING: {
    MENTORING_MANAGEMENT,
    MENTORING_ATTEND_SUBMIT,
    MENTORING_CYCLE_SUBMIT,
  },
} = useAppConfig();

const router = useRouter();
const modal = useModalStore();
const mentoringStore = useMentoringStore();
const { data, params } = useReadParams();
const {
  modalProps,
  setDispatchModalProps,
  setModalFields,
  setUpdateModalProps,
  setDisplayToggle,
} = useMentoringStore();

const {
  params: { mentoringCode },
} = useRoute();

const handleFetchEvent = async () => {
  await call({
    id: "멘토링 관리 - 멘티 데이터 조회",
    endpoint: MENTORING_MANAGEMENT,
    data: params,
    onResponse: ({ data: resData }) => {
      const cp = { ...resData };
      Object.assign(data, {
        ...cp,
      });

      let smtrIdx = null;

      if (isNull(cp.mentoringInfo.currentMentoring)) {
        smtrIdx = cp.mentoringInfo.smtrIdx;
      } else {
        const {
          mentoringInfo: {
            currentMentoring: { currentMentoringIdx },
          },
        } = cp;
        smtrIdx = currentMentoringIdx;
      }

      /** 만족도 조사 */
      Object.assign(modalProps.satisfaction.props, {
        smtrIdx,
      });
      /** 문자 */
      Object.assign(modalProps.sms.props, {
        smtrIdx,
      });
    },
  });
};
const onLoadEvent = async () => {
  switch (mentoringCode) {
    default: {
      setModalFields(["postMentoringSignUp"]);
      break;
    }
    case "MC": {
      setModalFields([
        [
          "sms",
          {
            segment: "mentee",
          },
        ],
        "postMentoringSignUp",
        "rematching",
        "cancelMentoring",
        "changeSchedule",
        "hooky",
        [
          "satisfaction",
          {
            userType: "MTE",
          },
        ],
        "survey",
      ]);
      await handleFetchEvent();
      break;
    }
  }
};

const handlePagerClickEvent = async (index) => {
  params.pageNumber = index;
  await handleFetchEvent();
};

const handleHookyClickEvent = ({
  reportMentoringDetailSeq: detailSeq,
  reportMentoringDetailIdx: smtdIdx,
}) => {
  const { mentorName } = data.mentorInfo;
  const { currentMentoring } = data.mentoringInfo;
  setDispatchModalProps("hooky", {
    accessRole: "mentee",
    actionRole: "mentee",
    mentorName,
    currentMentoring,
    detailSeq,
    smtdIdx,
  });
};

const handleExtensionEvent = async () => {
  const {
    mentoringInfo: {
      currentMentoring: { currentMentoringDetailIdx: smtdIdx },
    },
  } = data;
  await call({
    id: "멘토링 신청 데이터 조회 (기존데이터)",
    endpoint: MENTORING_CYCLE_SUBMIT,
    onResponse: ({ data }) => {
      const cp = { ...data };
      Object.assign(cp, {
        smtdIdx,
      });
      setDispatchModalProps("postMentoringSignUp", { ...cp });
    },
  });
};

const handleReadSyllabusEvent = () => {
  const {
    mentoringInfo: {
      currentMentoring: {
        currentMentoringIdx: smtrIdx,
        currentMentoringSeq: seq,
      },
    },
  } = data;
  setDispatchModalProps("survey", {
    isReadOnly: true,
    smtrIdx,
    seq,
  });
};

const handleModalActionEvent = (modalType) => {
  const {
    mentorInfo: { mentorName },
    mentoringInfo: { currentMentoring },
  } = data;

  if (modalType === "changeSchedule") {
    if (isLocationChange.value === false) {
      modal.alert("알림", "일정 변경 요청 가능일이 아닙니다");
      return;
    }

    // 다음일정 검색
    const details = data.mentoringInfo.details.filter(
      (v) => v.smtdIdx > currentMentoring.currentMentoringDetailIdx
    );
    const nextItem = details.length > 0 ? { ...details[0] } : {};

    setDispatchModalProps(modalType, {
      actionRole: "mentee",
      mentorName,
      currentMentoring: currentMentoring,
      nextMentoringDtm: nextItem.mentoringDtm,
    });
    return;
  }

  if (modalType === "satisfaction") {
    const { currentMentoringIdx: smtrIdx } = currentMentoring;
    setDispatchModalProps(modalType, {
      smtrIdx,
      userType: "MTE",
    });
    return;
  }

  setDispatchModalProps(modalType, {
    actionRole: "mentee",
    mentorName,
    currentMentoring,
  });
};

const handleAttendEvent = async (_isOffLine, isClick = false) => {
  try {
    const {
      mentoringInfo: {
        currentMentoring: {
          currentMentoringDetailIdx: smtdIdx,
          videoLectureUrl,
        },
      },
    } = data;

    if (_isOffLine === false) {
      if (isClick === false) {
        modal.alert("알림", "강의실 입장은 입장 30분전부터 가능합니다");
        return;
      }
      window.open(videoLectureUrl);
      return;
    }

    const _data = {
      smtdIdx,
      attendType: "MTE",
      accessType: getOffLineType.value === "ENTRY" ? "ENTR" : "EXIT",
    };

    await call({
      id: "멘토링 관리 - 멘티 멘토링 오프라인 출석",
      endpoint: MENTORING_ATTEND_SUBMIT,
      method: "post",
      data: _data,
      onResponse: ({ status, message }) => {
        if (status !== 200) {
          modal.alert("알림", message);
          return;
        }
        const typeMessage =
          getOffLineType.value === "ENTRY" ? "출석 되었습니다." : "퇴장 되었습니다.";
        modal.alert("알림", typeMessage, () => router.go());
      },
    });
  } catch (err) {
    console.error(err);
  }
};

await onLoadEvent();

/** 문자열 정보 **/

const isMentoringComplete = computed(
  /** 바뀔 예정 있음 -> 피드백 오지 않음 **/
  () => data?.mentoringInfo?.mentoringPercent === 100 || false
);

const subInfo = computed(() => {
  try {
    const { mentorGrade, mentorSubject, mentorAvailType, mentoringType } =
      data.mentorInfo;

    return `${mentoringType}· ${mentorGrade} · ${mentorSubject} · ${mentorAvailType}`;
  } catch (err) {
    return "";
  }
});

const strDetailSubject = computed(() => {
  try {
    const { currentMentoringCourseType, currentMentoringSeq } =
      data.mentoringInfo.currentMentoring;

    if (isMentoringComplete.value === true) {
      return `축하합니다. 멘토링이 모두 완료되었습니다.`;
    }

    return `[${
      currentMentoringCourseType.toLowerCase() === "off" ? "오프라인" : "온라인"
    }] 멘토링 ${currentMentoringSeq}회차`;
  } catch (err) {
    return "";
  }
});

const strDetailInformation = computed(() => {
  try {
    if (isMentoringComplete.value === true) {
      return `멘토링은 어떠셨나요? 멘토링 서비스 향상을 위해 만족도 조사를 부탁드립니다.`;
    }

    const {
      currentMentoringDtm,
      currentMentoringStartTime,
      currentMentoringLocation,
      currentMentoringCourseType,
    } = data.mentoringInfo.currentMentoring;

    const [hour, minute] = currentMentoringStartTime.split(":");

    const currentDtm = $dayjs(currentMentoringDtm)
      .set("hour", hour)
      .set("minute", minute);

    let currentLocation =
      currentMentoringCourseType.toString().toLowerCase() === "on"
        ? "온라인 화상"
        : currentMentoringLocation;

    return `${currentDtm.format(DATE_5U)} · ${
      isNull(currentLocation) ? "장소 배정중" : currentLocation
    }`;
  } catch (err) {
    return "";
  }
});

const isExtensionCheck = computed(
  () => data.mentoringInfo.currentMentoring.extensionFlag || false
);

const isLectureOpen = computed(() => {
  try {
    const { currentMentoringDtm, currentMentoringStartTime } =
      data.mentoringInfo.currentMentoring;
    const [hour, minute] = currentMentoringStartTime.split(":");
    const targetDate = $dayjs(currentMentoringDtm);
    const currDate = targetDate
      .set("hour", parseInt(hour))
      .set("minute", parseInt(minute));
    const nowDate = $dayjs();
    const isSecond = currDate.diff(nowDate, "second", true);
    return isSecond < 1800;
  } catch (err) {
    return false;
  }
});

const isLocationChange = computed(() => {
  try {
    // const { currentMentoringDtm, currentMentoringStartTime } =
    //   data.mentoringInfo.currentMentoring;
    // const [hour, minute] = currentMentoringStartTime.split(":");
    // const targetDate = $dayjs(currentMentoringDtm);
    // const currDate = targetDate
    //   .set("hour", parseInt(hour))
    //   .set("minute", parseInt(minute));
    // const nowDate = $dayjs();
    // const isDay = currDate.diff(nowDate, "day", true);
    // return isDay > 1;

    // 일정변경은 온라인은 당일/오프라인은 전일까지 가능
    // const targetDate = courseType === "ON" ? $dayjs(mentoringDtm).format("YYYYMMDD") : $dayjs(mentoringDtm).subtract(1, "day").format("YYYYMMDD");
    const { currentMentoringCourseType, currentMentoringDtm } =
      data.mentoringInfo.currentMentoring;
    const targetDate =
      currentMentoringCourseType === "ON"
        ? $dayjs(currentMentoringDtm).format("YYYYMMDD")
        : $dayjs(currentMentoringDtm).subtract(1, "day").format("YYYYMMDD");
    const nowDate = $dayjs().format("YYYYMMDD");
    // console.log(`>>>>> targetDate: ${targetDate}, nowDate: ${nowDate}`);
    return targetDate >= nowDate;
  } catch (err) {
    return false;
  }
});

const syllabusText = computed(() => {
  try {
    const {
      mentoringInfo: {
        currentMentoring: { currentMentoringSeq },
      },
    } = data;

    return `${currentMentoringSeq}회차 계획서 보기`;
  } catch (err) {
    return ``;
  }
});

const isMatching = computed(
  () => mentoringCode.toString().toUpperCase() === "MC"
);

const isOffLine = computed(() => {
  try {
    return (
      data.mentoringInfo.currentMentoring.currentMentoringCourseType
        .toString()
        .toUpperCase() === "OFF"
    );
  } catch (err) {
    return false;
  }
});

const getOffLineType = computed(() => {
  const {
    mentoringInfo: {
      currentMentoring: { menteeEntryDtm, menteeExitDtm },
    },
  } = data;
  if (isEmpty(menteeEntryDtm)) {
    return "ENTRY";
  } else if (!isEmpty(menteeExitDtm)) {
    return "COMPLETE";
  } else {
    return "EXIT";
  }
});

const attendLabel = computed(() =>
  getOffLineType.value === "ENTRY" ? "출석확인" : "종료확인"
);

const isOffLineEntryOrExit = computed(() => {
  // 출석확인은 30분전부터 이거나, 종료확인인 경우
  return (
    (getOffLineType.value === "ENTRY" && isLectureOpen.value) ||
    getOffLineType.value === "EXIT"
  );
});

const cycleLabel = computed(() => {
  try {
    const {
      mentoringInfo: {
        currentMentoring: { isExtension },
      },
    } = data;
    return {
      label: isExtension === false ? "멘토링 연장신청" : "연장 신청 완료",
      disabled: isExtension === true,
    };
  } catch (err) {
    return {};
  }
});

const isMentoringVerfication = computed(() => {
  const {
    mentoringInfo: { currentMentoring, details },
  } = data;
  return !isNull(currentMentoring) && !isEmpty(details);
});

/** 문자열 정보 끝 **/

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-management">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <MypageTitle
            title="멘토링 관리"
            desc="
            멘토 멘티와 함께 성장하는 멘토링으로<br class='c-mo' />
            학습 늉률을 올려보세요!
            <br />
            도움이 필요하실 땐<br class='c-mo' />
            서울런 고객센터(1533-0909)로 연락주세요!"
          />
          <div class="mypage__contents-body" v-if="isMatching">
            <div class="mypage-management__schedule">
              <div class="mypage__schedule">
                <div class="mypage__schedule-profile">
                  <div class="mypage__schedule-profile-body">
                    <div class="mypage__schedule-profile-img">
                      <div class="mypage__schedule-profile-img-mask">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </div>
                    </div>
                    <div class="mypage__schedule-profile-text">
                      <div class="mypage__schedule-profile-text-name">
                        <p>
                          나의 멘토,<br class="c-mo" />
                          {{ data.mentorInfo.mentorName }} 님
                        </p>
                      </div>
                      <div class="mypage__schedule-profile-text-info">
                        {{ subInfo }}
                      </div>
                    </div>
                    <div class="mypage__schedule-profile-btn">
                      <button
                        type="button"
                        class="c-btn c-btn-letter"
                        @click.prevent="modalProps.sms.show = true"
                      >
                        문자 보내기
                      </button>
                    </div>
                  </div>
                  <div
                    class="mypage__schedule-profile-foot"
                    v-if="!isEmpty(data.mentorInfo.mentorAwards)"
                  >
                    <ul>
                      <li
                        v-for="({ awardDtm, awardCode }, awardIdx) in data
                          .mentorInfo.mentorAwards"
                        :key="`awards-${awardIdx}`"
                      >
                        {{ awardDtm }}{{ awardCode }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!--작업뱡항, API, AI 없음...(?)-->
                <template v-if="false">
                  <a href="" class="mypage__schedule-item">
                    <div class="c-badge c-badge-blue">멘토 추천</div>
                    <p>
                      둥근해가떴습니다호이 멘토님이 추천한 강의가 있어요! 지금
                      확인하러 가보실까요?
                    </p>
                  </a>
                </template>
                <template
                  v-if="data.mentoringInfo.prevMentoringReportFlag === true"
                >
                  <a
                    href="#"
                    class="mypage__schedule-item mypage__schedule-item--type02"
                    @click.prevent="
                      handleHookyClickEvent({
                        reportMentoringDetailSeq,
                        reportMentoringDetailIdx,
                      })
                    "
                    v-for="(
                      { reportMentoringDetailSeq, reportMentoringDetailIdx },
                      index
                    ) in data.mentoringInfo.reports"
                    :key="`mentee-report-${index}`"
                  >
                    <div class="c-badge c-badge-blue">결석 신고</div>
                    <p>
                      {{ reportMentoringDetailSeq }}회차 멘토가 결석하였습니다.
                      사유를 입력해주세요.
                    </p>
                  </a>
                </template>

                <div
                  class="mypage__schedule-list"
                  v-if="isMentoringVerfication"
                >
                  <div class="mypage__schedule-list-head-wrap">
                    <div class="mypage__schedule-list-head">
                      <div class="mypage__schedule-list-text">
                        <div class="mypage__schedule-list-text-title">
                          <p>{{ strDetailSubject }}</p>
                        </div>
                        <div class="mypage__schedule-list-text-info">
                          {{ strDetailInformation }}
                        </div>
                      </div>
                      <div class="mypage__schedule-list-btn">
                        <template v-if="isMentoringComplete === true">
                          <button
                            type="button"
                            class="c-btn c-btn-sm c-btn-danger"
                            :class="{ 'c-btn-inactive': data.mentoringInfo.currentMentoring.isSatisfaction }"
                            :disabled="data.mentoringInfo.currentMentoring.isSatisfaction"
                            @click.prevent="
                              () => handleModalActionEvent('satisfaction')
                            "
                          >
                            만족도 조사
                          </button>
                          <button
                            type="button"
                            :class="{
                              'c-btn': true,
                              'c-btn-sm': true,
                              'c-btn-danger': !cycleLabel.disabled,
                              'c-btn-inactive': cycleLabel.disabled,
                            }"
                            @click.prevent="handleExtensionEvent"
                            v-if="isExtensionCheck"
                            :disabled="cycleLabel.disabled"
                          >
                            {{ cycleLabel.label }}
                          </button>
                        </template>
                        <template v-else>
                          <button
                            type="button"
                            :class="{
                              'c-btn': true,
                              'c-btn-sm': true,
                              'c-btn-blue': isLocationChange,
                              'c-btn-inactive': !isLocationChange,
                            }"
                            @click.prevent="
                              () => handleModalActionEvent('changeSchedule')
                            "
                          >
                            일정/장소 변경 요청
                          </button>
                          <button
                            type="button"
                            :class="{
                              'c-btn': true,
                              'c-btn-sm': true,
                              'c-btn-danger': isLectureOpen,
                              'c-btn-inactive': !isLectureOpen,
                            }"
                            :disabled="!isLectureOpen"
                            @click.prevent="
                              () => handleAttendEvent(isOffLine, isLectureOpen)
                            "
                            v-if="isOffLine === false"
                          >
                            강의실 입장
                          </button>
                          <button
                            type="button"
                            :class="{
                              'c-btn': true,
                              'c-btn-sm': true,
                              'c-btn-danger': isOffLineEntryOrExit,
                              'c-btn-inactive': !isOffLineEntryOrExit,
                            }"
                            :disabled="!isOffLineEntryOrExit"
                            @click.prevent="() => handleAttendEvent(isOffLine)"
                            v-else
                          >
                            {{ attendLabel }}
                          </button>
                          <button
                            type="button"
                            :class="{
                              'c-btn': true,
                              'c-btn-sm': true,
                              'c-btn-danger': !cycleLabel.disabled,
                              'c-btn-inactive': cycleLabel.disabled,
                            }"
                            @click.prevent="handleExtensionEvent"
                            v-if="isExtensionCheck"
                            :disabled="cycleLabel.disabled"
                          >
                            {{ cycleLabel.label }}
                          </button>
                        </template>
                      </div>
                    </div>
                    <div class="mypage__schedule-list-foot">
                      <template v-if="isMentoringComplete === false">
                        <a
                          href="#"
                          class="mypage__schedule-list-foot-link"
                          @click.prevent="handleReadSyllabusEvent"
                          ><i class="ico ico-file">복사</i>
                          <p>
                            {{ syllabusText }}
                          </p></a
                        >
                      </template>
                    </div>
                  </div>
                  <div class="mypage__schedule-list-body">
                    <div class="mypage__schedule-list-body-title">
                      전체 일정
                    </div>
                    <div class="mypage__schedule-list-body-progress">
                      <div
                        class="mypage__schedule-list-body-progress-text"
                        :style="{
                          width: `${data.mentoringInfo.mentoringPercent}%`,
                        }"
                      >
                        <p>{{ data.mentoringInfo.gaugeDescription }}</p>
                      </div>
                      <div class="c-progress">
                        <span
                          class="c-progress-bar"
                          :style="{
                            width: `${data.mentoringInfo.mentoringPercent}%`,
                          }"
                        ></span>
                      </div>
                      <ul>
                        <li v-for="{ label } in data.mentoringInfo.gauge">
                          {{ label }}
                        </li>
                      </ul>
                    </div>
                    <div class="c-table__wrap">
                      <table
                        class="c-table c-table-center mypage__schedule-table"
                      >
                        <caption>
                          강의 일정 테이블로 회차, 강의계획, 상태를 알 수
                          있습니다.
                        </caption>
                        <colgroup>
                          <col width="15%" />
                          <col width="" />
                          <col width="15%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">회차</th>
                            <th scope="col">강의계획</th>
                            <th scope="col">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in data.mentoringInfo.details">
                            <td class="mypage__schedule-table-num">
                              {{ item.ord }}회차
                            </td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                {{ item.curriculum }}
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span
                                class="c-text-danger"
                                v-if="item.status === '완료'"
                                >{{ item.status }}</span
                              >
                              <span
                                class="c-text-yellow"
                                v-else-if="item.status === '결석'"
                                >{{ item.status }}</span
                              >
                              <span
                                class="c-text-warn"
                                v-else-if="item.status === '예정'"
                                >{{ item.status }}</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="c-btn-group">
                      <button
                        type="button"
                        class="c-btn c-btn-blue"
                        v-if="isMentoringComplete === false"
                        :class="{ 'c-btn-inactive': data.mentoringInfo.currentMentoring.isRematch, }"
                        :disabled="data.mentoringInfo.currentMentoring.isRematch"
                        @click.prevent="
                          () => handleModalActionEvent('rematching')
                        "
                      >
                        재매칭 신청
                      </button>
                      <button
                        type="button"
                        class="c-btn c-btn-blue"
                        :class="{ 'c-btn-inactive': data.mentoringInfo.currentMentoring.isRematch, }"
                        :disabled="data.mentoringInfo.currentMentoring.isRematch"
                        @click.prevent="
                          () => handleModalActionEvent('cancelMentoring')
                        "
                      >
                        멘토링 취소
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ManagementMentoringStatus
            v-else
            :status="mentoringCode"
            @mentoringRequestHandler="
              () => setDispatchModalProps('postMentoringSignUp', {})
            "
          />
        </div>
      </div>
    </div>

    <template v-if="isMatching">
      <template v-if="modalProps.survey.show === true">
        <ModalConfirmSurvey v-bind="{ ...modalProps.survey }" />
      </template>
      <template v-if="modalProps.satisfaction.show === true">
        <ModalConfirmSatisfaction v-bind="{ ...modalProps.satisfaction }" />
      </template>
      <template v-if="modalProps.sms.show === true">
        <ModalConfirmSms v-bind="{ ...modalProps.sms }" />
      </template>
      <template v-if="modalProps.rematching.show === true">
        <ModalConfirmRematching v-bind="{ ...modalProps.rematching }" />
      </template>
      <template v-if="modalProps.cancelMentoring.show === true">
        <ModalConfirmCancelMentoring
          v-bind="{ ...modalProps.cancelMentoring }"
        />
      </template>
      <template v-if="modalProps.changeSchedule.show === true">
        <ModalConfirmChangeScheduleForMentee
          v-bind="{ ...modalProps.changeSchedule }"
        />
      </template>
      <template v-if="modalProps.hooky.show === true">
        <ModalConfirmHooky v-bind="{ ...modalProps.hooky }" />
      </template>
      <template v-if="modalProps.postMentoringSignUp.show === true">
        <ModalPostMentoringSignUp
          v-bind="{ ...modalProps.postMentoringSignUp }"
        />
      </template>
    </template>
    <template v-else>
      <template v-if="modalProps.postMentoringSignUp.show === true">
        <ModalPostMentoringSignUp
          v-bind="{ ...modalProps.postMentoringSignUp }"
        />
      </template>
    </template>
  </div>
</template>
