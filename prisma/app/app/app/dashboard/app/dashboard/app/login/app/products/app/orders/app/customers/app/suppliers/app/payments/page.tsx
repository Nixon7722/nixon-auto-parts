export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      customer: "John Doe",
      amount: "€650",
      status: "Paid"
    },
    {
      id: "PAY-002",
      customer: "Jane Smith",
      amount: "€1,200",
      status: "Pending"
    },
    {
      id: "PAY-003",
      customer: "Mike Brown",
      amount: "€450",
      status: "Paid"
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
      <h1>Payments</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th align="left">Payment ID</th>
            <th align="left">Customer</th>
            <th align="left">Amount</th>
            <th align="left">Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.customer}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
