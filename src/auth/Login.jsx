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
      navigate("/dashboard"); // make sure route exists
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div style={style.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={style.form}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={style.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={style.input}
        />

        <button type="submit" style={style.button}>
          Login
        </button>
      </form>

      <div style={{ marginTop: 10 }}>
        <Link to="/auth/forgot-password">Forgot Password?</Link>
      </div>

      <div>
        <Link to="/auth/register">Create Account</Link>
      </div>
    </div>
  );
}

const style = {
  container: {
    padding: 30,
    maxWidth: 320,
    margin: "50px auto",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    padding: 10,
    background: "black",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};