import React from 'react'
import styled from 'styled-components';
import HeadingBox from '../items/HeadingBox';
import TextBox from '../items/ulip/TextBox';

const TextDocument = () => {
    return (
        <Container>
            <HeadingBox colorText={"What"} defaultText={"is ULIP?"} />
            <TextBox Size={"0.9rem"} TextAlign={"justify"} FontWeight={"500"} Color={"#444"} text={"A Unit-Linked Insurance Plan (ULIP) is a financial product that combines insurance and investment components into a single policy. ULIPs are typically offered by insurance companies and provide policyholders with the opportunity to invest their premiums in various investment funds, such as equity funds, debt funds, or balanced funds, based on their risk tolerance and financial goals."} />
        </Container>
    )
}

export default TextDocument
const Container = styled.div`
  position: relative;
  background-color: #ff5e0016;
  padding:10px 10% 50px 10%;
  

  
`;