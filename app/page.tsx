export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div style={{ background: 'black', color: 'white', padding: '20px', borderRadius: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>SuperTap 💳</h1>
      </div>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>Tap your card to get started.</p>
    </div>
  )
}
