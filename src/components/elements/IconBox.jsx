import React from 'react'
import styled from 'styled-components';
import TextBox from '../items/ulip/TextBox';
import HeadingTagLine from '../items/ulip/HeadingTagLine';
const IconBox = ({ discription, title, Icon, width }) => {
    return (

        <Container $width={width} >
            <div className="img">{Icon}</div>
            <HeadingTagLine Margin={"5px 0"} title={title} Size={"14px"} lpSize={"1rem"} />
            <TextBox TextAlign={"start"} Size={"10px"} MSize={"10px"} text={discription} Margin={"0 20px"} />
        </Container>

    )
}

export default IconBox
const Container = styled.div`
width: ${props => props.$width ? props.$width : "75%"}; ;
/* height: 150px; */
border-radius: 4px;
padding: 10px;
background-color: #fff;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center ;
box-shadow: 0px 0px 9px -7px #1a1a1a;
justify-content: flex-start;
overflow: hidden;
gap: 5px;
svg{
    /* font-size: 2rem; */
    color: #ff5c00;
    background-color: #edebeb;
    width: 50px;
    min-height: 50px;
    border-radius: 50%;
   

}
.img{
    width: 100%;
    min-height: 80px;
    max-height: 80px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 80px;
        height: 100%;
        padding: 0px;
        background-color: #fff;
        padding: 10px;
        border-radius: 50%;
    }
   

}
@media (min-width:768px) {
    width: 250px;
    height: 300px;
    align-items: flex-start;

}
@media (min-width:1024px) {
    width: 215px;
    height: 300px;
    align-items: flex-start;

}
@media (min-width:1440px) {
    width: 250px;
    height: 300px;
    align-items: flex-start;

}
  
`;