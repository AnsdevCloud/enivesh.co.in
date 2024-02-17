import React from 'react'
import styled from 'styled-components';
// import device from '../../StyledComponentsItem/Devices';
import { AiOutlineFileProtect } from 'react-icons/ai';
const TagLineCord = ({ title }) => {
    return (
        <Wrapper><span>{title} </span> <AiOutlineFileProtect /></Wrapper>
    )
}

export default TagLineCord
const Wrapper = styled.div`
cursor: default;
width: 100%;
padding: 10px 20px;
background-color: #fff;
box-shadow: 0px 0px 2px #666;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row !important;
color: #000;
span{
    font-size: .7rem;
    font-weight: 600;
}
svg{
    color:#ff5c00;
    font-weight: 700;
}


`;