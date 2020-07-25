import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
