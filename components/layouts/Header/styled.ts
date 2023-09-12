import { flexbox } from '@/styles/utils/flexbox'
import { media } from '@/styles/utils/media'
import { css, styled } from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 60px;
  z-index: 100;

  .nav-container {
    ${flexbox('flex-end')}
    padding: 10px 0;

    .list {
      display: flex;

      .list-item {
        margin-left: 20px;
      }
    }
  }

  .container-header {
    ${flexbox('space-between')}
    .container-icon {
      display: flex;
    }
  }

  ${media('tablet', css``)}

  ${media('mobile', css``)}
`
