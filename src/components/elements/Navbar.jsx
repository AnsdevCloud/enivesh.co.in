import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import DropDown from "../items/DropDown";
import navData from "../../jsondata/dropdowndata.json"
import { useEffect, useState } from "react";
const Navbar = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const [active, setActive] = useState(false);
    const [currentData, setCurrentData] = useState(false);
    const [IsScroll, setIsScroll] = useState(0);
    const lact = useLocation();

    const handleActive = (e) => {
        setActive(true)
        setCurrentData(e);
    }
    const navigate = useNavigate();
    useEffect(() => {
        setUserData(useUser)

    }, [lact])
    const handleScrollPosition = () => {
        const showButton = window.scrollY > 50; // Adjust threshold as needed
        setIsScroll(showButton);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScrollPosition);

        return () => {
            window.removeEventListener("scroll", handleScrollPosition);
        };
    }, []);
    return (
        <Wrapper $scroll={IsScroll}>
            <a className="logo" href={"/"}><div >
                <img src={"/images/eniveshicon/Enivesh_Insurance_LOGO.png"} alt="logo" />
            </div></a>
            <div className="navlink" >

                {
                    navData && navData.map((item, index) => {
                        return <NavLink key={index} onMouseEnter={(e) => handleActive(item)}  >{item.title}  <IoMdArrowDropdownCircle /></NavLink>
                    })
                }
                <NavLink to={'/blogs'} >Learning Center</NavLink>
            </div>
            <Link className="profile" to={"/profile"}>
                <div >
                    <img src={user ? user.profileUrl : "/images/eniveshicon/avatar.svg"} alt="profile" />
                </div>
            </Link>
            {
                active && <DropDown data={currentData} active={() => setActive(false)} />
            }
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  z-index: ${props => props.$scroll ? 9999 : 999};
  box-shadow: ${props => props.$scroll ? "0px 5px 9px -7px #555" : ""};;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 300px;
  .logo{
    position: absolute;
    width: 150px;
    left: 0px;
    top: auto;
      img{
        width: 150px;
       }
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
div{
    height: 100%;
    width: 100%;
}
    img{
        width: 100%;
        height: 100%;

    }
  }
`;