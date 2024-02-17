import styled from "styled-components";
import HeadingBox from "../items/HeadingBox";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NavigateProgress = () => {
    return (
        <Wrapper>
            <HeadingBox defaultText={"Buy"} colorText={"Step to"} />
            <ProgressContainer>
                <ProgressBox>
                    <div className="step-num">1</div>
                    <div className="image_side">
                        <img src="/images/eniveshicon/calculator.svg" alt="size" />
                    </div>
                    <div className="text_side">
                        <p>Understand Your Insurance Need: Calculate How much Life insurance you need ?</p>
                    </div>
                </ProgressBox>
                <ProgressBox>
                    <div className="step-num">2</div>

                    <div className="image_side">
                        <img src="/images/eniveshicon/documents.svg" alt="size" />
                    </div>
                    <div className="text_side">
                        <p>Choose cost-effective term plan meeting your specific needs.</p>
                    </div>
                </ProgressBox>
                <ProgressBox>
                    <div className="step-num">3</div>

                    <div className="image_side">
                        <img src="/images/eniveshicon/pgd.svg" alt="size" />
                    </div>
                    <div className="text_side">
                        <p>Experts, guiding you through payment, documentation, medical needs.</p>
                    </div>
                </ProgressBox>
                <ProgressCircleBox>
                    <div className="step-num">4</div>

                    Policy Issued
                </ProgressCircleBox>
            </ProgressContainer>

            <div className="navigae_link">
                Click Here <FaArrowRight /><Link>Life Insurance Needs Calculator</Link>
            </div>
        </Wrapper>
    )
}

export default NavigateProgress

const Wrapper = styled.div`
width: 90%;
height: fit-content;
padding: 10px;
margin: 20px auto;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
overflow: hidden;

.navigae_link{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    width: 100%;
    padding: 0 20px;
    font-weight: 500;
    color: #666;
    svg{
        color: #666;
        font-size: 12px;

    }
    a{
        transition: all .3s ease-in;
        color: #ff5c00;
        &:hover{
            text-transform: uppercase;

        }
    }
    @media (max-width:425px) {
        font-size: 10px;
        white-space: nowrap;
        
    }
}
`;
const ProgressContainer = styled.div`
position: relative;
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 20px 10px;

    &::before{
    content: "";
    position: absolute;
    width: 80%;
    height: 3px;
    background-color: #ff5c00;
    top: 50%;
    left: 10%;
    z-index: 0;
    @media (max-width:425px) {
        display: none;
    }
 }
@media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
`;
const ProgressBox = styled.div`
position: relative;
  width: 250px;
  height: 80px;
  box-shadow: 0px 0px 9px -7px #1a1a1a;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
  z-index: 9;
  padding: 5px;
.image_side{
    width: 150px;
    img{
        width: 100%;
    }
}
  .text_side{
    padding: 5px 2px;
    
    p{
        font-size: 10px;
        font-weight: 500;
    }
  }
   .step-num{
    display: none;
   }

@media (max-width:768px) {
    width: 130px;
    height: 150px;
    flex-wrap: wrap;
    justify-content: center;

    .image_side{
        width: 70px;
    }
  
   .step-num{
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 5px 10px;
    color: #fff;
    font-weight: 600;
    background-color: #ff5c00;
    border-radius: 50%;
    font-size: 10px;
   }
   @media (max-width:425px) {
    .step-num{
        display: block;
    }
   }
}
`;
const ProgressCircleBox = styled(ProgressBox)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 5px;
  text-align: center;
  font-weight: 600;
  color: #ff5c00;
  border: 2px solid #ff5c00;
  cursor: default;
  @media (max-width:425px) {
    .step-num{
    position: absolute;
    display: block;
    top: -20px;
    right: -5px;
    padding: 5px 10px;
    color: #fff;
    font-weight: 600;
    background-color: #ff5c00;
    border-radius: 50%;
    font-size: 10px;
   }
    
  }
`;