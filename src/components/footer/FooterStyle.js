import styled from "styled-components";
import { miniMobile, mobile, tablet } from "../../responsive";

export const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`;

export const Wrapper = styled.div`
max-width:1440px;
padding: 10px 20px; 
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
${mobile({padding: '10px 5px'})}
`

export const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({padding: '5px'})}
  ${miniMobile({display: 'none'})}
`;

export const Center = styled.div`
  flex:1;
  padding: 20px;
  ${tablet({display:'none'})}
`;

export const Right = styled.div`
  flex:1;
  padding: 20px;
  align-self: flex-start;
  ${mobile({padding: '5px'})}
`;

export const Logo = styled.h2`
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
};
${mobile({fontSize: '32px'})}
`;

export const Desc = styled.p`
  margin: 20px 0;
`;

export const SocialContent = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  width:40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props)=>props.color};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 5px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: #222;
  ${mobile({fontSize: '15px'})}
`;