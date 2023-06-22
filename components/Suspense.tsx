import { useIsMounted } from '@/hooks'
import { memo, Suspense as ReactSuspense, SuspenseProps } from 'react'

/**
 *  * 마운트 상태를 확인하여 Suspense를 사용하여 컴포넌트를 렌더링하는 컴포넌트
 *  * 컴포넌트가 마운트되었을 때에만 children을 렌더링하고,
 *  * 그렇지 않은 경우에 fallback을 렌더링
 * @param {SuspenseProps} props - Suspense 컴포넌트에 전달되는 props
 * @returns {JSX.Element} Suspense 컴포넌트와 마운트 상태에 따라 렌더링되는 요소
 */

function Suspense({ children, fallback }: SuspenseProps) {
  const mounted = useIsMounted()

  return (
    <ReactSuspense fallback={fallback}>
      {mounted ? children : fallback}
    </ReactSuspense>
  )
}

export default memo(Suspense)
