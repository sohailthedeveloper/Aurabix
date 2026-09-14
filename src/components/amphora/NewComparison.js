"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Star } from "lucide-react"

export default function NewComparison() {
  const rows = [
    {
      name: "AuraBix",
      desc: "Expertengetrieben und auf höchste Qualität ausgelegt. Volles Ergebnis und volle Betreuung, ganz ohne eigene Mitarbeiter einzustellen.",
      metrics: { speed: 5, flex: 5, quality: 5, scale: 5, value: 5 },
      isAuraBix: true
    },
    {
      name: "In-House-Team",
      desc: "Eine feste Kraft sichert Konsistenz, birgt aber das Risiko begrenzter Expertise, obwohl du laufend dafür zahlst.",
      metrics: { speed: 3, flex: 3, quality: 4, scale: 2, value: 2 },
      isAuraBix: false
    },
    {
      name: "Kreativagenturen",
      desc: "Agenturen bieten Struktur, aber meist mit hohen Kosten, langen Timelines und wenig Flexibilität für dein Projekt.",
      metrics: { speed: 2, flex: 2, quality: 5, scale: 4, value: 1 },
      isAuraBix: false
    },
    {
      name: "Freelance",
      desc: "Freelancer liefern oft günstige Designleistung, es fehlt aber meist an Konsistenz, Verlässlichkeit und echter Zusammenarbeit.",
      metrics: { speed: 4, flex: 4, quality: 3, scale: 2, value: 3 },
      isAuraBix: false
    },
    {
      name: "DIY-Baukasten",
      desc: "DIY-Tools wie Website-Baukästen sind budgetfreundlich, aber strategisches Denken und Originalität darfst du nicht erwarten.",
      metrics: { speed: 3, flex: 2, quality: 1, scale: 1, value: 4 },
      isAuraBix: false
    }
  ]

  const ratingStars = (score) => {
    return (
      <div className="flex gap-0.5 justify-center">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
              i < score ? "bg-gold" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="vergleich" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Jede Option hat ihren Preis. <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-gradient-gold">
                Nicht nur in Euro.
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-lg mx-auto">
              Ein ehrlicher Vergleich der verschiedenen Wege zu deiner neuen Website.
            </p>
          </motion.div>
        </div>

        {/* Desktop Comparison Table (Hidden on Mobile) */}
        <div className="hidden lg:block w-full overflow-hidden border border-white/[0.04] rounded-3xl bg-white/[0.01] shadow-2xl p-8">
          <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] gap-4 items-center border-b border-white/5 pb-6 mb-6 text-xs uppercase font-bold tracking-wider text-white/50">
            <div>Plattform</div>
            <div className="text-center">Geschwindigkeit</div>
            <div className="text-center">Flexibilität</div>
            <div className="text-center">Qualität</div>
            <div className="text-center">Skalierbarkeit</div>
            <div className="text-center">Preis-Leistung</div>
          </div>

          <div className="space-y-4">
            {rows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`grid grid-cols-[2.5fr_repeat(5,1fr)] gap-4 items-center p-6 rounded-2xl border transition-all duration-300 ${
                  row.isAuraBix
                    ? "bg-white/[0.03] border-purple-500/30 shadow-[0_8px_32px_rgba(139,92,246,0.1)]"
                    : "bg-[#050505] border-white/5 hover:bg-white/[0.01]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-base font-bold tracking-tight ${row.isAuraBix ? "text-gold" : "text-white"}`}>
                      {row.name}
                    </span>
                    {row.isAuraBix && (
                      <span className="px-2 py-0.5 text-[8px] uppercase tracking-wider font-extrabold bg-gold/15 text-gold border border-gold/20 rounded-full">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-light mt-1.5 pr-4">
                    {row.desc}
                  </p>
                </div>
                <div className="text-center">{ratingStars(row.metrics.speed)}</div>
                <div className="text-center">{ratingStars(row.metrics.flex)}</div>
                <div className="text-center">{ratingStars(row.metrics.quality)}</div>
                <div className="text-center">{ratingStars(row.metrics.scale)}</div>
                <div className="text-center">{ratingStars(row.metrics.value)}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion/Cards Layout (Visible on Mobile) */}
        <div className="lg:hidden space-y-6">
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-2xl border ${
                row.isAuraBix
                  ? "bg-white/[0.03] border-purple-500/30"
                  : "bg-white/[0.01] border-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-base font-bold tracking-tight ${row.isAuraBix ? "text-gold" : "text-white"}`}>
                  {row.name}
                </span>
                {row.isAuraBix && (
                  <span className="px-2.5 py-0.5 text-[8px] uppercase tracking-wider font-extrabold bg-gold/15 text-gold border border-gold/20 rounded-full">
                    Empfohlen
                  </span>
                )}
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                {row.desc}
              </p>

              {/* Metrics grid for mobile */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/5 pt-4 text-xs font-light text-white/70">
                <div className="flex items-center justify-between">
                  <span>Tempo:</span>
                  {ratingStars(row.metrics.speed)}
                </div>
                <div className="flex items-center justify-between">
                  <span>Flexibilität:</span>
                  {ratingStars(row.metrics.flex)}
                </div>
                <div className="flex items-center justify-between">
                  <span>Qualität:</span>
                  {ratingStars(row.metrics.quality)}
                </div>
                <div className="flex items-center justify-between">
                  <span>Skalierbar:</span>
                  {ratingStars(row.metrics.scale)}
                </div>
                <div className="col-span-2 flex items-center justify-between border-t border-white/5 pt-2 mt-1">
                  <span>Preis-Leistung:</span>
                  {ratingStars(row.metrics.value)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
