'use client'

import Input from '@/components/common/Input/Input'
import { StyledHeader } from './styled'
import { isTablet } from 'react-device-detect'

function Header() {
  return (
    <StyledHeader>
      {isTablet && (
        <div>
          <h1>로고</h1>
        </div>
      )}

      {isTablet && (
        <div>
          <Input type="text" />
          <h2>이미지</h2>
        </div>
      )}
    </StyledHeader>
  )
}

export default Header
