import React, { useState } from 'react'
import { BiBookAdd } from 'react-icons/bi';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { IoMdClose, IoMdHome, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import navData from "../../jsondata/dropdowndata.json"

const FooterNav = () => {
    const [dropActive, setDropActive] = useState(true);
    const [linkActive, setLinkActive] = useState(false);
    const [activeId, setActiveId] = useState();

    const handleToggleMenu = () => {
        setDropActive(!dropActive);
        setActiveId(null);

    }
    const handleToggleLink = ({ index }) => {
        setLinkActive(!linkActive);
        index === activeId ? setActiveId(null) : setActiveId(index);

    }
    return (
        <>
            <Wrap onClick={handleToggleMenu} $active={dropActive} />
            <Wrapper>

                <Link>  <IoMdHome /></Link>
                <Link>  <BiBookAdd /></Link>
                <Link onClick={handleToggleMenu}> {dropActive === true ? <IoMdMenu /> : <IoMdClose />}</Link>
                <DropContent $active={dropActive} $linkActive={activeId} >
                    <h4>Enivesh</h4>
                    {navData && navData.map((item, index) => {

                        return <div key={index} className="drop-link">
                            <div className="header" onClick={(e) => handleToggleLink({ index })}><p id={index} >{item.text}</p> {activeId === index ? <FaArrowUp color='#ff5c00' /> : <FaArrowDown />}</div>
                            {activeId === index &&

                                <Links key={index} className="links">
                                    {
                                        item.list && item.list.map((listItem, index) => {
                                            return <Link key={index} to={listItem.path}>
                                                <div className="link" onClick={handleToggleMenu}>
                                                    {listItem.name}
                                                </div>
                                            </Link>
                                        })
                                    }

                                </Links>
                            }

                        </div>
                    })}

                </DropContent>
            </Wrapper>
        </>
    )
}

export default FooterNav
const Wrap = styled.div`
display: ${props => props.$active === false ? "block" : "none"};
/* display: block; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0000001c;
  z-index: 99;
  height: 100%;
`;
const Wrapper = styled.div`
display: none;
width: 90%;
height: 60px;
border-radius: 10px 10px 10px 10px;
padding: 5px;
background-color: #fff;
box-shadow: 0px 0px 50px 1px #1a1a1a;
margin: 0 auto;
position: fixed;
bottom: 20px;
z-index: 9999;
left: 5%;
align-items: center;
justify-content: space-evenly;
    a{
    font-size: 25px;
    text-decoration: none;
    color: #1a1a1a;
    &:active{
    color: #ff5c00;
}
}
@media (max-width:768px) {
    display: flex;
}
 
`;
const DropContent = styled.div`
    transition: all .3s ease-in-out;
    position: absolute;
    width: 100%;
    bottom: 55px;
    left: 0;
    height:${props => props.$active === true ? "0px" : "250px"};
    max-height: 250px;
    background-color: #fbf6f0;
    border-radius: 10px 10px 0 0;
    z-index: 999;
    overflow-y: auto;
    overflow-x: hidden;
    h4{
        text-align: center;
        padding: 5px ;
        font-weight: 600;
        color: #ff5c00;
        border-bottom: 1px solid #ff5c00;
        position: sticky;
        top: 0;
        background-color: #fbf6f0;
    }
    .drop-link{
        width: 90%;
        margin: 2px auto;
        padding: 5px;
        border-bottom:1px solid #e35d0460;
      .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 5px 5px;
        border-radius: 5px 5px 0 0;
          p{
            text-align: start;
            font-size: 14px;
            font-weight: 600;

        }
        #life{
             color: ${props => props.$linkActive === "life" ? "#ff5c00" : "#1a1a1a"};
        }
         #health{
             color: ${props => props.$linkActive === "health" ? "#ff5c00" : "#1a1a1a"};
        }
         #msme{
             color: ${props => props.$linkActive === "msme" ? "#ff5c00" : "#1a1a1a"};
        }
         #group{
             color: ${props => props.$linkActive === "group" ? "#ff5c00" : "#1a1a1a"};
        }
        svg{
            font-size: 12px;
        }
      }
    
        
    }
   

 
`;

const Links = styled.div`
        padding: 2px 5px;
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        .link{
        margin: 2px 0;
        padding: 2px;
        border-bottom: 1px solid #99999971;
        color: #ff5c00;
        font-size: 12px;
        font-weight: 500;
        text-align: start;

            
        
        }
      
`;