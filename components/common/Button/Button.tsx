import { assertUnreachable } from '@/utils/assertUnreachable'
import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonColor = 'brand' | 'secondary' | 'tertiary'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  $color?: ButtonColor
  $size?: ButtonSize
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ $color = 'brand', $size = 'md', children, type = 'button', disabled = false, className, ...props }, ref) => {
    const buttonClasses = clsx(
      'text-white rounded-[8px]',
      getColorClasses($color),
      getSizeClasses($size),
      {
        'opacity-tertiary cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      },
      className
    )
    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

function getColorClasses($color: ButtonColor): string {
  switch ($color) {
    case 'brand':
      return 'bg-brand '
    case 'secondary':
      return 'bg-gray-500'
    case 'tertiary':
      return 'bg-green-500 hover:bg-green-700'
    default:
      return assertUnreachable($color)
  }
}

function getSizeClasses($size: ButtonSize): string {
  switch ($size) {
    case 'sm':
      return 'h-[32px] px-[16px]'
    case 'md':
      return 'h-[48px] px-[16px]'
    case 'lg':
      return 'h-[72px] px-[24px]'
    default:
      return assertUnreachable($size)
  }
}
