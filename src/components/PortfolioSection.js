"use client"

import { motion } from "framer-motion"

const portfolios = [
  {
    id: 1,
    title: "Zenith Premium Dental Platform",
    category: "Web Architecture & Organic SEO",
    image: "/dental_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Local SEO Schema", "Framer Motion"],
    highlights: [
      "Engineered high-converting booking funnels for high-ticket dental implants",
      "Ranked #1 on Google local search for premium cosmetic dental terms in 90 days",
      "Boosted organic new-patient consultations by 340% within 4 months"
    ],
    link: "https://dentist-aurabix-digital-118cc63d.vercel.app"
  },
  {
    id: 2,
    title: "Luxe MedSpa & Saloon Ecosystem",
    category: "Luxury Reservation Funnel & UX Design",
    image: "/medspa_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Headless CMS", "Automation Integrations"],
    highlights: [
      "Designed a sleek glassmorphic booking interface tailored to elite spa clients",
      "Built automated WhatsApp and SMS appointment confirmation flows",
      "Reduced reservation drop-offs by 48% through optimized local user experiences"
    ],
    link: "https://saloon-one-alpha.vercel.app"
  },
  {
    id: 3,
    title: "Mobile King of Kondhwa E-Commerce",
    category: "High-Converting Retail Platform",
    image: "/ecommerce_demo.png",
    tech: ["React.js", "Tailwind CSS", "WhatsApp Commerce", "Vercel Edge"],
    highlights: [
      "Engineered an ultra-responsive local catalog for premium smart devices",
      "Integrated highly intuitive catalog filtering and dynamic search logic",
      "Boosted customer conversions by linking active catalog sessions to WhatsApp"
    ],
    link: "https://mobilekingofkondhwa.vercel.app"
  },
  {
    id: 4,
    title: "Dream Doors Realty Portal",
    category: "Premium Real Estate & Geolocation Funnels",
    image: "/corporate_demo.png",
    tech: ["Next.js", "Tailwind CSS", "Mapbox APIs", "WhatsApp Lead Engine"],
    highlights: [
      "Engineered an ultra-luxurious, responsive real estate listings portal",
      "Integrated interactive geolocation property filters and search indexing",
      "Constructed automated WhatsApp scheduler scheduling for premium property viewings"
    ],
    link: "https://dreamdoorsrealty.com"
  },
  {
    id: 5,
    title: "AuraBix High-Ticket Attribution Suite",
    category: "Paid Advertising & Attribution Systems",
    image: "/marketing_dashboard.png",
    tech: ["Meta Ads API", "Google Analytics 4", "Custom Reporting Dashboard"],
    highlights: [
      "Deployed precision retargeting structures for high-ticket agency clients",
      "Configured advanced multi-touch server attribution tracking systems",
      "Maintained a verified 400% average ROI across active campaigns"
    ],
    link: "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20am%20interested%20in%20setting%20up%20ads%20tracking%20for%20my%20brand%21"
  }
]

export default function PortfolioSection() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20saw%20your%20real%20portfolio%20creations%20and%20would%20love%20to%20engineer%20similar%20growth%20for%20my%20business%21"

  return (
    <section id="portfolio" className="py-32 px-6 relative z-10 bg-black/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto transform-gpu">
        
        {/* Headings */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center md:text-left md:flex md:items-end md:justify-between transform-gpu"
        >
          <div className="max-w-2xl">
            <div className="inline-block mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">Case Studies</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Elite Digital <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              Explore the actual production platforms we have engineered, showcasing real speed, high conversion rates, and live deployments.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-white transition-colors duration-300 group transform-gpu"
          >
            Start Your Transformation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 transform-gpu">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-[#090710]/45 border border-white/5 shadow-2xl transition-all duration-300 hover:border-gold/25 hover:shadow-[0_0_40px_rgba(223,186,115,0.06)] transform-gpu"
            >
              {/* Image Container with Floating Badges */}
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-2xl mb-8 border border-white/10 aspect-[16/10] transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-103 transform-gpu"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#05040a] bg-gold font-sans shadow-lg">
                    Live Production Platform
                  </span>
                </a>

                {/* Info & Category */}
                <p className="text-electric font-semibold text-xs tracking-widest uppercase mb-3">
                  {item.category}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-offwhite group-hover:text-gold transition-colors duration-300 mb-6">
                    {item.title}
                  </h3>
                </a>

                {/* Highlights list showing HOW GOOD we work */}
                <ul className="space-y-3 mb-8">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted text-sm md:text-base font-light font-sans">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Connect CTA */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1 rounded-full text-xs font-medium tracking-wide text-muted/80 bg-white/3 border border-white/5 font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-white/3 border border-white/10 hover:border-gold/40 text-center font-bold tracking-wider uppercase text-xs text-offwhite hover:text-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,186,115,0.15)] flex items-center justify-center gap-2 group-hover:bg-white/5 transform-gpu"
                >
                  Visit Live Production Platform
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA on mobile */}
        <div className="mt-16 text-center md:hidden transform-gpu">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-white transition-colors duration-300"
          >
            Start Your Transformation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
