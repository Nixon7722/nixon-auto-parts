export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Nixon Auto Parts
      </h1>

      <p style={{ maxWidth: "700px", fontSize: "1.2rem" }}>
        Welcome to the Enterprise Auto Parts Management Platform.
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "14px 28px",
          borderRadius: "10px",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
