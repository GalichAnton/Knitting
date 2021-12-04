import styled from "styled-components";

export const Container  = styled.div`
  height: 60%;
  background: ${(props)=>props.theme.colors.mainBg};
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content:center;
  align-items: center;
`;