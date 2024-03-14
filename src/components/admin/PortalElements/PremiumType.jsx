import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, Select, Stack, TextField, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeadingBox from '../../items/HeadingBox'
import { Add, CloudUpload, Upload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const PremiumType = ({ data, postMsg, SheetVal, onChange, onExcelUpload, onFile, isLoading, onSheetVal, onAdd, boolean, value, addFieldVal, onActive }) => {


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

    const [addField, setField] = useState(false);
    const [uploadExcel, setUploadExcel] = useState(false);
    const [fileUpload, setFileUpload] = useState(false);





    useEffect(() => {
        setField(boolean)
    }, [boolean])
    return (
        <>
            <HeadingBox m={"10px 0"} colorText={"Select"} defaultText={"Premium Type"} />

            <Stack justifyContent={"center"} gap={2} p={2} maxWidth={"50%"} margin={"20px auto"} component={Paper} elevation={1}>
                <Button onClick={() => setUploadExcel(!uploadExcel)} color={uploadExcel ? "secondary" : "primary"}>{uploadExcel && "Cancel"} Upload Excel</Button>

                {
                    uploadExcel && <>
                        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} gap={2}>
                            <Button
                                fullWidth
                                component="label"
                                role={'button'}
                                variant="outlined"
                                tabIndex={-1}

                                startIcon={<Add />}
                                disabled={SheetVal ? false : true}
                            >
                                Select Excel File
                                <VisuallyHiddenInput type="file" onChange={onFile} />
                            </Button>
                            <Box>
                                <TextField size='small' type='number' onChange={onSheetVal} name='sheet' id="outlined-basic" label="Sheet No." variant="outlined" />

                            </Box>
                        </Stack>


                    </>

                }

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', gap: 2 }}>
                    {/* <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"

                        row

                    >
                        {
                            data?.map((item) => {
                                return <FormControlLabel onChange={onChange} key={item?.id} checked={item?.id === (value ? value[0] : "")} value={item.id} control={<Radio />} label={item.name} />
                            })

                        }

                    </RadioGroup> */}
                    {/* <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"} gap={2}>
                        {addField && <Button size='small' color='secondary' onClick={() => setField(!addField)}>Close</Button>}{addField && <TextField size='small' onChange={onChange} value={addFieldVal} name='newitem' fullWidth id="outlined-basic" label="Enter Name" variant="outlined" />}
                        <Box sx={{ width: "200px" }}>{addField ? <Button size='small' onClick={onAdd} variant='outlined' fullWidth>Push Option</Button> : <Button size='small' onClick={() => setField(onActive)} variant='outlined' fullWidth>Create Option</Button>}</Box>
                    </Stack> */}

                </Box>

            </Stack>


        </>

    )
}

export default PremiumType