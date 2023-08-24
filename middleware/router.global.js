import { useMenuStore } from "@/store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  document.title = "서울런";

  if (isEmpty(to.matched)) {
    return navigateTo("/error");
  }

  const menuList = useMenuStore();
  const userId = uGetLoginInfo("userid");

  if (
    isEmpty(userId) &&
    (to.path.includes("revalidation") ||
      to.path.includes("mypage") ||
      to.path.includes("/interest/ai"))
  ) {
    return navigateTo("/login");
  }

  let list = null;

  if (to.path.includes("mypage")) {
    list = menuList.lnbList;

    list.forEach((f) => {
      if (!isEmpty(f.subMenu)) {
        f.subMenu.forEach((v) => {
          if (isEqual(v.url, to.fullPath)) {
            document.title = "서울런 - " + v.menuName;
          }
        });
      } else {
        if (isEqual(f.url, to.fullPath)) {
          document.title = "서울런 - " + f.menuName;
        }
      }
    });
  } else {
    list = menuList.gnbList;

    list.forEach((f) => {
      f.subMenu.forEach((v) => {
        if (isEqual(v.url, to.fullPath)) {
          document.title = f.menuName + " - " + v.menuName;
          console.log(" document.title ", document.title);
        }
      });
    });
  }
});
