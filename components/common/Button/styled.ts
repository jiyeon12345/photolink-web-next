import { flexbox } from '@/styles/utils/flexbox'
import { assertUnreachable } from '@/utils/assertUnreachable'
import { styled, css } from 'styled-components'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type StyledButtonProps = {
  $variant: ButtonVariant
  $size?: ButtonSize
  $contain: boolean
}

// * Button Default Style
export const buttonStyle = css`
  ${flexbox()}
  position: relative;
  cursor: pointer;
  transition: 500ms;
  border-radius: 12px;
`
// * Button Variant Style
export const primaryButtonStyle = css`
  color: var(--white);
  background-color: var(--primary-500);

  &:hover {
    background-color: var(--primary-700);
  }
`

export const secondaryButtonStyle = css`
  color: var(--white);
  background-color: var(--secondary-500);

  &:hover {
    background-color: var(--secondary-700);
  }
`

export const tertiaryButtonStyle = css`
  color: var(--white);
  background-color: var(--tertiary-500);

  &:hover {
    background-color: var(--tertiary-700);
  }
`

// * Button Size Style
export const smButtonStyle = css`
  height: 32px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.5px;
`

export const mdButtonStyle = css`
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -1px;
`

export const lgButtonStyle = css`
  height: 72px;
  padding: 0 24px;
  border-radius: 12px;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -1px;
`

// * Button Varinat Function
export function buttonVariantStyle($variant: ButtonVariant) {
  switch ($variant) {
    case 'primary':
      return primaryButtonStyle
    case 'secondary':
      return secondaryButtonStyle
    case 'tertiary':
      return tertiaryButtonStyle
    default:
      return assertUnreachable($variant)
  }
}

// * Button Size Function
export function buttonSizeStyle($size?: ButtonSize) {
  if (!$size) return

  switch ($size) {
    case 'sm':
      return smButtonStyle
    case 'md':
      return mdButtonStyle
    case 'lg':
      return lgButtonStyle
    default:
      return assertUnreachable($size)
  }
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyle}
  width: ${({ $contain }) => ($contain ? 'auto' : '100%')};

  ${({ $variant }) => buttonVariantStyle($variant)}
  ${({ $size }) => buttonSizeStyle($size)}
`
