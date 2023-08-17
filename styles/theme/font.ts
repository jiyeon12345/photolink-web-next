import { Noto_Sans_KR } from 'next/font/google'

/*
 * 폰트
 * swap: 폰트가 로드되는 동안 다른 폰트를 임시로 보여줌
 * fallback: 폰트가 로드되지 않았을 때 대체할 폰트
 */
export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'block',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'sans-serif',
  ],
})
