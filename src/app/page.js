import AgencyHero from "@/components/agency/AgencyHero";
import AgencyStack from "@/components/agency/AgencyStack";
import AgencyBento from "@/components/agency/AgencyBento";
import AgencyProcess from "@/components/agency/AgencyProcess";
import AgencyPricing from "@/components/agency/AgencyPricing";
import AgencyFooter from "@/components/agency/AgencyFooter";

export const metadata = {
  title: 'AuraBix | High-Ticket Digital Architecture',
  description: 'We engineer digital revenue machines for elite medical and dental clinics.',
}

export default function Home() {
  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Minimalist Top Nav for Agency Site */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="font-bold text-2xl tracking-tighter text-white pointer-events-auto">AuraBix</div>
        <a href="/generator" className="text-sm font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors pointer-events-auto">
          Client Generator
        </a>
      </nav>

      <main>
        <AgencyHero />
        <AgencyStack />
        <AgencyBento />
        <AgencyProcess />
        <AgencyPricing />
      </main>

      <AgencyFooter />
    </div>
  )
}
