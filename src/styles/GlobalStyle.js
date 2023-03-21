import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, select, textarea {
    font-size: inherit;
    font-family: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    &:focus {
      outline: none;
    }
  }
`;
export default GlobalStyle;
