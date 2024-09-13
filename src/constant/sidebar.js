export const SIDE_BAR_ROUTE = [
  {
    path: "/",
    requireLogin: true,
    name: "Dashboard",
    children: [
      {
        path: "",
        name: "Home",
        componentPath: "@/views/home",
      },
      {
        path: "/employee",
        name: "Employee",
        componentPath: "@/views/employee",
      },
      {
        path: "/parkmember",
        name: "ParkMember",
      },
    ],
  },
  {
    path: "/login",
    requireLogin: false,
    name: "Login",
    componentPath: "@/views/login",
  },
];
