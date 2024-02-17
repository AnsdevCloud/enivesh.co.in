import React, { useState } from 'react'
import styled from 'styled-components';
import Zindex from '../../StyledComponentsItem/Zindex';
import { MdGraphicEq, MdHome, MdMenu } from 'react-icons/md';
import device from '../../StyledComponentsItem/Devices';
const FooterBar = () => {
    const [Act, setActive] = useState();
    const activeHenddle = (id) => {
        setActive(id);
    };
    return (
        <Container>
            <Link id='1' active={"1" === Act ? "true" : "false"} onClick={(e) => activeHenddle(e.target.id)}>
                <MdHome />
                Home
            </Link>

            <Link id='2' active={"2" === Act ? "true" : "false"} onClick={(e) => activeHenddle(e.target.id)}>
                <MdGraphicEq />
                Blogs
            </Link>
            <Link id='3' active={"3" === Act ? "true" : "false"} onClick={(e) => activeHenddle(e.target.id)}>
                <MdMenu />
                Menu
            </Link>
        </Container>
    )
}

export default FooterBar
const Container = styled.div`
 position: fixed;
 bottom: 40px;
 width: 80%;
 left: 10%;
 right: 10%;
 height: 50px;
 background-color: #fff;
 box-shadow: 0 0 10px 10px #ff5e004f;
 z-index: ${Zindex.Front3MaxZ};
 padding: 2px 10px;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 border-radius: 50px;
 @media ${device.laptop}{
    display: none;
 }

  
`;
const Link = styled.a`
cursor: pointer;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 2px;
font-size: 0.8rem;
transition: all .3s ease-out;
/* z-index:${Zindex.Narmal} */
/* background-color: aliceblue; */

&:hover{
    color: #ff5c00;
}
svg{
    font-size: 2rem;
    z-index:${Zindex.Narmal};
    pointer-events: none;
}
  ${props => props.active === "true" ? "color: #ff5c00;" : "color: #000;"};
`;