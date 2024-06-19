import { Box, Typography } from '@mui/material'
import React from 'react'
import { BsHospitalFill } from 'react-icons/bs'
import { FaHospitalAlt } from 'react-icons/fa'
import styled, { css, keyframes } from 'styled-components'

const AnimateWoekH = ({ mainText, name, Icon, src }) => {
    return (
        <Wrapper>
            {Icon ? src ? "" : Icon : ""}
            {src ? Icon ? <Box width={90} height={90} >
                <img style={{ width: "100%" }} src={src} alt="" />
            </Box> : <Box width={80} height={80} >
                <img style={{ width: "100%" }} src={src} alt="" />
            </Box> : ""}
            <Box>
                <Typography textAlign={"center"} fontWeight={600} variant='h6'>{mainText}</Typography>
                <Typography textAlign={"center"} variant='body2' component={"p"} color={"#1a1616"}>{name}</Typography>
            </Box>
        </Wrapper>
    )
}

export default AnimateWoekH
const Wrapper = styled.div`
position: relative;
width: fit-content;
border-radius: 10%;
padding: 10px;
color: #ff5c00;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

gap: 5px;
svg{
    font-size: 50px;
}
@media (min-width: 768px) {
flex-direction: column;
    
}



`;

