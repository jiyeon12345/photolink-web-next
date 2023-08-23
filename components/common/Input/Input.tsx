'use client'
import React from 'react'
import { InputSize, StyledInput } from './styled'
import type { ControllerRenderProps, FieldValues } from 'react-hook-form'

type InputProps = {
  field: ControllerRenderProps<FieldValues>
  placeholder?: string
  onClick?(): void
  type?: string
  // $error?: boolean
  $size?: InputSize
}

function Input({
  field,
  placeholder,
  type,
  onClick,
  $size,
}: // $error,
InputProps) {
  return (
    <StyledInput $size={$size}>
      <input {...field} className="input" type={type} onClick={onClick} placeholder={placeholder} autoComplete="off" />
    </StyledInput>
  )
}

export default Input
