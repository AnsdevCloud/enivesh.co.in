import { Button, Grid, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const OTP = () => {
    const navigate = useNavigate();
    const otp = useSelector((state) => state.user.otp);
    const [enterOtp, setEnterOtp] = useState(0);
    const handleFeachDoc = () => {
        if (enterOtp === otp) {
            navigate("/pdfdacldoc");

        } else {
            alert("Worng OTP")
        }

    }
    useEffect(() => {
        if (otp) {
            return;
        } else {
            navigate("/dacl")
        }
    })
    return (
        <Grid item xs={12} >
            <Paper sx={{ p: 1, mt: 5 }} elevation={0} >
                <Stack alignItems={"center"} justifyContent={"center"}>
                    <Paper sx={{ maxWidth: 500, p: 2 }}>
                        <Typography textAlign={"center"} component={"h1"} variant='subtitle1' m={2} fontWeight={600} color={"primary"}>DACL</Typography>
                        <InputLabel title='Enter OTP' />
                        <TextField fullWidth size='small' label="Enter OTP" type='number' onChange={(e) => setEnterOtp(e.target.value)} />
                        <Button onClick={handleFeachDoc} disabled={enterOtp.length === 6 ? false : true} variant='contained' size='small' sx={{ minWidth: 200, m: "20px auto", }}>Submit</Button>
                    </Paper>
                </Stack>
            </Paper>
        </Grid>
    )
}

export default OTP