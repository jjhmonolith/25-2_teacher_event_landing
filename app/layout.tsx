import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '코들 선도교사 모집 | CODLE',
  description: 'AIDT 변화 속에서도 수업이 흔들리지 않도록, 그리고 더 빛날 수 있도록—코들이 진심으로 함께합니다.',
  keywords: ['코들', 'CODLE', '선도교사', 'AIDT', '정보교육', '코스웨어'],
  authors: [{ name: 'CODLE' }],
  metadataBase: new URL('https://codle-landing.vercel.app'),
  openGraph: {
    title: '코들 선도교사 모집',
    description: 'AIDT 변화 속에서도 수업이 흔들리지 않도록, 그리고 더 빛날 수 있도록—코들이 진심으로 함께합니다.',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: '코들 선도교사 모집',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '코들 선도교사 모집',
    description: 'AIDT 변화 속에서도 수업이 흔들리지 않도록, 그리고 더 빛날 수 있도록—코들이 진심으로 함께합니다.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}