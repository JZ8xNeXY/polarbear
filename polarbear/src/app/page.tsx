import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import HomeHubSection from '@/components/sections/HomeHubSection'
import ImportanceSection from '@/components/sections/ImportanceSection'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <HeroSection />
        <ImportanceSection />
        <HomeHubSection />
      </main>
      <Footer />
    </>
  )
}
