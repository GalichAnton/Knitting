import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content:center;
  color: blue;
  width: 80%;
`

export const Input = styled.input`
border: 1px solid #9796f0; 
padding: 1em; 
width: 100%; 
`
export const Label = styled.label`
display: block; 
color:#000;
`
export const Textarea = styled.textarea`
border: 1px solid #9796f0; 
padding: 1em; 
width: 100%; 
`;

export const StyledButton = styled.button`
background: #9796f0;
border: 0; 
color: #fff; 
padding: 1em; 
text-transform: uppercase; 
width: 100%;
margin-top: 10px;

&:hover, &:focus {
    background: #B8161F;
    color: #fff; 
    outline: 0; 
    transition: background-color 2s ease-out; 
}

`; 