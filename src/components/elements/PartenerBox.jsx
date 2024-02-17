import React from 'react'
import styled from 'styled-components';
import HeadingTagLine from '../Items/HeadingTagLine';
import device from '../../StyledComponentsItem/Devices';
const PartenerBox = () => {
    return (
        <Container>
            <HeadingTagLine title={"Our Partner"} Margin={"20px 0"} />
            <div className="card">
                <img src="/images/bajajLogo.webp" alt="" />
                <img src="/images/pnblogo.svg" alt="" />
                <img src="/images/hdfclogo.svg" alt="" />
                <img src="/images/iciciplogo.png" alt="" />
                <img src="/images/maxlogo.svg" alt="" />
            </div>
        </Container>
    )
}

export default PartenerBox
const Container = styled.div`
width: 100%;
margin: 20px 0;
.card{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
    padding: 5px 10px;
    img{
        width: 90px;
        @media ${device.tablet} {
        width: 100px;      
        }
        @media ${device.laptop} {
        width: 120px;     
        }
        @media ${device.laptopL} {
        width: 140px;     
        }
    }
}
  
`;