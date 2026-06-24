import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      {/* Navbar */}
      <nav style={style.navbar}>
        <h2>My App</h2>

        <div style={style.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/auth/login">Login</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div style={style.container}>
        <Outlet />
      </div>
    </div>
  );
}

const style = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    background: "#111",
    color: "white",
  },
  links: {
    display: "flex",
    gap: 15,
  },
  container: {
    padding: 20,
  },
};