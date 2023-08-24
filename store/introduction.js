export default defineStore("introduction", {
  state() {
    return {};
  },
  actions: {
    handleTabChangeEvent(sectionNum, isBookMark = false, subTabIdx = false) {
      try {
        const navigationParams = {
          path: "/introduction",
          query: { section: sectionNum },
        };
        if (subTabIdx !== false) {
          navigationParams.query.subTab = subTabIdx;
        }
        if (isBookMark !== false) {
          Object.assign(navigationParams, {
            hash: `#${isBookMark}`,
          });
        }

        navigateTo(navigationParams);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
