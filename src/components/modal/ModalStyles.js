import styled from "styled-components";

export const Modal = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
opacity: ${(props)=>props.opened ? 1 : 0};
pointer-events: ${(props) => props.opened ? 'auto' : 'none'};
transition: 0.5s;
z-index: 5;
body{
  overflow: ${(props) => props.opened ? 'hidden' : 'auto'};
}
`

export const ModalContent = styled.div`
position: relative;
padding: 20px;
background:linear-gradient(to right, #d3cce3, #e9e4f0);;
width: 55%;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
z-index:1000;
`

export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  margin: 5px;
  display: flex;
  justify-content:center;
  align-items: center;
  cursor:pointer;
`;