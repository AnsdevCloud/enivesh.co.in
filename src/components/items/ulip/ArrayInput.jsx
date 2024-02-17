import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';
import device from '../../StyledComponentsItem/Devices';

const ArrayInput = ({ dataArray, handleDelete, formData, handleChange, handleAdd }) => {

    return (
        <ArrayFeild >
            <div className="flexfeild">

                <button type='button' onClick={handleAdd}>Add</button>
                <input type="text" value={formData.childname} name='childname' onChange={handleChange} placeholder='Enter Full Name' />
                <input
                    type="number"
                    placeholder="Age"
                    value={formData.childage}
                    name='childage'
                    onChange={handleChange}
                />
            </div>
            <p className="massege">Fill the input feild then click ( Add Child ) button .</p>
            <ul>
                {dataArray.map((item, index) => (
                    <li key={index}>
                        Name : {item.childname} <span>Age : {item.childage} </span>
                        <button type='button' onClick={() => handleDelete(index)}><MdDelete /></button>
                    </li>
                ))}
            </ul>

        </ArrayFeild>
    );
}
export default ArrayInput
const ArrayFeild = styled.div`
         .flexfeild{
             width: 100%;
              display: flex;
              gap: 20px;
              padding: 5px 5px;
              margin: 5px 0;
              button{
                padding: 5px 10px;
                border: none;
                font-size: .7rem;
                background-color: #ff5c00;
                outline: 1px solid transparent;
                transition: all .3s ease-out;
                border-radius: 6px;
                font-weight: 600;
                color: #fff;
                white-space: nowrap;
                &:hover{
                    background-color: #fff;
                    outline: 1px solid #ff5c00;
                    color: #ff5c00;
                }
               @media ${device.tablet} {
                font-size: .8rem;
               }
              }
              input{
                    background-color: transparent;
                    border: none;
                    outline: 1px solid #aba0a0;
                    border-radius: 5px;
                    width: 60%;
                    padding: 5px 10px;
                    font-weight: 500;
                    letter-spacing: .9px;

                    &:focus{
                        color: #ff5c00;
                        outline: 1px solid #ff5c00;

                    }
                    &:valid{
                        color: #ff5c00;
                        outline: 1px solid #ff5c00;

                    }
                }
            
  
            }
            .massege{
                font-size: .7rem;
                color: #aba0a0;
                text-align: center;
            }
            ul{
                list-style-type:decimal;
                li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                     color: #ff5c00;
                     font-size: .8rem;
                     font-weight: 500;
                     margin: 10px 0 5px 0px;
                     button{
                        border: none;
                        background-color: transparent;
                        padding: 0;
                        font-size: 1rem;
                        cursor: pointer;
                        &:hover{
                            color: #ff5c00;
                        }
                     }
                     span{
                        font-weight: 500;
                     }
                }
            }
         
`;