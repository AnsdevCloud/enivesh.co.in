import React, { useEffect } from 'react'
import { Container, FormControl, Grid, Typography, Chip, Paper, Button, FormControlLabel, Stack, Box, TextField } from '@mui/material'
// import { CheckBox } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setInsForm } from '../../../reduxapp/features/userdata/userSlice';
const Step5 = ({ onBack, onNext }) => {
    const globelForm = useSelector((state) => state.user.insuranceForm);
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        Diabetes: globelForm[0]?.state?.Diabetes,
        Bp: globelForm[0]?.state?.Bp,
        AnySuegery: globelForm[0]?.state?.AnySuegery,
        Thyropid: globelForm[0]?.state?.Thyropid,
        Asthma: globelForm[0]?.state?.Asthma,
        OtherDisease: globelForm[0]?.state?.OtherDisease,
        nonethese: globelForm[0]?.state?.nonethese

    });


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        handleSelf()
    };

    useEffect(() => {
        // handleSelf()
    }, [state])
    // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    const option = [{
        name: "Diabetes",
        label: "Diabetes",
    },

    {
        name: "Bp",
        label: "Blood Pressure",
    },
    {
        name: "AnySuegery",
        label: "Any Surgery",
    },
    {
        name: "Thyropid",
        label: "Thyroid",
    }, {
        name: "Asthma",
        label: "Asthma",
    }, {
        name: "OtherDisease",
        label: "Other disease",
    }, {
        name: "nonethese",
        label: "None of these",
    }]
    const handleSelf = () => {
        const updateForm = [...globelForm];
        const ind = updateForm.findIndex(df => df.name === "Self");
        const ageObject = updateForm.find(df => df.name === "Self");

        if (updateForm[0]) {
            updateForm[0] = {
                ...updateForm[0],
                state
            };

        } else {
            return;
        }

        dispatch(setInsForm(updateForm));




    }
    const handleNext = () => {
        // handleSelf()

        onNext();
    }
    return (
        <Container maxWidth={"sm"}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.Diabetes} onChange={handleChange} name={"Diabetes"} />
                            }
                            label={"Diabetes"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.Asthma} onChange={handleChange} name={"Asthma"} />
                            }
                            label={"Asthama"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.Bp} onChange={handleChange} name={"Bp"} />
                            }
                            label={"Blood Pressure"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.AnySuegery} onChange={handleChange} name={"AnySuegery"} />
                            }
                            label={"Any Surgery"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.Thyropid} onChange={handleChange} name={"Thyropid"} />
                            }
                            label={"Thyroid"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.OtherDisease} onChange={handleChange} name={"OtherDisease"} />
                            }
                            label={"Other disease"}
                        />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper sx={{ p: 1, pl: 5 }}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={globelForm[0]?.state?.nonethese} onChange={handleChange} name={"nonethese"} />
                            }
                            label={"None of these"}
                        />

                    </Paper>
                </Grid>

                <Grid item xs={12} >
                    <Stack flexDirection={"row"} justifyContent={"center"} p={2} gap={2} >
                        <Button onClick={onBack} variant='contained' color='secondary' fullWidth >Back</Button>
                        <Button onClick={handleNext} variant='contained' color='primary' fullWidth >Continue </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Step5