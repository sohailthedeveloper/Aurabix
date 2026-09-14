'use client'

import { useRef } from 'react'
import { useInView } from '../useInView'
import { Clock, Shield, Gem, Ruler } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '40+ Years of Expertise',
    desc: 'Decades of trust and mastery in bespoke menswear tailoring, delivering unmatched fits to generations of grooms in Pune.',
  },
  {
    icon: Ruler,
    title: 'Flawless Precision Fitting',
    desc: 'Custom measurements mapped to your exact build and posture for ultimate comfort and a sharp, elegant silhouette.',
  },
  {
    icon: Clock,
    title: 'Premium Fabric Gallery',
    desc: 'Handpicked velvets, raw silks, imported Banarasi brocades, and fine Italian wool suiting materials from world class mills.',
  },
  {
    icon: Gem,
    title: 'Intricate Handwork',
    desc: 'Authentic Zardosi embroidery, thread work, and classic embellishments crafted by our resident master artisans.',
  },
]

export default function MotiWhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="why-us"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(60px, 8vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial gold spotlight effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        <div className="section-header" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">The Motiwala Standards</div>
          <h2 className="section-title">
            Our Pillars of{' '}
            <span className="gold-gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle">
            Four decades of bespoke tailoring standards that guarantee you look unmatched on your most memorable days.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}>
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="card-luxury"
                style={{
                  padding: '36px 28px',
                  background: 'var(--noir)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-lg)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transition: `all 0.8s var(--ease-smooth) ${i * 0.12}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'var(--border-gold-strong)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold-strong)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-gold)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {/* Icon wrapper */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 4px 15px rgba(212,175,55,0.1)',
                }}>
                  <Icon size={24} color="var(--gold-primary)" />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  marginBottom: '14px',
                  letterSpacing: '0.04em',
                  lineHeight: 1.3,
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  {feature.desc}
                </p>

                {/* Decorative gold background accent */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '6rem',
                  fontWeight: 900,
                  color: 'rgba(212,175,55,0.02)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  0{i + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
