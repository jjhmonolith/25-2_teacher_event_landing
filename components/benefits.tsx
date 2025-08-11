'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    title: '2학기 코들 Pro 최대 99% 할인',
    description: '학생 수 관계없이 총 10만원이면 충분합니다. 다른 선생님 초대까지 하면 50% 추가 할인.',
    image: '/icons/benefit-1.png'
  },
  {
    title: '신규 콘텐츠 우선 사용',
    description: '새로운 콘텐츠가 나오면 가장 먼저 사용해보시고, 피드백도 남겨주세요.',
    image: '/icons/benefit-2.png'
  },
  {
    title: '언제든 원격 연수',
    description: '코들 활용법과 창의적인 수업 아이디어를 언제든지 지원받으실 수 있어요.',
    image: '/icons/benefit-3.png'
  },
  {
    title: '학운위 심의 서류 적극 지원',
    description: '학교운영위원회 심의용 제안서와 운영 계획서 작성을 도와드려요.',
    image: '/icons/benefit-4.png'
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-slate-50 bg-grid relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            선도교사 <span className="text-gradient">혜택</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            실질적이고 의미있는 지원으로
            <br className="sm:hidden" />
            선생님의 수업을 응원합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full glass-morphism border-white/30 hover:border-white/50 transition-all duration-500 relative overflow-hidden">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 relative">
                        {/* Image icon container */}
                        <div className="w-20 h-20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={benefit.image} 
                            alt={`${benefit.title} 아이콘`}
                            className="w-16 h-16 object-contain animate-bounce-soft"
                          />
                        </div>
                        
                        {/* Floating particles */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/30 rounded-full animate-ping"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300 text-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-base">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}