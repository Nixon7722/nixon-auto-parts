export default function SettingsPage() {
  return (
    <main style={{ padding: 40, background: "#111827", color: "#fff", minHeight: "100vh" }}>
      <h1>System Settings</h1>

      <div style={{ marginTop: 30 }}>
        <p>✔ Company Profile</p>
        <p>✔ Users & Permissions</p>
        <p>✔ Currency Settings</p>
        <p>✔ Email Notifications</p>
        <p>✔ API Keys</p>
        <p>✔ Backup & Restore</p>
      </div>
    </main>
  );
}
