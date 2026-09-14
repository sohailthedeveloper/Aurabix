'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useInView } from '../useInView'
import { Heart, MessageCircle } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Creations' },
  { id: 'wedding', label: 'Grand Wedding Wear' },
  { id: 'suits', label: 'Suits & Tuxedos' },
  { id: 'ethnic', label: 'Kurtas & Casual Ethnic' },
]

const products = [
  {
    id: 1,
    category: 'wedding',
    name: 'Royal Zardosi Sherwani',
    image: '/motiwala/product-black-sherwani.png',
    price: '₹18,500',
    originalPrice: '₹24,000',
    tag: 'Wedding Wear',
    fabric: 'Pure Silk',
    desc: 'Exquisite custom sherwani with detailed silver zardosi embroidery, designed explicitly for grooms.',
  },
  {
    id: 2,
    category: 'wedding',
    name: 'Maharaja Gold Bandhgala',
    image: '/motiwala/product-gold-jodhpuri.png',
    price: '₹22,000',
    originalPrice: '₹28,000',
    tag: 'Wedding Wear',
    fabric: 'Brocade Silk',
    desc: 'Regal Jodhpuri suit showing rich golden brocade patterns with a structured mandarin collar.',
  },
  {
    id: 3,
    category: 'suits',
    name: 'Italian Navy Tuxedo',
    image: '/motiwala/product-navy-suit.png',
    price: '₹14,500',
    originalPrice: '₹18,500',
    tag: 'Suits & Tuxedos',
    fabric: 'Italian Wool',
    desc: 'Sharp, precision-fitted tuxedo complete with a silk pocket square and matching satin lapels.',
  },
  {
    id: 4,
    category: 'wedding',
    name: 'Velvet Wine Sherwani',
    image: '/motiwala/product-wine-sherwani.png',
    price: '₹20,000',
    originalPrice: '₹26,000',
    tag: 'Wedding Wear',
    fabric: 'Italian Velvet',
    desc: 'Deep maroon velvet sherwani displaying intricate hand zardosi cuffs and regal Nawabi sets.',
  },
  {
    id: 5,
    category: 'wedding',
    name: 'Ivory Cream Jodhpuri',
    image: '/motiwala/product-ivory-bandhgala.png',
    price: '₹16,000',
    originalPrice: '₹20,000',
    tag: 'Wedding Wear',
    fabric: 'Jacquard Silk',
    desc: 'Pristine ivory cream jodhpuri showcasing subtle self woven motifs and polished buttons.',
  },
  {
    id: 6,
    category: 'ethnic',
    name: 'Teal Fusion Kurta Set',
    image: '/motiwala/product-teal-indo-western.png',
    price: '₹12,500',
    originalPrice: '₹15,500',
    tag: 'Kurtas & Casual',
    fabric: 'Premium Cotton Blend',
    desc: 'High-quality pleated kurta with lightweight fusion styling, perfect for pre-wedding sangeet.',
  },
  {
    id: 7,
    category: 'suits',
    name: 'Charcoal Chalk Stripe Suit',
    image: '/motiwala/product-charcoal-suit.png',
    price: '₹16,000',
    originalPrice: '₹21,000',
    tag: 'Suits & Tuxedos',
    fabric: 'Armani Wool',
    desc: 'Sharp business suit cut from premium Armani suiting fabric, tailored for ultimate class.',
  },
  {
    id: 8,
    category: 'wedding',
    name: 'Royal Blue Zardosi Sherwani',
    image: '/motiwala/product-royal-sherwani.png',
    price: '₹25,000',
    originalPrice: '₹32,000',
    tag: 'Wedding Wear',
    fabric: 'Pure Silk',
    desc: 'Regal hand-embroidered Nawabi set showing heavy zardosi work throughout.',
  },
]

const tagColors = {
  'Wedding Wear': { bg: 'rgba(212,175,55,0.2)', color: '#D4AF37', border: 'rgba(212,175,55,0.4)' },
  'Suits & Tuxedos': { bg: 'rgba(100,160,255,0.15)', color: '#6EB0FF', border: 'rgba(100,160,255,0.3)' },
  'Kurtas & Casual': { bg: 'rgba(255,140,60,0.15)', color: '#FF8C3C', border: 'rgba(255,140,60,0.3)' },
}

function ProductCard({ product, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const tagStyle = tagColors[product.tag] || tagColors['Wedding Wear']

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--charcoal)',
        border: `1px solid ${hovered ? 'var(--border-gold-strong)' : 'var(--border-gold)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'all 0.4s var(--ease-smooth)',
        transform: inView
          ? hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)'
          : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? 'var(--shadow-gold-strong)' : 'var(--shadow-card)',
        cursor: 'pointer',
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--charcoal-light)' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.6s var(--ease-smooth)',
          }}
        />

        {/* Tag Badge */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          background: tagStyle.bg,
          border: `1px solid ${tagStyle.border}`,
          color: tagStyle.color,
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '5px 10px',
          borderRadius: '100px',
          backdropFilter: 'blur(8px)',
          zIndex: 2,
        }}>
          {product.tag}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted) }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${wishlisted ? 'rgba(255,100,100,0.4)' : 'var(--border-gold)'}`,
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s var(--ease-smooth)',
            zIndex: 2,
          }}
        >
          <Heart
            size={15}
            color={wishlisted ? '#FF6464' : 'var(--gold-primary)'}
            fill={wishlisted ? '#FF6464' : 'transparent'}
          />
        </button>

        {/* Hover overlay with CTA */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(9,9,9,0.9) 0%, transparent 60%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '16px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 3,
        }}>
          <a
            href={`https://wa.me/919850052520?text=Hello!%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${product.price}).%20Please%20share%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'rgba(37,211,102,0.9)',
              color: 'white',
              padding: '10px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.06em',
            }}
          >
            <MessageCircle size={14} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: '6px', opacity: 0.8 }}>
          {product.fabric}
        </div>
        <h3 style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '6px', lineHeight: 1.3, letterSpacing: '0.03em' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
          {product.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--gold-primary)', letterSpacing: '0.02em' }}>
              {product.price}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '8px' }}>
              {product.originalPrice}
            </span>
          </div>
          <button style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--gold-primary)',
            padding: '6px 12px',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.2s var(--ease-smooth)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.2)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)' }}
          onClick={() => {
            const url = `https://wa.me/919850052520?text=Hello!%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(product.name)}`
            window.open(url, '_blank')
          }}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MotiCollections() {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.05 })

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="collections" style={{ background: 'var(--noir)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" ref={ref} style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">Our Creations</div>
          <h2 className="section-title">
            Explore Our{' '}
            <span className="gold-gradient-text">Bespoke Gallery</span>
          </h2>
          <p className="section-subtitle">
            Regal wedding ensembles, sharp tailored suits, and custom ethnic wear designed to perfection.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '48px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s var(--ease-smooth) 0.2s',
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id
                  ? 'var(--gold-gradient)'
                  : 'rgba(212,175,55,0.08)',
                border: `1px solid ${activeCategory === cat.id ? 'transparent' : 'var(--border-gold)'}`,
                color: activeCategory === cat.id ? 'var(--obsidian)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: activeCategory === cat.id ? 700 : 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '9px 20px',
                borderRadius: '100px',
                cursor: 'pointer',
                transition: 'all 0.3s var(--ease-smooth)',
                transform: activeCategory === cat.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            If you do not see what you are looking for, we offer custom tailoring services.
          </p>
          <a
            href="https://wa.me/919850052520?text=Hello%20Motiwala%20Creations!%20I%20would%20like%20to%20discuss%20a%20custom%20outfit%20design."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle size={16} />
            Discuss Custom Design
          </a>
        </div>
      </div>
    </section>
  )
}
