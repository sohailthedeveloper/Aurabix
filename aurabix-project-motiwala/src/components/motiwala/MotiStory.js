'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from '../useInView'
import { Diamond, Heart, Users, Award } from 'lucide-react'

const pillars = [
  { icon: Diamond, title: 'Legacy Craftsmanship', desc: 'Over forty years of curating the finest wedding wear in Kondhwa, Pune.' },
  { icon: Heart, title: 'Personal Styling', desc: 'Individual styling consultations to design the look that reflects your unique personality.' },
  { icon: Users, title: 'Trusted by Families', desc: 'Generations of grooms and families have trusted Motiwala for their most special day.' },
  { icon: Award, title: 'Premium Fabrics Only', desc: 'Pure Banarasi silk, imported Armani fabrics, Italian velvet, and luxury wool.' },
]

export default function MotiStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="story" style={{ background: 'var(--obsidian)', padding: 'clamp(60px, 8vw, 100px) 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left — Image */}
          <div
            ref={ref}
            style={{
              position: 'relative',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.9s var(--ease-smooth)',
            }}
          >
            {/* Main image */}
            <div style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-gold-strong)',
            }}>
              <Image
                src="/motiwala/brand-story.png"
                alt="Motiwala Creations Heritage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)',
              }} />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: isMobile ? '10px' : '-20px', // Prevent mobile overflow!
              background: 'var(--charcoal)',
              border: '1px solid var(--border-gold-strong)',
              borderRadius: 'var(--radius-md)',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-gold)',
              animation: 'goldPulse 4s ease-in-out infinite',
            }}>
              <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '2.2rem', fontWeight: 700, background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>40+</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '4px' }}>Years of Legacy</div>
            </div>

            {/* Store interior preview */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: isMobile ? '10px' : '-20px', // Prevent mobile overflow!
              width: '130px',
              height: '100px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '2px solid var(--border-gold-strong)',
              boxShadow: 'var(--shadow-gold)',
            }}>
              <Image
                src="/motiwala/store-interior.png"
                alt="Motiwala Store Interior"
                fill
                sizes="130px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.9s var(--ease-smooth) 0.2s',
          }}>
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>About Us</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Over 40 Years of{' '}
              <span className="gold-gradient-text">Sartorial Excellence</span>
            </h2>
            <div className="gold-divider left" />

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '20px', fontSize: '0.95rem' }}>
              Welcome to <strong style={{ color: 'var(--cream)' }}>Motiwala Creations (Tareef Premium Wedding Wear)</strong>, Pune’s premier destination for luxury menswear. For over four decades, we have been turning premium fabrics into masterfully tailored statements.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '36px', fontSize: '0.95rem' }}>
              We combine traditional Indian hand-embroidery with contemporary cuts to ensure you look unmatched on your most memorable days. From the initial fabric selection to the final stitch, our master tailors guarantee a flawless fit.
            </p>

            {/* Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <div
                    key={i}
                    style={{
                      padding: '16px',
                      background: 'var(--charcoal)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-md)',
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(16px)',
                      transition: `all 0.6s var(--ease-smooth) ${0.4 + i * 0.1}s`,
                    }}
                  >
                    <Icon size={18} color="var(--gold-primary)" style={{ marginBottom: '10px' }} />
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '6px' }}>{p.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
