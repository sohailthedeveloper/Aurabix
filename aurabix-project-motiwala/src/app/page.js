import MotiNavbar from '@/components/motiwala/MotiNavbar'
import MotiHero from '@/components/motiwala/MotiHero'
import MotiTrustBar from '@/components/motiwala/MotiTrustBar'
import MotiCollections from '@/components/motiwala/MotiCollections'
import MotiStory from '@/components/motiwala/MotiStory'
import MotiWhyUs from '@/components/motiwala/MotiWhyUs'
import MotiProcess from '@/components/motiwala/MotiProcess'
import MotiTestimonials from '@/components/motiwala/MotiTestimonials'
import MotiLoyalty from '@/components/motiwala/MotiLoyalty'
import MotiLeadMagnet from '@/components/motiwala/MotiLeadMagnet'
import MotiBooking from '@/components/motiwala/MotiBooking'
import MotiMap from '@/components/motiwala/MotiMap'
import MotiWhatsApp from '@/components/motiwala/MotiWhatsApp'
import MotiFooter from '@/components/motiwala/MotiFooter'

export default function Home() {
  return (
    <>
      <MotiNavbar />
      <main>
        <MotiHero />
        <MotiTrustBar />
        <MotiCollections />
        <MotiStory />
        <MotiWhyUs />
        <MotiProcess />
        <MotiTestimonials />
        <MotiLoyalty />
        <MotiLeadMagnet />
        <MotiBooking />
        <MotiMap />
      </main>
      <MotiFooter />
      <MotiWhatsApp />
    </>
  )
}
