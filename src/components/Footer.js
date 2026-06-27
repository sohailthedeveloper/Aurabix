"use client"

import { openContactModal } from "@/components/ContactModal"

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/aurabix.official/"

  return (
    <footer className="pt-10 md:pt-16 pb-8 border-t border-white/5 bg-[#05040a] relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
        
        {/* Brand Info */}
        <div className="lg:col-span-2">
          <a href="#" className="inline-block mb-6 transform-gpu">
            <img 
              src="/aurabix-logo.png" 
              alt="AuraBix Gold Logo" 
              className="h-10 md:h-12 w-auto object-contain transform-gpu"
            />
          </a>
          <p className="text-muted text-base max-w-sm font-sans font-light leading-relaxed mb-6">
            Engineering high-performance web systems, organic SEO authority, and high-ticket customer acquisition mechanisms for ambitious enterprises worldwide.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted font-sans">
                Accepting Global Partners
              </span>
            </div>
            
            {/* Official Instagram Link backlink for SEO */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-sans transform-gpu"
              title="Official Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@aurabix.official</span>
            </a>
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="font-display text-base font-bold tracking-wider text-offwhite uppercase mb-4 md:mb-6">Navigation</h4>
          <ul className="space-y-4 font-sans text-sm font-light text-muted">
            <li>
              <a href="/#services" className="hover:text-gold transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="/#portfolio" className="hover:text-gold transition-colors duration-300">Our Work</a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-gold transition-colors duration-300">Pricing</a>
            </li>
            <li>
              <a href="/founder" className="hover:text-gold transition-colors duration-300">Founder&apos;s Philosophy</a>
            </li>
          </ul>
        </div>
        
        {/* Direct Connect */}
        <div>
          <h4 className="font-display text-base font-bold tracking-wider text-offwhite uppercase mb-4 md:mb-6">Ready to Dominate?</h4>
          <p className="text-muted text-sm font-sans font-light mb-6">
            Request an audit of your business or connect with our team to start your project.
          </p>
          <button 
            onClick={() => openContactModal()}
            className="inline-flex w-full py-4 px-6 rounded-xl bg-offwhite text-black font-bold font-sans tracking-wider uppercase text-xs hover:bg-gold hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2 shadow-2xl hover:shadow-[0_0_30px_rgba(223,186,115,0.35)] transform-gpu cursor-pointer mb-5"
          >
            Start Your Project
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          </button>
          
          <div className="flex flex-col gap-2 font-sans text-xs tracking-wider uppercase">
            <span className="text-muted/40 font-semibold">Official Channel</span>
            <a href="mailto:hello@aurabix.com" className="text-muted hover:text-gold transition-colors duration-300 font-medium lowercase font-sans text-sm">
              hello@aurabix.com
            </a>
          </div>
        </div>

      </div>
      
      {/* Bottom Sign-off */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-muted/40 font-sans uppercase">
        <p>&copy; {new Date().getFullYear()} AuraBix. All rights reserved.</p>
        <p className="mt-4 md:mt-0 tracking-[0.25em] font-semibold text-muted/30">
          Designed in Pune &bull; Scaling Globally
        </p>
      </div>
    </footer>
  )
}
