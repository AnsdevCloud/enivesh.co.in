import styled from "styled-components";

const HeadingBox = ({ defaultText, colorText, m, titleTag }) => {
    return (
        <Wrapper $m={m}>
            <h1><span>{colorText}</span> {defaultText}</h1>
            {titleTag && <span className="titletag">{titleTag}</span>}
        </Wrapper>
    )
}

export default HeadingBox

const Wrapper = styled.div`
height: fit-content;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5px 10px;
margin: ${props => props.$m ? props.$m : "40px"};
h1{
    font-size: 1.5vmax;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    color: #444;
    span{
        font-weight: 600;
        color: #ff5c00;
    }

}
.titletag{
    font-size: 10px ;
    font-weight: 500;
    color: #444;
}
@media (max-width:425px) {
    h1{
        font-size: 1.3vmax;
        
    }
    
}
  
`;