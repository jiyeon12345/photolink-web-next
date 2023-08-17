'use client'
import React from 'react'
import { InputSize, StyledInput } from './styled'
import type { ControllerRenderProps, FieldValues } from 'react-hook-form'

type InputProps = {
  field: ControllerRenderProps<FieldValues>
  placeholder?: string
  onClick?(): void

  $error: boolean
  $size: InputSize
}

function Input({ field, placeholder, onClick, $error, $size }: InputProps) {
  const { ref, ...fieldProps } = field

  return (
    <StyledInput>
      <input
        {...fieldProps}
        className="input"
        type="text"
        onClick={onClick}
        placeholder={placeholder}
        autoComplete="off"
      />
    </StyledInput>
  )
}

export default Input
