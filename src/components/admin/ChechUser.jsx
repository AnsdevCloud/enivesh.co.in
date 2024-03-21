import { Box, Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useTheme } from '@mui/material/styles';
import { collection, collectionGroup, getDoc, getDocs, where } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { query } from 'firebase/database';
import ExslFileUpload from './ExslFileUplod';
import DocsFileUpload from './DocsFileUpload';
import FilterTable from './PortalElements/FilterTable';
import HeadingBox from '../items/HeadingBox';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ChechUser = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState("");
    const [isAge, setIsAge] = useState();
    const [plans, setPlans] = React.useState([]);
    const [isType, setIsType] = React.useState();

    const handleChangePersan = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(value)
        // FeachFeatureData()
        console.log(personName);


    };
    const handleChangeIsAge = (event) => {
        const {
            target: { value },
        } = event;
        setIsAge(value)


    };
    useEffect(() => {
        if (isAge) {
            FeachFeatureData();
        }
        FeachFeatureData();

    }, [isAge])
    useEffect(() => {
        if (personName) {
            FeachFeatureData();
        }

    }, [personName])



    const FeachFeatureData = async () => {
        const q = query(collection(db, "sumassured"));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id

        }))
        // console.log(data);
        data.map(async (elem) => {
            const postQ = query(collection(db, `sumassured/${elem.id}/companys`))
            const postDetils = await getDocs(postQ)
            const postInff = postDetils.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))



            postInff.map(async (ele) => {
                const postQ = query(collection(db, `sumassured/${elem.id}/companys/${ele.id}/coveragePremium`))
                const postF = query(collection(db, `sumassured/${elem.id}/companys/${ele.id}/features`))
                const postDetils = await getDocs(postQ)
                const postInffs = postDetils.docs.map((doc) => ({
                    ...doc.data(), id: doc.id
                }))
                // console.log(postInffs);

                setIsType(postInffs);
                if (personName && isAge) {
                    const filteredData = postInffs.filter(item => item.minAge <= isAge && item.maxAge >= isAge && item.member?.toUpperCase() == personName?.toUpperCase());
                    setPlans(filteredData)
                } else if (isAge) {
                    const filteredData = postInffs.filter(item => item.minAge <= isAge && item.maxAge >= isAge);
                    setPlans(filteredData)
                } else if (personName) {
                    const filteredData = postInffs.filter(item => item.member?.toUpperCase() == personName?.toUpperCase());
                    setPlans(filteredData)
                } else {
                    setPlans(postInffs)
                }

                const featureDetail = await getDocs(postF)
                const featureInfo = featureDetail.docs.map((doc) => ({
                    ...doc.data(), id: doc.id
                }))
                console.log(featureInfo);
            })



        })




    }

    const handdlePretype = async () => {
        const q = query(collectionGroup(db, "SumAssued"), where('minAge', '<=', 20));
        const querySnapshot = await getDocs(q);

        let data = querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
        });
        console.log(data);
    }


    const getNestedCollectionData = async () => {
        const q = query(collectionGroup(db, 'features'), where('name', '==', "Plan Name"));
        const querySnapshot = await getDoc(q);

        const postInffd = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }))
        console.log(postInffd);
    };

    const isMambers = ["Individual", "1a+1c", "1a+2c", "1a+3c", "1a+4c", "2a", "2a+1c", "2a+2c", "2a+3c", "2a+4c"];
    useEffect(() => {
        // FeachFeatureData()
        // getNestedCollectionData();
        // handdlePretype();
    }, [])
    return (
        <Container>
            <Paper elevation={1} sx={{ p: 1, m: 1 }}>
                <HeadingBox colorText={"Check"} defaultText={"Plans"} m={"20px 0"} />
                <Stack p={1} flexDirection={"row-reverse"} alignItems={"center"} justifyContent={"space-between"}>  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"

                >
                    {/* <FormControlLabel value="All" control={<Radio size='small' />} label="ALL" /> */}
                    <FormControlLabel value="retail" control={<Radio size='small' />} label="RETAIL" />
                    <FormControlLabel value="All in one" control={<Radio size='small' />} label="ALL IN ONE" />
                    <FormControlLabel value="hni" control={<Radio size='small' />} label="HNI" />

                </RadioGroup></Stack>

                <Stack flexDirection={'row'} gap={1} alignItems={"center"} justifyContent={"space-between"}>
                    <TextField size='small' label="Age" onChange={handleChangeIsAge} />
                    {/* <TextField size='small' label={"Member"} onChange={handleChangePersan} /> */}

                    <FormControl size='small' fullWidth sx={{ maxWidth: 300 }}>
                        <InputLabel id="demo-simple-select-label">Members</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={personName}
                            label="Member"
                            onChange={(e) => setPersonName(e.target.value)}
                        >
                            {isMambers && isMambers.map((item, index) => {
                                return <MenuItem key={index} value={item}>{item.toLocaleUpperCase()}</MenuItem>
                            })}
                            {/* <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                    <Typography mr={2} variant='caption' component={'span'}>Search Result : {plans?.length}</Typography>

                </Stack>

                <Box>
                    <Typography mt={2} textAlign={"center"}>Plans</Typography>
                    <FilterTable data={plans} />

                </Box>
            </Paper>
        </Container>
    )
}

export default ChechUser