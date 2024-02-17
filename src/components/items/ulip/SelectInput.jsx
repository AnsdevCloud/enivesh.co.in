import React from 'react'
import styled from 'styled-components';
const SelectInput = ({ Data, name, funcs }) => {


    return (
        <InputBox>

            {
                Data && Data.map((data) => {
                    return (
                        <>
                            <Label key={data.labal}>{data.labal}</Label>
                            <StyledSelect key={data.id} onChange={funcs} name={name} required>
                                {
                                    data.option.map((opt, index) => {
                                        return <option key={index} value={opt} selected={0}>{opt}</option>
                                    })
                                }
                            </StyledSelect>
                        </>
                    )
                })
            }

        </InputBox>

    )
}

export default SelectInput
const InputBox = styled.div`
display: flex;
width: 100%;
margin: 5px;
flex-direction: column;
padding: 3px 5px;
  
`;
const StyledSelect = styled.select`
cursor: pointer;
  width: 100%;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: .8rem;
  outline: 1px solid #999;
  background-color: ${(props) =>
        props.selectedValue === 0 ? '#ff5e0016' : '#1b1918e'};
 &:focus{
 outline: 1px solid #ff5c00;
 color: #000;
 
}
&:valid{
color: ${(props) =>
        props.selectedValue === 0 ? '#444' : '#ff5c00'};;
outline: 1px solid #ff5c00;


}

`;
const Label = styled.label.attrs({ htmlFor: "gender" })`
  font-size: .6rem;
  padding: 5px 0;
  font-weight: 500;
  color: #999;
`;