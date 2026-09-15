"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Zap, Sliders, ShieldCheck } from "lucide-react"

export default function NewTeam() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const team = [
    {
      name: "Sohail Shaikh",
      role: "Founder & CEO",
      image: "/founder.jpg"
    },
    {
      name: "Ayush Tyagi",
      role: "Director of Partnerships",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Jackson Machado",
      role: "Client Representative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ]

  const items = [
    {
      icon: Users,
      title: "Direct Partnership",
      desc: "You speak directly with the architects. No middlemen, no junior developers.",
      color: "#eab308", // Yellow-500
      glow: "rgba(234,179,8,0.06)"
    },
    {
      icon: Zap,
      title: "Edge-Deployed Speed",
      desc: "We build on Next.js 14 for millisecond load times and maximum SEO scores.",
      color: "#d97706", // Amber-600
      glow: "rgba(217,119,6,0.06)"
    },
    {
      icon: Sliders,
      title: "Bespoke Architecture",
      desc: "No templates. Every autonomous system is uniquely designed for your brand.",
      color: "#ca8a04", // Yellow-600
      glow: "rgba(202,138,4,0.06)"
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Growth",
      desc: "We function as an extension of your board, actively scaling your clinic.",
      color: "#b45309", // Amber-700
      glow: "rgba(180,83,9,0.06)"
    }
  ]

  return (
    <section id="team" className="relative py-20 lg:py-28 overflow-hidden bg-[#050505] z-40 border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="px-6 sm:px-8 max-w-6xl mx-auto">
        <p className="text-white/40 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-10 text-center select-none">
          The Architects Behind AuraBix
        </p>

        {/* Main Team Card */}
        <div
          className="relative rounded-[28px] overflow-hidden border border-white/[0.07] z-10"
          style={{
            background: "linear-gradient(145deg, #111111 0%, #0d0d0d 60%, #0f0d0c 100%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 40px 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: Avatar Stack */}
            <div className="relative lg:w-[50%] h-auto min-h-[400px] lg:min-h-[540px] flex flex-col items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06] p-8 gap-8">
              {/* Backlight effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(234,179,8,0.06) 0%, transparent 70%)"
                }}
              />

              <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-8">
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3.5 cursor-default group"
                  >
                    <div 
                      className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden border border-white/10"
                      style={{
                        boxShadow: "0 20px 48px rgba(0,0,0,0.6)"
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-xs md:text-sm font-semibold tracking-tight leading-tight">
                        {member.name}
                      </p>
                      <p className="text-white/40 text-[10px] md:text-xs mt-0.5 leading-tight">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Founder/CEO Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-1.5">
                  <span 
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      background: "linear-gradient(135deg, #eab308, #d97706)"
                    }}
                  />
                  <span className="text-white text-[9px] font-bold tracking-widest uppercase">
                    The Leadership Team
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Philosophy & 4 Pillars */}
            <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              
              {/* Quote Block */}
              <blockquote className="mb-7 relative">
                <span 
                  className="block text-5xl leading-none mb-1 select-none font-serif font-bold text-transparent bg-clip-text"
                  style={{
                    background: "linear-gradient(135deg, #eab308, #d97706)"
                  }}
                >
                  &ldquo;
                </span>
                <p className="text-white text-base lg:text-lg font-light leading-relaxed tracking-tight -mt-2">
                  We do not simply design sites; we architect exponential digital infrastructure.
                </p>
              </blockquote>

              {/* Custom Thin Gradient Line */}
              <div 
                className="h-[2.5px] rounded-full mb-8"
                style={{
                  width: 96,
                  background: "linear-gradient(90deg, #eab308, #d97706, #ca8a04, #b45309)"
                }}
              />

              {/* 4 Pillars Interactive List */}
              <div className="space-y-3.5">
                {items.map((item, idx) => {
                  const ItemIcon = item.icon
                  const isHovered = hoveredIdx === idx
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="flex items-start gap-4 cursor-default select-none rounded-xl p-3 -mx-3 transition-all duration-200"
                      style={{
                        background: isHovered ? item.glow : "transparent"
                      }}
                    >
                      <div 
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 border"
                        style={{
                          background: isHovered ? `${item.color}15` : "rgba(255,255,255,0.03)",
                          borderColor: isHovered ? `${item.color}35` : "rgba(255,255,255,0.05)",
                          color: isHovered ? item.color : "rgba(255,255,255,0.4)"
                        }}
                      >
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-white/50 text-xs md:text-sm mt-0.5 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Table stats below */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-white/40 tracking-wide font-light">
                <span>50+ Elite Brands Scaled</span>
                <span className="text-white/10">&bull;</span>
                <span>5-Star Agency</span>
                <span className="text-white/10">&bull;</span>
                <span>Worldwide Architecture</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
