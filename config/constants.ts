export const Breakpoint = {
  mobile: 0,
  tablet: 800,
  laptop: 1280,
  desktop: 1600,
  wide: 1920,
} as const

export type Breakpoint = keyof typeof Breakpoint

export const ModalType = {
  Test: 'Test',
  Test2: 'Test2',
} as const

export type ModalType = (typeof ModalType)[keyof typeof ModalType]
