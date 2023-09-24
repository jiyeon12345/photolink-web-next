export type DeviceSizeType =
  | 'minMobile'
  | 'maxMobile'
  | 'minTablet'
  | 'maxTablet'
  | 'minLaptop'
  | 'maxLaptop'
  | 'minDesktop'
  | 'maxDesktop'
  | 'minWide'
  | 'maxWide'

export const sizes = {
  mobile: 375,
  tablet: 800,
  laptop: 1280,
  desktop: 1600,
  wide: 1920,
}

export const devices: Record<DeviceSizeType, string> = {
  minMobile: `min-width: ${sizes.mobile}px`,
  maxMobile: `max-width: ${sizes.mobile - 1}px`,
  minTablet: `min-width: ${sizes.tablet}px`,
  maxTablet: `max-width: ${sizes.tablet - 1}px`,
  minLaptop: `min-width: ${sizes.laptop}px`,
  maxLaptop: `max-width: ${sizes.laptop - 1}px`,
  minDesktop: `min-width: ${sizes.desktop}px`,
  maxDesktop: `max-width: ${sizes.desktop - 1}px`,
  minWide: `min-width: ${sizes.wide}px`,
  maxWide: `max-width: ${sizes.wide - 1}px`,
} as const
