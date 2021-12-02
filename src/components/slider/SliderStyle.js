import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  justify-content:center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === 'left' && '10px'};
  right: ${props=> props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease 0s;
  z-index: 2;
  &:hover{
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height:100%;
  display: flex;
  
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height:100vh;
  background: ${props=>props.bg};
  padding-left: 30px;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height:100%;
  display: flex;
  align-items:center;
`;

export const InfoContauner = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Image = styled.img`
  height: 80%;
`;

export const Title = styled.h1`
  font-size: 72px;
`;
export const Descr = styled.p`
  margin: 50px 0;
  font-size: 20px;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease 0s;
  border: solid 1px #ee0979;
  &:hover {
  color: #fff;
  background: #ee0979;
  box-shadow: 0 0 10px #ee0979, 0 0 40px #ee0979, 0 0 80px #ee0979;
}
`;
