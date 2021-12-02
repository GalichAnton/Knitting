import styled from "styled-components"


export const Container = styled.div`
background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`

export const Wrapper = styled.div`
height: 80px;
padding: 10px 20px; 
display: flex;
justify-content: space-between;
align-items: center;
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Logo = styled.h1`
font-weight: bold;
text-align: center;
font-family: 'Comforter', sans-serif;
font-size: 48px;
letter-spacing: 4px;
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;