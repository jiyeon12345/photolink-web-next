'use client'

import Link from 'next/link'
import { StyledFooter } from './styled'

function Footer() {
  return (
    <StyledFooter>
      <nav>
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
    </StyledFooter>
  )
}

export default Footer
