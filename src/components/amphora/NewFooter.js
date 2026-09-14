"use client"

import { openContactModal } from "@/components/ContactModal"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"

export default function NewFooter() {
  const instagramUrl = "https://www.instagram.com/aurabix.official/"
  const linkedinUrl = "https://www.linkedin.com/in/sohailshaikhh/"

  return (
    <footer className="relative bg-obsidian border-t border-white/5 pt-20 pb-10 overflow-hidden z-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Brand description */}
          <div className="lg:col-span-2">
            <a href="#start" className="inline-flex items-center gap-1.5 mb-6 group">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                AURA<span className="text-gold">BIX</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-gold" />
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-light font-sans mb-8">
              We design and engineer high-performance web systems, organic SEO authority, and high-ticket customer acquisition mechanisms for ambitious enterprises worldwide.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li>
                <a href="#prozess" className="hover:text-gold transition-colors duration-200">Unser Prozess</a>
              </li>
              <li>
                <a href="#referenzen" className="hover:text-gold transition-colors duration-200">Kunden-Projekte</a>
              </li>
              <li>
                <a href="#preise" className="hover:text-gold transition-colors duration-200">Preispakete</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors duration-200">Häufige Fragen</a>
              </li>
            </ul>
          </div>

          {/* Direct Connect info */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:hello@aurabix.com" className="hover:text-gold transition-colors duration-200 lowercase">
                  hello@aurabix.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  Pune, Maharashtra<br />
                  India
                </span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => openContactModal()}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors cursor-pointer"
                >
                  Entwurf anfragen
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider text-white/30 uppercase">
          <p>&copy; {new Date().getFullYear()} AuraBix. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 tracking-[0.25em] font-semibold text-white/20">
            Designed in Pune &bull; Scaling Globally
          </p>
        </div>
      </div>
    </footer>
  )
}
