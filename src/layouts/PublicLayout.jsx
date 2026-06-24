import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <h2>Public Layout</h2>
      <Outlet />
    </>
  );
};

export default PublicLayout;