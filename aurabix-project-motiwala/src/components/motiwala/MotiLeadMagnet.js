'use client'

import { useState, useRef } from 'react'
import { useInView } from '../useInView'
import { Gift, ArrowRight, CheckCircle } from 'lucide-react'

export default function MotiLeadMagnet() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.phone || !form.name) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    const msg = `Hello Motiwala Creations! My name is ${form.name}. I would like to receive the free Wedding Style Guide and explore your collections. My contact is ${form.phone}${form.email ? ` and email is ${form.email}` : ''}.`
    window.open(`https://wa.me/919850052520?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="lead-magnet" style={{
      background: 'var(--noir)',
      padding: 'clamp(60px, 8vw, 100px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative BG */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          background: 'var(--charcoal)',
          border: '1px solid var(--border-gold-strong)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(36px, 5vw, 60px)',
          position: 'relative',
          overflow: 'hidden',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'all 0.8s var(--ease-smooth)',
          boxShadow: 'var(--shadow-gold)',
        }}>
          {/* Corner decoration */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle at top right, rgba(201,168,76,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {!submitted ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid var(--border-gold)',
                  marginBottom: '20px',
                  animation: 'float 3s ease-in-out infinite',
                }}>
                  <Gift size={28} color="var(--gold-primary)" />
                </div>

                <div className="section-eyebrow" style={{ marginBottom: '12px' }}>Exclusive Gift</div>
                <h2 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                  letterSpacing: '0.04em',
                }}>
                  Get Your Free{' '}
                  <span className="gold-gradient-text">Wedding Style Guide</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
                  Discover the trending sherwani styles, colour coordinates, and fabric tips for your wedding. 
                  Plus, get an exclusive ten percent discount code for your first purchase.
                </p>
              </div>

              {/* Items included */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                marginBottom: '32px',
              }}>
                {[
                  'Sherwani Trend Report',
                  'Colour Coordination Guide',
                  'Fabric Selection Tips',
                  'Ten Percent Discount Code',
                  'Priority Appointment Slot',
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '100px',
                    padding: '6px 14px',
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    fontWeight: 500,
                  }}>
                    <CheckCircle size={12} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <input
                    className="input-luxury"
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-luxury"
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp Number *"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  className="input-luxury"
                  type="email"
                  name="email"
                  placeholder="Email Address (optional)"
                  value={form.email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={loading}
                  style={{
                    justifyContent: 'center',
                    padding: '15px',
                    fontSize: '0.875rem',
                    opacity: loading ? 0.8 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? (
                    <>Preparing Your Guide...</>
                  ) : (
                    <>
                      <Gift size={16} />
                      Claim My Free Style Guide
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
              <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                We value your privacy. You will be connected via WhatsApp to claim the guide.
              </p>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
              <h3 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--cream)',
                marginBottom: '12px',
                letterSpacing: '0.04em',
              }}>
                You are all set, <span className="gold-gradient-text">{form.name}!</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                We have opened WhatsApp for you. Our team will share your exclusive Wedding Style Guide 
                and discount details shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
