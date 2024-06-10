import { Box, Button, Container, Grid, Tab, Tabs, Stack, Typography, LinearProgress } from '@mui/material'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@emotion/react';

const HeadingBox = lazy(() => import('../../items/HeadingBox'));
const Step1 = lazy(() => import('./Step1'));
const Step2 = lazy(() => import('./Step2'));
const Step3 = lazy(() => import('./Step3'));
const Step4 = lazy(() => import('./Step4'));
const Step5 = lazy(() => import('./Step5'));
const Step6 = lazy(() => import('./Step6'));


const PlanIndex = () => {
    const [FormData, setFormData] = useState();
    const theme = useTheme();
    const [isContinue, setContinue] = useState(true)

    const [indexVal, setIndexVal] = React.useState(0);
    const [value, setValue] = useState(0);
    const val = 100 / 4;
    // const value = parseInt(val / indexVal);
    const handleChange = (event, newValue) => {
        if (indexVal <= 3) {
            setIndexVal(newValue);
        }
    };





    const handleChangeIndex = (index) => {
        setIndexVal(index);
    };
    const handleNext = () => {


        if (indexVal <= 3 && indexVal >= 0) {
            setIndexVal(indexVal + 1)
            setValue(value + val);
        } else if (indexVal > 3) {
            setIndexVal(indexVal + 1)
        }
    }
    const handleBack = () => {
        if (indexVal <= 4 && indexVal >= 1) {
            setIndexVal(indexVal - 1);
            setValue(value - val);
        } else if (indexVal > 3) {
            setIndexVal(indexVal - 1)
        }
    }

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
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [indexVal])
    return (
        <Container maxWidth={'lg'} sx={{ minHeight: "100vh" }} >
            <Grid container spacing={2}>
                <Grid item xs={12} mt={5} mb={2}>
                    <ProgressBor $value={value}>
                        <ValuePoint $value={value} >{value + "%" + " Completed"}</ValuePoint>
                    </ProgressBor>
                </Grid>

                <Grid item xs={12}  >
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={indexVal}
                        onChangeIndex={handleChangeIndex}>

                        <TabPanel value={indexVal} index={0} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox titleTag={"Select members you want to insure"} colorText={" Find Best "} defaultText={"Covering Plan For You"} />
                                <Step1 onBack={handleBack} onNext={handleNext} />
                            </Suspense>
                        </TabPanel>

                        <TabPanel value={indexVal} index={1} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox colorText={" Select  "} defaultText={"Your Age"} />
                                <Step2 data={FormData} onBack={handleBack} onNext={handleNext} />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value={indexVal} index={2} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox colorText={" Select   "} defaultText={"Your City"} />
                                <Step3 onBack={handleBack} onNext={handleNext} data={FormData} />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value={indexVal} index={3} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox colorText={" Save   "} titleTag={"Get to plans directly next time you visit us"} defaultText={" Your Progress"} />
                                <Step4 onBack={handleBack} onNext={handleNext} data={FormData} />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value={indexVal} index={4} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox colorText={" Medical   "} titleTag={"Do any member(s) have any existing illnesses for which they take regular medication?"} defaultText={"history"} />
                                <Step5 onBack={handleBack} onNext={handleNext} />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value={indexVal} index={5} dir={theme.direction}>
                            <Suspense fallback={<LinearProgress />}>
                                <HeadingBox colorText={" Office   "} defaultText={"Support"} />
                                <Step6 onBack={handleBack} onNext={handleNext} />
                            </Suspense>
                        </TabPanel>
                    </SwipeableViews>

                </Grid>

            </Grid>
        </Container >
    )
}

export default PlanIndex
const ProgressBor = styled.div`
position: relative;

border-radius: 10px;
transition: all .4s ease-in-out;
width: 100%;
height: 10px;
background-color: #d1d1d1;
border: .5px solid #ff5c00;
&::before{
    content:'';
    position: absolute;
    transition: all .4s ease-in-out;
    border-radius: 10px 0px 0px 10px;
    top: 0;
    left: 0;
    width: ${props => props.$value ? `${props.$value}%` : "0%"};
    height: 100%;
    background-color: #ff5c00;
    border: .5px solid #ff5c00;
}

  
`;
const ValuePoint = styled.div`
position: absolute;
transition: all .4s ease-in-out;
width: ${props => props.$value <= 88 ? "auto" : "100px"};
height: ${props => props.$value <= 88 ? "12px" : "12px"};
display: flex;
align-items: center;
justify-content: center;
cursor: default;
/* top: -10px; */
top: -1px;
left: ${props => props.$value <= 88 ? `${props.$value}%` : "91.2%"};
background-color:#fff ;
font-size: 10px;
box-shadow: 0 0 10px 0px #ff5c00;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
color: #ff5c00;
padding: 5px;
border:1px solid currentColor;
  
`;