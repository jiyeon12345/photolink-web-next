import { CSSProp, css } from 'styled-components'
import { DeviceType, devices } from '../theme/devices'

export function media(type: DeviceType, style: CSSProp) {
  return css`
    @media screen and (${devices[type]}) {
      ${style}
    }
  `
}
