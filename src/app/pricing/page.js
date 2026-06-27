import Navbar from "@/components/Navbar"
import PricingSection from "@/components/PricingSection"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export const metadata = {
  title: "Pricing | AuraBix — Premium Digital Growth Agency",
  description: "Transparent pricing for premium websites, SEO, and digital growth. Plans in INR, USD, GBP, AED and AUD. No hidden fees.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AuraBix Pricing — Premium Digital Plans",
    description: "Choose your plan. No hidden fees. Premium web architecture priced for your market.",
    url: "https://aurabix.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#05040a]">
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
