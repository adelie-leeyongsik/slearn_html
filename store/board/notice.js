export default defineStore("board.notice", {
  state() {
    return {
      items: {},
      keys: [],
      pinnedItems: {},
      detail: {},
    };
  },
});
