'use client'

import { ReactNode } from 'react'
import Slider from 'react-slick'

interface CarouselProps {
  children?: ReactNode
  settings?: any
}

function Carousel({ children, settings }: CarouselProps) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const finalSettings = { ...defaultSettings, ...settings }

  return <Slider {...finalSettings}>{children}</Slider>
}

export default Carousel
