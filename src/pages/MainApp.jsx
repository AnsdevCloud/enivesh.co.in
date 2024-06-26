import React from 'react'
import Navbar from '../components/elements/Navbar'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import FooterNav from '../components/elements/FooterNav'
import Footer from '../components/elements/Footer'
import styled from 'styled-components'
import { Box, Button, Grid, IconButton, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Call, CallSharp, Rocket, WhatsApp } from '@mui/icons-material'

const MainApp = () => {
    const navigate = useNavigate();
    let userData = JSON.parse(localStorage.getItem("loginUser"));

    return (
        <>
            <Navbar />
            <Wrapper>
                {!(userData?.role === "Author" || userData?.role === "Admin" || userData?.role === "Employee") && <SideLeftBox>
                    <Typography textAlign={"center"} variant='subtitle2' display={"flex"} alignItems={"center"} justifyContent={"center"} gap={1}><Call color='success' /> Be insured.! Call us at 9833888817</Typography>
                </SideLeftBox>}
                {/* <SideRightBox >
                    <Grid container spacing={1}>
                        <Grid item sm={12} >
                            <Typography variant="h5" fontWeight={600} color="initial">Cosd </Typography>
                        </Grid>
                        <Grid item sm={12} >

                            <Stack gap={1} flexDirection={"row"} alignItems={"center"}
                                justifyContent={"space-between"}>
                                <TextField fullWidth label='Name' size='small' variant='standard' />
                                <TextField fullWidth label='Phone' size='small' variant='standard' />
                                <Box width={"100%"}>
                                    <Typography component={"h1"} variant='body2'>DS</Typography>
                                    <Button size='small' fullWidth variant='contained' color='success'>Get a Call Back</Button>
                                </Box>
                            </Stack>

                        </Grid>

                    </Grid>
                </SideRightBox> */}
                {!(userData?.role === "Author" || userData?.role === "Admin" || userData?.role === "Employee") && <SideCenterRightBox >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Tooltip title="Chat ">

                                <Link to={"https://wa.me/919833888817"} target='_blank'>
                                    <IconButton color='success'>
                                        <WhatsApp fontSize='large' />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Grid>

                    </Grid>
                </SideCenterRightBox>}
                <Outlet />
            </Wrapper >
            <FooterNav />
            <Footer version={"2.5.0"} />


        </>
    )
}

export default MainApp
const Wrapper = styled.div`
position: relative;
min-height: 100vh;
  
`;

const SideLeftBox = styled(Box)`
position: fixed;
height: 30px;
width: 100%;
background-color: #ff5c00;
color: #fff;
border-radius: 0 0px 20px 20px;
top: 60px;
left: 0%;
z-index: 999;
padding: 2px 10px;
@media (min-width: 1024px) {
width: 20%;
left: 40%;
    
}
  
`;
const SideRightBox = styled(Paper)`
position: fixed;
height: 120px;
width: 60%;
background-color: #f9f9f9;
right: 20%;
bottom: 0;
padding: 10px;
border-radius: 20px 20px 0 0;
border: 2px solid #ff5e0073;
z-index: 999;
  
`;
const SideCenterRightBox = styled(Paper)`
position: fixed;
height: 60px;
width: 60px;
padding: 5px;
right: 10px;
bottom: 70px;
z-index: 999;
@media (min-width: 1024px) {
bottom: 20px;
    
}
  
`;