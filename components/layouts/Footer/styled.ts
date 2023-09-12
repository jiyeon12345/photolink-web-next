import { flexbox } from '@/styles/utils/flexbox'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  .footer-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 50px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);

    .footer-list {
      ${flexbox('space-around')}
      padding-top: 10px;
    }
  }

  .footer-desktop {
    width: 100%;
    color: var(--tertiary-500);
    background-color: var(--tertiary-100);
  }
`
