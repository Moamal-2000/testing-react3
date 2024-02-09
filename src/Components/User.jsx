import { useNavigate, useSearchParams } from "react-router-dom";

const User = ({ userData }) => {
  const navigateTo = useNavigate();
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <p>User: {userData.name}</p>
      <button
        onClick={() => {
          setParams({ user: userData.id });
          navigateTo(`/users/user/?user=${userData.id}`);
        }}
      >
        Details
      </button>
    </div>
  );
};
export default User;
