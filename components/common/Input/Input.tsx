import React, { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import ErrorMessage from './ErrorMessage'

interface InputProps {
  label?: string
  type?: string
  value?: string
  name?: string
  placeholder?: string
  error?: string
  className?: string
  disabled?: boolean
  required?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function Input({
  label,
  type,
  value,
  placeholder,
  error,
  className,
  name,
  disabled,
  required,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
}: InputProps) {
  const defaultClass = `border-2 rounded-md h-[32px]  placeholder-tertiary shadow-md placeholder-opacity-50 focus:border-primary-500  focus:outline-none ${className} ${
    disabled ? 'cursor-not-allowed' : ''
  }`

  const errorClass = `border-2 rounded-md border-red-500 border h-[32px]   placeholder-tertiary placeholder-opacity-50 focus:border-red-300 focus:outline-none ${className} ${
    disabled ? 'cursor-not-allowed' : ''
  }`

  return (
    <React.Fragment>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={error ? errorClass : defaultClass}
        name={name}
        required={required}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {error ? <ErrorMessage error={error} /> : null}
    </React.Fragment>
  )
}

export default Input
