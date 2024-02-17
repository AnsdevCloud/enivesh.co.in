import React from 'react'
import styled from 'styled-components';
import device from '../../StyledComponentsItem/Devices';
import { Link } from 'react-router-dom';
const HyperLink = ({ title, p, m, Type, lpWidth, lpM, target, lpP, Color, bgColor, Width, src }) => {
    return (
        <Btn target={target} to={src} $width={Width} $m={m} $lpWidth={lpWidth} $lpM={lpM} $col={Color} $bg={bgColor} $lpP={lpP} $p={p} type={Type}>
            {title}
        </Btn>
    )
}

export default HyperLink

const Btn = styled(Link)`
cursor: pointer;
  position: relative;
  border-radius: 20px;
  text-decoration: none;
  width: ${props => props.$width ? props.$width : "fit-content"};
  border: none;
  outline: 1px solid #ff5c00;
  background-color: ${props => props.$bg ? props.$bg : "transparent"};
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$col ? props.$col : "#ff5c00"};
  padding: ${props => props.$p ? props.$p : "5px 15px"};
  margin: ${props => props.$m ? props.$m : ""};
  transition: all .3s ease-in;
  &:hover{
   color: #fff;
   background-color: #ff5c00;
   
  }
  @media ${device.laptop}{
     width: ${props => props.$lpWidth ? props.$lpWidth : "fit-content"};
     padding:${props => props.$lpP ? props.$lpP : "3px 20px"};
     margin: ${props => props.$lpM ? props.$lpM : ""};


   }
 

`;