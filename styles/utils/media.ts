import { CSSProp, css } from 'styled-components'
import { DeviceSizeType, devices } from '../theme/devices'

export function media(type: DeviceSizeType, style: CSSProp) {
  return css`
    @media screen and (${devices[type]}) {
      ${style}
    }
  `
}
