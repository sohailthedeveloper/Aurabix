"use client"

import { motion } from "framer-motion"
import { PhoneCall, FileText, Code2, Rocket, ArrowUpRight } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function NewProcess() {
  const steps = [
    {
      num: "01",
      icon: PhoneCall,
      title: "Kostenloses Erstgespräch",
      desc: "In 30 Minuten besprechen wir deine Ziele. Lieber per Mail oder Anruf? Auch das funktioniert.",
      color: "from-orange-500 to-red-500",
      glow: "rgba(249, 115, 22, 0.15)"
    },
    {
      num: "02",
      icon: FileText,
      title: "Kostenloser Entwurf",
      desc: "Innerhalb von 7 Tagen erhältst du deinen Designentwurf. Wir gehen ihn gemeinsam durch und passen ihn an.",
      color: "from-purple-500 to-pink-500",
      glow: "rgba(168, 85, 247, 0.15)"
    },
    {
      num: "03",
      icon: Code2,
      title: "Wir entwickeln deine Website",
      desc: "Sobald der Entwurf passt, setzen wir dein Projekt um. Du bekommst regelmäßig Updates zum Fortschritt.",
      color: "from-blue-500 to-cyan-500",
      glow: "rgba(59, 130, 246, 0.15)"
    },
    {
      num: "04",
      icon: Rocket,
      title: "Launch & Übergabe",
      desc: "Auch im Nachhinein kannst du Änderungen selbst vornehmen oder unseren Wartungsservice nutzen.",
      color: "from-emerald-500 to-teal-500",
      glow: "rgba(16, 185, 129, 0.15)"
    }
  ]

  const handleCtaClick = () => {
    openContactModal({ service: "Website Design", budget: "Premium (3000€+)" })
  }

  return (
    <section id="prozess" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              So einfach geht&apos;s, <br className="sm:hidden" />
              <span className="font-serif italic font-normal text-gradient-purple">
                in 4 Schritten
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-lg mx-auto">
              So wird aus deinem Traum eine fertige Website.
            </p>
          </motion.div>
        </div>

        {/* Timeline Steps */}
        <div className="relative border-l border-white/10 ml-6 md:ml-32 space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Timeline connector dot */}
                <span className="absolute -left-[9px] top-1.5 w-[17px] h-[17px] rounded-full bg-obsidian border-2 border-white/30 group-hover:border-gold transition-colors duration-300 z-10" />

                {/* Left floating number on desktop */}
                <div className="absolute left-[-160px] top-0 hidden md:flex items-center gap-2 w-28 justify-end select-none">
                  <span className={`text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${step.color} opacity-60`}>
                    {step.num}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors duration-300" />
                </div>

                {/* Step Card */}
                <div
                  className="relative p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 shadow-xl"
                  style={{
                    boxShadow: `inset 0 0 20px -10px ${step.glow}`
                  }}
                >
                  {/* Neon radial glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${step.glow} 0%, transparent 60%)`
                    }}
                  />

                  {/* Header content */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Small number for mobile */}
                    <span className={`text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${step.color} md:hidden`}>
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${step.color} text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action at end of process */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleCtaClick}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            style={{
              boxShadow: "0 10px 30px -8px rgba(255,255,255,0.2)"
            }}
          >
            <span className="relative z-10">Kostenlosen Entwurf sichern</span>
            <ArrowUpRight className="w-4.5 h-4.5 relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}
