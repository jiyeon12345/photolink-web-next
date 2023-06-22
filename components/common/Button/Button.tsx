'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { ButtonSize, ButtonVariant, StyledButton, buttonStyle } from './styled'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  $size?: ButtonSize
  $variant?: ButtonVariant
  $contain?: boolean
}

function Button({
  className,
  disabled,
  onClick,
  children,
  type = 'button',
  $size = 'md',
  $variant = 'primary',
  $contain = false,
}: ButtonProps) {
  const text = <div className="text">{children}</div>

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

export default Button
