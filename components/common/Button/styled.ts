import { assertUnreachable } from '@/utils/assertUnreachable'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type StyledButtonProps = {
  $variant: ButtonVariant
  $contain: boolean
  $size?: ButtonSize
}

// * Button Default Style
export const buttonStyle = `flex items-center justify-center overflow-hidden cursor-pointer transition duration-500 text-white`

// * Button Variant Style
export const primaryButtonStyle = `bg-primary hover:bg-primaryDark`

export const secondaryButtonStyle = `bg-secondary`

export const tertiaryButtonStyle = `bg-tertiary`

// * Button Size Style
export const smButtonStyle = `h-[32px] px-[16px]`

export const mdButtonStyle = `h-[40px] px-[16px]`

export const lgButtonStyle = `h-[48px] px-[24px]`

// * Button Varinat Function
export function getVariantClasses($variant: ButtonVariant) {
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
export function getSizeClasses($size: ButtonSize) {
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
