import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import DropDown from "../items/DropDown";
import { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setTimeout(() => {
            setActive(false)
        }, 1000);
    }

    return (
        <Wrapper>
            <div className="logo">
                <img src={"/images/eniveshicon/eniveshlogo.png"} alt="logo" />
                {/* <img src={"/images/eniveshicon/eniveshicon.png"} alt="logo" /> */}
            </div>
            <div className="navlink" >
                <NavLink onMouseEnter={() => setActive(!active)} >LIFE INSURANCE <IoMdArrowDropdownCircle /></NavLink>
                <NavLink onMouseEnter={() => setActive(!active)} >HEALTH INSURANCE <IoMdArrowDropdownCircle /></NavLink>
                <NavLink onMouseEnter={() => setActive(!active)} >GROUP INSURANCE <IoMdArrowDropdownCircle /></NavLink>
                <NavLink onMouseEnter={() => setActive(!active)} >MSME INSURANCE <IoMdArrowDropdownCircle /></NavLink>
            </div>
            <div className="profile">
                <img src="https://wimpoleclinic.com/wp-content/uploads/Bold-and-curly.jpg" alt="profile" />
            </div>
            {
                active && <DropDown active={() => setActive(false)} />
            }
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  z-index: 9999;
  box-shadow: 0px 5px 9px -7px #555;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo{
    position: absolute;
    left: 0px;
    top: auto;
    @media (max-width:768px) {
       img{
        width: 150px;
       }
    }
  }
  .navlink{
    display: flex;
    gap: 30px;
    align-items: center;
    a{
        transition: all .4s ease-in;
        text-decoration: none;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 5px 5px;
        gap: 10px;
        color: #444;
        font-weight: 600;
        font-size: 14px;
      &:hover{
            color: #ff5c00;
        }
         &:hover svg{
            rotate: calc(180deg);
        }
    }
    @media (max-width:768px) {
        display: none;
        
    }

  }
  .profile{
    position: absolute;
    right: 20px;
    top: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ff5c00;
    overflow: hidden;

    img{
        width: 100%;

    }
  }
`;