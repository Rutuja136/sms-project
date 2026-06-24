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
    <div style={style.container}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} style={style.form}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={style.input}
        />

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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          style={style.input}
        />

        <button type="submit" style={style.button}>
          Register
        </button>
      </form>

      <div style={{ marginTop: 10 }}>
        <Link to="/auth/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

const style = {
  container: {
    padding: 30,
    maxWidth: 350,
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
    background: "green",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};