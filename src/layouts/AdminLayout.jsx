import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Admin Panel</h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <Link to="/admin/dashboard" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </Link>

          <Link to="/admin/students" style={{ color: "white", textDecoration: "none" }}>
            Students
          </Link>

          <Link to="/admin/teachers" style={{ color: "white", textDecoration: "none" }}>
            Teachers
          </Link>

          <Link to="/admin/courses" style={{ color: "white", textDecoration: "none" }}>
            Courses
          </Link>

          <Link to="/admin/reports" style={{ color: "white", textDecoration: "none" }}>
            Reports
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f8fafc",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;