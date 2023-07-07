import { inlineFlexbox } from '@/styles/utils/flexbox'
import { assertUnreachable } from '@/utils/assertUnreachable'
import styled, { css } from 'styled-components'

export type ChipVariant = 'primary' | 'yellow' | 'red'

export type StyledChipProps = {
  $variant: ChipVariant
}

export const chipStyle = css`
  ${inlineFlexbox()}
  flex-grow: 0;
  flex-shrink: 0;
  height: 21px;
  padding: 0 8px;
  border-radius: 8px;
  white-space: nowrap;
  cursor: default;
`

export const primaryChipStyle = css`
  color: var(--white);
  background-color: var(--primary-500);
`

export const yellowChipStyle = css`
  color: var(--white);
  background-color: var(--yellow-500);
`

export const redChipStyle = css`
  color: var(--white);
  background-color: var(--red-500);
`
export function chipVariantStyle($variant: ChipVariant) {
  switch ($variant) {
    case 'primary':
      return primaryChipStyle
    case 'yellow':
      return yellowChipStyle
    case 'red':
      return redChipStyle
    default:
      assertUnreachable($variant)
  }
}

export const StyledChip = styled.strong<StyledChipProps>`
  ${chipStyle}

  ${({ $variant }) => chipVariantStyle($variant)}
`
