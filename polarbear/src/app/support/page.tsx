import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ActionSection from '@/components/sections/ActionSection'
import PbiSection from '@/components/sections/PbiSection'

export default function SupportPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <ActionSection />
        <PbiSection />
      </main>
      <Footer />
    </>
  )
}
