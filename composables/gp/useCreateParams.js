export default () => {
  const _obj = {
    files: ref([]),
    maxFileSize: ref(0),
    maxFileCount: ref(0),
    fileExt: ref([]),
    setProps: (key, value) => {
      try {
        _obj[key].value = value;
      } catch (e) {
        console.error(e);
      }
    },
  };

  return {
    ..._obj,
  };
};
