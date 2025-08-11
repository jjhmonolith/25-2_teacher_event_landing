'use client'

import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'

export default function Quote() {
  return (
    <section className="py-20 bg-gradient-quote text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-40 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism-dark w-20 h-20 rounded-full flex items-center justify-center animate-pulse-soft">
              <QuoteIcon className="h-10 w-10 text-white drop-shadow-lg" />
            </div>
          </motion.div>
          
          <motion.blockquote 
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="italic text-white/90"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              혼란 속에서도
            </motion.span>
            <br />
            <motion.span 
              className="font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              교육의 흐름을 지키는 힘,
            </motion.span>
            <br />
            <motion.span 
              className="text-white/95 font-medium"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              선생님 곁에 <span className="text-accent font-bold">코들</span>이 있습니다.
            </motion.span>
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-white/40 via-accent to-white/40 mx-auto rounded-full"
          />
          
          {/* Floating Codle logo */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism-dark w-16 h-16 rounded-full flex items-center justify-center animate-float p-3">
              <img src="/logos/codle-white-simple.svg" alt="Codle" className="w-10 h-10" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced background blobs */}
        <div className="absolute -left-20 top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -right-20 bottom-10 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  )
}