import { useAtomValue } from 'jotai'
import { useIsMounted } from './useIsMounted'
import { breakpointAtom } from '@/states/utils/breakpointAtom'
import { useMemo } from 'react'
import {
  isBrowser as _isBrowser,
  isMobile as _isMobile,
  isTablet as _isTablet,
} from 'react-device-detect'

/**
 * * `useResponsive`는 현재 디바이스 환경에 따른 반응형 디자인 지원을 위한 훅
 * * 현재 디바이스가 모바일, 태블릿, 노트북, 데스크탑 중 어떤 것인지를 판단하고,
 * * 이를 바탕으로 해당 디바이스에 가장 잘 맞는 UI 레이아웃을 선택하는데 도움을 줍니다.
 * *`useResponsive`는 useMemo를 사용하여 성능을 최적화하며, 디바이스 환경에 따라 변경되는 값들을 재계산.
 */

export function useResponsive() {
  const mounted = useIsMounted()
  const bp = useAtomValue(breakpointAtom)

  // * 현재 화면 크기가 모바일이거나, 브라우저가 모바일인 경우 true
  const isMobile = useMemo(() => {
    return bp === 'mobile' || (mounted && _isMobile && !bp)
  }, [bp, mounted])

  // * 현재 화면 크기가 태블릿이거나, 브라우저가 태블릿인 경우 true
  const isTablet = useMemo(() => {
    return bp === 'tablet' || (mounted && _isTablet && !bp)
  }, [bp, mounted])

  // * 현재 화면 크기가 랩탑인 경우 true
  const isLaptop = useMemo(() => {
    return bp === 'laptop'
  }, [bp])

  // * 현재 화면 크기가 데스크탑인 경우 true
  const isDesktop = useMemo(() => {
    return bp === 'desktop'
  }, [bp])

  // * 현재 화면 크기와 브라우저가 모바일이거나 태블릿인 경우 true
  const isMobileOrTablet = useMemo(
    () => isMobile || isTablet,
    [isMobile, isTablet]
  )

  // * 현재 화면 크기가 랩탑이거나 데스크탑인 경우 true
  const isLaptopOrDesktop = useMemo(
    () => isLaptop || isDesktop,
    [isDesktop, isLaptop]
  )

  // * 현재 화면 크기가 데스크탑보다 작은 경우 true
  const isSmallerThanDesktop = useMemo(
    () => isMobile || isTablet || isLaptop,
    [isLaptop, isMobile, isTablet]
  )

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isMobileOrTablet,
    isLaptopOrDesktop,
    isSmallerThanDesktop,
  }
}
