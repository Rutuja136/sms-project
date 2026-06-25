import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
const navigate = useNavigate();

const [form, setForm] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();

if (!form.name || !form.email || !form.password || !form.confirmPassword) {
  alert("Fill all fields");
  return;
}

if (form.password !== form.confirmPassword) {
  alert("Passwords do not match");
  return;
}

alert("Registration Successful");
navigate("/auth/login");

};

return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
<h2 className="text-3xl font-bold text-center mb-6">
Register
</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Register
      </button>
    </form>

    <div className="mt-4 text-center">
      <Link
        to="/auth/login"
        className="text-green-600 hover:underline"
      >
        Already have an account? Login
      </Link>
    </div>
  </div>
</div>

);
}