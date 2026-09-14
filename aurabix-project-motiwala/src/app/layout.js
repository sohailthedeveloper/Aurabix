import "./globals.css"

const baseUrl = "https://motiwala.aurabix.com"

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Motiwala Creations | Premium Men's Wedding Wear — Kondhwa Khurd, Pune",
    template: "%s | Motiwala Creations"
  },
  description: "Motiwala Creations (Tareef Premium Wedding Wear) — Pune's premier destination for luxury menswear in Kondhwa Khurd. Turning premium fabrics into custom-tailored sherwanis, luxury suits, and ethnic menswear since 1982. 4.3★ rated, 186+ reviews.",
  keywords: [
    "men's wedding wear Kondhwa",
    "sherwani Pune",
    "premium suits Kondhwa",
    "wedding sherwani Pune",
    "Motiwala Creations",
    "men's clothing store Kondhwa",
    "jodhpuri suit Pune",
    "indo western dress Pune",
    "bandhgala Pune",
    "groom wear Pune",
    "bridal wear men Pune",
    "wedding outfit men Kondhwa",
    "designer sherwani Kondhwa Pune",
    "best men's wedding store Pune",
    "Motiwala wedding wear",
    "premium clothing Kondhwa",
    "men's fashion Pune",
    "luxury menswear Pune Maharashtra",
    "Meeta Nagar Kondhwa clothing shop",
    "Sheetal Square Kondhwa boutique"
  ],
  authors: [{ name: "Motiwala Creations" }],
  creator: "Motiwala Creations",
  publisher: "Motiwala Creations",
  category: "Clothing Store",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    title: "Motiwala Creations | Premium Men's Wedding Wear — Kondhwa Khurd, Pune",
    description: "Pune's premier destination for luxury menswear. Custom-tailored sherwanis, suits and ethnic wear since 1982. 4.3★ Google rating. Located in Kondhwa Khurd, Pune.",
    siteName: "Motiwala Creations",
    images: [{
      url: "/motiwala-logo.png",
      width: 1200,
      height: 630,
      alt: "Motiwala Creations — Premium Men's Wedding Wear Kondhwa Khurd Pune"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Motiwala Creations | Premium Men's Wedding Wear — Kondhwa Khurd, Pune",
    description: "Pune's premier destination for luxury menswear since 1982. Visit our Kondhwa Khurd boutique.",
    images: ["/motiwala-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Kondhwa Khurd, Pune, Maharashtra, India",
    "geo.position": "18.4695;73.8886",
    "ICBM": "18.4695, 73.8886",
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "LocalBusiness"],
  "@id": `${baseUrl}/#business`,
  "name": "Motiwala Creations Mens Premium Wedding Wear",
  "alternateName": "Motiwala Creations (Tareef Premium Wedding Wear)",
  "description": "Pune's premier destination for luxury menswear. Offering custom-tailored sherwanis, luxury suits, and ethnic menswear since 1982.",
  "url": baseUrl,
  "telephone": "+919850052520",
  "priceRange": "₹₹₹",
  "image": `${baseUrl}/motiwala-logo.png`,
  "logo": `${baseUrl}/motiwala-logo.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 9, Sheetal Square, next to Sheetal Petrol Pump, Meeta Nagar",
    "addressLocality": "Kondhwa Khurd",
    "addressRegion": "Maharashtra",
    "postalCode": "411048",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.4695,
    "longitude": 73.8886
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "11:00",
      "closes": "21:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": "186",
    "bestRating": "5"
  },
  "hasMap": "https://maps.app.goo.gl/uqd4SobNCHKkdeZy9",
  "sameAs": [],
  "servesCuisine": null,
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI",
  "areaServed": {
    "@type": "City",
    "name": "Pune"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Motiwala Creations located in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Motiwala Creations is located at Shop No. 9, Sheetal Square, Next to Sheetal Petrol Pump, Meeta Nagar, Kondhwa Khurd, Pune, Maharashtra 411048."
      }
    },
    {
      "@type": "Question",
      "name": "What type of men's wear does Motiwala Creations offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Motiwala Creations offers a premium collection of men's wedding wear including custom sherwanis, Jodhpuri suits, business suits, tuxedos, and casual ethnic wear."
      }
    },
    {
      "@type": "Question",
      "name": "What are the store hours for Motiwala Creations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Motiwala Creations is open Tuesday to Sunday from 11:00 AM to 9:00 PM. We are closed on Mondays."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a tailoring appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a tailoring appointment by calling +91 98500 52520, via WhatsApp, or by using the scheduling form on our website."
      }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <meta name="theme-color" content="#0A0A0B" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
