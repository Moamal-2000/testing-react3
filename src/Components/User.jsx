import { useNavigate } from "react-router-dom";

const User = ({ userData }) => {
  const navigateTo = useNavigate();

  return (
    <div>
      <p>User: {userData.name}</p>
      <button onClick={() => navigateTo(`/users/${userData.id}`)}>
        Details
      </button>
    </div>
  );
};
export default User;
