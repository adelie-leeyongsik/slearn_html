<script setup>
import { isAccssMentoringCase } from "@/utils/gp";
import { call } from "@/api";

const router = useRouter();

const p = defineProps({
  currentUrl: { type: String, default: "" },
});

const snb = reactive({
  userName: "",
  userStatus: "",
  menuList: [
    { menuName: "수강 관리", isActive: false, url: "/mypage/lecture" },
    { menuName: "학습 대시보드", isActive: false, url: "/mypage/report" },
    {
      menuName: "맞춤추천",
      isActive: false,
      subMenu: [
        {
          menuName: "AI추천 내역",
          isActive: false,
          url: "/mypage/lecture-pick",
        },
        { menuName: "관심추천 내역", isActive: false, url: "/mypage/interest" },
        {
          menuName: "나의 관심사 설정",
          isActive: false,
          url: "/mypage/interest-settings",
        },
      ],
    },
    ...isAccssMentoringCase(),
    {
      menuName: "나의서비스",
      isActive: false,
      subMenu: [
        {
          menuName: "진로진학상담내역",
          isActive: false,
          url: "/mypage/consulting",
        },
        { menuName: "이벤트", isActive: false, url: "/mypage/event" },
        { menuName: "내드라이브", isActive: false, url: "/mypage/drive" },
        {
          menuName: "내가 추천한 강의",
          isActive: false,
          url: "/mypage/lecture-suggestion",
        },
        { menuName: "1:1문의 내역", isActive: false, url: "/mypage/inquiry" },
      ],
    },
    {
      menuName: "쿠폰",
      isActive: false,
      url: "/mypage/coupon",
    },
    {
      menuName: "회원정보 변경",
      isActive: false,
      url: "/mypage/pw-check",
    },
  ],
});

onMounted(() => {
  getMakeMenu();

  let current = p.currentUrl;
  let path = router.currentRoute.value.path;

  let list = snb.menuList;

  list.forEach((f) => {
    let sub = f.subMenu;

    if (!isEmpty(f.url)) {
      if (isEqual(f.url, current || path)) {
        f.isActive = true;
      }
    } else if (!isEmpty(sub)) {
      sub.forEach((v) => {
        if (isEqual(v.url, current || path)) {
          f.isActive = true;
          v.isActive = true;
        }
      });
    }
  });

  getProfile();
});

const getMakeMenu = () => {
  let memeberType = uGetLoginInfo("memberTypeCode");
  let wasMentorYn = uGetLoginInfo("wasMentorYn");

  if (!isEqual(wasMentorYn, "Y") && isEqual(memeberType, "JOINKND_001")) {
    //차상위 멘티 > 일반
    snb.menuList = snb.menuList.filter((f) => f.menuName != "학습 대시보드");
  }
};

const onClickActive = (data) => {
  data.isActive = !data.isActive;
};

const getProfile = () => {
  call({
    method: "get",
    id: "회원 프로필 조회",
    endpoint: "/api/sq/member/profile",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        snb.userName = data.userName;
        snb.userStatus = data.status;
      }
    },
  });
};
</script>
<template>
  <div class="mypage__snb">
    <div class="mypage__snb-wrap">
      <div class="mypage__snb-head">
        <div class="mypage__snb-head-profile">
          <div class="mypage__snb-head-profile-img">
            <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
            <a
              href="javascript:void(0)"
              class="mypage__snb-head-profile-setting"
              >프로필 변경하기</a
            >
          </div>
          <div class="mypage__snb-head-name">{{ snb.userName }}님</div>
        </div>

        <div class="mypage__snb-head-status">
          <div class="c-badge c-badge-yellow c-badge-lg">
            {{ snb.userStatus }}
          </div>
        </div>
      </div>
      <nav class="mypage__snb-list">
        <strong>마이페이지</strong>
        <ul>
          <template v-for="(list, idx) in snb.menuList">
            <li
              :class="{ 'router-link-active': list.isActive }"
              v-if="isEmpty(list.subMenu)"
            >
              <router-link :to="`${list.url}`">{{ list.menuName }}</router-link>
            </li>
            <li
              class="mypage__snb-list-sub"
              :class="{ active: list.isActive }"
              v-else
            >
              <a href="javascript:void(0);" @click="onClickActive(list)">{{
                list.menuName
              }}</a>
              <ul>
                <li v-for="(sub, index) in list.subMenu">
                  <router-link
                    :to="`${sub.url}`"
                    :class="{ 'router-link-active ': sub.isActive }"
                    >{{ sub.menuName }}
                  </router-link>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: $primary;
}
</style>
