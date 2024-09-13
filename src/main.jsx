import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import UserProvider from "./store/UserProvider.jsx";
import PageRouter from "./router";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <UserProvider>
        <PageRouter />
      </UserProvider>
    </RecoilRoot>
  </StrictMode>
);
