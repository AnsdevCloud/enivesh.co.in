import React from 'react'
import styled from 'styled-components';
import HeadingBox from '../items/HeadingBox';

const Pagef = () => {
    const Adress = "__Enivesh Marketing Insurance Pvt.Ltd :__ 1103, Paras business centre, Kasturba road number 1. Near Kasturba police station, Borivali East. **Mumbai** - 400066 **Licence No** IMF186245250320160013 , **Valid till :** 22/03/2025 , **CIN :** U66000MH2015PTC271396"
    const processDescription = (description) => {
        // Apply bold style
        description = description.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 600;">$1</strong>');
        // Apply extra style
        description = description.replace(/__(.*?)__/g, '<span style="font-weight: 600; color:#ff5c00;">$1</span>');
        // Return processed description as JSX
        return <div className="tag" dangerouslySetInnerHTML={{ __html: description }} />;
    };
    return (
        <Wrapper>
            {/* <BackPrintName><h1>Enivesh.co.in</h1></BackPrintName> */}
            <Header>
                <ImgBox>
                    <img src='/images/eniveshicon/Enivesh_Insurance_LOGO.png' />
                </ImgBox>
            </Header>
            <MainImgBox>
                <img src="/images/homepage/herosection.png" alt="" />
            </MainImgBox>
            <Heading>
                Enivesh Pvt. Ltd.
            </Heading>
            <HeadingBox colorText={"Mediclaim"} defaultText={"Policy"} m={"5px 0px"} titleTag={"Non Binding Quote"} />
            <MainName>Mr. M Rahman</MainName>
            <HeadingBox defaultText={"Portibility for Mediclaim"} m={"10px 0px"} />


            <Location>
                {processDescription(Adress)}
            </Location>

            <BottomTag>Enivesh.co.in</BottomTag>
        </Wrapper>
    )
}

export default Pagef
const Location = styled.div`
width: 80%;
height: fit-content;
margin: 100px auto;
padding: 10px;
border: 1px solid #7a3812;
border-radius: 5px;
background-color: #fcc7a835;
.tag{
    font-size: 12px;
}
  
`;
const Wrapper = styled.div`
position: relative;
width: 100%;
height: fit-content;
margin: 10px auto;
border: 1px solid #ff5c00;
padding: 10px;
border-radius: 4px;

  
`;
const BottomTag = styled.div`
font-size: 10px ;
color: #555;
position: absolute;
bottom: 5px;
right: 10px;
cursor: default;
  
`;
const BackPrintName = styled.div`
position: absolute;
top: 0;
left: 0;
font-size: 4vmax;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: -1;
h1{
    rotate: calc(-45deg);
    opacity: .2;
    color: #999;
}
  
`;
const Header = styled.div`
z-index: 99;
 
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ImgBox = styled.div`
z-index: 99;

  width: 150px;
  img{


    width: 100%;
    height: 100%;
  }
`;
const MainImgBox = styled.div`
z-index: 99;

width: 40%;
height: fit-content;
padding: 0px 20px;
margin: 10px auto;
img{
z-index: 99;

    width: 100%;
    height: 100%;
}
  
`;
const Heading = styled.h1`
z-index: 99;

font-weight: 600;
text-transform: uppercase;
text-align: center;
margin: 10px 0;
color: #ff5c00;

  
`;
const MainName = styled.h3`
z-index: 99;

font-weight: 600;
color: #351807;
text-align: center;
padding: 5px 0;
  
`;
