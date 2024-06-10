import React, { useEffect, useState } from 'react'
import { Avatar, Container, FormControl, TextField, Grid, InputLabel, Paper, Typography, Button, Stack, Select, MenuItem } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setInsForm } from '../../../reduxapp/features/userdata/userSlice';
const Step2 = ({ onBack, onNext, data }) => {
    const globelForm = useSelector((state) => state.user.insuranceForm);
    const dispatch = useDispatch();
    var format = dayjs("DD/MM/YYYY");
    const [seflAllAge, setSelfAllAge] = useState([])
    const [FormData, setFormData] = useState([]);
    const [value, setValue] = useState(format);
    const [ageObject, setAgeObject] = useState();
    const [totalDauhter, setTotalDauhter] = useState();
    const [totalSons, setTotalSons] = useState();

    useEffect(() => {
        if (globelForm) {
            const activeItems = globelForm.filter(item => item.active);
            setFormData(activeItems);

        }
    }, [globelForm])


    const handleChange = async ({ item, ind, newValue }) => {
        setValue(newValue)
        let nsd = item?.name + " " + (ind + 2)
        if (ind) {
            // console.log(nsd);
            setAgeObject({ nsd, newValue });

        } else {
            setAgeObject({ item, newValue });
        }

    }
    const handleAge = () => {
        let ageCalculated = calculateAge(ageObject?.newValue)
        const updateForm = [...FormData];
        const ind = updateForm.findIndex(df => df.name === ageObject?.item?.name);
        if (updateForm[ind].active === true) {
            updateForm[ind] = {
                ...ageObject.item,
                age: ageCalculated
            };
        } else {
            return;
        }
        dispatch(setInsForm(updateForm));
    }

    useEffect(() => {
        if (ageObject) {

            handleAge()
        } else {
            return;
        }
    }, [ageObject])

    const calculateAge = (val) => {
        const dobDate = new Date(val);
        const currentDate = new Date();

        // Calculate the difference in milliseconds
        const differenceMs = currentDate - dobDate;

        // Convert the difference to years
        const ageDate = new Date(differenceMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        // console.log(age);
        return age;
    };

    useEffect(() => {
        const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
        setSelfAllAge(numbers);
    }, []);
    const handleNext = () => {
        onNext();

    }

    return (
        <Container maxWidth={"sm"}>

            <Grid container spacing={2}>
                {FormData?.map((item, index) => {

                    return <>

                        <Grid key={index} item xs={12}>
                            <Paper elevation={1} sx={{ p: 1 }}>


                                <Stack flexDirection={"row"} gap={2} alignItems={"center"} justifyContent={"flex-start"}>
                                    <Avatar src={item?.image} />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker

                                                label={item?.name}
                                                defaultValue={value}
                                                onChange={(newValue) => handleChange({ item, newValue })}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                    <Typography variant='caption'>Your Age :</Typography> {item?.age}  Year
                                </Stack>
                            </Paper>
                        </Grid>
                        {
                            item?.childs?.length >= 1 ?
                                <>
                                    {item?.childs?.map((ite, ind) => {
                                        return <Grid key={ind} item xs={12}>
                                            <Paper elevation={1} sx={{ p: 1 }}>


                                                <Stack flexDirection={"row"} gap={2} alignItems={"center"} justifyContent={"flex-start"}>
                                                    <Avatar src={item?.image} />
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']}>
                                                            <DatePicker

                                                                label={item?.name + " " + ind}
                                                                defaultValue={value}
                                                                onChange={(newValue) => handleChange({ item, ind, newValue })}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>

                                                    <Typography variant='caption'>Your Age :</Typography> {ite?.age}  Year
                                                </Stack>
                                            </Paper>
                                        </Grid>
                                    })}
                                </>
                                : ""
                        }
                    </>
                })}
                <Grid item xs={12} >
                    <Stack flexDirection={"row"} justifyContent={"center"} p={2} gap={2} >
                        <Button onClick={onBack} variant='contained' color='secondary' fullWidth >Back</Button>
                        <Button disabled={FormData[0]?.age <= 0 ? true : false} onClick={handleNext} variant='contained' color='primary' fullWidth >Continue </Button>

                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Step2