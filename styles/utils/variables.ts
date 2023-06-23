import { colors } from '../theme/colors'

/*
 * generateHexVariables 함수는 CSS 변수를 생성하여 반환
 * 변수들은 색상에 대한 정보를 담음
 * GlobalStyle에서 root사용
 * @returns {Array} CSS 변수를 표현하는 문자열의 배열을 반환
 */

export function generateHexVariables() {
  return Object.entries(colors).map(([key, scales]) => {
    if (typeof scales === 'string') return `--${key}: ${scales};`
    return Object.entries(scales).map(
      ([scale, value]) => `--${key}-${scale}: ${value};`
    )
  })
}
