import Header from '@/components/header'
import Hero from '@/components/hero'
import Benefits from '@/components/benefits'
import Target from '@/components/target'
import Quote from '@/components/quote'
import FAQ from '@/components/faq'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Target />
      <Quote />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}