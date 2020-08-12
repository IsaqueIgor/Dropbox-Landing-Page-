import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input {
    font-family: Roboto, sans-serif;
  }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-tertiary: #fff;
    --color-quaternary: #000;

    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  }
  button {
   margin-top: 18px;

    padding: 13px 18px;
    font-size: 16px;
    background-color: var(--color-blue);
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;
    &:hover {
      opacity: 0.87;
    }
  }
`;
