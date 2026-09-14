"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { openContactModal } from "@/components/ContactModal"

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Prozess", href: "#prozess" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" }
  ]

  const handleCtaClick = () => {
    setIsOpen(false)
    openContactModal({ service: "Website Design", budget: "Premium (3000€+)" })
  }

  return (
    <>
      {/* Desktop Floating Capsule Navbar */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl rounded-2xl border transition-all duration-300 flex items-center justify-between px-8 py-3.5 ${
          scrolled
            ? "bg-obsidian/75 backdrop-blur-md border-white/10 shadow-2xl"
            : "bg-white/95 border-gray-100 shadow-lg text-black"
        } hidden md:flex`}
      >
        {/* Left: Navigation links */}
        <div className="flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-xs lg:text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                scrolled ? "text-offwhite hover:text-gold" : "text-black hover:text-gold"
              }`}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25 }}
              />
            </a>
          ))}
        </div>

        {/* Center: Brand Logo */}
        <a
          href="#start"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 group"
        >
          <span className={`font-display text-2xl font-bold tracking-tight ${scrolled ? "text-white" : "text-black"}`}>
            AURA<span className="text-gold">BIX</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-orange-500 animate-pulse" />
        </a>

        {/* Right: Premium CTA Button */}
        <button
          onClick={handleCtaClick}
          className="group relative inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-xs px-5 py-2.5 shadow-lg"
          style={{
            background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
            boxShadow: "0 8px 24px -6px rgba(139,92,246,0.5)"
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          {/* Shimmer Sheen effect */}
          <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            <span className="absolute top-0 -left-1/2 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-[25deg] transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
          </span>
          <span className="relative z-10 whitespace-nowrap">Gratis Entwurf</span>
          <ArrowUpRight className="w-4.5 h-4.5 relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.nav>

      {/* Mobile Sticky Glass Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all duration-300 w-[92%] md:hidden ${
          scrolled || isOpen
            ? "bg-obsidian/90 backdrop-blur-lg border-white/10 shadow-2xl"
            : "bg-white border-gray-200 shadow-md text-black"
        }`}
      >
        <a href="#start" className="flex items-center gap-1">
          <span className={`font-display text-xl font-bold tracking-tight ${scrolled || isOpen ? "text-white" : "text-black"}`}>
            AURA<span className="text-gold">BIX</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-1.5 rounded-lg focus:outline-none transition-colors ${
            scrolled || isOpen ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-[110%] left-0 w-full bg-obsidian border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold uppercase tracking-wider text-offwhite hover:text-gold border-b border-white/5 pb-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <button
                onClick={handleCtaClick}
                className="w-full py-3.5 rounded-xl text-center text-white font-bold tracking-wider text-sm flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)"
                }}
              >
                Kostenlosen Entwurf sichern
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
