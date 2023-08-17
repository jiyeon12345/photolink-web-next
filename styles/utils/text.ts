import { assertUnreachable } from '@/utils/assertUnreachable'
import { TextStyle, bodies, buttons, headers } from '../theme/typography'

export function header(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return {
    ...headers[level],
    fontWeight: 600,
  }
}

export function button(level: 1 | 2 | 3) {
  return {
    ...buttons[level],
    fontWeight: 600,
    textAlign: 'center',
  }
}

export function body(level: 1 | 2 | 3 | 4, weight: 500 | 700) {
  return {
    ...bodies[level],
    fontWeight: weight,
  }
}

export function textStyle(
  type: TextStyle,
  level?: any,
  weight: 500 | 700 = 500
) {
  switch (type) {
    case 'header':
      return header(level)
    case 'button':
      return button(level)
    case 'body':
      return body(level, weight)
    default:
      assertUnreachable(type)
  }
}
