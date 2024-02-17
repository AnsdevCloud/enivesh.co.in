import React from 'react'
import styled from 'styled-components';
// import HeadingTagLine from './HeadingTagLine';
import TextBox from './TextBox';
import HeadingBox from '../HeadingBox';
import HeadingTagLine from './HeadingTagLine';

const CardBox = ({ Icon, title, discription }) => {
  return (
    <Container>
      {Icon}
      <HeadingTagLine Align={"start"} lpSize={"1rem"} Size={".8rem"} Margin={"5px 0"} title={title} />

      <TextBox text={discription} MSize={".7rem"} />
    </Container>
  )
}

export default CardBox

const Container = styled.div`
  width: 100%;
  height: 50%;
  padding: 5px 5px;
  background-color: #fff;
  svg{
    font-size: 2rem;
    color: #ff5c00;
  }
  p{
    font-size: 0.7rem;
  }
  @media (min-width:768px){
  padding: 15px 20px;
    
  }
`;