import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
  }
  h1,h2,h3,h4,h5,h6,p,span{
    cursor: default;
  }
  body{
    overflow-x: hidden;
  }
`;


export default Global;