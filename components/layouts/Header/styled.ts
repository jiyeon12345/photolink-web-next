import { media } from '@/styles/utils/media'
import { css, styled } from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  ${media('tablet', css``)}
`
