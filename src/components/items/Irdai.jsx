import React from 'react'
import styled from 'styled-components';

const Irdai = () => {
  return (
    <Wrapper>

      <IRDAI>
        <img src="/images/homepage/irdailogo.svg" alt="" />
      </IRDAI>
      <Details>
        <h3>CIN Number: U66000MH2015PTC271396</h3>
        <h4>IRDAI IMF CODE- IMF186245250320160013</h4>
      </Details>
    </Wrapper>
  )
}

export default Irdai
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: #ff5e004e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 20px;
    @media (min-width:1024px) {
     gap: 50px;
      
    }
`;
const IRDAI = styled.div`
  width: 120px;
  height: 100px;
  img{
    width: 100%;
    height: 100%;
  }
`;
const Details = styled.div`
  h3{
    font-weight: 500;
    color: #1A0D5E;
    font-size: 1.7vmax;
    @media (min-width:1024px) {
    font-size: 1vmax;
      
    }
  }
  h4{
    font-weight: 400;
    color: #555;
    margin: 5px 20px;
     font-size: 1.2vmax;
    @media (min-width:1024px) {
    font-size: .7vmax;
      
    }
  }
`;