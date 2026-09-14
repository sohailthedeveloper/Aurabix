"use client"

import { motion } from "framer-motion"
import { MapPin, Sparkles, TrendingUp } from "lucide-react"

export default function NewQuality() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section
      id="qualitaet"
      className="relative bg-[#050505] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-40 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] border-b border-white/5 pt-16 pb-24 md:pb-36"
    >
      {/* Background glow layers */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-emerald-900/10 via-teal-900/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-gradient-to-r from-lime-500/20 via-emerald-500/20 to-teal-500/20 blur-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Mit{" "}
            <span className="font-serif italic font-normal text-gradient-orange-pink">
              Herz
            </span>{" "}
            gebaut <br className="hidden sm:inline" />
            für dein Geschäft
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Unsere strategischen Qualitätsstandards haben sich im Wettbewerb bewährt.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {/* Left Block: Premium Consultation / Work Image */}
          <motion.div
            variants={cardVariants}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=960&q=80"
              alt="Persönliche Beratung mit dem AuraBix-Team"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Visual gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] pointer-events-none rounded-3xl" />
            
            {/* Overlay badge info */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold/20">
                1-on-1 Strategy
              </span>
              <p className="text-white font-semibold text-lg mt-2">Maßgeschneiderte digitale Infrastruktur.</p>
            </div>
          </motion.div>

          {/* Right Block: Neon Glowing Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-full lg:grid-rows-[2fr_1fr]">
            
            {/* Card 1: Lokal & persönlich (Orange theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border border-orange-500/10 shadow-[0_8px_32px_-12px_rgba(249,115,22,0.15)] bg-white/[0.02]"
              style={{
                boxShadow: "inset 0 0 24px -12px rgba(249,115,22,0.1)"
              }}
            >
              {/* Card top radial glow */}
              <div className="absolute inset-0 rounded-2xl bg-radial-at-t from-orange-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mx-auto sm:mx-0 w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold tracking-tight text-white text-lg md:text-xl">
                  Lokal &{" "}
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                    persönlich
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-white/50 mt-2 leading-relaxed">
                  Direkter Draht zum Entwickler & Gründer. Keine Mittelsmänner, keine Callcenter.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Mehr als nur hübsch (Purple theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border border-purple-500/10 shadow-[0_8px_32px_-12px_rgba(139,92,246,0.15)] bg-white/[0.02]"
              style={{
                boxShadow: "inset 0 0 24px -12px rgba(139,92,246,0.1)"
              }}
            >
              {/* Card top radial glow */}
              <div className="absolute inset-0 rounded-2xl bg-radial-at-t from-purple-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mx-auto sm:mx-0 w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold tracking-tight text-white text-lg md:text-xl">
                  Mehr als{" "}
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                    nur hübsch
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-white/50 mt-2 leading-relaxed">
                  Konzipiert nach psychologischen Verkaufsstrategien, um Besucher in Kunden zu verwandeln.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Spans full width on sm (Emerald theme) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="sm:col-span-2 group relative rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 transition-all duration-300 border border-emerald-500/10 shadow-[0_8px_32px_-12px_rgba(16,185,129,0.15)] bg-white/[0.02]"
              style={{
                boxShadow: "inset 0 0 24px -12px rgba(16,185,129,0.1)"
              }}
            >
              {/* Card top radial glow */}
              <div className="absolute inset-0 rounded-2xl bg-radial-at-l from-emerald-500/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold tracking-tight text-white text-lg md:text-xl">
                  Für Unternehmen, die{" "}
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    wachsen
                  </span>{" "}
                  wollen
                </h3>
                <p className="text-xs sm:text-sm text-white/50 mt-1.5 leading-relaxed">
                  Speziell optimiert für lokale Dienstleister, Arztpraxen, hochwertige Online-Shops und B2B-Kunden.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
