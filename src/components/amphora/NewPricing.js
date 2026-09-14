"use client"

import { motion } from "framer-motion"
import { Check, MessageSquare } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function NewPricing() {
  const tiers = [
    {
      name: "Website Start",
      sub: "Dein professioneller\nOnline-Auftritt im Netz.",
      price: "ab 1.490€",
      features: [
        "1–3 Seiten, individuell gestaltet",
        "Optimiert für Suchmaschinen & KI",
        "Auch ideal für Kampagnen & Landingpages",
        "Kostenloser Entwurf vorab"
      ],
      cta: "Website-Start-Entwurf sichern",
      color: "from-orange-500/30 to-red-500/20 border-orange-500/20",
      accent: "#f97316",
      badge: null
    },
    {
      name: "Website Pro",
      sub: "Alles, was dein Unternehmen\nonline braucht.",
      price: "ab 3.490€",
      features: [
        "Alles aus Website Start inklusive",
        "5–10 Seiten, individuell gestaltet",
        "Anbindung an bestehende Systeme",
        "Kostenloser Entwurf vorab"
      ],
      cta: "Website-Pro-Entwurf sichern",
      color: "from-purple-500/30 to-pink-500/20 border-purple-500/30 shadow-[0_20px_50px_rgba(168,85,247,0.15)]",
      accent: "#a855f7",
      badge: "Beliebt"
    },
    {
      name: "Online-Shop",
      sub: "Verkauft rund um die Uhr,\ndas ganze Jahr.",
      price: "ab 3.990€",
      features: [
        "Produkte, Warenkorb & Bestellungen",
        "Sichere Bezahlung & Versand",
        "Intuitive Verwaltung",
        "Kostenloser Entwurf vorab"
      ],
      cta: "Online-Shop-Entwurf sichern",
      color: "from-blue-500/30 to-indigo-500/20 border-blue-500/20",
      accent: "#3b82f6",
      badge: null
    },
    {
      name: "Web-App",
      sub: "Logins, Backend &\nAutomatisierungen.",
      price: "individuell anfragen",
      features: [
        "Logins & Nutzer-Bereiche",
        "Automatisierungen & APIs",
        "Eigenes Backend",
        "Skalierbar & sicher"
      ],
      cta: "Web-App individuell anfragen",
      color: "from-emerald-500/30 to-teal-500/20 border-emerald-500/20",
      accent: "#10b981",
      badge: null
    }
  ]

  const handleCtaClick = (tier) => {
    openContactModal({ service: `Paket: ${tier.name}`, budget: tier.price })
  }

  return (
    <section id="preise" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

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
              Wähle das passende{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                Paket
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-md mx-auto">
              Volle Transparenz, feste Preise, keine versteckten Kosten vorab.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl border bg-[#050505]/60 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ${tier.color} group`}
            >
              {/* Card top light glow */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tier.accent}20 0%, transparent 65%)`
                }}
              />

              {/* Badges */}
              {tier.badge && (
                <span 
                  className="absolute top-4 right-4 text-[9px] uppercase font-bold tracking-widest text-white px-2.5 py-1 rounded-full animate-pulse shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, ${tier.accent} 0%, #ec4899 100%)`
                  }}
                >
                  {tier.badge}
                </span>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed min-h-[36px] whitespace-pre-line mb-6 font-light">
                  {tier.sub}
                </p>
                <div className="text-3xl font-display font-black text-white tracking-tight mb-6">
                  {tier.price}
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/70">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={() => handleCtaClick(tier)}
                className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                style={{
                  background: tier.badge ? `linear-gradient(90deg, ${tier.accent} 0%, #ec4899 100%)` : "rgba(255,255,255,0.03)",
                  border: tier.badge ? "none" : "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                  boxShadow: tier.badge ? `0 10px 25px -8px ${tier.accent}` : "none"
                }}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
