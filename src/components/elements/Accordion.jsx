import React, { useState } from 'react'
import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io'
const Accordion = ({ title, discription, id }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const toggleHendle = (id) => {
        // setOpen((prevIndex) => (prevIndex === index ? null : index));
        setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
        // setActive(id);

    }
    return (
        <Container open={openIndex === id}>
            <Header id={id} onClick={(e) => toggleHendle(id)}><span>{id + 1 + ". "}</span>{title}<IoMdArrowDropdown /></Header>
            {
                openIndex === id ? <Discription>{discription}</Discription> : ""
            }
        </Container>
    )
}

export default Accordion

const Container = styled.div`
 width: 100%;
 margin: 10px auto;
 max-height: 0;
 background-color: #fff;
 transition:height all .3s ease-out;
 max-height: ${props => props.open === true ? "9999px" : "40px"}; 
 overflow: hidden;
 border-bottom: 1px solid #44444469;
 @media (max-width:1024px) {
    width: 90%;
    margin: 25px 5%;

    
 }
  
`;
const Header = styled.h2`
position: relative;
height: 40px;
font-size: .8rem;
font-weight: 600;
padding: 6px 30px;
display: flex;
align-items: center;
justify-content: space-between;
color: #444;
border-radius: 4px 4px 0 0;
transition: all .3s ease-out;
cursor: pointer;
span{
    position: absolute;
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
   font-size: 1rem;
 }
`;

const Discription = styled.p`
font-size: 12px;
padding: 5px 10px;
color: #444;
text-align: justify;
cursor: default;
@media (max-width: 768px){
    font-size: 0.8rem;
 }
`;