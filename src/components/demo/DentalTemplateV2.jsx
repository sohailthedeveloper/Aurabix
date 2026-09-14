import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowLeft, Menu, X, ArrowUpRight } from 'lucide-react';
import BoutiqueChatbot from '@/components/demo/BoutiqueChatbot';
import FloatingWhatsApp from '@/components/demo/FloatingWhatsApp';
import BookingModal from '@/components/demo/BookingModal';
import DemoWelcomeModal from '@/components/demo/DemoWelcomeModal';
import BeforeAfterSlider from '@/components/demo/BeforeAfterSlider';
import TestimonialSlider from '@/components/demo/TestimonialSlider';

export default function DentalTemplateV2({ config }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'stories'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { name, phone } = config;

  // Boutique Palette Theme Mapping
  const palettes = {
    'cream-sage': { bgCream: '#FDFBF7', textSage: '#2C4C3B', accentSand: '#E8E1D5', mutedText: '#6B705C', ctaColor: '#2C4C3B' },
    'midnight-gold': { bgCream: '#0F172A', textSage: '#D4AF37', accentSand: '#1E293B', mutedText: '#94A3B8', ctaColor: '#D4AF37' },
    'obsidian-pearl': { bgCream: '#0A0A0A', textSage: '#F8FAFC', accentSand: '#171717', mutedText: '#A1A1AA', ctaColor: '#F8FAFC' },
    'blush-slate': { bgCream: '#FAF5F5', textSage: '#334155', accentSand: '#F1E9E9', mutedText: '#64748B', ctaColor: '#334155' },
    'peach-sage': { bgCream: '#FFFBF7', textSage: '#2D3748', accentSand: '#FADAC6', mutedText: '#4A5568', ctaColor: '#8FBC8F' },
    'navy-rose': { bgCream: '#FAFAFA', textSage: '#0A192F', accentSand: '#E6F1FF', mutedText: '#334155', ctaColor: '#B76E79' },
    'ivory-jade': { bgCream: '#FFFFF0', textSage: '#1F2937', accentSand: '#E0F2FE', mutedText: '#4B5563', ctaColor: '#059669' },
    'charcoal-copper': { bgCream: '#121212', textSage: '#E0E0E0', accentSand: '#2D2D2D', mutedText: '#A3A3A3', ctaColor: '#C17767' },
    'lavender-platinum': { bgCream: '#F8F9FA', textSage: '#343A40', accentSand: '#E9ECEF', mutedText: '#6C757D', ctaColor: '#9F7AEA' },
    'sapphire-frost': { bgCream: '#FFFFFF', textSage: '#0F172A', accentSand: '#F1F5F9', mutedText: '#475569', ctaColor: '#2563EB' }
  };
  const activePalette = palettes[config.themePalette] || palettes['cream-sage'];
  const { bgCream, textSage, accentSand, mutedText, ctaColor } = activePalette;

  // Fonts
  const fontHeading = { fontFamily: 'var(--font-playfair), serif' };
  const fontBody = { fontFamily: 'var(--font-jakarta), sans-serif' };

  const openBooking = () => {
    setIsMobileMenuOpen(false);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [activeView]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const organicShape1 = { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' };
  const waNumber = phone ? phone.replace(/\s+/g, '') : '';
  const waMessage = encodeURIComponent("Hello, I'd like to enquire about booking a consultation.");

  // ── Navbar Component (Shared) ──
  const Navbar = () => (
    <>
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl border-b border-black/5 py-4' : 'py-6 sm:py-8'}`}
        style={{ backgroundColor: isScrolled ? `${bgCream}F2` : bgCream }}
        aria-label="Main Navigation"
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer transition-transform hover:opacity-80"
              onClick={() => setActiveView('home')}
              role="button"
              tabIndex={0}
              aria-label="Return to Homepage"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ ...fontHeading, color: textSage }}>
                {name}
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-widest">
              {activeView === 'home' && (
                <>
                  <a href="#approach" className="hover:opacity-50 transition-opacity" style={{ color: textSage }}>Philosophy</a>
                  <a href="#services" className="hover:opacity-50 transition-opacity" style={{ color: textSage }}>Treatments</a>
                  <a href="#team" className="hover:opacity-50 transition-opacity" style={{ color: textSage }}>Our Team</a>
                </>
              )}
              <button onClick={() => setActiveView('stories')} className="hover:opacity-50 transition-opacity" style={{ color: textSage }}>
                Real Stories
              </button>
              
              <div className="flex items-center gap-4 ml-6">
                <a 
                  href={`tel:${phone}`}
                  className="px-6 py-3.5 rounded-full transition-all hover:scale-[1.02] flex items-center gap-2 border hover:bg-slate-50"
                  style={{ borderColor: accentSand, color: textSage, backgroundColor: bgCream }}
                  aria-label="Call Clinic"
                >
                  <Phone size={15} />
                  <span>{phone}</span>
                </a>
                <button 
                  onClick={openBooking}
                  className="px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-[#2C4C3B]/10"
                  style={{ backgroundColor: ctaColor, color: bgCream }}
                  aria-label="Schedule an Appointment"
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a 
                href={`tel:${phone}`}
                className="p-3 rounded-full border shadow-sm transition-colors active:bg-slate-100"
                style={{ borderColor: accentSand, color: textSage, backgroundColor: bgCream }}
                aria-label="Call Us"
              >
                <Phone size={18} />
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-3 rounded-full transition-colors active:bg-black/5"
                style={{ color: textSage }}
                aria-label="Open Mobile Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: bgCream }}
          >
            <div className="flex justify-between items-center p-6 border-b border-black/5">
              <span className="text-2xl font-bold" style={{ ...fontHeading, color: textSage }}>{name}</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close Menu">
                <X size={28} style={{ color: textSage }} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 p-8 overflow-y-auto h-full">
              <div className="flex flex-col gap-6 text-2xl" style={{ ...fontHeading, color: textSage }}>
                {activeView === 'home' && (
                  <>
                    <a href="#approach" onClick={() => setIsMobileMenuOpen(false)}>Our Philosophy</a>
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Bespoke Treatments</a>
                    <a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Meet the Team</a>
                  </>
                )}
                <button onClick={() => setActiveView('stories')} className="text-left">Patient Stories</button>
              </div>

              <div className="mt-8 pt-8 border-t border-black/5 flex flex-col gap-4">
                <button 
                  onClick={openBooking}
                  className="w-full py-4 rounded-xl text-center font-medium text-lg"
                  style={{ backgroundColor: textSage, color: bgCream }}
                >
                  Book Appointment
                </button>
                <a 
                  href={`tel:${phone}`}
                  className="w-full py-4 rounded-xl text-center font-medium text-lg border flex justify-center items-center gap-2"
                  style={{ borderColor: textSage, color: textSage }}
                >
                  <Phone size={18} /> Call {phone}
                </a>
                <a 
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  className="w-full py-4 rounded-xl text-center font-medium text-lg flex justify-center items-center gap-2"
                  style={{ backgroundColor: accentSand, color: textSage }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <main style={{ backgroundColor: bgCream, ...fontBody, color: textSage }} className="min-h-screen selection:bg-[#2C4C3B]/20 selection:text-[#2C4C3B] overflow-x-hidden">
      
      {/* ── Top Bar ── */}
      <div className="hidden md:flex justify-between items-center px-12 py-3 text-[11px] tracking-widest uppercase font-semibold border-b border-black/5" style={{ color: mutedText }}>
        <div className="flex items-center gap-10">
          <span className="flex items-center gap-2"><MapPin size={14} /> 123 Harley Street, London, W1G 7JZ</span>
          <span className="flex items-center gap-2"><Clock size={14} /> Mon-Sat: 8am - 8pm</span>
        </div>
        <div>
          <span>Private Dental Concierge</span>
        </div>
      </div>

      <Navbar />

      <AnimatePresence mode="wait">
        {activeView === 'home' ? (
          <motion.article key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            
            {/* ── Hero Section ── */}
            <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-32 lg:pt-24 lg:pb-40 overflow-hidden" aria-label="Hero Introduction">
              <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
                  <motion.div 
                    initial="hidden" animate="visible" variants={stagger}
                    className="w-full lg:w-5/12 z-10 text-center lg:text-left mt-4 lg:mt-0"
                  >
                    <motion.div variants={fadeLeft} className="mb-6 inline-block px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase border" style={{ borderColor: accentSand, color: mutedText }}>
                      A New Standard of Care
                    </motion.div>
                    
                    <motion.h1 
                      variants={fadeUp} 
                      className="text-[40px] sm:text-6xl lg:text-[72px] leading-[1.05] mb-8"
                      style={{ ...fontHeading, color: textSage }}
                    >
                      We treat people,<br />
                      <span className="italic font-light opacity-80" style={{ color: mutedText }}>not just teeth.</span>
                    </motion.h1>
                    
                    <motion.p variants={fadeUp} className="text-[17px] sm:text-[19px] leading-[1.8] mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: mutedText }}>
                      Fear the dentist? You’re in safe hands here. Experience calm, pain-free private dentistry designed entirely around your comfort and absolute well-being.
                    </motion.p>
                    
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                      <button 
                        onClick={openBooking}
                        className="w-full sm:w-auto px-10 py-4 sm:py-5 rounded-full text-[15px] font-semibold hover:-translate-y-1 transition-transform shadow-[0_20px_40px_-15px_rgba(44,76,59,0.3)]"
                        style={{ backgroundColor: textSage, color: bgCream }}
                      >
                        Schedule a Conversation
                      </button>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="w-full lg:w-7/12 relative h-[350px] sm:h-[500px] lg:h-[650px] mt-8 lg:mt-0"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8E1D5]/40 -z-10" style={organicShape1}></div>
                    
                    {/* Main Image */}
                    <motion.img 
                      whileHover={{ scale: 1.02 }} transition={{ duration: 0.8 }}
                      src="/demo-assets/hero.png" alt="Patient consultation at Elite London Dental" 
                      className="absolute right-0 top-0 w-[90%] sm:w-4/5 h-[90%] sm:h-4/5 object-cover rounded-tl-[60px] sm:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[120px] shadow-2xl" 
                    />
                    
                    {/* Polaroid Secondary Image */}
                    <motion.div 
                      whileHover={{ y: -10, rotate: -2 }} transition={{ duration: 0.6 }}
                      className="absolute bottom-0 left-0 w-[55%] sm:w-[45%] p-3 sm:p-4 shadow-2xl rounded-sm rotate-[-5deg] z-20"
                      style={{ backgroundColor: bgCream }}
                    >
                      <img src="/demo-assets/interior.png" alt="Clinic Interior" className="w-full h-auto object-cover" />
                      <p className="text-center text-[10px] sm:text-[11px] uppercase tracking-widest mt-3 sm:mt-4 opacity-70">Our Sanctuary</p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── Approach Section ── */}
            <section id="approach" className="py-20 sm:py-32 lg:py-40 relative" aria-label="Clinic Philosophy">
              <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                  <div className="w-full lg:w-5/12 order-2 lg:order-1 relative group">
                    <div className="overflow-hidden rounded-tr-[100px] sm:rounded-tr-[160px] rounded-bl-[100px] sm:rounded-bl-[160px]">
                      <motion.img 
                        initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80" 
                        alt="Empathetic consultation" 
                        className="w-full h-[400px] sm:h-[600px] lg:h-[750px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-8 order-1 lg:order-2">
                    <motion.h2 
                      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                      className="text-[34px] sm:text-5xl lg:text-[64px] leading-[1.1] mb-8 lg:mb-10"
                      style={{ ...fontHeading, color: textSage }}
                    >
                      Dentistry without the clinical coldness.
                    </motion.h2>
                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                      className="space-y-6 sm:space-y-8 text-[17px] sm:text-[19px] leading-[1.8] max-w-3xl" style={{ color: mutedText }}
                    >
                      <motion.p variants={fadeUp}>
                        We understand that visiting the dentist is rarely someone's favorite activity. That’s why we completely reimagined the private dental experience from the ground up.
                      </motion.p>
                      <motion.p variants={fadeUp}>
                        From the moment you walk through our doors, you’ll notice the difference. No harsh medical lighting, no overwhelming smells, and absolutely no rushed appointments. Just warm tea, active listening, and exceptional clinical care.
                      </motion.p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                      className="mt-12 sm:mt-16 p-8 sm:p-12 rounded-3xl relative"
                      style={{ backgroundColor: 'rgba(232, 225, 213, 0.4)' }}
                    >
                      <div className="absolute -top-6 -left-3 sm:-left-6 text-[80px] sm:text-[100px] leading-none opacity-40" style={{ ...fontHeading, color: textSage }}>"</div>
                      <p className="italic text-lg sm:text-xl leading-relaxed relative z-10" style={{ color: textSage }}>
                        "I hadn't been to a dentist in 10 years out of pure fear. The team here didn't judge me once. They held my hand through the entire process. It was genuinely life-changing."
                      </p>
                      <p className="mt-6 text-[11px] font-bold uppercase tracking-widest opacity-70">— Eleanor R., Patient</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Services Section ── */}
            <section id="services" className="py-24 sm:py-32 lg:py-40" style={{ backgroundColor: bgCream }} aria-label="Bespoke Treatments">
              <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-end gap-6 border-b pb-8"
                  style={{ borderColor: 'rgba(44, 76, 59, 0.1)' }}
                >
                  <h2 className="text-[36px] sm:text-5xl lg:text-6xl leading-tight max-w-2xl" style={{ ...fontHeading, color: textSage }}>
                    Artistry in every treatment.
                  </h2>
                  <p className="max-w-md text-[17px] sm:text-lg mb-2" style={{ color: mutedText }}>
                    Bespoke cosmetic enhancements and advanced restorative health, delivered with precision.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                  
                  {/* Service 1 */}
                  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] mb-8 relative h-[300px] sm:h-[400px] lg:h-[480px]">
                      <img src="/demo-assets/services.png" alt="Invisalign Alignment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl sm:text-[28px] mb-4" style={{ ...fontHeading, color: textSage }}>Invisalign® Alignment</h3>
                    <p className="text-[15px] sm:text-[17px] leading-[1.8] mb-6" style={{ color: mutedText }}>Discreet, precisely planned movement mapped by 3D technology for a confident, natural smile.</p>
                    <span className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 transition-opacity group-hover:opacity-60" style={{ color: textSage }}>
                      Discover <ArrowUpRight size={16} />
                    </span>
                  </motion.div>

                  {/* Service 2 */}
                  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.15 }} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] mb-8 relative h-[300px] sm:h-[400px] lg:h-[480px]">
                      <img src="/demo-assets/veneers.png" alt="Porcelain Veneers" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl sm:text-[28px] mb-4" style={{ ...fontHeading, color: textSage }}>Porcelain Veneers</h3>
                    <p className="text-[15px] sm:text-[17px] leading-[1.8] mb-6" style={{ color: mutedText }}>Bespoke cosmetic refinement designed entirely around your facial features and skin tone.</p>
                    <span className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 transition-opacity group-hover:opacity-60" style={{ color: textSage }}>
                      Discover <ArrowUpRight size={16} />
                    </span>
                  </motion.div>

                  {/* Service 3 */}
                  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.3 }} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] mb-8 relative h-[300px] sm:h-[400px] lg:h-[480px]">
                      <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80" alt="Restorative Implants" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl sm:text-[28px] mb-4" style={{ ...fontHeading, color: textSage }}>Restorative Implants</h3>
                    <p className="text-[15px] sm:text-[17px] leading-[1.8] mb-6" style={{ color: mutedText }}>Natural-looking tooth replacement designed for lifelong function, seamlessly integrated into your smile.</p>
                    <span className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 transition-opacity group-hover:opacity-60" style={{ color: textSage }}>
                      Discover <ArrowUpRight size={16} />
                    </span>
                  </motion.div>

                </div>
              </div>
            </section>

            {/* ── Testimonials Section (NEW) ── */}
            <section className="py-20 sm:py-24" aria-label="Patient Testimonials">
              <TestimonialSlider />
            </section>

            {/* ── Trust / Clinician Section (NEW) ── */}
            <section id="team" className="py-24 sm:py-32 lg:py-40" aria-label="Meet The Clinicians">
              <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                  
                  <div className="w-full lg:w-1/2">
                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                      <motion.h2 variants={fadeUp} className="text-[36px] sm:text-5xl lg:text-6xl leading-[1.1] mb-8" style={{ ...fontHeading, color: textSage }}>
                        Clinical excellence, delivered with empathy.
                      </motion.h2>
                      <motion.p variants={fadeUp} className="text-[17px] sm:text-[19px] leading-[1.8] mb-10 max-w-2xl" style={{ color: mutedText }}>
                        Led by Dr. James Harrison (GDC: 123456), our team consists of highly qualified specialists who have dedicated their careers to mastering advanced, pain-free restorative dentistry.
                      </motion.p>
                      
                      <motion.div variants={fadeUp} className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: textSage }}></div>
                          <div>
                            <h4 className="font-semibold text-lg" style={{ color: textSage }}>Post-Graduate Excellence</h4>
                            <p className="text-[15px] mt-1" style={{ color: mutedText }}>Masters degree in Restorative Dentistry from King's College London.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: textSage }}></div>
                          <div>
                            <h4 className="font-semibold text-lg" style={{ color: textSage }}>Award-Winning Team</h4>
                            <p className="text-[15px] mt-1" style={{ color: mutedText }}>Recognized for Best Patient Care at the Private Dentistry Awards.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.button 
                        variants={fadeUp} onClick={openBooking}
                        className="mt-12 px-8 py-4 rounded-full text-[14px] font-semibold uppercase tracking-widest border transition-all hover:bg-slate-50"
                        style={{ borderColor: accentSand, color: textSage }}
                      >
                        Meet The Team
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                      <img src="/demo-assets/clinician.png" alt="Dr. James Harrison" className="w-full h-auto object-cover rounded-[40px] shadow-2xl" />
                      <p className="text-center text-[11px] uppercase tracking-widest mt-6 opacity-70" style={{ color: mutedText }}>Dr. James Harrison, Principal Dentist</p>
                    </motion.div>
                  </div>

                </div>
              </div>
            </section>

            {/* ── Location & Directions (NEW) ── */}
            <section className="py-0" aria-label="Clinic Location">
              <div className="max-w-[90rem] mx-auto px-6 sm:px-12 mb-24">
                <div className="rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_50px_-20px_rgba(44,76,59,0.15)]" style={{ backgroundColor: bgCream, border: `1px solid ${accentSand}` }}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto relative">
                    <img src="/demo-assets/location.png" alt="Elite London Dental Exterior" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-24 flex flex-col justify-center" style={{ backgroundColor: bgCream }}>
                    <h2 className="text-3xl sm:text-4xl mb-6" style={{ ...fontHeading, color: textSage }}>Find Our Sanctuary</h2>
                    <p className="text-[17px] mb-10 leading-[1.8]" style={{ color: mutedText }}>
                      Located in the heart of London’s medical district. We offer a quiet, discreet environment away from the noise of the city.
                    </p>
                    
                    <div className="space-y-6 mb-12">
                      <div className="flex gap-4 items-start">
                        <MapPin size={24} style={{ color: textSage, flexShrink: 0 }} />
                        <div>
                          <h4 className="font-semibold text-lg" style={{ color: textSage }}>Address</h4>
                          <p className="text-[15px] mt-1" style={{ color: mutedText }}>123 Harley Street<br />London, W1G 7JZ</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <Clock size={24} style={{ color: textSage, flexShrink: 0 }} />
                        <div>
                          <h4 className="font-semibold text-lg" style={{ color: textSage }}>Opening Hours</h4>
                          <p className="text-[15px] mt-1" style={{ color: mutedText }}>Monday to Friday: 8:00am - 8:00pm<br />Saturday: 9:00am - 4:00pm</p>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                      className="inline-block text-center w-full sm:w-auto px-10 py-4.5 rounded-full font-semibold transition-transform hover:-translate-y-1"
                      style={{ backgroundColor: textSage, color: bgCream }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </motion.article>
        ) : (
          <motion.article key="stories" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            {/* ── Separate Stories / Gallery Page ── */}
            <section className="pt-16 sm:pt-24 pb-32 min-h-screen">
              <div className="max-w-[80rem] mx-auto px-6 sm:px-12">
                
                <button 
                  onClick={() => setActiveView('home')}
                  className="mb-16 flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity" 
                  style={{ color: textSage }}
                  aria-label="Back to Homepage"
                >
                  <ArrowLeft size={16} /> Return Home
                </button>

                <div className="text-center mb-20 sm:mb-32">
                  <h1 className="text-[40px] sm:text-6xl lg:text-[80px] leading-[1.05] mb-8" style={{ ...fontHeading, color: textSage }}>
                    Real Stories.<br />Real Smiles.
                  </h1>
                  <p className="text-[18px] sm:text-[20px] max-w-3xl mx-auto leading-[1.8]" style={{ color: mutedText }}>
                    Explore the life-changing transformations of our patients. From simple brightening to complete smile rebuilds, see the artistry firsthand.
                  </p>
                </div>

                <div className="space-y-32 sm:space-y-48">
                  {/* Story 1 */}
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                      <BeforeAfterSlider 
                        beforeImage="/demo-assets/story1_before.png"
                        afterImage="/demo-assets/story1_after.png"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <h3 className="text-3xl sm:text-[40px] mb-6 leading-tight" style={{ ...fontHeading, color: textSage }}>Sarah's Invisalign Transformation</h3>
                      <p className="text-[17px] sm:text-[19px] mb-8 leading-[1.8]" style={{ color: mutedText }}>
                        Sarah came to us feeling deeply self-conscious about crowding in her lower teeth. Over 14 months using discreet Invisalign aligners, we gently guided her teeth into perfect alignment without disrupting her busy professional life.
                      </p>
                      <button onClick={openBooking} className="text-[13px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity border-b-2 pb-1" style={{ color: textSage, borderColor: textSage }}>
                        Consult About Invisalign
                      </button>
                    </div>
                  </div>

                  {/* Story 2 */}
                  <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                      <BeforeAfterSlider 
                        beforeImage="/demo-assets/story2_before.png"
                        afterImage="/demo-assets/story2_after.png"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <h3 className="text-3xl sm:text-[40px] mb-6 leading-tight" style={{ ...fontHeading, color: textSage }}>Michael's Porcelain Veneers</h3>
                      <p className="text-[17px] sm:text-[19px] mb-8 leading-[1.8]" style={{ color: mutedText }}>
                        Dealing with severe discoloration and minor chipping, Michael wanted a complete refresh before a major career move. We designed 8 custom porcelain veneers perfectly color-matched to his natural complexion, restoring his confidence completely.
                      </p>
                      <button onClick={openBooking} className="text-[13px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity border-b-2 pb-1" style={{ color: textSage, borderColor: textSage }}>
                        Consult About Veneers
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </motion.article>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="pt-20 sm:pt-32 pb-12 sm:pb-16" style={{ backgroundColor: textSage, color: bgCream }} aria-label="Site Footer">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start border-b border-current border-opacity-10 pb-16 sm:pb-24 mb-10 gap-12 lg:gap-24">
            
            <div className="w-full lg:w-1/3">
              <h3 className="text-[32px] sm:text-[42px] mb-6" style={fontHeading}>{name}</h3>
              <p className="opacity-70 leading-[1.8] mb-10 text-[16px] sm:text-[18px]">
                Changing the way you feel about the dentist, one gentle appointment at a time. A premium digital experience designed for complete peace of mind.
              </p>
              <button onClick={openBooking} className="w-full sm:w-auto px-10 py-5 rounded-full font-semibold hover:scale-[1.02] transition-transform" style={{ color: bgCream, backgroundColor: ctaColor }}>
                Book Your Visit
              </button>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 sm:mb-8 opacity-60">Connect With Us</h4>
                <ul className="space-y-4 opacity-80 text-[15px] sm:text-[16px]">
                  <li><a href={`tel:${phone}`} className="hover:opacity-60 transition-opacity">Call: {phone}</a></li>
                  <li><a href={`https://wa.me/${waNumber}`} className="hover:opacity-60 transition-opacity">WhatsApp Concierge</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">hello@elitelondondental.com</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Instagram</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-widest mb-6 sm:mb-8 opacity-60">Visit The Clinic</h4>
                <ul className="space-y-4 opacity-80 text-[15px] sm:text-[16px]">
                  <li>123 Harley Street</li>
                  <li>London, W1G 7JZ</li>
                  <li className="pt-4 opacity-70">Mon-Fri: 8am - 8pm</li>
                  <li className="opacity-70">Sat: 9am - 4pm</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[13px] opacity-40 gap-8 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end text-left sm:text-right max-w-xs pr-20 lg:pr-0">
              <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Powered by AuraBix</h5>
              <p className="text-[12px] leading-relaxed mb-3 opacity-60">We help ambitious businesses scale with Premium Web Architecture, SEO & Paid Ads.</p>
              <a href="https://aurabix.com" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity flex items-center gap-1">
                Let's Grow Together <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Premium Widgets */}
      {config.chatbot && <BoutiqueChatbot phone={phone} onBook={openBooking} />}
      <FloatingWhatsApp />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <DemoWelcomeModal />
    </main>
  );
}
