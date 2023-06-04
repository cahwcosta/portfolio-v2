import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: calc(100vw / 1440 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1280px) {
      font-size: calc(100vw / 1280 * 10);
    }

    @media (max-width: 600px) {
      font-size: calc(100vw / 414 * 10);
    }
  }

  body {
    background-color: #040417;
    color: #D3D3D9;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    background-color: #110B25;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #A557C9;
    border-radius: 5px; 
  }

  body, input, textarea, button {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`
