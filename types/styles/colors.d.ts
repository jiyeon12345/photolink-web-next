// * 컬러 키의 집합을 표현하는 타입
type ColorKeys =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

// * ColorScale 타입은 ColorKeys에서 문자열(이 컨텍스트에서는 색상 코드)로의 맵핑
type ColorScale = Record<ColorKeys, string>

/*
 * T_Colors는 우리의 색상 체계를 표현하는 타입
 * 각각의 색상 척도와 개별 색상이 특정 키와 연결
 */
export type T_Colors = {
  primary: ColorScale
  secondary: ColorScale
  tertiary: ColorScale
  red: ColorScale
  yellow: ColorScale
  white: string
  black: string
}
