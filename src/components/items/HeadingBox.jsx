import styled from "styled-components";

const HeadingBox = ({ defaultText, colorText }) => {
    return (
        <Wrapper><h1><span>{colorText}</span> {defaultText}</h1></Wrapper>
    )
}

export default HeadingBox

const Wrapper = styled.div`
width: 100%;
height: fit-content;
padding: 5px 10px;
h1{
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: #444;
    span{
        font-weight: 600;
        color: #ff5c00;
    }
}

  
`;