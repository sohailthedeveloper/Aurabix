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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20am%20interested%20in%20scaling%20my%20business%20to%20the%20next%20level%20with%20AuraBix%21"

  return (
    <section ref={containerRef} className="relative flex flex-col items-center justify-center min-h-[100dvh] py-32 overflow-hidden px-6 bg-[#000000]">
      
      {/* High-Performance Radial Gradient Aura Backdrops (No CSS Blurs for 60+ FPS on Mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Indigo Aura */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] md:w-[80%] aspect-square opacity-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 70%)"
          }}
        />
        
        {/* Clippinit Ambient Glow */}
        <div className="ambient-glow opacity-80" />
        
        {/* Hardware-Accelerated 2D Rotating Ring (Desktop Only, Completely hidden on Mobile to prevent rendering lag) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-20 transform-gpu pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] rounded-full border border-gold/15 border-dashed transform-gpu"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] rounded-full border border-white/5 transform-gpu"
          />
        </div>
        
        {/* High-Performance Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)"
          }}
        />
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto transform-gpu"
      >
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
          className="font-display text-4xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight mb-8 leading-[1.1] drop-shadow-2xl"
        >
          AI-Powered <br className="hidden md:block" />
          <span className="text-gradient-gold drop-shadow-[0_0_40px_rgba(223,186,115,0.2)]">Business Development.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-2xl text-muted max-w-3xl mb-14 leading-relaxed font-sans font-light px-4"
        >
          AuraBix is a next-gen digital architect. We don't just build websites; we engineer autonomous AI systems that lower acquisition costs and scale your elite brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4"
        >
          <button 
            onClick={() => openContactModal()}
            className="clippinit-btn w-full sm:w-auto text-sm"
          >
            <span>Book a Strategy Call</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <a
            href="#portfolio"
            className="glass-button w-full sm:w-auto px-10 py-4.5 rounded-full font-sans font-bold tracking-wide text-offwhite hover:text-white flex items-center justify-center transform-gpu"
          >
            Explore Projects
          </a>
        </motion.div>
      </motion.div>
      
      {/* Bottom organic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
