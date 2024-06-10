// import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { Avatar, Container, FormControlLabel, CardActionArea, TextField, Grid, Button, Paper, CardContent, Stack, Box, Typography, Card, IconButton, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setInsForm } from '../../../reduxapp/features/userdata/userSlice';

const Step1 = ({ onNext, onBack }) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
    const dynamicStyles = {
        ...matchesSM && { display: "none" },

    }
    const globelForm = useSelector((state) => state.user.insuranceForm);
    const [value, setValue] = useState([]);
    const [currentIndex, setCurrentIndex] = useState();
    const [isContinue, setContinue] = useState(true)
    const [Sons, setSons] = useState(0);
    const [Daughter, setDaughter] = useState(0);


    const personsMale = [{
        id: 1,
        name: 'Self',
        gender: "Male",
        image: "/images/planicon/husband.svg",
        cat: "Self",
        age: 0,
        active: true


    }, {
        id: 2,
        name: 'wife',
        cat: "Self",
        age: 0,
        image: "/images/female.svg",
        active: false,


    },
    {
        id: 3,
        name: 'Son',
        cat: "Self",
        code: "boy",
        age: 0,
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 4,
        name: 'Son2',
        cat: "Self",
        age: 0,
        code: "boy",
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 5,
        name: 'Son3',
        cat: "Self",
        age: 0,
        code: "boy",
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 6,
        name: 'Son4',
        cat: "Self",
        age: 0,
        code: "boy",
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 7,
        name: 'Daughter',
        cat: "Self",
        childs: [],
        age: 0,
        code: "girl",
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 8,
        name: 'Daughter2',
        cat: "Self",
        childs: [],
        age: 0,
        code: "girl",
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 9,
        name: 'Daughter3',
        cat: "Self",
        childs: [],
        code: "girl",
        age: 0,
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 10,
        name: 'Daughter4',
        cat: "Self",
        childs: [],
        age: 0,
        code: "girl",
        image: "/images/planicon/girl.svg", active: false,
    },
    {
        id: 11,
        cat: "Parents&Parentsinlaw",
        name: 'Mother',
        image: "/images/planicon/mother.svg",
        active: false,
        age: 0,

    }, {
        id: 12,
        name: 'Father',
        cat: "Parents&Parentsinlaw",
        image: "/images/planicon/father.svg",
        active: false,
        age: 0,
    },
    {
        id: 13,
        name: 'Grandfather',
        cat: "GrandParents",
        age: 0,
        image: "/images/planicon/grandfather.svg", active: false,
    }, {
        id: 14,
        name: 'Grandmother',
        cat: "GrandParents",
        age: 0,
        image: "/images/planicon/grandmother.svg", active: false,

    }, {
        id: 15,
        cat: "Parents&Parentsinlaw",
        name: 'Mother-in-law',
        image: "/images/planicon/wife.svg", active: false,
        age: 0,
    }, {
        id: 16,
        cat: "Parents&Parentsinlaw",
        name: 'Father-in-law',
        age: 0,
        image: "/images/planicon/fatherinlow.svg", active: false,
    }];
    const personsFemale = [{
        id: 1,
        name: 'Self',
        gender: "Female",
        image: "/images/female.svg",
        cat: "Self",
        age: 0,
        active: true


    }, {
        id: 2,
        name: 'Husband',
        cat: "Self",
        age: 0,
        image: "/images/planicon/husband.svg",
        active: false,


    },
    {
        id: 3,
        name: 'Son',
        cat: "Self",
        age: 0,
        code: "boy",
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 4,
        name: 'Son2',
        cat: "Self",
        age: 0,
        code: "boy",
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 5,
        name: 'Son3',
        cat: "Self",
        code: "boy",
        age: 0,
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 6,
        name: 'Son4',
        cat: "Self",
        code: "boy",
        age: 0,
        childs: [],
        image: "/images/planicon/boy.svg",
        active: false,


    }, {
        id: 7,
        name: 'Daughter',
        cat: "Self",
        childs: [],
        age: 0,
        code: "girl",
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 8,
        name: 'Daughter2',
        cat: "Self",
        childs: [],
        code: "girl",
        age: 0,
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 9,
        name: 'Daughter3',
        cat: "Self",
        childs: [],
        code: "girl",
        age: 0,
        image: "/images/planicon/girl.svg", active: false,
    }, {
        id: 10,
        name: 'Daughter4',
        code: "girl",
        cat: "Self",
        childs: [],
        age: 0,
        image: "/images/planicon/girl.svg", active: false,
    },
    {
        id: 11,
        cat: "Parents&Parentsinlaw",
        name: 'Mother',
        image: "/images/planicon/mother.svg",
        active: false,
        age: 0,

    }, {
        id: 12,
        name: 'Father',
        cat: "Parents&Parentsinlaw",
        image: "/images/planicon/father.svg",
        active: false,
        age: 0,
    },
    {
        id: 13,
        name: 'Grandfather',
        cat: "GrandParents",
        age: 0,
        image: "/images/planicon/grandfather.svg", active: false,
    }, {
        id: 14,
        name: 'Grandmother',
        cat: "GrandParents",
        age: 0,
        image: "/images/planicon/grandmother.svg", active: false,

    }, {
        id: 15,
        cat: "Parents&Parentsinlaw",
        name: 'Mother-in-law',
        image: "/images/planicon/wife.svg", active: false,
        age: 0,
    }, {
        id: 16,
        cat: "Parents&Parentsinlaw",
        name: 'Father-in-law',
        age: 0,
        image: "/images/planicon/fatherinlow.svg", active: false,
    }];
    const [formData, setFormData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (globelForm) {
            setContinue(false);

        }
        else {
            return;
        }
    }, [])

    const handleSetForm = (name) => {
        if (name === "Male") {
            setContinue(false)
            setFormData(personsMale)
        } else if (name === "Female") {
            setContinue(false)
            setFormData(personsFemale)

        }
    }

    const handleChange = ({ item, index }) => {


        const updateForm = [...formData];
        const ind = updateForm.findIndex(df => df.id === item?.id);
        const indS = updateForm.findIndex(df => df.name === "Son");
        const indD = updateForm.findIndex(df => df.name === "Daughter");
        setCurrentIndex(ind)

        if (updateForm[ind].active === false) {
            if (Sons === 4) {
                updateForm[indD] = {
                    ...item,
                    active: false
                };
            } else if (Daughter === 4) {
                updateForm[indS] = {
                    ...item,
                    active: false
                };

            } else {
                updateForm[ind] = {
                    ...item,
                    active: true
                };
            }

        } else {
            updateForm[ind] = {
                ...item,
                active: false
            };
        }
        setFormData(updateForm);


    }

    const AddChilds = (item) => {
        console.log(item);
        if (item === 3) {
            let id = (item + Sons);
            const updateForm = [...formData];
            const ind = updateForm.findIndex(df => df?.id === id);

            const data = updateForm.find(df => df.id === id);
            updateForm[ind] = {
                ...data,
                active: true
            };
            setFormData(updateForm)

        } else {
            let id = (item + Daughter);
            const updateForm = [...formData];
            const ind = updateForm.findIndex(df => df?.id === id);

            const data = updateForm.find(df => df.id === id);
            updateForm[ind] = {
                ...data,
                active: true
            };
            setFormData(updateForm)

        }

    }

    const RemoveChilds = (item) => {
        if (item <= 3) {
            let id = (item + Sons - 1);
            const updateForm = [...formData];
            const ind = updateForm.findIndex(df => df?.id === id);
            const data = updateForm.find(df => df.id === id);
            updateForm[ind] = {
                ...data,
                active: false
            };
            setFormData(updateForm)

        } else {
            let id = (item + Daughter - 1);
            const updateForm = [...formData];
            const ind = updateForm.findIndex(df => df?.id === id);

            const data = updateForm.find(df => df.id === id);
            updateForm[ind] = {
                ...data,
                active: false
            };
            setFormData(updateForm)

        }

        setFormData(updateForm);
    }


    const handleIncrement = (item) => {
        let Qty = (Daughter + Sons);
        if (item.name === "Son") {

            if (Qty >= 0 && Qty <= 4) {
                if (Qty <= 3 && Daughter !== 3) {

                    AddChilds(item?.id)
                    setSons(Sons + 1);




                }
            }
        } else {
            if ((Daughter + Sons) <= 3) {

                if (Daughter <= 3 && Sons !== 3) {
                    AddChilds(item.id)
                    setDaughter(Daughter + 1)

                }
            } else {

            }


        }
    }

    const handleDicrement = (item) => {
        if (item.name == "Son") {
            if (Sons >= 1) {
                setSons(Sons - 1)
                RemoveChilds(item.id)
                if (Sons <= 1) {
                    const updateForm = [...formData];
                    const ind = updateForm.findIndex(df => df.name === "Son");
                    const data = updateForm.find(df => df.name === "Son");

                    if (updateForm[ind]) {
                        updateForm[ind] = {
                            ...data,
                            active: false,
                        };

                        setFormData(updateForm);
                    } else {
                        return;
                    }


                }
            }
        } else {
            if (Daughter >= 1) {
                setDaughter(Daughter - 1)
                RemoveChilds(item.id)
                if (Daughter <= 1) {

                    const updateForm = [...formData];
                    const ind = updateForm.findIndex(df => df.name === "Daughter");
                    const data = updateForm.find(df => df.name === "Daughter");

                    if (updateForm[ind]) {
                        updateForm[ind] = {
                            ...data,
                            active: false,
                        };

                        setFormData(updateForm);
                    } else {
                        return;
                    }


                }
            }
        }
    }

    const handleNext = () => {
        onNext()
        dispatch(setInsForm(formData))
    }
    useEffect(() => {
        const updateForm = [...formData];
        const dataD = updateForm.find(df => df.name === "Daughter");
        if (dataD?.active === true) {
            if (Daughter === 0) {
                setDaughter(1);
            } else {
                return;
            }
        } else {
            setDaughter(0);
        }

    }, [formData])

    useEffect(() => {
        const updateForm = [...formData];
        const dataS = updateForm.find(df => df.name === "Son");
        if (dataS?.active === true) {
            if (Sons === 0) {
                setSons(1);
            } else {
                return;
            }
        } else {
            setSons(0);
        }


    }, [formData])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={formData.length > 0 ? 12 : 12} md={formData.length > 0 ? 2 : 12}>
                    <Stack flexDirection={formData.length > 0 ? "column" : "row"} justifyContent={"center"} alignItems={"center"} gap={2}

                        sx={{
                            [theme.breakpoints.down("md")]: {
                                flexDirection: formData.length > 0 ? "row" : "row"
                            }
                        }}>

                        <Paper elevation={formData.length > 0 ? formData[0]?.gender === "Male" ? 1 : 0 : 1} onClick={() => handleSetForm("Male")} sx={{
                            p: 2, [theme.breakpoints.down("md")]: {
                                width: formData.length > 0 ? 100 : 200,
                                height: formData.length > 0 ? 100 : 200
                            }, [theme.breakpoints.down("sm")]: {
                                width: formData.length > 0 ? 100 : 100,
                                height: formData.length > 0 ? 100 : 100
                            }, cursor: "pointer", width: formData.length > 0 ? 100 : 300, height: formData.length > 0 ? 100 : 300, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", backgroundColor: formData[0]?.gender === "Male" ? theme.palette.primary.light : ""
                        }}>

                            <ImgBox src='/images/planicon/husband.svg' />

                            <Typography mt={formData[0]?.gender === "Male" ? 0 : 0} variant='subtitle1' component={"p"}>Male</Typography>
                        </Paper>
                        <Paper elevation={formData.length > 0 ? formData[0]?.gender === "Female" ? 1 : 0 : 1} onClick={() => handleSetForm("Female")} sx={{
                            p: 2, [theme.breakpoints.down("md")]: {
                                width: formData.length > 0 ? 100 : 200,
                                height: formData.length > 0 ? 100 : 200
                            }, [theme.breakpoints.down("sm")]: {
                                width: formData.length > 0 ? 100 : 100,
                                height: formData.length > 0 ? 100 : 100
                            }, width: formData.length > 0 ? 100 : 300, height: formData.length > 0 ? 100 : 300, cursor: "pointer", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", backgroundColor: formData[0]?.gender === "Female" ? theme.palette.primary.light : ""
                        }}>
                            <ImgBox src='/images/female.svg' />
                            <Typography mt={formData[0]?.gender === "Female" ? 0 : 0} variant='subtitle1' component={"p"}>Female</Typography>
                        </Paper>

                    </Stack>
                </Grid>
                {formData.length > 0 && <Grid item xs={12} md={10} >
                    <Grid container gap={1}  >
                        <Grid item xs={12} sm={5} md={3.5}>
                            <Typography mt={1} mb={2} variant='subtitle1' textAlign={"center"} fontWeight={600} component={"p"}>Self</Typography>
                            <Grid container spacing={1}>
                                {
                                    formData?.filter(item => item.cat === 'Self').map((item, index) => {
                                        return <React.Fragment>
                                            {item?.name === "Son2" || item?.name === "Son3" || item?.name === "Son4" || item?.name === "Daughter2" || item?.name === "Daughter3" || item?.name === "Daughter4" ? "" : <Grid key={index} item xs={12}  >
                                                <CardActionArea>

                                                    <Card sx={{ backgroundColor: item?.active === true ? theme.palette.primary.light : "" }} >
                                                        <CardContent onClick={() => handleChange({ item, index })}>
                                                            <Stack justifyContent={"flex-start"} flexDirection={"row"} alignItems={"center"} gap={3}>
                                                                <Avatar src={item?.image} />
                                                                <Typography component={"p"}> {item?.name}</Typography>

                                                            </Stack>

                                                        </CardContent>
                                                        {item?.active === true && <>
                                                            {item?.name === "Son" || item?.name === "Daughter" ? <Box sx={{ backgroundColor: theme.palette.primary.contrastText, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                                                <IconButton size='small' aria-label="" onClick={() => handleIncrement(item)} >
                                                                    <Add fontSize='5px' />
                                                                </IconButton>
                                                                <Typography variant='caption' component={"span"}>{item?.name === "Son" ? Sons : Daughter}</Typography>
                                                                <IconButton size='small' aria-label="" onClick={() => handleDicrement(item)} >
                                                                    <Remove fontSize='5px' />
                                                                </IconButton>
                                                            </Box> : ""}
                                                        </>}
                                                    </Card>
                                                </CardActionArea>
                                            </Grid>}
                                        </React.Fragment>
                                    })
                                }
                            </Grid>

                        </Grid>
                        <Grid itemxs={12} sm={5} md={3.5}>
                            <Typography mt={1} mb={2} variant='subtitle1' textAlign={"center"} fontWeight={600} component={"p"}>Parents & Parents-in-law</Typography>

                            <Grid container spacing={2}>
                                {
                                    formData?.filter(item => item.cat === 'Parents&Parentsinlaw').map((item, index) => {
                                        return <Grid key={index} onClick={() => handleChange({ item, index })} item xs={12}  >
                                            <CardActionArea>

                                                <Card sx={{ backgroundColor: item?.active === true ? theme.palette.primary.light : "" }}>
                                                    <CardContent >
                                                        <Stack justifyContent={"flex-start"} flexDirection={"row"} alignItems={"center"} gap={3}>
                                                            <Avatar src={item?.image} />

                                                            <Typography component={"p"}> {item?.name}</Typography>
                                                        </Stack>
                                                    </CardContent>

                                                </Card>
                                            </CardActionArea>
                                        </Grid>
                                    })
                                }
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5}>
                            <Typography mt={1} mb={2} variant='subtitle1' textAlign={"center"} fontWeight={600} component={"p"}>Grand Parents</Typography>

                            <Grid container spacing={2}>
                                {
                                    formData?.filter(item => item.cat === 'GrandParents').map((item, index) => {
                                        return <Grid key={index} onClick={() => handleChange({ item, index })} item xs={12}  >
                                            <CardActionArea>

                                                <Card sx={{ backgroundColor: item?.active === true ? theme.palette.primary.light : "" }}>
                                                    <CardContent >
                                                        <Stack justifyContent={"flex-start"} flexDirection={"row"} alignItems={"center"} gap={3}>
                                                            <Avatar src={item?.image} />

                                                            <Typography component={"p"}> {item?.name}</Typography>
                                                        </Stack>
                                                    </CardContent>

                                                </Card>
                                            </CardActionArea>
                                        </Grid>
                                    })
                                }
                            </Grid>

                        </Grid>

                    </Grid>


                </Grid>}
                <Grid item xs={12} >
                    <Stack flexDirection={"row"} justifyContent={"center"} p={2} gap={2} >
                        <Button onClick={onBack} disabled={(isContinue) ? true : false} variant='contained' color='secondary' fullWidth >Back</Button>
                        <Button disabled={isContinue ? true : false} onClick={handleNext} variant='contained' color='primary' fullWidth >Continue </Button>

                    </Stack>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Step1
const ImgBox = styled.img`
width: 100%;
height: 100%;
max-width: 200px;
max-height: 200px;

  
`;