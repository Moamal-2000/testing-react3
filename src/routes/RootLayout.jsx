import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
export default RootLayout;
