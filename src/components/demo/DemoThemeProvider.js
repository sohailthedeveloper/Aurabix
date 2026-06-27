"use client";
import { createContext, useContext, useEffect } from 'react';

const DemoThemeContext = createContext({
  clinicName: "Zenith Dental",
  clinicPhone: "020 8866 0758",
  logoUrl: null,
  whatsapp: null,
  showChatbot: true,
  bg: "video",
  layout: "1",
  primaryColor: "#0f172a",
  secondaryColor: "#d4af37",
  token: ""
});

export const useDemoTheme = () => useContext(DemoThemeContext);

// Helper: hex to R,G,B string (e.g. "15,23,42")
function hexToRgb(hex) {
  if (!hex) return "15,23,42";
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map(c => c + c).join('')
    : clean;
  const num = parseInt(full, 16);
  return `${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}`;
}

// Helper: lighten a hex color by mixing with white
function lightenHex(hex, amount = 0.6) {
  if (!hex) return "rgb(240,244,255)";
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map(c => c + c).join('')
    : clean;
  const num = parseInt(full, 16);
  const r = Math.round(((num >> 16) & 255) + (255 - ((num >> 16) & 255)) * amount);
  const g = Math.round(((num >> 8) & 255) + (255 - ((num >> 8) & 255)) * amount);
  const b = Math.round((num & 255) + (255 - (num & 255)) * amount);
  return `rgb(${r},${g},${b})`;
}

export default function DemoThemeProvider({ config, children }) {
  useEffect(() => {
    if (!config) return;
    const root = document.documentElement;

    // Apply primary colors
    if (config.primaryColor) {
      const primary = config.primaryColor;
      const primaryRgb = hexToRgb(primary);
      const primaryLight = lightenHex(primary, 0.92);
      const primaryMid = lightenHex(primary, 0.7);

      root.style.setProperty('--primary', primary);
      root.style.setProperty('--primary-container', lightenHex(primary, 0.15));
      root.style.setProperty('--primary-rgb', primaryRgb);
      root.style.setProperty('--primary-light', primaryLight);
      root.style.setProperty('--primary-mid', primaryMid);
      root.style.setProperty('--hero-overlay-start', `rgba(${primaryRgb},0.92)`);
      root.style.setProperty('--hero-overlay-mid',   `rgba(${primaryRgb},0.5)`);
    }

    // Apply secondary/accent colors
    if (config.secondaryColor) {
      root.style.setProperty('--secondary', config.secondaryColor);
      root.style.setProperty('--secondary-container', lightenHex(config.secondaryColor, 0.6));
      root.style.setProperty('--accent', config.secondaryColor);
    }
  }, [config]);

  const themeValue = {
    clinicName: config?.name || "Zenith Dental",
    clinicPhone: config?.phone || "020 8866 0758",
    logoUrl: config?.logo || null,
    whatsapp: config?.whatsapp || null,
    showChatbot: config?.chatbot !== false,
    bg: config?.bg || "video",
    layout: config?.layout || "1",
    primaryColor: config?.primaryColor || "#0f172a",
    secondaryColor: config?.secondaryColor || "#d4af37",
    token: config?.token || ""
  };

  return (
    <DemoThemeContext.Provider value={themeValue}>
      {children}
    </DemoThemeContext.Provider>
  );
}
