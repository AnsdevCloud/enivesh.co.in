import React, { useState } from 'react'
import styled from 'styled-components';
import device from '../../StyledComponentsItem/Devices';
import ArrayInput from './ArrayInput';
const CheckeduggestInput = ({ value, handleChange, getValue, inputValue, section, field, handleAdd, deletFuncs, dataArray, formData }) => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [child, setChild] = useState(false);
    const [selected, setSelected] = useState()

    const handleToggleInput = (e) => {
        setInputVisible(!isInputVisible);
        setSelected(e.target.name);
        getValue(selected);
    };

    function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <Wrapper>
            <Container>
                <label className='suggest-btn'>
                    <input
                        type="checkbox"
                        value={value}
                        name={value}
                        checked={isInputVisible}
                        onChange={handleToggleInput}
                    />
                    {value} <span>( Child : 0 )</span>
                </label>
                {isInputVisible && (
                    <>
                        <button type='button' onClick={(e) => setChild(!child)}>{child === true ? "Hide" : "Add"} Childs</button>
                        <input
                            type="text"
                            value={selected === "You" ? formData.name : inputValue}
                            onChange={handleChange(section, field)}
                            name={value + "name"}
                            placeholder="Enter Name"
                        />
                        <input
                            type="number"
                            value={selected === "You" ? calculateAge(formData.dob) : inputValue}
                            onChange={handleChange(section, field)}
                            name={value + "age"}
                            placeholder="Enter Age"
                        />
                    </>


                )}
            </Container>
            {
                child
                &&
                <ArrayInput handleAdd={handleAdd} handleDelete={deletFuncs} handleChange={handleChange} dataArray={dataArray} formData={formData} />

            }

        </Wrapper>

    );

}

export default CheckeduggestInput
const Wrapper = styled.div`
  width: 100%;

`;
const Container = styled.div`
                padding: 10px 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 25px;
              .suggest-btn{
                cursor: pointer;
                width: 50%;
                font-size: .7rem;
                padding: 5px 0px;
                font-weight: 500;
                color: #aba0a0;
                display: flex;
                align-items: center;
                gap: 10px;
                span{
                    color: #ff5c00;
                    font-weight: 500;
                }
              }
              button{
                padding: 5px 5px;
                border: none;
                white-space: nowrap;
                font-size: .7rem;
                background-color: #ff5c00;
                outline: 1px solid transparent;
                transition: all .3s ease-out;
                border-radius: 6px;
                font-weight: 600;
                color: #fff;
                &:hover{
                    background-color: #fff;
                    outline: 1px solid #ff5c00;
                    color: #ff5c00;
                }
               @media ${device.tablet} {
                font-size: .8rem;
               }
              }
              input[type="number"],[type="text"]{
                width: 50%;
                padding: 5px 10px ;
                border: none;
                outline: 1px solid #ff5c00;
                border-radius: 4px;
                background-color: transparent;
                font-weight: 500;
                color: #ff5c00;
                letter-spacing: 1px;
              }
        
           
  
`;