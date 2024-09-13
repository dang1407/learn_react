import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    isLogin: false,
    accessToken: undefined,
  },
});

export default userState;
