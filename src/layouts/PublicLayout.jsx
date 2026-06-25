import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">My App</h2>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/courses" className="hover:text-blue-400">Courses</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/auth/login" className="hover:text-blue-400">Login</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}