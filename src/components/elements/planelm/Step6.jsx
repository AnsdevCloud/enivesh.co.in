import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, FormControl, Grid, Button, Chip, Paper, FormControlLabel, Stack, Box, TextField, RadioGroup } from '@mui/material'
import Radio from '@mui/material/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import axios from 'axios';
import Thanks from './Thanks';
import { setQuikInsForm } from '../../../reduxapp/features/userdata/userSlice';
const Step6 = ({ onBack, onNext }) => {

    const [isThanks, setIsThanks] = useState(false);

    const globelForm = useSelector((state) => state.user.insuranceForm);
    const [girls, setGirls] = useState([]);
    const [boys, setBoys] = useState([]);
    const [parents, setParents] = useState([]);
    const [gparents, setGparents] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        Diabetes: true,
        Bp: false,

    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });

    };
    const handleNext = () => {
        localStorage.setItem("insurance_user_form", JSON.stringify(globelForm));
        navigate('plans')


    }
    useEffect(() => {
        if (globelForm) {
            let boys = globelForm?.filter((item) => item?.code === "boy");
            let girls = globelForm?.filter((item) => item?.code === "girl");
            let parents = globelForm?.filter((item) => item?.cat === "Parents&Parentsinlaw");
            let Gparents = globelForm?.filter((item) => item?.cat === "GrandParents");
            let fgirl = girls?.map((item, index) => ` Girl${index + 1} Age : ` + item?.age);
            let fboy = boys?.map((item, index) => ` Son${index + 1} Age : ` + item?.age);
            let fparents = parents?.map((item, index) => ` ${item?.name} Age : ` + item?.age);
            let Gfparents = Gparents?.map((item, index) => ` ${item?.name} Age : ` + item?.age);
            setParents(fparents);
            setGparents(Gfparents)
            setBoys(fboy);
            setGirls(fgirl);
        }
    }, [])
    const handleSubmitMail = () => {

        if (globelForm[0]?.phone) {
            const options = {
                method: 'POST',
                url: 'https://public.doubletick.io/whatsapp/message/template',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: 'key_2sjcXWa3Ti'
                },
                data: {
                    messages: [
                        {
                            from: '+919833888817',
                            to: `+919324374807`,
                            messageId: v4(),
                            content: {
                                templateName: 'sitesubmit_v2',
                                language: 'en',
                                templateData: {
                                    header: { type: 'TEXT', placeholder: 'Enivesh' },
                                    body: {
                                        placeholders: [
                                            `Name : ${globelForm[0]?.selfname ? globelForm[0]?.selfname : "NA"} , Age :  ${globelForm[0]?.age ? globelForm[0]?.age : "NA"} , Phone :  ${globelForm[0]?.phone} , Email :  ${globelForm[0]?.email ? globelForm[0]?.email : "NA"} , Gender :  ${globelForm[0]?.gender ? globelForm[0]?.gender : "NA"} , City : ${globelForm[0]?.city?.name ? globelForm[0]?.city?.name : "NA"}, Pincode : ${globelForm[0]?.city?.pincode} `,
                                            ` ${boys} ,  ${girls}`,
                                            `${parents}`,
                                            `${gparents}`,
                                            `${globelForm?.length}`
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    setIsThanks(true)
                    setTimeout(() => {
                        navigate("/health")
                    }, 5000);
                    dispatch(setQuikInsForm(""))


                })
                .catch(function (error) {
                    console.warn(error?.errrMessage);
                })
        } else {
            alert("Phone Number is Required !")
        }
    }
    return (
        <Container maxWidth={"sm"}>
            {isThanks ? <Thanks /> : <Grid container >
                <Grid item xs={12} >

                    <Stack alignItems={"center"}>
                        <Paper sx={{ p: 1, width: 250 }}>

                            <FormControl fullWidth>
                                <RadioGroup
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    row

                                >

                                    <FormControlLabel sx={{ pl: 3 }} value="yes" control={<Radio size='small' sx={{ mr: 1 }} />} label="Yes" />
                                    <FormControlLabel sx={{ pl: 4 }} value="no" control={<Radio size='small' sx={{ mr: 1 }} />} label="No" />


                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Stack>

                </Grid>

                <Grid item xs={12} >
                    <Stack flexDirection={"row"} justifyContent={"center"} p={2} gap={2} >
                        <Button onClick={onBack} variant='contained' color='secondary' fullWidth >Back</Button>
                        <Button onClick={handleSubmitMail} variant='contained' color='primary' fullWidth >Submit </Button>
                    </Stack>
                </Grid>
            </Grid>}
        </Container>
    )
}

export default Step6