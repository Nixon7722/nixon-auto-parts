export default function OrdersPage() {
  const orders = [
    { id: "ORD-1001", customer: "John Doe", total: "€650", status: "Pending" },
    { id: "ORD-1002", customer: "Jane Smith", total: "€1,200", status: "Completed" },
    { id: "ORD-1003", customer: "Mike Brown", total: "€450", status: "Processing" },
  ];

  return (
    <main style={{ padding: 40, background: "#111827", color: "#fff", minHeight: "100vh" }}>
      <h1>Orders</h1>

      <table style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th align="left">Order</th>
            <th align="left">Customer</th>
            <th align="left">Total</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
