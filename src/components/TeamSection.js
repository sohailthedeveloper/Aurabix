"use client"

import { motion } from "framer-motion"

export default function TeamSection() {
  const team = [
    {
      name: "Sohail Shaikh",
      role: "Founder & CEO",
      image: "/founder.jpg",
      focus: "AI Architecture & Strategy"
    },
    {
      name: "Ayush Tyagi",
      role: "Director of Partnerships",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      focus: "Client Growth & Acquisitions"
    },
    {
      name: "Jackson Machado",
      role: "Client Representative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      focus: "European Market Expansion"
    }
  ]

  return (
    <section id="team" className="relative py-20 lg:py-32 overflow-hidden bg-[#000000] z-40">
      {/* Clippinit Ambient Glow Background */}
      <div className="ambient-glow opacity-70" />

      <div className="px-6 sm:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="pill-badge mb-6">
            The Architects
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6 px-2">
            Engineered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">Experts.</span>
          </h2>
          <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto font-light px-4">
            We are not just developers. We are business growth engineers building autonomous AI systems that dominate markets.
          </p>
        </motion.div>

        {/* 3-Column Glassmorphic Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/[0.06] hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 aspect-[4/5] md:aspect-[3/4]"
              style={{
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8)"
              }}
            >
              {/* Portrait Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform-gpu">
                <motion.div 
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.focus}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm font-medium tracking-wide">
                    {member.role}
                  </p>
                </motion.div>
                
                {/* Thin animated line */}
                <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent mt-5 transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
