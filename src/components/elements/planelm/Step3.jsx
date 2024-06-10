import React, { useEffect, useState } from 'react'
import { Container, FormControl, Grid, Typography, Chip, Stack, Box, TextField, InputLabel, Button } from '@mui/material'
import Axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { setInsForm } from '../../../reduxapp/features/userdata/userSlice';
const Step3 = ({ onBack, onNext, data }) => {
    const globelForm = useSelector((state) => state.user.insuranceForm);
    const quikForm = useSelector((state) => state.user.quikInsuranceForm);
    const dispatch = useDispatch();

    const [FormData, setFormData] = useState([]);
    const [city, setCity] = useState({
        pincode: "",
        name: ""
    });
    const [pincode, setPincode] = useState(globelForm ? globelForm[0].city?.pincode : "");
    const cities = [
        { name: 'Mumbai', pincode: '400001' },
        { name: 'Pune', pincode: '411001' },
        { name: 'Thane', pincode: '400601' },
        { name: 'Navi Mumbai', pincode: '400701' },
        { name: 'Nashik', pincode: '422001' },
        { name: 'Nagpur', pincode: '440001' },
        { name: 'Kalyan', pincode: '421301' },
        { name: 'Vasai', pincode: '401202' },
        { name: 'Aurangabad', pincode: '431001' },
        { name: 'Solapur', pincode: '413001' },
        { name: 'Amravati', pincode: '444601' },
        { name: 'Panvel', pincode: '410206' },
        { name: 'Badlapur', pincode: '421503' },
        { name: 'Ulhasnagar', pincode: '421001' },
        { name: 'Kolhapur', pincode: '416001' },
        { name: 'Sangli', pincode: '416416' },
        { name: 'Satara', pincode: '415001' },
        { name: 'Ratnagiri', pincode: '415612' }
    ];
    const cityfeach = (pin) => {
        Axios.get(`https://api.postalpincode.in/pincode/${pin}`)

            .then(response => {

                setCity({
                    pincode: response?.data[0].PostOffice[0].Pincode,
                    name: response?.data[0].PostOffice[0].District,
                })


            })
            .catch(error => {
                console.warn(error)
            }
            )

    }


    const handleCity = (item) => {
        if (item) {
            const updateForm = [...globelForm];
            const ind = updateForm.find(df => df.name === "Self");
            if (updateForm[0].cat === "Self") {
                setPincode(item?.pincode)

                updateForm[0] = {
                    ...ind,
                    city: item,

                };
                setFormData(updateForm);

            } else {
                return;
            }
        } else if (city.pincode) {
            const updateForm = [...globelForm];
            const ind = updateForm.find(df => df.name === "Self");
            if (updateForm[0].cat === "Self") {
                updateForm[0] = {
                    ...ind,
                    city,

                };
            } else {
                return;
            }
            dispatch(setInsForm(updateForm));
        } else {
            alert("Pincode Not Found")
        }
    }
    useEffect(() => {
        // cityfeach(quikForm?.pincode)
        setPincode(quikForm?.pincode)
    }, [])
    useEffect(() => {
        if (pincode?.length === 6) {
            cityfeach(pincode);
        }
    }, [pincode])
    useEffect(() => {
        if (city.name) {
            handleCity();
        }

    }, [city])
    const handleNext = () => {
        onNext();

    }

    return (
        <Container maxWidth={"sm"}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            InputProps={{
                                endAdornment: <InputAdornment position="start">{globelForm ? "District : " + globelForm[0]?.city?.name ? globelForm[0]?.city?.name.toUpperCase() : "Not Found" : ""}</InputAdornment>,
                            }}
                            label="City Pin Code" size='medium' value={pincode} focused={pincode} variant="standard" onChange={(e) => setPincode(e.target.value)} type='text' />
                    </FormControl>
                    <Typography variant='caption' mt={1} fontWeight={600} component={"p"} color={"grey"}>
                        Popular cities
                    </Typography>
                    <Stack mt={2} gap={1} flexDirection={"row"} flexWrap={"wrap"} >
                        {cities?.map((item, index) => {
                            return <Box key={index}>
                                <Button size='small' color='primary' variant={item?.pincode === city?.pincode ? "contained" : "text"} onClick={() => handleCity(item)}>
                                    <Chip label={item?.name} size='medium' />
                                </Button>
                            </Box>
                        })}
                    </Stack>

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

export default Step3