import React from 'react'
import { StyledChip, ChipVariant } from './styled'

type TagProps = {
  label: string
  className?: string
  $variant?: ChipVariant
}

export default function Chip({
  label,
  className,
  $variant = 'primary',
}: TagProps) {
  if (!label) return null

  return (
    <StyledChip $variant={$variant} className={className}>
      {label}
    </StyledChip>
  )
}
