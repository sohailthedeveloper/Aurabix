'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MotiNavbar from '@/components/motiwala/MotiNavbar'
import MotiFooter from '@/components/motiwala/MotiFooter'
import MotiWhatsApp from '@/components/motiwala/MotiWhatsApp'
import { X, ZoomIn, MessageCircle, ArrowLeft, Image as ImageIcon } from 'lucide-react'

// Original store & customer screenshots from Google Maps and real reviews
const galleryItems = [
  {
    id: 1,
    category: 'store',
    title: 'Our Boutique Front Sign',
    desc: 'Motiwala Creations boutique entrance at Sheetal Square in Kondhwa Khurd, Pune.',
    src: '/motiwala/real-gallery-1.jpg',
  },
  {
    id: 2,
    category: 'customers',
    title: 'Real Groom Happy Moments',
    desc: 'One of our happy grooms wearing a custom tailored ivory sherwani on his wedding day.',
    src: '/motiwala/real-gallery-2.jpg',
  },
  {
    id: 3,
    category: 'store',
    title: 'Boutique Display and Fabrics',
    desc: 'Handpicked brocades, silks, and suiting materials inside our fabric library.',
    src: '/motiwala/real-gallery-3.jpg',
  },
  {
    id: 4,
    category: 'customers',
    title: 'Custom Groom Jodhpuri Suit',
    desc: 'Tailored fit gold and cream jodhpuri suit delivered to our happy groom.',
    src: '/motiwala/real-gallery-4.jpg',
  },
  {
    id: 5,
    category: 'store',
    title: 'Showroom Collection Racks',
    desc: 'A glance at our selection of wedding wear, designer suits, and tuxedos.',
    src: '/motiwala/real-gallery-5.jpg',
  },
  {
    id: 6,
    category: 'customers',
    title: 'Royal Blue Sherwani Fitting',
    desc: 'A customer showing the detailed silver zardosi embroidery on pure blue silk.',
    src: '/motiwala/real-gallery-6.jpg',
  },
  {
    id: 7,
    category: 'customers',
    title: 'Sangeet Fusion Wear',
    desc: 'Groom looking sharp in our modern teal jacket ethnic fusion wear during fitting.',
    src: '/motiwala/real-gallery-7.jpg',
  },
  {
    id: 8,
    category: 'store',
    title: 'Our Tailoring Studio',
    desc: 'Master tailors finishing the details on our custom wedding collections.',
    src: '/motiwala/real-gallery-8.jpg',
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [activePhoto, setActivePhoto] = useState(null)

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  const openLightbox = (photo) => {
    setActivePhoto(photo)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setActivePhoto(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <MotiNavbar />
      
      <main style={{ background: 'var(--obsidian)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Link href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--gold-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              marginBottom: '24px',
              transition: 'transform 0.3s var(--ease-smooth)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            
            <h1 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--cream)',
              marginBottom: '16px',
              letterSpacing: '0.06em',
            }}>
              Our <span className="gold-gradient-text">Real Gallery</span>
            </h1>
            <div className="gold-divider" />
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Real storefront and customer pictures from Motiwala Creations boutique located in Kondhwa Khurd, Pune.
            </p>
          </div>

          {/* Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'store', label: 'Store & Boutique' },
              { id: 'customers', label: 'Real Grooms' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  background: filter === tab.id ? 'var(--gold-gradient)' : 'rgba(212,175,55,0.06)',
                  border: `1px solid ${filter === tab.id ? 'transparent' : 'var(--border-gold)'}`,
                  color: filter === tab.id ? 'var(--obsidian)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: filter === tab.id ? 700 : 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                style={{
                  background: 'var(--charcoal)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.4s var(--ease-smooth)',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = 'var(--border-gold-strong)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold-strong)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-gold)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
                {/* Photo Container */}
                <div style={{ position: 'relative', aspectRatio: '4/3', width: '100%', overflow: 'hidden', background: 'var(--charcoal-light)' }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  />
                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="hover-overlay"
                  >
                    <ZoomIn size={28} color="var(--gold-primary)" />
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    marginBottom: '8px',
                    letterSpacing: '0.04em',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <ImageIcon size={40} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
              <p>No photos found in this category yet.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5,5,5,0.96)',
          backdropFilter: 'blur(10px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
        onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid var(--border-gold)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--gold-primary)',
              zIndex: 10,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <X size={20} />
          </button>

          {/* Modal Container */}
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: 'var(--charcoal)',
              border: '1px solid var(--border-gold-strong)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-gold-strong)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Left - Image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', width: '100%', minHeight: '300px' }}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="600px"
                style={{ objectFit: 'contain', background: '#0b0b0d' }}
              />
            </div>

            {/* Right - Text & CTA */}
            <div style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--gold-primary)',
                marginBottom: '12px',
              }}>
                {activePhoto.category === 'store' ? 'Store & Boutique' : 'Our Groom'}
              </div>
              
              <h2 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--cream)',
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '0.04em',
              }}>
                {activePhoto.title}
              </h2>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}>
                {activePhoto.desc}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={`https://wa.me/919850052520?text=Hello%20Motiwala!%20I%20saw%20the%20photo%20"${encodeURIComponent(activePhoto.title)}"%20in%20your%20gallery.%20Can%20you%20share%20more%20details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  Ask about this look
                </a>
                <button
                  onClick={closeLightbox}
                  className="btn-outline-gold"
                  style={{ justifyContent: 'center' }}
                >
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MotiFooter />
      <MotiWhatsApp />

      <style>{`
        .hover-overlay {
          display: flex;
        }
        [onClick]:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </>
  )
}
