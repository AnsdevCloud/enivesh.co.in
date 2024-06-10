import { Box, Button, Container, Stack, Typography, Zoom } from '@mui/material'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Thanks = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Typography variant='h5' textAlign={"center"} fontWeight={600} color={"primary"}>Thank You for Reaching Out
            </Typography>
            <Stack alignItems={"center"} justifyContent={"center"} p={1} width={"100%"} height={200} fontSize={150} >
                <IoMdCheckmarkCircleOutline color='#ff5c00' />
            </Stack>
            <Typography component={"p"} textAlign={"center"} m={1} variant='body2'>Your inquiry is important to us. We've received your message and our Insurance Expert will get back to you promptly to assist with your insurance needs.
            </Typography>
            <Typography variant='subtitle1' textAlign={"center"} color={"secondary"}>
                Thank you for choosing ENIVESH INSURANCE MARKETING.!
            </Typography>
            <Button sx={{ m: 1 }} fullWidth variant='outlined' onClick={() => navigate('/health')}>View Helth Insurance</Button>
        </Container>
    )
}

export default Thanks