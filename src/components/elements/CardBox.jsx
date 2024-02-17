import React from 'react'
import styled from 'styled-components';
import ItemCard from '../items/ItemCard';
import Tailored from '../../jsondata/homepage/tailored.json'
import Button from '../items/ulip/Button';
import { useDispatch } from 'react-redux';
import { hadleModelForm } from '../../reduxapp/features/userdata/userSlice';
const CardBox = ({ haddleToggleModel }) => {
    const titletag = " Tailored Protection, __Not One-Size-Fits-All__: Get Covered Right."
    const dispatch = useDispatch();
    const processDescription = (description) => {
        // Apply bold style
        description = description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Apply extra style
        description = description.replace(/__(.*?)__/g, '<span style="color:#ff5c00;">$1</span>');
        // Return processed description as JSX
        return <h2 dangerouslySetInnerHTML={{ __html: description }} />;
    };


    return (
        <Wrapper>
            <Container>
                <ImgBox>
                    <img src="/images/homepage/familyh.svg" alt="" />
                </ImgBox>
                <Content>
                    {processDescription(titletag)}
                    <Button radius={"4px"} funcs={() => dispatch(hadleModelForm(true))} m={"20px 25%"} Color={"#fff"} bgColor={"#ff5c00"} lpP={"5px 0"} title={"Book an Appointment"} Width={"50%"} lpWidth={"50%"} />
                </Content>

            </Container>
            <FlexBox>
                {
                    Tailored && Tailored.map((item, index) => {
                        return <ItemCard Width={"350px"} key={index} data={item} />
                    })
                }
            </FlexBox>
        </Wrapper>
    )
}

export default CardBox

const Wrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  height: fit-content;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px -7px #1a1a1a;

`;

const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`;

const ImgBox = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 img{
    width: 100%;
 }
   @media (min-width:1024px) {
    width: 50%;
    }
`;

const Content = styled.div`
   width: 100%;
   h2{
    text-align: center;
    font-size: 3.6vmax;
    font-weight: 600;
    color: #444;
    span{
        font-weight: 600;
    }
   }
   @media (min-width:1024px) {
    width: 50%;
}

`;
const FlexBox = styled.div`
padding: 10px 10px;
position: relative;
display: flex;
overflow-x:auto;
align-items: center;
justify-content: flex-start;
gap: 20px;
@media (min-width: 1024px) {
justify-content: space-evenly;
    
}
  
`;
