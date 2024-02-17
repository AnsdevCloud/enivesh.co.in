import React from 'react'
import styled from 'styled-components';
import HeadingBox from '../items/HeadingBox';

const CardTextBox = () => {
    return (
        <Wrapper>
            <HeadingBox defaultText={"Guide"} colorText={" A Comprehensive "} />
            <p className="text">
                Term insurance is a crucial financial tool that provides protection and financial security to your loved ones in case of your untimely demise. With the vast array of term insurance plans available in the market, it can be overwhelming to choose the best one that suits your needs. In this comprehensive guide, we will delve into the world of term insurance in India, exploring its features, benefits, and how to select the best term insurance plan.
            </p>
        </Wrapper>
    )
}

export default CardTextBox
const Wrapper = styled.div`
width: 90%;
height: fit-content;
margin: 20px auto;
background-color: #fff;
border-radius: 10px;
padding: 20px 10px;
box-shadow: 0px 0px 9px -7px #1a1a1a;
.text{
    padding: 10px 20px ;    
    font-size: 14px;
    text-align: center;
    color: #1a1a1a ;
    @media (max-width:425px) {
    font-size: 12px;
        
    }
}

  
`;