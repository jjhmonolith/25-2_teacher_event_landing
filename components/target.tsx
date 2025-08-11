'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const targetCriteria = [
  {
    text: '중학교 정보교사',
    image: '/icons/target-1.png'
  },
  {
    text: '2학기 에듀테크 활용 계획이 있는 분',
    image: '/icons/target-2.png'
  },
  {
    text: '동료 선생님께 노하우를 나누시는 분',
    image: '/icons/target-3.png'
  },
]

export default function Target() {
  return (
    <section className="py-20 bg-white bg-dots relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              선도교사 <span className="text-gradient">대상</span>
            </h2>
            <p className="text-lg text-slate-600">
              다음 조건을 만족하는
              <br className="sm:hidden" />
              선생님을 모십니다.
            </p>
          </div>

          <div className="space-y-6">
            {targetCriteria.map((criteria, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <div className="flex items-center space-x-2 sm:space-x-6 p-3 sm:p-6 glass-morphism rounded-2xl border-white/30 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={criteria.image} 
                          alt={`${criteria.text} 아이콘`}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-bounce-soft"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <Check className="h-4 w-4 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 animate-pulse-soft" />
                        <span className="text-slate-900 font-semibold text-[15px] sm:text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
                          {criteria.text}
                        </span>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 bg-primary/5 rounded-2xl border border-primary/10"
          >
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-900">함께 성장하는 교육 공동체</strong>를 만들어가고 싶은
              <br className="sm:hidden" />
              따뜻한 마음을 가진 선생님이라면
              <br className="sm:hidden" />
              언제든 환영합니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}