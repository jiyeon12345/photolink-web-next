'use client'

import Link from 'next/link'
import { StyledFooter } from './styled'
import { useResponsive } from '@/hooks/useResponsive'
import Suspense from '@/components/Suspense'

function Footer() {
  const { isDesktop, isMobileOrTablet } = useResponsive()

  return (
    <StyledFooter>
      {isMobileOrTablet && (
        <Suspense>
          <nav className="footer-mobile">
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href={'/'}>홈</Link>
              </li>
              <li className="footer-list-item">
                <Link href={'/'}>리스트</Link>
              </li>
              <li className="footer-list-item">
                <Link href={'/'}>내정보</Link>
              </li>
              <li className="footer-list-item">
                <Link href={'/'}>설정</Link>
              </li>
            </ul>
          </nav>
        </Suspense>
      )}

      {isDesktop && (
        <nav className="footer-desktop">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link href={'/'}>asdasdasda</Link>
            </li>
            <li className="footer-list-item">
              <Link href={'/'}>asdasdasda</Link>
            </li>
            <li className="footer-list-item">
              <Link href={'/'}>asdasdasda</Link>
            </li>
            <li className="footer-list-item">
              <Link href={'/'}>asdasdasda</Link>
            </li>
          </ul>
        </nav>
      )}
    </StyledFooter>
  )
}

export default Footer
