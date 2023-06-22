import { notoSansKR } from './font'

export type TextStyle = 'header' | 'button'

const h1 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '6rem',
  lineHeight: 1.1666666666666667,
  letterSpacing: '-0.02em',
}

const h2 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '5rem',
  lineHeight: 1.3,
  letterSpacing: '-0.02em',
}

const h3 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '4rem',
  lineHeight: 1.1875,
  letterSpacing: '-0.01em',
}

const h4 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '3rem',
  lineHeight: 1.25,
  letterSpacing: '-0.005em',
}

const h5 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '2rem',
  lineHeight: 1.25,
}

const h6 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '1.75rem',
  lineHeight: 1.2857142857142858,
}

const button1 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '1.25rem',
  lineHeight: 1.2,
  textAlign: 'center',
}

const button2 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: 1.5,
  textAlign: 'center',
}

const button3 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '0.8125rem',
  lineHeight: 1.3846153846,
  textAlign: 'center',
}

export const headers = {
  1: h1,
  2: h2,
  3: h3,
  4: h4,
  5: h5,
  6: h6,
}

export const buttons = {
  1: button1,
  2: button2,
  3: button3,
}
