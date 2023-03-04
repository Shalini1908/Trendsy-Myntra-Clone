import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const Auth = localStorage.getItem("trendsyToken");
  const token = JSON.parse(Auth);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
