export type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'wide'
export type LimitType = 'min' | 'max'

export const sizes = {
  mobile: { min: 375, max: 374 },
  tablet: { min: 800, max: 799 },
  laptop: { min: 1280, max: 1279 },
  desktop: { min: 1600, max: 1599 },
  wide: { min: 1920, max: 1919 },
}

export const devices: Record<DeviceType, Record<LimitType, string>> = {} as any

for (const device in sizes) {
  devices[device as DeviceType] = {
    min: `min-width: ${sizes[device as DeviceType].min}px`,
    max: `max-width: ${sizes[device as DeviceType].max}px`,
  }
}
