import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import SocialProof from "@/components/SocialProof"
import PortfolioSection from "@/components/PortfolioSection"
import Footer from "@/components/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SocialProof />
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
