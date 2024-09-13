import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer, { initState } from "./UserReducer";
export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
