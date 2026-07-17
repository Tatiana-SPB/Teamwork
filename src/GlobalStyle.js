import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
}

body {
  min-height: 100vh;
}

`;

export default GlobalStyle;
