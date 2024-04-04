import { Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeadingBox from '../../items/HeadingBox'
import { MdAdd } from 'react-icons/md'
import { Add, CloudUpload, Edit, Update } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import styled from 'styled-components'

const Features = ({ value, onChange, onSheetVal, onFile, onPost, SheetVal, onStateUpdate, data, onEdit, onUpdate, updateItem }) => {

    const Option = [
        {
            name: "Plan Name",
            label: "planName"
        },
        {
            name: "Sum Insured",
            label: "sumInsured"
        }, {
            name: "Room Rent",
            label: "roomRent"
        },
        {
            name: "ICU Limit",
            label: "icuLimit"
        },
        {
            name: "Pre Hospitalization",
            label: "preHospitalization"
        }, {
            name: "Post Hospitalization",
            label: "postHospitalization"
        },
        {
            name: "Road Ambulance",
            label: "roadAmbulance"
        },
        {
            name: "Air Ambulance",
            label: "airAmbulance"
        },
        {
            name: "Day Care",
            label: "dayCare"
        }, {
            name: "Domiciliary Treatment",
            label: "domiciliaryTreatment"
        },
        {
            name: "Health Check Up",
            label: "healthCheckup"
        },
        {
            name: "Organ Donor",
            label: "organDonor"
        },
        {
            name: "Refill Restore Reload Recharge",
            label: "refillRestoreReloadRecharge"
        },
        {
            name: "No Claim Bonus",
            label: "noClaimBonus"
        },
        {
            name: "AYUSH Benefit",
            label: "AYUSHBenefit"
        },
        {
            name: "Initial Waiting Period",
            label: "initialWaitingPeriod"
        },
        {
            name: "specific DiseaseWaiting",
            label: "initialWaitingPeriod"
        },
        {
            name: "Pre Existing Waiting",
            label: "preExistingWaiting"
        },
        {
            name: "Co Payments & Sub Limits",
            label: "coPayments&SubLimits"
        },
    ]

    const [fieled, setfieled] = useState(false);
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
    const handleAdd = () => {
        setfieled(!fieled)
    }
    const [addField, setField] = useState(false);
    const [uploadExcel, setUploadExcel] = useState(false);
    const [fileUpload, setFileUpload] = useState(false);



    useEffect(() => {
        console.log(value);
    }, [onStateUpdate])

    return (
        <Box component={Paper} elevation={1} sx={{ maxWidth: "60%", m: "10px auto" }}>
            <HeadingBox m={"10px 0"} titleTag={"Step - 3"} colorText={"Upload"} defaultText={"Plan Features"} />
            <Stack justifyContent={"center"} gap={2} p={2} margin={"0px auto"} component={Paper} elevation={1}>
                <Button variant='contained' sx={{ maxWidth: "50%", m: "0 auto" }} size='small' onClick={() => setUploadExcel(!uploadExcel)} color={uploadExcel ? "grey" : "info"}>{uploadExcel && "Cancel"} Features Excel Upload </Button>

                {
                    uploadExcel && <>
                        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} gap={2}>

                            <Button
                                fullWidth
                                component="label"
                                role={'button'}
                                variant="outlined"
                                tabIndex={-1}
                                size='small'
                                startIcon={<Add />}
                                disabled={SheetVal ? false : true}
                            >
                                Select Excel File
                                <VisuallyHiddenInput type="file" onChange={onFile} />
                            </Button>

                            <TextField size='small' type='number' onChange={onSheetVal} name='sheet' id="outlined-basic" label="Sheet No." variant="outlined" />

                        </Stack>

                    </>

                }

                {/* <Button color={fieled ? "secondary" : "success"} variant='outlined' onClick={handleAdd}>Add New Feature</Button> */}
                {fieled && <Box>
                    {data?.map((item) => {
                        return <Stack key={item.id} flexDirection={'row'} gap={3} p={2}>

                            <FormControlLabel sx={{ width: 300 }} required control={<Checkbox checked onChange={onChange} name={item.name} />} label={item.name} />
                            <TextField size='small' InputProps={{
                                readOnly: true,
                            }}
                                name={item.label} value={item.value} fullWidth id="outlined-basic" label="Feature Value" variant="outlined" />
                            <Button startIcon={<Edit />} size='small' color='secondary' onClick={(e) => onEdit(item.id)} />

                        </Stack>
                    })}
                    <Stack flexDirection={'row'} gap={3} p={2}>
                        <TextField size='small' onChange={onChange} name='featureName' value={value?.featureName ? value?.featureName : ""} fullWidth id="outlined-basic" label="Feature Name" variant="outlined" />
                        <TextField size='small' onChange={onChange} name='featureValue' value={value?.featureValue ? value?.featureValue : ""} fullWidth id="outlined-basic" label="Feature Value" variant="outlined" />
                        {updateItem ? <Button startIcon={<Update />} size='small' color='secondary' disabled={(value?.featureName && value?.featureValue) ? false : true} onClick={() => onUpdate(value?.id)} /> :
                            <Button startIcon={<Add />} size='small' color='secondary' disabled={(value?.featureName && value?.featureValue) ? false : true} onClick={onPost} />}


                    </Stack>
                </Box>}
            </Stack>







        </Box>
    )
}

export default Features