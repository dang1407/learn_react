import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function MainLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
