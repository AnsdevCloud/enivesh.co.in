import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import TermInsurance from "../../jsondata/terminusraunce_herosection.json"
const HeroSection = () => {

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
                <div className="page_title">
                    <h1>TERM <span>INSURANCE</span></h1>
                    <p className="tagline">Empowering Futures, Life Protect</p>
                </div>
                <div className="lookimag">
                    <img src="\images\eniveshicon\pdg1.png" alt="" />
                </div>

                <MainTagline>
                    <h1>
                        No.1
                        <span className="termplan">
                            Term Plan
                            <span className="priority"> Priority</span>
                        </span>
                    </h1>
                </MainTagline>

                <div className="navigate_box">
                    {!active && <div>
                        {
                            data && data.map((item, index) => {
                                return <div key={index} onClick={(e) => handleToggle(item)} className="navigate_button">
                                    <h2>{item.label}</h2>
                                    <FaArrowRight />
                                </div>

                            })

                        }


                    </div>}
                    {
                        active && <div className="text_container">
                            <p>{disData}</p>
                            <FaArrowCircleLeft onClick={handleToggle} />
                        </div>
                    }
                </div>
            </div>
            <div className="right_side">
                <img src="\images\eniveshicon\pdg1.png" alt="picture" />
            </div>
        </Wrapper>
    )
}

export default HeroSection
const Wrapper = styled.div`
width: 100%;
/* height: 85vh; */
position: relative;
display: flex;
margin: 10px 0;
align-items: center;
.left_side{
    min-width: 60%;
    .page_title{
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
    }
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
            .termplan{
                font-size: 40px;
                display: block;
                color: #444;
                font-weight: 600;
            .priority{
                display: block;
                font-size: 40px;
                font-weight: 600;
                margin: 5px 0;
                color: #ff5c00;

            }
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
        height: 200px;
        overflow-y: auto;
        margin: 0 auto;
        padding: 20px 20px;
        border: 1px solid rgba(255, 163, 15, 0.50);
        background: rgba(255, 163, 15, 0.10);
        border-radius: 10px;
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        div{

            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        .navigate_button{
            cursor: pointer;
            transition: all .3s ease-in-out;
            background-color: #fff;
            width: calc(100% / 2 - 20px);
            border-radius: 10px;
            padding: 25px 15px;
            box-shadow: 0px 0px 9px -7px #1a1a1a;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2,svg{
                font-size: 12px;
                color: #444;
                font-weight: 600;
            }
            &:hover{
            box-shadow: 0px 0px 9px -7px #ff5c00;
            background-color: #fcf7f7;
            h2,svg{
                color: #ff5c00;
            }

            }
            @media (max-width:476px) {
                    width: calc(100% / 1 - 0px);
                    padding: 15px 20px ;
            }

        }
        }
    
        .text_container{

        p{
            /* width: 100%; */
            font-size: 14px;
            color: #444;
        }

    
            svg{
            position: absolute;
            bottom: 5px;
            right:10px ;
            color: #1a1a1a;
            width: 30px;
            height: 30px;
            padding: 5px;
            border-radius: 50%;
            background-color: #d7b2b228;
            &:hover{
            color: #ff5c00;
            cursor: pointer;
    
            }
        }
        }
        &::-webkit-scrollbar{
            width: 2px;
            background-color: #ff5c00;
        }
        &::-webkit-scrollbar-track{
        background-color: transparent;
        }
        @media (max-width:768px) {
        width: 90%;
        height: 265px;
            
        }
    }

}

  .right_side{
    padding: 20px;
    img{
        width: 450px;
    }

    @media (max-width:426px) {
        display: none;
    }
  }

  @media (min-width:768px) {
    height: 85vh;
  }
`;

const MainTagline = styled.div`
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
            .termplan{
                font-size: 40px;
                display: block;
                color: #444;
                font-weight: 600;
                .priority{
                    display: block;
                    font-size: 40px;
                    font-weight: 600;
                    margin: 5px 0;
                    color: #ff5c00;

                }
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
        
  
`;