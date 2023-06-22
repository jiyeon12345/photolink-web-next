'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html {
        width: 100%;
        hegith: 100vh;
        overflow: hidden;
    }

    body {
        width: 100%;
        max-width: 100vw;
        height: 100vh;
        overflow: hidden;
        overflow-y: auto;
        transition: 100ms;
    }

    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    select,
    textarea {
        font-family: inherit;
        background-color: transparent;
        border: 0;
        box-shadow: 0;
    
        &:focus {
          outline: none;
          box-shadow: none;
        }
    }

    a,
    button {
      cursor: pointer;
    }

    ul,
    ol {
      padding-left: 0;
      list-style: none;
    }

    .a11y {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }


`

export default GlobalStyle
