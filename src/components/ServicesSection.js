"use client"

import { motion } from "framer-motion"
import { MonitorSmartphone, Search, Share2, Target } from "lucide-react"

const services = [
  {
    title: "Premium Web Architecture",
    description: "Bespoke, high-performance digital systems built with Next.js and Tailwind CSS. We engineer lightning-fast loading speeds, seamless mobile response, and ultra-high-converting booking pipelines.",
    icon: MonitorSmartphone
  },
  {
    title: "Search Dominance (SEO)",
    description: "Command the top of search rankings for high-intent, high-ticket keywords. We implement deep local SEO structures, rich semantic markup, and technical authority optimization to drive organic customers.",
    icon: Search
  },
  {
    title: "Social Media Authority",
    description: "Cinematic digital storytelling that establishes trust and market authority. We plan, execute, and scale visual media strategies that position you as the premium choice in your local region.",
    icon: Share2
  },
  {
    title: "Precision Ad Campaigns",
    description: "High-ROI paid advertising built on rigorous statistical testing and deep funnel analysis. We construct meta, search, and maps retargeting matrices to capture active, ready-to-buy customers.",
    icon: Target
  }
]

export default function ServicesSection() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20would%20love%20to%20consult%20on%20building%20an%20elite%20digital%20arsenal%20for%20my%20business%21"

  return (
    <section id="services" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto transform-gpu">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 transform-gpu"
        >
          <div className="inline-block mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">Engineered Growth</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            The <span className="text-gradient">AuraBix Arsenal</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Four pillars of digital domination designed to elevate premium clinics, high-end spas, and ambitious professionals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform-gpu">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 md:p-10 rounded-3xl bg-[#090710]/45 border border-white/5 transition-all duration-300 hover:border-gold/25 hover:shadow-[0_0_30px_rgba(223,186,115,0.04)] flex flex-col justify-between transform-gpu"
              >
                <div>
                  {/* Glowing Icon Container */}
                  <div className="inline-flex p-4 rounded-2xl bg-white/3 border border-white/5 text-gold mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-xl transform-gpu">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-offwhite group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted font-sans leading-relaxed text-base md:text-lg font-light mb-8">
                    {service.description}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-gold transition-colors duration-300 transform-gpu"
                >
                  Consult details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
