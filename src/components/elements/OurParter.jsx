import styled from "styled-components";
import HeadingBox from "../items/HeadingBox";
import { useState } from "react";


const OurParter = ({ data }) => {

    return (
        <Wrapper>
            <HeadingBox defaultText={`Partners`} colorText={"Our"} m={"5px 0"} />

            <div className="flexbox">
                {
                    data && data?.map((item, index) => {
                        return <div key={index} className="imgbox">
                            <img src={item.src} alt="partner" />
                        </div>
                    })
                }

            </div>
        </Wrapper>
    )
}

export default OurParter
const Wrapper = styled.div`
width: 90%;
height: fit-content;
margin: 20px auto;
background-color: #fff;
border-radius: 10px;
padding: 20px 10px;
overflow: hidden;
box-shadow: 0px 0px 9px -7px #1a1a1a;

  .flexbox{
    display: flex;
    align-items: center;
    overflow-x: auto;
    justify-content: center;
    padding: 20px 0;
        flex-wrap: wrap;
        gap: 20px;

    .imgbox{
        width: calc(100% / 5 - 30px);
        display: flex;
        justify-content: flex-start;
        box-shadow: 0px 0px 9px -7px #1a1a1a;
        padding: 10px;
        border-radius: 5px;

        img{
            width: 50%;
            margin: 0  auto;
            background-color: ${props => props.$id === 6 ? "#ff5c00" : ""};

            @media (max-width:768px) {
            width: 100%;

         
                
            }
        }

    }
    @media (max-width:425px) {
        column-gap: 50px;
        padding: 10px 20px;
        justify-content: flex-start;
        flex-wrap: nowrap;

        .imgbox{
        min-width: calc(100% / 3 - 30px);
        



        }
    }
  }
`;