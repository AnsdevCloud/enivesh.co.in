import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { v4 } from 'uuid';
import axios from 'axios';
import { Button, Container, Grid, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDaclDoc, setDslPin, setOTP } from '../../reduxapp/features/userdata/userSlice';
import fb from '../../Firebase/FireConfig';
import { getDownloadURL } from 'firebase/storage';
import { doc } from 'firebase/firestore';
const db = fb.firestore();
const storage = fb.storage();
const LinkGenerator = () => {
    const daclRedux = useSelector((state) => state.user.daclDoc);
    const [pin, setPin] = useState(0);
    const [uid, setUid] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [randomNumber, setRandomNumber] = useState('');
    const [formdata, setFormData] = useState([]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formdata);
    }
    const generateRandomNumber = () => {
        const min = 100000;
        const max = 999999;

        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(number.toString());
    };
    useEffect(() => {
        generateRandomNumber()
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        setUploadProgress(0);

        const storageRef = storage.ref().child(`documents/${selectedFile.name}`);
        const uploadTask = storageRef.put(selectedFile); // Web namespaced API usage

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error(error);
                setIsUploading(false);
            },
            async () => {
                const downloadURL = await storageRef.getDownloadURL(); // Web namespaced API usage
                setDownloadURL(downloadURL);
                setIsUploading(false);
            }
        );
    };


    const handleAddDocs = () => {
        // Add a new document in collection "cities"
        db.collection("DaclDocs").doc().set({
            "empid": formdata?.id,
            "name": formdata?.name,
            "email": formdata?.email ? formdata?.email : "",
            "phone": formdata?.phone,
            "PDFPassword": formdata?.id,
            "members": formdata?.members,
            "policynumber": "100200084938/03/00",
            "SumInsured": formdata?.SumInsured,
            "PdfUrl": downloadURL,
            "timestamp": new Date().getTime()
        })
            .then(() => {
                alert("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };

    const handleForm = () => {
        if (downloadURL) {
            handleAddDocs();
        } else {
            alert("PDF Upload First ")
        }
    }

    const handleNavigate = () => {


        if (pin.length === 4) {
            db.collection("DaclDocs").where("empid", "==", pin)
                .get()
                .then((querySnapshot) => {

                    querySnapshot.forEach((doc) => {
                        dispatch(setDaclDoc(doc.data()));
                        setUid(doc.id);


                    });

                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }



    }

    useEffect(() => {
        if (uid) {
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
                            to: `+91${daclRedux?.phone}`,
                            messageId: v4(),
                            content: {
                                templateName: 'otpdacl_v2',
                                language: 'en',
                                templateData: {
                                    header: { type: 'TEXT', placeholder: 'Enivesh' },
                                    body: { placeholders: [` ${daclRedux?.name}`, randomNumber] }
                                }
                            }
                        }
                    ]
                }
            };

            axios
                .request(options)
                .then(function (response) {
                    console.warn(response.data);
                    dispatch(setOTP(randomNumber))
                    dispatch(setDslPin(pin));
                    navigate("otp")
                    setTimeout(() => {
                        setUid("");
                        setPin(0)
                    }, 3000);
                })
                .catch(function (error) {
                    console.error(error);
                    navigate("/dacl");
                })
        }


    }, [uid])
    return (
        <Grid item xs={12} >
            <Paper sx={{ p: 1, mt: 5 }} elevation={0} >
                <Stack alignItems={"center"} justifyContent={"center"}>
                    <Paper sx={{ maxWidth: 500, p: 2 }}>
                        <Typography textAlign={"center"} component={"h1"} variant='subtitle1' m={2} fontWeight={600} color={"primary"}>DACL</Typography>
                        <InputLabel title='Enter 4 Digit Pin' />
                        <TextField fullWidth type='number' size='small' label="Enter 4 Digit  Employee ID" onChange={(e) => setPin(e.target.value)} />
                        <Button variant='contained' disabled={pin?.length === 4 ? false : true} size='small' onClick={handleNavigate} sx={{ minWidth: 200, m: "20px auto", }}>Submit</Button>
                    </Paper>

                </Stack>
            </Paper>
            {/* <Paper>
                <Paper sx={{ p: 2 }}>

                    <input type="file" onChange={handleFileChange} accept=".pdf" />
                    <button onClick={handleUpload} disabled={isUploading}>
                        {isUploading ? 'Uploading...' : 'Upload PDF'}
                    </button>
                    {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}<br /><br />

                    <input type="number" name='id' placeholder='id' onChange={handleFormChange} /><br />
                    <input type="text" name='name' placeholder='name' onChange={handleFormChange} /><br />
                    <input type="number" name='members' placeholder='members' onChange={handleFormChange} /><br />
                    <input type="number" name='SumInsured' placeholder='SumInsured' onChange={handleFormChange} /><br />
                    <input type="text" name='policynumber' placeholder='policynumber' onChange={handleFormChange} /><br />
                    <input type="number" name='phone' placeholder='phone' onChange={handleFormChange} /><br />
                    <input type="text" name='email' placeholder='email' onChange={handleFormChange} /><br />
                    <button onClick={handleForm}>Push Data FB</button>


                </Paper>
            </Paper> */}

        </Grid>
    );
};

export default LinkGenerator;
