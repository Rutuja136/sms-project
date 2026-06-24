import { Route } from "react-router-dom";

import Dashboard from "../student/Dashboard";
import Profile from "../student/Profile";
import Exams from "../student/Exams";
import ExamDetails from "../student/ExamDetails";
import StartExam from "../student/StartExam";
import Results from "../student/Results";
import ResultDetails from "../student/ResultDetails";
import Settings from "../student/Settings";

const StudentRoutes = () => {
  return (
    <>
      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/student/profile" element={<Profile />} />
      <Route path="/student/exams" element={<Exams />} />
      <Route path="/student/exams/:id" element={<ExamDetails />} />
      <Route path="/student/start-exam/:id" element={<StartExam />} />
      <Route path="/student/results" element={<Results />} />
      <Route path="/student/results/:id" element={<ResultDetails />} />
      <Route path="/student/settings" element={<Settings />} />
    </>
  );
};

export default StudentRoutes;