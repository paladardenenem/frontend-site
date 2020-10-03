import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    width: 100%;
    font-family: 'Montserrat';
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  span, a {
    text-decoration: none;
  }

  span {
    color: ${props => props.theme.colors.textDark};
  }
 #root {
   position: relative;
 }
  body {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
`;
