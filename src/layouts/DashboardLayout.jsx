import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#2563eb",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Smart Scholar Dashboard</h2>
        <div>Welcome User</div>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "30px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;