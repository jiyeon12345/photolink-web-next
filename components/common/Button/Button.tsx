import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import {
  ButtonSize,
  ButtonVariant,
  buttonStyle,
  getSizeClasses,
  getVariantClasses,
} from './styled'
import clsx from 'clsx'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEvent
  children?: ReactNode
  $size?: ButtonSize
  $variant?: ButtonVariant
}

function Button({
  className,
  disabled,
  type = 'button',
  onClick,
  children,
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
