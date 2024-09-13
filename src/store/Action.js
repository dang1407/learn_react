import { LOGIN_ACTION, LOGOUT_ACTION } from "./constants";
export const loginUser = (payload) => {
  return {
    type: LOGIN_ACTION,
    payload,
  };
};

export const logoutUser = (payload) => {
  return {
    type: LOGOUT_ACTION,
    payload,
  };
};
