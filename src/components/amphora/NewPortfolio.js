"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, TrendingUp, Calendar, Users, Eye, ArrowUpRight } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function NewPortfolio() {
  const [activeTab, setActiveTab] = useState("beauty")

  const cases = {
    beauty: {
      id: "beauty",
      name: "Grechow's Beauty",
      industry: "Kosmetik & Gesundheit",
      title: "Premium-Website sorgt für doppelt so viel Umsatz.",
      desc: "Vorher hat Larisa täglich Stunden damit verbracht, Terminanfragen per Telefon und WhatsApp manuell zu koordinieren. Heute übernimmt das die Website komplett: Kunden buchen rund um die Uhr selbstständig ihre Wunschtermine.",
      image: "/medspa_demo.png",
      kpis: [
        { label: "Umsatzsteigerung", value: "+208%", icon: TrendingUp },
        { label: "Zeitersparnis / Woche", value: "12 Std.", icon: Calendar }
      ],
      deliverables: [
        "Online-Terminbuchung",
        "24/7 Terminvergabe",
        "Automatische Erinnerungen",
        "Integration in Studio-Kalender",
        "Mehr lokale Sichtbarkeit",
        "Professionelles Markenbild"
      ],
      color: "from-pink-500 to-rose-500",
      glow: "rgba(236, 72, 153, 0.2)"
    },
    praxis: {
      id: "praxis",
      name: "Praxisteam Nord",
      industry: "Gesundheitswesen",
      title: "Digitale Skills für ein ganzes Praxisteam.",
      desc: "Das Praxisteam Nord hatte mit ineffizienter Kommunikation und Papierprozessen zu kämpfen. Wir haben ein maßgeschneidertes Schulungsprogramm entwickelt, das die Teams Schritt für Schritt in Microsoft Teams und digitale Terminverwaltung eingeführt hat.",
      image: "/dental_demo.png",
      kpis: [
        { label: "Mitarbeitende geschult", value: "45+", icon: Users },
        { label: "Zufriedenheitsrate", value: "98%", icon: CheckCircle2 }
      ],
      deliverables: [
        "Digitale Kommunikation",
        "Microsoft Teams Kalender",
        "Digitale Terminverwaltung",
        "Sichere Patientenkommunikation",
        "Eigenständige Nutzung",
        "Individuelle Lernpfade"
      ],
      color: "from-blue-500 to-cyan-500",
      glow: "rgba(59, 130, 246, 0.2)"
    },
    greenline: {
      id: "greenline",
      name: "GreenLine Solutions",
      industry: "E-Commerce",
      title: "Sichtbarkeit & Umsatz: +340% organischer Traffic.",
      desc: "GreenLine hatte eine veraltete Website mit schlechten Ladezeiten und kaum Sichtbarkeit in Suchmaschinen. Wir haben einen kompletten Relaunch durchgeführt: neues Design, technische SEO-Optimierung und Performance-Tuning.",
      image: "/ecommerce_demo.png",
      kpis: [
        { label: "Organischer Traffic", value: "+340%", icon: Eye },
        { label: "Ladezeit", value: "0.8s", icon: TrendingUp }
      ],
      deliverables: [
        "Core Web Vitals optimiert",
        "Strukturierte Daten",
        "50+ SEO Landingpages",
        "Blog mit Redaktionsplan",
        "Automatisiertes Link-Building",
        "Conversion-Optimierung"
      ],
      color: "from-orange-500 to-amber-500",
      glow: "rgba(249, 115, 22, 0.2)"
    },
    novatech: {
      id: "novatech",
      name: "NovaTech Industries",
      industry: "Technologie & Industrie",
      title: "KI-gestützte Qualitätskontrolle: 90% weniger Fehler.",
      desc: "NovaTech verlor jährlich sechsstellige Beträge durch Qualitätsmängel und manuelle Prüfprozesse. Wir haben ein KI-gestütztes Kontrollsystem implementiert, das Fehler in Echtzeit erkennt und automatisch klassifiziert.",
      image: "/saas_demo.png",
      kpis: [
        { label: "Weniger Fehler", value: "-90%", icon: CheckCircle2 },
        { label: "Kosteneinsparung", value: "Six-Figure", icon: TrendingUp }
      ],
      deliverables: [
        "Qualitätsmanagement",
        "KI-basierte Bilderkennung",
        "Sofortige Fehlermeldung",
        "Automatische Klassifizierung",
        "Prädiktive Wartung",
        "Kontinuierliches Training"
      ],
      color: "from-purple-500 to-pink-500",
      glow: "rgba(168, 85, 247, 0.2)"
    }
  }

  const activeCase = cases[activeTab]

  const handleCtaClick = () => {
    openContactModal({ service: `Fallstudie: ${activeCase.name}`, budget: "Premium (3000€+)" })
  }

  return (
    <section id="referenzen" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              ... mit echtem{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                Effekt
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-lg">
              Wir bauen Websites, die deine Unternehmensziele spürbar voranbringen.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2.5 bg-white/[0.03] border border-white/5 p-1.5 rounded-xl self-start md:self-end">
            {Object.values(cases).map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeTab === c.id
                    ? "bg-white text-black shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/[0.01] border border-white/[0.04] rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            style={{
              boxShadow: `inset 0 0 40px -20px ${activeCase.glow}`
            }}
          >
            {/* Glowing tab radial point */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${activeCase.glow} 0%, transparent 60%)`
              }}
            />

            {/* Left Column: Specs & Copy (7 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3">
                {activeCase.industry}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                {activeCase.title}
              </h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light mb-8">
                {activeCase.desc}
              </p>

              {/* KPIs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {activeCase.kpis.map((kpi, idx) => {
                  const KpiIcon = kpi.icon
                  return (
                    <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${activeCase.color} text-white shrink-0`}>
                        <KpiIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/40">{kpi.label}</div>
                        <div className="text-lg font-bold text-white tracking-tight mt-0.5">{kpi.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Deliverables List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Was wir geliefert haben:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCase.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCtaClick}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-fit cursor-pointer"
              >
                <span className="relative z-10">Fallstudie besprechen</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Right Column: 3D perspective Mockup (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                whileHover={{
                  rotateX: -6,
                  rotateY: 8,
                  scale: 1.02
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-3xl bg-obsidian transform-gpu cursor-grab"
                style={{
                  perspective: 1200
                }}
              >
                <img
                  src={activeCase.image}
                  alt={activeCase.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none" />
                
                {/* Shiny highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.06] to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
