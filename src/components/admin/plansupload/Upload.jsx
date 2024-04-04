import { Alert, Box, Button, Container, Fab, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeadingBox from '../../items/HeadingBox'
import { v4 } from 'uuid';
import axios from 'axios';
import CategoiesData from './json/category.json'
import { Add, AddAPhoto, CloudUpload, PictureAsPdf, Remove, UploadFile, UploadSharp } from '@mui/icons-material';
import fb from '../../../Firebase/FireConfig';
import { grey } from '@mui/material/colors';
import styled from '@emotion/styled';
// Get a reference to the database service
import * as XLSX from 'xlsx';
import TransitionsModal from '../../models/TransitionModel';
import { Navigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const database = fb.database();
const db = fb.firestore();
const Upload = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [docsFile, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [docsUrls, setDocsUrls] = useState([]);

    //togle Input Fields
    const [fieldToggle, setFieldToggle] = useState(false)
    const [planDataCheck, setPlanDataCheck] = useState(false);
    const [alertMsg, setAlertMsg] = useState({
        type: "",
        message: "",
        state: false,

    })
    const [caverageSheet, setCoverageSheet] = useState();
    const [featureSheet, setFeatureSheet] = useState();
    const [docsName, setDocsName] = useState("");
    // const [docsToggle, setDocsToggle] = useState(false);
    // firebase database get collection
    const [categories, setCategories] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [filtercompanies, setfilterCompanies] = useState([]);

    const [ExcelFeature, setExcelFeature] = useState([]);
    const [ExcelCaverage, setExcelCaverage] = useState([]);
    //single object collection
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();

    //by input field get data()
    const [companyInput, setCompanyInput] = useState()

    // //get data form Firebase Database
    useEffect(() => {
        setCategories(CategoiesData);

        // Retrieve data from a specific path in the database
        const ref = database.ref('/categories');

        // Retrieve all data
        ref.once('value', (snapshot) => {
            const fetchedData = snapshot.val();
            if (fetchedData) {
                const dataArray = [];
                // Iterate through the data and store it as an array of objects with keys
                Object.keys(fetchedData).forEach(key => {
                    dataArray.push({ key: key, ...fetchedData[key] });
                });


                setfilterCompanies(dataArray)
                // console.log(filterdCompany);
            }
        });
        // console.log(companies);
        // Clean up listener when component unmounts
        return () => {
            ref.off('value');
        };
    }, [companyInput])

    useEffect(() => {
        const filterdCompany = filtercompanies.filter(item => item.category.id === category.id)
        setCompanies(filterdCompany)
    }, [category])
    //change select Category function
    const handleChangeCategory = (e) => {
        let id = e.target.value;
        const Catdoc = categories?.find((item) => item?.id === id);
        setCategory(Catdoc);
    }
    //change select Company function
    const handleChangeCompany = (e) => {
        let id = e.target.value;
        let com = companies?.find((item) => item?.id === id);
        setCompany(com);

    }

    const handeAddCompany = () => {
        let data = {
            category: category,
            id: v4(),
            name: companyInput,
            timestamp: new Date().getTime()

        };
        if (companyInput && category) {
            database.ref('categories/').push(data)
                .then(() => {
                    setCompanyInput("")
                    enqueueSnackbar("Company Added Successfully ", { variant: "success" })

                })
                .catch((error) => {
                    console.error('Error adding data: ', error);
                });
        } else {
            setAlertMsg({
                type: "error",
                message: "Company Input Not Empty...!",
                state: true
            })
            setTimeout(() => {
                setAlertMsg({
                    type: "",
                    message: "",
                    state: false
                })
            }, 3000);
        }
    };

    const [caverageToggle, setCoverageToggle] = useState(false);
    const [featureToggle, setFeatureToggle] = useState(false);
    const [docsToggle, setDocsToggle] = useState(false);



    //select feature data from excel file
    // const [featureFile, setFeatureFile] = useState(null);
    const handleFeatureFileUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[featureSheet >= 1 ? featureSheet - 1 : 0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                // const headers = jsonData[0];
                const formattedData = jsonData.slice(1).map((row, index) => {
                    const obj = {
                        sid: index + 1,
                        companyNam: row[0],
                        planNam: row[1],
                        feautueNam: row[2], // Assuming person is in the second column
                        FeatureDetails: row[3], // Assuming age is in the first column

                    };
                    return obj;
                });
                let formated = FirejsonFeatureFormat(formattedData)
                if (formated[0].featureNam && formated[0].featureDetail) {
                    setExcelFeature(formated)

                }

                enqueueSnackbar((formated[0].featureNam && formated[0].featureDetail) ? "Feature Added Successfully" : "File Not Souported", (formated[0].featureNam && formated[0].featureDetail) ? { variant: "success" } : { variant: "error" });

            };
            reader.readAsArrayBuffer(file);
        }

    };
    const FirejsonFeatureFormat = (data) => {
        const sdw = data?.map((item, index) => {
            if (item) {
                return {
                    id: v4(),
                    sid: index + 1,
                    companyNam: item.companyNam,
                    planNam: item.planNam,
                    featureNam: item.feautueNam,
                    featureDetail: item.FeatureDetails

                }
            }

        })

        return sdw;

    }

    //select floater data from excel file
    const handleFileUploadFloat = async (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[caverageSheet >= 1 ? caverageSheet - 1 : 0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const headers = jsonData[0];
            const formattedData = jsonData.slice(1).map((row, index) => {
                const obj = {
                    sid: index + 1,
                    company: row[0],
                    planName: row[1],
                    person: row[2], // Assuming person is in the second column
                    age: row[3], // Assuming age is in the first column
                    coverage: headers.slice(4).map((header, index) => ({
                        coverage: header,
                        premium: row[index + 4]
                    }))
                };
                return obj;
            });
            const newFormat = FirejsonFormat(formattedData)
            if (newFormat[0].planNam && newFormat[0].minAge && newFormat[0].member && newFormat[0].companyNam && newFormat[0].maxAge) {

                setExcelCaverage(newFormat);
            }
            enqueueSnackbar((newFormat[0].planNam && newFormat[0].minAge && newFormat[0].member && newFormat[0].companyNam && newFormat[0].maxAge) ? "Coverage Added Successfully" : "File Not Souported", (newFormat[0].planNam && newFormat[0].minAge && newFormat[0].member && newFormat[0].companyNam && newFormat[0].maxAge) ? { variant: "success" } : { variant: "error" });

            // setState({ ...state, open: true, msg: `File Selected Neme :  ${file.name} Sheet No. : ${caverageSheet}  No. of Item ${formattedData?.length}`, type: "success" });

        };
        reader.readAsArrayBuffer(file);


    };
    const FirejsonFormat = (data) => {
        // console.log(data);
        const sdw = data?.map((item, index) => {

            const [minAge, maxAge] = item.age.match(/\d+/g).map(Number);

            if (item) {
                return {
                    id: v4(),
                    sid: index + 1,
                    companyNam: item.company,
                    planNam: item.planName,
                    minAge: minAge ? minAge : 1,
                    maxAge: maxAge ? maxAge : "above",
                    member: item.person,
                    coverages: item.coverage

                }
            }

        })
        return sdw;

    }

    const handleFileDocs = (e) => {
        setFile(e.target.files[0]);

    };

    const handleUpload = () => {
        if (docsFile) {
            const storageRef = fb.storage().ref();
            const fileRef = storageRef.child("/planDocs/" + docsFile.name);

            const uploadTask = fileRef.put(docsFile);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Track upload progress
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    // Handle error
                    enqueueSnackbar(error?.status + " File Type not Suppoted ", { variant: "error" })

                },
                () => {
                    // Upload completed successfully
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        // Store download URL in state
                        setDocsUrls([...docsUrls, {
                            id: v4(),
                            name: docsName,
                            language: "English",
                            url: downloadURL,
                            timestamp: new Date().getTime(),
                        }]);
                        enqueueSnackbar("PDF Uploaded Successfully ", { variant: "success" })
                        setDocsName("");
                    });
                }
            );
        }
    };

    const pid = v4();
    const date = new Date().toJSON();
    const timstamp = new Date().getTime();
    const fireDataJson = {
        pid: pid,
        planName: (ExcelCaverage.length > 0) ? ExcelCaverage[0]?.planNam : "",
        category: category,
        company: company,
        features: ExcelFeature,
        coverages: ExcelCaverage,
        pdfDocs: docsUrls,
        subPlan: false,
        subPlanDoc: "",
        date: date,
        timestapm: timstamp,

    }
    const RealFireDataJson = {
        pid: pid,
        planName: ExcelCaverage ? ExcelCaverage[0]?.planNam : "",
        category: category,
        company: company,
        features: [],
        coverages: (ExcelCaverage.length > 0) ? ExcelCaverage[0] : "",
        subPlan: false,
        subPlanDoc: "",
        date: date,
        timestapm: timstamp,

    }
    const handleFinalAddPlan = () => {
        if (ExcelFeature) {
            for (let index = 0; index < 5; index++) {
                const element = ExcelFeature[index];
                if (element !== undefined) {
                    RealFireDataJson.features.push(element);

                } else {
                    enqueueSnackbar("Feature File Not Suported", { variant: "error" })
                    return;
                }
            }
        } else {
            enqueueSnackbar("Feature Excel File Emapty", { variant: "error" })
        }
        enqueueSnackbar(RealFireDataJson.features.length <= 5 ? "Formating Success" : "Formating Failds", RealFireDataJson.features.length <= 5 ? { variant: "success" } : { variant: "error" })


        setTimeout(() => {
            if (RealFireDataJson.features.length <= 5) {
                if (fireDataJson && RealFireDataJson) {
                    if (company && category) {
                        var frankDocRef = db.collection("plans").doc(pid);
                        frankDocRef.set(fireDataJson);
                        database.ref('plans/' + pid).set(RealFireDataJson);
                        enqueueSnackbar("Plan Added Successfully in Firebase ", { variant: "success" })
                        setPlanDataCheck(!planDataCheck)
                        setCategory("");
                        setCompany("");
                        setFeatureSheet("");
                        setCoverageSheet("");
                        setFeatureToggle(false);
                        setCoverageToggle(false);
                        docsToggle(false);

                    } else {
                        return;
                    }


                } else {
                    enqueueSnackbar("Technical Error 404  ", { variant: "error" })

                }
                // alert("Added Successfully");
            }
        }, 3000);



    }

    return (
        <Container sx={{ minHeight: "100vh" }}>
            {/* {console.log(<FileUploader File={docsFile} />)} */}
            <TransitionsModal funcs={planDataCheck} data={{ ExcelCaverage, ExcelFeature, category, company, docsUrls }} onPost={handleFinalAddPlan} />
            <Paper sx={{ m: 1, p: 1 }}>
                {alertMsg.state && <Alert variant='standard' severity={alertMsg.type} >{alertMsg.message}</Alert>}

                {/* <Typography variant='h5' color={"primary"} textAlign={"center"} component={"h1"}>Upload Plan</Typography> */}
                <HeadingBox colorText={"Upload"} defaultText={"Plan"} m={"5px auto"} />
                <Typography m={2} color={grey[400]} variant='caption'>Category And Company</Typography>
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} p={1}  >
                        <Stack flexDirection={"row"} gap={1} alignItems={"center"} flexWrap={"wrap"}>
                            <Box sx={{ width: 200, maxWidth: 200 }}>
                                <FormControl fullWidth>
                                    <InputLabel size='small' required id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        size='small'
                                        required
                                        value={category?.name}
                                        onChange={handleChangeCategory}
                                    >
                                        {categories?.map((item) => {
                                            return <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>
                            </Box>
                            <Typography variant='caption' color={"grey"}>Select Category It's Required </Typography>
                        </Stack>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} p={1} >
                        <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
                            <Box sx={{ width: "80%" }}>
                                <FormControl fullWidth>
                                    <InputLabel size='small' required disabled={category ? false : true} id="demo-simple-select-label">Comapny</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Company"
                                        size='small'
                                        required
                                        value={company?.name}
                                        disabled={category ? false : true}
                                        onChange={handleChangeCompany}
                                    >
                                        {companies?.map((item) => {
                                            return <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>
                            </Box>
                            <Tooltip title="Add New Company">
                                <IconButton disabled={category ? false : true} size='small' onClick={() => setFieldToggle(!fieldToggle)}>
                                    <Fab disabled={category ? false : true} size='small' color="primary" aria-label="add">
                                        {fieldToggle ? <Remove /> : <Add />}
                                    </Fab>
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        {fieldToggle && <Stack flexDirection={"row"} mt={1} gap={1}>
                            <TextField value={companyInput} onChange={(e) => setCompanyInput(e.target.value)} sx={{ width: "80%" }} size='small' label="Enter Company Name" />
                            <Box>
                                <Tooltip title="Upload">
                                    <IconButton size='small' onClick={handeAddCompany}>
                                        <Fab size='small' color="info" aria-label="Upload">
                                            <UploadSharp />
                                        </Fab>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Stack>}
                    </Grid>
                </Grid>
                <Typography m={2} color={grey[400]} variant='caption'>Plan Detail</Typography>

                <Grid container>
                    <Grid item sm={12} xs={12} md={4} p={1} >
                        <Typography variant='caption' component={"p"}>Download Suported Excel File Template <Typography variant='caption' download={"Plan Coverage Template"} href='https://firebasestorage.googleapis.com/v0/b/enivesh-2f62f.appspot.com/o/sampleDocs%2Fsample%20coverage.xlsx?alt=media&token=dcf257e2-01e1-4e6d-916d-b4a2549972e3' color={"primary"} component={"a"} >Download</Typography></Typography>
                        <Stack mt={2} alignItems={"center"} gap={2}>
                            <Fab variant="extended" size='medium' disabled={(category && company) ? false : true} color='primary' onClick={() => setCoverageToggle(!caverageToggle)}>
                                <UploadFile sx={{ mr: 1 }} />
                                Upload Coverage
                            </Fab>

                            {caverageToggle && <TextField label="Sheet No." value={caverageSheet} onChange={(e) => setCoverageSheet(e.target.value)} type='number' sx={{ maxWidth: 200 }} size='small' />}

                            {(caverageToggle && caverageSheet >= 1) ? <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                color='primary'
                                startIcon={<CloudUpload />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" onChange={handleFileUploadFloat} />
                            </Button> : ""}
                        </Stack>
                    </Grid>
                    <Grid item sm={12} xs={12} md={4} p={1}  >
                        <Typography variant='caption' component={"p"}>Download Suported Excel File Template <Typography variant='caption' download={"Plan Feature Template"} href='https://firebasestorage.googleapis.com/v0/b/enivesh-2f62f.appspot.com/o/sampleDocs%2Fplan%20feature.xlsx?alt=media&token=513c8980-a7c8-440c-b52d-c8d142c631cc' color={"primary"} component={"a"} >Download</Typography></Typography>

                        <Stack mt={2} alignItems={"center"} gap={2}>
                            <Fab variant="extended" size='medium' color='info' disabled={(category && company) ? false : true} onClick={(e) => setFeatureToggle(!featureToggle)}>
                                <UploadFile sx={{ mr: 1 }} />
                                Upload Feature
                            </Fab>
                            {featureToggle && <TextField label="Sheet No." value={featureSheet} onChange={(e) => setFeatureSheet(e.target.value)} type='number' sx={{ maxWidth: 200 }} size='small' />}
                            {(featureSheet >= 1 && featureToggle) ? <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                color='info'
                                startIcon={<CloudUpload />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" onChange={handleFeatureFileUpload} />
                            </Button> : ""}
                        </Stack>
                    </Grid>
                    <Grid item sm={12} xs={12} md={4} p={1}  >
                        <Typography variant='caption' component={"p"}>Upload Only PDF File </Typography>

                        <Stack mt={4} alignItems={"center"} gap={2}>
                            <Fab variant="extended" size='medium' disabled={(category && company) ? false : true} color='secondary' onClick={() => setDocsToggle(!docsToggle)}>
                                <PictureAsPdf sx={{ mr: 1 }} />
                                Upload Docs
                            </Fab>

                            {docsToggle && <TextField label="Docs Name" value={docsName} onChange={(e) => setDocsName(e.target.value)} type='text' sx={{ maxWidth: 200 }} size='small' />}

                            {docsName && <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                color='secondary'
                                startIcon={<CloudUpload />}
                            >
                                Select file
                                <VisuallyHiddenInput type="file" onChange={handleFileDocs} />
                            </Button>}
                            <Typography variant='caption' color={"primary"}> Uploaded PDF {docsUrls?.length}</Typography>
                            {(docsName && docsFile) && <Fab variant="extended" size='small' color='secondary' onClick={handleUpload}>
                                <PictureAsPdf sx={{ mr: 1 }} />
                                Upload Docs
                            </Fab>}
                            {(uploadProgress >= 1 && uploadProgress <= 99) && <Typography variant='caption' color={"info"} >Uploading {uploadProgress + "%"}</Typography>}

                        </Stack>
                    </Grid>

                </Grid>

                <Grid container m={2} mt={5} >

                    <Grid item xs={12} md={4} >
                        <Button startIcon={<UploadFile />} onClick={(e) => setPlanDataCheck(!planDataCheck)} variant="outlined" size='medium' disabled={(category && company) ? false : true} color='warning' >
                            Check Plan Data
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        {(category && company) && <Typography p={1} color={"error"} variant='caption' component={"p"} >Before posting ,please check all the details added by you . Because after he final post , only admin user can manipulate the data. Thanks .... ! </Typography>}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Upload

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});