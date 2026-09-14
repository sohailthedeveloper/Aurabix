'use client'

import { useRef } from 'react'
import { useInView } from '../useInView'
import { MessageCircle } from 'lucide-react'

const tiers = [
  {
    name: 'Silver Member',
    icon: '🥈',
    spend: '₹10,000+',
    color: '#A8A8B3',
    gradient: 'linear-gradient(135deg, #5C5C6E 0%, #A8A8B3 50%, #5C5C6E 100%)',
    borderColor: 'rgba(168,168,179,0.4)',
    benefits: [
      '5% discount on next purchase',
      'Free first alteration services',
      'Priority appointment bookings',
      'Birthday special rewards',
    ],
  },
  {
    name: 'Gold Member',
    icon: '👑',
    spend: '₹25,000+',
    color: '#C9A84C',
    gradient: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 35%, #F5E09A 60%, #C9A84C 80%, #8B6914 100%)',
    borderColor: 'rgba(201,168,76,0.6)',
    benefits: [
      '10% discount on all purchases',
      'Free alterations up to three times',
      'Exclusive previews of new arrivals',
      'Free delivery across Pune',
      'Dedicated personal styling assistant',
    ],
    featured: true,
  },
  {
    name: 'Diamond Elite',
    icon: '💎',
    spend: '₹50,000+',
    color: '#A0C8E8',
    gradient: 'linear-gradient(135deg, #4A8FA8 0%, #A0C8E8 50%, #4A8FA8 100%)',
    borderColor: 'rgba(160,200,232,0.4)',
    benefits: [
      '15% discount on all purchases',
      'Unlimited free alterations',
      'Private boutique shopping sessions',
      'Complimentary accessories set',
      'VIP client event invitations',
      'Annual gift of a luxury pocket square',
    ],
  },
]

export default function MotiLoyalty() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="loyalty" style={{
      background: 'var(--charcoal)',
      padding: 'clamp(60px, 8vw, 100px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        <div className="section-header" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">Loyalty Programme</div>
          <h2 className="section-title">
            The More You Wear,{' '}
            <span className="gold-gradient-text">The More You Gain</span>
          </h2>
          <p className="section-subtitle">
            Join the Motiwala family and unlock exclusive privileges designed for those who value quality.
          </p>
        </div>

        {/* Tiers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}>
          {tiers.map((tier, i) => (
            <div
              key={i}
              style={{
                background: tier.featured ? 'var(--noir)' : 'var(--charcoal-light)',
                border: `2px solid ${tier.borderColor}`,
                borderRadius: 'var(--radius-xl)',
                padding: tier.featured ? '40px 28px' : '32px 24px',
                position: 'relative',
                transform: inView
                  ? tier.featured ? 'scale(1.04)' : 'scale(1)'
                  : 'translateY(32px)',
                opacity: inView ? 1 : 0,
                transition: `all 0.7s var(--ease-smooth) ${i * 0.15}s`,
                boxShadow: tier.featured ? `0 0 60px ${tier.borderColor}` : 'none',
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: tier.gradient,
                  color: 'var(--obsidian)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '6px 18px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{tier.icon}</div>

              {/* Name */}
              <div style={{
                background: tier.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '6px',
                letterSpacing: '0.04em',
              }}>
                {tier.name}
              </div>

              {/* Threshold */}
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.08em',
                marginBottom: '24px',
              }}>
                Lifetime spend of {tier.spend}
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`,
                opacity: 0.3,
                marginBottom: '24px',
              }} />

              {/* Benefits */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tier.benefits.map((benefit, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: `${tier.color}22`,
                      border: `1px solid ${tier.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      <span style={{ color: tier.color, fontSize: '0.65rem', fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{ marginTop: '28px' }}>
                <a
                  href={`https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20would%20like%20to%20join%20the%20${encodeURIComponent(tier.name)}%20loyalty%20programme.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    background: tier.featured ? tier.gradient : `${tier.color}15`,
                    border: `1px solid ${tier.borderColor}`,
                    borderRadius: 'var(--radius-sm)',
                    color: tier.featured ? 'var(--obsidian)' : tier.color,
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s var(--ease-smooth)',
                  }}
                >
                  Join {tier.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '32px' }}>
          * Loyalty tiers are calculated based on cumulative lifetime purchases.
        </p>
      </div>
    </section>
  )
}
