import { createGlobalStyle } from "styled-components";

import RobotoLight from "./assets/fonts/RobotoLight.ttf";
import RobotoMedium from "./assets/fonts/RobotoMedium.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'RobotoLight';
      src: local('RobotoLight'), url(${RobotoLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'RobotoMedium';
      src: local('RobotoMedium'), url(${RobotoMedium}) format('truetype');
      font-weight: 500;
      font-style: bold;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "RobotoLight", helvetica, sans-serif;
  }
`;

export default GlobalStyle;
