import React from 'react'
import styled from 'styled-components';
const NoDataPage = () => {
    return (
        <Wrapper>
            <img src="/images/eniveshicon/nopage.svg" alt="size" />
        </Wrapper>
    )
}

export default NoDataPage
const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 50%;
}

  
`;