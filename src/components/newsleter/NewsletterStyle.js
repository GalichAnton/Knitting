import styled from "styled-components";

export const Container  = styled.div`
  height: 60vh;
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: solid 1px lightgrey;
`;

export const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: #fff;
`;