import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, input, textarea, select, button {
    font-family: Montserrat, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  a {
    text-decoration: none;
  }
`;
