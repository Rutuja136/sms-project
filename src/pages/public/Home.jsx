const Home = () => {
  const features = [
    {
      title: "Student Management",
      description:
        "Manage student records, profiles and academic information efficiently.",
    },
    {
      title: "Course Management",
      description:
        "Create and manage courses, subjects and learning resources.",
    },
    {
      title: "Attendance Tracking",
      description:
        "Track student attendance and monitor participation easily.",
    },
    {
      title: "Exam Management",
      description:
        "Conduct exams and manage assessments digitally.",
    },
    {
      title: "Performance Reports",
      description:
        "Generate detailed reports and analyze student performance.",
    },
    {
      title: "Secure Access",
      description:
        "Role-based access for students, teachers and administrators.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #4f46e5)",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          STUDENT MANAGEMENT SYSTEM
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          A modern Student Management System designed to simplify
          academic administration and improve student performance.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            background: "#fff",
            color: "#2563eb",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore More
        </button>
      </div>

      {/* Features */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#2563eb",
          }}
        >
          Key Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#2563eb" }}>{feature.title}</h3>

              <p
                style={{
                  color: "#555",
                  marginTop: "10px",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          background: "#1e293b",
          color: "#fff",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>50+</h2>
            <p>Courses</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Teachers</p>
          </div>

          <div>
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;