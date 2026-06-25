import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">

      {/* Left Side */}
      <div className="flex-1 bg-gray-900 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome 👋
        </h1>

        <p className="text-lg text-gray-300">
          Login or Register to continue
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-100">
        <Outlet />

        <div className="mt-6 flex gap-6">
          <Link
            to="/auth/login"
            className="text-blue-600 hover:underline"
          >
            Login
          </Link>

          <Link
            to="/auth/register"
            className="text-green-600 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}