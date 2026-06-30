export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "12px" }}>
          <h2>Total Products</h2>
          <h1>0</h1>
        </div>

        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "12px" }}>
          <h2>Total Orders</h2>
          <h1>0</h1>
        </div>

        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "12px" }}>
          <h2>Revenue</h2>
          <h1>€0</h1>
        </div>

        <div style={{ background: "#1f2937", padding: "20px", borderRadius: "12px" }}>
          <h2>Customers</h2>
          <h1>0</h1>
        </div>
      </div>
    </main>
  );
}
