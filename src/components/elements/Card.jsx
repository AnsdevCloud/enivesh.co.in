import React from 'react'
import styled from 'styled-components';
import { IoMdCheckmarkCircle } from "react-icons/io";
const Card = () => {
    return (
        <FlexRowBox>
            <PlanBox>
                <div className="imgbox">
                    <img src="/images/eniveshicon/protectplan.svg" alt="size" />

                </div>
                <div className="planinffo">
                    <div className="heading">
                        <h1>Pure Protection</h1>
                        <span></span>

                    </div>

                    <div className="plans">
                        <div className="plan">
                            <h1>1<span className="title">Rakshak Plan<br /><span>Pure Term Plan </span></span></h1>
                        </div>
                        <div className="list">
                            <IoMdCheckmarkCircle /> <span>Death Benefit</span>
                        </div>
                    </div>
                    <div className="plans gold">
                        <div className="plan">
                            <h1>2<span className="title"> Pro Rakshak Plan<br /><span>Pure Term Plan with Riders</span></span></h1>
                        </div>
                        <div className="list">
                            <IoMdCheckmarkCircle /> <span>Death Benefit</span>
                        </div>
                        <div className="list">
                            <IoMdCheckmarkCircle /> <span>Accidental & Critical Illness Benefits</span>
                        </div>
                    </div>
                </div>
            </PlanBox>
            <PlanBox>
                <div className="imgbox">
                    <img src="/images/eniveshicon/protectmoney.svg" alt="size" />


                </div>
                <div className="planinffo">
                    <div className="heading">
                        <h1>Survival Benefit Protection </h1>
                        <span>With Maturity</span>
                    </div>

                    <div className="plans">
                        <div className="plan">
                            <h1>1<span className="title"> S-Rakshak Plan<br /><span>Survival Benefit Term Plan </span></span></h1>
                        </div>
                        <div className="list">
                            <IoMdCheckmarkCircle /> <span>Death Benefit</span>
                        </div>
                    </div>
                    <div className="plans gold">
                        <div className="plan">
                            <h1>2<span className="title"> Pro S-Rakshak Plan<br /><span>Survival Benefit Term Plan with Riders</span></span></h1>
                        </div>
                        <div className="list">
                            <IoMdCheckmarkCircle /> <span>Death Benefit</span>
                        </div>
                        <div className="list ">
                            <IoMdCheckmarkCircle /> <span>Accidental & Critical Illness Benefits</span>
                        </div>
                        <div className="list ">
                            <IoMdCheckmarkCircle /> <span>Maturity Benefits</span>
                        </div>

                        <PopularPlan>Popular Plan</PopularPlan>
                    </div>
                </div>
            </PlanBox>
        </FlexRowBox>
    )
}

export default Card
const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  height: fit-content;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px -7px #1a1a1a;

`;

const PlanBox = styled.div`
position: relative;
transition: all .3s ease-in-out;
cursor: pointer;
width: 35%;
border: 1px solid #ff5c00;
padding: 20px 10px;
border-radius: 10px;
&:hover{
    background-color: #ff5e0014;
}
.imgbox{
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 10px auto;
    img{
        width: 100%;
    }
}
.planinffo{
    height: 320px;
    .heading{
        padding: 0px 30px;
        /* height: 100px; */
        h1{
            font-size: 1.5vmax;
            font-weight: 600;
            color: #ff5c00;
        }
        span{
            color: #666666d7;
            font-size: 12px;
            font-weight: 600;
            padding-left: 5px;
        }
    }

    .plans{
        padding: 0px 20px;
margin: 5px 0;

        .plan{

            h1{
                font-size: 3vmax;
                display: flex;
                align-items: center;
                color: #ff5c00;
                gap: 5px;
                font-weight: 600;
                .title{
                    color: #ff5c00;
                    display: block;
                    font-weight: 600;
                    font-size: 1.3vmax;
                    line-height: 14px;
                }
                span{
                    font-size: 10px;
                    font-weight: 600;
                    line-height: 15px;
                    color: #666;
                }
            }

        }

        .list{
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px 10px ;
            svg{
                color: #ff5c00;
            }
            span{
                font-size: .9vmax;
                font-weight: 500;
            }
        }
       
            &.gold{
                .plan{
                    h1,.title{
                        color: #ffb900;
                    }


                }
                .list{
                        svg{
                            color: #ffb900;
                        }
                    }   
            }
    }
}
  @media (max-width:768px) {
    min-width: 95%;
    .planinffo{
        .heading{
            h1{
                font-size: 25px;
            }
        }

        .plans{
            padding: 0 20px;
            h1{
                .title{
                    font-size: 20px;
                }
            }
        }
    }


  }
   @media (max-width:426px) {
    min-width: 100%;
    .planinffo{
        .heading{
           
            h1{
                font-size: 2vmax;
            }
            span{
                font-size: 8px;
            }
        }

        .plans{
            padding: 0 20px;
           .plan{
           h1{
            span{
                font-size: 8px;
            }
             .title{
                    font-size: 14px;
                }
                
           }  

           }
           .list{
            span{
                /* font-size: 10px; */
            }
           }
        }
    }


  }
`;
const FlexRowBox = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:50px;
`;

const PopularPlan = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px 30px;
  border: 1px solid #09ff0068;
  border-radius: 10px;
  color: #21ff04;
  background-color: #514b3868;
  font-weight: 600;
  /* box-shadow: 0px 0px 9px -7px #070707; */
  font-size: 10px;
  text-align: center;
  width: fit-content;
  @media (max-width:768px) {
     top: 10px;
     left: 10px;
  }

`;