export default function AuraBixPitch() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#cbd5e1', padding: '1.2rem', textAlign: 'center', fontSize: '0.95rem', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
      <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ color: 'white', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>POWERED BY AURABIX</span> 
        <span style={{ opacity: 0.5 }}>|</span> 
        <span>We help ambitious businesses scale with Premium Web Architecture, SEO & Paid Ads.</span>
        <a href="https://aurabix.com?contact=true" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: 'bold', marginLeft: '10px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#d4af37'}>
          Let's Grow Together →
        </a>
      </p>
    </div>
  );
}
