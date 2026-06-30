import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          🎓 SMS Project
        </div>

        <ul className="nav-links">

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>

          <li className="dropdown">
            <span>Courses ▾</span>
            <div className="dropdown-content">
              <NavLink to="/course">All Courses</NavLink>
              <NavLink to="/courses/1">Course Details</NavLink>
            </div>
          </li>

          <li><NavLink to="/contact">Contact</NavLink></li>

          <li className="dropdown">
            <span>Auth ▾</span>
            <div className="dropdown-content">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/forgot-password">Forgot Password</NavLink>
              <NavLink to="/reset-password">Reset Password</NavLink>
            </div>
          </li>

          <li className="dropdown">
            <span>Student ▾</span>
            <div className="dropdown-content">
              <NavLink to="/student/dashboard">Dashboard</NavLink>
              <NavLink to="/student/profile">Profile</NavLink>
              <NavLink to="/student/exams">Exams</NavLink>
              <NavLink to="/student/results">Results</NavLink>
              <NavLink to="/student/settings">Settings</NavLink>
            </div>
          </li>

          <li className="dropdown">
            <span>Teacher ▾</span>
            <div className="dropdown-content">
              <NavLink to="/teacher/dashboard">Dashboard</NavLink>
              <NavLink to="/teacher/students">Students</NavLink>
              <NavLink to="/teacher/create-exam">Create Exam</NavLink>
              <NavLink to="/teacher/reports">Reports</NavLink>
              <NavLink to="/teacher/settings">Settings</NavLink>
            </div>
          </li>

          <li className="dropdown">
            <span>Admin ▾</span>
            <div className="dropdown-content">
              <NavLink to="/admin/dashboard">Dashboard</NavLink>
              <NavLink to="/admin/students">Manage Students</NavLink>
              <NavLink to="/admin/teachers">Manage Teachers</NavLink>
              <NavLink to="/admin/courses">Manage Courses</NavLink>
              <NavLink to="/admin/reports">Reports</NavLink>
              <NavLink to="/admin/settings">Settings</NavLink>
            </div>
          </li>
 feature-public-pages
          

          <li className="dropdown">
  <span>Layouts ▾</span>

  <div className="dropdown-content">
    <NavLink to="/public-layout">Public Layout</NavLink>
    <NavLink to="/auth-layout">Auth Layout</NavLink>
    <NavLink to="/student-layout">Student Layout</NavLink>
    <NavLink to="/teacher-layout">Teacher Layout</NavLink>
    <NavLink to="/admin-layout">Admin Layout</NavLink>
    <NavLink to="/dashboard-layout">Dashboard Layout</NavLink>
  </div>
</li>
 main

        </ul>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 14px 28px;
          background: #0f172a;
          color: #fff;

          position: sticky;
          top: 0;
          z-index: 1000;

          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* LOGO */
        .logo {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #38bdf8;
        }

        /* NAV LINKS */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 16px;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .nav-links li a,
        .nav-links li span {
          text-decoration: none;
          color: #e2e8f0;
          font-size: 14px;

          padding: 7px 10px;
          border-radius: 8px;
          cursor: pointer;

          transition: 0.25s ease;
        }

        .nav-links li a:hover,
        .nav-links li span:hover {
          background: #1e293b;
          color: #38bdf8;
        }

        /* ACTIVE LINK */
        .active {
          background: #38bdf8;
          color: #0f172a !important;
          font-weight: 600;
        }

        /* DROPDOWN */
        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;

          top: 100%;
          left: 0;

          background: #111827;
          min-width: 190px;
          border-radius: 10px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.35);
          overflow: hidden;

          border: 1px solid rgba(255,255,255,0.05);
        }

        .dropdown-content a {
          display: block;
          padding: 10px;
          font-size: 13px;
          color: #cbd5e1;
        }

        .dropdown-content a:hover {
          background: #1f2937;
          color: #38bdf8;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        /* RESPONSIVE TOUCH (basic) */
        @media (max-width: 900px) {
          .nav-links {
            gap: 8px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;