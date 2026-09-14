'use client'

import { useRef } from 'react'
import { useInView } from '../useInView'
import { MessageCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Browse our collections online or visit our boutique in Kondhwa to share your wedding theme, dates, and preferences.',
    sub: 'Visit or WhatsApp',
  },
  {
    number: '02',
    title: 'Design and Select',
    desc: 'Our stylists guide you through fabrics, embroidery patterns, and coordinates to design your ideal look.',
    sub: 'Styling Session',
  },
  {
    number: '03',
    title: 'Tailored Fitting',
    desc: 'Our master tailors take detailed measurements. Each line and stitch is carefully crafted to fit your posture and shape.',
    sub: 'Precision Crafting',
  },
  {
    number: '04',
    title: 'Final Delivery',
    desc: 'Receive your outfit pressed, packed, and ready for your wedding day with on time delivery guaranteed.',
    sub: 'On Time Delivery Promise',
  },
]

export default function MotiProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="process" style={{ background: 'var(--noir)', padding: 'clamp(60px, 8vw, 100px) 0', overflow: 'hidden' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="section-header" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">The Journey</div>
          <h2 className="section-title">
            Your Path to a{' '}
            <span className="gold-gradient-text">Perfect Look</span>
          </h2>
          <p className="section-subtitle">
            From initial consultation to your wedding day, experience a seamless and premium journey.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s var(--ease-smooth) ${i * 0.15}s`,
                }}
              >
                {/* Step card */}
                <div style={{
                  background: 'var(--charcoal)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 24px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-gold-strong)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-gold)'
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                >
                  {/* Large step number background */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '16px',
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '5rem',
                    fontWeight: 700,
                    color: 'rgba(201,168,76,0.06)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}>
                    {step.number}
                  </div>

                  {/* Step number badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--gold-gradient)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--obsidian)',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    marginBottom: '12px',
                    letterSpacing: '0.04em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.83rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}>
                    {step.desc}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(201,168,76,0.08)',
                    padding: '5px 12px',
                    borderRadius: '100px',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}>
                    {step.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px', opacity: inView ? 1 : 0, transition: 'opacity 0.7s var(--ease-smooth) 0.6s' }}>
          <a
            href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20am%20interested%20in%20starting%20my%20wedding%20look%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: '0.875rem' }}
          >
            <MessageCircle size={16} />
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}
