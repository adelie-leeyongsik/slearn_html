export default defineStore("dashboard", {
  state() {
    return {
      savedTab: 0,
      savedId: null,
      savedScrollPos: 0,
    };
  },
  actions: {
    onMounted(rootDOM) {
      // this.savedTab = localStorage.getItem("pub_dsbd_tab")
      //   ? Number(localStorage.getItem("pub_dsbd_tab"))
      //   : 0;
      this.savedTab = 0;
      setTimeout(() => {
        // 저장 위치로 이동
        window.scrollTo(0, this.savedScrollPos);

        // 하이라이트
        if (this.savedId) {
          const lastLink = Array.from(rootDOM.querySelectorAll("table a")).find(
            (item) => item.textContent === this.savedId
          );
          if (lastLink) {
            const tds = lastLink.closest("tr").querySelectorAll("td");
            if (tds) {
              tds.forEach((item, index) => {
                if (index !== 0) {
                  item.style.setProperty(
                    "background-color",
                    "#fff0f0",
                    "important"
                  );
                }
              });
            }
          }
        }

        // 클릭 이벤트 등록
        rootDOM.querySelectorAll("table a").forEach((item) => {
          item.addEventListener("click", (e) => {
            this.savedId = item.text;
          });
        });
      });
    },
    onBeforeUnmount() {
      this.savedScrollPos = window.pageYOffset;
    },
    setPubTab(index) {
      this.savedTab = index;
      //localStorage.setItem("pub_dsbd_tab", index);
    },
  },
});
