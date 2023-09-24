'use client'

import Card from '@/components/common/Card/Card'
import wedding1 from '@/public/images/wedding1.jpg'
import Link from 'next/link'
import { StyledMainPageContainer } from './styled'
import { useResponsive } from '@/hooks/useResponsive'

function SecitonFirst() {
  const { isDesktop, isMobileOrTablet, isLaptopOrDesktop } = useResponsive()

  return (
    <StyledMainPageContainer>
      <div className="section-content first">
        <div className="header-container">
          <h2 className="title">뻔한 웨딩촬영은 NO! 둘 만의 이야기가 담긴 웨딩촬영👰🏻‍♀️🤵🏻‍♂️</h2>
          {isLaptopOrDesktop && <Link href="/">더 보기</Link>}
        </div>

        <Card width={80} height={80} src={wedding1} alt="이미지1">
          <div className="card-text name">luvvaut_jeju</div>
          <div className="card-text location">서울특별시</div>
          <div className="card-text hash">
            #러바웃 #러바웃제주 #제주웨딩스냅 #웨딩스냅 #웨딩촬영 #제주웨딩촬영 #셀프웨딩촬영 #셀프웨딩 #웨딩사진
            #웨딩스냅촬영
          </div>
        </Card>
      </div>
      {isMobileOrTablet && (
        <div>
          <Link href="/">더 많은 작가 보기</Link>
        </div>
      )}
    </StyledMainPageContainer>
  )
}

export default SecitonFirst
