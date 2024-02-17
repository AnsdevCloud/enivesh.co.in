import React from 'react'
import styled from 'styled-components';
import TagLineCord from '../items/ulip/TagLineCord';
import Form from '../elements/Form';

const Box = () => {
  return (
    <Container>
      <div className="center">

        <NarmalText width="100%" color='#666' >IN ULIPS, THE INVESTMENT RISK IN THE INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER.</NarmalText>
        <BoxText margin='10px 0 5px 0px' bg='#efe6e6' color="#ff5c00" >Customised Unit Linked Insurance Plan
        </BoxText>
      </div>
      <ResponsiveFlex>
        <CBox>

          <ImageBox>
            <Image src='/images/ulipplan/formcahr.png' />
          </ImageBox>

          <div>
            <TagLine><span>Insurance & Investment,</span><br /> Dono Ek Saath</TagLine>
            <div className="flex">
              <TagLineCord title={'Higher insurance coverage'} />
              <TagLineCord title={'Market linked return'} />
              <TagLineCord title={'Tax * benefits U/s 80cc & 10(100)'} />
              <TagLineCord title={'Guaranted booster benefits'} />
            </div>

          </div>
          <AbsuluteBox width="100%" color='#fff' bg="#ff5c00">Comparative quote from multiple insurers with Return of Charges</AbsuluteBox>
        </CBox>
        <ShadowBox title='Get a customized ULIP report NOW.!!'>
          <Form />
        </ShadowBox>
      </ResponsiveFlex>
    </Container>
  )
}

export default Box
const Container = styled.div`
position: relative;
background-size: cover;
background-color: #fff;
height: fit-content;
@media (min-width:1024px) {
  padding: 20px 5%;

}

.center{
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    width: fit-content;
    left: 0;
  }
}
`;


const CBox = styled.div`
position: relative;
display: flex;
top: -35px;
flex-direction: column;
width: 100%;
padding: 0px 0 50px 0;
align-items: center;
height: fit-content;
div{
  display: flex;
  flex-direction: column;
  gap: 10px;
  .flex{
   flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    
  }
}
@media (min-width:768px) {
  top: -50px;
padding: 20px 100px 50px 100px;
 
}
@media (min-width:1024px) {
padding: 0px 0px 50px 0px;
width: 50%;
 
}
  
`;
const ShadowBox = styled.div`
  position: relative;
  width: 96%;
  padding: 50px 10px 20px 10px ;
  background-color: #fff;
  margin: 20px 2%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ff5c00;

  &::before{
    content: '${props => props.title ? props.title : "Change Title by Send props string"}';
    position: absolute;
    width: 100%;
    height: 40px;
    top: 0;
    left: 0;
    background-color: #ff5c00;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
    font-weight: 500;
    color: #fff;
    padding: 5px 20px;
    @media (min-width:1024px) {
      font-size: 1.1rem;
      height: 20px;
      padding: 15px 20px;
      text-align: center;



    }
  }
  @media (min-width:768px) {
  width:80%;
  margin: 20px 10% ;

    
  }

  @media (min-width:1024px) {
  width:500px;
  height: fit-content;
  padding: 60px 20px 20px 20px ;
  margin: 20px 2% ;

    
  }
`;
const FlexContainer = styled(Container)`
display: flex;
padding: 0;
justify-content: space-between;
background: ${props => props.bgImg ? URL(props.bgImg.toString()) : ""};
padding: ${props => props.padding ? props.padding.toString() : "5px 10px"}; 
background: transparent;
  
`;

const ResponsiveFlex = styled(FlexContainer)`
display: flex;
justify-content: space-between;
flex-direction: column;
/* align-items: center; */

/* background: ${props => props.bgImg ? URL(props.bgImg.toString()) : "#ff5e0025"}; */
padding: ${props => props.padding ? props.padding.toString() : "0px 10px"}; 

@media (min-width:1024px) {
  flex-direction: row;;
}
`;
const NarmalText = styled.p`
   position:relative;
   text-align: center;
  font-size: 0.7rem;
  font-weight: 400;
  color: ${props => props.color ? props.color.toString() : "#333"};
  padding: ${props => props.padding ? props.padding.toString() : "2px 10px"}; 
  width: ${props => props.width ? props.width.toString() : "fit-content"};
  margin: ${props => props.margin ? props.margin.toString() : ""};
`;
const BoxText = styled(NarmalText)`
  background-color: ${props => props.bg ? props.bg.toString() : "#aea8a8"};
  padding: ${props => props.padding ? props.padding.toString() : "5px 10px"}; 
  font-size: .7rem;
  color: ${props => props.color ? props.color.toString() : "##ff5c00"};
  border-radius: 4px;
  font-weight: 500;
  margin: ${props => props.margin ? props.margin.toString() : ""};
  @media (min-width:768px){
   font-size: 1rem;
 }
 @media (min-width:1024px){
   left:-10%;
 } 
 @media (min-width:1440px){
   left:-25%;
 }

`;
const TagLine = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.color ? props.color.toString() : "#333"};
  padding: ${props => props.padding ? props.padding.toString() : "2px 10px"}; 
  width: ${props => props.width ? props.width.toString() : "100%"};
  margin: ${props => props.margin ? props.margin.toString() : ""};
  span{
    font-size: 1rem;
    color: #ff5c00;
    font-weight: 600;
  }
  @media (min-width:768px){
  font-size: 2rem;
  span{
    font-size: 2.2rem;
  }
 }
 @media (min-width:1024px){
  /* margin-top: 15%; */
  font-size: 2rem;
 }

 @media (min-width:1440px){
  /* margin-top: 15%; */
  font-size: 4rem;
  span{
    font-size: 3rem;
  }
 }


`;


const ImageBox = styled.div`
position: relative;
padding: ${props => props.padding ? props.padding.toString() : "20px"}; 
background-color: transparent;
margin: ${props => props.margin ? props.margin.toString() : ""};
@media (min-width:375px) {
  width: 255px;
  
  
}
@media (min-width:425px) {
width: 300px;

  
  
}
@media (min-width:768px) {
  width: 285px;
  height: 300px;

}
@media (min-width:1024px) {
width: 280px;
height: 300px;

} 
@media (min-width:1440px) {
  width: 294px;
  height: 304px;
   
} 
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: ${props => props.margin ? props.margin.toString() : ""};
`;
const AbsuluteBox = styled(BoxText)`
 margin-top: 20px;
  font-size: .6rem;

  @media (min-width:1024px) {
  left: 0;
    font-size: 1rem;

  }
  @media (min-width:1440px) {
 left: 0;
    font-size: 1rem;

  }
`;