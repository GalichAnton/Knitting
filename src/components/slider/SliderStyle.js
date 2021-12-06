import styled from "styled-components";
import { mobile, noteBook, tablet } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  padding: 80px 0;
  background: ${(props)=> props.theme.colors.mainBg};
  ${tablet({padding: '80px 0 40px'})}
`;


export const Wrapper = styled.div`
  height:100%;
  display: flex;
`;

export const Slide = styled.div`
  
  display: flex;
  align-items: center;
  width: 100vw;
  height:100%;
  background: transparent;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height:100%;
  display: flex;
  align-items:center;
`;

export const InfoContauner = styled.div`
  flex: 1;
  padding-left: 50px;
  width: 50%;
  ${mobile({paddingLeft: '30px'})};
`;

export const Image = styled.img`
  height: 100%;
  width: 50%;
  flex: 1;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 72px;
  ${noteBook({fontSize: '48px'})}
  ${mobile({fontSize: '24px'})}
`;
export const Descr = styled.p`
  margin: 50px 0;
  font-size: 20px;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  ${noteBook({fontSize: '18px', letterSpacing: '2px', margin: '20px 0'})}
  ${tablet({fontSize: '16px', letterSpacing: '1.5px', margin: '10px 0'})}
  ${mobile({fontSize: '14px', letterSpacing: '1px', margin: '10px 0'})}
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
