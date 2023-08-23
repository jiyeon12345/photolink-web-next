import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { textStyle } from '@/styles/utils/text'
import { media } from '@/styles/utils/media'
import { assertUnreachable } from '@/utils/assertUnreachable'
import { Styled } from 'styled-components/dist/constructors/constructWithOptions'

export type InputSize = 'sm' | 'md' | 'lg'
export type StyledInputProps = {
  $size?: InputSize
  $error?: boolean
}

export const smInputStyle = css`
  height: 32px;
`

export const mdInputStyle = css`
  height: 48px;
`

export const lgInputStyle = css`
  height: 72px;
`

export function inputSizeStyle($size?: InputSize) {
  if (!$size) return

  switch ($size) {
    case 'sm':
      return smInputStyle
    case 'md':
      return mdInputStyle
    case 'lg':
      return lgInputStyle
    default:
      return assertUnreachable($size)
  }
}

export const StyledInput = styled.div<StyledInputProps>`
  width: 100%;
  .input {
    ${textStyle('body', 2)}
    ${({ $size }) => inputSizeStyle($size)};
    width: 100%;
    border: 1px solid var(--secondary-500);
    border-radius: 12px;
    padding: 10px 12px;

    &::placeholder {
      ${textStyle('body', 2)}
    }
  }
`

export const StyledController = styled.div``
export const StyledErrorMessage = styled(motion.p)`
  ${textStyle('body', 3)}
  margin-top: 4px;
  margin-bottom: 4px;
  color: var(--red-500) !important;
`
