import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
`;

export const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
`;

export const Info = styled.div`
  opacity: 0;
  width:100%;
  height: 100%;
  position: absolute;
  top : 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index:  3;
  display: flex;
  justify-content:center;
  align-items: center;
  transition: all 0.5s ease 0s;
  cursor:pointer;
`;

export const ProductContainer = styled.div`
  padding: 10px;
  flex:1;
  margin: 15px;
  min-width: 380px;
  height:400px;
  display: flex;
  justify-content:center;
  align-items: center;
  background: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);
  position: relative;
  border-radius: 25px;
  flex-direction: column;
  &:hover ${Info}{
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 330px;
  width:330px;
  object-fit: cover;
  z-index:2;
  border-radius: 50%;
  margin-bottom: 10px;
`;


