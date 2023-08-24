<script setup>
import { useModalStore } from "@/store";
import { getCurrentInstance } from "vue";
import { call } from "@/api";

const modal = useModalStore();
const vm = getCurrentInstance();
const p = defineProps({
  isShow: { type: Boolean, default: null },
});

const isShowComputed = computed(() => p.isShow);

const d = reactive({
  type: "prev",
  stageNum: 1,
  activeKeywordCnt: computed(
    () => d.data.keywords.filter((item) => item.isActive === true).length
  ),
  activeImgCnt: computed(
    () =>
      d.data.preferImages[d.stageNum - 1].filter(
        (item) => item.isActive === true
      ).length
  ),
  preModal: {
    isShow: isShowComputed,
    title: "나의 관심사 찾기",
    subTitle: "이미지로 나도 몰랐던 선호 주제를 찾아봅니다.",
    description:
      "이미지 선택 선호 주제 설문이란? <br/> 사용자의 관심사를 선호하는 이미지와 매칭하여 추천을 위해 진행되는 약식 설문입니다.",
  },
  imgModal: {
    isShow: isShowComputed,
    title: "나의 관심사 찾기",
    subTitle:
      "다음 중 선호하는 이미지를 선택해주세요(<span class='c-text-danger'>1</span>/5)",
    description: "제시된 이미지 중 선호하는 이미지를 3개 선택해주세요.",
  },
  keywordModal: {
    isShow: isShowComputed,
    title: "나의 관심사 찾기",
    subTitle: "정책 정보에 관심이 있으신가요?",
    description:
      "평소에 궁금했던 지원사업이나 정책 정보와 관련된 키워드를 선택해 주세요. (최대 2가지)",
  },
  data: {
    preferImages: [],
    keywords: [],
  },
});
onMounted(() => {
  getInterestImgData();
});

watch(
  () => d.stageNum,
  (value) => {
    d.imgModal.subTitle = `다음 중 선호하는 이미지를 선택해주세요(<span class='c-text-danger'>${value}</span>/${d.data.preferImages.length})`;
  }
);

const getInterestImgData = async () => {
  await call({
    id: "관심사 이미지 불러오기",
    endpoint: `/api/sq/prefer/images`,
    data: {
      age: isEmpty(sessionStorage.getItem("age"))
        ? ""
        : sessionStorage.getItem("age"),
    },
    onResponse({ data }) {
      console.log("관심사 이미지 불러오기", data);
      d.data = data;
      return true;
    },
  });
};

const onClickActiveImg = (item) => {
  item.isActive = !item.isActive;
  if (d.activeImgCnt > 3) {
    modal.alert("알림", "사진은 3개 이상 선택하실 수 없습니다.");
    item.isActive = false;
    return;
  }
};

const onClickActiveKeyword = (item) => {
  item.isActive = !item.isActive;
  if (d.activeKeywordCnt > 2) {
    modal.alert("알림", "최대 2가지까지 선택하실 수 있습니다.");
    item.isActive = false;
    return;
  }
};

const handlePrevStage = () => {
  if (d.type === "keyword") {
    d.type = "img";
    return;
  }
  d.stageNum <= 1 ? (d.type = "prev") : --d.stageNum;
};

const handleNextStage = () => {
  if (d.activeImgCnt < 3) {
    modal.alert("알림", "제시된 이미지 중 선호하는 이미지를 3개 선택해주세요.");
    return;
  }

  if (d.stageNum === d.data.preferImages.length) {
    // 나의 관심사 설정에는 정책 키워드 선택하는게 안들어가요
    // 여기서 나의 관심사 설정 페이지인지, 관심추천 페이지인지 체크해서
    // true 일 때 d.type="keyword" 로 되게 해주시면 됩니다.
    if (d.data.adultFlag) {
      d.type = "keyword";
    } else {
      onClickCloseModal();
    }
    return;
  }
  ++d.stageNum;
};

const onClickConfirm = async () => {
  let arr = [];
  console.log(d.data.preferImages);
  for (let item of d.data.preferImages) {
    item
      .filter((e) => e.isActive === true)
      .map((e) => {
        arr.push(e);
      });
  }

  // 정책 정보 키워드 데이터 추가해서 보내야돼요
  await call({
    id: "관심사 이미지 저장하기",
    endpoint: `/api/sq/prefer/select`,
    method: "post",
    data: {
      selectedImages: arr,
      selectedPolicy: [],
    },
    onResponse({ data }) {
      //완료시 함수
      modal.alert("알림", "선택이 완료되었습니다.", () => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>완료>>>>>>>>>>>>", data);
        onClickCloseModal(data);
      });
      return true;
    },
  });
};

const onClickCloseModal = (data) => {
  d.stageNum = 1;
  d.type = "prev";
  d.data.preferImages.forEach((e) => {
    e.forEach((d) => {
      d.isActive = false;
    });
  });
  vm.emit("confirm", data);
};
</script>

<template>
  <CommonContentsModal
    :data="
      d.type === 'prev'
        ? d.preModal
        : d.type === 'keyword'
        ? d.keywordModal
        : d.imgModal
    "
    @close="onClickCloseModal()"
  >
    <template v-slot:innerContents>
      <div class="c-modals__interest" v-if="d.type === 'prev'">
        <div class="c-modals__interest-img">
          <img src="@img/ch-management.svg" alt="나의 관심사 찾기" />
        </div>
        <div class="c-modals__interest-text">
          <ul>
            <li>
              <span>1</span>
              <p>하단 시작 버튼을 눌러주세요.</p>
            </li>
            <li>
              <span>2</span>
              <p>선호하는 이미지를 선택해주세요.</p>
            </li>
            <li>
              <span>3</span>
              <p>AI 서울런에서 추천된 컨텐츠를 확인하세요</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="c-modals__interest-select" v-else-if="d.type === 'img'">
        <ul class="c-modals__interest-select-img">
          <li
            v-for="(item, idx) in d.data.preferImages[d.stageNum - 1]"
            :class="item.isActive ? 'active' : ''"
            @click="onClickActiveImg(item)"
          >
            <img :src="item.imageUrl" alt="로고" />
          </li>
        </ul>
      </div>

      <div class="c-modals__interest-chips" v-else>
        <button
          v-for="(item, idx) in d.data.keywords"
          class="c-chips"
          :class="item.isActive ? 'active' : ''"
          @click="onClickActiveKeyword(item)"
        >
          # {{ item.text }}
        </button>
      </div>

      <div class="c-modals__button" v-if="d.type === 'prev'">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="d.type = 'img'"
          >
            진단 시작
          </button>
        </div>
      </div>
      <div class="c-modals__button" v-else>
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-blue"
            @click="handlePrevStage"
          >
            이전
          </button>
          <button
            v-if="
              (d.stageNum === d.data.preferImages.length &&
                !d.data.adultFlag) ||
              d.type === 'keyword'
            "
            type="submit"
            class="c-btn c-btn-danger"
            @click="onClickConfirm()"
          >
            완료
          </button>
          <button
            v-else
            type="submit"
            class="c-btn c-btn-danger"
            @click="handleNextStage()"
          >
            다음
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
</template>
