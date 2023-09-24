'use client'

import { flexbox } from '@/styles/utils/flexbox'
import { media } from '@/styles/utils/media'
import { textStyle } from '@/styles/utils/text'
import styled, { css } from 'styled-components'

export const StyledMainPageContainer = styled.section`
  padding: 0 10px;

  .section-content {
    .header-container {
      ${flexbox('between')}

      .title {
        ${textStyle('header', 4)}
      }
    }
  }

  ${media(
    'minLaptop',
    css`
      padding: 0 60px;

      .section-content {
        &.first {
          .header-container {
            .title {
              ${textStyle('header', 1)}
            }
          }
        }
      }
    `
  )}
`
