<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useMentoringStore, useModalStore } from "@/store";
import { call } from "@/api";

const { $dayjs } = useNuxtApp();

const {
  MESSAGE,
  MENTORING: {
    MENTORING_MANAGEMENT_FOR_MENTOR,
    MENTORING_ATTEND_SUBMIT,
    MENTORING_CYCLE_FOR_MENTOR_SUBMIT,
    MENTORING_CYCLE_FOR_MENTOR_RESTART,
  },
} = useAppConfig();

const router = useRouter();
const modal = useModalStore();
const {
  modalProps,
  setDispatchModalProps,
  setModalFields,
  setUpdateModalProps,
  setDisplayToggle,
} = useMentoringStore();

const mentoring = ref(false);
const data = reactive({});
const body = ref([]);
const isUseYn = ref(null);

const onLoadEvent = async () => {
  setModalFields([
    [
      "sms",
      {
        segment: "mentor",
      },
    ],
    "survey",
    "deepSurvey",
    "templateReport",
    "rematching",
    // "cancelMentoring",
    "changeSchedule",
    "hooky",
    [
      "satisfaction",
      {
        userType: "MTR",
      },
    ],
  ]);
  await handleFetchEvent();
};

const handleFetchEvent = async () => {
  try {
    await call({
      id: "멘토링 관리 - 멘토 멘토링 데이터 조회",
      endpoint: MENTORING_MANAGEMENT_FOR_MENTOR,
      onResponse: ({ data: resData }) => {
        Object.assign(data, { ...resData });
        isUseYn.value = resData.useYn.toString().toUpperCase() === "Y";
        body.value = [].concat(resData.sqMentorings.slice().map(() => false));
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const handleClickLearningEvent = () => {
  modal.alert("알림", "준비 중입니다.");
};

const handleReportEvent = ({ modalType, detail }) => {
  const { index, ...props } = detail;
  const { userName: mentorName } = data.sqMentorings[index];
  setDispatchModalProps(modalType, { modalType, mentorName, ...props });
};

const handleRematchingEvent = (actionType, item) => {
  setDispatchModalProps(actionType, { actionRole: "mentor", ...item });
};

const handleModalActionEvent = ({ modalType, item }) => {
  const props = { ...item };
  if (["hooky"].includes(modalType)) {
    const { userName } = data.sqMentorings[item.index];
    Object.assign(props, {
      userName,
    });
  }
  if (isUndefined(props.actionRole)) {
    Object.assign(props, {
      actionRole: "mentor",
    });
  }
  // console.log('>>>>>> props', props);
  setDispatchModalProps(modalType, props);
};

const handleMentoringsItemEvent = (modalType, { smtrIdx }) => {
  setDisplayToggle(modalType);
  setUpdateModalProps(modalType, {
    smtrIdx,
  });
};

const handleAttendEvent = async (item, isClick = false, index = null) => {
  try {
    const cp = { ...item };

    let accessType = null;
    if (!isNull(index)) {
      accessType = getOffLineType.value.slice()[index];
    }

    if (cp.courseType.toString().toUpperCase() === "ON") {
      const { videoLectureUrl } = cp;

      if (isClick === false) {
        modal.alert("알림", "강의실 입장은 입장 30분전부터 가능합니다");
        return;
      }

      window.open(videoLectureUrl);
      return;
    }

    const idx = data.sqMentorings.findIndex((obj) => obj.ord === cp.ord);

    const target = cp.mentoringDetails.find((obj) => item.ord === obj.ord);
    const body = {
      smtdIdx: target.smtdIdx,
      attendType: "MTR",
      accessType: accessType === "ENTRY" ? "ENTR" : "EXIT",
    };

    await call({
      id: "멘토링 관리 - 멘토 멘토링 오프라인 출석",
      endpoint: MENTORING_ATTEND_SUBMIT,
      method: "post",
      data: body,
      onResponse: ({ status, message }) => {
        if (status === 200) {
          const typeMessage =
            accessType === "ENTRY" ? "출석 되었습니다." : "퇴장 되었습니다.";
          modal.alert("알림", typeMessage, () => router.go());
        } else {
          modal.alert("알림", message);
          return;
        }
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const handleLocationActionEvent = (isModify, item, index) => {
  if (isModify === false) {
    modal.alert("알림", "일정 변경 요청 가능일이 아닙니다");
    return;
  }

  // 다음일정 검색
  const details = data.sqMentorings[index].mentoringDetails.filter((v) => v.smtrIdx === item.smtrIdx && v.smtdIdx > item.smtdIdx);
  const nextItem = details.length > 0 ? { ...details[0] } : {};
  const cp = { ...item };
  cp.nextMentoringDtm = nextItem.mentoringDtm;

  handleModalActionEvent({
    modalType: "changeSchedule",
    // item,
    item: cp,
  });
};

const handleExtensionEvent = (actionType = "extension", item) => {
  const cp = { ...item };
  switch (actionType) {
    case "extension": {
      modal.open({
        key: "confirm",
        type: "alert",
        title: "알림",
        message: "현재 멘티와의 멘토링을 연장 신청합니다. 계속하시겠습니까?",
        buttons: [
          { text: "거절", styleType: "blue" },
          { text: "신청", styleType: "danger"
            , onConfirm: async () =>
                            await call({
                              id: "멘토링 연장 신청 (멘토)",
                              endpoint: MENTORING_CYCLE_FOR_MENTOR_SUBMIT,
                              data: {
                                smtdIdx: cp.smtdIdx,
                              },
                              method: "put",
                              onResponse: ({ status, message }) => {
                                if (status !== 200) {
                                  modal.alert("알림", message);
                                  return;
                                }
                                modal.alert("알림", MESSAGE.SUCCESS, () => router.go());
                              },
                            })
          },
        ],
      });

      // modal.confirm(
      //   "알림",
      //   "현재 멘티와의 멘토링을 연장 신청합니다. 계속하시겠습니까?",
      //   async () =>
      //     await call({
      //       id: "멘토링 연장 신청 (멘토)",
      //       endpoint: MENTORING_CYCLE_FOR_MENTOR_SUBMIT,
      //       data: {
      //         smtdIdx: cp.smtdIdx,
      //       },
      //       method: "put",
      //       onResponse: ({ status, message }) => {
      //         if (status !== 200) {
      //           modal.alert("알림", message);
      //           return;
      //         }
      //         modal.alert("알림", MESSAGE.SUCCESS, () => router.go());
      //       },
      //     })
      // );
      break;
    }
    case "restart": {
      modal.confirm("알림", MESSAGE.IS_CONTINUE, async () => {
        // MENTORING_CYCLE_FOR_MENTOR_RESTART
        await call({
          id: "멘토링 연장 신청 - 다시시작",
          endpoint: MENTORING_CYCLE_FOR_MENTOR_RESTART,
          data: {
            smtrIdx: cp.smtrIdx,
          },
          method: "put",
          onResponse: ({ status, message }) => {
            if (status !== 200) {
              modal.alert("알림", message);
              return;
            }
            modal.alert("알림", MESSAGE.SUCCESS, () => router.go());
          },
        });
      });

      break;
    }
  }
};

const title = computed(() => {
  try {
    const { sqMentorings, menteeMax } = data;
    const totalCount = menteeMax;
    return `멘토링 관리 (${sqMentorings.length}명/${totalCount}명)`;
  } catch (err) {
    return `멘토링 관리`;
  }
});

const isDetailData = computed(() => {
  try {
    const { sqMentorings } = data;
    return sqMentorings.map(({ mentoringDetails }) => {
      return mentoringDetails.length > 0;
    });
  } catch (err) {
    return [];
  }
});

const nextSchedule = computed(() => {
  try {
    const { sqMentorings } = data;
    return sqMentorings.map(
      ({ courseType, mentoringDtm, mentoringLocation, ord }) => {
        let courseTypeLabel = "";
        if (!isNull(courseType)) {
          courseTypeLabel =
            courseType.toString().toUpperCase() === "OFF"
              ? "오프라인"
              : "온라인";
        }

        let currentLocation =
          courseType === "OFF" && isNull(mentoringLocation)
            ? "장소 배정중"
            : mentoringLocation;

        return {
          title: `[${courseTypeLabel}] 멘토링 ${ord}회차`,
          subTitle: `${mentoringDtm} · ${
            courseType === "ON" ? "온라인 화상" : currentLocation
          }`,
        };
      }
    );
  } catch (err) {
    return [];
  }
});

const isLocationChange = computed(() => {
  try {
    const { sqMentorings } = data;
    return sqMentorings.map(({ courseType, mentoringDtm }) => {
      // const targetDate = $dayjs(mentoringDtm);
      // const nowDate = $dayjs();
      // const isDay = targetDate.diff(nowDate, "day", true);
      // return isDay > 1;

      // 일정변경은 온라인은 당일/오프라인은 전일까지 가능
      const targetDate = courseType === "ON" ? $dayjs(mentoringDtm).format("YYYYMMDD") : $dayjs(mentoringDtm).subtract(1, "day").format("YYYYMMDD");
      const nowDate = $dayjs().format("YYYYMMDD");
      // console.log(`>>>>> courseType: ${courseType}, targetDate: ${targetDate}, nowDate: ${nowDate}`);
      return nowDate <= targetDate;
    });
  } catch (err) {
    return false;
  }
});

const isLectureOpen = computed(() => {
  try {
    const { sqMentorings } = data;
    return sqMentorings.map(({ mentoringDtm }) => {
      if (isNull(mentoringDtm)) {
        return false;
      }
      const targetDate = $dayjs(mentoringDtm);
      const nowDate = $dayjs();
      const isSecond = targetDate.diff(nowDate, "second", true);
      return isSecond < 1800;
    });
  } catch (err) {
    console.log(err);
    return [];
  }
});

const getOffLineType = computed(() => {
  return data.sqMentorings.map(({ mentorEntryDtm, mentorExitDtm }) => {
    if (isEmpty(mentorEntryDtm)) {
      // * 출석 시간이 없을 경우
      return "ENTRY";
    } else if (!isEmpty(mentorExitDtm)) {
      // 출석시간 있으며, 퇴장 시간도 있을 경우
      return "COMPLETE";
    } else {
      // 출석시간이 있으나 퇴장시간이 없을 경우
      return "EXIT";
    }
  });
});

const attendLabel = computed(() => {
  try {
    return getOffLineType.value.map((str) =>
      str === "ENTRY" ? "출석확인" : "종료확인"
    );
  } catch (err) {
    return [];
  }
});

const isOffLineEntryOrExit = computed(() => (index) => {
  // 출석확인은 30분전부터 이거나, 종료확인인 경우
  return (getOffLineType.value[index] === 'ENTRY' && isLectureOpen.value[index]) || getOffLineType.value[index] === 'EXIT';
});

const cycleLabel = computed(() => {
  try {
    return data.sqMentorings.map(({ isExtension }) => ({
      label: isExtension === false ? "멘토링 연장신청" : "연장 신청 완료",
      disabled: isExtension === true,
    }));
  } catch (err) {
    return [];
  }
});

const isExtensionCheck = computed(() => {
  try {
    return data.sqMentorings.map(({ extensionFlag, restartFlag }) => ({
      extensionFlag,
      restartFlag,
    }));
  } catch (err) {
    return [];
  }
});

await onLoadEvent();

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
            :title="title"
            desc="
            멘토 멘티와 함께 성장하는 멘토링으로<br class='c-mo' />
            학습 늉률을 올려보세요!
            <br />
            도움이 필요하실 땐<br class='c-mo' />
            서울런 고객센터(1533-0909)로 연락주세요!"
          />
          <div class="mypage__contents-body">
            <div class="mypage-management__schedule" v-if="isUseYn === true">
              <div class="mypage__schedule">
                <div
                  class="mypage-management__item"
                  v-for="(item, index) in data.sqMentorings"
                  :key="`mentee-list-${index}`"
                >
                  <div
                    class="mypage-management__item-head"
                    @click.stop="() => (body[index] = !body[index])"
                  >
                    <div class="mypage-management__item-img">
                      <div class="mypage-management__item-img-mask">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </div>
                    </div>
                    <div class="mypage-management__item-text">
                      <div class="mypage-management__item-text-name">
                        <p>{{ item.userName }} 님</p>
                      </div>
                      <div class="mypage-management__item-text-info">
                        {{ item.mentoringDtm }}
                      </div>
                    </div>
                    <div class="mypage-management__item-btn">
                      <button
                        type="button"
                        class="c-btn c-btn-study"
                        @click.stop="handleClickLearningEvent"
                      >
                        학습 내역보기
                      </button>
                      <button
                        type="button"
                        class="c-btn c-btn-letter"
                        @click.stop="
                          () => handleMentoringsItemEvent('sms', item)
                        "
                      >
                        문자 보내기
                      </button>
                    </div>
                  </div>
                  <div
                    class="mypage-management__item-body"
                    v-show="body[index] === true"
                  >
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        이용중인 학습 강좌
                      </h3>
                      <div class="mypage__schedule-list-body-lecture">
                        <ul>
                          <li
                            v-for="(lectureItem, lectureIndex) in item.cpInfos"
                          >
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                :src="lectureItem.filePath"
                                :alt="`${lectureItem.cpName} 로고 이미지`"
                              />
                            </div>
                            <p>{{ lectureItem.cpName }}</p>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <section v-if="item.mentoringStatus !== 'SB'">
                      <h3 class="mypage__schedule-list-body-title">
                        다음 일정
                      </h3>
                      <div
                        class="mypage-management__box"
                        v-if="item.mentoringStatus === 'IN'"
                      >
                        <div class="mypage__schedule-list-head-wrap">
                          <div class="mypage__schedule-list-head">
                            <div class="mypage__schedule-list-text">
                              <div class="mypage__schedule-list-text-title">
                                <p>{{ nextSchedule[index].title }}</p>
                              </div>
                              <div class="mypage__schedule-list-text-info">
                                {{ nextSchedule[index].subTitle }}
                              </div>
                            </div>
                            <div class="mypage__schedule-list-btn">
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-blue': item.deepLearnAvailYn === 'Y',
                                  'c-btn-inactive':
                                    item.deepLearnAvailYn === 'N',
                                }"
                                @click.prevent="
                                  handleModalActionEvent({
                                    modalType: 'deepSurvey',
                                    item,
                                  })
                                "
                                :disabled="item.deepLearnAvailYn === 'N'"
                              >
                                심화활동 신청
                              </button>
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-blue': isLocationChange[index],
                                  'c-btn-inactive': !isLocationChange[index],
                                }"
                                @click.prevent="
                                  () =>
                                    handleLocationActionEvent(
                                      isLocationChange[index],
                                      item,
                                      index,
                                    )
                                "
                              >
                                일정/장소 변경 요청
                              </button>
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-danger': isLectureOpen[index],
                                  'c-btn-inactive': !isLectureOpen[index],
                                }"
                                v-if="item.courseType === 'ON'"
                                @click.prevent="
                                  () =>
                                    handleAttendEvent(
                                      item,
                                      isLectureOpen[index]
                                    )
                                "
                              >
                                강의실 입장
                              </button>
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-danger':isOffLineEntryOrExit(index),
                                  'c-btn-inactive': !isOffLineEntryOrExit(index),
                                }"
                                :disabled="!isOffLineEntryOrExit(index)"
                                v-else-if="item.courseType === 'OFF'"
                                @click.prevent="
                                  () => handleAttendEvent(item, false, index)
                                "
                              >
                                {{ attendLabel[index] }}
                              </button>
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-danger': !cycleLabel[index].disabled,
                                  'c-btn-inactive': cycleLabel[index].disabled,
                                }"
                                @click.prevent="
                                  () => handleExtensionEvent('extension', item)
                                "
                                v-if="isExtensionCheck[index].extensionFlag"
                                :disabled="cycleLabel[index].disabled"
                              >
                                {{ cycleLabel[index].label }}
                              </button>
                            </div>
                          </div>
                          <div class="mypage__schedule-list-foot"></div>
                        </div>
                      </div>
                      <div
                        class="mypage-management__box"
                        v-if="item.mentoringStatus === 'CP'"
                      >
                        <div
                          class="mypage-management__box-info mypage-management__box-info--type02"
                        >
                          <div class="mypage-management__box-info-title">
                            고생하셨어요! 멘토링이 모두 완료되었습니다.
                          </div>
                          <p>
                            멘토링은 어떠셨나요?<br class="c-mo" />
                            필요하시면 멘토링 연장 신청을 신청도하세요.
                          </p>
                          <div class="mypage-management__box-info-btn-box">
                            <button
                              type="button"
                              class="c-btn c-btn-danger c-btn-sm"
                              :class="{ 'c-btn-inactive': item.isSatisfaction }"
                              :disabled="item.isSatisfaction"
                              @click.prevent="
                                () =>
                                  handleMentoringsItemEvent(
                                    'satisfaction',
                                    item
                                  )
                              "
                            >
                              만족도 조사
                            </button>
                            <template
                              v-if="isExtensionCheck[index].restartFlag"
                            >
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-danger': true,
                                }"
                                @click.prevent="
                                  () => handleExtensionEvent('restart', item)
                                "
                              >
                                다시 시작
                              </button>
                            </template>
                            <template v-else>
                              <button
                                type="button"
                                :class="{
                                  'c-btn': true,
                                  'c-btn-sm': true,
                                  'c-btn-danger': !cycleLabel[index].disabled,
                                  'c-btn-inactive': cycleLabel[index].disabled,
                                }"
                                @click.prevent="
                                  () => handleExtensionEvent('extension', item)
                                "
                                v-if="isExtensionCheck[index].extensionFlag"
                                :disabled="cycleLabel[index].disabled"
                              >
                                {{ cycleLabel[index].label }}
                              </button>
                            </template>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        전체 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage-management__box-info">
                          <ul>
                            <li>
                              <span>미작성 보고서</span>
                              <p>{{ item.unWrittenReportCnt }}</p>
                            </li>
                            <li>
                              <span>결석 사유 미작성</span>
                              <p>{{ item.unWirttenAbsentCnt }}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="mypage-management__box"
                        v-if="isDetailData[index] === false"
                      >
                        <div class="mypage-management__box-info">
                          <div class="mypage-management__box-info-title">
                            멘티와의 첫 만남은 어떠셨나요?
                          </div>
                          <p>이후 활동 계획서를 작성해주세요~</p>
                          <button
                            class="c-btn c-btn-danger c-btn-sm"
                            type="button"
                            @click.prevent="
                              handleModalActionEvent({
                                modalType: 'survey',
                                item,
                              })
                            "
                          >
                            강의 계획서 작성
                          </button>
                        </div>
                      </div>
                      <LazyManagementMentorDetailsTable
                        v-else
                        :details="item.mentoringDetails"
                        :index="index"
                        @reportHandler="handleReportEvent"
                        @absentHandler="handleModalActionEvent"
                        :key="`mentoringTable-${index}`"
                      />
                      <div class="c-btn-group">
                        <button
                          type="button"
                          class="c-btn c-btn-blue"
                          :class="{ 'c-btn-inactive': item.isRematch, }"
                          :disabled="item.isRematch"
                          @click.prevent="
                            ($event) =>
                              handleRematchingEvent('rematching', item)
                          "
                        >
                          재매칭 신청
                        </button>
                        <!-- <button
                          type="button"
                          class="c-btn c-btn-blue"
                          @click.prevent="
                            ($event) =>
                              handleRematchingEvent('cancelMentoring', item)
                          "
                        >
                          멘토링 취소
                        </button> -->
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <ManagementMentoringStatus
              status="AC"
              v-else-if="isUseYn === false"
            />
          </div>
        </div>
      </div>
    </div>
    <template v-if="modalProps.survey.show === true">
      <ModalConfirmSurvey v-bind="{ ...modalProps.survey }" />
    </template>
    <template v-if="modalProps.deepSurvey.show === true">
      <ModalConfirmDeepSurvey v-bind="{ ...modalProps.deepSurvey }" />
    </template>
    <template v-if="modalProps.templateReport.show === true">
      <ModalConfirmTemplateReport v-bind="{ ...modalProps.templateReport }" />
    </template>
    <template v-if="modalProps.changeSchedule.show === true">
      <ModalConfirmChangeScheduleForMentor
        v-bind="{ ...modalProps.changeSchedule }"
      />
    </template>
    <template v-if="modalProps.hooky.show === true">
      <ModalConfirmHooky v-bind="{ ...modalProps.hooky }" />
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
    <!-- <template v-if="modalProps.cancelMentoring.show === true">
      <ModalConfirmCancelMentoring v-bind="{ ...modalProps.cancelMentoring }" />
    </template> -->
  </div>
</template>
