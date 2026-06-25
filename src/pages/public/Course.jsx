const Course = () => {
  const courses = [
    {
      id: 1,
      name: "Web Development",
      description: "Learn HTML, CSS, JavaScript and React."
    },
    {
      id: 2,
      name: "Data Science",
      description: "Analyze and visualize data effectively."
    },
    {
      id: 3,
      name: "Artificial Intelligence",
      description: "Build intelligent systems and applications."
    },
    {
      id: 4,
      name: "Cyber Security",
      description: "Protect systems and networks from threats."
    },
    {
      id: 5,
      name: "Cloud Computing",
      description: "Learn modern cloud technologies."
    },
    {
      id: 6,
      name: "Machine Learning",
      description: "Create predictive models using data."
    }
  ];

  return (
    <div style={{ padding: "50px 20px" }}>
      <h1 style={{ textAlign: "center", color: "#2563eb" }}>
        Our Courses
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;