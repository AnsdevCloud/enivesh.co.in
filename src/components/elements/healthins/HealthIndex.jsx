import React, { Suspense, lazy, useEffect } from 'react'
import heathParter from '../../../jsondata/insuarnce/health/helthinsurancepartaner.json'
import services from '../../../jsondata/insuarnce//health/ourservices.json'
import HeadingBox from '../../items/HeadingBox'
import whyneed from '../../../jsondata/insuarnce/health/whyneedheakthins.json'
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Paper, Stack, Tab, Tabs, Typography, tabsClasses } from '@mui/material'
import CardBox from '../CardBox'
import ItemCard from '../../items/ItemCard'
const Irdai = lazy(() => import('../../items/Irdai'))
const OurParter = lazy(() => import('../OurParter'))
import SwipeableViews from 'react-swipeable-views';
import complexcity from '../../../jsondata/insuarnce/health/complecityandsimplicity.json'
import { useTheme } from '@emotion/react';
import SwaparView from './SwaparView'
import { useNavigate } from 'react-router-dom'
import HeroSectionHealth from './HeroSectionHealth'
import FQA from '../../../jsondata/insuarnce/health/FQA.json'

import Question from '../Question'
import FormBtn from '../../items/FormBtn'
const Index = () => {
    const [indexVal, setIndexVal] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/health?${complexcity[newValue]?.name}`)

        setIndexVal(newValue);
    };

    const theme = useTheme();

    const handleChangeIndex = (index) => {
        setIndexVal(index);
        navigate(`/health?${complexcity[index]?.name}`)

        setValue(index)
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    const handleNext = () => {
        if (indexVal <= complexcity?.length - 1) {
            setIndexVal(indexVal + 1);
            navigate(`/health?${complexcity[indexVal]?.name}`)
            setValue(value + 1)
        }

    }

    const handleBack = () => {
        if (indexVal > 0) {
            setIndexVal(indexVal - 1);
            navigate(`/health?${complexcity[indexVal]?.name}`)
            setValue(value - 1)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <>
            <HeroSectionHealth />
            <Irdai />
            <OurParter data={heathParter} />
            <Paper sx={{ maxWidth: "90%", m: "10px 5%", p: 2 }} elevation={0}>
                <HeadingBox colorText={"Our"} m={"5px 0"} defaultText={"Services"} />
                <Stack flexDirection={"row"} gap={1} alignItems={"center"} justifyContent={{ xs: "flex-start", md: "center" }} p={2} overflow={"auto"}>
                    {
                        services?.map((item, index) => {
                            return <ItemCard Width={230} Height={"fit-content"} key={index} data={item} />

                        })
                    }
                </Stack>
            </Paper>

            <SwaparView TabsList={whyneed} TabContainer={whyneed} />
            <FormBtn BtnName={"Free Consultation"} InputName1={"phone"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />

            <Paper sx={{ maxWidth: { xs: "100%", md: "90%" }, m: { xs: "0px 0px", md: "10px 5%" }, p: 2, position: "relative" }} elevation={0} >
                <HeadingBox colorText={"What to Look "} defaultText={" for in Health Insurance"} />
                <Stack m={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} flexWrap={"wrap"}>


                    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: "100%" }, bgcolor: 'background.paper' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            {
                                complexcity?.map((item, index) => {
                                    return <Tab label={item?.name} onClick={indexVal < complexcity?.length - 1 ? () => setIndexVal(index) : null} />
                                })
                            }
                        </Tabs>
                    </Box>

                </Stack>
                <Divider />

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={indexVal}
                    onChangeIndex={handleChangeIndex}>
                    {
                        complexcity?.map((item, index) => {
                            return <TabPanel value={indexVal} index={index} dir={theme.direction}>

                                <Stack flexDirection={"row"} m={1} fontSize={10} alignItems={"center"} gap={.2}>
                                    <Typography color={"primary"} fontSize={12}>  {indexVal + 1}</Typography> / {complexcity?.length}
                                </Stack>

                                <Grid container spacing={5} p={1}>
                                    {
                                        item?.items?.map((ite) => (
                                            <Grid item xs={12} sm={6} md={3}>
                                                <ItemCard Width={"auto"} data={ite} />
                                            </Grid>
                                        ))
                                    }

                                </Grid>
                            </TabPanel>
                        })
                    }


                </SwipeableViews>
                <Stack position={"absolute"} top={"50%"} justifyContent={"space-between"} width={"100%"} flexDirection={"row"} display={{ xs: "none", md: "flex" }}>
                    <Paper sx={{ left: -50, position: "absolute" }} ><Button disabled={indexVal == 0 ? true : false} variant='text' onClick={handleBack}>{"<"}</Button></Paper>
                    <Paper sx={{ right: -10, position: "absolute" }}><Button disabled={(indexVal < (complexcity?.length - 1)) ? false : true} variant='text' onClick={handleNext} >{">"}</Button></Paper>
                </Stack>
            </Paper>

            <Box sx={{ width: "100%", backgroundColor: "#f4d4a499", p: 1 }}>
                <HeadingBox colorText={"Why ENIVESH "} m={"10px 0"} defaultText={"is so popular in the Health Insurance"} />
                <Box p={2} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card sx={{ minHeight: 180 }}>
                                <CardContent >
                                    <Typography color={"primary"} variant='subtitle1' component={"h1"}>Expert Guidance</Typography>
                                    <Typography variant='caption' component={"p"}>Our team of experienced insurance advisors specializes in health insurance solutions. We provide personalized guidance and recommendations to help you make informed decisions about your health coverage.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minHeight: 180 }}>
                                <CardContent>
                                    <Typography color={"primary"} variant='subtitle1' component={"h1"}>Wide Range of Plans</Typography>
                                    <Typography variant='caption' component={"p"}> We offer a comprehensive portfolio of health insurance plans from leading insurers in India. Whether you're looking for individual coverage, family floater plans, or senior citizen policies, we have the right options for you.</Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minHeight: 180 }}>
                                <CardContent>
                                    <Typography color={"primary"} variant='subtitle1' component={"h1"}>Customized Solutions</Typography>
                                    <Typography variant='caption' component={"p"}> We understand that every individual and family has unique healthcare needs. That's why we offer customized insurance solutions that align with your requirements and budget.</Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minHeight: 180 }}>
                                <CardContent>
                                    <Typography color={"primary"} variant='subtitle1' component={"h1"}>Transparent Advice</Typography>
                                    <Typography variant='caption' component={"p"}>We believe in transparency and honesty in our dealings. Our advisors provide clear and unbiased advice, ensuring that you understand the terms, coverage, and benefits of each insurance plan.</Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ minHeight: 180 }}>
                                <CardContent>
                                    <Typography color={"primary"} variant='subtitle1' component={"h1"}>Convenient Process</Typography>
                                    <Typography variant='caption' component={"p"}> We make the insurance buying process hassle-free and convenient for you. From comparing plans and premiums to assisting with the application and claims process, we handle it all, so you can focus on what matters most - your health.</Typography>
                                </CardContent>
                            </Card>

                        </Grid>

                    </Grid>
                </Box>

            </Box>

            <Paper sx={{ maxWidth: { xs: "100%", md: "90%" }, m: { xs: "0px 0px", md: "10px 5%" }, p: 2, position: "relative" }} elevation={0} >
                <HeadingBox colorText={"FREQUENTLY  "} defaultText={"ASKED QUESTIONS"} />
                <Stack m={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} flexWrap={"wrap"}>


                    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: "100%" }, bgcolor: 'background.paper' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                        >
                            {
                                FQA?.map((item, index) => {
                                    return <Tab label={item?.name} onClick={indexVal < complexcity?.length - 1 ? () => setIndexVal(index) : null} />
                                })
                            }
                        </Tabs>
                    </Box>

                </Stack>
                <Divider />
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={indexVal}
                    onChangeIndex={handleChangeIndex}>
                    {
                        FQA?.map((item, index) => {
                            return <TabPanel value={indexVal} index={index} dir={theme.direction}>

                                <Stack flexDirection={"row"} m={1} fontSize={10} alignItems={"center"} gap={.2}>
                                    <Typography color={"primary"} fontSize={12}>  {indexVal + 1}</Typography> / {FQA?.length}
                                </Stack>

                                <Question Qustions={item?.items} ColorText={item?.name} DefaultText={" "} />

                            </TabPanel>
                        })
                    }


                </SwipeableViews>

                <Stack position={"absolute"} top={"50%"} justifyContent={"space-between"} width={"100%"} flexDirection={"row"} display={{ xs: "none", md: "flex" }}>
                    <Paper sx={{ left: -50, position: "absolute" }} ><Button disabled={indexVal == 0 ? true : false} variant='text' onClick={handleBack}>{"<"}</Button></Paper>
                    <Paper sx={{ right: -10, position: "absolute" }}><Button disabled={(indexVal < (FQA?.length - 1)) ? false : true} variant='text' onClick={handleNext} >{">"}</Button></Paper>
                </Stack>
            </Paper>
            <FormBtn BtnName={"Contact Now"} InputName1={"phone"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />

        </>


    )
}

export default Index