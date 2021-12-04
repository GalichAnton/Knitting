import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
`;


export const Image = styled.img`
  height: 330px;
  width:330px;
  object-fit: cover;
  z-index:2;
  border-radius: 50%;
  transition: all 0.5s ease 0s;
`;

export const ProductContainer = styled.div`
  padding: 20px 0;
  flex:1;
  margin: 25px;
  min-width: 400px;
  min-height:400px;
  display: flex;
  justify-content:center;
  align-items: center;
  background: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);
  position: relative;
  border-radius: 25px;
  flex-direction: column;
  box-shadow: -3px 3px 10px 10px rgba(34, 60, 80, 0.2);
  &:hover ${Image}{
    transform: scale(1.15);
  }
`;

export const ImgContainer = styled.div`
  overflow:hidden;
  height: 330px;
  width:330px;
  border-radius: 50%;
  margin-bottom: 10px;
`;




