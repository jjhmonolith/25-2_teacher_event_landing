import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mergeQueryToUrl(baseUrl: string, fromLocationSearch: string): string {
  try {
    const url = new URL(baseUrl)
    const searchParams = new URLSearchParams(fromLocationSearch)
    
    // 기존 URL의 모든 쿼리 파라미터를 새로운 쿼리로 덮어쓰기/추가
    searchParams.forEach((value, key) => {
      url.searchParams.set(key, value)
    })
    
    return url.toString()
  } catch (error) {
    console.error('URL 머지 중 오류 발생:', error)
    return baseUrl
  }
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text)
    .then(() => true)
    .catch((error) => {
      console.error('클립보드 복사 실패:', error)
      return false
    })
}

export function generateReferralLink(referrerName: string, currentUrl: string): string {
  try {
    const url = new URL(currentUrl)
    url.searchParams.set('ref', referrerName)
    return url.toString()
  } catch (error) {
    console.error('추천 링크 생성 중 오류 발생:', error)
    return currentUrl
  }
}