import CreateUserPage from "../pages/CreateUserPage/CreateUserPage";
import ListUserPage from "../pages/ListUserPage/ListUserPage";



export const AdminRoute = [
  {
    path: "/laydanhsachnguoidung",
    label: "List User",
    component: <ListUserPage />,
  },
  {
    path: "/themnguoidung",
    label: "Create User",
    component: <CreateUserPage />,
  },
];
