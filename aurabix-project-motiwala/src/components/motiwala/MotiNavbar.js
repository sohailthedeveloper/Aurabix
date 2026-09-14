'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'Collections', href: '#collections', isAnchor: true },
  { label: 'Our Story', href: '#story', isAnchor: true },
  { label: 'Gallery', href: '/gallery', isAnchor: false },
  { label: 'Testimonials', href: '#testimonials', isAnchor: true },
  { label: 'Loyalty', href: '#loyalty', isAnchor: true },
  { label: 'Location', href: '#location', isAnchor: true },
]

export default function MotiNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      
      if (pathname !== '/') return

      // Active section detection
      const sections = navLinks.filter(l => l.isAnchor).map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Close mobile on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  // Lock scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (link, e) => {
    setMobileOpen(false)
    if (link.isAnchor) {
      e.preventDefault()
      const targetId = link.href.replace('#', '')
      if (pathname !== '/') {
        router.push('/' + link.href)
      } else {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-nav)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled
            ? 'rgba(9,9,9,0.96)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(201,168,76,0.2)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '68px' : '84px', transition: 'height 0.4s' }}>
            
            {/* Logo */}
            <Link href="/"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: scrolled ? '42px' : '52px', height: scrolled ? '42px' : '52px', transition: 'all 0.4s', flexShrink: 0 }}>
                <Image
                  src="/motiwala-logo.png"
                  alt="Motiwala Creations Logo"
                  fill
                  sizes="52px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: scrolled ? '1.1rem' : '1.3rem',
                  fontWeight: 700,
                  background: 'var(--gold-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.08em',
                  transition: 'font-size 0.4s',
                }}>MOTIWALA</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}>Creations</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
              {navLinks.map(link => {
                const isActive = pathname === link.href || (link.isAnchor && activeSection === link.href.replace('#', ''))
                
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--gold-primary)' : 'var(--text-secondary)',
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'all 0.3s',
                        position: 'relative',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-primary)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'var(--gold-primary)' : 'var(--text-secondary)' }}
                    >
                      {link.label}
                      {isActive && (
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '20px',
                          height: '2px',
                          background: 'var(--gold-gradient)',
                          borderRadius: '1px',
                        }} />
                      )}
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.3s',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-primary)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'var(--gold-primary)' : 'var(--text-secondary)' }}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        background: 'var(--gold-gradient)',
                        borderRadius: '1px',
                      }} />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I'd%20like%20to%20enquire%20about%20your%20premium%20wedding%20wear%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-nav"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  color: '#25D366',
                  borderRadius: 'var(--radius-sm)',
                  padding: '9px 16px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)'; e.currentTarget.style.transform = 'none' }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              {/* Book Appointment */}
              <button
                onClick={(e) => handleNavClick({ href: '#booking', isAnchor: true }, e)}
                className="btn-gold desktop-nav"
                style={{ padding: '9px 20px', fontSize: '0.78rem', borderRadius: 'var(--radius-sm)' }}
              >
                Book Appointment
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--gold-primary)',
                  padding: '8px',
                  cursor: 'pointer',
                  display: 'none',
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          maxWidth: '85vw',
          background: 'var(--noir)',
          borderLeft: '1px solid var(--border-gold)',
          zIndex: 'var(--z-modal)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileOpen ? 'visible' : 'hidden', // iOS Safari overflow safeguard
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700, letterSpacing: '0.1em' }}>MOTIWALA</div>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navLinks.map((link, i) => {
            if (link.isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.08)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.color = 'var(--gold-primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)' }}
                >
                  {link.label}
                </a>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(201,168,76,0.08)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.color = 'var(--gold-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
          <button
            onClick={(e) => handleNavClick({ href: '#booking', isAnchor: true }, e)}
            className="btn-gold"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: 'var(--radius-sm)',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            Book Appointment
          </button>
          <a
            href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I'd%20like%20to%20enquire%20about%20your%20premium%20wedding%20wear%20collection."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px',
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: 'var(--radius-sm)',
              color: '#25D366',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919850052520"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--gold-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            <Phone size={16} />
            +91 98500 52520
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
            zIndex: 'calc(var(--z-modal) - 1)',
          }}
        />
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
