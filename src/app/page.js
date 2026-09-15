import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import SocialProof from "@/components/SocialProof"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import TeamSection from "@/components/TeamSection"
import PricingSection from "@/components/PricingSection"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export const metadata = {
  title: "AuraBix | AI-Powered Digital Architecture",
  description: "AuraBix is a world-class digital partner for ambitious brands. We build high-converting web systems and engineer aggressive organic search dominance.",
  alternates: { canonical: "https://aurabix.com" },
  openGraph: {
    title: "AuraBix | AI-Powered Digital Architecture",
    description: "Sohail Shaikh, Founder & CEO of AuraBix. We build high-converting web systems and engineer aggressive organic search dominance.",
    url: "https://aurabix.com",
    images: [{ url: "/aurabix-logo.png", width: 1200, height: 630 }],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#000000] min-h-screen text-white overflow-x-hidden">
        <HeroSection />
        <SocialProof />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
