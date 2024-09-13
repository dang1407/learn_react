import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PATH from "@/constant/path";
import { lazy, Suspense } from "react";
import Employee from "@/views/employee";
const HomePage = lazy(() => import("@/views/home"));
const LoginPage = lazy(() => import("@/views/login"));
const MainLayout = lazy(() => import("@/layout/MainLayout"));
const ToDoList = lazy(() => import("@/views/todo"));
const PageRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path=""></Route> */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="employee" element={<Employee />} />
            <Route path="todolist" element={<ToDoList />} />
          </Route>
          <Route path="/login" Component={LoginPage} />

          {
            // SIDE_BAR_ROUTE.map(route => (
            // ))
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default PageRouter;
