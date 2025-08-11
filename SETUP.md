# 코들 선도교사 모집 랜딩페이지 - 설치 가이드

## 빠른 시작

```bash
# 1. 패키지 설치
npm install

# 2. 환경변수 설정
cp .env.example .env.local
# .env.local 파일에서 NEXT_PUBLIC_TYPEFORM_URL을 실제 타입폼 URL로 수정

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 필요한 패키지 설치 순서 (이미 완료됨)

```bash
# 기본 Next.js 패키지
npm install next@14.2.8 react react-dom typescript @types/node @types/react @types/react-dom

# Tailwind CSS
npm install tailwindcss postcss autoprefixer tailwindcss-animate
npx tailwindcss init -p

# shadcn/ui 관련
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-slot @radix-ui/react-toast
npm install class-variance-authority clsx tailwind-merge

# 애니메이션 & 아이콘
npm install framer-motion lucide-react

# 개발 도구
npm install eslint eslint-config-next
```

## Vercel 배포

1. GitHub에 코드 업로드
2. [Vercel](https://vercel.com) 접속 후 GitHub 저장소 Import
3. 환경변수 설정:
   - `NEXT_PUBLIC_TYPEFORM_URL`: 실제 타입폼 URL
4. Deploy 클릭

## 주요 특징

✅ **완전히 작동하는 랜딩페이지** - 모든 컴포넌트 구현 완료  
✅ **타입폼 연동** - CTA 버튼 클릭 시 새 탭으로 타입폼 열기  
✅ **UTM 파라미터 전달** - 현재 URL의 쿼리를 타입폼에 자동 전달  
✅ **추천인 링크 생성** - 푸터에서 추천 링크 생성 및 복사  
✅ **반응형 디자인** - 모바일부터 데스크톱까지 완벽 지원  
✅ **접근성 고려** - ARIA 레이블, 키보드 네비게이션  
✅ **SEO 최적화** - 메타태그, OG 이미지, robots.txt  
✅ **Framer Motion 애니메이션** - 부드러운 스크롤 애니메이션  
✅ **Pretendard 폰트** - 한국어 최적화 웹폰트  

## 폴더 구조

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃 
│   ├── page.tsx           # 메인 페이지
│   ├── robots.txt         # SEO
│   └── sitemap.xml        # SEO
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── header.tsx        # 헤더 (로고, CTA)
│   ├── hero.tsx          # 히어로 섹션
│   ├── benefits.tsx      # 혜택 섹션 (4개 카드)
│   ├── target.tsx        # 대상 섹션 (체크리스트)
│   ├── quote.tsx         # 인용문 섹션
│   ├── faq.tsx           # FAQ (아코디언)
│   ├── cta-section.tsx   # 최종 CTA
│   └── footer.tsx        # 푸터 (추천 링크 생성)
├── lib/
│   └── utils.ts          # 유틸리티 (URL 머지, 클립보드 등)
├── public/
│   ├── favicon.svg       # 파비콘
│   ├── og-image.svg      # OG 이미지
│   └── illustrations/    # SVG 일러스트
└── 설정 파일들
```

## 사용된 기술

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + 커스텀 유틸리티 클래스
- **shadcn/ui** (Button, Card, Accordion, Input)
- **Framer Motion** (스크롤 애니메이션)
- **Lucide React** (아이콘)
- **Pretendard** (웹폰트)

## 브랜드 컬러

- **Primary**: `#3B82F6` (Blue)
- **Accent**: `#F59E0B` (Amber) 
- **Surface**: `#F8FAFC`, `#FFFFFF`
- **Text**: `#0F172A` / Subtle: `#475569`