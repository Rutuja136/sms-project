const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          About Smart Scholar
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 50px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          Smart Scholar is a modern Student Management System designed
          to simplify academic administration and improve communication
          between students, teachers, and administrators.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>Our Mission</h2>
            <p>
              To provide an efficient platform for managing students,
              courses, attendance and academic performance.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>Our Vision</h2>
            <p>
              To create a smart and digital educational ecosystem that
              enhances learning and administration.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb" }}>Why Choose Us?</h2>
            <p>
              Easy management, secure records, attendance tracking,
              course organization and performance monitoring in one
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;