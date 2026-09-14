'use client'

import { useState, useRef, useEffect } from 'react'
import { useInView } from '../useInView'
import { Calendar, Clock, User, Phone, CheckCircle, ArrowRight } from 'lucide-react'

const occasions = [
  'Wedding Ceremony',
  'Reception Party',
  'Sangeet or Mehendi',
  'Engagement Ceremony',
  'Formal Event',
  'Other Occasion',
]

const timeSlots = [
  '11:00 AM to 12:00 PM',
  '12:00 PM to 1:00 PM',
  '2:00 PM to 3:00 PM',
  '3:00 PM to 4:00 PM',
  '4:00 PM to 5:00 PM',
  '5:00 PM to 6:00 PM',
  '6:00 PM to 7:00 PM',
  '7:00 PM to 8:00 PM',
  '8:00 PM to 9:00 PM',
]

export default function MotiBooking() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: '',
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))

    const msg = [
      `🌟 *Tailoring Appointment Request — Motiwala Creations*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *WhatsApp:* ${form.phone}`,
      `🎪 *Occasion:* ${form.occasion || 'Not specified'}`,
      `📅 *Preferred Date:* ${form.date || 'Flexible'}`,
      `🕐 *Preferred Time:* ${form.time || 'Flexible'}`,
      form.notes ? `📝 *Notes:* ${form.notes}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/919850052520?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="booking" style={{
      background: 'var(--obsidian)',
      padding: 'clamp(60px, 8vw, 100px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'start',
        }}>
          {/* Left — Info */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'all 0.8s var(--ease-smooth)',
          }}>
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>Book a Visit</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Book a{' '}
              <span className="gold-gradient-text">Tailoring Appointment</span>
            </h2>
            <div className="gold-divider left" />

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '36px', fontSize: '0.95rem' }}>
              Select a preferred date and time to reserve your personalized consultation. Our master tailors will assist you in mapping measurements and choosing fabrics from our premium catalog.
            </p>

            {/* Info cards */}
            {[
              { icon: Clock, title: 'Store Hours', info: 'Tuesday to Sunday: 11:00 AM to 9:00 PM (Closed on Mondays)' },
              { icon: Calendar, title: 'Appointment Duration', info: '60 to 90 minutes per styling session' },
              { icon: User, title: 'Custom Consultations', info: 'Map measurements to your build for a flawless fit' },
              { icon: Phone, title: 'Quick Contact', info: '+91 98500 52520' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  marginBottom: '20px',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.6s var(--ease-smooth) ${0.2 + i * 0.1}s`,
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(212,175,55,0.12)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={17} color="var(--gold-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.info}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right — Form */}
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid var(--border-gold-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(24px, 4vw, 44px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(32px)',
            transition: 'all 0.8s var(--ease-smooth) 0.2s',
            boxShadow: 'var(--shadow-gold)',
            width: '100%',
          }}>
            {!submitted ? (
              <>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  marginBottom: '24px',
                  letterSpacing: '0.04em',
                }}>
                  Select Preferred Slot
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                        Full Name *
                      </label>
                      <input
                        className="input-luxury"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                        WhatsApp Number *
                      </label>
                      <input
                        className="input-luxury"
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                      Occasion
                    </label>
                    <select
                      className="input-luxury"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF37' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                    >
                      <option value="">Select occasion...</option>
                      {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                        Preferred Date
                      </label>
                      <input
                        className="input-luxury"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                        Preferred Time
                      </label>
                      <select
                        className="input-luxury"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF37' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                      >
                        <option value="">Select slot...</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px' }}>
                      Any Special Requests?
                    </label>
                    <textarea
                      className="input-luxury"
                      name="notes"
                      rows={3}
                      placeholder="E.g. looking for a gold sherwani, specific fabric requests, sizing details..."
                      value={form.notes}
                      onChange={handleChange}
                      style={{ resize: 'vertical', minHeight: '80px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    disabled={loading}
                    style={{
                      justifyContent: 'center',
                      padding: '15px',
                      marginTop: '4px',
                      opacity: loading ? 0.8 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 15px rgba(212,175,55,0.2)',
                    }}
                  >
                    {loading ? 'Preparing...' : (
                      <>
                        <Calendar size={16} />
                        Book a Tailoring Appointment
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '14px' }}>
                  You will be redirected to WhatsApp to confirm your scheduling.
                </p>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle size={48} color="var(--gold-primary)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '12px', letterSpacing: '0.04em' }}>
                  Appointment Requested
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  We have opened WhatsApp for you. Our team will verify and confirm your slot shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
