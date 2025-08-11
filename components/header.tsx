'use client'

import { Button } from '@/components/ui/button'
import { mergeQueryToUrl } from '@/lib/utils'

export default function Header() {
  const handleCTAClick = () => {
    const typeformUrl = process.env.NEXT_PUBLIC_TYPEFORM_URL || 'https://example.typeform.com'
    const finalUrl = mergeQueryToUrl(typeformUrl, window.location.search)
    window.open(finalUrl, '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-hero bg-dots border-b border-white/30" style={{position: 'fixed'}}>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/10 to-accent/10"></div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative z-10">
        <div className="flex items-center space-x-3">
          <img 
            src="/logos/codle-logo.svg" 
            alt="CODLE Logo" 
            className="h-8 w-auto"
          />
        </div>
        <Button onClick={handleCTAClick}>
          선도교사 신청하기
        </Button>
      </div>
    </header>
  )
}