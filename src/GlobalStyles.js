import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Rubik', sans-serif;
  /*      font-family: 'Comforter', sans-serif; */
}
`

export const theme = {
  colors: {
    mainBg: 'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
  }
}