"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export default function NewFAQ() {
  const faqs = [
    {
      id: "designentwurf",
      q: "Ist der Designentwurf wirklich kostenlos?",
      a: "Ja, zu 100%. Nach unserem Erstgespräch erstellen wir einen individuellen Designentwurf für deine Website. Komplett kostenlos und unverbindlich. Erst wenn du zufrieden bist und weitermachen möchtest, sprechen wir gemeinsam über die Umsetzung."
    },
    {
      id: "ablauf",
      q: "Wie läuft die Zusammenarbeit ab?",
      a: "Ganz einfach: In einem kurzen kostenlosen Erstgespräch besprechen wir deine Wünsche. Danach erhältst du einen kostenlosen Designentwurf. Gefällt er dir, starten wir, und in 7 Tagen ist deine Website online."
    },
    {
      id: "texteBilder",
      q: "Muss ich eigene Texte und Bilder liefern?",
      a: "Nein, das musst du nicht. Wir helfen dir bei der Texterstellung und können professionelle Bilder einbinden. Natürlich freuen wir uns, wenn du eigene Fotos hast. Das macht deine Website noch persönlicher."
    },
    {
      id: "selbstBearbeiten",
      q: "Kann ich die Website später selbst bearbeiten?",
      a: "Ja! Wir bauen deine Website so, dass du einfache Änderungen wie Texte, Bilder oder Öffnungszeiten selbst vornehmen kannst. Für größere Änderungen sind wir natürlich jederzeit für dich da."
    },
    {
      id: "nach7Tagen",
      q: "Was passiert nach den 7 Tagen?",
      a: "Deine Website ist online und arbeitet für dich. Hosting und technische Wartung übernehmen wir, damit du dich um nichts kümmern musst. Auf Wunsch optimieren wir deine Seite laufend weiter."
    },
    {
      id: "mobil",
      q: "Ist die Website auch auf dem Handy nutzbar?",
      a: "Absolut. Jede Website wird optimiert für Smartphone, Tablet und Desktop, damit deine Kunden dich überall perfekt finden."
    },
    {
      id: "kostenAenderungen",
      q: "Was kosten spätere Änderungen?",
      a: "Kleine Änderungen wie Texte oder Bilder kannst du selbst vornehmen. Für größere Anpassungen oder neue Unterseiten erstellen wir dir gerne ein transparentes Angebot, ohne Überraschungen."
    },
    {
      id: "datenschutz",
      q: "Ist die Website datenschutzkonform?",
      a: "Selbstverständlich. Alle Websites werden DSGVO-konform gebaut und auf sicheren deutschen Servern gehostet. Impressum und Datenschutzerklärung sind inklusive."
    }
  ]

  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    if (openId === id) {
      setOpenId(null)
    } else {
      setOpenId(id)
    }
  }

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Häufig gestellte <br className="sm:hidden" />
              <span className="font-serif italic font-normal text-gradient-gold">
                Fragen
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-md mx-auto">
              Die wichtigsten Fragen und Antworten im Überblick.
            </p>
          </motion.div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.03] border-white/10 shadow-lg"
                    : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className={`text-base font-semibold tracking-tight transition-colors duration-200 ${isOpen ? "text-gold" : "text-white group-hover:text-gold"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/5 group-hover:border-gold/30 transition-all duration-300 ${isOpen ? "text-gold border-gold/30" : "text-white"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-white/50 font-light leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
