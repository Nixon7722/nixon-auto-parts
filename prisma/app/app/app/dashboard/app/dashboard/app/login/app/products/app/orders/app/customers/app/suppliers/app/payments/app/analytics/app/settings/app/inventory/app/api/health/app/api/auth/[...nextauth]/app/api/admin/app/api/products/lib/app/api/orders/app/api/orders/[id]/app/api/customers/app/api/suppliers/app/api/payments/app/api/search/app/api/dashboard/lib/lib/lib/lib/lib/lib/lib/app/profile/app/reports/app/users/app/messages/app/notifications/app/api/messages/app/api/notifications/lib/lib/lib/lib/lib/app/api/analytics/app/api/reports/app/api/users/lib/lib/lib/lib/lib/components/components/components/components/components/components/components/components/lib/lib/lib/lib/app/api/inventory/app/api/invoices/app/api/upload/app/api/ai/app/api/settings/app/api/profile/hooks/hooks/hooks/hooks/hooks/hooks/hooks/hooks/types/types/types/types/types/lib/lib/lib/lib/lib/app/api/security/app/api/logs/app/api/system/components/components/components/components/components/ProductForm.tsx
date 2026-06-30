export default function ProductForm() {
  return (
    <form style={{ display: "grid", gap: 15 }}>
      <input placeholder="Product Name" />
      <input placeholder="SKU" />
      <input placeholder="Price" />
      <input placeholder="Quantity" />
      <textarea placeholder="Description" />
      <button>Add Product</button>
    </form>
  );
}
