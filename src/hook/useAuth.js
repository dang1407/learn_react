import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
export default function useAuth() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };
  const userLogout = () => {
    setIsAuthenticated(false);
    navigate("login");
  };
  return { isAuthenticated, userLogin, userLogout };
}
