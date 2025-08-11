'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
  {
    question: '비용이 정말 10만원인가요?',
    answer: '네, 맞습니다. 단, 추천 1회 이상 하시는 분은 5만원으로 더욱 저렴하게 이용하실 수 있습니다.',
  },
  {
    question: '추천인은 어떻게 적나요?',
    answer: '신청 시 \'추천인\' 칸에 소개해준 선생님의 성함을 적어주시면 됩니다.',
  },
  {
    question: '신규 콘텐츠 우선권은 언제부터인가요?',
    answer: '9월 이후 새로운 콘텐츠가 순차 배포될 때 선도교사분들께 우선적으로 제공됩니다.',
  },
  {
    question: '원격 연수는 누가 받나요?',
    answer: '선도교사로 참여하시는 모든 분께서 요청하시면 맞춤형 활용법 세션을 제공해드립니다.',
  },
  {
    question: '학운위 서류는 무엇을 지원하나요?',
    answer: '학교운영위원회 심의를 위한 제안서, 운영 계획서 샘플과 작성 가이드를 제공해드립니다.',
  },
  {
    question: '개인정보는 어떻게 처리되나요?',
    answer: '타입폼을 통해 수집되며, 선도교사 프로그램 운영 목적 외에는 사용하지 않습니다.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-50 bg-grid relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            자주 묻는 <span className="text-gradient">질문</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            궁금한 점이 있으시면
            <br className="sm:hidden" />
            언제든 문의해 주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-morphism rounded-2xl border-white/30 hover:border-primary/30 px-6 py-2 group transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-slate-900 hover:no-underline hover:text-primary transition-colors font-semibold py-4 group-hover:text-primary">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💡</span>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-4 pl-11">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}