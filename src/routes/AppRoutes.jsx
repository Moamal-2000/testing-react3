import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import UserDeatils from "../Components/UserDeatils";
import Users, { loader } from "../Components/Users";
import UsersPage from "../Components/UsersPage";
import RootLayout from "./RootLayout";

const AppRoutes = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<h2>Home page</h2>} />

      <Route path="/users" element={<UsersPage />}>
        <Route index element={<Users />} loader={loader} />
        <Route path="user" element={<UserDeatils />} />
      </Route>
    </Route>
  );
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default AppRoutes;
