import { T_ScreenSize } from '@/types/styles/screen'

// * 각각의 스크린 사이즈(key)에 따른 픽셀 값(value)을 매핑한 객체
// * 이를 통해 미디어 쿼리 등에서 사용될 수 있는 반응형 디자인의 기준 값들을 효율적으로 관리
export const screens: Record<T_ScreenSize, string> = {
  mobile: '375px',
  tablet: '800px',
  laptop: '1280px',
  desktop: '1600px',
  wide: '1920px',
}
