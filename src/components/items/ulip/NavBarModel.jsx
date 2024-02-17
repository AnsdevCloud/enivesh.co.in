import React from 'react'
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import Zindex from '../../StyledComponentsItem/Zindex';
const NavBarModel = ({ Data }) => {
    return (
        <>
            <Wrapper />

            <Container>

                {
                    Data && Data.map((item, index) => {
                        return <NavLink key={index}>
                            {item === "Life" || item === "Auto" ?
                                <>
                                    <Header>{item}<MdOutlineArrowDropDown /></Header>
                                    <Discription>
                                        <Link>{item}</Link>
                                    </Discription>
                                </>
                                :
                                <Header>{item}</Header>}


                        </NavLink>
                    })
                }

            </Container>
        </>
    )
}

export default NavBarModel
const Wrapper = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: #03000018;
display: none;
  
`;

const Container = styled.div`
transition: all .3s ease-in;
position: absolute;
bottom: 0;
right: 0;
width: 30%;
height: 90%;
background-color: #ffd6b86b;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 10px ;
border-radius: 10px 0 0 0;
box-shadow: -2px -2.5px 10px -5px #e25f2fd7;
color: #555;
gap: 5px;
z-index: ${Zindex.Narmal1};
display: none;

  
`;
const NavLink = styled.div`
width: 100%;
height: auto;
border: 1px solid #ff5c00;
border-radius: 4px;
svg{
    font-size: 1.2rem;
    rotate: calc(180deg);
    color: #ff5c00;
}
`;
const Header = styled.div`
 cursor: pointer;
width: 100%;
height: 35px;
display: flex;
align-items: center;
padding: 0px 10px;
justify-content: space-between;
&:hover{
    background-color: #ff560125;
    color: #000;
}


`;
const Link = styled(Header)`
border-radius: 4px;
height: 30px;
  
`;
const Discription = styled.div`
position: relative;
font-size: .8rem;
font-weight: 400;
  
`;