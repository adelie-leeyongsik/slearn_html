<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";
import { startsWith } from "lodash";
import moment from "moment";

definePageMeta({
  layout: "board",
});

const modal = useModalStore();

const r = useRoute();

const d = reactive({
  isTarget: true,
  pageNumber: 0,
  detail: {
    description: "",
    boardSeq: "",
    title: "",
    regDtm: "",
    files: [],
  },
  event: {
    memberInfo: {
      name: "",
      phone: "",
      birth: "",
      birthDay: "01",
      birthMonth: "01",
      birthYear: "2000",
      partnerBirthDay: "01",
      partnerBirthMonth: "01",
      partnerBirthYear: "2000",
      partnerName: "",
      partnerPhone: "",
    },
  },
  commentList: {},
  newComment: "",
  boardType: {
    btnName: "",
    btnEvent: null,
    isEvent: false,
    isLive: false,
    isPoll: false,
  },
  eventModal: {
    member: {
      isShow: false,
      title: "신청 정보 입력",
      subTitle: "본 행사에는 동반자 1인 추가 신청 가능합니다.",
      description: "동반 참여자 미 입력시 본인만 신청됩니다.",
    },
    nonMember: {
      isShow: false,
      title: "비회원 신청하기",
      subTitle: "",
      description: "",
    },
  },
  pollModal: {
    isShow: false,
    isLarge: true,
    title: "",
    subTitle: "",
    description: "",
  },
  termsModal: {
    isShow: false,
    title: "이용 약관",
    subTitle: "",
    description: "",
    contents: "",
    isLarge: true,
  },
  years: [],
  months: [],
  days: [],
});

onMounted(async () => {
  getData().then(() => {
    getBoardEventData();
  });
  getCommentData();
});
const setBirthSelectbox = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1900;

  for (let year = currentYear; year >= startYear; year--) {
    d.years.push(year);
  }

  // 월 옵션 추가
  for (let month = 1; month <= 12; month++) {
    d.months.push(month.toString().padStart(2, "0"));
  }

  // 일 옵션 추가
  for (let day = 1; day <= 31; day++) {
    d.days.push(day.toString().padStart(2, "0"));
  }
};

const changedIndex = (index) => {
  d.pageNumber = index;
  getCommentData();
};

const handleClickList = () => {
  const router = useRouter();
  router.back();
};
const getData = async () => {
  await call({
    id: "공지사항 상세 조회",
    endpoint: `/api/sq/boards/notice/detail`,
    headers: "PUBLIC",
    data: {
      boardSeq: r.params.id,
    },
    onResponse({ data }) {
      console.log("notice detail etc>> ", data);
      d.detail = data;
      d.boardType.btnName = getBoardType(data.etcTypeCode);

      if (data.etcTypeCode == "LIVE") {
        const startTime = uConvertDate(
          data.liveChannel.liveStartDtm,
          "YYYY.MM.DD hh:mm"
        );
        const endTime = moment(startTime).add(
          data.liveChannel.liveTime,
          "minutes"
        );

        console.log(startTime);
        console.log(moment(endTime).format("YYYY.MM.DD hh:mm"));

        const diffInStartMinutes = moment
          .duration(moment(startTime).diff(moment()))
          .asMinutes();
        const diffInEndMinutes = moment
          .duration(moment(endTime).diff(moment()))
          .asMinutes();

        console.log(diffInStartMinutes, diffInEndMinutes);

        // 시작 전 10분, 라이브 끝나고 10분이 지났을 시 참여 버튼 없앰
        if (diffInStartMinutes < -10 || diffInEndMinutes < -10) {
          d.boardType.btnName = "";
        }
      }

      return true;
    },
  });
};

const getCommentData = async () => {
  await call({
    id: "공지사항 코멘트 조회",
    endpoint: `/api/sq/boards/notice/comment`,
    headers: "PUBLIC",
    data: {
      boardSeq: r.params.id,
      pageSize: 20,
      pageNumber: d.pageNumber,
    },
    onResponse({ data }) {
      console.log("notice comment >> ", data);

      data.rows.map((e) => {
        e.userId = e.comtUserId;
        e.regDtm = e.comtRegDtm;
        e.useYn = e.comtUseYn;
      });

      d.commentList = data;
      return true;
    },
  });
};

const toggleEventModal = () => {
  if (!d.event.selectEventLocaSeq) {
    modal.alert("알림", "참여할 행사 장소를 선택해주세요.");
    return;
  }

  let activeModal = "";

  if (isEmpty(uGetLoginInfo("userid"))) {
    if (d.event.noLoginAtteYn == "N") {
      // 비로그인 유저 참여 여부
      modal.alert("알림", "로그인 후 참여할 수 있는 행사입니다.");
      return;
    } else {
      activeModal = d.eventModal.nonMember;
    }
  } else {
    getLoginUserInfo();
    activeModal = d.eventModal.member;
  }

  if (d.event.noMemberAtteYn === "N") {
    d.eventModal.member.subTitle = "";
    d.eventModal.member.description = "";
  }

  activeModal.isShow = !activeModal.isShow;
};

const getLoginUserInfo = async () => {
  await call({
    id: "행사참여 개인정보 조회",
    endpoint: `/api/sq/event/recruit/info`,
    headers: "PUBLIC",
    onResponse({ data }) {
      console.log("행사참여 개인정보 조회", data);
      // data.phone = data.phone.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3");
      data.birthYear = data.birth.substring(0, 4);
      data.birthMonth = data.birth.substring(4, 6);
      data.birthDay = data.birth.substring(6, 8);

      d.event.memberInfo = Object.assign({}, d.event.memberInfo, data);

      return true;
    },
  });
};

const setEventData = async () => {
  for (const key in d.event.memberInfo) {
    if (!d.event.memberInfo[key]) {
      modal.alert("알림", "신청 정보를 입력해주세요.");
      return;
    }
  }

  if (!d.event.isAgree) {
    modal.alert("알림", "개인정보 수집/이용에 동의해주세요.");
    return;
  }

  d.event.memberInfo.partnerBirth =
    d.event.memberInfo.partnerBirthYear +
    d.event.memberInfo.partnerBirthMonth +
    d.event.memberInfo.partnerBirthDay;

  const param = `?eventRcrtSeq=${d.detail.etcValue}&eventLocaSeq=${d.event.selectEventLocaSeq}&esseAgreeYn=Y&name=${d.event.memberInfo.name}&birth=${d.event.memberInfo.birth}&phone=${d.event.memberInfo.phone}&partnerName=${d.event.memberInfo.partnerName}&partnerBirth=${d.event.memberInfo.partnerBirth}&partnerPhone=${d.event.memberInfo.partnerPhone}`;

  await call({
    id: "공지사항 코멘트 저장",
    endpoint: isEmpty(uGetLoginInfo("userInfo"))
      ? `/api/sq/event/recruit/attend${param}`
      : `/api/sq/event/recruit/attend_t${param}`,
    headers: "PUBLIC",
    method: "post",
    onResponse({ data }) {
      modal.alert("알림", "행사 신청이 완료되었습니다.");
      d.eventModal.member.isShow = false;
      d.eventModal.nonMember.isShow = false;
      return true;
    },
  });
};

const togglePollModal = () => {
  d.pollModal.isShow = !d.pollModal.isShow;
};

const getBoardType = (code) => {
  let btnName = "";
  switch (code) {
    case "EVEN":
      d.boardType.isEvent = true;
      d.boardType.btnEvent = toggleEventModal;
      setBirthSelectbox();
      btnName = "선택하기";
      break;
    case "LIVE":
      d.boardType.isLive = true;
      d.boardType.btnEvent = goLiveUrl;
      btnName = "화상 입장하기";
      break;
    case "POLL":
      d.boardType.isPoll = true;
      d.boardType.btnEvent = togglePollModal;
      btnName = "설문조사 시작하기";
      break;
  }

  return btnName;
};

const goLiveUrl = async () => {
  if (d.detail.liveChannel.urlType === "YT") {
    window.open(d.detail.liveChannel.liveChannelUrl, "_blank");
    return;
  }

  if (isEmpty(uGetLoginInfo("userid"))) {
    modal.alert("알림", "로그인이 필요한 서비스입니다.");
    return;
  }

  let url = "";
  await call({
    id: "공지사항 수업 (세미나) url ",
    endpoint: "/api/sq/seminar/noties/url",
    data: {
      roomId: d.detail.liveChannel.liveChannelUrl,
    },
    headers: "PUBLIC",
    onResponse({ data }) {
      url = data.result_code;
      return true;
    },
  });
  await call({
    id: "공지사항 수업 (세미나) 참여",
    endpoint: `/api/sq/seminar/noties/attend?etcValue=${d.detail.etcValue}&seminarUrl=${url}`,
    method: "post",
    data: {
      etcValue: d.detail.etcValue,
      seminarUrl: url,
    },
    headers: "PUBLIC",
    onResponse({ data }) {
      if (data.result_code === "ok") {
        let w = window.open(url, "_blank");
        w.document.title = "새창으로 열기";
      } else {
        modal.alert("알림", "참여할 수 없습니다. 관리자에게 문의해주세요.");
      }
      return true;
    },
  });
};

const getTermsInfo = async () => {
  const termsInfo = await uGetTermsInfo("SELN", "SEOULLEARN", "TEMPLATE_P003");
  d.termsModal.title = termsInfo.title;
  d.termsModal.contents = termsInfo.termDesc;
  d.termsModal.isShow = true;
};

const getBoardEventData = async () => {
  let url = "";

  if (d.boardType.isEvent) {
    url = `/api/sq/event/recruit/?eventRcrtSeq=${d.detail.etcValue}`;
  } else if (d.boardType.isPoll) {
    url = `/api/sq/survey/${d.detail.etcValue}`;
  }

  if (!url) return;

  await call({
    id: "공지사항 보드 타입 데이터(행사모집/화상/설문)",
    endpoint: url,
    headers: "PUBLIC",
    data: {
      boardSeq: r.params.id,
      pageSize: 20,
      pageNumber: 0,
    },
    onResponse({ data }) {
      console.log("공지사항 보드 타입 데이터(행사모집/화상/설문) >> ", data);
      d.event = Object.assign({}, d.event, data);

      if (d.boardType.isPoll) {
        d.pollModal.title = d.event.title;
        d.pollModal.description = d.event.description;

        // 초,중,고,비교과,검정고시 순으로 11111
        d.isTarget = false;
        const targetArr = data.schlLevelCode.split("");
        const targetType = uGetLoginInfo("schlLevel");

        switch (targetType) {
          case "SCHLVL_P001":
            //초등
            d.isTarget = targetArr[0] == 1;
            break;
          case "SCHLVL_P002":
            //중등
            d.isTarget = targetArr[1] == 1;
            break;
          case "SCHLVL_P003":
            //고등
            d.isTarget = targetArr[2] == 1;
            break;
          case "SCHLVL_P004":
            // 비교과
            d.isTarget = targetArr[3] == 1;
            break;
          case "SCHLVL_P005":
            // 검정고시
            d.isTarget = targetArr[4] == 1;
            break;
        }
      } else if (d.boardType.isEvent) {
        d.event.location = data.locations;
      }
      return true;
    },
  });
};
</script>
<template>
  <!-- 행사모집 모달  -->
  <CommonContentsModal
    :data="
      isEmpty(uGetLoginInfo('userid'))
        ? d.eventModal.nonMember
        : d.eventModal.member
    "
    @close="d.boardType.btnEvent"
  >
    <template v-slot:innerContents>
      <div class="c-modals__form">
        <div class="c-form-group">
          <label for="name02" class="c-form-label">신청자 본인 성명</label>
          <input
            type="text"
            id="name02"
            class="c-form-control"
            :value="d.event.memberInfo.name"
            :disabled="!isEmpty(uGetLoginInfo('userid'))"
          />
        </div>
      </div>

      <div class="c-modals__form">
        <div class="c-form-group">
          <div class="c-form-label">신청자 본인 생년월일</div>
          <div class="c-input-group c-input-group--birth">
            <select
              class="c-form-control"
              title="생년월일 - 연도"
              v-model="d.event.memberInfo.birthYear"
              :disabled="!isEmpty(uGetLoginInfo('userid'))"
            >
              <option v-for="year in d.years" :key="year">
                {{ year }}
              </option>
            </select>
            <select
              class="c-form-control"
              title="생년월일 - 월"
              v-model="d.event.memberInfo.birthMonth"
              :disabled="!isEmpty(uGetLoginInfo('userid'))"
            >
              <option v-for="month in d.months" :key="month">
                {{ month }}
              </option>
            </select>
            <select
              class="c-form-control"
              title="생년월일 - 일"
              :disabled="!isEmpty(uGetLoginInfo('userid'))"
              v-model="d.event.memberInfo.birthDay"
            >
              <option v-for="day in d.days" :key="day">
                {{ day }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="c-modals__form">
        <div class="c-form-group">
          <label for="number02" class="c-form-label"
            >신청자 본인 휴대폰 번호</label
          >
          <Input
            v-model="d.event.memberInfo.phone"
            :onlyNumber="true"
            placeholder="'-'를 제외하고 입력해주세요."
            maxlength="11"
            :disabled="!isEmpty(uGetLoginInfo('userid'))"
          />
        </div>
      </div>

      <template v-if="d.event.noMemberAtteYn === 'Y'">
        <div class="c-modals__form">
          <div class="c-form-group">
            <label for="name01" class="c-form-label">동반 참여자 성명</label>
            <input
              type="text"
              id="name01"
              class="c-form-control"
              placeholder="이름을 입력해주세요"
              v-model="d.event.memberInfo.partnerName"
            />
          </div>
        </div>

        <div class="c-modals__form">
          <div class="c-form-group">
            <div class="c-form-label">동반 참여자 생년월일</div>
            <div class="c-input-group c-input-group--birth">
              <select
                class="c-form-control"
                title="생년월일 - 연도"
                v-model="d.event.memberInfo.partnerBirthYear"
              >
                <option v-for="year in d.years" :key="year">
                  {{ year }}
                </option>
              </select>
              <select
                class="c-form-control"
                title="생년월일 - 월"
                v-model="d.event.memberInfo.partnerBirthMonth"
              >
                <option v-for="month in d.months" :key="month">
                  {{ month }}
                </option>
              </select>
              <select
                class="c-form-control"
                title="생년월일 - 일"
                v-model="d.event.memberInfo.partnerBirthDay"
              >
                <option v-for="day in d.days" :key="day">
                  {{ day }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="c-modals__form">
          <div class="c-form-group">
            <label for="number01" class="c-form-label"
              >동반 참여자 휴대폰 번호</label
            >
            <Input
              v-model="d.event.memberInfo.partnerPhone"
              :onlyNumber="true"
              placeholder="'-'를 제외하고 입력해주세요."
              maxlength="11"
            />
          </div>
        </div>
      </template>

      <div class="c-modals__form">
        <div class="c-form-group">
          <label for="agree" class="c-form-label"
            >개인정보처리방침
            <strong class="c-text-primary"
              >(반드시 약관의 내용을 확인해주세요)</strong
            ></label
          >
          <div class="c-form-check__box">
            <div class="c-form-check">
              <input
                class="c-form-check-input"
                type="checkbox"
                name="exampleCheckbox01"
                v-model="d.event.isAgree"
                id="exampleCheckbox01-02"
              />
              <label class="c-form-check-label" for="exampleCheckbox01-02">
                개인정보 수집/이용에 관한 동의 (필수)
              </label>
            </div>
            <button
              class="c-btn c-btn-text c-btn-text--line"
              @click="getTermsInfo"
            >
              내용보기
            </button>
          </div>
        </div>
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="d.boardType.btnEvent"
          >
            취소
          </button>
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="setEventData()"
          >
            신청완료
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 행사모집 모달 END -->

  <!-- 설문 모달  -->
  <CommonContentsModal :data="d.pollModal" @close="d.boardType.btnEvent">
    <template v-slot:innerContents>
      <div class="c-modals__survey">
        <template v-for="(item, idx) in d.event.questions">
          <!-- 객관식 type O -->
          <div class="c-modals__survey-col" v-if="item.qustTypeCode === 'O'">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="name" class="c-form-label">{{
                  item.qustDesc
                }}</label>
                <!-- c-form-check-group--col3~7 클래스를 한줄에 몇개가 올지 정할수 있음. -->
                <div class="c-form-check-group c-form-check-group--col3">
                  <div
                    class="c-form-check"
                    v-for="(quest, innerIdx) in item.questionItems"
                  >
                    <input
                      class="c-btn-check"
                      type="radio"
                      :name="`magnitude${idx}`"
                      :id="`magnitude${idx + item.qustTypeCode + innerIdx}`"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      :for="`magnitude${idx + item.qustTypeCode + innerIdx}`"
                      >{{ quest.qustItemDesc }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 객관식 END -->
          <!-- 척도형 -->
          <div class="c-modals__survey-col" v-if="item.qustTypeCode === 'P'">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="name" class="c-form-label">{{
                  item.qustDesc
                }}</label>
                <div
                  class="c-form-check-group"
                  :class="`c-form-check-group--col${item.questionItems.length}`"
                >
                  <div
                    class="c-form-check"
                    v-for="(quest, innerIdx) in item.questionItems"
                  >
                    <input
                      class="c-btn-check"
                      type="radio"
                      :name="`magnitude${idx}`"
                      :id="`magnitude${idx + item.qustTypeCode + innerIdx}`"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      :for="`magnitude${idx + item.qustTypeCode + innerIdx}`"
                      >{{ quest.qustItemDesc }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 척도형 END -->
          <div
            class="c-modals__survey-col"
            v-if="item.qustTypeCode === 'D' || item.qustTypeCode === 'W'"
          >
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="curriculum" class="c-form-label">{{
                  item.qustDesc
                }}</label>
                <textarea
                  class="c-form-control"
                  placeholder="텍스트를 입력하세요"
                  id="curriculum"
                ></textarea>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="etc" class="c-form-label"
              >그 외 상담하고 시은 내용을 적어주세요</label
            >
            <textarea
              class="c-form-control"
              placeholder="텍스트를 입력하세요"
              id="etc"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-blue"
            @click="d.boardType.btnEvent"
          >
            취소
          </button>
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="$emit('close')"
          >
            등록
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 설문 모달 END -->
  <!-- 이용약관 -->
  <CommonContentsModal
    :data="d.termsModal"
    @close="d.termsModal.isShow = false"
  >
    <template v-slot:innerContents>
      <div
        class="c-modals__contents-terms"
        v-html="d.termsModal.contents"
      ></div>
    </template>
  </CommonContentsModal>
  <!-- 이용약관 END -->
  <div class="board">
    <PubBreadCrumbs />
    <div class="board-view">
      <div class="board-view__title">
        <p>
          {{ d.detail.title }}
        </p>
        <span>{{ uConvertDate(d.detail.regDtm, "YYYY.MM.DD") }}</span>
      </div>
      <div class="board-view__contents">
        <div
          v-if="d.detail?.files?.length > 0"
          class="board-view__contents-head"
        >
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li v-for="file in d.detail.files">
                <a
                  href="javascript:void(0)"
                  @click.prevent="uFileDownload(file.fileSeq)"
                  class="c-badge c-badge-lg c-badge-light"
                >
                  <p>{{ file.origFileName }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- temp -->
        <div
          class="board-view__contents-body"
          v-html="d.detail.description"
        ></div>
        <div class="event-view__contents-win" v-if="d.boardType.isEvent">
          <h3>참여할 <span>행사 장소</span>를 선택해 주세요.</h3>
          <div class="c-form-group">
            <div class="c-form-check-group">
              <div
                class="c-form-check"
                v-for="(item, index) in d.event.location"
              >
                <input
                  class="c-btn-check"
                  type="radio"
                  :name="`location`"
                  :id="`location${index}`"
                  :value="item.eventLocaSeq"
                  v-model="d.event.selectEventLocaSeq"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  :for="`location${index}`"
                  ><strong>{{ item.title }}</strong></label
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-primary" @click="handleClickList">
          <strong>목록으로</strong>
        </button>
        <button
          v-if="!isEmpty(d.boardType.btnName) && d.isTarget"
          class="c-btn c-btn-lg c-btn-danger"
          @click="d.boardType.btnEvent"
        >
          <strong>{{ d.boardType.btnName }}</strong>
        </button>
      </div>
      <Comments
        :data="d.commentList"
        :isSecret="false"
        :boardSeq="Number(r.params.id)"
        @changedPageIndex="changedIndex"
      />
    </div>
  </div>
</template>
