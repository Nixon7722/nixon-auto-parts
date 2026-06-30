export default function OrderForm() {
  return (
    <form style={{ display: "grid", gap: 15 }}>
      <input placeholder="Customer" />
      <input placeholder="Product" />
      <input placeholder="Quantity" />
      <button>Create Order</button>
    </form>
  );
}
