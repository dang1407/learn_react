import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useAxios } from "@/hook/useAxios";
import UserContext from "@/store/UserContext";
import { setToken } from "@/utils/cache";
import { loginUser } from "@/store/Action.js";

function Login() {
  const [loginData, setLoginData] = useState({ UserName: "", Password: "" });
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);
  const { request } = useAxios();
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  //0: chưa gọi relogin, 1: relogin thành công, -1: relogin thất bại
  const [reLoginState, setReLoginState] = useState(0);

  useEffect(() => {
    async function reloginAsync() {
      console.log("relogin call");
      try {
        await request({
          url: "Authenticate/relogin",
          method: "GET",
        });
        dispatch(
          loginUser({
            isLogin: true,
          })
        );
        navigate(
          window.location.href
            .toString()
            .replace(import.meta.env.VITE_BASE_CLIENT_URL, "")
        );
        setReLoginState(1);
      } catch (error) {
        setReLoginState(-1);
        console.log(error);
      }
    }
    reloginAsync();
  }, [dispatch, navigate, request]);

  async function loginAsync(data) {
    try {
      setLoginButtonDisabled(true);
      const response = await request({
        url: "Authenticate/login",
        method: "POST",
        data,
      });
      setToken(response.AccessToken);
      dispatch(
        loginUser({
          isLogin: true,
          accessToken: response.AccessToken,
        })
      );
      navigate("/");
      console.log(state);
      console.log(response);
      setLoginButtonDisabled(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    reLoginState == -1 && (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="shadow-1md p-4 rounded-2xl">
          <h1>Login</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">UserName</label>
              <Input
                onChange={(e) =>
                  setLoginData({ ...loginData, UserName: e.target.value })
                }
              />
              <small></small>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="username">Password</label>
              <Input
                type="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, Password: e.target.value })
                }
              />
              <small></small>
            </div>

            <div>
              <Button
                type="primary"
                onClick={() => loginAsync(loginData)}
                disabled={loginButtonDisabled}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
