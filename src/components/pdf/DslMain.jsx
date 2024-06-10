import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { v4 } from 'uuid';
import axios from 'axios';
import { Button, Container, Grid, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DslMain = () => {
    const [params, setParams] = useState({ name: v4(), company: ' enivesh insurance & marketing ' + "" });
    const [generatedLink, setGeneratedLink] = useState('');
    const [message, setMessage] = useState('');
    const [userNum, setUserNum] = useState();
    const [otp, setOtp] = useState(0);
    const [userOtp, setUserOtp] = useState(0);

    const generateLink = () => {
        const link = `${window.location.origin}/dsl?${queryString.stringify(params)}`;
        setGeneratedLink(link);
    };

    const handleParamChange = (e) => {
        const { name, value } = e.target;
        setParams({ ...params, [name]: value });
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link copied to clipboard!');
    };



    const generateRandomNumber = () => {
        const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generate a random number between 100000 and 999999
        setOtp(randomNumber);
    };
    useEffect(() => {
        generateRandomNumber();
    }, [])

    const sendMessage = async () => {

        const postOptions = {
            method: 'POST',
            url: 'https://public.doubletick.io/template',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'key_2sjcXWa3Ti'
            },
            data: {
                language: 'en',
                components: {
                    header: {
                        format: 'TEXT',
                        text: 'Enivesh Insurance '
                    },
                    body: { text: 'Hello' },
                    footer: { text: 'send by www.enivesh.co.in ' },

                },
                category: 'UTILITY',
                name: '1234',
                wabaNumbers: ['+919833888817']
            }
        };

        // axios
        //     .request(postOptions)
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });






        const templateOptions = {
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
                        to: '+919648841443',
                        messageId: v4(),
                        content: {
                            templateName: '123',
                            language: 'en',
                            templateData: {
                                header: { type: 'TEXT', placeholder: 'Aman Nishad' },
                                body: { placeholders: ['Aman Nishad', 'https://ansdev.cloud'] }
                            }
                        }
                    }
                ]
            }
        };

        axios
            .request(templateOptions)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

        const sentOptions = {
            method: 'POST',
            url: 'https://public.doubletick.io/whatsapp/message/text',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'key_2sjcXWa3Ti'
            },
            data: {
                content: {
                    text: 'Hello, world! otp ' + otp,
                    previewUrl: true
                },
                from: '+919833888817',
                to: '+919648841443',
                messageId: v4()
            }
        };

        axios
            .request(sentOptions)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

    };

    const handleLogin = () => {
        if (otp === userOtp) {
            alert("login success")
        } else {
            alert("login failed")
        }
    }

    return (
        <Container maxWidth={"lg"} sx={{ mt: 1, minHeight: "100vh" }}>
            <Grid container  >
                <Grid item xs={12} >
                    <Paper elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                        <img style={{ width: "100%", maxWidth: 440 }} src='/images/eniveshicon/Enivesh_Insurance_LOGO.png' />
                    </Paper>
                </Grid>
                <Outlet />

            </Grid>








        </Container>
    );
};

export default DslMain;
