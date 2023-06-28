'use client'

import { useMediaQuery } from '@/hooks'
import { memo } from 'react'

function MediaQueryEffects() {
  useMediaQuery()

  return null
}

export default memo(MediaQueryEffects)
