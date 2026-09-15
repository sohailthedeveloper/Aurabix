"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { openContactModal } from "@/components/ContactModal"

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20am%20interested%20in%20scaling%20my%20business%20to%20the%20next%20level%20with%20AuraBix%21"

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden px-4 md:px-6 bg-[#000000]">
      
      {/* High-Performance Radial Gradient Aura Backdrops */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Indigo Aura aligned to left */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] md:w-[60%] aspect-square opacity-50 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(99, 102, 241, 0) 70%)"
          }}
        />
        
        {/* Clippinit Ambient Glow on right */}
        <div className="ambient-glow opacity-60 ml-[30%]" />
      </div>

      {/* Hero Content - Two Column Structured Layout */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-[90rem] mx-auto transform-gpu grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        {/* LEFT COLUMN: The Pitch */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pill-badge mb-8">
              Elite Digital Infrastructure
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-xl"
          >
            Engineered For <br className="hidden md:block"/>
            <span className="text-gradient-gold drop-shadow-[0_0_40px_rgba(223,186,115,0.2)]">High-Ticket Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-muted max-w-xl mb-10 leading-relaxed font-sans font-light"
          >
            We don't just build websites. We architect premium, autonomous digital systems that dramatically lower acquisition costs and position you as the elite choice in your market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button 
              onClick={() => openContactModal()}
              className="clippinit-btn w-full sm:w-auto text-sm"
            >
              <span>Book a Strategy Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <a
              href="#portfolio"
              className="glass-button w-full sm:w-auto px-8 py-3.5 rounded-full font-sans font-bold tracking-wide text-offwhite hover:text-white flex items-center justify-center transform-gpu text-sm"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Proof (Floating UI Mockups) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Main Dashboard Mockup */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[110%] rounded-2xl clippinit-card p-2 overflow-hidden shadow-2xl shadow-gold/5 border border-white/10 bg-[#05040a]/80 backdrop-blur-3xl z-10">
            <div className="w-full h-8 border-b border-white/5 flex items-center px-4 gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <img src="/marketing_dashboard.png" alt="Marketing Dashboard" className="w-full rounded-lg opacity-80" />
          </div>

          {/* Floating Metric Card 1: ROI */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-20 z-20 clippinit-card px-6 py-4 rounded-xl flex items-center gap-4 bg-[#0a0805]/95 shadow-xl border border-gold/20 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-muted tracking-widest uppercase font-bold mb-0.5">Average ROI</p>
              <p className="text-xl font-display font-bold text-white">+400%</p>
            </div>
          </motion.div>

          {/* Floating Metric Card 2: Live Traffic */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-24 z-20 clippinit-card px-6 py-4 rounded-xl flex items-center gap-4 bg-[#0a0805]/95 shadow-xl border border-white/10 backdrop-blur-xl"
          >
             <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div>
              <p className="text-[10px] text-muted tracking-widest uppercase font-bold mb-0.5">Live Traffic Check</p>
              <p className="text-sm font-sans text-white/90">High Conversion State</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Bottom organic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
