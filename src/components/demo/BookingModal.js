"use client";
import { useState } from 'react';
import { useDemoTheme } from './DemoThemeProvider';

export default function BookingModal({ isOpen, onClose }) {
  const { clinicName, primaryColor, secondaryColor } = useDemoTheme();
  
  const [step, setStep] = useState(1); // 1 = select time/treatment, 2 = details, 3 = success
  const [treatment, setTreatment] = useState('Consultation');
  const [day, setDay] = useState('Today');
  const [time, setTime] = useState('09:30 AM');
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const initials = clinicName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
    }}>
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '550px',
          background: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#1e293b'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#e2e8f0'}
          onMouseOut={(e) => e.currentTarget.style.background = '#f1f5f9'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Modal Content */}
        <div style={{ padding: '2.5rem' }}>
          
          {step === 1 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-flex', width: '60px', height: '60px', background: 'var(--secondary)', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '1rem', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
                  {initials}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Book Free Consultation</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Select a convenient treatment and slot at {clinicName}</p>
              </div>

              {/* Treatment Selector */}
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

              {/* Day Selector */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Choose Day</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {['Today', 'Tomorrow', 'Monday'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDay(d)}
                      style={{
                        padding: '12px',
                        border: day === d ? '2px solid var(--primary)' : '1.5px solid #e2e8f0',
                        background: day === d ? 'rgba(15, 23, 42, 0.04)' : 'white',
                        color: 'var(--primary)',
                        borderRadius: '10px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'center'
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Choose Time</label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      style={{
                        padding: '10px 18px',
                        border: time === t ? '2px solid var(--primary)' : '1.5px solid #cbd5e1',
                        borderRadius: '30px',
                        background: time === t ? 'var(--primary)' : 'white',
                        color: time === t ? 'white' : 'var(--primary)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '0.9rem'
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleNext}
                style={{
                  width: '100%',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'none'}
              >
                Continue Booking
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>Patient Details</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
                  {treatment} on {day} at {time}
                </p>
              </div>

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
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '80px', height: '80px', background: '#22c55e', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', margin: '0 0 10px 0', fontFamily: 'var(--font-heading)' }}>Booking Confirmed!</h3>
              <p style={{ margin: '0 0 2rem 0', color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.name}</strong>. Your mock appointment for <strong>{treatment}</strong> on <strong>{day} at {time}</strong> is successfully scheduled.
              </p>

              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', border: '1px dashed #cbd5e1', fontSize: '0.9rem', color: '#475569' }}>
                This is a mock booking system for demonstration purposes. In production, this instantly notifies the clinic and syncs with Google Calendar.
              </div>

              <button 
                onClick={onClose}
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
