import React from 'react'
import styled from 'styled-components';
// import device from '../../StyledComponentsItem/Devices';
const TextBox = ({ text, Size, FontWeight, Color, TextAlign, MSize, Margin }) => {
    return (
        <Container $FontWeight={FontWeight} $Col={Color} $size={Size} $Msize={MSize} $alignCenter={TextAlign} $margin={Margin}>{text}
        </Container>
    )
}

export default TextBox
const Container = styled.p`
font-size: ${props => props.$Msize ? props.$Msize : ".8rem"};
color: ${props => props.$Col ? props.$Col : "#000"};
font-weight: ${props => props.$FontWeight ? props.$FontWeight : "narmal"};
text-align: ${props => props.$alignCenter ? props.$alignCenter : "initial"};
line-height: 20px;
margin: ${props => props.$margin ? props.$margin : ""};

@media (min-width: 1024px){
    font-size: ${props => props.$size ? props.$size : "1rem"};


}
`;