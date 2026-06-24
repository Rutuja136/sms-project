import { Navigate } from "react-router-dom";

const RoleRoute = ({ children, role }) => {
  const userRole = "student";

  return userRole === role ? children : <Navigate to="/" />;
};

export default RoleRoute;