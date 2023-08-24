<script setup>
import { useMenuStore } from "@/store";

const router = useRouter();
const menuSotre = useMenuStore();

const p = defineProps({
  currentUrl: { type: String, default: "" },
});

const snbMob = reactive({
  menuList: menuSotre.lnbList,
  menuInfo: "",
  firstList: [],
  subMenuInfo: "",
  secondList: [],
  isDisabled: false,
});

onMounted(() => {
  snbMob.firstList = snbMob.menuList.filter((f) => !isEmpty(f.menuName));

  let current = p.currentUrl;
  let path = router.currentRoute.value.path;

  snbMob.menuList.forEach((v) => {
    if (!isEmpty(v.url)) {
      if (isEqual(v.url, current || path)) {
        snbMob.menuInfo = v.menuName + "|" + v.url;
        snbMob.secondList = [];
        snbMob.isDisabled = true;
      }
    } else if (!isEmpty(v.subMenu)) {
      v.subMenu.forEach((f) => {
        if (isEqual(f.url, current || path)) {
          snbMob.isDisabled = false;
          snbMob.menuInfo = v.menuName + "|" + v.url;
          snbMob.secondList = v.subMenu;
          snbMob.subMenuInfo = f.menuName + "|" + f.url;
        }
      });
    }
  });
});

const onChangeMenu = () => {
  let info = snbMob.menuInfo.split("|");

  if (!isEqual(info[1], "undefined")) {
    snbMob.isDisabled = true;
    router.push(info[1]);
  } else {
    snbMob.isDisabled = false;
    snbMob.secondList = snbMob.menuList.filter(
      (f) => f.menuName === info[0]
    )[0].subMenu;

    snbMob.subMenuInfo =
      snbMob.secondList[0].menuName + "|" + snbMob.secondList[0].url;

    onChangeSubMenu();
  }
};

const onChangeSubMenu = () => {
  let info = snbMob.subMenuInfo.split("|");
  router.push(info[1]);
};
</script>
<template>
  <div class="mypage__snb-tablet">
    <div class="mypage__snb-tablet-item">
      <select
        class="c-form-control"
        title="마이페이지 대메뉴"
        v-model="snbMob.menuInfo"
        @change="onChangeMenu"
      >
        <template v-for="list in snbMob.firstList">
          <option :value="`${list.menuName}|${list.url}`">
            {{ list.menuName }}
          </option>
        </template>
      </select>
    </div>
    <div class="mypage__snb-tablet-item">
      <select
        class="c-form-control"
        title="마이페이지 소메뉴"
        v-model="snbMob.subMenuInfo"
        @change="onChangeSubMenu"
        :disabled="snbMob.isDisabled"
      >
        <template v-if="!snbMob.isDisabled" v-for="list in snbMob.secondList">
          <option :value="`${list.menuName}|${list.url}`">
            {{ list.menuName }}
          </option>
        </template>
        <template v-else>
          <option value="">-</option>
        </template>
      </select>
    </div>
  </div>
</template>
