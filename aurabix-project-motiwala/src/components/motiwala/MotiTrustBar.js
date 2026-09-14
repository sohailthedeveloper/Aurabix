'use client'

import { useRef } from 'react'
import { useInView } from '../useInView'
import { Star, Truck, Award, Clock, Shield } from 'lucide-react'

const trustItems = [
  { icon: Star, label: '4.3 Google Rating', sub: '186 Reviews' },
  { icon: Award, label: 'Premium Quality', sub: 'Zari, Silk, Brocade' },
  { icon: Clock, label: 'Tuesday to Sunday', sub: '11 AM to 9 PM' },
  { icon: Truck, label: 'Delivery Available', sub: 'Across Pune' },
  { icon: Shield, label: 'Established 1982', sub: '40+ Years of Legacy' },
]

export default function MotiTrustBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="trust-bar"
      style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0',
        }}>
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 20px',
                  flex: '1',
                  minWidth: '180px',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `all 0.6s var(--ease-smooth) ${i * 0.1}s`,
                  borderRight: i < trustItems.length - 1 ? '1px solid var(--border-gold)' : 'none',
                  justifyContent: 'center',
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(212,175,55,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={17} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--cream)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.06em', marginTop: '2px' }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Subtle gold shimmer sweep */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, transparent 20%, rgba(212,175,55,0.04) 50%, transparent 80%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite',
        pointerEvents: 'none',
      }} />

      <style>{`
        @media (max-width: 600px) {
          #trust-bar > div > div > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-gold);
          }
          #trust-bar > div > div > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  )
}
