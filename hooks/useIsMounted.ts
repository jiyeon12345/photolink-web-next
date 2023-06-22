import { useState, useEffect } from 'react'

/**
 *  * 컴포넌트의 마운트 상태를 관리하는 훅
 *  * 컴포넌트가 마운트되면 `mounted` 상태를 `true`로 설정
 * @returns {boolean} 컴포넌트의 마운트 상태
 */

export function useIsMounted() {
  const [mounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return mounted
}
