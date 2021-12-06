import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 475px) {
      ${props}
    }
  `;
};
export const miniMobile = (props) => {
  return css`
    @media only screen and (max-width: 325px) {
      ${props}
    }
  `;
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const noteBook = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};