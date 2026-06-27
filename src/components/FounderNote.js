"use client"

import { motion } from "framer-motion"
import { openContactModal } from "@/components/ContactModal"

export default function FounderNote() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20would%20love%20to%20collaborate%20directly%20with%20you%20on%20scaling%20my%20business%20digital%20footprint%21"

  return (
    <section id="founder" className="py-14 md:py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Overlapping Portraits Collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative transform-gpu"
          >
            {/* Collage Container */}
            <div className="relative w-full max-w-[360px] md:max-w-[480px] mx-auto aspect-square flex items-center justify-center mt-4 lg:mt-0 transform-gpu">
              
              {/* Back Image (founder2) */}
              <div className="absolute top-0 right-4 w-[60%] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 transform-gpu rotate-6 group transition-all duration-500 hover:rotate-2 hover:scale-105">
                <img 
                  src="/founder2.png" 
                  alt="Sohail Shaikh Founder Case Study Setup" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05040a] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              
              {/* Front Image (founder1) */}
              <div className="absolute bottom-0 left-4 w-[62%] aspect-[4/5] rounded-3xl overflow-hidden border border-gold/20 shadow-2xl z-10 transform-gpu -rotate-3 group transition-all duration-500 hover:rotate-0 hover:scale-105">
                <img 
                  src="/founder.jpg" 
                  alt="Sohail Shaikh Founder & CEO AuraBix" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05040a] via-transparent to-transparent opacity-75 pointer-events-none" />
                <span className="absolute bottom-4 left-4 z-20 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gold bg-[#05040a]/90 backdrop-blur-md border border-gold/20 font-sans shadow-lg">
                  Sohail Shaikh
                </span>
              </div>

              {/* High-Performance Radial Gradient Glows (No CSS filter blurs) */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(223, 186, 115, 0.08) 0%, rgba(223, 186, 115, 0) 70%)"
                }}
              />
              <div 
                className="absolute -inset-4 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(139, 92, 246, 0) 70%)"
                }}
              />
            </div>
          </motion.div>
          
          {/* Note Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="transform-gpu"
          >
            <div className="inline-block mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">Founding Philosophy</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Built for <span className="text-gradient-gold">Scale.</span>
            </h1>
            
            <div className="space-y-6 text-base md:text-lg text-muted font-sans font-light leading-relaxed">
              <p>
                I founded AuraBix with one uncompromising objective: to transition professional businesses and high-ticket brands into dominant local and global market leaders.
              </p>
              <p>
                Most modern agencies sell commoditized templates, lazy SEO frameworks, and cookie-cutter ad campaigns that drain capital. AuraBix functions as an extension of your board. We don&apos;t simply design sites; we architect exponential digital infrastructure.
              </p>
              <p>
                If you operate a premium healthcare clinic, a luxury spa group, or an ambitious professional enterprise looking to scale client acquisition aggressively, your web presence must act as a reflection of your elite standards. That is precisely what we build. Let&apos;s engineer your dominance.
              </p>
            </div>
            
            {/* Signature Block */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between border-t border-white/5 pt-6">
              <div className="border-l-2 border-gold pl-6">
                <h3 className="font-display text-2xl font-bold text-offwhite">Sohail Shaikh</h3>
                <p className="text-electric font-medium tracking-widest uppercase text-xs mt-1">Founder & CEO, AuraBix</p>
              </div>
              
              <button
                onClick={() => openContactModal()}
                className="glass-button px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-offwhite hover:text-gold flex items-center gap-2 transform-gpu cursor-pointer"
              >
                Direct Connect
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
