import styled from 'styled-components'
import { AvatarSize } from './Avatar'

interface StyledAvatarProps {
  $size: AvatarSize
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  display: block;
  width: ${({ $size }) => ($size === 'small' ? '32px' : '48px')};
  height: ${({ $size }) => ($size === 'small' ? '32px' : '48px')};
  overflow: hidden;
  border-radius: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`
