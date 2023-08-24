b
<script setup>
import Snb from "../_snb";
import manager from "./chatManager";
import manager2 from "./chatManager2";
import user from "./chatUser";

definePageMeta({
  layout: "interest",
});

const divList = ref([]);
const router = useRouter();

const r = useRoute();

const d = reactive({
  type: r.query.type,
  userId: uGetLoginInfo("userid"),
  cp: {
    cd: JSON.parse(uGetLoginInfo("cp"))?.cd,
    cdnm: JSON.parse(uGetLoginInfo("cp"))?.cdnm,
  },
  isNext01: false,
  isNext02: false,
  recomResult: false,
  preferValue: "",
  searchText: "",
  preferList: [],
});

onMounted(() => {
  init();
});

const init = () => {
  console.log("init");
  let userId = uGetLoginInfo("userid");

  if (isEqual(d.type, "02")) {
    if (isEmpty(userId)) {
      divList.value.push({
        component: markRaw(manager),
      });
    } else {
      divList.value.push({
        component: markRaw(user),
      });

      setTimeout(() => {
        divList.value.push({
          component: markRaw(manager),
        });
      }, 1000);
    }
  } else if (
    isEqual(d.type, "10") ||
    isEqual(d.type, "11") ||
    isEqual(d.type, "12")
  ) {
    divList.value.push({
      component: markRaw(manager),
    });
  } else {
    divList.value.push({
      component: markRaw(user),
    });

    setTimeout(() => {
      divList.value.push({
        component: markRaw(manager),
      });
    }, 1000);
  }
};

const getResult = (val) => {
  d.recomResult = val;

  d.isNext01 = false;
  d.isNext02 = false;
};

const onClickMore = () => {
  if (!d.recomResult) return;

  if (d.isNext01 === false) {
    d.isNext01 = true;
  } else if (d.isNext01 === true) {
    d.isNext02 = true;
  }
};

const getPrefer = (val) => {
  d.preferValue = val;
  console.log("getPrefer ", d.preferValue);
  divList.value.push({
    component: markRaw(user),
  });
};

const getPreferData = (data) => {
  d.preferList = data;

  divList.value.push({
    component: markRaw(manager2),
  });
};

const goSearch = () => {
  d.searchText = d.inputText;
};

const goPage = (key) => {
  router.push({ path: "/interest/chatting", query: { type: key } }).then(() => {
    router.go(0);
  });
};
</script>
<template>
  <div class="interest">
    <PageTitle
      title="서울런과 함께 내 관심사를 찾아보세요"
      desc="학습도, 자기개발도 이제 찾아보는 것은 그만! 선택한 방식에 따라 알아서 찾아주는 AI
    서울런의 관심추천 서비스로 한번에 알아보세요!"
    />
    <div class="interest-recommendation">
      <div class="interest__wrap chatting">
        <Snb />
        <div class="interest__contents chatting">
          <div class="interest__contents-body">
            <div class="interest__chatting">
              <div class="interest__chatting-list">
                <template v-for="(list, idx) in divList" :key="idx">
                  <component
                    :is="list.component"
                    :isNext01="d.isNext01"
                    :isNext02="d.isNext02"
                    :preferValue="d.preferValue"
                    :searchText="d.searchText"
                    :preferList="d.preferList"
                    @getResult="getResult"
                    @setPrefer="getPrefer"
                    @getPreferData="getPreferData"
                  />
                </template>
              </div>
              <div class="interest__chatting-foot">
                <div class="interest__chatting-foot--box">
                  <template v-if="isEqual(d.type, '07')">
                    <div class="interest-item__chips c-flex c-message">
                      <button
                        class="c-chips--sm c-btn-outline--primary"
                        @click="onClickMore"
                      >
                        더 보여줘
                      </button>
                      <button
                        class="c-chips--sm c-btn-primary"
                        @click="router.push('/interest')"
                      >
                        처음으로
                        <i class="ico ico-paperairplane">비행기 이미지</i>
                      </button>
                      <div class="interest-item__message c-form-group">
                        <label class="c-form-label c-dpN"
                          >채팅 텍스트 입력창</label
                        >
                        <input
                          v-model="d.inputText"
                          class="c-form-control"
                          title="채팅 텍스트 입력창"
                          placeholder="텍스트를 입력해주세요"
                          @keyup.enter="goSearch"
                        />
                        <button
                          class="c-btn c-btn-sm c-btn-radius c-btn-primary"
                          @click="goSearch"
                        >
                          전송
                        </button>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="interest-item__chips c-flex">
                      <button
                        class="c-chips--sm c-btn-outline--primary"
                        @click="onClickMore"
                      >
                        더 보여줘
                      </button>
                      <template v-if="!isEmpty(d.userId) && isEmpty(d.cp.cdnm)">
                        <button
                          class="c-chips--sm c-btn-outline--primary"
                          @click="goPage('13')"
                        >
                          ‘{{ d.cp.cdnm }}’ 강의 추천해줘
                        </button>
                        <button
                          class="c-chips--sm c-btn-outline--primary"
                          @click="goPage('14')"
                        >
                          전문 강좌 추천해줘
                        </button>
                      </template>
                    </div>
                    <div class="interest-item__chips c-flex">
                      <button
                        class="c-chips--sm c-btn-outline--primary"
                        @click="goPage('10')"
                      >
                        인기순으로 보여줘
                      </button>
                      <button
                        class="c-chips--sm c-btn-outline--primary"
                        @click="goPage('02')"
                      >
                        관련이미지로 찾아 볼래
                      </button>
                      <button
                        class="c-chips--sm c-btn-outline--primary"
                        @click="goPage('08')"
                      >
                        관심분야 선택해볼래
                      </button>
                      <button
                        class="c-chips--sm c-btn-primary"
                        @click="router.push('/interest')"
                      >
                        처음으로
                        <i class="ico ico-paperairplane">비행기 이미지</i>
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
