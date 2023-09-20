import Image, { ImageProps } from 'next/image'
import { StyledAvatar } from './styled'

export type AvatarSize = 'big' | 'small'

export interface AvatarProps extends ImageProps {
  className?: string
  image?: string
  to?: string
  username?: string
  $size?: AvatarSize
  src: string // src를 필수 속성으로 변경
}

function Avatar({ className, to, alt = '이미지', username, image, $size = 'small', src, ...imageProps }: AvatarProps) {
  return (
    <StyledAvatar className={className} $size={$size}>
      <Image src={src} alt={alt} {...imageProps} />
    </StyledAvatar>
  )
}

export default Avatar
