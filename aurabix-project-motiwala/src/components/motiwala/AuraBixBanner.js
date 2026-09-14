'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'

export default function AuraBixBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show banner after 4 seconds delay for premium experience
    const timer = setTimeout(() => {
      // Check if dismissed in this session
      const dismissed = sessionStorage.getItem('aurabix-banner-dismissed')
      if (!dismissed) {
        setVisible(true)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = (e) => {
    e.stopPropagation()
    setVisible(false)
    sessionStorage.setItem('aurabix-banner-dismissed', 'true')
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 'var(--z-float)',
        maxWidth: '350px',
        width: 'calc(100% - 48px)',
        background: 'rgba(18, 18, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--border-gold-strong)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        boxShadow: 'var(--shadow-gold-strong)',
        animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        willChange: 'transform',
      }}
      className="aurabix-promo-banner"
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--obsidian)',
            boxShadow: '0 2px 10px rgba(212,175,55,0.3)',
          }}>
            <Sparkles size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
              Demo by AuraBix
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--cream)', marginTop: '2px' }}>
              Want a premium site like this?
            </div>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '2px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          aria-label="Dismiss banner"
        >
          <X size={16} />
        </button>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
        Get a premium, fast, and fully custom website for your business. Chat with the AuraBix team today.
      </p>

      {/* CTA Button */}
      <a
        href="https://wa.me/919850052520?text=Hello%20AuraBix%20Agency!%20I%20saw%20the%20Motiwala%20Creations%20demo%20website%20and%20would%20like%20to%20enquire%20about%20a%20premium%20site%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: 'var(--gold-gradient)',
          color: 'var(--obsidian)',
          textDecoration: 'none',
          padding: '10px 16px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          transition: 'all 0.3s var(--ease-smooth)',
          boxShadow: '0 4px 15px rgba(212,175,55,0.2)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.35)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(212,175,55,0.2)' }}
      >
        Get Free Proposal
        <ArrowRight size={14} />
      </a>

      <style>{`
        @media (max-width: 600px) {
          .aurabix-promo-banner {
            bottom: 84px !important; /* Float above the mobile nav elements if needed */
            left: 24px !important;
            right: 24px !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  )
}
