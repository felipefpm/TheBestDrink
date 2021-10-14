import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f8f8f8;
    color: #e1e6e9;
  }

  border-style, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;

  }
`;