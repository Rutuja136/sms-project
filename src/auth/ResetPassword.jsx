import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.password || !form.confirmPassword) {
      alert("Fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password reset successful");
    navigate("/auth/login");
  };

  return (
    <div style={style.container}>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit} style={style.form}>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          style={style.input}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          style={style.input}
        />

        <button type="submit" style={style.button}>
          Reset Password
        </button>
      </form>

      <div style={{ marginTop: 10 }}>
        <Link to="/auth/login">Back to Login</Link>
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
    background: "red",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};