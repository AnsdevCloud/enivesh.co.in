import { Add, Calculate, Check, CloseFullscreen, CompareArrows, Fullscreen, Google, Visibility } from '@mui/icons-material'
import { AppBar, Box, Button, Container, FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, Stack, Toolbar, Tooltip, Typography, TextField, Divider, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Checkbox, ListItemText, Card, CardMedia, CardContent, CircularProgress, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeadingBox from '../../items/HeadingBox'
import { useNavigate } from 'react-router-dom';
const names = [
    {
        id: 1, name: 'Sum Insured', value: ""
    },
    {
        id: 2, name: 'Room Rent', value: ""
    },
    {
        id: 3, name: 'ICU Limit', value: ""
    },
    {
        id: 4, name: 'Pre Hospitalization', value: ""
    }, {
        id: 5, name: 'Post Hospitalization', value: ""
    }, {
        id: 6, name: 'Road Ambulance', value: ""
    }, {
        id: 7, name: 'Air Ambulance', value: ""
    }, {
        id: 8, name: 'Day Care', value: ""
    }, {
        id: 9, name: 'Domiciliary Treatment', value: ""
    }, {
        id: 10, name: 'Health Check up', value: ""
    }, {
        id: 11, name: 'Organ Donor', value: ""
    }, {
        id: 12, name: 'Refill Restore Reload Recharge', value: ""
    }, {
        id: 13, name: 'No Claim Bonus', value: ""
    }, {
        id: 14, name: 'AYUSH Benefit', value: ""
    }, {
        id: 15, name: 'Initial Waiting Period', value: ""
    }, {
        id: 16, name: 'Specific Disease Waiting', value: ""
    }, {
        id: 17, name: 'Pre Existing Waiting', value: ""
    },
    {
        id: 18, name: 'Co Payments & Sub Limits', value: ""
    },

















];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "100%",
            maxWidth: 500
        },
    },
};
const OptionViewPlans = () => {
    const [priamryFullScreen, setPrimaryFullScreen] = useState(false)
    const [secondaryFullScreen, setSeconadryFullScreen] = useState(false)
    const [methodOption, setMethodOption] = useState("manual");
    const [isLoading, setIsLoading] = useState(false);
    const [featuresP, setFeaturesP] = useState(names);
    const [featuresS, setFeaturesS] = useState(names);
    const [sumAssuredP, setSumAssuredP] = useState([]);
    const [sumAssuredS, setSumAssuredS] = useState([]);
    const [personName, setPersonName] = React.useState([]);
    const [toggleSelectall, setSelectAll] = useState(false);
    const [pdfDataP, setPdfDataP] = useState();
    const [pdfDataS, setPdfDataS] = useState();
    const navigate = useNavigate();
    const [exclusiveFeatureArr, setExclusiveFeatureArr] = useState([]);
    const [exclusiveFeature, setExclusiveFeature] = useState();
    const [toggleExclusive, setToggleExclusive] = useState(false);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectAll(false)


        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );




    };
    const handleMethod = (e) => {
        setMethodOption(e.target.value);
    }

    const handleFeatureChangePrimary = (id, newValue) => {
        if (id) {
            const updateFeatures = [...featuresP];
            const idx = updateFeatures.findIndex((item) => item.name === id);
            updateFeatures[idx] = {
                ...updateFeatures[idx],
                value: newValue
            };
            setFeaturesP(updateFeatures)

        }
    }
    //exclusive Feature add Functions
    const handleExclusieFeature = (e) => {
        setExclusiveFeature({ ...exclusiveFeature, [e.target.name]: e.target.value })
    }

    const handleAddExclusiveFeature = () => {
        if (exclusiveFeature?.exclusiveFeatureName && exclusiveFeature?.exclusiveFeatureDetail) {
            setExclusiveFeatureArr([...exclusiveFeatureArr, {
                exclusiveFeatureName: exclusiveFeature?.exclusiveFeatureName,
                exclusiveFeatureDetail: exclusiveFeature?.exclusiveFeatureDetail
            }])

        }
        setExclusiveFeature({
            exclusiveFeatureName: "",
            exclusiveFeatureDetail: ""
        })
        return
    }



    const handleSumAssuredP = (e) => {

        setSumAssuredP({ ...sumAssuredP, [e.target.name]: e.target.value })

    }
    const handleSumAssuredS = (e) => {

        setSumAssuredS({ ...sumAssuredS, [e.target.name]: e.target.value })

    }
    const handleFeatureChangeSecondary = (id, newValue) => {
        if (id) {
            const updateFeatures = [...featuresS];
            const idx = updateFeatures.findIndex((item) => item.name === id);
            updateFeatures[idx] = {
                ...updateFeatures[idx],
                value: newValue
            };
            setFeaturesS(updateFeatures)

        }

    }

    const genetatePDF = () => {
        setIsLoading(true);
        if (pdfDataP) {
            localStorage.setItem("featursPDF", JSON.stringify({ pdfDataP, pdfDataS }));
            setTimeout(() => {
                setIsLoading(false);
                navigate("/pdf");
            }, 1000);

        } else {
            setIsLoading(false);

        }

    }

    const handleselectAll = () => {
        let data = names?.map((item, index) => {
            return item?.name
        })

        setPersonName(data)
        setSelectAll(true);


    }

    useEffect(() => {
        if (toggleSelectall) {
            handleselectAll()
        }

        if (sumAssuredP || sumAssuredS) {

            setPdfDataP({
                sumAssured: sumAssuredP,
                features: featuresP,
                exclusivefeature: exclusiveFeatureArr,
            });
            setPdfDataS({
                sumAssured: sumAssuredS,
                features: featuresS
            });
        }
    }, [sumAssuredP, featuresP, sumAssuredS, featuresS, exclusiveFeatureArr, toggleSelectall])

    return (
        <Container maxWidth={"lg"} sx={{ p: 1, minHeight: "100vh" }}>
            <Grid container spacing={1}>
                <Grid item xs={12} >

                    <Paper sx={{ width: "100%", p: 2 }}>

                        <Stack
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={2}

                        >
                            <RadioGroup
                                row
                                name="radio-buttons-group"
                                aria-labelledby="demo-radio-buttons-group-label"

                            >
                                <FormControlLabel onChange={handleMethod} value="database" control={<Radio size='small' name='database' value={"database"} />} label=" Use Database" />
                                <FormControlLabel onChange={handleMethod} value="manual" control={<Radio size='small' name='manual' checked={methodOption === "manual" ? true : false} value={"manual"} />} label="Manual" />


                            </RadioGroup>
                        </Stack>
                    </Paper>
                    {isLoading && <LinearProgress />}

                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 1 }}>
                        {methodOption === "manual" ?
                            <Grid container spacing={1}>
                                <Grid display={secondaryFullScreen ? "none" : "grid"} item xs={12} md={priamryFullScreen ? 12 : secondaryFullScreen ? 1 : 5.8}>
                                    <Paper elevation={0} sx={{ p: 1 }}>
                                        <Toolbar variant="dense" >
                                            <Stack
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                                width={"100%"}
                                                justifyContent={"space-between"}
                                            >   <Typography color={"primary"} variant='subtitle1' component={"span"} fontWeight={600}>Primary Company <Typography variant='caption' component={"span"} color={"secondary"} fontWeight={600}>( Required )</Typography></Typography>
                                                <Tooltip placement='top' title={priamryFullScreen ? "Close Fullscreen" : "Fullscreen"}>
                                                    <IconButton onClick={() => setPrimaryFullScreen(!priamryFullScreen)}>
                                                        {priamryFullScreen ? <CloseFullscreen fontSize='small' /> : <Fullscreen />}
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </Toolbar>
                                        <HeadingBox m={"20px 0"} colorText={"Premium Table "} defaultText={"for Mediclaim Plan"} />
                                        <Stack flexDirection={"row"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                label="Company Name"
                                                name='CompanyName'
                                                onChange={(e) => handleSumAssuredP(e)}

                                            />

                                            <TextField

                                                fullWidth
                                                size='small'
                                                label="Sum Assured"
                                                name='SumAssured'
                                                onChange={(e) => handleSumAssuredP(e)}

                                            />
                                            <TextField

                                                fullWidth
                                                size='small'
                                                label="Premium"
                                                name='Premium'
                                                onChange={(e) => handleSumAssuredP(e)}

                                            />

                                        </Stack>
                                        <HeadingBox m={"20px 0"} colorText={pdfDataP?.sumAssured?.CompanyName} defaultText={"Health Features"} />

                                        <Button sx={{ fontSize: 10, mb: 1 }} color='secondary' disabled={toggleSelectall || personName?.length === names?.length} onClick={() => setSelectAll(true)} variant={toggleSelectall ? "outlined" : 'contained'} >{(toggleSelectall || personName?.length === names?.length) ? "Selected" : "Select"} All Features</Button>
                                        <FormControl sx={{ m: 1, mb: 2, width: "100%", maxWidth: 500 }}>
                                            <InputLabel id="demo-multiple-checkbox-label" size='small'> Select Feature Options {names?.length}</InputLabel>

                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                size='small'
                                                fullWidth
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Select Feature Options" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {/* <MenuItem value={"selectall"}>
                                                    <Checkbox checked={toggleSelectall} />
                                                    <ListItemText primary={"Select All"} />
                                                </MenuItem> */}
                                                {names.map((item) => (
                                                    <MenuItem key={item?.id} value={item?.name}>
                                                        <Checkbox checked={personName.indexOf(item?.name) > -1} />
                                                        <ListItemText primary={item?.name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                        </FormControl>
                                        <Typography variant='caption' component={"p"} >Selected Features : <Typography variant='caption' color={"primary"} component={"span"}>{personName?.length}</Typography></Typography>

                                        {
                                            personName && personName?.map((item, index) => {

                                                return <TextField
                                                    fullWidth
                                                    sx={{ mt: 2 }}
                                                    key={index}
                                                    size='small'
                                                    label={item}
                                                    onChange={(e) => handleFeatureChangePrimary(item, e.target.value)}


                                                />
                                            })
                                        }


                                        <Button onClick={() => setToggleExclusive(!toggleExclusive)} variant='outlined' color='secondary' sx={{ mt: 2, fontSize: 10 }} size='small'>Add   exclusive
                                            Features</Button>
                                        {
                                            (exclusiveFeatureArr?.length > 0 && !toggleExclusive) && <Typography variant='caption' m={2} component={"p"} >Exclusive Features : <Typography variant='caption' color={"primary"} component={"span"}>{exclusiveFeatureArr?.length}</Typography></Typography>

                                        }

                                        {toggleExclusive ? <>
                                            <Stack m={1} mt={2} gap={1} flexDirection={"row"} alignItems={"center"}>
                                                <TextField size='small' label='Enter Feature Name' name='exclusiveFeatureName' value={exclusiveFeature?.exclusiveFeatureName} onChange={handleExclusieFeature} />
                                                <TextField size='small' label='Enter Feature Details' name='exclusiveFeatureDetail' value={exclusiveFeature?.exclusiveFeatureDetail} onChange={handleExclusieFeature} />
                                                <IconButton size='small' color='primary' onClick={handleAddExclusiveFeature} >
                                                    <Add />
                                                </IconButton>
                                            </Stack>

                                            <Typography variant='caption' m={2} component={"p"} >Exclusive Features : <Typography variant='caption' color={"primary"} component={"span"}>{exclusiveFeatureArr?.length}</Typography></Typography>


                                            {exclusiveFeatureArr?.map((item, index) => {
                                                return <Stack key={index} m={1} mt={2} gap={1} flexDirection={"row"} alignItems={"center"}>
                                                    <TextField size='small' label='Feature Name' name='exclusiveFeatureName' value={item?.exclusiveFeatureName} onChange={handleExclusieFeature} />
                                                    <TextField size='small' label='Feature Details' name='exclusiveFeatureDetail' value={item?.exclusiveFeatureDetail} onChange={handleExclusieFeature} />
                                                </Stack>
                                            })
                                            }
                                        </> : ""}

                                    </Paper>
                                </Grid>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Grid display={priamryFullScreen ? "none" : "grid"} item xs={12} md={secondaryFullScreen ? 12 : priamryFullScreen ? 1 : 5.8}>
                                    <Paper elevation={0} sx={{ p: 1 }}>
                                        <Toolbar variant="dense" >
                                            <Stack
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                                width={"100%"}
                                                justifyContent={"space-between"}
                                            >   <Typography color={"secondary"} variant='subtitle1' component={"span"} fontWeight={600}>Secondary Company <Typography variant='caption' component={"span"} color={"primary"} fontWeight={600}>( Optional )</Typography></Typography>
                                                <Tooltip placement='top' title={secondaryFullScreen ? "Close Fullscreen" : "Fullscreen"}>
                                                    <IconButton onClick={() => setSeconadryFullScreen(!secondaryFullScreen)}>
                                                        {secondaryFullScreen ? <CloseFullscreen fontSize='small' /> : <Fullscreen />}
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </Toolbar>
                                        <HeadingBox m={"20px 0"} colorText={"Premium Table "} defaultText={"for Mediclaim Plan"} />

                                        <Stack flexDirection={"row"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                label="Company Name"
                                                name='CompanyName'

                                                onChange={(e) => handleSumAssuredS(e)}


                                            />

                                            <TextField

                                                fullWidth
                                                size='small'
                                                label="Sum Assured"

                                                name='SumAssured'
                                                onChange={(e) => handleSumAssuredS(e)}


                                            />
                                            <TextField

                                                fullWidth
                                                size='small'
                                                label="Premium"
                                                name='Premium'
                                                onChange={(e) => handleSumAssuredS(e)}

                                            />

                                        </Stack>
                                        <HeadingBox m={"20px 0"} colorText={pdfDataS?.sumAssured?.CompanyName} defaultText={"Health Features"} />
                                        <Tooltip title='Follow Primary Changes ' placement='top'>
                                            <FormControl sx={{ m: 1, mb: 2, width: "100%", maxWidth: 500 }}>
                                                <InputLabel id="demo-multiple-checkbox-label" size='small'>Select Feature Options {names?.length} </InputLabel>

                                                <Select
                                                    labelId="demo-multiple-checkbox-label"
                                                    id="demo-multiple-checkbox"
                                                    multiple
                                                    size='small'
                                                    readOnly

                                                    fullWidth
                                                    value={personName}
                                                    onChange={handleChange}
                                                    input={<OutlinedInput label="Select Feature Options" />}
                                                    renderValue={(selected) => selected.join(', ')}
                                                    MenuProps={MenuProps}
                                                >
                                                    {names.map((item) => (
                                                        <MenuItem key={item?.id} value={item?.name}>
                                                            <Checkbox checked={personName.indexOf(item?.name) > -1} />
                                                            <ListItemText primary={item?.name} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>

                                            </FormControl>
                                        </Tooltip>
                                        <Typography variant='caption' component={"span"} >Selected Features : <Typography variant='caption' color={"primary"} component={"span"}>{personName?.length}</Typography></Typography>

                                        {
                                            personName && personName?.map((item, index) => {
                                                return <TextField
                                                    fullWidth
                                                    sx={{ mt: 2 }}
                                                    key={index}
                                                    size='small'
                                                    label={item}

                                                    onChange={(e) => handleFeatureChangeSecondary(item, e.target.value)}

                                                />
                                            })
                                        }
                                    </Paper>
                                </Grid>
                            </Grid> : <Typography variant='caption' component={"h1"} textAlign={"center"}>Under Developments , Go Use Manual Option</Typography>
                            // <Grid container spacing={2} >
                            //     <Grid item xs={12} md={9}>
                            //         <Grid container>
                            //             <Grid item xs={0} md={3} p={2} >
                            //                 <Stack alignItems={"center"} justifyContent={"center"}>
                            //                     <Paper elevation={1} >
                            //                         <Card sx={{ height: 100, width: 100, position: "relative" }}>

                            //                             <CardMedia title="fis" sx={{ height: 100, width: "100%" }} image="https://img.etimg.com/thumb/width-640,height-480,imgsize-8872,resizemode-75,msid-94254046/industry/banking/finance/banking/sbi-acquires-100-pc-stake-in-sbi-global-factors/state-bank-of-india.jpg" />

                            //                         </Card>

                            //                     </Paper>
                            //                 </Stack>
                            //             </Grid>
                            //             <Grid item xs={12} md={9} p={2} >
                            //                 <Stack mt={1} alignItems={"flex-start"} justifyContent={"center"} >
                            //                     <Paper elevation={1} sx={{ minWidth: "100%", p: 2 }}>
                            //                         <Grid container spacing={1} >
                            //                             <Grid item xs={8} >
                            //                                 <Box>
                            //                                     <Typography variant="subtitle1" color="initial"> Care Supreme Direct</Typography>
                            //                                     <Typography variant="caption" color="primary"> Great Plan</Typography>
                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> No Room rent limit</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Restoration of cover</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Renewal Bonus</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Pre-hospitalization coverage</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Post-hospitalization coverage</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}> <Button sx={{ fontSize: "10px" }} startIcon={<Visibility fontSize='8px' />} variant="text" focusRipple color="success" size='small' >
                            //                                         View All Features
                            //                                     </Button></Typography>

                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Button sx={{ fontSize: "10px" }} startIcon={<CompareArrows />} variant="contained" focusRipple color="primary" size='small' >
                            //                                         Add to Compare
                            //                                     </Button>
                            //                                 </Box>
                            //                             </Grid>
                            //                             <Grid item xs={4}>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography variant='caption' color={"grey"} component={"p"}>Cashless Hospitals</Typography>
                            //                                     <Typography variant='subtitle1' color={"primary"} component={"p"}>All Hospitals</Typography>
                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography mb={1} variant='caption' color={"grey"} component={"p"}>Cover</Typography>

                            //                                     <FormControl fullWidth>

                            //                                         <Select
                            //                                             size='small'
                            //                                             labelId="demo-simple-select-label"
                            //                                             id="demo-simple-select"
                            //                                             value={"age"}


                            //                                         >
                            //                                             <MenuItem value={7}>7 Lac</MenuItem>
                            //                                             <MenuItem value={10}>10 Lac</MenuItem>
                            //                                             <MenuItem value={20}>20 Lac</MenuItem>
                            //                                         </Select>
                            //                                     </FormControl>

                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Button startIcon={<Calculate />} fullWidth variant="contained" focusRipple color="primary" size='small' >
                            //                                         &#8377;798/ Month
                            //                                     </Button>
                            //                                     <Typography m={2} variant='caption' color={"grey"} component={"p"}>Annually Amount : <Typography variant='caption' color={"primary"}>&#8377;9574</Typography></Typography>

                            //                                 </Box>
                            //                             </Grid>
                            //                         </Grid>
                            //                     </Paper>
                            //                 </Stack>


                            //             </Grid>


                            //         </Grid>
                            //         <Divider sx={{ backgroundColor: "#fce1d3" }} />
                            //         <Grid container>
                            //             <Grid item xs={0} md={3} p={2} >
                            //                 <Stack alignItems={"center"} justifyContent={"center"}>
                            //                     <Paper elevation={1} >
                            //                         <Card sx={{ height: 100, width: 100, position: "relative" }}>

                            //                             <CardMedia title="fis" sx={{ height: 100, width: "100%" }} image="https://img.etimg.com/thumb/width-640,height-480,imgsize-8872,resizemode-75,msid-94254046/industry/banking/finance/banking/sbi-acquires-100-pc-stake-in-sbi-global-factors/state-bank-of-india.jpg" />

                            //                         </Card>

                            //                     </Paper>
                            //                 </Stack>
                            //             </Grid>
                            //             <Grid item xs={12} md={9} p={2} >
                            //                 <Stack mt={1} alignItems={"flex-start"} justifyContent={"center"} >
                            //                     <Paper elevation={1} sx={{ minWidth: "100%", p: 2 }}>
                            //                         <Grid container spacing={1} >
                            //                             <Grid item xs={8} >
                            //                                 <Box>
                            //                                     <Typography variant="subtitle1" color="initial"> Care Supreme Direct</Typography>
                            //                                     <Typography variant="caption" color="primary"> Great Plan</Typography>
                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> No Room rent limit</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Restoration of cover</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Renewal Bonus</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Pre-hospitalization coverage</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Post-hospitalization coverage</Typography>
                            //                                     <Typography variant="caption" color="CaptionText" component={"p"}> <Button sx={{ fontSize: "10px" }} startIcon={<Visibility fontSize='8px' />} variant="text" focusRipple color="success" size='small' >
                            //                                         View All Features
                            //                                     </Button></Typography>

                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Button sx={{ fontSize: "10px" }} startIcon={<CompareArrows />} variant="contained" focusRipple color="primary" size='small' >
                            //                                         Add to Compare
                            //                                     </Button>
                            //                                 </Box>
                            //                             </Grid>
                            //                             <Grid item xs={4}>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography variant='caption' color={"grey"} component={"p"}>Cashless Hospitals</Typography>
                            //                                     <Typography variant='subtitle1' color={"primary"} component={"p"}>All Hospitals</Typography>
                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Typography mb={1} variant='caption' color={"grey"} component={"p"}>Cover</Typography>

                            //                                     <FormControl fullWidth>

                            //                                         <Select
                            //                                             size='small'
                            //                                             labelId="demo-simple-select-label"
                            //                                             id="demo-simple-select"
                            //                                             value={"age"}


                            //                                         >
                            //                                             <MenuItem value={7}>7 Lac</MenuItem>
                            //                                             <MenuItem value={10}>10 Lac</MenuItem>
                            //                                             <MenuItem value={20}>20 Lac</MenuItem>
                            //                                         </Select>
                            //                                     </FormControl>

                            //                                 </Box>
                            //                                 <Box sx={{ mt: 1 }}>
                            //                                     <Button startIcon={<Calculate />} fullWidth variant="contained" focusRipple color="primary" size='small' >
                            //                                         &#8377;798/ Month
                            //                                     </Button>
                            //                                     <Typography m={2} variant='caption' color={"grey"} component={"p"}>Annually Amount : <Typography variant='caption' color={"primary"}>&#8377;9574</Typography></Typography>

                            //                                 </Box>
                            //                             </Grid>
                            //                         </Grid>
                            //                     </Paper>
                            //                 </Stack>


                            //             </Grid>


                            //         </Grid>
                            //     </Grid>


                            // </Grid>
                        }
                    </Paper >







                </Grid >
                <Grid item>
                    <Button size='small' onClick={genetatePDF} disabled={isLoading ? true : false} variant='contained'>Generate PDF </Button>
                </Grid>
            </Grid >
        </Container >
    )
}

export default OptionViewPlans