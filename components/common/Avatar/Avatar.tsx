import Image from 'next/image'
import { StyledAvatar } from './styled'

export type AvatarSize = 'big' | 'small'

export interface AvatarProps {
  size?: AvatarSize
  src?: string
  className?: string
  image?: string

  to?: string
  username?: string
}

function Avatar({ size, className, to, username, image }: AvatarProps) {
  const alt = `${username}님`

    // if(to !=null) {
    //     if(!image) 
    //     return (

    //     )
    // }

  return (
    <StyledAvatar className={className} size={size}>
        <Image/>
    </StyledAvatar>

  )
}

export default Avatar
