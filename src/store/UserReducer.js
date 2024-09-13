import * as StoreAction from "./constants";
import { getToken } from "@/utils/cache";
const initState = { isLogin: false, accessToken: getToken() };
function UserReducer(state, action) {
  switch (action.type) {
    case StoreAction.LOGIN_ACTION:
      return { ...state, isLogin: true };
    case StoreAction.LOGOUT_ACTION:
      return { ...state, isLogin: false };
    default:
      throw new Error("Invalid Action!");
  }
}

export default UserReducer;
export { initState };
