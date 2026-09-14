"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Star, ArrowUpRight } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function NewHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normal position between -0.5 and 0.5
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleCtaClick = () => {
    openContactModal({ service: "Website Design", budget: "Premium (3000€+)" })
  }

  // Avatars list
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  ]

  return (
    <section
      id="start"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020012] pt-28 pb-16 lg:pt-36 lg:pb-12"
    >
      {/* Background Parallax Gradients & Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('/textures/noise-128.webp')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Dot Grid Map */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1.5px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Dynamic Glow Layers (moving slightly with mouse) */}
        <motion.div
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40
          }}
          transition={{ type: "spring", stiffness: 75, damping: 25 }}
          className="absolute bottom-0 left-0 right-0 w-full h-[400px] bg-gradient-to-t from-purple-900/30 via-blue-900/10 to-transparent blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            x: mousePosition.x * -70,
            y: mousePosition.y * -70
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[85%] h-[350px] bg-gradient-to-r from-blue-600/40 via-pink-600/40 to-orange-500/40 blur-[100px] opacity-70 rounded-full"
        />
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 xl:px-12 max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        {/* Customer Badge stack */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md"
        >
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-[#020012] overflow-hidden shrink-0 shadow-lg">
                <img src={src} alt="Client avatar" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start text-xs">
            <span className="text-white font-semibold">50+ zufriedene Kunden</span>
            <div className="flex items-center gap-0.5 text-gold mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-white/60 ml-1.5 font-medium">5.0 Sterne bei Google</span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            <span className="font-serif italic font-normal text-gradient-orange-pink block sm:inline pr-2">
              Million-Dollar-Website?
            </span>
            <br className="hidden sm:inline" />
            <span>Gibt&apos;s bei </span>
            <span className="relative inline-block text-white">
              uns.
              {/* Animated Scribble Wavy Underline */}
              <svg viewBox="0 0 100 10" fill="none" className="absolute -bottom-2 left-0 w-full h-[10px] text-gold">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  d="M3 6 C 25 1, 55 10, 97 4 C 75 8, 40 2, 10 7"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-10"
        >
          Professionelle <span className="font-semibold text-white">Websites</span>,{" "}
          <span className="font-semibold text-white">Landingpages</span> &{" "}
          <span className="font-semibold text-white">Online-Shops</span>. Erhalte deinen ersten Designentwurf in nur{" "}
          <span className="font-semibold text-gold underline decoration-wavy underline-offset-4">7 Tagen</span> – komplett{" "}
          <span className="font-semibold text-white">kostenlos & unverbindlich</span>.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:w-auto relative z-30"
        >
          <button
            onClick={handleCtaClick}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-[#0a0a0a] text-white text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto shadow-2xl cursor-pointer"
            style={{
              boxShadow: "0 20px 40px -10px rgba(139,92,246,0.3)"
            }}
          >
            {/* Shifting Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/50 to-orange-500/40 opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-purple-600/80 to-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Inner Border Highlight */}
            <span className="absolute inset-0 pointer-events-none rounded-2xl" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)" }} />

            {/* Shine effect */}
            <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <span className="absolute top-0 -left-1/2 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-[25deg] transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
            </span>

            <span className="relative z-10 whitespace-nowrap">Kostenlosen Entwurf sichern</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20 pointer-events-none" />
    </section>
  )
}
