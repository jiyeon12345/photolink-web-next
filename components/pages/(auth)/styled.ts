'use client'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/styles/utils/text'
import styled from 'styled-components'

export const StyledAuthPageHeader = styled.header`
  ${flexbox('between')}
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  button {
    w
  }
`

export const StyledAuthPageContainer = styled.main`
  min-height: 100vh;

  .container {
    width: 360px;
    margin: 0px auto;
    padding: 60px 0px;

    h1 {
      ${textStyle('header', 1)}
      margin-bottom: 16px;
    }

    p {
      color: var(--secondary-600);
      ${textStyle('body', 3)}
    }

    .text {
      &.login {
        margin-top: 24px;
        margin-bottom: 24px;

        a {
          color: var(--black);
          margin-left: 8px;
          font-weight: 700;
          text-decoration: underline;

          &:hover {
            opacity: 0.6;
          }
        }
      }

      &.account {
        padding-top: 24px;
        padding-bottom: 24px;
        border-top: 1px solid var(--secondary-500);
        border-bottom: 1px solid var(--secondary-500);

        a {
          &:hover {
            opacity: 0.6;
          }
        }
      }

      &.guide {
        margin-top: 24px;

        a {
          text-decoration: underline;

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }

    .checkbox-text {
      ${flexbox('flex-start')}
      margin-top: 8px;
      margin-bottom: 24px;
    }
  }
`

export const StyledSocialAnchor = styled.a`
  ${flexbox()}
  ${textStyle('button', 2)}
  width: 100%;
  padding: 10px 24px;
  border-radius: 12px;
  background-color: var(white);
  cursor: pointer;
  transition: 500ms;
  border: 1px solid var(--secondary-500);
  margin-bottom: 16px;

  &:hover {
    border: 1px solid var(--primary-500);
  }
`
