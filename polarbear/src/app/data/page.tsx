import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DataSection from '@/components/sections/DataSection'

export default function DataPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <DataSection />
      </main>
      <Footer />
    </>
  )
}
