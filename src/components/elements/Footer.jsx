import React from 'react'
import styled from 'styled-components';
import ListCard from '../items/ulip/ListCard';
import { GI, HI, LI } from '../../jsondata/FooterListCardData'
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill, RiGoogleFill, RiInstagramFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs'
const Footer = ({ version }) => {
    return (<>
        <Container>
            <div className="container">
                <ListCard data={GI} />
                <ListCard data={HI} />
                <ListCard data={LI} />

            </div>
            <Line />
            <div className="socialLink">
                <Link to={"https://www.facebook.com/eniveshservices/"} target='_blanck'><RiFacebookCircleFill /></Link>
                <Link target='_blanck'><RiGoogleFill /></Link>
                <Link target='_blanck'><BsTwitter /></Link>
                <Link to={"https://www.instagram.com/e_nivesh/?igshid=1k8lgbl7by5np"} target='_blanck'><RiInstagramFill /></Link>
            </div>
            <LicenceBox>
                <p>Enivesh Marketing Insurance Pvt. Ltd : <span> 1103, Paras business centre, Kasturba road number 1.
                    Near Kasturba police station, Borivali East. Mumbai -400066</span></p>
                <p>Licence No <span> IMF186245250320160013</span> , Valid till : <span>22/03/2025</span> , CIN : <span> U66000MH2015PTC271396</span></p>
            </LicenceBox>
            <Copyright>
                <Link to={'/'}> <img src="/images/eniveshicon/Enivesh_Insurance_LOGO.png" alt="enivehbrand" /></Link>
                <p>Copyright ©2015 Enivesh. All Rights Reserved. </p>
                <span className='version'>V {version}</span>
            </Copyright>
        </Container>

    </>
    )
}

export default Footer
const Container = styled.div`

 width: 100%;
 background-color: #a9643d;
 padding: 20px 30px;
 img{
    width: 100px;
    margin: 0 0 10px 0;
 }
 .container{
width: 100%;
display: flex;
/* align-items: center; */
flex-wrap: wrap;
gap: 20px;
background-color: #ffd7bc;

border-radius: 10px;
@media (min-width:768px) {
justify-content: space-evenly;
flex-wrap: nowrap;


        
    }


 }
 .socialLink{
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: center;
    a{
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
        transition: all .3s ease-out;
        &:hover{
            color: #000;
        }

    }
    @media (min-width:768px) {
     gap: 50px;
     justify-content: flex-start;
        
    }

}
@media (max-width:768px) {
    padding-bottom: 100px;
}
`;
const LicenceBox = styled.div`
width: 100%;
height: fit-content;
background-color: #ffd7bc;
margin: 10px 0;
padding: 10px;
border-radius: 6px;
text-align: center;

p{
    color: #000;
    font-size: .7rem;
    letter-spacing: 1px;
    margin: 5px 0;
    span{
        color: #ff5c00;
    }
    


}
p:first-child{
    color: #ff5c00;
    span{
        color: #000;
    }
}



  
`;
const Line = styled.hr`
color:#888;
margin: 40px 10%;
width: 80%;

`;

const Copyright = styled.div`
cursor: default;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
  overflow: hidden;
  img{
    width: 80px;

  }
  p{
    font-size: .5rem;
    width: 100%;
    color: #000;
    font-size: 600;
    text-align: center;
    @media (min-width:768px) {
    font-size: .8rem;

        
    }
  }
  .version{
    font-size: .6rem;
    color: #f9f9f978;
    float: right;
    white-space: nowrap;
    cursor: default;
}
`;