<script setup>
definePageMeta({
  layout: "interest",
});

const emit = defineEmits(["getResult", "setPrefer", "getPreferData"]);

const p = defineProps({
  isNext01: { type: Boolean, default: false },
  isNext02: { type: Boolean, default: false },
  preferValue: { type: String, default: "" },
  searchText: { type: String, default: "" },
  preferList: { type: Array, default: [] },
});

const r = useRoute();
const router = useRouter();

const d = reactive({
  type: r.query.type,
  userChat: "",
  isShow: true,
  cp: {
    cd: JSON.parse(uGetLoginInfo("cp"))?.cd,
    cdnm: JSON.parse(uGetLoginInfo("cp"))?.cdnm,
  },
});

onMounted(() => {
  if (isEqual(d.type, "01")) {
    d.userChat = "내 친구들이 좋아하는 강좌로 찾아줘.";
  } else if (isEqual(d.type, "02")) {
    d.userChat = "내가 좋아하는 분야로 찾아줘.";
  } else if (isEqual(d.type, "07")) {
    d.userChat = "내가 직접 검색해서 찾아볼래.";
  } else if (isEqual(d.type, "08")) {
    d.userChat = "관심 분야를 내가 선택해 볼께~";
  } else if (isEqual(d.type, "09")) {
    d.userChat = "서울런에서 가장 인기 있는 강좌들을 보고 싶어~!";
  } else if (isEqual(d.type, "13")) {
    d.userChat = d.cp.cdnm + "강의 추천해줘~!";
  } else if (isEqual(d.type, "14")) {
    d.userChat = "전문 강좌 추천해줘~";
  }
});

watch(
  () => p.preferValue,
  (newVal) => {
    console.log("newVal ", newVal);
    if (!isEmpty(newVal)) {
      if (isEqual(newVal, "img")) {
        d.userChat = "내 관심사는 이미지로 찾아 볼래.";
      } else {
        router
          .push({ path: "/interest/chatting", query: { type: "08" } })
          .then(() => {
            router.go(0);
          });
      }
    }
  },
  { immediate: true }
);
</script>
<template>
  <div class="interest__chatting-item c-flex user" v-if="d.isShow">
    <div class="interest__chatting-message">
      <div class="c-message c-message--user">
        <div class="c-message--cont">
          <p>{{ d.userChat }}</p>
        </div>
      </div>
    </div>
    <div class="interest__chatting-profile">
      <img src="@img/@temp/2.jpg" alt="사용자 프로필" />
    </div>
  </div>
</template>
