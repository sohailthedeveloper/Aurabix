import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import ContactModal from "@/components/ContactModal"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata = {
  metadataBase: new URL("https://aurabix.com"),
  title: {
    default: "AuraBix | Premium AI-Powered Digital Growth Agency",
    template: "%s | AuraBix"
  },
  description: "AuraBix is a world-class AI-powered digital agency offering premium website design, SEO, social media management, and video production for elite businesses globally. Founded by Sohail Shaikh.",
  keywords: [
    "digital agency",
    "marketing agency",
    "premium website builder",
    "AI powered agency",
    "web design agency",
    "SEO agency",
    "social media agency",
    "website design agency India",
    "digital growth agency",
    "premium web design",
    "best digital agency",
    "AuraBix",
    "Sohail Shaikh",
    "aurabix.com",
    "AI marketing agency",
    "luxury web design agency",
    "global digital agency",
    "website agency Pune",
    "digital agency India",
    "video production agency",
    "online presence agency",
    "business growth agency"
  ],
  authors: [{ name: "Sohail Shaikh", url: "https://www.linkedin.com/in/sohailshaikhh/" }],
  creator: "Sohail Shaikh",
  publisher: "AuraBix",
  category: "Digital Marketing Agency",
  classification: "Business & Technology",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_IN", "en_AE"],
    url: "https://aurabix.com",
    title: "AuraBix | Premium AI-Powered Digital Growth Agency",
    description: "World-class AI-powered digital agency. Premium websites, SEO dominance, social media authority & video production for elite businesses globally.",
    siteName: "AuraBix",
    images: [
      {
        url: "/aurabix-logo.png",
        width: 1200,
        height: 630,
        alt: "AuraBix — Premium AI-Powered Digital Growth Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraBix | Premium AI-Powered Digital Growth Agency",
    description: "World-class AI-powered digital agency for elite businesses globally. Premium websites, SEO, social media & video production.",
    images: ["/aurabix-logo.png"],
    creator: "@aurabix"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Maharashtra, India",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
  }
}

export default function RootLayout({ children }) {

  // ── Schema 1: Organisation (triggers Knowledge Panel) ──
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aurabix.com/#organization",
    "name": "AuraBix",
    "alternateName": ["Aurabix", "AuraBix Digital Agency", "AuraBix Agency"],
    "url": "https://aurabix.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aurabix.com/aurabix-logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://aurabix.com/aurabix-logo.png",
    "description": "AuraBix is a premium AI-powered digital growth agency offering world-class website design, SEO, social media management, and video production for elite businesses globally.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "@id": "https://aurabix.com/founder#person",
      "name": "Sohail Shaikh",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@id": "https://aurabix.com/#organization" },
      "sameAs": [
        "https://www.linkedin.com/in/sohailshaikhh/",
        "https://www.instagram.com/aurabix.official/"
      ]
    },
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "1-10" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "hello@aurabix.com",
        "contactType": "customer service",
        "areaServed": ["IN", "US", "GB", "AE", "AU", "CA", "SG"],
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/aurabix.official/",
      "https://www.linkedin.com/in/sohailshaikhh/"
    ],
    "areaServed": {
      "@type": "GeoShape",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AuraBix Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Website Design & Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimisation (SEO)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management & Authority" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Precision Paid Advertising Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Production & Shooting (India)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered Business Automation" } }
      ]
    },
    "priceRange": "$$$$",
    "slogan": "We Architect Exponential Growth."
  }

  // ── Schema 2: Person — Sohail Shaikh (Knowledge Panel trigger) ──
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aurabix.com/founder#person",
    "name": "Sohail Shaikh",
    "givenName": "Sohail",
    "familyName": "Shaikh",
    "jobTitle": "Founder & CEO",
    "description": "Sohail Shaikh is the Founder & CEO of AuraBix, a premium AI-powered digital growth agency helping elite businesses worldwide achieve exponential digital growth through websites, SEO, social media, and video production.",
    "image": "https://aurabix.com/founder.jpg",
    "url": "https://aurabix.com/founder",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://aurabix.com/#organization",
      "name": "AuraBix"
    },
    "knowsAbout": [
      "Web Design & Development",
      "Search Engine Optimisation",
      "Digital Marketing",
      "AI Automation",
      "Social Media Strategy",
      "Video Production",
      "Business Growth Strategy"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/sohailshaikhh/",
      "https://www.instagram.com/aurabix.official/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  }

  // ── Schema 3: WebSite (enables Sitelinks Search Box) ──
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aurabix.com/#website",
    "url": "https://aurabix.com",
    "name": "AuraBix",
    "description": "Premium AI-Powered Digital Growth Agency",
    "publisher": { "@id": "https://aurabix.com/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": "https://aurabix.com/?q={search_term_string}" },
      "query-input": "required name=search_term_string"
    }
  }

  // ── Schema 4: Professional Service ──
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://aurabix.com/#service",
    "name": "AuraBix",
    "image": "https://aurabix.com/aurabix-logo.png",
    "url": "https://aurabix.com",
    "email": "hello@aurabix.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": ["Worldwide", "India", "USA", "United Kingdom", "UAE", "Australia"],
    "sameAs": [
      "https://www.instagram.com/aurabix.official/",
      "https://www.linkedin.com/in/sohailshaikhh/"
    ],
    "openingHours": "Mo-Su 09:00-22:00",
    "founder": { "@id": "https://aurabix.com/founder#person" }
  }

  // ── Schema 5: FAQ (appears as rich results in Google) ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AuraBix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AuraBix is a premium AI-powered digital growth agency founded by Sohail Shaikh. We build world-class websites, engineer SEO dominance, manage social media authority, and produce professional video content for elite businesses globally."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the founder of AuraBix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sohail Shaikh is the Founder & CEO of AuraBix. You can connect with him on LinkedIn at linkedin.com/in/sohailshaikhh or Instagram at @aurabix.official."
        }
      },
      {
        "@type": "Question",
        "name": "What services does AuraBix offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AuraBix offers: Premium AI-powered website design and development, Search Engine Optimisation (SEO), Social media management and content strategy, Precision paid advertising campaigns (Meta & Google Ads), Video production and shooting (India), and AI-powered business automation."
        }
      },
      {
        "@type": "Question",
        "name": "Does AuraBix work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! AuraBix serves clients globally including India, USA, UK, UAE, and Australia. All digital services are available worldwide. Video production and on-site shooting services are available within India."
        }
      },
      {
        "@type": "Question",
        "name": "How much does AuraBix charge for a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AuraBix website packages start from ₹25,000 in India ($499 USD, £399 GBP). Visit aurabix.com/pricing for full transparent pricing across all countries and service tiers."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact AuraBix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact AuraBix directly via email at hello@aurabix.com or by filling out the strategic consultation forms on our website at aurabix.com."
        }
      }
    ]
  }

  const allSchemas = [organizationSchema, personSchema, websiteSchema, professionalServiceSchema, faqSchema]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Canonical sameAs signals for Google */}
        <link rel="me" href="https://www.instagram.com/aurabix.official/" />
        <link rel="me" href="https://www.linkedin.com/in/sohailshaikhh/" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-obsidian text-offwhite selection:bg-gold/30 selection:text-white`}>
        {children}
        <ContactModal />
      </body>
    </html>
  )
}
