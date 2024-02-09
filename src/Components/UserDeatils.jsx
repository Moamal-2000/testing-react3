import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UserDeatils = () => {
  const userData = useLoaderData();
  const { name, id } = userData;

  return (
    <div>
      <h2>User details</h2>
      <p>User id: {id}</p>
      <p>Username: {name}</p>
    </div>
  );
};
export default UserDeatils;

export const userLoader = async ({ params }) => {
  const { userId } = params;

  try {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return res.data;
  } catch (err) {
    throw { message: err.message };
  }
};
