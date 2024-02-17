import React from 'react'
import Accordion from './Accordion'
import styled from 'styled-components';
import HeadingTagLine from '../Items/HeadingTagLine';
const QuestionBox = () => {
    return (
        <Container>
            <HeadingTagLine title={"Frequently Asked Questions"} />
            <Accordion title={"How is this plan different from tranditional ULIP plan?"} />
        </Container>
    )
}

export default QuestionBox

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #f7dbdbab;
`;