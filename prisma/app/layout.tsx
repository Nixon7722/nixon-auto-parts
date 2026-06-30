export const metadata = {
  title: "Nixon Auto Parts",
  description: "Enterprise SaaS Platform for Auto Parts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0f172a",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
