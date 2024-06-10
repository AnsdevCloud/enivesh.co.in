import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, Button, Typography, Chip, Stack, Box, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setInsForm } from '../../../reduxapp/features/userdata/userSlice';

const Step4 = ({ onBack, onNext }) => {

    const globelForm = useSelector((state) => state.user.insuranceForm);
    const quikForm = useSelector((state) => state.user.quikInsuranceForm);

    const dispatch = useDispatch();
    const [FormData, setFormData] = useState(globelForm)
    const [selfName, setSelfName] = useState(globelForm[0]?.selfname ? globelForm[0]?.selfname : "");
    const [selfPhone, setSelfPhone] = useState(globelForm[0]?.phone ? globelForm[0]?.phone : "");
    const [selfEmail, setSelfEmail] = useState(globelForm[0]?.email ? globelForm[0]?.email : "");

    const handleSelf = () => {
        const updateForm = [...globelForm];
        const ind = updateForm.findIndex(df => df.name === "Self");
        const ageObject = updateForm.find(df => df.name === "Self");
        if (updateForm[0]) {
            updateForm[0] = {
                ...updateForm[0],
                selfname: selfName ? selfName : "",
                email: selfEmail ? selfEmail : "",
                phone: selfPhone ? selfPhone : ""
            };

        } else {
            return;
        }

        dispatch(setInsForm(updateForm));



    }

    useEffect(() => {
        setSelfPhone(quikForm?.phone)
        setSelfEmail(quikForm?.email)
    }, [])

    const handleNext = () => {
        handleSelf();

        onNext();
    }
    return (
        <Container maxWidth={"sm"}>

            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <TextField type='text' size="small" value={selfName} onChange={(e) => setSelfName(e.target.value)} label={"Your full name"} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField type='number' size="small" value={selfPhone} onChange={(e) => setSelfPhone(e.target.value)} label={"Number"} fullWidth />

                </Grid>
                <Grid item xs={12}>
                    <TextField type='email' size="small" value={selfEmail} onChange={(e) => setSelfEmail(e.target.value)} label={"E-Mail"} fullWidth />

                </Grid>
                <Grid item xs={12} >
                    <Stack flexDirection={"row"} justifyContent={"center"} p={2} gap={2} >
                        <Button onClick={onBack} variant='contained' color='secondary' fullWidth >Back</Button>
                        <Button disabled={FormData[0]?.city?.pincode <= 0 ? true : false} onClick={handleNext} variant='contained' color='primary' fullWidth >Continue </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Step4