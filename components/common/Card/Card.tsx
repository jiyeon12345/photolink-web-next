'use client'

import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'
import { StyledCard } from './styled'
import React from 'react'

interface CardProps extends ImageProps {
  className?: string
  children?: ReactNode
}

function Card({ children, alt = '이미지', ...imageProps }: CardProps) {
  return (
    <StyledCard>
      <Image alt={alt} {...imageProps} />
      {children}
    </StyledCard>
  )
}

export default Card
