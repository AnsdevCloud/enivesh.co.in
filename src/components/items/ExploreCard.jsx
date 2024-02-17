import React from 'react'
import styled from 'styled-components';

const ExploreCard = ({ Height, Width, data }) => {
  return (
    <Wrapper $Hei={Height} $Wid={Width}>
      <ImgBox>
        <img className='img' src={data.imgUrl} alt="" />
      </ImgBox>
      <Content>
        <Heading>{data.title}</Heading>
        <Button disabled >Explore Now</Button>
      </Content>
    </Wrapper>
  )
}

export default ExploreCard

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: ${props => props.$Hei ? props.$height : "15vmax"};
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 9px -7px #1a1a1a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
     width: ${props => props.$Wid ? props.$Wid : "25vmax"};

  }

`;

const ImgBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
 .img{
  width: 80% ;
  height: 90%;
 }

`;

const Heading = styled.h1`
font-size: 1vmax;
font-weight: bold;
color: #666;

@media (min-width:768px) {
  margin-top: 20px;
  margin-left: 10px;
}

  
`;
const Content = styled.div`
  width: 45%;
  padding: 10px 5px;
  height: 100%;
  padding-left: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  

`;
const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 0;
  padding: .8vmax 2vmax;
  border: none;
  border-radius: 4px 0 0 4px;
  background-color: #ff5c00;
  color: #fff;
  font-size: 1vmax;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .4s ease-in;
  &:hover{
    color: inherit;
   opacity: .9;
  }
  &:disabled{
    background-color: gray;
   cursor: not-allowed;
  }
  &:disabled:hover{
    color: #fff;
  }
`;