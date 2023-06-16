import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import {
  ButtonSize,
  ButtonVariant,
  buttonStyle,
  getSizeClasses,
  getVariantClasses,
} from './styled'
import clsx from 'clsx'

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
}

function Button({
  className,
  disabled,
  onClick,
  children,
  type = 'button',
  $size = 'md',
  $variant = 'primary',
}: ButtonProps) {
  const text = <div className="text">{children}</div>

  const buttonClasses = clsx(
    buttonStyle,
    getVariantClasses($variant),
    getSizeClasses($size),
    className
  )

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
