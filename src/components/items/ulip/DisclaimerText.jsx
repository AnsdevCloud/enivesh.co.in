import React from 'react'
import styled from 'styled-components';
const DisclaimerText = ({ text, Required }) => {
    return (
        <Container>
            <input type="checkbox" required={Required} />
            <Text>{text}</Text>
        </Container>
    )
}

export default DisclaimerText
const Container = styled.div`
  padding: 5px 20px ;
  margin: 2px 0;
  display: flex;
  align-items: center;
  gap: 20px;

`;
const Text = styled.p`
font-size: .5rem;
color: #666;
  
`;