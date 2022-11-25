import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  html, 
  body {
    // TODO: move to theme possibly
    font-weight: 400;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 16px;
    color: #222222;
  }

  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`

export default StyledGlobal;