'use client'

import { memo } from 'react'

import MediaQueryEffect from './MediaQueryEffect'

/**
 * * 전역적으로 적용되는 훅을 사용하는 컴포넌트.
 * * MediaQueryEffect 컴포넌트를 렌더링하여 전역적인 훅의 효과를 적용.
 *
 *
 */
function GlobalHooks() {
  return (
    <>
      <MediaQueryEffect />
    </>
  )
}

export default memo(GlobalHooks)
