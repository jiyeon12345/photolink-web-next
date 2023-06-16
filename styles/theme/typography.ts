import {
  T_FontSize,
  T_LetterSpacing,
  T_LineHeight,
} from '@/types/styles/typography'

// * 각각의 폰트 사이즈, 간격, 자간(key)에 따른 픽셀 값(value)을 매핑한 객체
// * 이를 통해 폰트 사이즈를 통일적으로 관리
export const fontSize: T_FontSize = {
  12: '12px',
  13: '13px',
  14: '14px',
  16: '16px',
  18: '18px',
  24: '24px',
}

export const lineHeight: T_LineHeight = {
  12: '16px',
  13: '20px',
  14: '24px',
  16: '24px',
  18: '28px',
  24: '34px',
}

export const letterSpacing: T_LetterSpacing = {
  12: '-0.5px',
  13: '-1px',
  14: '-1px',
  16: '-1px',
  18: '-2px',
  24: '-1px',
}
