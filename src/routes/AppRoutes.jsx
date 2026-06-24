import { Routes } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";
import StudentRoutes from "./StudentRoutes";
import TeacherRoutes from "./TeacherRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes()}
      {AuthRoutes()}
      {StudentRoutes()}
      {TeacherRoutes()}
      {AdminRoutes()}
    </Routes>
  );
};

export default AppRoutes;