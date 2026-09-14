"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function NewTestimonials() {
  const testimonials = [
    {
      quote: "Unsere alte Seite hat online einfach niemanden erreicht. Jetzt kommen regelmäßig Anfragen rein und wir wirken endlich so professionell, wie wir arbeiten.",
      author: "Larisa G.",
      role: "Inhaberin, Beauty Salon",
      color: "from-pink-500/10 to-rose-500/10 border-pink-500/20"
    },
    {
      quote: "Vorher habe ich Termine über WhatsApp koordiniert, jetzt buchen die Kundinnen einfach selbst online. Spart mir locker eine Stunde am Tag.",
      author: "Dr. Med. Müller",
      role: "Therapie-Praxis",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
    },
    {
      quote: "Seit die neue Seite live ist, kommen Anfragen mit echten Volumen-Angaben rein, nicht mehr nur 'Was kostet das ungefähr?'. Das spart uns am Telefon richtig viel Zeit.",
      author: "Daniel B.",
      role: "Logistikleiter",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
    },
    {
      quote: "Ich hatte vorher zwei Anläufe mit anderen Agenturen, die im Sand verlaufen sind. Bei AuraBix war nach drei Wochen alles online, inklusive Online-Terminbuchung. Das hatte ich so nicht erwartet.",
      author: "Falk W.",
      role: "Geschäftsführer, Apartments 'Am Brill'",
      color: "from-purple-500/10 to-violet-500/10 border-purple-500/20"
    },
    {
      quote: "Wir hören jetzt regelmäßig von Gästen, dass sie uns über Google gefunden haben und die Seite sie überzeugt hat. Vorher war das einfach kein Thema.",
      author: "René M.",
      role: "Hotelier & Gastronom",
      color: "from-orange-500/10 to-red-500/10 border-orange-500/20"
    },
    {
      quote: "Die Gäste buchen jetzt direkt über die Seite, ganz ohne Rückfragen. Das spart mir jede Woche etliche Mails und Anrufe.",
      author: "Sabine K.",
      role: "Ferienwohnungsvermietung",
      color: "from-teal-500/10 to-cyan-500/10 border-teal-500/20"
    },
    {
      quote: "Über die neue Seite kommen endlich qualifizierte Anfragen rein, keine Zeitverschwendung mehr. Genau die Kunden, mit denen wir arbeiten wollen.",
      author: "Marcus H.",
      role: "B2B Consultant",
      color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
    },
    {
      quote: "Ich wollte eine Seite, auf der mein Buch gut aussieht und sich verkauft. Genau das habe ich bekommen, und das in einer Woche.",
      author: "Boje N.",
      role: "Buchautor & Verleger",
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="referenzen" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Das sagen{" "}
              <span className="font-serif italic font-normal text-gradient-orange-pink">
                Freunde des Hauses
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-md mx-auto">
              Wie wir gemeinsam Visionen in messbare Realität verwandeln.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Masonry/Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`break-inside-avoid relative p-6 md:p-8 rounded-2xl border bg-white/[0.01] transition-all duration-300 ${t.color} group`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all duration-300 pointer-events-none" />
              
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/5 pt-4">
                <div className="text-sm font-bold text-white tracking-tight">{t.author}</div>
                <div className="text-xs text-white/40 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
