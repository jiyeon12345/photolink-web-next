import { useCallback, useEffect, useMemo } from 'react'
import { useSetAtom } from 'jotai'
import { Breakpoint } from '@/config/constants'
import { breakpointAtom } from '@/states/utils/breakpointAtom'
import { useMount } from './useMount'

// * Breakpoint 객체를 기반으로 엔트리(키-값 쌍), 키, 그리고 미디어 쿼리 문자열을 생성
const bpEntries = Object.entries(Breakpoint)
const bpLength = bpEntries.length
const bpKeys = Object.keys(Breakpoint)
const bpQueries = Object.values(Breakpoint).map((value, i) => {
  if (i === bpLength - 1) return `(min-width: ${value}px)`

  const maxWidth = bpEntries[i + 1][1] - 1
  if (i === 0) return `(max-width: ${maxWidth}px)`
  return `(min-width: ${value}px) and (max-width: ${maxWidth}px)`
})

export function useMediaQuery() {
  // * jotai를 통해 breakpointAtom의 상태를 변경하는 함수를 가져옴
  const setBreakpoint = useSetAtom(breakpointAtom)

  // * 미디어 쿼리 리스트를 생성
  const mql = useMemo(
    () =>
      bpQueries.map((query) => {
        if (typeof window === 'undefined') return null
        return window.matchMedia(query)
      }),
    []
  )

  // * 현재 화면 사이즈가 어떤 미디어 쿼리에 일치하는지 찾아 그 브레이크포인트를 설정
  const update = useCallback(() => {
    const match = mql.findIndex((mq) => !!mq?.matches)
    if (match < 0) return
    const newBp = bpKeys[match] as Breakpoint

    setBreakpoint(newBp)
  }, [mql, setBreakpoint])

  // * 컴포넌트가 처음 마운트될 때 update 함수를 실행
  useMount(update)

  // * 화면 사이즈가 변경될 때마다 update 함수를 실행하도록 이벤트 리스너를 추가하고, 컴포넌트가 언마운트될 때 제거
  useEffect(() => {
    mql.forEach((mq) => mq?.addEventListener('change', update))

    return () => {
      mql.forEach((mq) => mq?.removeEventListener('change', update))
    }
  }, [mql, update])
}
