<script setup>
import { call } from "@/api";
import moment from "moment";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "consulting",
});
const route = useRoute();
const router = useRouter();
const modal = useModalStore();
const d = reactive({
  modal: {
    title: "진로 상담 신청서",
    subTitle: "상담 정보를 입력해주세요.",
    isShow: false,
  },
  data: {
    regDtm: "",
    openEndDt: "",
    openStartDt: "",
  },
  applyData: {
    areaName: "",
    addr: "",
    subway: "",
    counselDt: moment().format("YYYY.MM.DD"),
    counselDay: [],
    counselTime: [],
    phoneNo: "",
    nokPhoneNo: "",
    interests: [],
    schlGrad: [],
    study: "",
    school: "",
    course: "",
    living: "",
    etc: "",
    myUniversity: [],
    mySelection: [],
    myDepartment: [],
    advUniversity: [],
    advSelection: [],
    advDepartment: [],
    edUniversity: [],
    edSelection: [],
    edDepartment: [],
  },
});
onMounted(async () => {
  getData();
});

const onClickApply = () => {
  if (isEmpty(uGetLoginInfo("loginid"))) {
    modal.confirm(
      "알림",
      "로그인이 필요한 서비스입니다.<br /> 로그인을 하시겠습니까?",
      () => {
        router.push("/login");
      }
    );
    return;
  }
  if (d.data.isApply) {
    modal.alert("알림", "이미 신청한 진로진학 상담입니다");
    return;
  }
  d.modal.isShow = true;
};
const getData = async () => {
  await call({
    id: "진로진학상담 상세 조회",
    endpoint: `/api/sq/counsel/detail`,
    headers: "PUBLIC",
    data: {
      counselSeq: route.params.id,
    },
    onResponse({ data }) {
      console.log("data >> ", data);
      d.data = data;
      return true;
    },
  });
};

const onClickSaveConsult = async () => {
  if (
    isEmpty(d.applyData.areaName) ||
    isEmpty(d.applyData.addr) ||
    isEmpty(d.applyData.nokPhoneNo)
  ) {
    modal.alert(
      "알림",
      "상담시 필요한 필수 내용을 입력하신 후 다시 시도해주시길 바랍니다"
    );
    return;
  }
  // AD 진로 RD 정시 ED 수시
  for (let i = 1; i <= 6; i++) {
    //본인이 희망하는 수시 지원 희망 대학 / case1 진로진학, AD
    d.applyData["myUniversity_" + i] = d.applyData.myUniversity[i];
    d.applyData["mySelection_" + i] = d.applyData.mySelection[i];
    d.applyData["myDepartment_" + i] = d.applyData.myDepartment[i];
    //학교에서 권유하는 수시 지원 대학 / case2 대입수시 ED
    d.applyData["advUniversity_" + i] = d.applyData.advUniversity[i];
    d.applyData["advSelection_" + i] = d.applyData.advSelection[i];
    d.applyData["advDepartment_" + i] = d.applyData.advDepartment[i];
    //본인이 희망하는 수시 지원 희망 대학 / case3 정시 RD
    d.applyData["edUniversity_" + i] = d.applyData.edUniversity[i];
    d.applyData["edSelection_" + i] = d.applyData.edSelection[i];
    d.applyData["edDepartment_" + i] = d.applyData.edDepartment[i];
  }
  console.log(d.applyData);

  let arr = { ...d.applyData };

  arr.counselDay = d.applyData.counselDay.join(",");
  arr.counselTime = d.applyData.counselTime.join(",");
  arr.interests = d.applyData.interests.join(",");

  await call({
    id: "진로진학상담 신청",
    endpoint: `/api/sq/counsel/apply?counselSeq=${d.data.counselSeq}`,
    headers: "PUBLIC",
    method: "post",
    data: arr,
    onResponse({ data }) {
      modal.alert("알림", "신청이 완료되었습니다.");
      d.data.isApply = true;
      return true;
    },
  });
};
</script>
<template>
  <CommonContentsModal :data="d.modal" @close="d.modal.isShow = false">
    <template v-slot:innerContents>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="name" class="c-form-label">신청자명</label>
            <input
              type="text"
              id="name"
              class="c-form-control"
              :placeholder="uGetLoginInfo('usernm')"
              disabled
            />
          </div>
        </div>

        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="identity" class="c-form-label">서울런ID</label>
            <input
              type="text"
              id="identity"
              class="c-form-control"
              :placeholder="uGetLoginInfo('loginid')"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="identity" class="c-form-label"
              >상담 희망일
              <span>(신청일로부터 4주안의 일자를 선택해주세요)</span></label
            >
            <div class="c-input-group c-input-group--calendar">
              <DatePicker
                v-model="d.applyData.counselDt"
                :minDate="moment().format('YYYY.MM.DD')"
                :maxDate="moment().add(1, 'months').format('YYYY.MM.DD')"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    class="c-input-calendar"
                    :value="inputValue"
                    readonly
                    @click="togglePopover()"
                    title="기간별 조회 시작"
                  />
                </template>
              </DatePicker>
            </div>
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="address01" class="c-form-label"
              >군/구<strong class="c-essential">(필수)</strong></label
            >
            <input
              type="text"
              id="address01"
              class="c-form-control"
              v-model="d.applyData.areaName"
            />
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="address02" class="c-form-label"
              >세부주소<strong class="c-essential">(필수)</strong></label
            >
            <input
              type="text"
              id="address02"
              class="c-form-control"
              v-model="d.applyData.addr"
            />
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="subway" class="c-form-label">인근 지하철역</label>
            <input
              type="text"
              id="subway"
              class="c-form-control"
              v-model="d.applyData.subway"
            />
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div
          class="c-modals__survey-col-item c-modals__survey-col-item--type02"
        >
          <div class="c-form-group">
            <label for="name" class="c-form-label">학습요일</label>
            <div class="c-form-check-group c-form-check-group--col4">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  value="sun"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day00"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day00"
                  >일요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  value="mon"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day01"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day01"
                  >월요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day02"
                  value="thu"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day02"
                  >화요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day03"
                  value="wed"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day03"
                  >수요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day04"
                  value="tue"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day04"
                  >목요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day05"
                  value="fri"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day05"
                  >금요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day06"
                  value="sat"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day06"
                  >토요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselDay"
                  name="day"
                  id="day07"
                  value="etc"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day07"
                  >상관없음</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div
          class="c-modals__survey-col-item c-modals__survey-col-item--type02"
        >
          <div class="c-form-group">
            <label for="name" class="c-form-label"
              >상담 희망 시간<span
                >(선택하신 상담은 확정 시간이 아닙니다. 희망 시간 확인 후
                상담센터에서 연락드립니다)</span
              ></label
            >
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselTime"
                  name="time"
                  id="time00"
                  value="0900"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                  for="time00"
                  >09:00 ~ 12:00</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselTime"
                  name="time"
                  id="time01"
                  value="1200"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                  for="time01"
                  >12:00 ~ 15:00</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselTime"
                  name="time"
                  id="time02"
                  value="1500"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                  for="time02"
                  >15:00 ~ 18:00</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="checkbox"
                  v-model="d.applyData.counselTime"
                  name="time"
                  id="time03"
                  value="1800"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                  for="time03"
                  >18:00 ~ 20:00</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-modals__survey-col">
        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="number" class="c-form-label"
              >학부모 번호<strong class="c-essential">(필수)</strong></label
            >
            <Input
              type="text"
              id="number"
              class="c-form-control"
              v-model="d.applyData.nokPhoneNo"
              placeholder="'-'를 제외하고 입력해주세요."
              maxlength="11"
              :onlyNumber="true"
            />
          </div>
        </div>

        <div class="c-modals__survey-col-item">
          <div class="c-form-group">
            <label for="number2" class="c-form-label">학생 번호</label>
            <Input
              type="text"
              id="number2"
              v-model="d.applyData.phoneNo"
              class="c-form-control"
              placeholder="'-'를 제외하고 입력해주세요."
              maxlength="11"
              :onlyNumber="true"
            />
          </div>
        </div>
      </div>
      <!-- AD 진로 RD 정시 ED 수시 -->
      <div v-if="d.data.counselFormCode === 'AD'">
        <br />
        <div class="c-modals__title">상담 내용을 작성해 주세요</div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="name" class="c-form-label">현재 학년</label>
              <div class="c-form-check-group c-form-check-group--col6">
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="초6"
                    name="grade"
                    id="grade00"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="grade00"
                    >초6</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="중1~2"
                    name="grade"
                    id="grade01"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="grade01"
                    >중 1~2</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="중3"
                    name="grade"
                    id="grade02"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="grade02"
                    >중3</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="고1"
                    name="grade"
                    id="grade03"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="grade03"
                    >고1</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="고2"
                    name="grade"
                    id="grade04"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="grade04"
                    >고2</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    v-model="d.applyData.schlGrad"
                    value="기타"
                    name="grade"
                    id="grade05"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary column"
                    for="grade05"
                    >기타<span>(검정고시)</span></label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="textarea01" class="c-form-label"
                >Q. 학습에 있어서 어떠한 도움을 받고 싶은가요?</label
              >
              <textarea
                id="textarea01"
                class="c-form-control c-form-control-sm"
                v-model="d.applyData.study"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="textarea02" class="c-form-label"
                >Q. 진학 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요.
                받고 싶은가요?</label
              >
              <textarea
                id="textarea02"
                class="c-form-control c-form-control-sm"
                v-model="d.applyData.school"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="textarea03" class="c-form-label"
                >Q. 진로 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요
                받고 싶은가요?</label
              >
              <textarea
                id="textarea03"
                class="c-form-control c-form-control-sm"
                v-model="d.applyData.course"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="textarea04" class="c-form-label"
                >Q. 생활 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요
                받고 싶은가요?</label
              >
              <textarea
                id="textarea04"
                class="c-form-control c-form-control-sm"
                v-model="d.applyData.living"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type02"
          >
            <div class="c-form-group">
              <label for="textarea05" class="c-form-label"
                >Q. 기타 고민이 되거나 궁금한 부분을 적어주세요 받고
                싶은가요?</label
              >
              <textarea
                id="textarea05"
                class="c-form-control c-form-control-sm"
                v-model="d.applyData.etc"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type04"
          >
            <div class="c-form-group">
              <label for="name" class="c-form-label">
                Q. 가장 관심 분야를 체크해주세요 <span>(중복 3개 가능)</span>
              </label>
              <div class="c-form-check-group">
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest00"
                    v-model="d.applyData.interests"
                    value="grade"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest00"
                    >성적고민</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest01"
                    v-model="d.applyData.interests"
                    value="schoolLife"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest01"
                    >학교생활(친구관계 등)</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest02"
                    v-model="d.applyData.interests"
                    value="recordActive"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest02"
                    >생기부활동</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest03"
                    v-model="d.applyData.interests"
                    value="college"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest03"
                    >대입관련(구체적인 전공학과 및 방법)</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest04"
                    v-model="d.applyData.interests"
                    value="schoolGoal"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest04"
                    >진학목표(중등,고등)</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest05"
                    v-model="d.applyData.interests"
                    value="home"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest05"
                    >가정환경 등 환경문제</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest06"
                    v-model="d.applyData.interests"
                    value="interest"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest06"
                    >본인의 관심사(진로.직업) 찾기</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="checkbox"
                    name="interest"
                    id="interest07"
                    value="etc"
                    v-model="d.applyData.interests"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                    for="interest07"
                    >기타</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ED 대입 수시  ed => adv -->
      <div v-else-if="d.data.counselFormCode === 'ED'">
        <br />
        <div class="c-modals__title">
          수시 지원 사항을 작성해주세요
          <p>(수시 지원했던 대학, 해당없을 경우 작성X)</p>
        </div>
        <div class="c-modals__survey-col" v-for="idx in 6">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type04"
          >
            <div class="c-form-group">
              <div class="c-form-label">{{ idx }}지망</div>
              <div class="c-input-group c-input-group--type04">
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                  v-model="d.applyData.advUniversity[idx]"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                  v-model="d.applyData.advSelection[idx]"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                  v-model="d.applyData.advDepartment[idx]"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="c-modals__survey-col">
          <div class="c-modals__survey-col-item">
            <div class="c-form-group">
              <label for="textarea01" class="c-form-label"
                >그 외 상담 요청 내용</label
              >
              <textarea
                id="textarea01"
                class="c-form-control c-form-control-sm"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- ED 대입 수시 END -->

      <!-- RD 정시  rd -> ed -->
      <div v-else-if="d.data.counselFormCode === 'RD'">
        <br />

        <div class="c-modals__title">
          본인이 희망하는 정시 지원 희망 대학을 적어주세요
        </div>
        <div class="c-modals__survey-col" v-for="idx in 6">
          <div
            class="c-modals__survey-col-item c-modals__survey-col-item--type04"
          >
            <div class="c-form-group">
              <div class="c-form-label">{{ idx }}지망</div>
              <div class="c-input-group c-input-group--type04">
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                  v-model="d.applyData.myUniversity[idx]"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                  v-model="d.applyData.mySelection[idx]"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                  v-model="d.applyData.myDepartment[idx]"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="c-modals__survey-col">
          <div class="c-modals__survey-col-item">
            <div class="c-form-group">
              <label for="textarea01" class="c-form-label"
                >그 외 상담 요청 내용</label
              >
              <textarea
                id="textarea01"
                class="c-form-control c-form-control-sm"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!--  RD 정시 END -->

      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="d.modal.isShow = false"
          >
            취소
          </button>
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="onClickSaveConsult"
          >
            작성완료
          </button>
        </div>
      </div>
      <!--  -->
    </template>
  </CommonContentsModal>
  <div class="consulting">
    <BreadCrumbs />
    <div class="board-view">
      <div class="board-view__title">
        <p>
          {{ d.data.title }}
        </p>
        <span>{{ uConvertDate(d.data.regDtm, "YYYY.MM.DD") }}</span>
      </div>
      <div class="board-view__contents">
        <div class="board-view__contents-head">
          <div class="board-view__contents-head-list">
            <dl>
              <dt>작성자</dt>
              <dd>{{ d.data.regUserId }}</dd>
            </dl>
            <dl>
              <dt>신청기간</dt>
              <dd>
                {{
                  `${uConvertDate(
                    d.data.openStartDt,
                    "YYYY.MM.DD"
                  )} ~ ${uConvertDate(d.data.openEndDt, "YYYY.MM.DD")}`
                }}
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li v-for="file in d.data.files">
                <a
                  href=""
                  @click.prevent="onClickFileDown(file)"
                  class="c-badge c-badge-lg c-badge-light"
                >
                  <p>{{ file.origFileName }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="board-view__contents-body"
          v-html="d.data.description"
        ></div>
        <!-- temp -->

        <!-- temp -->
      </div>
      <div class="consulting__foot">
        <div class="c-box">
          <p>
            이용에 불편함이 있거나,<br />
            문의가 있으시다면 질문해주세요
          </p>
          <button
            class="c-btn c-btn-primary c-btn-sm"
            @click="router.push('/mypage/inquiry')"
          >
            1:1 문의하기
          </button>
        </div>
        <div class="c-box">
          <p>자주 묻는 질문은 혹시 확인해 보셨나요?</p>
          <button
            class="c-btn c-btn-primary c-btn-sm"
            @click="router.push('/faq')"
          >
            바로가기
          </button>
        </div>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-primary" @click="router.go(-1)">
          <strong>목록으로</strong>
        </button>
        <button
          v-if="moment().isBefore(d.data.openEndDt)"
          class="c-btn c-btn-lg c-btn-primary"
          @click="onClickApply"
        >
          <strong>신청하기</strong>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.c-btn-group {
  gap: 0.8rem;
  .c-btn {
    @include mobile {
      width: 100%;
      min-width: auto;
    }
  }
}
</style>
