export default function ProductsPage() {
  const products = [
    { id: 1, name: "Golf 7 GTI Headlight", stock: 12, price: "€650" },
    { id: 2, name: "VW T6 Steering Wheel", stock: 5, price: "€450" },
    { id: 3, name: "Akrapovič Exhaust", stock: 3, price: "€1,200" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1 style={{ marginBottom: "25px" }}>Products</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#1f2937",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "15px", textAlign: "left" }}>Product</th>
            <th style={{ padding: "15px" }}>Stock</th>
            <th style={{ padding: "15px" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "15px" }}>{item.name}</td>
              <td style={{ padding: "15px", textAlign: "center" }}>
                {item.stock}
              </td>
              <td style={{ padding: "15px", textAlign: "center" }}>
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
