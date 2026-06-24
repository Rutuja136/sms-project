import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div style={style.wrapper}>
      {/* Left side branding */}
      <div style={style.left}>
        <h1>Welcome 👋</h1>
        <p>Login or Register to continue</p>
      </div>

      {/* Right side auth pages */}
      <div style={style.right}>
        <Outlet />

        <div style={style.links}>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

const style = {
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  left: {
    flex: 1,
    background: "#111",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  links: {
    marginTop: 20,
    display: "flex",
    gap: 15,
  },
};