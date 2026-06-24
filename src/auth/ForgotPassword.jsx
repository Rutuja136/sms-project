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
    <div style={style.container}>
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit} style={style.form}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={style.input}
        />

        <button type="submit" style={style.button}>
          Send Reset Link
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
    background: "orange",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};