import styled from "styled-components"


export const Container = styled.div`
background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
position: fixed;
width: 100%;
opacity: ${(props)=> props.navbar ? 0.8 : 1};
z-index: 5;
`

export const Wrapper = styled.div`
max-width:1440px;
height: 80px;
padding: 10px 20px; 
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
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


export const Logo = styled.h1`
font-weight: bold;
text-align: center;
font-family: 'Comforter', sans-serif;
font-size: 48px;
letter-spacing: 4px;
display: flex;
justify-content:center;
align-items: center;
img{
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}
`;
export const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
  color:white;
  transition: all 0.5s ease 0s;
`;



export const Icon = styled.a`
  color: #fff;
  transition: all 0.5s ease 0s;
  text-decoration: none;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-right: 10px;
  &:hover{
    transform: scale(1.1);
  }
`;