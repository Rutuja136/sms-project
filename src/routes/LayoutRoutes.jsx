import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import StudentLayout from "../layouts/StudentLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import AdminLayout from "../layouts/AdminLayout";
import DashboardLayout from "../layouts/DashboardLayout";

const LayoutRoutes = () => {
  return (
    <>
      <Route path="/public-layout" element={<PublicLayout />} />
      <Route path="/auth-layout" element={<AuthLayout />} />
      <Route path="/student-layout" element={<StudentLayout />} />
      <Route path="/teacher-layout" element={<TeacherLayout />} />
      <Route path="/admin-layout" element={<AdminLayout />} />
      <Route path="/dashboard-layout" element={<DashboardLayout />} />
    </>
  );
};

export default LayoutRoutes;