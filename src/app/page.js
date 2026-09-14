import AgencyHero from "@/components/agency/AgencyHero";
import AgencyStack from "@/components/agency/AgencyStack";
import AgencyBento from "@/components/agency/AgencyBento";
import AgencyProcess from "@/components/agency/AgencyProcess";
import AgencyTeam from "@/components/agency/AgencyTeam";
import AgencyPricing from "@/components/agency/AgencyPricing";
import AgencyFooter from "@/components/agency/AgencyFooter";

export const metadata = {
  title: 'AuraBix | High-Ticket Digital Architecture',
  description: 'We engineer digital revenue machines for elite medical and dental clinics.',
}

export default function Home() {
  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Top Nav for Agency Site */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <img src="/aurabix-logo.png" alt="AuraBix" className="h-8 md:h-10 w-auto pointer-events-auto object-contain" />
        <a href="mailto:hello@aurabix.com" className="text-sm font-medium tracking-wide uppercase text-white hover:text-purple-400 transition-colors pointer-events-auto">
          Contact Us
        </a>
      </nav>

      <main>
        <AgencyHero />
        <AgencyStack />
        <AgencyBento />
        <AgencyProcess />
        <AgencyTeam />
        <AgencyPricing />
      </main>

      <AgencyFooter />
    </div>
  )
}
