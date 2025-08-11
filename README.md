# 코들 선도교사 모집 랜딩페이지

AIDT 변화 속에서도 수업이 흔들리지 않도록, 그리고 더 빛날 수 있도록—코들이 진심으로 함께하는 선도교사 모집 랜딩페이지입니다.

## 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 주요 기능

- 📝 **타입폼 연동**: 모든 CTA 버튼은 외부 타입폼으로 연결
- 🔗 **UTM 파라미터 전달**: 현재 페이지의 UTM과 ref 파라미터를 타입폼에 자동 전달
- 👥 **추천인 링크 생성**: 간편한 추천 링크 생성 및 복사 기능
- 🎨 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 지원
- ♿ **접근성**: ARIA 레이블, 포커스 상태, 시맨틱 마크업
- ⚡ **성능 최적화**: Framer Motion과 Tailwind CSS로 빠른 로딩

## 로컬 실행

1. 패키지 설치:
   ```bash
   npm install
   ```

2. 환경변수 설정:
   ```bash
   cp .env.example .env.local
   ```
   
   `.env.local` 파일에서 타입폼 URL을 설정:
   ```
   NEXT_PUBLIC_TYPEFORM_URL=https://your.typeform.com/to/xxxx
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## Vercel 배포

1. GitHub 저장소를 Vercel에 Import
2. 환경변수 설정:
   - `NEXT_PUBLIC_TYPEFORM_URL`: 실제 타입폼 URL 입력
3. Deploy 버튼 클릭

## 커스텀 도메인 연결

1. Vercel Dashboard > 해당 프로젝트 > Domains 탭
2. "Add" 버튼 클릭하여 도메인 추가
3. DNS 설정 가이드를 따라 도메인 연결

## UTM 파라미터 & 추천인 전달

CTA 버튼 클릭 시 현재 URL의 쿼리 파라미터들이 타입폼 URL에 자동으로 전달됩니다:

**예시:**
- 현재 URL: `https://codle-landing.vercel.app?utm_source=facebook&utm_campaign=teacher&ref=김선생님`
- 타입폼 이동: `https://your.typeform.com/to/xxxx?utm_source=facebook&utm_campaign=teacher&ref=김선생님`

## 추천 링크 생성

푸터의 "추천 링크 생성하기" 기능을 통해:
1. 추천인 이름 입력
2. 현재 URL에 `?ref=추천인이름` 파라미터가 추가된 링크 생성
3. 클립보드에 자동 복사

## 프로젝트 구조

```
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── header.tsx          # 헤더
│   ├── hero.tsx           # 히어로 섹션
│   ├── benefits.tsx       # 혜택 섹션
│   ├── target.tsx         # 대상 섹션
│   ├── quote.tsx          # 인용문 섹션
│   ├── faq.tsx            # FAQ
│   ├── cta-section.tsx    # CTA 섹션
│   └── footer.tsx         # 푸터
├── lib/
│   └── utils.ts           # 유틸리티 함수
├── public/
│   ├── favicon.svg        # 파비콘
│   ├── og-image.png       # OG 이미지
│   └── illustrations/     # SVG 일러스트
└── package.json
```

## 빌드 & 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 브랜드 가이드라인

- **Primary Color**: #3B82F6 (Blue)
- **Accent Color**: #F59E0B (Amber)
- **Font**: Pretendard (웹폰트)
- **Tone**: 따뜻하고 진심 어린 교육 동반자
- **Design**: 여백 넉넉, 둥근 모서리, 소프트 섀도우

## 라이센스

MIT License

## 문의

문제가 발생하거나 궁금한 점이 있으시면 hello@codle.example로 연락해 주세요.