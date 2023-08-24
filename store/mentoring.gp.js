export default defineStore("mentorings", {
  state: () => ({
    modalProps: {},
  }),
  actions: {
    async setModalFields(keys) {
      if (Array.isArray(keys)) {
        keys.forEach((obj) => {
          let key = null;
          let props = null;
          if (Array.isArray(obj)) {
            const [k, p] = obj;
            key = k;
            props = p;
          } else {
            key = obj;
          }
          this.modalProps[key] = {
            props: isNull(props) ? {} : props,
            show: false,
            onClose: () => this.setDisplayToggle(key),
          };
        });
      } else {
        this.modalProps[keys] = {
          props: {},
          show: false,
          onClose: () => this.setDisplayToggle(keys),
        };
      }
    },
    async setDispatchModalProps(key, props) {
      Object.assign(this.modalProps[key], {
        show: true,
        props,
      });
    },
    async setUpdateModalProps(key, addProps = {}) {
      const { props } = { ...this.modalProps[key] };
      Object.assign(props, { ...addProps });
      this.modalProps[key].props = props;
    },
    setDisplayToggle(key) {
      this.modalProps[key].show = !this.modalProps[key].show;
    },
  },
});
