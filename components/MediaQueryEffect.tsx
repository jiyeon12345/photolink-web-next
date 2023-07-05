'use client'

import { useMediaQuery } from '@/hooks'
import { memo } from 'react'

/**
 * * 반응형 미디어 쿼리 효과를 적용하는 컴포넌트.
 * * useMediaQuery 훅을 사용하여 미디어 쿼리에 따른 동작을 수행.
 *
 * @returns {null}
 */
function MediaQueryEffects() {
  useMediaQuery()

  return null
}

export default memo(MediaQueryEffects)
