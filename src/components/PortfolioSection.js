"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const portfolios = [
  {
    id: 1,
    title: "Zenith Premium Dental Platform V2",
    category: "Web Architecture & Organic SEO",
    image: "/dental_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Local SEO Schema", "Framer Motion"],
    highlights: [
      "Engineered high-converting booking funnels for high-ticket dental implants",
      "Ranked #1 on Google local search for premium cosmetic dental terms in 90 days",
      "Boosted organic new-patient consultations by 340% within 4 months"
    ],
    link: "https://dentist-aurabix-digital-118cc63d.vercel.app"
  },
  {
    id: 2,
    title: "Luxe MedSpa & Saloon Ecosystem",
    category: "Luxury Reservation Funnel & UX Design",
    image: "/medspa_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Headless CMS", "Automation Integrations"],
    highlights: [
      "Designed a sleek glassmorphic booking interface tailored to elite spa clients",
      "Built automated WhatsApp and SMS appointment confirmation flows",
      "Reduced reservation drop-offs by 48% through optimized local user experiences"
    ],
    link: "https://saloon-one-alpha.vercel.app"
  },
  {
    id: 3,
    title: "Dream Doors Realty Portal",
    category: "Premium Real Estate & Geolocation Funnels",
    image: "/corporate_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Mapbox APIs", "WhatsApp Lead Engine"],
    highlights: [
      "Engineered an ultra-luxurious, responsive real estate listings portal",
      "Integrated interactive geolocation property filters and search indexing",
      "Constructed automated WhatsApp scheduler scheduling for premium property viewings"
    ],
    link: "https://dreamdoorsrealty.com"
  }
]

// Duplicate the array to create an infinite scroll illusion
const extendedPortfolios = [...portfolios, ...portfolios, ...portfolios, ...portfolios];

export default function PortfolioSection() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20saw%20your%20real%20portfolio%20creations%20and%20would%20love%20to%20engineer%20similar%20growth%20for%20my%20business%21"
  
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Smooth Auto-scroll logic (does not fight with CSS snap)
  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      if (sliderRef.current && !isDragging && !isHovered) {
        sliderRef.current.scrollLeft += 1; // Scroll speed
        // Reset seamlessly when we scroll past a full duplicate set
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
           sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 4;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovered]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Fast scroll speed when dragging
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 px-4 md:px-6 relative z-10 bg-[#000000] overflow-hidden">
      {/* Clippinit Diagonal Glow Background */}
      <div className="absolute inset-0 z-0 bg-[#0c0804] diagonal-cut opacity-40 pointer-events-none" />
      <div className="ambient-glow opacity-50 diagonal-cut pointer-events-none" />
      
      <div className="max-w-[100rem] mx-auto transform-gpu relative z-10">
        
        {/* Headings */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16 text-center md:text-left md:flex md:items-end md:justify-between transform-gpu px-4 md:px-8"
        >
          <div className="max-w-2xl">
            <div className="pill-badge mb-6">Case Studies</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight px-2 md:px-0">
              Elite Digital <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-muted text-base md:text-lg font-light leading-relaxed px-2 md:px-0">
              Explore the actual production platforms we have engineered, showcasing real speed, high conversion rates, and live deployments.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="flex items-center gap-3 text-muted/60 text-xs font-semibold tracking-widest uppercase">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Swipe or Drag to Explore
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clippinit-btn text-sm"
            >
              <span>Start Your Transformation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-3 mb-8 text-muted/60 text-xs font-semibold tracking-widest uppercase md:hidden">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Swipe to explore
        </div>

        {/* Portfolio Slider Container (No CSS Snap to prevent Javascript stutter) */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          className={`flex gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 px-4 md:px-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} transform-gpu relative`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide Webkit Scrollbar */}
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

          {extendedPortfolios.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group/card flex flex-col justify-between p-5 md:p-6 transform-gpu clippinit-card w-[85vw] md:w-[420px] lg:w-[460px] shrink-0"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              {/* Image Container with Floating Badges */}
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-xl mb-6 border border-white/10 aspect-[16/9] transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-300" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover/card:scale-105 transform-gpu"
                    draggable="false"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#05040a] bg-gold font-sans shadow-lg">
                    Live Production
                  </span>
                </a>

                {/* Info & Category */}
                <p className="text-electric font-semibold text-[11px] md:text-xs tracking-widest uppercase mb-2">
                  {item.category}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-offwhite group-hover/card:text-gold transition-colors duration-300 mb-5">
                    {item.title}
                  </h3>
                </a>

                {/* Highlights list scaled down */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-muted text-xs md:text-sm font-light font-sans">
                      <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Connect CTA */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium tracking-wide text-muted/80 bg-white/3 border border-white/5 font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-lg bg-white/3 border border-white/10 hover:border-gold/40 text-center font-bold tracking-wider uppercase text-[11px] md:text-xs text-offwhite hover:text-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,186,115,0.15)] flex items-center justify-center gap-2 group-hover/card:bg-white/5 transform-gpu"
                >
                  Visit Live Production Platform
                  <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA on mobile */}
        <div className="mt-2 text-center md:hidden transform-gpu px-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full clippinit-btn text-sm"
          >
            <span>Start Your Transformation</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

