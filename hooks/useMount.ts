import { useEffect } from 'react'

/**
 * * 컴포넌트가 마운트될 때에만 주어진 콜백 함수를 실행.
 * * 콜백 함수는 컴포넌트가 마운트된 직후에 즉시 실행.
 * @param {Function} fn - *마운트 시 실행할 콜백 함수.
 */
export function useMount(fn: () => void) {
  useEffect(() => {
    fn()
  }, [])
}
