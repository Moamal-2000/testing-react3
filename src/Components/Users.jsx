import axios from "axios";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const usersData = useLoaderData();

  return (
    <div>
      <h2>Users</h2>
      {usersData &&
        usersData.map((user) => <User key={user.id} userData={user} />)}
    </div>
  );
};
export default Users;

export const loader = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (err) {
    throw { message: err.message };
  }
};
