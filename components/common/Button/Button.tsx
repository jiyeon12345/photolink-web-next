'use client'

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  ReactNode,
} from 'react'
import { ButtonSize, ButtonVariant, StyledButton, StyledLink } from './styled'

export interface ButtonProps {
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  ariaLabel?: string
  target?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  $size?: ButtonSize
  $variant?: ButtonVariant
  $contain?: boolean
}

function Button(
  {
    className,
    disabled,
    onClick,
    children,
    ariaLabel,
    target,
    href,
    type = 'button',
    $size = 'md',
    $variant = 'primary',
    $contain = false,
  }: ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const text = <div className="text">{children}</div>

  if (!href) {
    return (
      <StyledButton
        className={className}
        disabled={disabled}
        onClick={onClick}
        type={type}
        $size={$size}
        $variant={$variant}
        $contain={$contain}
      >
        {text}
      </StyledButton>
    )
  }

  return (
    <StyledLink
      className={className}
      aria-label={ariaLabel}
      href={href}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      $size={$size}
      $variant={$variant}
      $contain={$contain}
    >
      {text}
    </StyledLink>
  )
}

export default Button
