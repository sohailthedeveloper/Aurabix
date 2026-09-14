'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from '../useInView'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Aryan Mehta',
    role: 'Groom · Kondhwa Wedding',
    rating: 5,
    text: 'Absolutely delighted by Motiwala Creations! The Royal Blue Sherwani was beyond my expectations. The embroidery was detailed and the fit was perfect. My wedding procession looked amazing.',
    avatar: '🤵',
    date: 'March 2025',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Groom · Pune Wedding',
    rating: 5,
    text: 'I visited five different stores before finding Motiwala Creations. The moment I entered, I knew this was the place. The staff helped me select the perfect Jodhpuri bandhgala in gold and everyone at my sangeet loved it.',
    avatar: '🤵',
    date: 'January 2025',
  },
  {
    name: 'Sameer Shaikh',
    role: 'Groom · PCMC Wedding',
    rating: 5,
    text: 'The custom tailoring was exceptional. They took precise measurements and delivered the outfit in five days. The Wine Velvet Sherwani I ordered was pure elegance and exactly what I wanted for my reception.',
    avatar: '🤵',
    date: 'December 2024',
  },
  {
    name: 'Pranav Kulkarni',
    role: 'Groom · Kothrud Wedding',
    rating: 5,
    text: 'The premier wedding clothing store in Pune. We bought outfits for the groom and the family, all tailored beautifully, on time, and with professional care.',
    avatar: '🤵',
    date: 'November 2024',
  },
  {
    name: 'Kabir Joshi',
    role: 'Groom · Hadapsar Wedding',
    rating: 5,
    text: 'Loved the Indo Western designs at Motiwala. I selected a teal jacket outfit for the sangeet and a structured suit for the reception. Great quality fabric and helpful team.',
    avatar: '🤵',
    date: 'October 2024',
  },
]

function StarRow({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          color={i < rating ? '#C9A84C' : 'rgba(201,168,76,0.2)'}
          fill={i < rating ? '#C9A84C' : 'transparent'}
        />
      ))}
    </div>
  )
}

export default function MotiTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [animating, setAnimating] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1 })
  const total = testimonials.length

  const goTo = (index, dir = 1) => {
    if (animating) return
    setAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo(current - 1, -1)
  const next = () => goTo(current + 1, 1)

  // Auto advance carousel loop
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [current])

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        padding: 'clamp(60px, 8vw, 100px) 0',
        overflow: 'hidden',
        background: 'var(--obsidian)',
      }}
    >
      {/* Background image overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        <Image src="/motiwala/testimonial-bg.png" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--obsidian) 0%, transparent 30%, transparent 70%, var(--obsidian) 100%)' }} />

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-header" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s var(--ease-smooth)',
        }}>
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">
            Words from Our{' '}
            <span className="gold-gradient-text">Royal Grooms</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyText: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} color="#C9A84C" fill="#C9A84C" />)}
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>4.3 average rating from 186 reviews on Google</span>
          </div>
        </div>

        {/* Testimonial slider */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s var(--ease-smooth) 0.2s',
        }}>
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid var(--border-gold-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(32px, 5vw, 56px)',
            position: 'relative',
            boxShadow: 'var(--shadow-gold)',
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${direction * 20}px)` : 'translateX(0)',
            transition: 'all 0.3s var(--ease-smooth)',
          }}>
            <Quote
              size={40}
              color="var(--gold-primary)"
              style={{ opacity: 0.15, position: 'absolute', top: '24px', right: '28px' }}
            />

            <StarRow rating={t.rating} />

            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: 'var(--cream)',
              lineHeight: 1.75,
              marginBottom: '28px',
            }}>
              "{t.text}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                flexShrink: 0,
              }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, color: 'var(--cream)', fontSize: '0.95rem', letterSpacing: '0.04em' }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{t.role} · {t.date}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
            <button
              onClick={prev}
              aria-label="Previous Testimonial"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid var(--border-gold)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--gold-primary)',
                transition: 'all 0.3s var(--ease-smooth)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,168,76,0.1)'}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Testimonial slide ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--gold-primary)' : 'rgba(201,168,76,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-smooth)',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next Testimonial"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid var(--border-gold)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--gold-primary)',
                transition: 'all 0.3s var(--ease-smooth)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,168,76,0.1)'}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
