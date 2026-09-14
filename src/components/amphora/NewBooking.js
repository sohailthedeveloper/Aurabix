"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock } from "lucide-react"

export default function NewBooking() {
  const containerRef = useRef(null)
  const widgetRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded) {
            // Append Calendly external script
            const script = document.createElement("script")
            script.src = "https://assets.calendly.com/assets/external/widget.js"
            script.async = true
            script.onload = () => {
              if (window.Calendly && widgetRef.current) {
                window.Calendly.initInlineWidget({
                  url: "https://calendly.com/aurabix-digital/30min?hide_event_type_details=1&background_color=050505&text_color=ffffff&primary_color=DFBA73",
                  parentElement: widgetRef.current,
                  prefill: {},
                  utm: {}
                })
                setLoaded(true)
              }
            }
            document.head.appendChild(script)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "200px 0px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [loaded])

  return (
    <section
      id="calendly"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5 rounded-t-[40px] md:rounded-t-[80px]"
    >
      {/* Background neon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[350px] bg-gradient-to-b from-gold/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Sichere dir deinen <br />
              <span className="font-serif italic font-normal text-gradient-gold">
                Designentwurf
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-md mx-auto font-light">
              Wähle einen freien Termin aus und sichere dir einen kostenlosen Erstentwurf.
            </p>
          </motion.div>
        </div>

        {/* Layout Grid: Left checklist, Right Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left checklist (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 bg-white/[0.01] border border-white/[0.04] p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-xs">
              <Clock className="w-4.5 h-4.5" />
              <span>Das erwartet dich:</span>
            </div>

            <ul className="space-y-5">
              {[
                { title: "30 Min. Erstgespräch", desc: "Wir analysieren deine aktuelle Situation und besprechen, wie wir deine Ziele digital umsetzen können." },
                { title: "Kostenloser Entwurf", desc: "Wir erstellen innerhalb von 7 Tagen einen individuellen Designentwurf deiner neuen Website." },
                { title: "Präsentation & Feedback", desc: "Wir präsentieren dir den Entwurf live. Erst wenn du begeistert bist, sprechen wir über Preise." },
                { title: "Kein Risiko", desc: "Absolut unverbindlich. Wenn der Entwurf nicht passt, gehst du kein Risiko und keine Verpflichtung ein." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-semibold leading-tight">{item.title}</h4>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Calendly Frame (8 cols) */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl shadow-3xl overflow-hidden min-h-[600px] flex items-center justify-center relative">
            <div 
              ref={widgetRef} 
              id="calendly-inline-container" 
              className="w-full h-full min-h-[600px]"
            />
            
            {/* Loading Indicator */}
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#050505] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
                <span className="text-xs text-white/40 font-light">Kalender wird geladen...</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
