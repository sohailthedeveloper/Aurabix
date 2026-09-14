"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function NewShowcase() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth scroll parallax transitions for the browser mockup
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.85, 1])
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.6, 1])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] overflow-hidden pb-16 pt-8 z-40 border-b border-white/5 -mt-16 md:-mt-20"
      style={{ perspective: 1200 }}
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Schnell, sicher{" "}
            <span className="font-serif italic font-normal text-gradient-orange-pink">
              … und eine Augenweide
            </span>
          </h2>
        </motion.div>

        {/* Browser Mockup Card */}
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            transformOrigin: "top center"
          }}
          className="w-full rounded-[20px] md:rounded-[32px] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-2xl"
        >
          {/* Simulated Browser Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/5 bg-[#0a0a0a]">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-[280px] md:max-w-md mx-auto h-6 md:h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center px-4">
              <span className="text-[10px] md:text-xs text-white/40 tracking-wide font-sans select-none">
                aurabix.com/showcase
              </span>
            </div>

            {/* Layout spacer */}
            <div className="w-[50px] hidden sm:block" />
          </div>

          {/* Browser content: Showreel Video */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-top block"
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            />
            {/* Soft inner reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
