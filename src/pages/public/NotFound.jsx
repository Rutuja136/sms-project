import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          color: "#ef4444",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <Link to="/">
        <button
          style={{
            padding: "12px 25px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;