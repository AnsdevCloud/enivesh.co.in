import React, { useEffect, useState } from 'react'
import { MdArrowDropDown, MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import PrivacyData from '../../jsondata/policy/privacypolicy.json'
import DisclamerData from '../../jsondata/policy/disclaimer.json'
import TermandServiceData from '../../jsondata/policy/termservice.json'
import { Link, Outlet } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const PrivacyPolicy = () => {
    const [printData, setPrintData] = useState(DisclamerData[0]);
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [active, setActive] = useState(null)
    const [toggleSideBar, setToggleSideBar] = useState(false);



    const handleAccordion = (e) => {
        setActive(e)


    }
    const processDescription = (ite) => {
        // Apply bold style
        ite = ite.replace(/\*\*(.*?)\*\*/g, '<p  style="font-weight: 500; margin: 5px 0">$1</p>');

        return <p dangerouslySetInnerHTML={{ __html: ite }} />;
    };
    const handlesetData = (e) => {
        setPrintData(e)

    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Wrapper>
            <Container $side={toggleSideBar}>
                <SideBar $side={toggleSideBar}>
                    <h2>Policy</h2>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>Disclaimer</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                DisclamerData && DisclamerData.map((item, index) => {
                                    return <LinkBox onClick={(e) => handlesetData(item)} className={active === item.id ? "active" : ""} key={index} $active={active === item.id ? true : false}>
                                        <Link to={"#" + item.id} state={item} onClick={() => setToggleSideBar(false)}>
                                            <Header $active={active === item.id ? true : false} onClick={(e) => handleAccordion(item?.id)}>
                                                {processDescription(item?.title)}

                                                {item && item?.sublink ? <MdArrowDropDown /> : ""}
                                            </Header>
                                        </Link>
                                        {(item && item.sublink) && <SubLink>
                                            <LinkItem>
                                                <p>  Enivesh</p>
                                            </LinkItem>
                                        </SubLink>}
                                    </LinkBox>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>
                                Privacy Policy
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                PrivacyData && PrivacyData.map((item, index) => {
                                    return <LinkBox onClick={(e) => handlesetData(item)} className={active === item.id ? "active" : ""} key={index} $active={active === item.id ? true : false}>
                                        <Link to={"#" + item.id} state={item} onClick={() => setToggleSideBar(false)}>
                                            <Header $active={active === item.id ? true : false} onClick={(e) => handleAccordion(item?.id)}>
                                                {processDescription(item?.title)}

                                                {item && item?.sublink ? <MdArrowDropDown /> : ""}
                                            </Header>
                                        </Link>
                                        {(item && item.sublink) && <SubLink>
                                            <LinkItem>
                                                <p>  Enivesh</p>
                                            </LinkItem>
                                        </SubLink>}
                                    </LinkBox>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>
                                Terms And Services
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                TermandServiceData && TermandServiceData.map((item, index) => {
                                    return <LinkBox onClick={(e) => handlesetData(item)} className={active === item.id ? "active" : ""} key={index} $active={active === item.id ? true : false}>
                                        <Link to={"#" + item.id} state={item} onClick={() => setToggleSideBar(false)}>
                                            <Header $active={active === item.id ? true : false} onClick={(e) => handleAccordion(item?.id)}>
                                                {processDescription(item?.title)}

                                                {item && item?.sublink ? <MdArrowDropDown /> : ""}
                                            </Header>
                                        </Link>
                                        {(item && item.sublink) && <SubLink>
                                            <LinkItem>
                                                <p>  Enivesh</p>
                                            </LinkItem>
                                        </SubLink>}
                                    </LinkBox>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>




                </SideBar>
                <Content>
                    {/* <Outlet /> */}
                    {/* {processDescription(printData?.title)}    */}
                    {
                        printData?.discription?.map((item, index) => {
                            return <React.Fragment key={index}>
                                {/* {processDescription(item)} */}
                                <ReactMarkdown children={item} />

                            </React.Fragment>
                        })
                    }
                    <ul>{
                        printData?.list?.map((item, index) => {
                            return <React.Fragment key={index}>

                                <li>   {processDescription(item)}</li>


                            </React.Fragment>
                        })
                    }
                    </ul>
                    {/* <p>{ printData?.}</p> */}
                    <Button onClick={() => setToggleSideBar(!toggleSideBar)}>{toggleSideBar ? "Close Sidebar" : "Open Sidebar"}</Button>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default PrivacyPolicy

const Wrapper = styled.div`
width: 100%;
height: fit-content;
padding: 5px;
  
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* flex-direction: ${props => props.$side ? "column-reverse" : "row"}; */
  /* flex-direction: column-reverse; */
  gap: 20px;
  /* height: 90vh; */

`;
const SideBar = styled.div`
  transition: all .4s ease-in-out;
  position: ${props => props.$side ? "fixed" : "sticky"};
  height: ${props => props.$side ? "80vh" : "90vh"};
   ${props => props.$side ? "bottom:40px" : "top:60px"};
  z-index: 9;
  left: 5px;
  z-index: 9;
  background-color: #fff;
  width: ${props => props.$side ? "100%" : "0px"};
  padding:${props => props.$side ? "2px 5px" : "0px"};
  overflow-y: auto;
  box-shadow: 0px 0px 9px -7px ${props => props.$side ? "#1a1a1a" : "transparent"};
    &::-webkit-scrollbar{
    width: 5px;
  }
   &::-webkit-scrollbar-thumb{
    background-color: #ff5c00;
    border-radius: 10px;
  }
a{
    text-decoration: none;
}
h2{
    font-size: 1vmax;
    text-align: center;
    padding: 10px 5px;
    font-weight: 500;
    text-transform: uppercase;
    color: #666;
}

  border-radius: 10px;
  @media (min-width: 1024px) {
    /* display: block; */
    width: 300px;
    box-shadow: 0px 0px 9px -7px #1a1a1a;
    padding: 2px 5px;



  }
`;
const Content = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  background-color: #fdfcfb;
  border-radius: 10px;
  height: 95vh;
  overflow-y:auto;
  padding: 20px 20px;
 

    &::-webkit-scrollbar{
    width: 5px;
  }
   &::-webkit-scrollbar-thumb{
    background-color: #ff5c00;
    border-radius: 10px;
  }
p{
    margin: 10px 0;
}
  ul{
    margin: 10px;
    padding: 10px;
    li{
        font-size: 14px; 
        margin: 2px 0;
    }
  }
 @media (min-width: 1024px) {
    width: calc(100% - 350px);


  }
`;

const LinkBox = styled.div`
  background-color: #99999916;
  padding: 5px 5px;
  border-radius: 4px;
  font-size: 1vmax;
  font-weight: 500;
  transition: all .4s ease-in;
  margin: 5px 0;
  height: ${props => props.$active ? "auto " : " 48px"};
  overflow: hidden;
  &.active{
    background-color: #ffd7bc !important;
    div{
      font-weight: 600;
    }
  }
  &:hover{
    background-color: #ff5e0017;
}
`;
const Header = styled.div`
font-size: 1.1vmax;
padding: 10px 2px;
font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
color: #555;
p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

cursor: pointer;
   display: flex;
  align-items: center;
  justify-content: space-between;
    svg{
    font-size: 1.3vmax;
    transform:${props => props.$active ? " rotate(0deg)" : " rotate(-90deg)"};
    transition: all .4s ease-out;
  }
  
`;

const SubLink = styled.ul`
list-style: none;
font-size: .9vmax;
font-weight: 500;
  
`;
const LinkItem = styled.li`
border-top: 1px solid #99999958;
padding: 5px 0;
/* background-color: #fffdfc8a; */
&:hover{
    background-color: #ff5e0017;
}
  
`;

const Button = styled.button`
padding: 5px 10px;
border: none;
background-color: #ff5c00;
border-radius: 4px;
outline: none;
font-size: 12px;
position: fixed;
bottom: 130px;
right: 10px;
text-transform: uppercase;
z-index: 99;
@media (min-width: 1024px) {
  display: none;
}
`;