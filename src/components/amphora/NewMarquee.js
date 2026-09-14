"use client"

import { motion } from "framer-motion"
import { Compass, ShieldCheck, Heart, Coffee, Dumbbell, Flower, Ship, Package, Layers } from "lucide-react"

export default function NewMarquee() {
  const row1 = [
    { name: "Cord's Café", icon: Coffee, style: "font-serif italic font-semibold" },
    { name: "EVLTN Gym", icon: Dumbbell, style: "font-display font-black tracking-tighter" },
    { name: "Grechow's Beauty", icon: Flower, style: "font-serif tracking-widest uppercase font-light" },
    { name: "NOL Logistik", icon: Ship, style: "font-sans font-extrabold uppercase tracking-tight text-blue-900" },
    { name: "Remco Group", icon: Layers, style: "font-display font-bold tracking-wide" },
    { name: "Therapie Müller", icon: Heart, style: "font-sans font-medium text-emerald-800" },
    { name: "WIA Technologies", icon: ShieldCheck, style: "font-mono tracking-tight" }
  ]

  const row2 = [
    { name: "Stadtmusikanten", icon: Compass, style: "font-serif font-bold uppercase tracking-wider" },
    { name: "Uni Bremen", icon: Layers, style: "font-sans font-semibold tracking-tight text-red-800" },
    { name: "Clickless", icon: Package, style: "font-sans font-black uppercase text-amber-600" },
    { name: "Life Lounge Bar", icon: Coffee, style: "font-serif italic text-purple-900 font-semibold" },
    { name: "Oxzy Lab", icon: Compass, style: "font-mono font-bold tracking-widest text-indigo-700" },
    { name: "Clockwise", icon: ShieldCheck, style: "font-sans font-bold tracking-wide text-zinc-800" }
  ]

  // Duplicate arrays to ensure seamless looping
  const loopRow1 = [...row1, ...row1, ...row1, ...row1]
  const loopRow2 = [...row2, ...row2, ...row2, ...row2]

  return (
    <div className="relative z-45 transform-gpu -translate-y-24 md:-translate-y-36">
      <section
        id="logo-marquee"
        className="relative w-full bg-white overflow-hidden -mt-24 pt-16 pb-12 shadow-inner border-y border-gray-100"
      >
        {/* Subtle noise grid inside the white marquee banner */}
        <div className="absolute inset-0 bg-[url('/textures/noise-128.webp')] opacity-[0.02] pointer-events-none" />

        {/* Heading */}
        <div className="relative container mx-auto px-6 mb-8 text-center">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-black/40">
            Zusammen haben wir Großartiges geleistet
          </p>
        </div>

        {/* Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden py-3 w-full relative select-none">
          <div className="flex shrink-0 gap-16 flex-row animate-marquee items-center min-w-full">
            {loopRow1.map((logo, index) => {
              const Icon = logo.icon
              return (
                <div key={index} className="flex items-center gap-2.5 shrink-0 opacity-40 hover:opacity-85 transition-opacity duration-300">
                  <Icon className="w-5 h-5 text-black shrink-0" />
                  <span className={`text-base sm:text-lg text-black ${logo.style}`}>
                    {logo.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Space */}
        <div className="h-4 sm:h-6" />

        {/* Row 2 (Scrolling Right) */}
        <div className="flex overflow-hidden py-3 w-full relative select-none">
          <div className="flex shrink-0 gap-16 flex-row animate-marquee-reverse items-center min-w-full">
            {loopRow2.map((logo, index) => {
              const Icon = logo.icon
              return (
                <div key={index} className="flex items-center gap-2.5 shrink-0 opacity-40 hover:opacity-85 transition-opacity duration-300">
                  <Icon className="w-5 h-5 text-black shrink-0" />
                  <span className={`text-base sm:text-lg text-black ${logo.style}`}>
                    {logo.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
