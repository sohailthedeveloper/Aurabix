'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock, MessageCircle, Heart } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

// Inline SVG social icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const quickLinks = [
  { label: 'Collections', href: '#collections', isAnchor: true },
  { label: 'Our Story', href: '#story', isAnchor: true },
  { label: 'Gallery', href: '/gallery', isAnchor: false },
  { label: 'Testimonials', href: '#testimonials', isAnchor: true },
  { label: 'Loyalty Programme', href: '#loyalty', isAnchor: true },
  { label: 'Book Appointment', href: '#booking', isAnchor: true },
  { label: 'Location', href: '#location', isAnchor: true },
]

const socialLinks = [
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: MessageCircle, href: 'https://wa.me/919850052520', label: 'WhatsApp', size: true },
]

export default function MotiFooter() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLinkClick = (link, e) => {
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
    <footer style={{
      background: 'var(--obsidian)',
      borderTop: '1px solid var(--border-gold)',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* AuraBix Promotional Banner */}
      <div style={{
        background: '#0b0b0d',
        borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        gap: '6px',
        fontSize: '0.82rem',
        letterSpacing: '0.02em',
      }}>
        <span style={{ fontWeight: 700, color: 'var(--cream)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Powered by AuraBix
        </span>
        <span style={{ color: 'var(--text-muted)', margin: '0 8px', display: 'inline-block', opacity: 0.6 }}>|</span>
        <span style={{ color: 'var(--text-secondary)' }}>
          We help ambitious businesses scale with Premium Web Architecture, SEO & Paid Ads.
        </span>
        <a 
          href="https://aurabix.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: 600, 
            textDecoration: 'none',
            marginLeft: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-primary)'}
        >
          Let's Grow Together →
        </a>
      </div>

      {/* Main footer */}
      <div className="container" style={{ padding: 'clamp(48px, 6vw, 80px) clamp(16px, 4vw, 40px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0 }}>
                <Image src="/motiwala-logo.png" alt="Motiwala Creations Logo" fill sizes="52px" style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', fontWeight: 700, background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '0.08em' }}>
                  MOTIWALA
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Creations
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px', maxWidth: '280px' }}>
              Pune’s premier destination for luxury menswear. Turning premium fabrics into tailored statements since 1982.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map(({ Icon, href, label, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s var(--ease-smooth)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'none' }}
                >
                  {size ? <Icon size={16} /> : <Icon />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '20px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(link => (
                <li key={link.label}>
                  {link.isAnchor ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.83rem',
                        color: 'var(--text-secondary)',
                        padding: 0,
                        textAlign: 'left',
                        transition: 'color 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-primary)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                    >
                      <span style={{ fontSize: '0.6rem', color: 'var(--gold-primary)' }}>◆</span>
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.83rem',
                        color: 'var(--text-secondary)',
                        padding: 0,
                        textAlign: 'left',
                        transition: 'color 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-primary)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                    >
                      <span style={{ fontSize: '0.6rem', color: 'var(--gold-primary)' }}>◆</span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '20px' }}>
              Visit Us
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Shop No. 9, Sheetal Square,<br />
                  Next to Sheetal Petrol Pump,<br />
                  Meeta Nagar, Kondhwa Khurd, Pune 411048
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+919850052520"
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  +91 98500 52520
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Tuesday to Sunday: 11:00 AM to 9:00 PM (Closed Mondays)</div>
              </div>
            </div>

            {/* Quick CTA */}
            <a
              href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20would%20like%20to%20enquire%20about%20your%20premium%20menswear."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ marginTop: '24px', display: 'inline-flex', justifyContent: 'center', fontSize: '0.78rem', padding: '11px 20px' }}
            >
              <MessageCircle size={14} />
              Chat Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.1)',
        padding: '18px clamp(16px, 4vw, 40px)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Motiwala Creations Mens Premium Wedding Wear. All rights reserved.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            Crafted with <Heart size={11} color="var(--gold-primary)" fill="var(--gold-primary)" /> by{' '}
            <a href="https://aurabix.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontWeight: 600 }}>
              AuraBix
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
