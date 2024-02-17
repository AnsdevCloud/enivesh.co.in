import React from 'react'
import styled from 'styled-components';
import TestmonialCard from '../elements/TestmonialCard';
import testmonialData from '../../jsondata/homepage/testmonial.json'
const Testimonial = () => {
    return (
        <Wrapper>

            {
                testmonialData && testmonialData.map((item, index) => {
                    return <TestmonialCard data={item} key={index} />
                })
            }


        </Wrapper>
    )
}

export default Testimonial

const Wrapper = styled.div`
width: 100%;
display: flex;
height: 300px;
align-items: center;
justify-content: flex-start;
padding: 10px 10px ;
gap: 50px;
overflow-x: auto;
  @media (min-width: 1024px) {
 height: 400px;
justify-content: flex-start;

}
`;