import { Alert, Box, Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useTheme } from '@mui/material/styles';

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
    const [catatrgory, setCatatrgory] = useState();
    const [categoryVal, setCategoryVal] = useState();

    const [alertData, setAlertData] = useState({
        active: false,
        type: "error",
        msg: "Alert Data Not Set ...!"
    });
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


    const [IsFeature, setFeaturesData] = useState();










    const isMambers = ["Individual", "1a+1c", "1a+2c", "1a+3c", "1a+4c", "2a", "2a+1c", "2a+2c", "2a+3c", "2a+4c"];
    useEffect(() => {
        // FeachFeatureData()
        // getNestedCollectionData();
        // handdlePretype();
        // FilterByCategory()
        // handleEas();

    }, [categoryVal])

    // console.log(categoryVal);
    return (
        <Container>

            <Paper elevation={1} sx={{ p: 1, m: 1 }}>
                {alertData?.active && <Alert severity={alertData?.type}>{alertData?.msg}</Alert>}
                <HeadingBox colorText={"Check"} defaultText={"Plans"} m={"20px 0"} />
                <Stack p={1} flexDirection={"row-reverse"} alignItems={"center"} justifyContent={"space-between"}>  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"

                >
                    {
                        catatrgory?.map((item) => {
                            return <FormControlLabel key={item.id} value={item.id} onChange={(e) => setCategoryVal(e.target.value)} control={<Radio size='small' />} label={item.name} />

                        })
                    }

                </RadioGroup></Stack>

                <Stack flexDirection={'row'} gap={1} alignItems={"center"} justifyContent={"space-between"}>
                    <TextField size='small' label="Age" type='number' onChange={handleChangeIsAge} />
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
                    <Typography mr={2} variant='caption' component={'span'} color={`green`}>Search Result : {plans?.length}</Typography>

                </Stack>

                <Box>
                    <Typography mt={2} textAlign={"center"} variant='subtitle1 ' fontWeight={500} component={"h4"}>Plans</Typography>
                    <FilterTable data={plans} />

                </Box>
                <Box>
                    <Typography mt={2} textAlign={"center"} variant='subtitle1 ' fontWeight={500} component={"h4"}>Features</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600, color: "orangered", maxWidth: 100 }}>S.No.</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Feature Name</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Feature Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                IsFeature?.map((itam, index) => {
                                    return <TableRow key={index}>
                                        <TableCell sx={{ fontWeight: 600, color: "orangered", maxWidth: 50 }} >{itam?.sid}</TableCell>
                                        <TableCell >{itam?.featureName}</TableCell>
                                        <TableCell >{itam?.featureValue}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>

                </Box>
            </Paper>
        </Container>
    )
}

export default ChechUser