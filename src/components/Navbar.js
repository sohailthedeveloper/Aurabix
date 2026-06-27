"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const navLinks = [
    { name: "Services",  href: "/#services",  isHash: true  },
    { name: "Our Work",  href: "/#portfolio",  isHash: true  },
    { name: "Pricing",   href: "/pricing",     isHash: false },
    { name: "Founder",   href: "/founder",     isHash: false },
  ]

  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20Sohail%2C%20I%20am%20interested%20in%20engineering%20digital%20growth%20for%20my%20brand%20with%20AuraBix%21"
  const instagramUrl = "https://www.instagram.com/aurabix.official/"

  const isActive = (href) => {
    if (href.startsWith("/#")) return false
    return pathname === href
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
          scrolled
            ? "py-3 bg-[#05040a]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transform-gpu flex-shrink-0" aria-label="AuraBix Home">
            <img
              src="/aurabix-logo.png"
              alt="AuraBix"
              className="h-9 md:h-11 w-auto object-contain transition-all duration-300 hover:scale-105 transform-gpu"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-sans text-sm tracking-wider uppercase transition-colors duration-300 group transform-gpu ${
                  isActive(link.href) ? "text-gold" : "text-muted hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5 transform-gpu">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-300 transform-gpu"
              title="AuraBix on Instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <button
              onClick={() => openContactModal()}
              className="glass-button px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-offwhite hover:text-white flex items-center gap-2 transform-gpu cursor-pointer"
              aria-label="Request Strategic Consultation"
            >
              Consult Now
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-white hover:text-gold transition-colors focus:outline-none transform-gpu rounded-xl hover:bg-white/5"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            id="mobile-nav-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-[#08060f] border-l border-white/[0.07] shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/aurabix-logo.png" alt="AuraBix" className="h-9 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-2 overflow-y-auto" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-4 rounded-2xl font-display text-lg font-medium tracking-wide transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-gold bg-gold/[0.08] border border-gold/20"
                          : "text-offwhite hover:text-gold hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      {link.name}
                      <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="px-6 py-6 border-t border-white/[0.06] flex flex-col gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3.5 rounded-2xl border border-white/10 text-muted hover:text-gold hover:border-gold/30 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  @aurabix.official
                </a>

                <button
                  onClick={() => {
                    setIsOpen(false)
                    openContactModal()
                  }}
                  className="w-full text-center py-4 rounded-2xl bg-gradient-to-r from-gold to-[#B45309] text-black font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  Request Consultation
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
