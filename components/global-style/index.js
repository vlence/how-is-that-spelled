import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    width: 100%;
    max-width: 800px;
    padding: 8px;
  }

  section, hr, footer {
    margin-top: 60px;
  }
`;

export default GlobalStyle;