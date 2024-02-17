import React from 'react'
import styled from 'styled-components';
import HeadingTagLine from './HeadingTagLine';
// import device from '../../StyledComponentsItem/Devices';

const Card = ({ title, ImgSource }) => {
    return (
        <Container>
            <img src={ImgSource} alt="Images" />
            <HeadingTagLine Size={".8rem"} lpSize={".9rem"} Margin={"20px 0"} title={title} />

        </Container>
    )
}

export default Card

const Container = styled.div`
width: 100%;
height: 100px;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
margin: 5px 20px ;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
gap: 20px;
padding: 20px 10px;
img{
    width: 60px;
    height: 60px;
}
@media (min-width: 768px) {
        width: calc(100% / 2 - 60px) ;

    img{
    width: 80px;
    height: 80px;
}

}
@media (min-width: 1024px) {
       width: calc(100% / 2 - 60px) ;
    height: 200px;
    flex-direction: column;
   align-items: center;
   justify-content: initial;
   img{
    width: 90px;
    height: 90px;
}


}
@media (min-width: 1440px) {
       width: calc(100% / 4  - 60px);


}
  
`;