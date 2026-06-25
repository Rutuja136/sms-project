import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    alert("Reset link sent to your email");
    navigate("/auth/reset-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/auth/login"
            className="text-orange-600 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}