import styled from "styled-components";
import HeadingBox from "../items/HeadingBox";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Question = ({ Qustions }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const processDescription = (data) => {
        data = data.replace(/\*\*(.*?)\*\*/g, '<span  style="font-weight: 600;color:#000; margin: 0px 2px">$1</span>');
        return <p className="maindata" dangerouslySetInnerHTML={{ __html: data }} />;
    };
    const processDescription2 = (data) => {
        data = data.replace(/\*\*(.*?)\*\*/g, '<span  style="font-weight: 600;color:#000; margin: 0px 2px">$1</span>');
        return <div dangerouslySetInnerHTML={{ __html: data }} />;
    };
    return (
        <Wrapper>
            <HeadingBox m={"5px 0"} colorText={"Frequently"} defaultText={"Asked Questions"} />
            {
                Qustions && Qustions.map((item, index) => {
                    return <Container open={openIndex === index} key={index}>
                        <Header id={index} open={openIndex === index} onClick={() => toggleAccordion(index)}>
                            <div><span className="span">{index + 1 + ". "}</span><span>{processDescription2(item.qus)}</span></div><IoMdArrowDropdown />
                        </Header>
                        {
                            openIndex === index && <Discription>
                                {
                                    item.ans.length != 0 && item.ans.map((data, index) => { return <React.Fragment key={index}> {processDescription(data)}</React.Fragment> })
                                }
                                {
                                    item.list && <ul>
                                        {
                                            item.list.map((listdata, index) => {
                                                return <div key={index}>
                                                    <span className="listtitle">{listdata.list_title} </span>
                                                    <p className="listdis">{listdata.list_dis}</p>

                                                </div>
                                            })
                                        }

                                    </ul>
                                }

                            </Discription>
                        }
                    </Container>
                })
            }

        </Wrapper>
    )
}

export default Question
const Wrapper = styled.div`
width: 90%;
height: fit-content;
padding: 10px;
margin: 20px auto;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
overflow: hidden;

`;

const Container = styled.div`
 width: 100%;
 margin: 10px auto;
 max-height: 0;
 background-color: #fff;
 transition:height all .4s ease-out;
 max-height: ${props => props.open === true ? "9999px" : "40px"}; 
 overflow: hidden;
 border: ${props => props.open === true ? "1px solid #f3d4ba40" : "0"};
 border-bottom: 1px solid #44444469;
 border-radius: 4px;

 @media (max-width:1024px) {
    width: 90%;
    margin: 25px 5%;

    
 }
  
`;
const Header = styled.h2`
position: relative;
height: fit-content;
font-size: .8rem;
font-weight: 600;
padding: 6px 0px;
display: flex;
align-items: center;
justify-content: space-between;
color: #444;
gap: 5px;
border-radius: 4px 4px 0 0;
transition: all .3s ease-out;
cursor: pointer;
background-color: ${props => props.open === true ? "#ff5e0023" : "#fff"};
div{
    display: inline;
}
.span{
    position: relative;
    left: 0;
    color: #ff5c00;
    padding-left: 10px;

}
&:hover{
    background-color: #f8a22212;
    color: #000;

}
svg{
    transform: rotate(${props => props.open === true ? "180deg" : "0"});
}
@media (max-width: 768px){
   font-size: 12px;
 }
`;

const Discription = styled.p`
font-size: 12px;
padding: 10px 15px;
color: #444;
text-align: justify;
cursor: default;
.maindata{
    margin: 10px 0;
    font-weight: 500;
    font-size: 12px;
}
ul{
    .listtitle{
        font-weight: 600;
        padding: 5px 0;
       color: #444;
       font-size: 12px;
    }
    .listdis{
padding: 5px 0;
font-size: 11px;
    }
}

@media (max-width: 768px){
    font-size: 0.8rem;
 }
`;