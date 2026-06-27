"use client";
import { useState } from 'react';
import { useDemoTheme } from './DemoThemeProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ onBookClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { clinicName, logoUrl, token } = useDemoTheme();
  const pathname = usePathname();

  const isSubpage = pathname?.endsWith('/book');
  const logoHref = isSubpage && token ? `/demo/${token}` : '#home';
  const LogoTag = isSubpage ? Link : 'a';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <LogoTag href={logoHref} className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
          {logoUrl && logoUrl !== 'false' ? (
            <img src={logoUrl} alt={clinicName} className="logo" style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }} />
          ) : (
            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
              {clinicName}
            </span>
          )}
        </LogoTag>
        
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </div>

        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Treatments</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Transformations</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            {token && (
              <Link href={`/demo/${token}/book`} onClick={() => setIsMenuOpen(false)}>
                Live Calendar
              </Link>
            )}
          </div>
          <button 
            className="book-btn" 
            onClick={() => {
              setIsMenuOpen(false);
              if (onBookClick) onBookClick();
            }}
          >
            BOOK ONLINE
          </button>
        </div>
      </div>
    </nav>
  );
}
