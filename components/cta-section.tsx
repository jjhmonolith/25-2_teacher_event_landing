'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { mergeQueryToUrl } from '@/lib/utils'

export default function CTASection() {
  const handleCTAClick = () => {
    const typeformUrl = process.env.NEXT_PUBLIC_TYPEFORM_URL || 'https://example.typeform.com'
    const finalUrl = mergeQueryToUrl(typeformUrl, window.location.search)
    window.open(finalUrl, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-hero bg-dots relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full animate-pulse-soft blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full border border-white/30 animate-pulse-soft">
              <Sparkles className="h-5 w-5 text-accent fill-accent animate-bounce-soft" />
              <span className="text-slate-700 font-medium">함께 만들어가는 교육의 미래</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            지금 신청하고
            <br />
            <span className="text-gradient">2학기 준비를 가볍게</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            변화하는 교육 환경 속에서도
            <br className="sm:hidden" />
            흔들리지 않는 수업을 위해,
            <br />
            코들이 선생님과 함께 걸어가겠습니다.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-soft"></div>
            
            <Button 
              onClick={handleCTAClick} 
              size="lg" 
              className="relative text-xl px-12 py-6 h-auto shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border-2 border-primary/20 hover:border-accent/30 rounded-2xl group animate-bounce-soft hover:animate-none"
            >
              <span className="flex items-center space-x-3">
                <span className="font-bold">선도교사 신청하기</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Sparkle effects */}
              <div className="absolute top-0 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 space-y-3"
          >
            <p className="text-sm text-slate-500 flex items-center justify-center space-x-2">
              <span>⚡</span>
              <span>신청은 간단하고, 선생님의 소중한 시간을 존중합니다.</span>
            </p>
            
            <div className="flex justify-center items-center space-x-6 text-xs text-slate-400">
              <div className="flex items-center space-x-1">
                <span>🔒</span>
                <span>안전한 타입폼 연동</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📝</span>
                <span>1분 내 완료</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>💝</span>
                <span>1 대 1 케어</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}