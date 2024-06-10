import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import HeadingBox from './HeadingBox';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setQuikInsForm, setWhatsAppMail } from '../../reduxapp/features/userdata/userSlice';
import axios from 'axios';
import { v4 } from 'uuid';

const FormBtn = ({ BtnName, ColorHead, DefaultHead, InputName1, InputName2, InputName3, InputType1, InputType2, InputType3, Label1, Label2, Label3 }) => {
    const [isToggleBtn, setIsToggleBtn] = useState(false);
    const [isPhnValid, setIsPhnValid] = useState(false);
    const [isPinValid, setIsPinValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isFormData, setIsFormData] = useState([]);
    const GquikForm = useSelector((state) => state.user.quikInsuranceForm);
    const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]*([0-9]{3})[-.\s]*([0-9]{4})$/;
    const pincodeRegex = /^[1-9][0-9]{5}$/; // Only allows 6 digits, no leading zero
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


    const dispatch = useDispatch();
    const handleChange = (e) => {
        let value = e.target.value;
        if (e.target.name === "phone") {
            if (phoneRegex.test(value)) {
                setIsPhnValid(false);

            } else {
                setIsPhnValid(true);
            }
        }
        if (e.target.name === "pincode") {
            if (pincodeRegex.test(value)) {
                setIsPinValid(false);

            } else {
                setIsPinValid(true);
            }
        }
        if (e.target.name === "email") {
            if (emailRegex.test(value)) {
                setIsEmailValid(false);

            } else {
                setIsEmailValid(true);
            }
        }
        setIsFormData({ ...isFormData, [e.target.name]: value });

    }

    const handleSubmit = () => {
        dispatch(setQuikInsForm(isFormData));

        handleSubmitMail();

    }
    const handleSubmitMail = () => {

        if (isFormData.phone) {
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
                            to: `+919820551112`,
                            messageId: v4(),
                            content: {
                                templateName: 'sitequiksubmit_v3',
                                language: 'en',
                                templateData: {
                                    header: { type: 'TEXT', placeholder: 'Enivesh' },
                                    body: {
                                        placeholders: [
                                            `${isFormData?.phone}`,
                                            `${isFormData?.email ? isFormData?.email : "..."}`,
                                            `${isFormData?.pincode ? isFormData?.pincode : "..."}`,
                                            `${isFormData?.phone}`
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
                    setIsToggleBtn(false)
                    dispatch(setWhatsAppMail({
                        whatsapp: true,
                        sent: true,
                    }))
                    alert("Successfully ❤️")


                })
                .catch(function (error) {
                    dispatch(setWhatsAppMail({
                        whatsapp: false,
                        sent: false,
                    }))
                    console.log(error?.errrMessage);
                })
        } else {
            alert("Phone Number is Required !")
        }
    }
    return (
        <Wrapper $bg={isToggleBtn}>
            {isToggleBtn ? <Grid container spacing={2} >
                <Grid item xs={12} >
                    <HeadingBox defaultText={DefaultHead} colorText={ColorHead} m={"5px 0"} />
                    <Box position={"absolute"} right={30} top={30}>
                        <IconButton onClick={() => setIsToggleBtn(false)}>
                            <Close />
                        </IconButton>
                    </Box>


                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Stack gap={1} justifyContent={"center"} alignItems={"center"}>

                        <Stack flexDirection={"row"} gap={1} alignItems={"center"} width={"100%"}>

                            {InputName1 && <TextField error={isPhnValid} helperText={isPhnValid ? "Not valid Phone " : ""} onChange={(e) => handleChange(e)} type={InputType1} variant='standard' fullWidth size='small' name={InputName1} label={Label1} />}
                            {InputName2 && <TextField error={isPinValid} helperText={isPinValid ? "Not valid Pincode " : ""} onChange={(e) => handleChange(e)} type={InputType2} variant='standard' fullWidth size='small' name={InputName2} label={Label2} />}


                        </Stack>
                        {InputName3 && <TextField error={isEmailValid} helperText={isEmailValid ? "Not valid Email " : ""} onChange={(e) => handleChange(e)} type={InputType3} variant='standard' fullWidth size='small' name={InputName3} label={Label3} />}



                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} >

                    <Stack justifyContent={"center"} flexDirection={"row"} alignItems={"center"} height={"100%"} >

                        <Button disabled={isPhnValid || isPinValid || isEmailValid || isFormData?.length < 1} size='small' fullWidth sx={{ maxWidth: 300 }} variant='contained' onClick={handleSubmit}>Submit</Button>
                    </Stack>
                </Grid>


            </Grid> :
                <Stack justifyContent={"center"} flexDirection={"row"} alignItems={"center"}>
                    <Button Button variant='contained' onClick={() => setIsToggleBtn(true)}>{BtnName ? BtnName : "Add Btn Name"}</Button>
                </Stack>
            }
        </Wrapper>
    )
}

export default FormBtn
const Wrapper = styled.div`
transition: all .3s ease-in-out;
position: relative;
  width: 90%;
  border-radius: 10px;
  height:${props => props.$bg ? "220px" : "80px"};
  background-color: ${props => props.$bg ? "#fcfbfa" : "transparent"};
    box-shadow: 0px 0px 9px -7px ${props => props.$bg ? "#1a1a1a" : "transparent"};
  margin:5px;
  overflow: hidden;
  padding: 20px 10px;
  margin: 10px 5%;
  @media (min-width: 768px) {
  height:${props => props.$bg ? "200px" : "80px"};
  margin: 5px 5%;

    
  }
`;