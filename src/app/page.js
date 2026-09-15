import NewNavbar from "@/components/amphora/NewNavbar"
import NewHero from "@/components/amphora/NewHero"
import NewShowcase from "@/components/amphora/NewShowcase"
import NewQuality from "@/components/amphora/NewQuality"
import NewMarquee from "@/components/amphora/NewMarquee"
import NewProcess from "@/components/amphora/NewProcess"
import NewPortfolio from "@/components/amphora/NewPortfolio"
import NewTeam from "@/components/amphora/NewTeam"
import NewPricing from "@/components/amphora/NewPricing"
import NewComparison from "@/components/amphora/NewComparison"
import NewTestimonials from "@/components/amphora/NewTestimonials"
import NewBooking from "@/components/amphora/NewBooking"
import NewFAQ from "@/components/amphora/NewFAQ"
import NewFooter from "@/components/amphora/NewFooter"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export default function Home() {
  return (
    <>
      <NewNavbar />
      <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
        <NewHero />
        <NewShowcase />
        <NewQuality />
        <NewMarquee />
        <NewProcess />
        <NewPortfolio />
        <NewTeam />
        <NewPricing />
        <NewComparison />
        <NewTestimonials />
        <NewBooking />
        <NewFAQ />
      </main>
      <NewFooter />
      <WhatsAppWidget />
    </>
  )
}
