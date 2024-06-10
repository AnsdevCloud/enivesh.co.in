import React from 'react'
import styled from 'styled-components';

const HeadingTagLine = ({ title, Margin, Size, lpSize, Align, Height }) => {
    return (
        <Container $margin={Margin} $lpSize={lpSize} $size={Size} $height={Height} $align={Align}>
            {title}
        </Container>
    )
}

export default HeadingTagLine
const Container = styled.h1`
 width: 100%;
 height: ${props => props.$height ? props.$height : "40px"};
 margin: ${props => props.$margin ? props.$margin : "50px 10px"};
 text-align: ${props => props.$align ? props.$align : "center"};;
 font-weight: 600;
 font-size: ${props => props.$size ? props.$size : "1.2rem"};
 color: #333;
 @media (min-width:768px) {
 font-size:${props => props.$lpSize ? props.$lpSize : "1.5rem"};
    
 }
  
`;