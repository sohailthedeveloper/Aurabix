'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function MotiWhatsApp() {
  const [open, setOpen] = useState(false)

  const messages = [
    { text: "👔 Browse our sherwani collection", href: "https://wa.me/919850052520?text=Hello!%20I'd%20like%20to%20browse%20the%20sherwani%20collection." },
    { text: "📅 Book an appointment", href: "https://wa.me/919850052520?text=Hello%20Motiwala!%20I'd%20like%20to%20book%20an%20appointment%20for%20styling." },
    { text: "💰 Ask about pricing & offers", href: "https://wa.me/919850052520?text=Hello!%20Can%20you%20share%20details%20about%20pricing%20and%20current%20offers?" },
    { text: "🎁 Get the Free Style Guide", href: "https://wa.me/919850052520?text=Hello!%20I'd%20like%20to%20receive%20the%20free%20wedding%20style%20guide." },
  ]

  return (
    <>
      {/* Bubble wrapper */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 'var(--z-float)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}>
        {/* Quick options */}
        {open && (
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid var(--border-gold-strong)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px',
            width: '260px',
            boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
            animation: 'fadeUp 0.3s ease both',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-gold)',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <MessageCircle size={18} color="white" fill="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--cream)' }}>Motiwala Creations</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.68rem', color: '#25D366' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366' }} />
                  Online · Responds in mins
                </div>
              </div>
            </div>

            {/* Quick messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {messages.map((m, i) => (
                <a
                  key={i}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    background: 'rgba(37,211,102,0.08)',
                    border: '1px solid rgba(37,211,102,0.2)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.16)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.2)' }}
                >
                  {m.text}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Main bubble */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Chat on WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#25D366',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4)',
            animation: 'goldPulse 2.5s infinite',
            transition: 'transform 0.3s',
            position: 'relative',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {open ? (
            <X size={24} color="white" />
          ) : (
            <MessageCircle size={26} color="white" fill="white" />
          )}

          {/* Pulse ring */}
          {!open && (
            <span style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '2px solid #25D366',
              animation: 'goldPulse 2.5s infinite',
              opacity: 0.5,
            }} />
          )}
        </button>
      </div>

      <style>{`
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 4px 40px rgba(37,211,102,0.7); }
        }
        @media (max-width: 480px) {
          [data-whatsapp-bubble] { bottom: 16px; right: 16px; }
        }
      `}</style>
    </>
  )
}
