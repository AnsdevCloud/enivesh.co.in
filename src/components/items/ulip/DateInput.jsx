import React from 'react'
import styled from 'styled-components';

const DateInput = ({ name, funcs }) => {





  return (
    <InputBox>
      <Label>Date of Birth (above 18 Years )*️⃣</Label>
      <StyledDateInput type="date" id="date" name={name} onChange={funcs} required />
    </InputBox>
  )
}

export default DateInput
const InputBox = styled.div`
display: flex;
width: 100%;
margin: 5px;
flex-direction: column;
padding: 3px 5px;

  
`;

const Label = styled.label.attrs({ htmlFor: "gender" })`
  font-size: .6rem;
  padding: 5px 0;
  font-weight: 500;
  color: #999;
`;
const StyledDateInput = styled.input`
  padding: 3px 10px;
  border-radius: 4px;
  font-size: .9rem;
  border: none;
  color: #999;
  outline: 1px solid #ff5c00;
  background-color: white;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
&:valid{
  color: #ff5c00;

}

`;

