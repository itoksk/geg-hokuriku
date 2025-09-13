import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import TipsSection from './components/TipsSection'
import DesignTips from './components/DesignTips'
import PromptExamples from './components/PromptExamples'
import GeminiSection from './components/GeminiSection'
import GoogleSitesIntegration from './components/GoogleSitesIntegration'
import AIStudioSection from './components/AIStudioSection'
import Workshop from './components/Workshop'
import ToolComparison from './components/ToolComparison'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-paper via-white to-gray-50">
      <ScrollProgress />
      <Header scrollY={scrollY} />
      
      <main className="relative">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Features />
            <TipsSection />
            <DesignTips />
            <PromptExamples />
            <GeminiSection />
            <GoogleSitesIntegration />
            <AIStudioSection />
            <Workshop />
            <ToolComparison />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App