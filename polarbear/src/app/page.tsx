import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutSection from '@/components/sections/AboutSection'
import ActionSection from '@/components/sections/ActionSection'
import CtaSection from '@/components/sections/CtaSection'
import DataSection from '@/components/sections/DataSection'
import HeroSection from '@/components/sections/HeroSection'
import ImportanceSection from '@/components/sections/ImportanceSection'
import ThreatSection from '@/components/sections/ThreatSection'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ThreatSection />
        <DataSection />
        <ImportanceSection />
        <ActionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
