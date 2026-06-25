const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          Contact Us
        </h1>

        <form>
          <input
            type="text"
            placeholder="Full Name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;