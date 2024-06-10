import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import TermInsurance from "../../jsondata/terminusraunce_herosection.json"
const GHeroSection = () => {

    const [active, setActive] = useState(false);
    const [data, setData] = useState(TermInsurance);
    const [disData, setDisplayData] = useState("");
    const handleToggle = (e) => {
        setActive(!active)
        setDisplayData(e.text)

    }
    return (
        <Wrapper>
            <div className="left_side">
                <Heading>
                    <h1>GUARANTEED <span>SAVING PLAN</span></h1>
                    <p className="tagline">Unlocking Financial Success  </p>
                </Heading>
                <div className="lookimag">
                    <img src="/images/gsaving/gpreturn.svg" alt="" />
                </div>

                <MainTagline>

                    <h1>Dual <span>Benefits</span></h1>


                    <Box>
                        <ItemBox>
                            Fixed Benefits
                        </ItemBox>
                        <h1>+</h1>
                        <ItemBox>
                            Life Insurance
                        </ItemBox>
                    </Box>
                </MainTagline>

                <div className="navigate_box">
                    {/* <img src="/images/gsaving/markimage.png" alt="" /> */}
                </div>
            </div>
            <div className="right_side">
                <img src="/images/gsaving/gpreturn.svg" alt="picture" />
            </div>
        </Wrapper>
    )
}

export default GHeroSection
const Wrapper = styled.div`
width: 100%;
/* height: 85vh; */
position: relative;
display: flex;
margin: 10px 0;
align-items: center;
overflow: hidden;
.left_side{
    min-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* .page_title{
        font-size: 12px;
        position: absolute;
        left: 22%;
        top: 40px;
        h1{
                text-align: center;
                font-weight: 600;
            span{
                font-weight: 600;
                color: #ff5c00;
            }
            
        }
    .tagline{
        text-align: center;
        font-size: 12px;
        color: #444;
        font-weight: 500;
        }
        @media (max-width:768px) {
              left: 33%;
              top: 20px;
            h1{
                font-size: 16px;
            }
           .tagline{
        text-align: center;
        font-size: 8px;
        
        }
            
        }
    } */
    .lookimag{
        display: none;
        position: relative;
        width: 100%;
        height: fit-content;
        align-items: center;
        justify-content: center;
        img{
            margin-top: 70px;
            width: 260px;
        }
        @media (max-width:376px){
               
            img{
                margin-top: 60px;
            }
        }

        @media (max-width:426px){
               
            display: flex;
        }
    }
    .main_tagline{
        position: relative;
        font-size: 5rem;
        margin: 20px 0;
        h1{
            font-weight: 700;
            color: #ff5c00;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            span{
                color: #1a1a1a !;
            }
          
        }

        @media (max-width:768px) {
            h1{
                font-size: 4rem;
                .termplan{
                    font-size: 20px;
                        .priority{
                        font-size: 20px;

                        }
            
                }
            }
          
            
        }
        
    }
    .navigate_box{
        position: relative;
        width: 650px;
        height: 300px;
        overflow-y: auto;
        margin: 0 auto;
        background-image: url("/images/gsaving/markimage.png");
         background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        @media (max-width:1025px) {
        width: 90%;
        height: 250px;    
        }
       
    }

    @media (max-width: 769px) {
        width: 100%;
    }
    
   
    
}

  .right_side{
    padding: 20px;
    img{
        width: 355px;
        height: 100%;
    }

    @media (max-width:426px) {
        display: none;
    }
  }

  @media (min-width:768px) {
    height: 85vh;
  }
`;
const Heading = styled.div`
        position: relative;
        font-size: 12px;
        position: absolute;
        top: 40px;
        h1{
                text-align: center;
                font-weight: 600;
            span{
                font-weight: 600;
                color: #ff5c00;
            }
            
        }
    .tagline{
        text-align: center;
        font-size: 12px;
        color: #444;
        font-weight: 500;
        }
        @media (max-width:768px) {
              /* left: 33%; */
              top: 20px;
            h1{
                font-size: 16px;
            }
           .tagline{
        text-align: center;
        font-size: 8px;
        
        }
            
     
    }
`;
const MainTagline = styled.div`
       position: relative;
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 10px;
       margin: 20px 0;
       width: 100%;
       text-transform: uppercase;
       h1{
        font-weight: 600;
        color: #ff5c00;
        span{
            font-weight: 600;
        color: #1a1a1a;

        }
       }
       
  @media (min-width: 768px) {
    width: 100%;
    
  }
`;
const Box = styled.div`
width: 100%;
height: fit-content;
position: relative;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 0 50px;
      
  
`;
const ItemBox = styled.div`
  font-size: 1.2vmax;
  font-weight: 600;
  /* border: 1px solid #1a1a1a; */
 width: 40%;
 text-align: center;
 padding: 10px;
 border-radius: 4px;
box-shadow: 0px 0px 9px -7px #1a1a1a;

`;
