import { useAtomValue } from 'jotai'
import { useIsMounted } from './useIsMounted'
import { breakpointAtom } from '@/states/utils/breakpointAtom'
import { useMemo } from 'react'
import {
  isBrowser as _isBrowser,
  isMobile as _isMobile,
  isTablet as _isTablet,
} from 'react-device-detect'

export function useResponsive() {
  const mounted = useIsMounted()
  const bp = useAtomValue(breakpointAtom)

  const isMobile = useMemo(() => {
    return bp === 'mobile'
  }, [bp, mounted])

  const isTablet = useMemo(() => {
    return bp === 'tablet'
  }, [bp, mounted])

  const isLaptop = useMemo(() => {
    return bp === 'laptop'
  }, [bp])

  const isDesktop = useMemo(() => {
    return bp === 'desktop'
  }, [bp])

  const isHandled = useMemo(() => isMobile || isTablet, [isMobile, isTablet])

  const isSmallerThanDesktop = useMemo(
    () => isMobile || isTablet || isLaptop,
    [isLaptop, isMobile, isTablet]
  )

  const isBrowser = useMemo(() => isLaptop || isDesktop, [isDesktop, isLaptop])

  return {
    isBrowser,
    isSmallerThanDesktop,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isHandled,
  }
}
