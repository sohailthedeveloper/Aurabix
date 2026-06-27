"use client";
import { useEffect, useState, use } from 'react';
import DemoThemeProvider from '@/components/demo/DemoThemeProvider';
import Navbar from '@/components/demo/Navbar';
import Footer from '@/components/demo/Footer';
import AuraBixPitch from '@/components/demo/AuraBixPitch';
import Chatbot from '@/components/demo/Chatbot';
import FloatingWhatsApp from '@/components/demo/FloatingWhatsApp';
import '@/app/demo/demo.css';

export default function BookPage({ params }) {
  const { token } = use(params);
  const [config, setConfig] = useState(null);
  
  const [treatment, setTreatment] = useState('Consultation');
  const [day, setDay] = useState('Today');
  const [time, setTime] = useState('09:30 AM');
  const [step, setStep] = useState(1); // 1 = select, 2 = details, 3 = success
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (!token) return;
    try {
      const base64 = token.replace(/-/g, '+').replace(/_/g, '/');
      const jsonStr = decodeURIComponent(escape(window.atob(base64)));
      const data = JSON.parse(jsonStr);
      data.token = token;
      setConfig(data);
    } catch (e) {
      console.error("Failed to decode token on book page:", e);
      setConfig({
        name: "Zenith Dental Clinic",
        primaryColor: "#0f172a",
        secondaryColor: "#d4af37",
        phone: "020 8866 0758",
        logo: null,
        whatsapp: null,
        chatbot: true,
        bg: "video",
        layout: "1",
        token: token
      });
    }
  }, [token]);

  // ── Analytics: Track booking page visit silently ──
  useEffect(() => {
    if (!config) return;
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: config.token,
        name: config.name,
        template: config.template || 'dental',
        page: 'book',
      }),
    }).catch(() => {}); // Fire-and-forget
  }, [config]);

  if (!config) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
        <p style={{ letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Loading dynamic booking client...</p>
      </div>
    );
  }

  const { name, template } = config;
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <DemoThemeProvider config={config}>
      <div className="demo-page-root">
        {/* Niche Preview Notice Banner */}
        {template && template !== 'dental' && (
          <div style={{
            backgroundColor: '#0f172a',
            color: '#cbd5e1',
            padding: '10px 20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            borderBottom: '2px solid var(--secondary)',
            position: 'relative',
            zIndex: 100,
            fontFamily: 'var(--font-body)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'inline-flex', padding: '2px 8px', background: 'var(--secondary)', color: 'white', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Mockup Preview
            </span>
            <span>
              We've mapped <strong>{name}</strong>'s brand colors (<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Primary</span> and <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Secondary</span>) and details to this premium dental template. We also have custom templates optimized for <strong>{template === 'salon' ? 'Spa & Salons' : template === 'saas' ? 'SaaS & Tech Platforms' : template === 'ecommerce' ? 'E-Commerce Brands' : 'Corporate Services'}</strong>.
            </span>
            <a href="mailto:hello@aurabix.com?subject=Custom Layout for My Brand" style={{ color: '#d4af37', textDecoration: 'underline', fontWeight: 'bold' }}>
              Request Custom Niche Layout
            </a>
          </div>
        )}

        {/* Navigation */}
        <Navbar onBookClick={() => setStep(1)} />

        {/* Standalone Booking Content */}
        <div style={{ padding: '140px 5% 80px', minHeight: '80vh', background: '#f8fafc', color: '#1e293b' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h1 style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '2.8rem', margin: '0 0 10px 0', fontWeight: 700 }}>
                Book Your Appointment
              </h1>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                Select a convenient time from our live diary below.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(15, 23, 42, 0.05)',
              padding: '2.5rem',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Header inside form */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {initials}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 600 }}>{name}</h3>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>New Patient Consultation</span>
                  </div>
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>£0.00 / Free</div>
              </div>

              {step === 1 && (
                <div>
                  {/* Select treatment */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Select Treatment</label>
                    <select 
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '0.95rem', background: '#f8fafc', color: '#1e293b' }}
                    >
                      <option value="Consultation">Free Invisalign Consultation</option>
                      <option value="Implants">Dental Implants Consultation</option>
                      <option value="Teeth Whitening">Cosmetic Teeth Whitening</option>
                      <option value="General checkup">General Dental Checkup</option>
                    </select>
                  </div>

                  {/* Day picker */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Choose Day</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                      {['Today', 'Tomorrow', 'Monday'].map((d) => (
                        <button
                          key={d}
                          onClick={() => setDay(d)}
                          style={{
                            padding: '14px',
                            border: day === d ? '2px solid var(--primary)' : '1.5px solid #e2e8f0',
                            background: day === d ? 'rgba(15, 23, 42, 0.04)' : 'white',
                            color: 'var(--primary)',
                            borderRadius: '10px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time picker */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Available Slots</label>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          style={{
                            padding: '12px 24px',
                            border: time === t ? '2px solid var(--primary)' : '1.5px solid #cbd5e1',
                            borderRadius: '30px',
                            background: time === t ? 'var(--primary)' : 'white',
                            color: time === t ? 'white' : 'var(--primary)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="primary-btn"
                    style={{ width: '100%', padding: '16px', display: 'block', border: 'none', cursor: 'pointer', textAlign: 'center' }}
                  >
                    CONTINUE BOOKING
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <h4 style={{ margin: '0 0 1.5rem 0', color: 'var(--primary)', fontSize: '1.2rem' }}>
                    Booking Details: {treatment} on {day} at {time}
                  </h4>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '0.95rem', background: '#f8fafc', color: '#1e293b' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '0.95rem', background: '#f8fafc', color: '#1e293b' }}
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #cbd5e1', outline: 'none', fontSize: '0.95rem', background: '#f8fafc', color: '#1e293b' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      style={{
                        flex: '1',
                        background: '#f1f5f9',
                        color: '#475569',
                        border: 'none',
                        padding: '16px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      style={{
                        flex: '2',
                        background: 'var(--secondary)',
                        color: 'white',
                        border: 'none',
                        padding: '16px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '80px', height: '80px', background: '#22c55e', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary)', margin: '0 0 10px 0', fontFamily: 'var(--font-heading)' }}>Booking Confirmed!</h3>
                  <p style={{ margin: '0 0 2rem 0', color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Thank you, <strong>{formData.name}</strong>. Your mock appointment for <strong>{treatment}</strong> at <strong>{name}</strong> is scheduled on <strong>{day} at {time}</strong>.
                  </p>

                  <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', marginBottom: '2.5rem', border: '1px dashed #cbd5e1', fontSize: '0.95rem', color: '#475569' }}>
                    This is a mock booking system for demonstration purposes. In production, this instantly notifies the clinic and syncs with Google Calendar.
                  </div>

                  <a 
                    href={`/demo/${token}`}
                    className="primary-btn"
                    style={{ padding: '12px 35px' }}
                  >
                    Back to Clinic Home
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AuraBix Lead Pitch */}
        <AuraBixPitch />

        {/* Footer */}
        <Footer onBookClick={() => setStep(1)} />

        {/* Dynamic Widgets */}
        <Chatbot />
        <FloatingWhatsApp />
      </div>
    </DemoThemeProvider>
  );
}
