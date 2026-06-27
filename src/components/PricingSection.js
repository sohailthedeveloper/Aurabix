"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { openContactModal } from "@/components/ContactModal"

const currencies = [
  { code: "IN", flag: "🇮🇳", name: "India",     label: "INR" },
  { code: "US", flag: "🇺🇸", name: "USA",       label: "USD" },
  { code: "GB", flag: "🇬🇧", name: "UK",        label: "GBP" },
  { code: "AE", flag: "🇦🇪", name: "UAE",       label: "AED" },
  { code: "AU", flag: "🇦🇺", name: "Australia", label: "AUD" },
]

const plans = [
  {
    id: 1,
    name: "Starter",
    tagline: "The perfect launchpad for new businesses.",
    icon: "⚡",
    prices: {
      IN: "₹25,000",
      US: "$499",
      GB: "£399",
      AE: "AED 1,800",
      AU: "A$799",
    },
    delivery: "5–7 Days",
    features: [
      "1–3 Pages",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "Fast Loading Website",
      "Social Media Links",
      "Modern UI Design",
    ],
    popular: false,
    cta: "Start Your Project",
    waText: "Hi%20Sohail%2C%20I%20am%20interested%20in%20the%20Starter%20Website%20package!",
  },
  {
    id: 2,
    name: "Business Growth",
    tagline: "The complete growth machine for ambitious brands.",
    icon: "📈",
    prices: {
      IN: "₹40,000",
      US: "$799",
      GB: "£699",
      AE: "AED 2,900",
      AU: "A$1,299",
    },
    delivery: "10–14 Days",
    features: [
      "5–8 Pages",
      "Premium UI/UX Design",
      "Lead Generation Forms",
      "Google Maps Integration",
      "WhatsApp Integration",
      "SEO Optimised Structure",
      "Analytics & Tracking Setup",
      "Advanced Animations",
      "Speed Optimisation",
    ],
    popular: true,
    cta: "Get This Package",
    waText: "Hi%20Sohail%2C%20I%20am%20interested%20in%20the%20Business%20Growth%20Website%20package!",
  },
  {
    id: 3,
    name: "Premium Brand",
    tagline: "For brands that demand nothing but the best.",
    icon: "💎",
    prices: {
      IN: "₹70,000",
      US: "$1,499",
      GB: "£1,199",
      AE: "AED 5,500",
      AU: "A$2,499",
    },
    delivery: "2–4 Weeks",
    features: [
      "Fully Custom Design",
      "High-End Animations",
      "Booking / Inquiry System",
      "Conversion-Focused Layout",
      "Content Strategy Support",
      "Premium Branding Style",
      "Advanced SEO Architecture",
      "Performance Optimisation",
      "Custom Landing Pages",
    ],
    popular: false,
    cta: "Get This Package",
    waText: "Hi%20Sohail%2C%20I%20am%20interested%20in%20the%20Premium%20Brand%20Website%20package!",
  },
  {
    id: 4,
    name: "Custom Platform",
    tagline: "Enterprise-grade digital infrastructure, built to scale.",
    icon: "🏗️",
    prices: {
      IN: "₹2,00,000+",
      US: "$3,999+",
      GB: "£3,299+",
      AE: "AED 14,999+",
      AU: "A$6,499+",
    },
    delivery: "Custom Timeline",
    features: [
      "Admin Dashboard",
      "Payment Gateway Integration",
      "User Accounts & Auth System",
      "Database Integration",
      "AI Chat Bot",
      "Business Automation Features",
      "Scalable Architecture",
      "Dedicated Priority Support",
    ],
    popular: false,
    cta: "Let's Talk",
    waText: "Hi%20Sohail%2C%20I%20am%20interested%20in%20a%20Custom%20Platform%20build%20with%20AuraBix!",
  },
]

const addOns = [
  { service: "Extra Page",               prices: { IN: "₹3,000+",  US: "$59+",    GB: "£49+",    AE: "AED 220+",   AU: "A$99+"  } },
  { service: "Domain Setup",             prices: { IN: "₹1,500+",  US: "$29+",    GB: "£25+",    AE: "AED 110+",   AU: "A$49+"  } },
  { service: "Hosting Setup",            prices: { IN: "₹2,500+",  US: "$49+",    GB: "£39+",    AE: "AED 180+",   AU: "A$79+"  } },
  { service: "Logo Design",              prices: { IN: "₹5,000+",  US: "$99+",    GB: "£79+",    AE: "AED 365+",   AU: "A$159+" } },
  { service: "SEO Optimisation",         prices: { IN: "₹8,000+",  US: "$159+",   GB: "£129+",   AE: "AED 590+",   AU: "A$249+" } },
  { service: "Google Business Setup",    prices: { IN: "₹3,000+",  US: "$59+",    GB: "£49+",    AE: "AED 220+",   AU: "A$99+"  } },
  { service: "Monthly Maintenance",      prices: { IN: "₹5,000–₹15,000", US: "$99–$299", GB: "£79–£249", AE: "AED 365–1,100", AU: "A$159–$499" } },
  { service: "Professional Photography", prices: { IN: "Custom",   US: "Custom",  GB: "Custom",  AE: "Custom",     AU: "Custom" } },
]

export default function PricingSection() {
  const [selected, setSelected] = useState("IN")
  const [autoDetected, setAutoDetected] = useState(false)

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(data => {
        const code = data.country_code
        if (currencies.find(c => c.code === code)) {
          setSelected(code)
        }
      })
      .catch(() => {})
      .finally(() => setAutoDetected(true))
  }, [])

  const waBase = "https://wa.me/919579436423?text="

  return (
    <section id="pricing" className="relative py-14 md:py-24 px-6 bg-[#05040a] overflow-hidden z-10">

      {/* Background aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, rgba(223,186,115,1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-block mb-4 text-xs font-bold tracking-[0.25em] text-gold uppercase">
            Transparent Pricing
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-5">
            Investment Plans for{" "}
            <span className="text-gradient-gold">Elite Brands</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto font-light leading-relaxed">
            No hidden fees. No surprises. Premium digital infrastructure — priced for your market.
          </p>
        </motion.div>

        {/* ── Currency Selector ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14"
        >
          {currencies.map(cur => (
            <button
              key={cur.code}
              onClick={() => setSelected(cur.code)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform-gpu ${
                selected === cur.code
                  ? "bg-gold text-[#05040a] shadow-[0_0_24px_rgba(223,186,115,0.45)]"
                  : "bg-white/[0.04] text-muted border border-white/8 hover:border-gold/30 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{cur.flag}</span>
              <span>{cur.name}</span>
              <span className={`text-[11px] font-medium ${selected === cur.code ? "opacity-60" : "opacity-40"}`}>
                {cur.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-500 transform-gpu ${
                plan.popular
                  ? "border-2 border-gold/50 bg-gradient-to-b from-gold/[0.07] via-gold/[0.03] to-transparent shadow-[0_0_60px_rgba(223,186,115,0.1)] xl:scale-[1.04]"
                  : "border border-white/[0.07] bg-white/[0.025] hover:border-gold/20 hover:shadow-[0_0_40px_rgba(223,186,115,0.05)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold rounded-full text-[#05040a] text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Icon + Name */}
              <div className="mb-6">
                <span className="text-3xl mb-3 block">{plan.icon}</span>
                <h3 className={`font-display text-2xl font-bold mb-1.5 ${plan.popular ? "text-gold" : "text-offwhite"}`}>
                  {plan.name}
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-7 pb-7 border-b border-white/[0.07]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selected + plan.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className={`font-display font-bold leading-none mb-1 ${
                      plan.popular ? "text-gold text-4xl" : "text-offwhite text-3xl"
                    }`}
                  >
                    {plan.prices[selected]}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[11px] text-muted uppercase tracking-widest mb-3">Starting from</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[11px] text-muted">
                  <svg className="w-3 h-3 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Delivery: {plan.delivery}
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted font-light">
                    <svg
                      className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-gold" : "text-electric"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => openContactModal({
                  service: plan.name === "Starter" ? "Premium Web Design & Dev" 
                         : plan.name === "Business Growth" ? "Premium Web Design & Dev"
                         : plan.name === "Premium Brand" ? "Premium Web Design & Dev"
                         : plan.name === "Custom Platform" ? "Full-Stack Digital Growth"
                         : "Premium Web Design & Dev",
                  budget: plan.name === "Starter" ? "Starter Pack"
                        : plan.name === "Business Growth" ? "Business Growth Pack"
                        : plan.name === "Premium Brand" ? "Premium Brand Pack"
                        : plan.name === "Custom Platform" ? "Custom Platform / Enterprise"
                        : ""
                })}
                className={`w-full py-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 transform-gpu cursor-pointer ${
                  plan.popular
                    ? "bg-gold text-[#05040a] hover:shadow-[0_0_30px_rgba(223,186,115,0.45)] hover:-translate-y-1"
                    : "bg-white/[0.04] border border-white/[0.08] text-offwhite hover:border-gold/40 hover:text-gold hover:bg-white/[0.07]"
                }`}
              >
                {plan.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Add-Ons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white/[0.07] bg-white/[0.02] overflow-hidden mb-10 md:mb-14"
        >
          <div className="px-8 py-6 border-b border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-offwhite">Optional Add‑Ons</h3>
            <p className="text-muted text-sm font-light">Stack any add-on on top of your chosen plan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold">Service</th>
                  <th className="text-right px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold">Price</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-8 py-4 text-sm text-muted font-light">{item.service}</td>
                    <td className="px-8 py-4 text-sm font-semibold text-offwhite text-right">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={selected + item.service}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.prices[selected]}
                        </motion.span>
                      </AnimatePresence>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Bottom CTA note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted text-sm font-light">
            All prices are starting rates. Final pricing depends on project scope and complexity.{" "}
            <button
              onClick={() => openContactModal()}
              className="text-gold hover:text-white transition-colors duration-300 font-medium bg-transparent border-none p-0 cursor-pointer"
            >
              Book a free audit call →
            </button>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
