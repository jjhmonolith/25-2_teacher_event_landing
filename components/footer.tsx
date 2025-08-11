'use client'

import { Mail, Heart, Code, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6 space-x-6">
              <div className="glass-morphism p-4 rounded-2xl animate-float">
                <img 
                  src="/logos/codle-logo-white.svg" 
                  alt="CODLE Logo" 
                  className="h-12 w-auto"
                />
              </div>
              
              <div className="flex items-center">
                <span className="text-slate-300 font-medium mx-3">by</span>
              </div>
              
              <div className="glass-morphism p-4 rounded-2xl animate-float" style={{animationDelay: '1s'}}>
                <img 
                  src="/logos/teammonolith-logo-white.svg" 
                  alt="Team Monolith Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-4 text-slate-300">
              코들 × 팀모노리스
            </h3>
            
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              선생님들과 함께 만들어가는 교육의 미래
              <br />
              역사상 가장 스마트한 교실을 만듭니다.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 text-slate-400">
              <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
                <Mail className="h-4 w-4" />
                <span className="text-sm">codle@team-mono.com</span>
              </div>
              
              <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
                <span className="text-sm">📞</span>
                <span className="text-sm">070-7666-9959</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                <p>© 2025 (주)팀모노리스</p>
                <p className="mt-1">개인정보는 안내된 목적 외에는 사용하지 않습니다.</p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>선도교사 프로그램</span>
                <span>·</span>
                <span>2025년 2학기</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}