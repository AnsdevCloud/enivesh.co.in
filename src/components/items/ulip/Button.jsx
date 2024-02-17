import React from 'react'
import styled from 'styled-components';
// import device from '../../StyledComponentsItem/Devices';
const Button = ({ title, p, m, Type, lpWidth, lpM, lpP, Color, bgColor, Width, funcs, size, radius }) => {
    return (
        <Btn $radius={radius} value={'Send'} $Size={size} $width={Width} $m={m} onClick={funcs} $lpWidth={lpWidth} $lpM={lpM} $col={Color} $bg={bgColor} $lpP={lpP} $p={p} type={Type}>
            {title}
        </Btn>
    )
}

export default Button

const Btn = styled.button`
  cursor: pointer;
  position: relative;
  border-radius: ${props => props.$radius ? props.$radius : "20px"};
  width: ${props => props.$width ? props.$width : "fit-content"};
  border: none;
  outline: 1px solid #ff5c00;
  background-color: ${props => props.$bg ? props.$bg : "transparent"};
  font-size: ${props => props.$Size ? props.$Size : "1.4vmax"};
  font-weight: 500;
  color: ${props => props.$col ? props.$col : "#ff5c00"};
  padding: ${props => props.$p ? props.$p : "5px 15px"};
  margin: ${props => props.$m ? props.$m : ""};
  transition: all .3s ease-in;
  z-index: 1;
  text-transform: uppercase;

  &:hover{
   color: ${props => props.$bg ? props.$bg : "#fff"};
   background-color: ${props => props.$col ? props.$col : "#ff5c00"};
   outline: 1px solid ${props => props.$bg ? props.$bg : "transparent"};

   
  }
  @media (min-width: 1024px){
     width: ${props => props.$lpWidth ? props.$lpWidth : "fit-content"};
     padding:${props => props.$lpP ? props.$lpP : "3px 20px"};
     margin: ${props => props.$lpM ? props.$lpM : ""};
     font-size: ${props => props.$Size ? props.$Size : "1vmax"};



   }
 

`;