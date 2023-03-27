import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 16px;
  line-height: 1.5;
}
p{
  font-family: 'IBM Plex Sans Condensed', sans-serif;
}
span{
  font-family: 'Roboto Condensed', sans-serif;
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
