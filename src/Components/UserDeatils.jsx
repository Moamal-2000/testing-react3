import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const UserDeatils = () => {
  const [params, setParams] = useSearchParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userLoader = async () => {
      const userId = params.get("user");

      try {
        const res = await axios(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserData(res.data);
      } catch (err) {
        throw { message: err.message };
      }
    };
    userLoader();
  }, []);

  return (
    <div>
      <h2>User details</h2>
      <p>User id: {userData?.id}</p>
      <p>Username: {userData?.name}</p>
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
