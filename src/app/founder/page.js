import Navbar from "@/components/Navbar"
import FounderNote from "@/components/FounderNote"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export const metadata = {
  title: "Sohail Shaikh — Founder & CEO of AuraBix",
  description: "Meet Sohail Shaikh, the Founder & CEO of AuraBix — a premium AI-powered digital growth agency. Connect on LinkedIn and Instagram @aurabix.official.",
  keywords: [
    "Sohail Shaikh",
    "Founder of AuraBix",
    "CEO AuraBix",
    "Sohail Shaikh AuraBix",
    "Sohail Shaikh digital agency",
    "AuraBix founder",
    "Sohail Shaikh Pune",
    "digital agency founder India"
  ],
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Sohail Shaikh — Founder & CEO | AuraBix",
    description: "Sohail Shaikh is the Founder & CEO of AuraBix, a premium AI-powered digital growth agency serving elite businesses worldwide.",
    url: "https://aurabix.com/founder",
    images: [{ url: "/founder.jpg", width: 800, height: 800, alt: "Sohail Shaikh — Founder & CEO, AuraBix" }]
  }
}

export default function FounderPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aurabix.com/founder#person",
    "name": "Sohail Shaikh",
    "givenName": "Sohail",
    "familyName": "Shaikh",
    "jobTitle": "Founder & CEO",
    "description": "Sohail Shaikh is the Founder & CEO of AuraBix, a premium AI-powered digital growth agency helping elite businesses worldwide achieve exponential digital growth.",
    "image": "https://aurabix.com/founder.jpg",
    "url": "https://aurabix.com/founder",
    "worksFor": { "@type": "Organization", "name": "AuraBix", "url": "https://aurabix.com" },
    "sameAs": [
      "https://www.linkedin.com/in/sohailshaikhh/",
      "https://www.instagram.com/aurabix.official/"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#05040a]">
        <FounderNote />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
