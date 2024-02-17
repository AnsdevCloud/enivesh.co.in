import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoGoal } from 'react-icons/go'
import { TbReceiptTax } from 'react-icons/tb'
import { RiParentFill } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import HeadingBox from '../items/HeadingBox';
const ListBoxSlider = () => {
  return (
    <Container>
      <HeadingBox colorText={"Comprehensive Plan"} defaultText={" covers Financial Milestones"} />
      <FlexBox>
        <ListButton >
          <GoGoal />
          Higher Insurance Coverage
        </ListButton>


        <ListButton>
          <RiParentFill />
          Child Education Plan
        </ListButton>
        <ListButton>
          <GiReceiveMoney />
          Retirement Planning
        </ListButton>
        <ListButton>
          <TbReceiptTax />
          Wealth Creation
        </ListButton>
      </FlexBox>

    </Container>
  )
}

export default ListBoxSlider
const Container = styled.div`
width: 100%;
height: fit-content;
padding: 10px 10%;
margin: 30px 0;

  
`;
const FlexBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
flex-wrap: wrap-reverse;
  
`;
const ListButton = styled(Link)`
  width: calc(100% / 1 - 20px);
  background-color: #fff;
  padding: 10px 20px;
  margin: 5px 10px;
  font-weight: 500;
  color: #333;
  display: flex ;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 9px -7px #1a1a1a;
  font-size: 1.2vmax;
  transition: all .3s ease-out;
  text-decoration: none;


  svg{
    font-size: 2rem;
    color: #ff5c00;
  }

  @media(min-width: 768px) {
  padding: 20px 10px;
  width: calc(100% / 2 - 20px);
  font-size: 14px;

    
    
}
@media (min-width: 1024px) {
  width: calc(100% / 4 - 20px);
  padding: 25px 5px;
  font-size: .9vmax;

    
    
}
@media (min-width: 1440px) {
  width: calc(100% / 4 - 20px);
  padding: 20px 10px; 
  font-size: .9vmax;

}

`;
