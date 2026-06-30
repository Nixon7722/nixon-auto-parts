export default function CustomersPage() {
  const customers = [
    {
      id: "CUS-001",
      name: "John Doe",
      email: "john@example.com",
      country: "Germany"
    },
    {
      id: "CUS-002",
      name: "Jane Smith",
      email: "jane@example.com",
      country: "Lithuania"
    },
    {
      id: "CUS-003",
      name: "Michael Brown",
      email: "michael@example.com",
      country: "Poland"
    }
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
      <h1>Customers</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th align="left">ID</th>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Country</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
