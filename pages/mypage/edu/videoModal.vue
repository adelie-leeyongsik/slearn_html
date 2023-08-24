
<script setup>
import { call } from "@/api";

import { useMentoringStore, useModalStore } from "@/store";

const router = useRouter();
const attrs = useAttrs();
const modal = useModalStore();
const { MENTORING: { MENTORING_EDU_VIDEO_INFO }, } = useAppConfig();
const { $dayjs } = useNuxtApp();

// props 선언
const props = defineProps({
  slcIdx: {
    Type: String,
    required: true,
  },
});

// 현제 재생되는 강의 정보
let playData = reactive({
  slcIdx: "",
  slcsIdx: "",
  ctntSeq: "",
  ctntName: "",
  ctntLinkUrl: "",
  lastPlayPosition: 0,
  list: [],
});

const playState = {
  IDLE: "idle",
  PLAY: "play",
  PLAYING: "playing", // 실제로 play가 찍히는데 플레이어 reference에는 이값으로 되어있어 혹시 몰라 대응하기 위해 만듬.
  STOP: "stop",
  PAUSE: "pause"
}


// 플레이어 관련 변수
let playerApi = null;
// 팝업 오픈시 부터 종료시까지 Timer를 1초단위로 설정
// 매초마다 플레이어 상태를 체크 및 시작시간 종료시간 핸져 진행중인 시간을 변수에 저장
// 1분(특정 시간->변수) 마다 정보를 전송. 마지막 전송 정보 저장
// 일시 정지시 종료시간 갱신. 정지/종료시 정보 전송(만약 마지막 전송정보랑 동일하면 보내지 않음)
// 재생구간 변경시 정보 전송(만약 마지막 전송정보랑 동일하면 보내지 않음) 및 변수 초기화
// 구간 이동시는?
let chkPlayInfo = reactive({
  intervalId: null,
  isWork: false, // interval 제어용
  cycle: 1, // interval 체크 주기(초)
  sendCycle: 60,  // 전송주기(초)
  sendCycleRemind: null,
  playStatus: playState.IDLE, // 현제 플레이어 상태
  position: null,  // 현재 재생중인 구간
  startPosition: null,  // 재생 시작 구간
  endPosition: null,  // 재생 종료 구간
  startTime: null,  // 재생 시작시간
  endTime: null,  // 재생 종료시간
  lastSendStartPosition: null,  // 마지막 전송 재생 시작 구간
  lastSendEndtPosition: null,  // 마지막 전송 재생 종료 구간
  errCnt: 0,
  maxErrCnt: 1, // 1번시도 실패시 alert 메세지 출력
});

// emit 선언
const emit = defineEmits([
  "close",
]);


const onLoadedEvent = async () => {
  await getData();  // 재생정보 조회

  // 재생정보를 체크할 interval 객체 초기화
  if (!chkPlayInfo.intervalId) {
    chkPlayInfo.intervalId = setInterval(() => {
      if (chkPlayInfo.isWork) {
        chkPlayState();
      }
    }, chkPlayInfo.cycle * 1000);
  }
};

// 플레이 상태 체크
const chkPlayState = () => {
  console.log(`>>>>> [${$dayjs().format('mm:ss')}] playerApi(${!playerApi===false}), player state(${playerApi.getState()}) play position(${playerApi.getPosition()}/${playerApi.getDuration()})`);

  if (!playerApi) return;
  if (playerApi.getState() === playState.IDLE && chkPlayInfo.playStatus === playState.IDLE) return;
  const state = playerApi.getState();
  const position = playerApi.getPosition();

  if (chkPlayInfo.startPosition !== null && !chkPlayInfo.sendCycleRemind) chkPlayInfo.sendCycleRemind = chkPlayInfo.sendCycle;
  // else if ([playState.PLAY, playState.PLAYING].includes(state)) chkPlayInfo.sendCycleRemind -= chkPlayInfo.cycle;
  else if (chkPlayInfo.sendCycleRemind) chkPlayInfo.sendCycleRemind -= chkPlayInfo.cycle;
  
  chkPlayInfo.position = position; // 재생위치
  chkPlayInfo.playStatus = playerApi.getState(); // 재생상태

  if ([playState.PAUSE, playState.COMPLETE].includes(state)) chkPlayInfo.endTime = $dayjs().format("YYYYMMDDHHmmss");
  else if ([playState.PLAY, playState.PLAYING].includes(state) && chkPlayInfo.endTime) chkPlayInfo.endTime = null;

  // 데이타 전송
  if (chkPlayInfo.sendCycleRemind <= 0) {
    sendPlayState();
  }
};

// 플레이 정보 전송
const sendPlayState = async (isLast) => {
  // 이전 전송내역과 동일한 데이타면 전송하지 않음
  if (chkPlayInfo.lastSendStartPosition === chkPlayInfo.startPosition && chkPlayInfo.lastSendEndtPosition === chkPlayInfo.endPosition) {
    console.log('>>>>> !! Not sendPlayState');
    return;
  }

  // 시작위치와 현제위치가 동일하면 보내지 않음.
  if (chkPlayInfo.startPosition === chkPlayInfo.position) {
    console.log('>>>>> !! Not sendPlayState');
    return;
  }

  const nowTime = $dayjs().format('YYYYMMDDHHmmss');
  if (!chkPlayInfo.endTime) chkPlayInfo.endTime = nowTime;
  chkPlayInfo.lastSendStartPosition = chkPlayInfo.startPosition;
  chkPlayInfo.lastSendEndtPosition = chkPlayInfo.position;
  
  console.log(`>>>>> call sendPlayState : ${chkPlayInfo.startTime} (${chkPlayInfo.lastSendStartPosition}) ~ ${chkPlayInfo.endTime} (${chkPlayInfo.lastSendEndtPosition})`);
  // 임시
  await call({
    method: "get",
    id: "공연 추천 검색",
    endpoint: "/api/sq/common/code",
    data: {
      cateId: "MENTOR_DIST",
    },
    isOveray: false,  // 로딩바 OFF
    onResponse({ data, status }) {
      if (status === 200) {
        // 전송후 변수 초기화
        chkPlayInfo.startPosition = chkPlayInfo.lastSendEndtPosition;
        chkPlayInfo.startTime = nowTime;
        chkPlayInfo.endPosition = null;
        chkPlayInfo.endTime = null;
        chkPlayInfo.sendCycleRemind = chkPlayInfo.sendCycle;
        chkPlayInfo.errCnt = 0;  // 에러 Count
      } else {
        console.log(`>>>>> error status`, status);
        console.log(`>>>>> callback error status: ${status}, error Count: ${chkPlayInfo.errCnt}`);
        chkPlayInfo.errCnt ++;  // 에러 Count
        // 오류시 재생중인 경우 재생 종료시간 Clear
        if ([playState.PLAY, playState.PLAYING].includes(playerApi.getState())) {
          chkPlayInfo.endTime = null;
        }

        if (isLast || chkPlayInfo.errCnt >= chkPlayInfo.maxErrCnt) {
          errAlert();
        }
      }
    },
    onError({ error, status }) {
      chkPlayInfo.errCnt ++;  // 에러 Count
      console.log(`>>>>> call onError status: ${status}, error Count: ${chkPlayInfo.errCnt} error ${error}`);
      // 오류시 재생중인 경우 재생 종료시간 Clear
      if ([playState.PLAY, playState.PLAYING].includes(playerApi.getState())) {
        chkPlayInfo.endTime = null;
      }

      if (isLast || chkPlayInfo.errCnt >= chkPlayInfo.maxErrCnt) {
        errAlert();
      }
    },
  });
};

const errAlert = () => {
  modal.alert("알림", "교육 수강 진척도 정보 동기화 중 오류가 발생하였습니다.<br/>지속적으로 발생할 경우 관리자에게 문의해주세요.");
};

// 멘토교육 동영상 정보 조회
const getData = async () => {
  await call({
    id: "멘토 교육 동영상 정보",
    endpoint: bindUrlVariable(MENTORING_EDU_VIDEO_INFO, { slcIdx: props.slcIdx }),
    headers: "PUBLIC",
    onResponse({ data, status }) {
      if (status === 200) {
        playData.list = data;

        setPlayInfo(); // 플레이정보 세팅

        return true;
      }
    },
  });
};

const initChkPlayInfo = () => {
  // 정보 초기화
  Object.assign(chkPlayInfo, {
    isWork: false,
    sendCycleRemind: null,
    playStatus: playState.IDLE, // 현제 플레이어 상태
    position: null,  // 현재 재생중인 구간
    startPosition: null,  // 재생 시작 구간
    endPosition: null,  // 재생 종료 구간
    startTime: null,  // 재생 시작시간
    endTime: null,  // 재생 종료시간
    lastSendStartPosition: null,  // 마지막 전송 재생 시작 구간
    lastSendEndtPosition: null,  // 마지막 전송 재생 종료 구간
    errCnt: 0,  // 에러 횟수
  });
};

// 동영상 플레이정보 세팅
const setPlayInfo = async (slcsIdx) => {
  if (playerApi) {
    playerApi.stop();
  }

  // 기존 정보 전송
  await sendPlayState(true);

  // 플레이 체크정보 초기화
  initChkPlayInfo();

  // 선택된 영상정보 세팅
  let curPlayInfo = {
    ...(slcsIdx ? playData.list.filter((item) => item.slcsIdx === slcsIdx)[0] : playData.list[0])
  };

  if (!curPlayInfo.ctntLinkUrl) {
    modal.alert("알림", "강의 동영상 정보를 찾을 수 없습니다.<br/>관리자에게 문의해주세요.");
  }

  // 강위 URL을 PLAY용 URL로 변경
  if (curPlayInfo.ctntLinkUrl && curPlayInfo.ctntLinkUrl.indexOf('api.wecandeo.com') >= 0) {
    let urlParams = new URL(curPlayInfo.ctntLinkUrl).searchParams;
    // KEY를 PARAM값이 있는 경우만 URL을 변경
    if (urlParams.has("k")) {
      curPlayInfo.ctntLinkUrl = `https://play.wecandeo.com/video/v/?key=${urlParams.get("k")}`;
    }
  }

  // 강의 URL(이어서 볼구간이 있는 경우 세팅)
  if (curPlayInfo.lastPlayPosition && Number(curPlayInfo.lastPlayPosition) > 0) {
    curPlayInfo.ctntLinkUrl += `&start=${curPlayInfo.lastPlayPosition}`;
  }
    
  // nextTick으로 해도 이후 동영상 time이벤트가 날라오는 경우가 있어 timeout으로 실행
  Object.assign(playData, {
    ...curPlayInfo
  });
}

const iframeLoad = () => {
  // console.log(`>>>>> call iframeLoad url(${playData.ctntLinkUrl})`);

  initPlayerApi();
}

// init Player Object
const initPlayerApi = () => {
  console.log('>>>>> call initPlayerApi', playerApi);
  if (!playerApi) {
    // 플레이어 객체
    const ifrm = document.getElementById('eduPlayer');
    let contents = ifrm.contentWindow || ifrm.contentDocument;
    playerApi = new smIframeAPI(contents);

    setPlayerEvent();
  }
};

const setPlayerEvent = () => {
  playerApi.onEvent(smIframeEvent.COMPLETE, () => {
    //영상 재생 완료 이벤트
    console.log('>>>>> complete');
    //영상 재생 완료 이벤트
    sendPlayState(true);
    // 플레이 체크정보 초기화
    initChkPlayInfo();
  });
  playerApi.onEvent(smIframeEvent.TIME, (data) => {
    //영상 재생시간 이벤트
    // console.log('smIframeEvent.TIME', data.position);

    // 현제 재생시작 시간 저장
    if (chkPlayInfo.startPosition === null) {
      chkPlayInfo.startPosition = playerApi.getPosition();
      chkPlayInfo.startTime = $dayjs().format('YYYYMMDDHHmmss');
      chkPlayInfo.position = playerApi.getPosition();

      chkPlayInfo.isWork = true;
    }
  });
  playerApi.onEvent(smIframeEvent.SEEK, (data) => {
    //영상 재생시간 이벤트
    console.log('재생위치변경(seek)', data);
  });
  playerApi.onEvent(smIframeEvent.ERROR, function (data) { 
    console.error(">>>>> error", data);
  });
};

const stopPlayTimeCheck = () => {
  if (chkPlayInfo.intervalId) {
    clearInterval(chkPlayInfo.intervalId);
    chkPlayInfo.isWork = false;
    return true;
  }

  return false;
};

const close = () => {
  const callStop = stopPlayTimeCheck();

  if (callStop) {
    nextTick(() => {
      emit("close");
    });
  } else {
    emit("close");
  }
};

onBeforeUnmount(() => {
  playerApi?.destroy();
  stopPlayTimeCheck();

  // 기존 정보 전송
  sendPlayState(true);
});

await onLoadedEvent();

</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals c-modals--video" v-if="true">
      <div class="c-modals__bg" @click="close"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          <button
            class="c-modals__head-close"
            type="submit"
            @click="close"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__video-img">
          <iframe
            id="eduPlayer"
            width="100%"
            height="100%"
            :src="playData.ctntLinkUrl"
            frameborder="0"
            allowfullscreen=""
            style="position:absolute;"
            @load="iframeLoad"
          ></iframe>
        </div>
        <div class="c-modals__contents">
          <div class="c-form-label">강의 안내</div>
          <div class="c-modals__title c-text-left">
            {{ playData.ctntName }}
          </div>

          <!-- 강의 목록 없을시 삭제 -->
          <div v-if="playData.list?.length > 1" class="c-form-label title">강의 목록</div>
          <div v-if="playData.list?.length > 1" class="c-modals__video-list">
            <div v-for="item in playData.list" class="c-modals__video-list-item">
              <div class="c-modals__video-list-item-img">
                <img :src="item.filePath || item.imageUrl" alt="" />
              </div>
              <div class="c-modals__video-list-item-text">
                <a 
                  href="javascript:void(0);"
                  style="cursor: pointer" 
                  @click.prevent="setPlayInfo(item.slcsIdx)"
                >{{ item.ctntName }}</a>
                <span>{{ $dayjs('0000-00-00').set("s", item.duration).format("HH:mm:ss") }}</span>
              </div>
            </div>
          </div>
          <!-- //강의 목록 없을시 삭제 -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-table {
  margin-top: 3rem;
  thead {
    tr {
      border: 0;
      border-radius: 0.8rem;
      th {
        color: #535353;
        background-color: #f4f5f9;
      }
    }
  }
  tbody {
    color: $black;
    strong {
      color: #ccc;
    }
  }
}
</style>
