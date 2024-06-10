import React, { useState } from 'react'
import { Container, Grid, Stack, Paper, Menu, Box, CardContent, Divider, Card, FormControl, Typography, MenuItem, Select, InputLabel, IconButton, Tooltip, CardMedia, Button } from '@mui/material'
import { Calculate, Check, CompareArrows, Edit, MarkAsUnread, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
const PlanList = () => {
    const [age, setAge] = React.useState(7);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const navigate = useNavigate();
    const [toggleHide, setToggleHide] = useState(false);
    return (
        <Container maxWidth={"xl"}>

            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Stack m={1} flexDirection={"row"} gap={2} alignItems={"center"} justifyContent={"flex-start"}>
                        <Typography variant="subtitle2" color="initial">Quick filters</Typography>
                        {/* <Paper elevation={1} sx={{ p: 1, width: "fit-content" }}>
                            <Button
                                size='small'
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"

                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Cover
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem>
                                    <RadioGroup

                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel size={"small"} value="Recommended" control={<Radio size='small' />} label="Recommended" />
                                        <FormControlLabel size={"small"} value={"5"} control={<Radio size='small' />} label="Below ₹5 Lakh" />
                                        <FormControlLabel size={"small"} value={"5-9"} control={<Radio size='small' />} label="₹5-9 Lakh" />
                                        <FormControlLabel size={"small"} value={"10-24"} control={<Radio size='small' />} label="₹10-24 Lakh" />
                                        <FormControlLabel size={"small"} value={"25-99"} control={<Radio size='small' />} label="₹25-99 Lakh" />
                                        <FormControlLabel size={"small"} value={"1-2cr"} control={<Radio size='small' />} label="1-2 Cr" />
                                    </RadioGroup>
                                </MenuItem>


                            </Menu>
                        </Paper> */}

                    </Stack>
                </Grid>
                <Grid item xs={12}>

                    <Paper elevation={1} sx={{ p: 1, m: 1, width: "fit-content" }}>
                        <Stack flexDirection={"row"} gap={2} alignItems={"center"} justifyContent={"flex-start"}>
                            <Button size='small' onClick={() => navigate(-1)}>Back</Button>
                            <Typography variant="caption" color="initial">Show 10 Plans for : </Typography>
                            <Typography color={"primary"}>Self</Typography>
                            <Tooltip title="Edit Detail " placement='top' arrow>
                                <IconButton size='small' aria-label="Edit " >
                                    <Edit fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <Typography variant='caption'>Members :</Typography>
                            <Typography color={"primary"}>4</Typography>
                            <Tooltip title="Show Members" placement='top' arrow>
                                <Typography variant='caption' color={"secondary"}>
                                    <Link>
                                        Show
                                    </Link>
                                </Typography>
                            </Tooltip>


                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} p={1}>
                    <Grid container spacing={2} sx={{ backgroundColor: "#f0e9e4", borderRadius: 1 }}>
                        <Grid item xs={12} md={9}>
                            <Grid container>
                                <Grid item xs={0} md={3} p={2} >
                                    <Stack alignItems={"center"} justifyContent={"center"}>
                                        <Paper elevation={1} >
                                            <Card sx={{ height: 200, width: 250, position: "relative" }}>

                                                <CardMedia title="fis" sx={{ height: 150, width: "100%" }} image="https://static.businessworld.in/article/article_extra_large_image/1611057847_liEUmU_1_10_.png" />
                                                <CardContent>
                                                    <Typography textTransform={"uppercase"} variant='subtitle2' textAlign={"center"} component={"p"}>Care</Typography>
                                                    {/* <Typography textTransform={"uppercase"} fontSize={"10px"} variant='caption' textAlign={"center"} component={"span"} color={"primary"} >More Plans</Typography> */}

                                                </CardContent>
                                            </Card>
                                            <Box sx={{ m: 1 }}>
                                                <Button sx={{ fontSize: "10px" }} fullWidth onClick={() => setToggleHide(!toggleHide)} startIcon={toggleHide ? <Visibility /> : <VisibilityOff />} variant="contained" focusRipple color="primary" size='small' >
                                                    {toggleHide ? "Hide " : "Show"} 10 More Plans
                                                </Button>
                                            </Box>
                                        </Paper>

                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={9} p={2} >
                                    <Stack mt={1} alignItems={"flex-start"} justifyContent={"center"} >
                                        <Paper elevation={1} sx={{ minWidth: "100%", p: 2 }}>
                                            <Grid container spacing={1} >
                                                <Grid item xs={8} >
                                                    <Box>
                                                        <Typography variant="subtitle1" color="initial"> Care Supreme Direct</Typography>
                                                        <Typography variant="caption" color="primary"> Great Plan</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> No Room rent limit</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Restoration of cover</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Renewal Bonus</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Pre-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Post-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}> <Button sx={{ fontSize: "10px" }} startIcon={<Visibility fontSize='8px' />} variant="text" focusRipple color="success" size='small' >
                                                            View All Features
                                                        </Button></Typography>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button sx={{ fontSize: "10px" }} startIcon={<CompareArrows />} variant="contained" focusRipple color="primary" size='small' >
                                                            Add to Compare
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant='caption' color={"grey"} component={"p"}>Cashless Hospitals</Typography>
                                                        <Typography variant='subtitle1' color={"primary"} component={"p"}>All Hospitals</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography mb={1} variant='caption' color={"grey"} component={"p"}>Cover</Typography>

                                                        <FormControl fullWidth>

                                                            <Select
                                                                size='small'
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}

                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={7}>7 Lac</MenuItem>
                                                                <MenuItem value={10}>10 Lac</MenuItem>
                                                                <MenuItem value={20}>20 Lac</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button startIcon={<Calculate />} fullWidth variant="contained" focusRipple color="primary" size='small' >
                                                            &#8377;798/ Month
                                                        </Button>
                                                        <Typography m={2} variant='caption' color={"grey"} component={"p"}>Annually Amount : <Typography variant='caption' color={"primary"}>&#8377;9574</Typography></Typography>

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Stack>
                                    {toggleHide && <Stack mt={1} alignItems={"flex-start"} justifyContent={"center"} >
                                        <Paper elevation={1} sx={{ minWidth: "100%", p: 2 }}>
                                            <Grid container spacing={1} >
                                                <Grid item xs={8} >
                                                    <Box>
                                                        <Typography variant="subtitle1" color="initial"> Care Supreme Direct</Typography>
                                                        <Typography variant="caption" color="primary"> Great Plan</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> No Room rent limit</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Restoration of cover</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Renewal Bonus</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Pre-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Post-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}> <Button sx={{ fontSize: "10px" }} startIcon={<Visibility fontSize='8px' />} variant="text" focusRipple color="success" size='small' >
                                                            View All Features
                                                        </Button></Typography>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button sx={{ fontSize: "10px" }} startIcon={<CompareArrows />} variant="contained" focusRipple color="primary" size='small' >
                                                            Add to Compare
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant='caption' color={"grey"} component={"p"}>Cashless Hospitals</Typography>
                                                        <Typography variant='subtitle1' color={"primary"} component={"p"}>All Hospitals</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography mb={1} variant='caption' color={"grey"} component={"p"}>Cover</Typography>

                                                        <FormControl fullWidth>

                                                            <Select
                                                                size='small'
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}

                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={7}>7 Lac</MenuItem>
                                                                <MenuItem value={10}>10 Lac</MenuItem>
                                                                <MenuItem value={20}>20 Lac</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button startIcon={<Calculate />} fullWidth variant="contained" focusRipple color="primary" size='small' >
                                                            &#8377;798/ Month
                                                        </Button>
                                                        <Typography m={2} variant='caption' color={"grey"} component={"p"}>Annually Amount : <Typography variant='caption' color={"primary"}>&#8377;9574</Typography></Typography>

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Stack>}

                                </Grid>


                            </Grid>
                            <Divider sx={{ backgroundColor: "#fce1d3" }} />
                            <Grid container>
                                <Grid item xs={0} md={3} p={2} >
                                    <Stack alignItems={"center"} justifyContent={"center"}>
                                        <Paper elevation={1} >
                                            <Card sx={{ height: 200, width: 250, position: "relative" }}>

                                                <CardMedia title="fis" sx={{ height: 150, width: "100%" }} image="https://img.etimg.com/thumb/width-640,height-480,imgsize-8872,resizemode-75,msid-94254046/industry/banking/finance/banking/sbi-acquires-100-pc-stake-in-sbi-global-factors/state-bank-of-india.jpg" />
                                                <CardContent>
                                                    <Typography textTransform={"uppercase"} variant='subtitle2' textAlign={"center"} component={"p"}>Care</Typography>


                                                </CardContent>
                                            </Card>

                                        </Paper>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={9} p={2} >
                                    <Stack mt={1} alignItems={"flex-start"} justifyContent={"center"} >
                                        <Paper elevation={1} sx={{ minWidth: "100%", p: 2 }}>
                                            <Grid container spacing={1} >
                                                <Grid item xs={8} >
                                                    <Box>
                                                        <Typography variant="subtitle1" color="initial"> Care Supreme Direct</Typography>
                                                        <Typography variant="caption" color="primary"> Great Plan</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> No Room rent limit</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Restoration of cover</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Renewal Bonus</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Pre-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}><Check fontSize='10px ' color='success' /> Post-hospitalization coverage</Typography>
                                                        <Typography variant="caption" color="CaptionText" component={"p"}> <Button sx={{ fontSize: "10px" }} startIcon={<Visibility fontSize='8px' />} variant="text" focusRipple color="success" size='small' >
                                                            View All Features
                                                        </Button></Typography>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button sx={{ fontSize: "10px" }} startIcon={<CompareArrows />} variant="contained" focusRipple color="primary" size='small' >
                                                            Add to Compare
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography variant='caption' color={"grey"} component={"p"}>Cashless Hospitals</Typography>
                                                        <Typography variant='subtitle1' color={"primary"} component={"p"}>All Hospitals</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Typography mb={1} variant='caption' color={"grey"} component={"p"}>Cover</Typography>

                                                        <FormControl fullWidth>

                                                            <Select
                                                                size='small'
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}

                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={7}>7 Lac</MenuItem>
                                                                <MenuItem value={10}>10 Lac</MenuItem>
                                                                <MenuItem value={20}>20 Lac</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                    </Box>
                                                    <Box sx={{ mt: 1 }}>
                                                        <Button startIcon={<Calculate />} fullWidth variant="contained" focusRipple color="primary" size='small' >
                                                            &#8377;798/ Month
                                                        </Button>
                                                        <Typography m={2} variant='caption' color={"grey"} component={"p"}>Annually Amount : <Typography variant='caption' color={"primary"}>&#8377;9574</Typography></Typography>

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Stack>


                                </Grid>


                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={3}> 3dasdc</Grid>
                    </Grid>


                </Grid>

            </Grid>
        </Container>
    )
}

export default PlanList