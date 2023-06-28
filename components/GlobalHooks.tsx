'use client'

import { memo } from 'react'

import MediaQueryEffect from './MediaQueryEffect'

function GlobalHooks() {
  return (
    <>
      <MediaQueryEffect />
    </>
  )
}

export default memo(GlobalHooks)
