'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { mergeQueryToUrl } from '@/lib/utils'

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const [showWipeAnimation, setShowWipeAnimation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 첫 페이지(히어로 섹션)를 넘어가면 표시
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY
      
      setIsVisible(scrollY > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 5초마다 유리창 닦기 애니메이션 실행
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setShowWipeAnimation(true)
      setTimeout(() => setShowWipeAnimation(false), 800) // 0.8초 후 애니메이션 종료
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible])

  const handleCTAClick = () => {
    const typeformUrl = process.env.NEXT_PUBLIC_TYPEFORM_URL || 'https://example.typeform.com'
    const finalUrl = mergeQueryToUrl(typeformUrl, window.location.search)
    window.open(finalUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-0 right-0 z-50 px-4"
        >
          <div className="max-w-xs mx-auto">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="w-full h-14 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border-2 border-primary/20 hover:border-accent/30 rounded-2xl group relative overflow-hidden"
            >
              <span className="flex items-center justify-center space-x-3 relative z-10">
                <span>선도교사 신청하기</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Enhanced shadow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              
              {/* 유리창 닦기 애니메이션 */}
              {showWipeAnimation && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%', skewX: -20 }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  style={{ width: '50%' }}
                />
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}