export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      style={{
        padding: "12px 20px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: 8,
      }}
    >
      {children}
    </button>
  );
}
