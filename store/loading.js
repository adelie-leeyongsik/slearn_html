export default defineStore("loading", {
  state() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  actions: {
    show() {
      this.isLoading = true;
    },
    hide() {
      this.isLoading = false;
    },
  },
});
