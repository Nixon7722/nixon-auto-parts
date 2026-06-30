type Props = {
  title: string;
  value: string | number;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: 20,
        borderRadius: 12,
        color: "#fff",
      }}
    >
      <small>{title}</small>
      <h2>{value}</h2>
    </div>
  );
}
