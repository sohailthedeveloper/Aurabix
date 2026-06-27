"use client";
import { useDemoTheme } from './DemoThemeProvider';
import Link from 'next/link';

export default function Footer({ onBookClick }) {
  const { clinicName, clinicPhone, logoUrl, token } = useDemoTheme();

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" style={{ display: 'block', marginBottom: '1.5rem' }}>
            {logoUrl && logoUrl !== 'false' ? (
              <img src={logoUrl} alt={clinicName} style={{ maxHeight: '55px', width: 'auto', objectFit: 'contain' }} />
            ) : (
              <span style={{ fontFamily: 'var(--font-heading)', color: 'white', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>
                {clinicName}
              </span>
            )}
          </a>
          <p>Providing Quality Dental Solutions In A Caring Environment.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>154a Field End Rd,<br/>Ruislip, Pinner<br/>HA5 1RH</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{clinicPhone}</span>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#services">Treatments</a>
            <a href="#gallery">Transformations</a>
            <button 
              onClick={onBookClick} 
              style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer', textAlign: 'left' }}
            >
              Book Online
            </button>
            {token && (
              <Link href={`/demo/${token}/book`} className="emergency-link">
                Live Calendar
              </Link>
            )}
          </div>
        </div>

        <div className="footer-hours">
          <h4>Opening Hours</h4>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem', color: '#cbd5e1' }}>
              <span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem', color: '#cbd5e1' }}>
              <span>Saturday:</span> <span>9:00 AM - 1:00 PM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: '#cbd5e1' }}>
              <span>Sunday:</span> <span>Closed</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-map">
          <h4>Location</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546487770836!2d-0.14407868422978396!3d51.5215082796377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c!2sHarley%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1683215284042!5m2!1sen!2sin" 
            width="100%" 
            height="150" 
            style={{ border: 0, borderRadius: '8px', opacity: 0.8 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <div className="footer-bottom">
        © {new Date().getFullYear()} {clinicName}. Providing Quality Dental Solutions In A Caring Environment.
      </div>
    </footer>
  );
}
