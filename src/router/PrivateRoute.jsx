import { Navigate } from "react-router-dom";
import UserContext from "@/store/UserContext";
import { useContext } from "react";
import PropTypes from "prop-types";
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default function PrivateRoute({ children }) {
  const [userState] = useContext(UserContext);
  console.log(userState);
  return userState?.isLogin ? children : <Navigate to="/login" replace />;
}
