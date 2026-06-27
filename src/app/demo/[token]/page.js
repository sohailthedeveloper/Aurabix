"use client";
import { useEffect, useState, use } from 'react';
import DemoThemeProvider from '@/components/demo/DemoThemeProvider';
import Navbar from '@/components/demo/Navbar';
import Footer from '@/components/demo/Footer';
import BeforeAfterSlider from '@/components/demo/BeforeAfterSlider';
import ReviewMarquee from '@/components/demo/ReviewMarquee';
import AuraBixPitch from '@/components/demo/AuraBixPitch';
import Chatbot from '@/components/demo/Chatbot';
import FloatingWhatsApp from '@/components/demo/FloatingWhatsApp';
import BookingModal from '@/components/demo/BookingModal';
import '@/app/demo/demo.css';

export default function DemoPage({ params }) {
  const { token } = use(params);
  const [config, setConfig] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (!token) return;
    try {
      // Decode URL-safe Base64 to UTF-8 JSON
      const base64 = token.replace(/-/g, '+').replace(/_/g, '/');
      const jsonStr = decodeURIComponent(
        escape(window.atob(base64))
      );
      const data = JSON.parse(jsonStr);
      data.token = token;
      setConfig(data);
    } catch (e) {
      console.error("Failed to decode prospecting token:", e);
      // Fallback defaults
      setConfig({
        name: "Zenith Dental Clinic",
        primaryColor: "#0f172a",
        secondaryColor: "#d4af37",
        phone: "020 8866 0758",
        logo: null,
        whatsapp: null,
        chatbot: true,
        bg: "video",
        layout: "1",
        token: token
      });
    }
  }, [token]);

  // ── Analytics: Track prospect visit silently ──
  useEffect(() => {
    if (!config) return;
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: config.token,
        name: config.name,
        template: config.template || 'dental',
        page: 'demo',
      }),
    }).catch(() => {}); // Fire-and-forget, never block the UI
  }, [config]);

  // Scroll Reveal Animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [config]);

  if (!config) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#d4af37', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Loading dynamic client demo...</p>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  const { name, bg, layout, template } = config;

  // Background Options
  const bgMap = {
    video: null,          
    '1': '/hero1.png',   // smiling patient
    '2': '/hero2.png',   // luxury clinic interior
    '3': '/hero3.png',   // happy smiles group
  };

  // Layout Alignments
  const layoutStyles = {
    '1': { justifyContent: 'flex-start', textAlign: 'left' },   // left
    '2': { justifyContent: 'center',     textAlign: 'center' },  // center
    '3': { justifyContent: 'flex-end',   textAlign: 'right' },   // right
  };

  const heroImg = bgMap[bg] ?? null;
  const heroLayout = layoutStyles[layout] ?? layoutStyles['1'];

  return (
    <DemoThemeProvider config={config}>
      <div className="demo-page-root">
        {/* Niche Preview Notice Banner */}
        {template && template !== 'dental' && (
          <div style={{
            backgroundColor: '#0f172a',
            color: '#cbd5e1',
            padding: '10px 20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            borderBottom: '2px solid var(--secondary)',
            position: 'relative',
            zIndex: 100,
            fontFamily: 'var(--font-body)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'inline-flex', padding: '2px 8px', background: 'var(--secondary)', color: 'white', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Mockup Preview
            </span>
            <span>
              We've mapped <strong>{name}</strong>'s brand colors (<span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Primary</span> and <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Secondary</span>) and details to this premium dental template. We also have custom templates optimized for <strong>{template === 'salon' ? 'Spa & Salons' : template === 'saas' ? 'SaaS & Tech Platforms' : template === 'ecommerce' ? 'E-Commerce Brands' : 'Corporate Services'}</strong>.
            </span>
            <a href="mailto:hello@aurabix.com?subject=Custom Layout for My Brand" style={{ color: '#d4af37', textDecoration: 'underline', fontWeight: 'bold' }}>
              Request Custom Niche Layout
            </a>
          </div>
        )}

        {/* Navigation */}
        <Navbar onBookClick={() => setIsBookingOpen(true)} />

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-bg">
            {heroImg ? (
              <img src={heroImg} alt={`${name} hero`} className="hero-video" style={{ objectPosition: 'center top' }} />
            ) : (
              <video autoPlay loop muted playsInline className="hero-video">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            )}
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content reveal" style={{ display: 'flex', ...heroLayout }}>
            <div className={`hero-card ${layout === '2' ? 'hero-card-center' : ''}`}>
              <h1>Providing Quality<br/>Dental Solutions In A<br/>Caring Environment.</h1>
              <p>
                {name} offers a wide range of dental treatments at competitive prices. We work closely with each patient to offer an exceptionally caring, professional and personal dental service.
              </p>
              <div className="hero-actions" style={layout === '2' ? { justifyContent: 'center' } : {}}>
                <button onClick={() => setIsBookingOpen(true)} className="primary-btn" style={{ border: 'none', cursor: 'pointer' }}>
                  BOOK ONLINE
                </button>
                <a href="#services" className="secondary-btn">VIEW TREATMENTS</a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <div className="trust-badges reveal">
          <div className="badge">✓ Invisalign Platinum</div>
          <div className="badge">✓ GDC Registered</div>
          <div className="badge">★★★★★ Google Rated</div>
          <div className="badge">✓ BDA Member</div>
        </div>

        {/* About / Why Choose Us */}
        <section className="why-choose-us" id="about">
          <div className="section-container">
            <div className="section-header reveal">
              <h2>Why Choose {name}?</h2>
              <p>
                We pride ourselves on being able to meet all dental requirements, offering a wide range of treatments from veneers to braces.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card reveal reveal-delay-1 glass-panel fade-in-up">
                <div className="icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <h3>Competitive Rates</h3>
                <p>We offer affordable payment plans and welcome all private, NHS and emergency dental clients.</p>
              </div>
              
              <div className="feature-card reveal reveal-delay-2 glass-panel fade-in-up">
                <div className="icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Top Quality Work</h3>
                <p>Vastly experienced professionals utilizing the latest technology for precise, lasting results.</p>
              </div>
              
              <div className="feature-card reveal reveal-delay-3 glass-panel fade-in-up">
                <div className="icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Everyone Welcome</h3>
                <p>Families, children and nervous patients are always welcome in our relaxed environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="section-container">
            <div className="section-header reveal">
              <h2>Our Services</h2>
              <p>State-of-the-art treatments to achieve your perfect smile</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card reveal reveal-delay-1 glass-panel fade-in-up">
                <div className="service-card-bg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_soM68LjnmQ7DXbPaucur1tEYjnPSCj2xaJzqmvRqBUg-3vhj1WTHqw4EitZ7oT8mtbhvCyQ5ncgLvIEyilBSpWS4Zby9CLoedFI11cZfuif-grn-fp8BPnOiWRvPfV6Nuefx1WGsZlKxbN_EXDe0JSejkmU28UHOXNnq0TfQMGOIBUO4MwdpKKxhV-22Z_-7sFWkjrb8szvlKiBxowqxtwZlLBG48IjIYEnAHr5fx_I2jdpvkhWwee24BltXQzVcpZOBF1U6k8w" alt="Power Teeth Whitening" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>Power Teeth Whitening</h3>
                  <p>Advanced laser treatments for a brilliantly white smile.</p>
                </div>
              </div>

              <div className="service-card reveal reveal-delay-2 glass-panel fade-in-up">
                <div className="service-card-bg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOpPPwg7Xw7knGt-npfjGAdsjnI_VUPbzO3tZPuQYobLjlPpuRVqfA65bkofbkXAAmpoM7etyxOuh_ohw7Ytc1Xtr0FFd2AGrDHhbrrRK3Ci71TFekbXelUrJ2EJlWwsNDcWi73yen-sSxDTKfRNsLGEFdW-D2Bgyi4qn5kELG0h5MjoJb9i-SjPfJrrNjW_-M0AEOlNWcWqtO5C4NDrJVFiivvneYe_zVaOSsqs44o1HnVuz0JoMxej9ZYcwjnyq4nlgkOZtj9g" alt="Dental Implants" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>Dental Implants</h3>
                  <p>Permanent, natural-looking tooth replacement solutions.</p>
                </div>
              </div>

              <div className="service-card reveal reveal-delay-3 glass-panel fade-in-up">
                <div className="service-card-bg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPztu2GJIkGdNmnN9EHR25zIfd4L4zCeiltVKLrnEEluj_7lJ17_lpMoaMYwDWhyxYJOiSxD5vB_7jEzBfiNRCj4sufbTtK8i2fb4h_6OqJpTqhqhwq5eh_5P3F-_e34sIpp6TvoyYGZNkfN4U1VGFtKwuhupE8SLOvXi1t31h73ED9f4W4BxBO0-QkpfKdcOtWvLMC8cSaIY9GacL3P7SJrpz0MtpMN5hkF1bpZfX5McvNGigS37dYxsZoef8cp8Sx5r5M7X7Duo" alt="Tooth Coloured Fillings" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>Tooth Coloured Fillings</h3>
                  <p>Seamless, aesthetically pleasing restorations for a natural look.</p>
                </div>
              </div>

              <div className="service-card reveal reveal-delay-1 glass-panel fade-in-up">
                <div className="service-card-bg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGhfBhG79CHqY3mE6-mli_gR1Z5PXp1-qOrQ6pbVbnhvYdQBNpUhErLihbe0eyHabAJCH7u-1tm55rwMqe0Klr2q4uQn0ue3Rg5YMWCowYpX5lxejegtyPEgF6Dt4ssPgrjLSB5z0MhImUb4v5eM_nD7FgwZPopABWZ4ccJ6MNlLKLjl9Jt8K_rlBW1-Nj1XYKqnb3UXIW6B5X3-CBjrGiJXOw0dLuItQ_2xKUkWHiRFMpodnQk3J5FDeIhseEhiu7qXE5RWgayxk" alt="Crowns and Bridges" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>Crowns and Bridges</h3>
                  <p>Durable, custom-crafted solutions to restore function and beauty.</p>
                </div>
              </div>

              <div className="service-card reveal reveal-delay-2 glass-panel fade-in-up">
                <div className="service-card-bg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnS9Bpqs-kwSktGEqZE7qurPSvgQYUAhKkTysWl5LgDVpXu6MVGrwIWdxcLcvFeax-f95DYU_OFqU-_5CQbC3KPqbpcP3cpLcwLqwWpBPxu7MdsMomBwomLyapzbUv4I_9jg5dOxniRjA8JDmnj5vry6Zfcg0DMDyqBNehDgcHYdLhxKSm_NgUaocnuuQVW6l6W4mWUPl8nlHgLwVcOlbMsBElVlGX3jZCyLYXgyncM3u0DhYZZsErT5kcJjT-CpIk2yaq3GYp5so" alt="Dental Makeovers" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>Dental Makeovers</h3>
                  <p>Comprehensive smile transformations tailored to your aesthetic goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / transformations */}
        <section className="gallery" id="gallery">
          <div className="section-container">
            <div className="section-header reveal">
              <h2>Smile Transformations</h2>
              <p>Swipe the slider to see before and after treatment transformations</p>
            </div>
            
            <div className="reveal" style={{ maxWidth: '850px', margin: '0 auto' }}>
              <BeforeAfterSlider 
                beforeImage="/before.png" 
                afterImage="/after.png" 
              />
            </div>
          </div>
        </section>

        {/* Reviews rolling marquee */}
        <ReviewMarquee />

        {/* AuraBix Lead Pitch */}
        <AuraBixPitch />

        {/* Footer */}
        <Footer onBookClick={() => setIsBookingOpen(true)} />

        {/* Dynamic Widgets */}
        <Chatbot />
        <FloatingWhatsApp />

        {/* Booking Form Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </DemoThemeProvider>
  );
}
