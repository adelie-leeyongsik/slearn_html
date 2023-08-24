export default defineStore("drive", {
  state() {
    return {
      usage: 67,
      totalSize: 1,
      totalCount: 63,
      currentFilter: "ALL",
      items: [],
      keys: {},
    };
  },
});
