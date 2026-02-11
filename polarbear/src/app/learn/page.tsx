import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutSection from '@/components/sections/AboutSection'
import ClimateSection from '@/components/sections/ClimateSection'
import ThreatSection from '@/components/sections/ThreatSection'

export default function LearnPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <AboutSection />
        <ThreatSection />
        <ClimateSection />
      </main>
      <Footer />
    </>
  )
}
