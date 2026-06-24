import { Route } from "react-router-dom";

import Dashboard from "../admin/Dashboard";
import ManageStudents from "../admin/ManageStudents";
import AddStudents from "../admin/AddStudents";
import EditStudents from "../admin/EditStudents";
import ManageTeachers from "../admin/ManageTeachers";
import AddTeacher from "../admin/AddTeacher";
import EditTeacher from "../admin/EditTeacher";
import ManageCourses from "../admin/ManageCourses";
import Reports from "../admin/Reports";
import Settings from "../admin/Settings";

const AdminRoutes = () => {
  return (
    <>
      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/students" element={<ManageStudents />} />
      <Route path="/admin/students/add" element={<AddStudents />} />
      <Route path="/admin/students/edit/:id" element={<EditStudents />} />

      <Route path="/admin/teachers" element={<ManageTeachers />} />
      <Route path="/admin/teachers/add" element={<AddTeacher />} />
      <Route path="/admin/teachers/edit/:id" element={<EditTeacher />} />

      <Route path="/admin/courses" element={<ManageCourses />} />

      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/settings" element={<Settings />} />
    </>
  );
};

export default AdminRoutes;