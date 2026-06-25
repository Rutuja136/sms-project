import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2563eb" }}>
          Course Details
        </h1>

        <p style={{ marginTop: "20px" }}>
          Selected Course ID: {id}
        </p>

        <p style={{ marginTop: "15px" }}>
          This course provides practical knowledge,
          industry-oriented projects and career guidance.
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;