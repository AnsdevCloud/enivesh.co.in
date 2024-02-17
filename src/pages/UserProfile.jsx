import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../Firebase/Firebase';

const UserProfile = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const navigate = useNavigate();
    const location = useLocation();
    const [logout, setLogOut] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
        if (user === null) {
            navigate('/profile/login')
        } else if ((user === null && location.pathname === '/profile/signup')) {
            navigate('/profile/signup')
        }
        return;

    }, [])

    const LogOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            navigate('/profile/login')
            setLogOut(true)
        }).catch((error) => {
            console.warn(error);
        });
    }

    return (
        <Wrapper>
            {user ? <span className='backBtn' onClick={LogOut}>Sing Out</span> : <span className='backBtn'>Login then access more....</span>}
            <div className="userimages">
                <div className="imgbox">
                    <img src={user ? user.profileUrl : "/images/eniveshicon/avatar.svg"} alt="logo" />
                </div>
                <h3>{user ? user.username : "*******"}</h3>
            </div>
            <Container>
                <Outlet />
            </Container>

        </Wrapper>
    )
}

export default UserProfile

const Container = styled.div`
    width: 100%;
    border: 1px solid #ff5c00;
    height: 80%;
    padding: 20px;
    border-radius: 10px; 
    margin-top: 20px;
    @media (min-width:1024px) {
    width: calc(100% - 400px);
    padding: 10px 20px;
    height: fit-content;

}
`;
const Wrapper = styled.div`
  position: relative;
  width: 80%;
  min-height: 80vh;
  max-height: fit-content;
  margin: 50px auto;
  box-shadow: 0px 0px 9px -7px #1a1a1a;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
.backBtn{
    position: absolute;
    top: 20px;
    left: 50px;
    font-size: 10px;
    color: #1a1a1a;
    cursor: pointer;
   
    &:hover{
        text-decoration: underline;
    }
    
}
.userimages{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
    .imgbox{
        /* margin-top: 100px; */
        width: 15vmax ;
        height: 15vmax;
        border-radius: 50%;
        border: 2px solid #ff5c00;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    h3{
        font-size: 2.5vmax;
        font-weight: 600;
        color: #ff5c00;
    }
     @media (min-width:1024px) {
        width: 350px;
        margin: 0 auto;
        min-height: auto;
        height: fit-content;
        margin: 20px 0;
        justify-content: center;

    }
}
.details{
    width: calc(100% - 400px);
    border: 1px solid #ff5c00;
    height: 80%;
    padding: 20px;
    border-radius: 10px;
   .list{
    padding: 10px 20px;
     .label{
        font-size: 10px ;
        color: #666;
        font-weight: 600;
        margin: 5px auto;
    }
    .title{
        font-size: 1vmax;
        padding: 10px 0;
        font-weight: 600;
        color: #1a1a1a;

    }
   }
     @media (max-width: 769px) {
        width: 100%;
        height: fit-content;
      .list{
        .title{
            font-size: 12px;
        }
      }
    }
}
@media (max-width:769px) {
    padding: 10px 20px;
    height: fit-content;

}

`;