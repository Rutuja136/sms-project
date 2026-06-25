import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
const navigate = useNavigate();

const [form, setForm] = useState({
email: "",
password: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();

if (form.email && form.password) {
  alert("Login Successful");
  navigate("/dashboard");
} else {
  alert("Fill all fields");
}

};

return (
<div className="p-8 max-w-sm mx-auto mt-12 text-center border border-gray-300 rounded-lg">
  <h2 className="text-3xl font-bold mb-4">Login</h2>

  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded"
    />

    <input
      name="password"
      type="password"
      placeholder="Password"
      value={form.password}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded"
    />

    <button
      type="submit"
      className="p-2 bg-black text-white rounded"
    >
      Login
    </button>
  </form>

  <div className="mt-3">
    <Link to="/auth/forgot-password">Forgot Password?</Link>
  </div>

  <div>
    <Link to="/auth/register">Create Account</Link>
  </div>
</div>
);
}