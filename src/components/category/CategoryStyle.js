import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  padding: 20px;
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
`;

export const ItemContainer = styled.div`
  flex:1;
  margin: 10px;
  height:70%;
  position:relative;
  transition: all 0.5s ease 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover{
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width:100%;
  object-fit: cover;
  aspect-ratio : 1/1;
`;

export const Info = styled.div`
  position:absolute;
  width: 100%;
  height:100%;
  top:0;
  left:0;
  display: flex;
  justify-content:center;
  align-items: center;
  color: white;
  flex-direction: column;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  color: #fff;
  font-weight: 600;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease 0s;
  border: solid 1px #fff;
  &:hover {
  color: #fff;
  background: #ee0979;
  box-shadow: 0 0 10px #ee0979, 0 0 40px #ee0979, 0 0 80px #ee0979;
}
`;