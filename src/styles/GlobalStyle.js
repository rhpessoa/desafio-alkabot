import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
export default GlobalStyle;
