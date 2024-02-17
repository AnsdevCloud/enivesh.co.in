import React from 'react'
import styled from 'styled-components';
import Card from '../items/ulip/Card';
import HeadingBox from '../items/HeadingBox';

const MaximizeReturn = () => {
    return (
        <Container>
            <HeadingBox defaultText={"maximize your returns?"} colorText={"How to "} />
            <FlexBox>
                <Card ImgSource={"/images/ulipplan/step1.svg"} title={"Start Investing Early"} />
                <Card ImgSource={"/images/ulipplan/step2.svg"} title={"Pay premiums regularly"} />
                <Card ImgSource={"/images/ulipplan/step3.svg"} title={"Right Asset Allocation"} />
                <Card ImgSource={"/images/ulipplan/step4.svg"} title={"Make fund switches to safeguard your gains"} />
            </FlexBox>

        </Container>
    )
}

export default MaximizeReturn
const Container = styled.div`
  box-shadow: 0px 0px 9px -7px #1a1a1a;
  width: 90%;
  padding: 10px 0;
  margin: 20px auto;
  border-radius: 10px;
`;
const FlexBox = styled.div`
display: flex;
justify-content: space-evenly;
margin: 20px auto;
flex-wrap: wrap;
gap: 10px;
  
`;