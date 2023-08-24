const itemBase = () => ({
  key: null,
  type: "modal",
  title: null,
  message: null,
  isActive: false,
  onClose: null,
  buttons: null,
});

export default defineStore("modal", {
  state() {
    return {
      currentKey: "",
      items: {},
    };
  },
  actions: {
    open(newItem) {
      this.currentKey = newItem.key;

      if (!isEmpty(this.items[newItem.key])) {
        this.items[newItem.key].isActive = false;
        this.items = {};
        return;
      }
      newItem = newItem === undefined ? {} : newItem;
      newItem.key = newItem.key === undefined ? uGenKey("modal") : newItem.key;
      this.items[newItem.key] = Object.assign(itemBase(), newItem);
      // 등장 애니메이션을 위해 v-if로 생성되고 다음 루프에 true
      setTimeout(() => {
        this.items[newItem.key].isActive = true;
      });
      return newItem.key;
    },
    alert(p1, p2, p3 = null) {
      if (typeof p2 === "string") {
        const newKey = uGenKey("modal");
        this.open({
          // key: newKey,
          key: "alert",
          type: "alert",
          title: p1,
          message: p2,
          onClose: p3,
          buttons: [{ text: "확인", styleType: "danger" }],
        });
      } else {
        p1.type = "alert";
        this.open(p1);
      }
    },
    confirm(p1, p2, p3, p4 = null) {
      this.open({
        key: "confirm",
        type: "alert",
        title: p1,
        message: p2,
        onClose: p4,
        buttons: [
          { text: "취소", styleType: "blue" },
          { text: "확인", styleType: "danger", onConfirm: p3 },
        ],
      });
    },
    close(key) {
      this.items[key].onClose && this.items[key]?.onClose();
      delete this.items[key];
    },
    reset() {
      this.items = {};
    },
  },
});
