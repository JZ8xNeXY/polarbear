import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutSection from '@/components/sections/AboutSection'
import ActionSection from '@/components/sections/ActionSection'
import ClimateSection from '@/components/sections/ClimateSection'
import DataSection from '@/components/sections/DataSection'
import HeroSection from '@/components/sections/HeroSection'
import ImportanceSection from '@/components/sections/ImportanceSection'
import PbiSection from '@/components/sections/PbiSection'
import ThreatSection from '@/components/sections/ThreatSection'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <HeroSection />
        <AboutSection />
        <ThreatSection />
        <ClimateSection />
        <DataSection />
        <ImportanceSection />
        <ActionSection />
        <PbiSection />
      </main>
      <Footer />
    </>
  )
}
