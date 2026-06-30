export default function SuppliersPage() {
  const suppliers = [
    {
      id: "SUP-001",
      name: "Volkswagen Germany",
      contact: "+49 123456789",
      country: "Germany"
    },
    {
      id: "SUP-002",
      name: "BMW Parts Europe",
      contact: "+49 987654321",
      country: "Germany"
    },
    {
      id: "SUP-003",
      name: "Audi Original Parts",
      contact: "+43 11223344",
      country: "Austria"
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "#fff",
        padding: "40px"
      }}
    >
      <h1>Suppliers</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th align="left">Supplier ID</th>
            <th align="left">Supplier</th>
            <th align="left">Contact</th>
            <th align="left">Country</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
