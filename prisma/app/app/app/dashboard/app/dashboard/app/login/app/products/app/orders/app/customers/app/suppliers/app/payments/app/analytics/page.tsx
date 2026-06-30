export default function AnalyticsPage() {
  return (
    <main style={{ padding: 40, background: "#111827", color: "#fff", minHeight: "100vh" }}>
      <h1>Business Analytics</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginTop: 30 }}>
        <div style={{ background: "#1f2937", padding: 20, borderRadius: 10 }}>
          <h3>Total Revenue</h3>
          <h1>€125,000</h1>
        </div>

        <div style={{ background: "#1f2937", padding: 20, borderRadius: 10 }}>
          <h3>Total Orders</h3>
          <h1>534</h1>
        </div>

        <div style={{ background: "#1f2937", padding: 20, borderRadius: 10 }}>
          <h3>Customers</h3>
          <h1>241</h1>
        </div>

        <div style={{ background: "#1f2937", padding: 20, borderRadius: 10 }}>
          <h3>Products</h3>
          <h1>1,420</h1>
        </div>
      </div>
    </main>
  );
}
