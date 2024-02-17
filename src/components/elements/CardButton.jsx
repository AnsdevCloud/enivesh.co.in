import React from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardButton = ({ title, Icon, href, active }) => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        navigate(e)
    }
    return (
        <CardBtn className={active} onClick={(e) => handleNavigate(href)}>

            <span>{title}</span>
            {Icon && Icon ? Icon : <MdArrowDropDown />}

        </CardBtn>

    )
}

export default CardButton
const CardBtn = styled.div`
background-color: #fff;
width: 90%;
height: 50px;
margin: 10px 0;
border-radius: 5px;
overflow: hidden;
box-shadow: 0px 0px 9px -7px #1a1a1a;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2px 10px;
font-size: 12px;
cursor: pointer;
transition: all .4s ease-in-out;
span{
    color: #1a1a1a;
    transition: all .4s ease-in-out;
    font-weight: 500;
    text-transform: uppercase;
}
svg{
    font-size: 18px;
}
&:hover{
    color:#ff5c00;
}
&:hover >span{
    color:#ff5c00;
}
&.active{
    color:#ff5c00 !important;
    
}
&.active >span{
    color:#ff5c00 !important;
    
}
&.active >svg{
 transform: rotate(180deg);
    
}

@media (min-width: 768px) {
width: calc(95% / 3);
    
}
  
`;