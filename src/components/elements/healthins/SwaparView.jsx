import { Box, Button, Divider, Paper, Stack, Tab, Tabs, Typography, tabsClasses } from '@mui/material'
import React from 'react'
import HeadingBox from '../../items/HeadingBox'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

const SwaparView = ({ TabsList, TabContainer }) => {
    const [indexVal, setIndexVal] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/health?${TabsList[newValue]?.titleColor}`)

    };
    const theme = useTheme();
    const handleChangeIndex = (index) => {
        setIndexVal(index);
        navigate(`/health?${TabContainer[index]?.titleColor}`)

        setValue(index)
    };
    const handleNext = () => {
        if (indexVal <= TabContainer?.length - 1) {
            setIndexVal(indexVal + 1);
            navigate(`/health?${TabContainer[indexVal]?.titleColor}`)

            setValue(value + 1)
        }

    }
    const handleBack = () => {
        if (indexVal > 0) {
            setIndexVal(indexVal - 1);
            navigate(`/health?${TabContainer[indexVal]?.titleColor}`)

            setValue(value - 1)
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
                        {children}
                    </Box>
                )}
            </div>
        );
    }
    return (
        <Paper sx={{ maxWidth: { xs: "100%", md: "90%" }, m: { xs: "0px 0px", md: "10px 5%" }, p: 2, position: "relative" }} elevation={0} >
            <HeadingBox colorText={"Why Do "} defaultText={"you need Health Insurance ?"} />
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
                            TabsList?.map((item, index) => {
                                return <Tab label={item?.titleColor + item?.titleDefault} onClick={() => setIndexVal(index)} />
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
                    TabContainer?.map((item, index) => {
                        return <TabPanel value={indexVal} index={index} dir={theme.direction}>
                            <Stack flexDirection={"row"} m={1} fontSize={10} alignItems={"center"} gap={.2}>
                                <Typography color={"primary"} fontSize={12}>  {indexVal + 1}</Typography> / {TabContainer?.length}
                            </Stack>
                            <Stack sx={{ width: "100%", p: { xs: 1, md: 2 } }} alignItems={"center"} flexDirection={{ md: "row", xs: "column" }} >

                                <Box sx={{ minWidth: "50%", height: { xs: 150, md: 250 } }}>
                                    <img style={{ width: "100%", height: "100%" }} src={item?.imgUrl} />
                                </Box>
                                <Typography variant="body2" color="initial">{item?.discription}</Typography>
                            </Stack>
                        </TabPanel>
                    })
                }


            </SwipeableViews>

            <Stack position={"absolute"} top={"50%"} justifyContent={"space-between"} width={"100%"} flexDirection={"row"} display={{ xs: "none", md: "flex" }}>
                <Paper sx={{ left: -50, position: "absolute" }} ><Button disabled={indexVal == 0 ? true : false} variant='text' onClick={handleBack}>{"<"}</Button></Paper>
                <Paper sx={{ right: -10, position: "absolute" }}><Button disabled={(indexVal < (TabContainer?.length - 1)) ? false : true} variant='text' onClick={handleNext} >{">"}</Button></Paper>
            </Stack>

        </Paper>
    )
}

export default SwaparView