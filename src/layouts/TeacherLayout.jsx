import { Outlet } from "react-router-dom";

const TeacherLayout = () => {
  return (
    <>
      <h2>Teacher Layout</h2>
      <Outlet />
    </>
  );
};

export default TeacherLayout;