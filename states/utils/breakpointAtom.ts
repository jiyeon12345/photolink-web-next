import { atom } from 'jotai'
import { selectAtom } from 'jotai/utils'

export const breakpointAtom = atom<Breakpoint | null>(null)

export const isMobileAtom = selectAtom(breakpointAtom, (bp) => bp === 'mobile')

export const isTabletAtom = selectAtom(breakpointAtom, (bp) => bp === 'tablet')

export const isLaptopAtom = selectAtom(breakpointAtom, (bp) => bp === 'laptop')

export const isWideAtom = selectAtom(breakpointAtom, (bp) => bp === 'wide')

export const fromLaptopAtom = selectAtom(breakpointAtom, (bp) => {
  return ['laptop', 'desktop', 'wide'].includes(bp as string)
})

export const isDesktopAtom = selectAtom(breakpointAtom, (bp) => {
  return ['desktop'].includes(bp as string)
})

export const fromTabletAtom = selectAtom(breakpointAtom, (bp) => {
  return ['tablet', 'laptop', 'desktop', 'wide'].includes(bp as string)
})

export const fromDesktopAtom = selectAtom(breakpointAtom, (bp) => {
  return ['desktop', 'wide'].includes(bp as string)
})
