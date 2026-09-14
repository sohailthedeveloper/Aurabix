'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView } from '../useInView'
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react'

export default function MotiMap() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="location" style={{
      background: 'var(--charcoal)',
      padding: 'clamp(60px, 8vw, 100px) 0',
      overflow: 'hidden', // Enforces layout boundaries
    }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="section-header" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">Find Us</div>
          <h2 className="section-title">
            Visit Our{' '}
            <span className="gold-gradient-text">Kondhwa Boutique</span>
          </h2>
        </div>

        {/* Responsive Grid - Changed minmax to 280px to prevent mobile overflow */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
          alignItems: 'start',
          width: '100%',
        }}>
          {/* Info Card */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : (isMobile ? 'translateY(20px)' : 'translateX(-24px)'),
            transition: 'all 0.8s var(--ease-smooth) 0.2s',
            width: '100%',
          }}>
            {/* Address */}
            <div style={{
              background: 'var(--noir)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={19} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '8px', fontWeight: 600 }}>
                    Address
                  </div>
                  <div style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--cream)', fontWeight: 700, marginBottom: '4px', lineHeight: 1.4, letterSpacing: '0.02em' }}>
                    Motiwala Creations Mens Premium Wedding Wear
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Shop No. 9, Sheetal Square,<br />
                    Next to Sheetal Petrol Pump,<br />
                    Meeta Nagar, Kondhwa Khurd,<br />
                    Pune, Maharashtra 411048
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div style={{
              background: 'var(--noir)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Phone size={19} color="var(--gold-primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '6px', fontWeight: 600 }}>
                  Call and WhatsApp
                </div>
                <a href="tel:+919850052520" style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                  +91 98500 52520
                </a>
              </div>
            </div>

            {/* Hours */}
            <div style={{
              background: 'var(--noir)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Clock size={19} color="var(--gold-primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '6px', fontWeight: 600 }}>
                  Store Hours
                </div>
                <div style={{ color: 'var(--cream)', fontWeight: 600 }}>Tuesday to Sunday (Closed on Mondays)</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>11:00 AM to 9:00 PM</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://maps.app.goo.gl/uqd4SobNCHKkdeZy9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '12px 16px' }}
              >
                <Navigation size={15} />
                Get Directions
              </a>
              <a
                href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20would%20like%20to%20visit%20your%20store.%20Please%20share%20directions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '12px 16px' }}
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map Container — Fixed translateX overflow on mobile */}
          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-gold-strong)',
            boxShadow: 'var(--shadow-gold)',
            aspectRatio: '4/3',
            minHeight: '320px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : (isMobile ? 'translateY(20px)' : 'translateX(24px)'),
            transition: 'all 0.8s var(--ease-smooth) 0.3s',
            position: 'relative',
            width: '100%',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d73.8886194!3d18.4694992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea88330d789b%3A0x5e8f7fb56c614b14!2sMOTIWALA%20CREATIONS%20MENS%20PREMIUM%20WEDDING%20WEAR%20(FIRST%20BRANCH)!5e0!3m2!1sen!2sin!4v1687000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Motiwala Creations Location — Kondhwa, Pune"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
