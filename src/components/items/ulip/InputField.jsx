import React from 'react'
import styled from 'styled-components';
const InputField = ({ Placeholder, Type, Required, LabelTitle, name, value, funcs, onChange }) => {

  return (
    <InputBox>
      <Label>{LabelTitle} {Required && <span>*</span>}</Label>
      <Input placeholder={Placeholder} type={Type} required={Required} value={value} name={name} onChange={onChange} />
    </InputBox>
  )
}

export default InputField
const InputBox = styled.div`
display: flex;
width: 100%;
margin: 5px;
flex-direction: column;
padding: 3px 5px;

  
`;

const Input = styled.input`
border: none;
width: 100%;
outline: 1px solid #444;
font-size: .8rem;
padding: 5px 10px;
border-radius: 4px;
color: #ff5c00;
&:focus{
outline: 1px solid #ff5c00;
color: #000;

}
&:valid{
color: #ff5c00;
outline: 1px solid #ff5c00;


}

`;
const Label = styled.label.attrs({ htmlFor: "gender" })`
  font-size: .6rem;
  padding: 5px 0;
  font-weight: 500;
  color: #999;
  span{
    color: #ff5c00;
    font-weight: 900;
  }
`;