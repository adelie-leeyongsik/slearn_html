export default {
  setup() {
    const { role } = getUserRole();
    const { push } = useRouter();
    push(`/mypage/management/${role}`);
  },
  render() {},
};
