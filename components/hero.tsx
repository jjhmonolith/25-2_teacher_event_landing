'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Share } from 'lucide-react'
import { mergeQueryToUrl } from '@/lib/utils'

export default function Hero() {
  const handleCTAClick = () => {
    const typeformUrl = process.env.NEXT_PUBLIC_TYPEFORM_URL || 'https://example.typeform.com'
    const finalUrl = mergeQueryToUrl(typeformUrl, window.location.search)
    window.open(finalUrl, '_blank')
  }

  const handleShareClick = async () => {
    const shareData = {
      title: '코들 중학교 선도교사 모집',
      text: `2025년 2학기 코들 중학교 선도교사 모집! 

📚 신청 대상:
• 중학교 정보교사
• 25-2학기에 정보 수업에서 코스웨어를 활용하실 계획이 있는 분  
• 다른 선생님께 수업 사례와 노하우를 나눠주실 수 있는 분

"혼란 속에서도 교육의 흐름을 지키는 힘, 선생님 곁에 코들이 있습니다."

최대 99% 할인 혜택과 다양한 지원을 받으실 수 있습니다.`,
      url: window.location.href
    }

    try {
      // Web Share API 지원 확인 (모바일에서 주로 지원)
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
        console.log('공유 완료')
      } else {
        // 웹에서는 클립보드에 복사
        await navigator.clipboard.writeText(window.location.href)
        alert('링크가 클립보드에 복사되었습니다!')
      }
    } catch (error) {
      // AbortError는 사용자가 공유를 취소한 경우이므로 무시
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('사용자가 공유를 취소했습니다')
        return
      }
      
      // 실제 오류인 경우에만 클립보드 복사로 대체
      console.log('공유 오류:', error)
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('링크가 클립보드에 복사되었습니다!')
      } catch (clipboardError) {
        console.error('클립보드 복사 실패:', clipboardError)
        alert('공유 기능을 사용할 수 없습니다. 링크를 직접 복사해주세요: ' + window.location.href)
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-hero bg-dots flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 md:space-y-8"
          >
            <motion.div 
              className="flex justify-center mb-12 md:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full border border-white/30 animate-pulse-soft">
                <span className="text-2xl">🎓</span>
                <span className="text-slate-700 font-medium">25년 2학기 코들 중학교 선도교사 모집</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              교육에 진심인 선생님께
              <br />
              <span className="text-gradient">드리는 초대</span>
            </h1>
            
            <p className="hidden sm:block text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AIDT 변화 속에서도 수업이 흔들리지 않도록, 그리고 더 빛날 수 있도록—
              <br className="hidden md:block" />
              코들이 진심으로 함께합니다.
            </p>
            
            {/* Desktop version */}
            <div className="hidden sm:block max-w-2xl mx-auto text-slate-700 leading-relaxed">
              이번 학기 AIDT가 보조자료로 바뀌며 준비가 더 어려워진걸 잘 알고 있습니다. 
              그럼에도 아이들의 배움을 지키는 선생님의 마음을 응원하며, 
              코들이 작지만 실질적인 지원을 준비했습니다.
            </div>
            
            {/* Mobile version - much shorter */}
            <div className="block sm:hidden max-w-2xl mx-auto text-slate-700 leading-relaxed text-center text-base">
              AIDT 변화로 준비가 어려워졌지만,<br />
              아이들의 배움을 지키는 선생님께<br />
              코들이 실질적인 지원을 준비했습니다.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button onClick={handleCTAClick} size="lg" className="w-full sm:w-auto animate-bounce-soft hover:animate-none">
              선도교사 신청하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleShareClick}
              className="w-full sm:w-auto"
            >
              <Share className="mr-2 h-4 w-4" />
              다른 선생님께 공유하기
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}