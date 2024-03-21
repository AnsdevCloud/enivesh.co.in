import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Button from '../components/items/ulip/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';

const UserDetail = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = () => {
        navigate("/profile/edit")
    }
    useEffect(() => {
        if (user === null) {
            setUserData(useUser)
            navigate('/profile/login')
        }
    }, [useUser])
    // useEffect(() => {
    //     if (location.pathname === "/profile") {

    //     }
    // }, [location])
    return (
        <>
            {user && <Wrapper>
                <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#7a2f04d9", fontSize: "1.4vmax" }}>Welcome {user.name}</h3>

                <Typography component={"p"} variant='caption' textAlign={"center"}>{user?.role} </Typography>



                {user?.role === "Admin" && <Box component={Paper} elevation={1} sx={{ padding: 1, m: 1 }}>
                    <Link to={"/admin"}>Add SumAssured </Link>
                </Box>}
                <div className="list">
                    <span className="label">Username :</span>
                    <h5 className="title">{user.name}</h5>
                </div>
                <div className="list">
                    <span className="label">Email :</span>
                    <h5 className="title">{user.email}</h5>
                </div>
                <div className="list">
                    <span className="label">Phone :</span>
                    <h5 className="title">{user.phone ? user.phone : <span>Add Deatail............</span>}</h5>
                </div>
                <div className="list">
                    <span className="label">City :</span>
                    <h5 className="title">{user.city ? user.city : <span>Add Deatail............</span>}</h5>
                </div>
                <div className="list">
                    <span className="label">Work :</span>
                    <h5 className="title">{user.job ? user.job : <span>Add Deatail............</span>}</h5>
                </div>
                <Button title={"Edit Detail"} p={"5px 10px "} funcs={handleNavigate} size={".7rem"} Color={"#000"} bgColor={"#ff5e00d9"} />
            </Wrapper>
            }

        </>


    )
}

export default UserDetail
const Wrapper = styled.div`

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
        span{
            font-size: 10px;
            color: #666;

        }

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

a{
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
}
  
`;