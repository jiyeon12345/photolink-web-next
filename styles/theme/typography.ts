import { notoSansKR } from './font'

export type TextStyle = 'header' | 'button' | 'body'

const h1 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: 1.1666666666666667,
  letterSpacing: '-0.02em',
}

const h2 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: 1.3,
  letterSpacing: '-0.02em',
}

const h3 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: 1.1875,
  letterSpacing: '-0.01em',
}

const h4 = {
  fontFamily: notoSansKR,
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: 1.25,
  letterSpacing: '-0.005em',
}

const h5 = {
  fontFamily: notoSansKR,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1.25,
}

const h6 = {
  fontFamily: notoSansKR,
  fontSize: '12px',
  fontWeight: 600,
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

const body1 = {
  fontFamily: notoSansKR,
  fontWeight: 500,
  fontSize: '1.125rem',
  lineHeight: 1.3333333333333333,
}

const body2 = {
  fontFamily: notoSansKR,
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.3333333333333333,
}

const body3 = {
  fontFamily: notoSansKR,
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.4285714285714286,
}

const body4 = {
  fontFamily: notoSansKR,
  fontWeight: 500,
  fontSize: '0.8125rem',
  lineHeight: 1.3846153846153846,
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

export const bodies = {
  1: body1,
  2: body2,
  3: body3,
  4: body4,
}
