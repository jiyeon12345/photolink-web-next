import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { textStyle } from '@/styles/utils/text'
import { media } from '@/styles/utils/media'

export type InputSize = 'sm' | 'md' | 'lg'

export const smInputStyle = css`
  height: 32px;
`

export const mdInputStyle = css`
  height: 48px;
`

export const lgInputStyle = css`
  height: 72px;
`

export const StyledInput = styled.div``

export const StyledErrorMessage = styled(motion.p)`
  ${textStyle('body', 3)}
  margin-top: 4px;
  color: var(--red-500);

  ${media(
    'tablet',
    css`
      ${textStyle('body', 2)}
    `
  )}
`
