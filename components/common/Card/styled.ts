import { media } from '@/styles/utils/media'
import { textStyle } from '@/styles/utils/text'
import styled, { css } from 'styled-components'

export const StyledCard = styled.div`
  width: 240px;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .card {
    &-name {
      ${textStyle('body', 2, 700)}
    }
    &-location {
      ${textStyle('body', 3, 700)}
    }
    &-hash {
      ${textStyle('body', 4, 700)}
      color: var(--secondary-400);
    }
  }

  ${media(
    'minLaptop',
    css`
      .card {
        &-name {
          ${textStyle('body', 1, 700)}
        }
        &-location {
          ${textStyle('body', 2, 700)}
        }
        &-hash {
          ${textStyle('body', 3, 700)}
          color: var(--secondary-400);
        }
      }
    `
  )}
`
