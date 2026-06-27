"use client";
import { useState, useEffect } from 'react';

export default function Generator() {
  const [activeTab, setActiveTab] = useState('generate'); // 'generate' | 'activity'
  const [formData, setFormData] = useState({
    name: '',
    template: 'dental',
    primaryColor: '#0f766e',
    secondaryColor: '#f59e0b',
    phone: '020 8866 0758',
    whatsapp: '',
    chatbot: true,
    bg: 'video',
    layout: '1',
    logo: ''
  });

  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [origin, setOrigin] = useState('');

  // ── Activity Dashboard State ──
  const [prospects, setProspects] = useState([]);
  const [stats, setStats] = useState({ totalProspects: 0, totalVisits: 0, hotLeads: 0, todayVisits: 0 });
  const [isLoadingActivity, setIsLoadingActivity] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  // ── Fetch activity data when tab switches or on interval ──
  const fetchActivity = async () => {
    setIsLoadingActivity(true);
    try {
      const res = await fetch('/api/track');
      const data = await res.json();
      if (data.success) {
        setProspects(data.prospects || []);
        setStats(data.stats || { totalProspects: 0, totalVisits: 0, hotLeads: 0, todayVisits: 0 });
        setLastRefreshed(new Date());
      }
    } catch (err) {
      console.error("Failed to fetch activity:", err);
    } finally {
      setIsLoadingActivity(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'activity') {
      fetchActivity();
      const interval = setInterval(fetchActivity, 30000); // refresh every 30s
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const generateLink = (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name.trim() || 'Zenith Dental',
        template: formData.template,
        primaryColor: formData.primaryColor,
        secondaryColor: formData.secondaryColor,
        phone: formData.phone.trim(),
        whatsapp: formData.whatsapp.trim() || null,
        chatbot: formData.chatbot,
        bg: formData.bg,
        layout: formData.layout,
        logo: formData.logo.trim() || null
      };

      const jsonStr = JSON.stringify(payload);
      const utf8Bytes = encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      });
      const token = btoa(utf8Bytes)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const fullUrl = `${origin}/demo/${token}`;
      setGeneratedUrl(fullUrl);
      setCopiedLink(false);
      setCopiedEmail(false);
    } catch (err) {
      console.error("Link generation failed:", err);
      alert("Failed to generate link. Please check your inputs.");
    }
  };

  const copyToClipboard = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  // ── Time ago helper ──
  const timeAgo = (dateStr) => {
    const now = new Date();
    const then = new Date(dateStr);
    const diffMs = now - then;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    if (diffDay < 7) return `${diffDay}d ago`;
    return then.toLocaleDateString();
  };

  // ── Niche label helper ──
  const nicheLabel = (template) => {
    const map = { dental: '🦷 Dental', salon: '💆 Spa/Salon', saas: '💻 SaaS', ecommerce: '🛒 E-com', corporate: '🏢 Corporate' };
    return map[template] || template;
  };

  // Pre-configured cold email template
  const emailTemplate = formData.template === 'dental' 
    ? `Subject: Quick question about ${formData.name || 'your dental practice'} website

Hi ${formData.name ? `team at ${formData.name}` : 'there'},

I was looking at your online presence and noticed some opportunities to capture more patients directly from mobile browsers.

To show you exactly what I mean, I went ahead and built a custom-designed, fully responsive interactive mockup website personalized for ${formData.name || 'your clinic'}.

You can view your live clinic concept here:
${generatedUrl || '[Generate link first]'}

This customized design includes:
1. A live AI Booking Assistant configured for ${formData.name || 'your practice'} to convert visitors 24/7.
2. An interactive scheduling form that syncs with Google Calendar.
3. A before/after cosmetic transformation slider (great for showcasing Invisalign/whitening).

Let me know if you would like me to walk you through how we can deploy this or connect it to your current practice management software.

Best regards,

AuraBix Digital Team
hello@aurabix.com
https://aurabix.com`
    : `Subject: Quick question about ${formData.name || 'your business'} website

Hi ${formData.name ? `team at ${formData.name}` : 'there'},

I was looking at your online presence and noticed some opportunities to capture more customers and boost your conversion rates.

To show you exactly what I mean, I went ahead and built a custom-designed, fully responsive interactive mockup website personalized for ${formData.name || 'your business'}.

You can view your live brand concept here:
${generatedUrl || '[Generate link first]'}

This customized design includes:
1. A live AI Booking Assistant configured for ${formData.name || 'your business'} to convert visitors 24/7.
2. An interactive scheduling and consultation form to automate your intake.
3. A high-end custom layout adapted to your exact brand colors and styling.

Let me know if you would like me to walk you through how we can deploy this or connect it to your current systems.

Best regards,

AuraBix Digital Team
hello@aurabix.com
https://aurabix.com`;

  // ─── Shared Styles ───
  const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', outline: 'none', background: 'rgba(255,255,255,0.03)', color: 'white', fontSize: '0.95rem' };
  const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#d1d5db', marginBottom: '8px', textTransform: 'uppercase' };
  const selectStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', outline: 'none', background: '#1f2937', color: 'white' };
  const cardStyle = {
    background: 'rgba(17, 24, 39, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top right, #111827 0%, #030712 100%)',
      color: '#f3f4f6',
      fontFamily: 'Inter, sans-serif',
      padding: '4rem 2rem'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ color: '#d4af37', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            AuraBix Prospecting Engine
          </span>
          <h1 style={{
            fontSize: '3rem',
            color: 'white',
            fontWeight: 800,
            marginTop: '0.5rem',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(to right, #ffffff, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Command Center
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '1rem auto 0 auto', lineHeight: '1.6' }}>
            Generate personalized demos, track prospect engagement, and close deals — all from one dashboard.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '5px', maxWidth: '420px', margin: '0 auto 2.5rem auto', border: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            onClick={() => setActiveTab('generate')}
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              background: activeTab === 'generate' ? 'linear-gradient(135deg, #d4af37 0%, #aa8416 100%)' : 'transparent',
              color: activeTab === 'generate' ? '#070a13' : '#6b7280',
              boxShadow: activeTab === 'generate' ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none',
            }}
          >
            ⚡ Generate
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              background: activeTab === 'activity' ? 'linear-gradient(135deg, #d4af37 0%, #aa8416 100%)' : 'transparent',
              color: activeTab === 'activity' ? '#070a13' : '#6b7280',
              boxShadow: activeTab === 'activity' ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none',
              position: 'relative',
            }}
          >
            📊 Activity
            {stats.hotLeads > 0 && (
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '8px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
            )}
          </button>
        </div>

        {/* ════════════════════════════════════════════════════ */}
        {/* ═══ TAB 1: GENERATE DEMO ═══════════════════════ */}
        {/* ════════════════════════════════════════════════════ */}
        {activeTab === 'generate' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            
            {/* Customizer Card */}
            <div style={cardStyle}>
              <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontWeight: 600 }}>
                Prospect Customization
              </h2>

              <form onSubmit={generateLink} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                
                {/* Business Name */}
                <div>
                  <label style={labelStyle}>Business / Brand Name</label>
                  <input 
                    type="text" name="name" required
                    placeholder="e.g. Westside Clinic"
                    value={formData.name} onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>

                {/* Template / Niche */}
                <div>
                  <label style={labelStyle}>Industry / Niche Template</label>
                  <select name="template" value={formData.template} onChange={handleInputChange} style={selectStyle}>
                    <option value="dental">Dental Clinic (Fully Active)</option>
                    <option value="salon">Spa & Salon / Medspa (Preview mode)</option>
                    <option value="saas">SaaS & Tech Platform (Preview mode)</option>
                    <option value="ecommerce">E-commerce Brand (Preview mode)</option>
                    <option value="corporate">Professional Services (Preview mode)</option>
                  </select>
                </div>

                {/* Primary Color */}
                <div>
                  <label style={labelStyle}>Primary Theme Color</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="color" name="primaryColor" value={formData.primaryColor} onChange={handleInputChange}
                      style={{ width: '50px', height: '48px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }} />
                    <input type="text" name="primaryColor" value={formData.primaryColor} onChange={handleInputChange}
                      style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', outline: 'none', background: 'rgba(255,255,255,0.03)', color: 'white' }} />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label style={labelStyle}>Secondary Accent Color</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="color" name="secondaryColor" value={formData.secondaryColor} onChange={handleInputChange}
                      style={{ width: '50px', height: '48px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }} />
                    <input type="text" name="secondaryColor" value={formData.secondaryColor} onChange={handleInputChange}
                      style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', outline: 'none', background: 'rgba(255,255,255,0.03)', color: 'white' }} />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label style={labelStyle}>Business Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
                </div>

                {/* WhatsApp */}
                <div>
                  <label style={labelStyle}>WhatsApp Link (Country code + number)</label>
                  <input type="text" name="whatsapp" placeholder="e.g. 447123456789" value={formData.whatsapp} onChange={handleInputChange} style={inputStyle} />
                </div>

                {/* Logo */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Logo Image URL (Optional)</label>
                  <input type="text" name="logo" placeholder="https://example.com/logo.png" value={formData.logo} onChange={handleInputChange} style={inputStyle} />
                </div>

                {/* Background */}
                <div>
                  <label style={labelStyle}>Hero Background Style</label>
                  <select name="bg" value={formData.bg} onChange={handleInputChange} style={selectStyle}>
                    <option value="video">Cinematic Video Loop (Standard)</option>
                    <option value="1">Hero Image 1 (Smiling Face)</option>
                    <option value="2">Hero Image 2 (Luxury Interior)</option>
                    <option value="3">Hero Image 3 (Happy Group)</option>
                  </select>
                </div>

                {/* Layout */}
                <div>
                  <label style={labelStyle}>Hero Card Alignment</label>
                  <select name="layout" value={formData.layout} onChange={handleInputChange} style={selectStyle}>
                    <option value="1">Left-Aligned Content (Clean & Classic)</option>
                    <option value="2">Centered Content (Modern Overlay Card)</option>
                    <option value="3">Right-Aligned Content (Unique Layout)</option>
                  </select>
                </div>

                {/* Chatbot Toggle */}
                <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '0.5rem' }}>
                  <input type="checkbox" name="chatbot" id="chatbot" checked={formData.chatbot} onChange={handleInputChange}
                    style={{ width: '20px', height: '20px', accentColor: '#d4af37', cursor: 'pointer' }} />
                  <label htmlFor="chatbot" style={{ fontSize: '0.95rem', color: '#e5e7eb', cursor: 'pointer', userSelect: 'none' }}>
                    Enable dynamic AI Assistant Chatbot (Demo Bot)
                  </label>
                </div>

                {/* Submit */}
                <div style={{ gridColumn: 'span 2', marginTop: '1.5rem' }}>
                  <button type="submit"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #d4af37 0%, #aa8416 100%)',
                      color: '#070a13', border: 'none', padding: '16px', borderRadius: '12px',
                      fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 24px rgba(212, 175, 55, 0.25)',
                      letterSpacing: '1px', textTransform: 'uppercase'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.15)'}
                    onMouseOut={(e) => e.currentTarget.style.filter = 'none'}
                  >
                    Generate Personalized Demo Link
                  </button>
                </div>
              </form>
            </div>

            {/* Generated Deliverables */}
            {generatedUrl && (
              <div style={{ ...cardStyle, animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#d4af37', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', fontWeight: 600 }}>
                  Generated Prospect Assets
                </h2>

                {/* URL Output */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ ...labelStyle, marginBottom: '10px' }}>Mockup Link</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'stretch', flexWrap: 'wrap' }}>
                    <input type="text" readOnly value={generatedUrl}
                      style={{ flex: 1, minWidth: '200px', padding: '14px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.25)', color: '#10b981', fontWeight: 600, fontSize: '0.95rem', outline: 'none' }} />
                    <button onClick={() => copyToClipboard(generatedUrl, setCopiedLink)}
                      style={{
                        background: copiedLink ? '#10b981' : '#1f2937',
                        color: 'white', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', padding: '0 20px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                      {copiedLink ? 'Copied!' : 'Copy Link'}
                    </button>
                    <a href={generatedUrl} target="_blank" rel="noopener noreferrer"
                      style={{
                        background: '#d4af37', color: '#070a13', borderRadius: '10px', padding: '0 20px',
                        fontWeight: 600, display: 'flex', alignItems: 'center', transition: 'all 0.2s', textDecoration: 'none'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                      onMouseOut={(e) => e.currentTarget.style.filter = 'none'}>
                      Launch Mockup →
                    </a>
                  </div>
                </div>

                {/* Email Output */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <label style={{ ...labelStyle, marginBottom: 0 }}>Outreach Email Copy</label>
                    <button onClick={() => copyToClipboard(emailTemplate, setCopiedEmail)}
                      style={{
                        background: copiedEmail ? '#10b981' : 'transparent',
                        color: copiedEmail ? 'white' : '#d4af37',
                        border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem'
                      }}>
                      {copiedEmail ? 'Copied Email Template!' : 'Copy Email to Clipboard'}
                    </button>
                  </div>
                  <textarea readOnly value={emailTemplate} rows={15}
                    style={{ width: '100%', padding: '20px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.25)', color: '#cbd5e1', fontSize: '0.9rem', fontFamily: 'monospace', resize: 'vertical', outline: 'none', lineHeight: '1.5' }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════ */}
        {/* ═══ TAB 2: PROSPECT ACTIVITY DASHBOARD ═════════ */}
        {/* ════════════════════════════════════════════════════ */}
        {activeTab === 'activity' && (
          <div style={{ display: 'grid', gap: '2rem' }}>

            {/* ── Stats Bar ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'Total Prospects', value: stats.totalProspects, icon: '👤', color: '#6366f1' },
                { label: 'Total Page Views', value: stats.totalVisits, icon: '👁️', color: '#8b5cf6' },
                { label: 'Hot Leads (2+ views)', value: stats.hotLeads, icon: '🔥', color: '#ef4444' },
                { label: 'Viewed Today', value: stats.todayVisits, icon: '📅', color: '#22c55e' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(17, 24, 39, 0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ── Activity Feed ── */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '10px' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'white', fontWeight: 600, margin: 0 }}>
                  Live Prospect Feed
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {lastRefreshed && (
                    <span style={{ fontSize: '0.75rem', color: '#4b5563' }}>
                      Updated {timeAgo(lastRefreshed.toISOString())}
                    </span>
                  )}
                  <button onClick={fetchActivity} disabled={isLoadingActivity}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px', padding: '8px 16px',
                      color: '#d4af37', fontSize: '0.8rem', fontWeight: 600,
                      cursor: 'pointer', transition: 'all 0.2s',
                      opacity: isLoadingActivity ? 0.5 : 1,
                    }}>
                    {isLoadingActivity ? '⟳ Loading...' : '⟳ Refresh'}
                  </button>
                </div>
              </div>

              {/* Empty State */}
              {prospects.length === 0 && !isLoadingActivity && (
                <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}>📭</div>
                  <h3 style={{ color: '#6b7280', fontWeight: 600, marginBottom: '0.5rem' }}>No prospect activity yet</h3>
                  <p style={{ color: '#4b5563', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto' }}>
                    Generate a demo link, send it to a prospect, and their visit will appear here in real-time.
                  </p>
                </div>
              )}

              {/* Loading Skeleton */}
              {isLoadingActivity && prospects.length === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{
                      height: '80px', borderRadius: '12px',
                      background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
                      animation: `shimmer 1.5s infinite`,
                      backgroundSize: '200% 100%',
                    }} />
                  ))}
                </div>
              )}

              {/* Prospect Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {prospects.map((prospect, idx) => {
                  const isHot = prospect.totalVisits >= 2;
                  const visitedBooking = prospect.recentVisits?.some(v => v.page === 'book');
                  const lastVisit = prospect.recentVisits?.[0];

                  return (
                    <div key={idx} style={{
                      background: isHot ? 'rgba(239, 68, 68, 0.04)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isHot ? 'rgba(239, 68, 68, 0.2)' : visitedBooking ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '16px',
                      padding: '1.25rem 1.5rem',
                      transition: 'all 0.3s ease',
                      animation: idx < 3 ? `fadeInUp 0.5s ${idx * 0.1}s both` : 'none',
                    }}
                      onMouseOver={(e) => { e.currentTarget.style.background = isHot ? 'rgba(239, 68, 68, 0.07)' : 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = isHot ? 'rgba(239, 68, 68, 0.04)' : 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                        
                        {/* Left: Prospect Info */}
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                            {/* Status Dot */}
                            <span style={{
                              width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
                              background: isHot ? '#ef4444' : visitedBooking ? '#22c55e' : '#6366f1',
                              boxShadow: isHot ? '0 0 10px rgba(239, 68, 68, 0.5)' : visitedBooking ? '0 0 10px rgba(34, 197, 94, 0.5)' : 'none',
                              animation: isHot ? 'pulse 2s ease-in-out infinite' : 'none',
                            }} />
                            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f3f4f6' }}>{prospect.name}</span>
                            
                            {/* Badges */}
                            {isHot && (
                              <span style={{ padding: '2px 8px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                🔥 Hot Lead
                              </span>
                            )}
                            {visitedBooking && (
                              <span style={{ padding: '2px 8px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                📅 Viewed Booking
                              </span>
                            )}
                          </div>

                          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#6b7280', flexWrap: 'wrap' }}>
                            <span>{nicheLabel(prospect.template)}</span>
                            {lastVisit?.city && lastVisit.city !== 'Unknown' && (
                              <span>📍 {lastVisit.city}{lastVisit.country && lastVisit.country !== 'Unknown' ? `, ${lastVisit.country}` : ''}</span>
                            )}
                            {lastVisit?.device && <span>{lastVisit.device === 'Mobile' ? '📱' : '💻'} {lastVisit.device}</span>}
                          </div>
                        </div>

                        {/* Right: Visit Stats */}
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: 600 }}>
                            {prospect.totalVisits} visit{prospect.totalVisits !== 1 ? 's' : ''}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '2px' }}>
                            {timeAgo(prospect.lastSeen)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
      
      {/* Scoped animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}} />
    </div>
  );
}
