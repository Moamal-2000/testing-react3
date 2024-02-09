import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <p>Error while fetching data</p>
      {error.message}
    </div>
  );
};
export default ErrorPage;
