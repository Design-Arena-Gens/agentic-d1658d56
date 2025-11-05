export default function HomePage() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Hello ??</h1>
        <p>Deployed with automated agent workflow.</p>
        <p><a href="/api/health">API health</a></p>
      </div>
    </main>
  );
}
