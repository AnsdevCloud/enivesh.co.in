import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { TbRating12Plus } from 'react-icons/tb';
import styled from 'styled-components';

const TestmonialCard = ({ data }) => {
    return (
        <Wrapper>
            <ImgBox>
                <img src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="" />
            </ImgBox>
            <Title>
                <h1>{data.name}</h1>
            </Title>
            <Discription>
                <p>{data.dis}</p>
            </Discription>
            <Ratings>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
            </Ratings>
        </Wrapper>
    )
}

export default TestmonialCard
const Wrapper = styled.div`
position: relative;
min-width: 300px;
min-height: 250px;
/* background-color: #ff5e0037; */
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
padding: 10px;

@media (min-width: 1024px) {
    min-width: 300px;
max-width: 301px;
min-height: 300px;

}
  
`;

const ImgBox = styled.div`
position: relative;
margin: 0 auto;
top: -30px;
width: 60px;
height: 60px;
border-radius: 50%;
overflow: hidden;
border: 2px solid #ff5c00;

img{
    width: 100%;
    height: 100%;
}
  
`;
const Title = styled.div`
h1{
    font-size: 2vmax;
    text-align: center;
    font-weight: 600;
    color: #1a1a1a;
    @media (min-width: 1024px) {
    font-size: 1.2vmax;
        
    }
}
  
`;

const Discription = styled.div`
padding: 10px 5px;
width: 100%;
p{
  font-size: 10px;
  font-weight: 500;

  }
`;

const Ratings = styled.div`
display: flex;
color: #ff5c00;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;