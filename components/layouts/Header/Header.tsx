'use client'

import Input from '@/components/common/Input/Input'
import { StyledHeader } from './styled'
import Link from 'next/link'
import { useResponsive } from '@/hooks'
import Suspense from '@/components/Suspense'

function Header() {
  const { isDesktop } = useResponsive()

  return (
    <StyledHeader>
      {isDesktop && (
        <nav className="nav-container">
          <ul className="list">
            <li className="list-item">
              <Link href="user/login">로그인</Link>
            </li>
            <li className="list-item">
              <Link href="/">공지사항</Link>
            </li>
            <li className="list-item">
              <Link href="/">작가등록</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="container-header">
        <div className="container-logo">
          <h1>
            <a href="/">LOGO</a>
          </h1>
        </div>
        <div className="container-icon">
          <div>돋보기</div>
          <div>햄버거</div>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
