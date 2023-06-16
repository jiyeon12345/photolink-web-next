import { T_Colors } from '@/types/styles/colors'

// * 색상 설정하는 객체
// * key는 생각의 강도를 나타내는 숫자, value는 그에 해당하는 HEX 코드
const primary = {
  50: '#EDEDFE',
  100: '#D9DAFD',
  200: '#B3B7FB',
  300: '#8E93F9',
  400: '#6870F7',
  500: '#1b2bf0',
  600: '#1B24C2',
  700: '#181C93',
  800: '#151465',
  900: '#120C36',
}

const secondary = {
  50: '#F2F2F2',
  100: '#E5E5E5',
  200: '#BFBFBF',
  300: '#999999',
  400: '#737373',
  500: '#CCCCCC',
  600: '#999999',
  700: '#666666',
  800: '#333333',
  900: '#000000',
}

const tertiary = {
  50: '#F7F7F7',
  100: '#EFEFEF',
  200: '#D9D9D9',
  300: '#C2C2C2',
  400: '#959595',
  500: '#EFEFEF',
  600: '#959595',
  700: '#5B5B5B',
  800: '#2D2D2D',
  900: '#0E0E0E',
}

const red = {
  50: '#FFEBEB',
  100: '#FFCFCF',
  200: '#FFAFAF',
  300: '#FF8F8F',
  400: '#FF6F6F',
  500: '#ff340c',
  600: '#C12C09',
  700: '#921E06',
  800: '#631003',
  900: '#340200',
}

const yellow = {
  50: '#FEFBED',
  100: '#FDF6DC',
  200: '#FBEAB7',
  300: '#F9DF91',
  400: '#F6D46B',
  500: '#e4d40f',
  600: '#AD9C0A',
  700: '#756405',
  800: '#3D2D00',
  900: '#050000',
}

export const black = '#000000'
export const white = '#ffffff'

export const colors: T_Colors = {
  primary,
  secondary,
  tertiary,
  red,
  yellow,
  black,
  white,
}
