import { Route } from "react-router-dom";

import Dashboard from "../teacher/Dashboard";
import Students from "../teacher/Students";
import StudentDetails from "../teacher/StudentDetails";
import CreateExam from "../teacher/CreateExam";
import Reports from "../teacher/Reports";
import Settings from "../teacher/Settings";

const TeacherRoutes = () => {
  return (
    <>
      <Route path="/teacher/dashboard" element={<Dashboard />} />
      <Route path="/teacher/students" element={<Students />} />
      <Route path="/teacher/students/:id" element={<StudentDetails />} />
      <Route path="/teacher/create-exam" element={<CreateExam />} />
      <Route path="/teacher/reports" element={<Reports />} />
      <Route path="/teacher/settings" element={<Settings />} />
    </>
  );
};

export default TeacherRoutes;