"use client"

import { motion } from "framer-motion"
import { openContactModal } from "@/components/ContactModal"

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20am%20interested%20in%20scaling%20my%20business%20to%20the%20next%20level%20with%20AuraBix%21"

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] py-32 overflow-hidden px-6 bg-[#05040a]">
      
      {/* High-Performance Radial Gradient Aura Backdrops (No CSS Blurs for 60+ FPS on Mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Indigo Aura */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] md:w-[80%] aspect-square opacity-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 70%)"
          }}
        />
        {/* Soft Violet/Plum Aura */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[120%] md:w-[80%] aspect-square opacity-50 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(139, 92, 246, 0) 70%)"
          }}
        />
        {/* Subtle Champagne Accent Glow */}
        <div 
          className="absolute top-[20%] right-[10%] w-[100%] md:w-[60%] aspect-square opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(223, 186, 115, 0.04) 0%, rgba(223, 186, 115, 0) 60%)"
          }}
        />
        
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
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto transform-gpu">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/5 bg-white/3 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-muted uppercase">Elite Digital Infrastructure</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight mb-8 leading-[1.1] drop-shadow-2xl"
        >
          We Architect <br className="hidden md:block" />
          <span className="text-gradient-gold drop-shadow-[0_0_40px_rgba(223,186,115,0.2)]">Exponential Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-2xl text-muted max-w-3xl mb-14 leading-relaxed font-sans font-light px-4"
        >
          AuraBix is a world-class digital partner for ambitious brands. We build high-converting web systems, engineer aggressive organic search dominance, and scale premium marketing ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4"
        >
          <button 
            onClick={() => openContactModal()}
            className="group relative w-full sm:w-auto overflow-hidden px-10 py-4.5 rounded-full bg-gradient-to-r from-gold to-[#B45309] text-black font-bold font-sans tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(223,186,115,0.35)] flex items-center justify-center gap-3 transform-gpu cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#portfolio"
            className="glass-button w-full sm:w-auto px-10 py-4.5 rounded-full font-sans font-bold tracking-wide text-offwhite hover:text-white flex items-center justify-center transform-gpu"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
      
      {/* Bottom organic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05040a] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
