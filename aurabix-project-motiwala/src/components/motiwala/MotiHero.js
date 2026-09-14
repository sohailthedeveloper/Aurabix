'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Star, Sparkles, Play } from 'lucide-react'

export default function MotiHero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 991)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Animation constants for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#040405', // Clean, premium dark obsidian
        paddingTop: '100px',
        paddingBottom: '40px',
      }}
    >
      {/* Subtle luxury ambient glow backgrounds */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 10% 30%, rgba(212,175,55,0.06) 0%, transparent 50%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 90% 70%, rgba(212,175,55,0.06) 0%, transparent 50%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          width: '100%',
          padding: '20px clamp(16px, 4vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          textAlign: isMobile ? 'center' : 'left',
          width: '100%',
        }}>
          
          {/* Left Column — Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
            {/* Social Proof Badge */}
            <motion.div variants={fadeUpVariants} style={{ marginBottom: '28px' }}>
              <span className="badge-gold" style={{ display: 'inline-flex', letterSpacing: '0.15em', padding: '6px 14px', fontSize: '0.7rem' }}>
                <Star size={11} fill="currentColor" style={{ marginRight: '5px' }} />
                Bespoke Menswear Since 1982
              </span>
            </motion.div>

            {/* Headline with safeguarded responsive font size */}
            <motion.div variants={fadeUpVariants} style={{ marginBottom: '24px', width: '100%' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.8rem)', // Reduced minimum size to prevent mobile word cut-off
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: 'var(--cream)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                Bespoke Elegance.<br />
                <span
                  style={{
                    background: 'var(--gold-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 16px rgba(212,175,55,0.4))',
                    marginTop: '8px',
                  }}
                >
                  Timeless Craftsmanship.
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.div variants={fadeUpVariants} style={{ marginBottom: '36px' }}>
              <p style={{
                fontSize: 'clamp(0.92rem, 1.4vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                maxWidth: isMobile ? '580px' : '520px',
                margin: isMobile ? '0 auto' : '0',
                fontWeight: '400',
              }}>
                Premium custom-tailored sherwanis, luxury suits, and ethnic menswear crafted to perfection in Pune since 1982.
              </p>
            </motion.div>

            {/* Action CTAs — Stacks on narrow screens */}
            <motion.div
              variants={fadeUpVariants}
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '12px',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '320px' : 'none',
                marginBottom: isMobile ? '40px' : '56px',
              }}
            >
              <a
                href="#booking"
                className="btn-gold"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  fontSize: '0.8rem',
                  padding: '14px 24px',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(212,175,55,0.2)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Calendar size={15} />
                Book a Tailoring Appointment
              </a>
              <a
                href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20would%20like%20to%20discuss%20a%20custom%20tailoring%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ fontSize: '0.8rem', padding: '14px 24px', justifyContent: 'center' }}
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px 32px',
                maxWidth: '380px',
                width: '100%',
              }}
            >
              {[
                { value: '40+ Years', label: 'Legacy Excellence' },
                { value: '186 Grooms', label: 'Happy Moments' },
                { value: '500+', label: 'Bespoke Designs' },
                { value: '4.3 Rating', label: 'Google Business' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                  <div style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    background: 'var(--gold-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Beautiful framed video showcase */}
          <motion.div
            variants={fadeUpVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* The Luxury Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '340px' : '420px',
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-xl)',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.4) 0%, rgba(5,5,5,0.9) 50%, rgba(212,175,55,0.1) 100%)',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-gold-strong)',
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 'calc(var(--radius-xl) - 6px)',
                overflow: 'hidden',
                background: '#0a0a0d',
              }}>
                <Image
                  src="/motiwala/motiwala.gif"
                  alt="Motiwala Creations Premium Video Loop"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  unoptimized
                  priority
                />

                {/* Ambient vignette */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 40%, transparent 60%, rgba(5,5,5,0.4) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Mini video label */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(5,5,5,0.75)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 12px',
                  borderRadius: '100px',
                  border: '1px solid var(--border-gold)',
                }}>
                  <Play size={10} color="var(--gold-primary)" fill="currentColor" />
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--cream)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Boutique Reel
                  </span>
                </div>
              </div>
            </div>

            {/* Framed Caption */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '16px',
              opacity: 0.8,
            }}>
              <Sparkles size={12} color="var(--gold-primary)" />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}>
                View our collections live at our Kondhwa Boutique
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
